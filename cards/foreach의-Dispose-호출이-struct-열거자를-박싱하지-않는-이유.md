---
title: foreach의 Dispose 호출이 struct 열거자를 박싱하지 않는 이유
tags: ["C#", 박싱, 컴파일러]
related: ["IEnumerable로-순회할-때-열거자-박싱은-호출자와-컬렉션-중-어디서-일어나는가", "List를-IEnumerable-필드로-선언하면-foreach에서-GC-Alloc이-생기는-이유", "IEnumerable을-구현하지-않은-타입에서도-foreach가-컴파일되는-이유", "Setup이-끝난-뒤에도-람다가-지역-변수를-계속-쓸-수-있는-이유"]
parent: IEnumerable로 순회할 때 열거자 박싱은 호출자와 컬렉션 중 어디서 일어나는가
date: 2026-07-29
result: 부분
status: 완성
---

## 질문
foreach는 열거자가 `IDisposable`이면 순회가 끝날 때 finally에서 `Dispose()`를 호출한다. `List<T>.Enumerator`는 struct이고 `Dispose()`는 인터페이스에 선언된 메서드인데, 그렇다면 이 호출에서 박싱이 일어나야 하는 것 아닌가? 실제로는 할당이 0인데 어떻게 가능한가?

## 핵심 답변
박싱은 값을 참조 타입 슬롯에 담아야 할 때 필요한 것이지, 인터페이스에 선언된 메서드를 호출한다는 사실만으로 필요해지지는 않는다. 인스턴스 메서드 호출에 필요한 건 `this`가 가리킬 주소뿐이고 스택에 있는 struct에도 주소는 있다. struct가 인터페이스를 구현하면 그 struct 타입 자체에도 해당 메서드가 존재하므로, 정적 타입이 struct로 알려져 있으면 컴파일러는 인터페이스 디스패치를 거치지 않고 그 타입의 메서드를 직접 호출한다. 제네릭처럼 값 형식인지 참조 형식인지 컴파일 타임에 모르는 경우는 IL의 `constrained.` 접두사가 판단을 JIT로 미룬다.

## 정리

### 내부 동작
```
// 정적 타입이 struct일 때 - 주소만 넘기고 직접 호출
ldloca   e
call     instance void List`1/Enumerator<Enemy>::Dispose()

// 정적 타입이 IEnumerator<Enemy>일 때 - 이미 박싱된 힙 객체이므로 추가 박싱 없음
callvirt instance void IDisposable::Dispose()

// 제네릭에서 T가 struct인지 class인지 모를 때
constrained. !!TEnumerator
callvirt     instance void IDisposable::Dispose()
```

`constrained.`가 붙으면 JIT가 실제 타입을 보고 결정한다. 값 형식이면서 그 메서드를 직접 구현하고 있으면 박싱 없이 직접 호출하고, 아니면 박싱한 뒤 가상 호출한다. 덕분에 제네릭 코드도 값 형식에 대해 추가 할당 없이 동작한다.

### 왜 그런가
박싱의 목적은 "참조로 가리켜야 하는 자리에 값을 놓기"다. 인터페이스 변수나 `object` 필드처럼 참조 슬롯에 값 형식을 넣으려면 힙에 상자를 만들어 값을 복사하는 수밖에 없다. 반면 메서드 호출은 대상의 주소만 있으면 성립하므로 상자가 필요 없다. 인터페이스 경유 호출이 박싱을 유발한다고 뭉뚱그려 기억하면 이 구분이 흐려진다.

### 트레이드오프
C# 명세는 열거자 타입이 값 형식이면서 `IDisposable`을 구현하면 finally에서 직접 호출하도록, 값 형식인데 구현하지 않으면 dispose 코드를 아예 생성하지 않도록 규정한다. `List<T>.Enumerator.Dispose()`는 본문이 비어 있어서 JIT가 인라인해 통째로 제거한다. 결과적으로 실질 비용은 0이다.

## 꼬리 질문
- (이 갈래의 바닥)
