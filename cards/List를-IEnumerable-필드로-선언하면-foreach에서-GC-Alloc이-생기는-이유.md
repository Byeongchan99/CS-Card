---
title: List를 IEnumerable 필드로 선언하면 foreach에서 GC Alloc이 생기는 이유
tags: ["C#", 컬렉션, 박싱, GC]
related: ["GC-스파이크와-프레임-예산", "IEnumerable을-구현하지-않은-타입에서도-foreach가-컴파일되는-이유", "IEnumerable로-순회할-때-열거자-박싱은-호출자와-컬렉션-중-어디서-일어나는가", "struct-열거자를-메서드에-값으로-넘기면-순회-상태가-갈라지는-이유", "foreach의-Dispose-호출이-struct-열거자를-박싱하지-않는-이유"]
parent:
date: 2026-07-29
result: 맞음
status: 완성
---

## 질문
같은 `new List<Enemy>()`를 담고 있고 순회 코드도 같은데, 필드 선언 타입만 `List<Enemy>`에서 `IEnumerable<Enemy>`로 바꾸면 프로파일러에 프레임당 GC Alloc이 잡힌다. 어느 쪽이 할당하고, 왜 그런가?

## 핵심 답변
`IEnumerable<Enemy>`로 선언한 쪽이 할당한다. `List<T>`는 값 형식인 `List<T>.Enumerator` struct를 반환하는 public `GetEnumerator()`를 따로 갖고 있어서, 정적 타입이 `List<T>`면 foreach가 그 struct 열거자를 지역 변수로 잡고 힙 할당 없이 돈다. 반면 정적 타입이 `IEnumerable<T>`면 foreach는 인터페이스 경로로 내려가 `IEnumerator<T>`를 받게 되고, struct 열거자가 참조 타입 슬롯에 담기면서 박싱된다. 런타임 객체는 양쪽 다 동일한 List 하나지만, 컴파일러는 정적 타입에 존재하지 않는 멤버를 호출할 수 없기 때문에 표기 하나가 할당 여부를 바꾼다.

## 정리

### 왜 그런가
foreach의 바인딩 대상은 런타임 객체가 아니라 **정적 타입**이다. 정적 타입 `IEnumerable<Enemy>`가 가진 멤버는 인터페이스 메서드뿐이고, 그 반환 타입은 `IEnumerator<Enemy>`라는 참조 타입이다. 실제 인스턴스가 struct 열거자를 갖고 있다는 사실은 컴파일 시점에 활용할 수 없다.

### 내부 동작
```csharp
// A: 정적 타입 List<Enemy>
List<Enemy>.Enumerator e = _enemies.GetEnumerator();  // struct, 지역 변수 → 힙 할당 없음
try { while (e.MoveNext()) { ... } }
finally { e.Dispose(); }

// B: 정적 타입 IEnumerable<Enemy>
IEnumerator<Enemy> e = ((IEnumerable<Enemy>)_enemies).GetEnumerator();  // 박싱된 힙 객체
try { while (e.MoveNext()) { ... } }
finally { e?.Dispose(); }
```

### 실무(게임 개발)에서 생기는 문제와 해결
캡슐화를 위해 `IReadOnlyList<T>`나 `IEnumerable<T>`로 노출하는 건 설계상 정석이지만, 그 프로퍼티를 Update에서 foreach로 돌면 프레임당 수십 바이트가 꾸준히 쌓인다. 유니티의 Boehm GC는 세대 구분이 없어 이런 소량 쓰레기도 결국 전체 힙 마킹 비용으로 돌아온다. hot path는 구체 타입 필드로 직접 순회하고 인터페이스는 외부 API 표면에만 쓰거나, 인터페이스를 받아야 한다면 구체 타입으로 패턴 매칭해서 내려보낸다.

```csharp
if (seq is List<Enemy> concrete)
    foreach (var e in concrete) e.Tick();   // 박싱 없음
else
    foreach (var e in seq) e.Tick();        // 폴백
```

같은 함정이 `Dictionary<K,V>`, `HashSet<T>`, `Queue<T>`에도 있다. 전부 struct 열거자를 가지고 있고, 전부 인터페이스로 받는 순간 박싱된다.

### 흔한 오해/함정
"값 형식은 스택에 있으니 할당이 없다"는 설명은 결론만 맞고 근거가 틀렸다. struct가 클래스의 필드면 그 struct는 클래스 인스턴스와 함께 힙에 있다. 값 형식이 어디에 저장되는지는 값 형식이라는 성질이 아니라 그 변수가 어디에 선언됐는지가 결정한다. 여기서 힙 할당이 없는 진짜 이유는 열거자가 foreach의 지역 변수이기 때문이다.

## 꼬리 질문
- [[IEnumerable을 구현하지 않은 타입에서도 foreach가 컴파일되는 이유]]
- [[struct 열거자를 메서드에 값으로 넘기면 순회 상태가 갈라지는 이유]]
