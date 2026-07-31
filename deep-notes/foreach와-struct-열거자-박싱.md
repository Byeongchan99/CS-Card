---
title: foreach와 struct 열거자 박싱 — 정적 타입 하나가 만드는 할당
tags: ["C#", 컬렉션, 박싱, GC]
chains: ["List를-IEnumerable-필드로-선언하면-foreach에서-GC-Alloc이-생기는-이유"]
cards: []
date: 2026-07-30
---

## 왜 열거자를 struct로 바꿨나

C# 1.0 시절 `foreach`는 무조건 `IEnumerator`를 통했다. 열거자가 클래스였으니 루프 하나마다 힙 객체가 하나씩 생겼다. 서버에서는 무시할 만한 비용이지만, 60fps에서 매 프레임 도는 루프가 수십 개면 이야기가 달라진다. 유니티의 Boehm GC는 세대 구분이 없어서 작은 쓰레기도 결국 전체 힙 마킹 비용으로 돌아온다. 그래서 BCL은 열거자를 struct로 바꿨다. 그런데 이 최적화가 정적 타입 표기 하나로 무력화된다.

## foreach는 인터페이스가 아니라 패턴으로 바인딩된다

C# 컴파일러는 `foreach (var x in src)`를 만나면 `src`의 정적 타입에서 이 순서로 찾는다.

1. public `GetEnumerator()`가 있고, 그 반환 타입에 public `MoveNext()`와 `Current`가 있는가 → 있으면 그걸 쓴다 (패턴 기반, duck typing)
2. 없으면 `IEnumerable<T>`로 변환 → `IEnumerator<T>` 사용
3. 그것도 없으면 `IEnumerable`

인터페이스 구현은 폴백이지 조건이 아니다. 어떤 인터페이스도 구현하지 않은 타입이 foreach가 되는 이유가 이거고, 반대로 `List<Enemy>`를 `IEnumerable<Enemy>`로 선언했을 때 struct 열거자를 못 쓰는 이유도 같은 규칙이다. 정적 타입 `IEnumerable<Enemy>`에는 패턴에 맞는 `GetEnumerator()`가 없으므로 2번으로 떨어진다. 런타임 객체가 struct 열거자를 갖고 있어도 소용없다. 컴파일러는 정적 타입에 없는 멤버를 부를 수 없다.

## 박스를 만드는 건 호출자가 아니라 컬렉션이다

`List<T>`는 명시적 인터페이스 구현으로 이 두 갈래를 동시에 제공한다.

```csharp
public struct Enumerator : IEnumerator<T> { ... }

public Enumerator GetEnumerator()                        // 패턴 경로
    => new Enumerator(this);                             // 반환 타입이 struct → box 없음

IEnumerator<T> IEnumerable<T>.GetEnumerator()            // 인터페이스 경로
    => new Enumerator(this);                             // 참조 타입 슬롯 → 여기서 box
```

