---
title: 종료 시 OnDestroy에서 지연 생성 싱글턴에 접근하면 유령 오브젝트가 생기는 이유
tags: [유니티, 싱글턴, 생명주기]
related: [유니티의 fake null은 무엇이고 왜 발생하는가]
parent: 싱글턴 OnDestroy에서 Instance를 무조건 null로 만들면 생기는 사고
date: 2026-10-06
result: 부분
status: 완성
---

## 질문
`_instance == null`이면 `FindAnyObjectByType`으로 찾고, 없으면 새 GameObject를 만들어 붙이는 지연 생성 싱글턴이 있다. 다른 컴포넌트가 `OnDestroy`에서 `GameManager.Instance.Unregister(this)`를 호출한다. 플레이 모드를 끄거나 게임을 종료할 때 간헐적으로 정체불명의 GameManager가 남거나 "씬을 닫을 때 정리되지 않은 오브젝트" 경고가 뜨는 이유는 무엇이고, 왜 매번이 아니라 간헐적인가? 어떻게 막는가?

## 핵심 답변
종료 시 GameManager가 먼저 파괴되고 그 뒤에 다른 오브젝트의 OnDestroy가 `Instance`를 부르면, `_instance`에 남은 C# 래퍼를 오버로딩된 `==`가 null로 판정하고 `FindAnyObjectByType`도 파괴된 객체를 찾지 않으므로 getter가 새 GameObject를 만든다. 유니티는 서로 다른 오브젝트의 파괴 순서를 보장하지 않으므로, 순서가 반대일 때는 문제가 없어 간헐적으로만 나타난다. 정리 코드에서는 생성하지 않는 조회(`HasInstance`)만 쓰고, `OnApplicationQuit`에서 종료 플래그를 세워 getter가 종료 중에는 생성하지 않게 한다.

## 정리
### 내부 동작
```
종료 시작 → (순서 비보장) GameManager 파괴 → ScoreUI.OnDestroy
          → Instance getter → _instance == null (fake null) → Find 실패
          → new GameObject("GameManager")  ← 종료 중에 생성된 유령
```

### 실무(게임 개발)에서 생기는 문제와 해결
```csharp
private static GameManager _instance;
private static bool _isQuitting;

// 생성하지 않고 존재 여부만 확인한다
public static bool HasInstance => _instance != null;

private void OnApplicationQuit()
{
    // 종료가 시작되면 이후 getter가 새 인스턴스를 만들지 않게 한다
    _isQuitting = true;
}

// 사용하는 쪽
private void OnDestroy()
{
    if (GameManager.HasInstance) GameManager.Instance.Unregister(this);
}
```
getter 안에서도 `_isQuitting`이면 생성하지 않고 null을 돌려준다. `OnApplicationQuit`은 종료 시 OnDisable/OnDestroy보다 먼저 호출되고, 에디터에서는 플레이 모드를 끌 때도 호출된다. 다만 비활성 GameObject에는 전달되지 않는다. 도메인 리로드를 끈 프로젝트에서는 `_isQuitting`이 다음 플레이까지 true로 남으므로 플레이 진입 시 리셋해야 한다.

### 흔한 오해/함정
더 근본적인 원칙은 OnDestroy에서 다른 오브젝트에 의존하지 않는 것이다. 종료 시 파괴 순서는 코드로 통제할 수 없으므로, 정리 로직이 순서에 기대면 언젠가 터진다.

## 꼬리 질문
- (이 갈래의 바닥)
