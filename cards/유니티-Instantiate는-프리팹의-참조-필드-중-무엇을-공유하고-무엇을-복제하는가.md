---
title: 유니티 Instantiate는 프리팹의 참조 필드 중 무엇을 공유하고 무엇을 복제하는가
tags: [유니티, 프로토타입, 프리팹]
related: [Instantiate와 Destroy는 각각 왜 비싼 연산인가]
parent: 프로토타입의 Clone에서 필드별로 얕은 복사와 깊은 복사를 가르는 기준
date: 2026-09-29
result: 부분
status: 완성
---

## 질문
프리팹과 `Instantiate`는 프로토타입 패턴이다. 아래 `Enemy` 프리팹을 `Instantiate`로 두 개 만들면 각 인스턴스의 `_statData`와 `_muzzle`은 무엇을 가리키는가? 두 필드가 다르게 처리되는 이유는 무엇인가?

```csharp
public class Enemy : MonoBehaviour
{
    [SerializeField] private EnemyStatData _statData;   // ScriptableObject 에셋
    [SerializeField] private Transform _muzzle;          // 이 프리팹의 자식 "Muzzle"
}
```

## 핵심 답변
두 인스턴스의 `_statData`는 같은 ScriptableObject 에셋을 공유하고, `_muzzle`은 각자 자기 복제본 안의 Muzzle 자식을 가리킨다. 결과는 사람이 "정의 데이터는 공유, 인스턴스 소유 객체는 복제"로 설계한 것과 같지만, 유니티는 필드의 의도를 모른다. `Instantiate`의 실제 기준은 참조 대상이 복제되는 계층 안에 있느냐다. 계층 안의 게임 오브젝트·컴포넌트 참조는 복제본의 대응 객체로 다시 연결되고, 계층 밖의 참조는 그대로 남는다.

## 정리
### 내부 동작
`Instantiate`는 대상 게임 오브젝트와 그 자식 계층 전체, 붙은 컴포넌트를 복제한다. 필드 값은 복사하되, 그 값이 복제 계층 내부를 가리키면 복제본 쪽으로 재연결(remap)한다. 텍스처, 메시, 머티리얼, ScriptableObject, 다른 프리팹, 다른 씬 오브젝트처럼 계층 밖을 가리키는 참조는 건드리지 않는다.

`[Serializable]` 일반 C# 클래스 필드는 유니티 오브젝트가 아니라 직렬화 데이터의 일부라서 복제본마다 별도 인스턴스로 복제된다.

### 흔한 오해/함정
"ScriptableObject는 정의 데이터라서 공유된다"는 설명은 결과만 맞다. 공유되는 이유는 의미가 아니라 에셋이 계층 밖에 있기 때문이다. 따라서 ScriptableObject에 런타임 상태를 넣어도 유니티는 막아주지 않는다.

## 꼬리 질문
- [[Instantiate가 참조를 공유할지 다시 연결할지 정하는 기준과 ScriptableObject 런타임 수정의 함정]]
