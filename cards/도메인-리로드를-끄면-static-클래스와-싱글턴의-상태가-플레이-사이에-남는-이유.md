---
title: 도메인 리로드를 끄면 static 클래스와 싱글턴의 상태가 플레이 사이에 남는 이유
tags: [유니티, 싱글턴, 도메인리로드]
related: []
parent: 정적 생성자의 실행 시점과 새 게임 리셋에서 static 클래스와 싱글턴의 차이
date: 2026-10-06
result: 부분
status: 완성
---

## 질문
유니티 에디터의 Enter Play Mode 설정에서 도메인 리로드를 끈 상태다. Gold를 static 클래스에 둔 버전과 순수 C# 싱글턴에 둔 버전을 각각 플레이해 Gold를 340까지 올리고 플레이를 중지한 뒤 다시 플레이하면 Gold는 각각 얼마인가? 빌드한 실행 파일에서 종료 후 재실행하면 어떻게 다른가? "싱글턴은 인스턴스니까 static 클래스와 다를 것"이라는 기대는 맞는가?

## 핵심 답변
에디터에서는 둘 다 340으로 시작한다. 도메인 리로드를 끄면 static 필드의 값이 플레이 사이에 유지되고 정적 생성자도 다시 실행되지 않는다. 싱글턴도 인스턴스를 붙잡는 `Instance`가 static 필드이므로 이전 플레이의 객체를 계속 가리킨다. 빌드에서는 프로세스가 끝나면 런타임이 사라지므로 둘 다 초기값 100으로 시작한다. 즉 싱글턴의 상태 수명도 결국 static 필드, 곧 도메인의 수명을 따르므로 그 기대는 틀렸다.

## 정리
### 개념
유니티 에디터에서 C# 스크립트는 도메인(AppDomain) 안에 로드되어 돈다. 도메인 리로드는 이 실행 환경을 통째로 버리고 새로 만드는 것으로, 기본 설정에서는 플레이 진입 때마다 일어나 static 상태를 지운다. 플레이 진입 속도를 위해 이를 끄면 이전 플레이의 실행 환경을 재사용한다.

### 실무(게임 개발)에서 생기는 문제와 해결
에디터에서만 나고 빌드에서는 재현되지 않아 찾기 어렵다. static 필드는 플레이 진입 시 명시적으로 리셋한다.

```csharp
public sealed class GameState
{
    public static GameState Instance { get; private set; } = new GameState();
    public int Gold = 100;
    private GameState() { }

    // 도메인 리로드가 꺼져 있어도 플레이 진입 시 가장 이른 시점에 호출된다
    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.SubsystemRegistration)]
    private static void ResetStatics()
    {
        Instance = new GameState();
    }
}
```
static 이벤트에 등록한 핸들러도 같은 이유로 중복 등록되므로 함께 해제해야 한다.

### 흔한 오해/함정
도메인 리로드는 에디터 전용 개념이다. 빌드의 "재실행"은 새 프로세스이므로 비교 대상이 아니다.

## 꼬리 질문
- [[도메인 리로드 OFF에서 싱글턴 검사를 is not null로 바꾸면 생기는 일]]
- [[ScriptableObject에 담은 상태가 플레이 종료와 재실행 후 어떻게 되는가 (추론)]]
