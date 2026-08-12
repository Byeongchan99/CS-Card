---
title: IEnumerable을 구현하지 않은 타입에서도 foreach가 컴파일되는 이유
tags: ["C#", 컬렉션, 컴파일러]
related: ["List를-IEnumerable-필드로-선언하면-foreach에서-GC-Alloc이-생기는-이유", "IEnumerable로-순회할-때-열거자-박싱은-호출자와-컬렉션-중-어디서-일어나는가", "foreach의-Dispose-호출이-struct-열거자를-박싱하지-않는-이유", "struct-열거자를-메서드에-값으로-넘기면-순회-상태가-갈라지는-이유", "Setup이-끝난-뒤에도-람다가-지역-변수를-계속-쓸-수-있는-이유"]
parent: List를 IEnumerable 필드로 선언하면 foreach에서 GC Alloc이 생기는 이유
date: 2026-07-29
result: 맞음
status: 완성
---

## 질문
`IEnumerable`도 `IEnumerable<T>`도 구현하지 않은 struct가 있는데 `foreach`가 정상적으로 컴파일된다. 어떤 규칙 때문에 가능한가?

## 핵심 답변
C#의 foreach는 인터페이스 구현 여부가 아니라 **패턴 기반(duck typing)** 으로 바인딩되기 때문이다. 대상의 정적 타입에 public `GetEnumerator()`가 있고 그 반환 타입에 public `MoveNext()`와 `Current`가 있으면, 어떤 인터페이스도 구현하지 않았더라도 foreach가 성립한다. 인터페이스는 조건이 아니라 패턴을 못 찾았을 때의 폴백이다. 이 규칙이 있기 때문에 컬렉션이 값 형식 열거자를 노출해 인터페이스를 거치지 않고 순회할 수 있다.

## 정리

### 개념
```csharp
public struct MyBag
{
    public MyEnumerator GetEnumerator() => new MyEnumerator(...);
}

public struct MyEnumerator
{
    public int Current { get; }
    public bool MoveNext() { ... }
}
// 어떤 인터페이스도 구현하지 않지만 foreach (var x in bag) 이 컴파일된다
```

### 내부 동작
컴파일러는 대상의 정적 타입에서 다음 순서로 탐색한다.

1. public `GetEnumerator()`가 있고 반환 타입에 public `MoveNext()`와 `Current`가 있는가 → 채택 (패턴 경로)
2. 없으면 `IEnumerable<T>`로 변환해 `IEnumerator<T>` 사용
3. 그것도 없으면 비제네릭 `IEnumerable`

즉 패턴이 우선이고 인터페이스가 폴백이다. `List<T>`처럼 둘 다 갖춘 타입은 정적 타입이 무엇이냐에 따라 1번과 2번으로 갈린다.

### 왜 그런가
인터페이스만으로 바인딩하면 열거자 타입이 반드시 `IEnumerator<T>`(참조 타입)로 고정되어 박싱을 피할 방법이 없어진다. 패턴 기반 규칙 덕분에 컬렉션은 구체 타입에 값 형식 열거자를 노출할 수 있고, 컴파일러는 그 구체 타입을 그대로 지역 변수로 잡아 힙 할당 없는 루프를 만든다.

### 트레이드오프
성능을 얻는 대신 정적 타입 표기가 성능에 직접 영향을 주게 됐다. 같은 객체를 인터페이스로 받았느냐 구체 타입으로 받았느냐가 할당 여부를 바꾸는데, 이건 코드만 봐서는 드러나지 않아 프로파일러 없이는 놓치기 쉽다.

## 꼬리 질문
- [[IEnumerable로 순회할 때 열거자 박싱은 호출자와 컬렉션 중 어디서 일어나는가]]
