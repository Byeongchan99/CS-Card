---
title: IEnumerable로 순회할 때 열거자 박싱은 호출자와 컬렉션 중 어디서 일어나는가
tags: ["C#", 컬렉션, 박싱]
related: ["List를-IEnumerable-필드로-선언하면-foreach에서-GC-Alloc이-생기는-이유", "IEnumerable을-구현하지-않은-타입에서도-foreach가-컴파일되는-이유", "foreach의-Dispose-호출이-struct-열거자를-박싱하지-않는-이유", "struct-열거자를-메서드에-값으로-넘기면-순회-상태가-갈라지는-이유"]
parent: IEnumerable을 구현하지 않은 타입에서도 foreach가 컴파일되는 이유
date: 2026-07-29
result: 맞음
status: 완성
---

## 질문
`List<T>`를 `IEnumerable<T>`로 받아 foreach를 돌리면 열거자가 박싱된다. 그 박스를 실제로 만드는 IL은 순회하는 쪽 메서드에 있는가, `List<T>` 내부에 있는가?

## 핵심 답변
`List<T>` 내부에 있다. `List<T>`는 명시적 인터페이스 구현을 써서 반환 타입만 다른 GetEnumerator를 여러 개 갖고 있고, 그중 `IEnumerator<T>`를 반환하는 명시적 구현이 값 형식 열거자를 참조 타입 반환 슬롯에 넣으면서 박싱한다. 세 메서드의 본문은 글자 그대로 같고 반환 타입만 다르다. 따라서 호출자 메서드의 IL에는 `box` 명령이 없고, `List<T>`의 명시적 구현 안에 있다.

## 정리

### 내부 동작
```csharp
public struct Enumerator : IEnumerator<T> { ... }

// 패턴 경로 - 정적 타입이 List<T>일 때 선택됨
public Enumerator GetEnumerator()
    => new Enumerator(this);                  // 반환 타입이 struct → box 없음

// 인터페이스 경로 - 정적 타입이 IEnumerable<T>일 때 선택됨
IEnumerator<T> IEnumerable<T>.GetEnumerator()
    => new Enumerator(this);                  // 참조 타입 슬롯 → 여기서 box

IEnumerator IEnumerable.GetEnumerator()
    => new Enumerator(this);                  // 여기서도 box
```

### 왜 명시적 구현인가
인터페이스를 암시적으로 구현하면 그 멤버는 public이 되어야 하고, 그러면 반환 타입만 다른 `GetEnumerator()`를 하나 더 만들 수 없다. C#은 반환 타입만 다른 오버로드를 허용하지 않기 때문이다. 명시적 구현은 public이 아니어도 되고 인터페이스로 캐스팅해야만 접근 가능하므로, 이름 충돌 없이 두 갈래를 공존시킬 수 있다. 결과적으로 "인터페이스로 캐스팅한 호출자만 박싱 비용을 낸다"는 구조가 만들어진다.

### 흔한 오해/함정
호출자가 struct를 받아서 자기 쪽에서 박싱한다고 생각하기 쉽지만, 그렇지 않다. 값 형식을 참조 타입 반환 슬롯에 넣는 시점에 이미 박스가 만들어지므로 호출자는 처음부터 힙 객체의 참조를 받는다. 박싱 비용은 힙 할당 하나에서 끝나지 않고 열거자 상태 전체를 상자 안으로 복사하는 비용도 포함한다.

## 꼬리 질문
- [[foreach의 Dispose 호출이 struct 열거자를 박싱하지 않는 이유]]