본문은 글자 그대로 같고 반환 타입만 다르다. 명시적 구현은 `List<T>` 변수로는 호출할 수 없으므로 이름 충돌 없이 두 개를 공존시킬 수 있고, 동시에 "인터페이스로 캐스팅한 사람만 박싱 비용을 낸다"는 구조가 된다. 그래서 `Update()`의 IL에는 `box` 명령이 없다. `List<T>` 내부의 명시적 구현 메서드 안에 있다. [Andrew Lock](https://andrewlock.net/making-foreach-on-an-ienumerable-allocation-free-using-reflection-and-dynamic-methods/)

## struct 열거자의 대가 — 복사되면 상태가 갈라진다

할당을 없앤 대신 값 형식 의미론을 그대로 떠안는다. 열거자를 메서드 인자로 넘기거나, 다른 변수에 대입하거나, `readonly` 필드에서 꺼내 쓰면 그 시점 상태의 사본이 만들어지고 사본에서 일어난 전진은 원본에 반영되지 않는다.

```
list = [10, 20, 30]

e.MoveNext()      → e:   index=0, current=10
Advance(e)        → en = e의 복사본
    en.MoveNext() → en:  index=1
    en.MoveNext() → en:  index=2
                    (en 소멸, e는 무관)
e:                  index=0  ← 그대로
e.MoveNext()      → e:   index=1, current=20
```

참조 타입 열거자였다면 인덱스가 3이 되어 `MoveNext()`가 false를 반환한다. 값/참조 하나 차이로 프로그램 동작 자체가 바뀐다. 성능 최적화가 의미론을 바꾼 드문 케이스라서 시험에 잘 나온다.

## Dispose는 왜 박싱하지 않는가

"인터페이스를 거치지 말고 그 타입 걸 직접 부른다"가 정확히 실제 동작이다. 한 단계만 보강하면 된다.

박싱은 값을 참조 타입 슬롯에 담아야 할 때 필요하다. 인터페이스 변수, `object` 필드, 인터페이스 반환 타입처럼 "참조로 가리켜야 하는 자리"에 값 형식을 넣으려면 힙에 상자를 만들어 그 안에 값을 복사하는 수밖에 없다. 그런데 메서드 호출 자체는 상자가 필요 없다. 인스턴스 메서드 호출에 필요한 건 `this`가 가리킬 주소뿐이고, 스택에 있는 struct도 주소는 있다.

첫 번째 경우(아래 A) 열거자의 정적 타입은 `List<Enemy>.Enumerator`다. struct가 인터페이스를 구현하면 그 struct 타입 자체에도 `Dispose()`가 존재하므로, 컴파일러는 가상 디스패치 없이 직접 호출을 낸다. 스택 변수의 주소만 넘어간다.

```
// A: 정적 타입이 struct
ldloca e
call instance void List`1/Enumerator<Enemy>::Dispose()   // 박스 없음

// B: 정적 타입이 IEnumerator<Enemy>
callvirt instance void IDisposable::Dispose()            // 이미 박싱된 힙 객체 → 추가 박싱 없음
```

제네릭 코드처럼 `T`가 struct일지 class일지 컴파일 타임에 모르는 경우에는 IL의 `constrained.` 접두사가 이 판단을 런타임(JIT)으로 미룬다. T가 값 형식이고 해당 메서드를 직접 갖고 있으면 박싱 없이 직접 호출, 아니면 박싱 후 가상 호출. 덕분에 제네릭 코드도 값 형식에서 공짜로 동작한다.

참고로 C# 명세는 열거자가 값 형식이면서 `IDisposable`을 구현하면 finally에서 직접 호출하도록, 값 형식인데 구현하지 않으면 dispose 코드를 아예 생성하지 않도록 규정한다. `List<T>.Enumerator.Dispose()`는 빈 메서드라 JIT가 인라인해서 통째로 지운다. 실질 비용 0이다.

## 실무 — 유니티에서

핵심 규칙 하나: hot path에서 컬렉션을 인터페이스 타입으로 들고 있지 마라.

```csharp
private List<Enemy> _enemies;              // OK, 박싱 없음
private IReadOnlyList<Enemy> _enemies;     // 프레임당 박싱
public IEnumerable<Enemy> Enemies => _list; // 호출자가 foreach 돌면 박싱
```

캡슐화 관점에서는 `IReadOnlyList<T>` 노출이 정석이고 팀 코드 리뷰에서도 그렇게 지도한다. 하지만 그 프로퍼티를 매 프레임 foreach로 돌면 프레임당 40바이트 정도가 꾸준히 쌓인다. 60fps × 여러 시스템이면 초당 수 KB, 결국 GC 스파이크로 돌아온다. 절충안은 두 가지다. hot path는 구체 타입 필드로 직접 순회하고 인터페이스는 외부 API에만 쓰거나, 인터페이스를 받아야 하면 `is List<T>`로 패턴 매칭해서 구체 타입 루프로 내려보내는 것이다.

```csharp
if (seq is List<Enemy> concrete)
    foreach (var e in concrete) e.Tick();   // 박싱 없음
else
    foreach (var e in seq) e.Tick();        // 폴백
```

같은 함정이 `Dictionary<K,V>`, `HashSet<T>`, `Queue<T>`에도 있다. 전부 struct 열거자를 갖고 있고 전부 인터페이스로 받는 순간 박싱된다. 배열은 정적 타입이 `T[]`일 때 컴파일러가 인덱스 루프로 바꿔주므로 열거자 자체가 없지만, `IList<T>`로 받으면 마찬가지로 박싱된다. LINQ는 거의 전부 힙 열거자에 클로저 할당까지 붙으므로 Update에서는 쓰지 않는 게 원칙이다.

그리고 struct 열거자를 직접 다룰 일이 생기면(수동 `MoveNext` 등) 값 복사 함정을 기억해야 한다. 특히 열거자를 다른 메서드에 넘기고 싶으면 `ref`로 넘기지 않는 한 상태가 갈라진다. 이 성질 때문에 struct 열거자는 지역 변수로 만들어 그 자리에서 소비하는 게 안전한 사용법이다.
