---
title: struct 열거자를 메서드에 값으로 넘기면 순회 상태가 갈라지는 이유
tags: ["C#", 컬렉션, 값형식]
related: ["List를-IEnumerable-필드로-선언하면-foreach에서-GC-Alloc이-생기는-이유", "IEnumerable을-구현하지-않은-타입에서도-foreach가-컴파일되는-이유", "IEnumerable로-순회할-때-열거자-박싱은-호출자와-컬렉션-중-어디서-일어나는가"]
parent: List를 IEnumerable 필드로 선언하면 foreach에서 GC Alloc이 생기는 이유
date: 2026-07-29
result: 맞음
status: 완성
---

## 질문
`List<int>`에서 얻은 열거자를 한 번 전진시킨 뒤 다른 메서드에 값으로 넘겨 그 안에서 두 번 더 전진시켰다. 돌아와서 다시 전진시키면 어떤 원소가 나오고, 왜 그런가?

```csharp
List<int> list = new List<int> { 10, 20, 30 };

List<int>.Enumerator e = list.GetEnumerator();
e.MoveNext();          // Current == 10

Advance(e);

e.MoveNext();
Debug.Log(e.Current);  // ?

static void Advance(List<int>.Enumerator en)
{
    en.MoveNext();
    en.MoveNext();
}
```

## 핵심 답변
20이 출력된다. `List<T>.Enumerator`는 struct이므로 `Advance(e)`에 넘어가는 것은 열거자 자체가 아니라 그 시점 상태의 복사본이다. 복사본이 두 칸 전진하고 메서드가 끝나면 그대로 버려지고, 원본 `e`의 인덱스는 그대로 남는다. 참조 타입 열거자였다면 같은 객체를 공유하므로 인덱스가 끝을 넘어가 `MoveNext()`가 false를 반환했을 것이다. 값 형식이라는 성질 하나가 프로그램 동작 자체를 바꾼다.

## 정리

### 내부 동작
```
list = [10, 20, 30]

e.MoveNext()      → e:   index=0, current=10
Advance(e)        → en = e의 복사본 (index=0)
    en.MoveNext() → en:  index=1
    en.MoveNext() → en:  index=2
                    (en 소멸, 원본 e에 영향 없음)
e:                  index=0  ← 그대로
e.MoveNext()      → e:   index=1, current=20
```

참조 타입 열거자였다면 `Advance` 안의 전진이 원본에 반영되어 index=2가 되고, 이후 `MoveNext()`가 index=3으로 끝을 넘어가 false를 반환한다. 이때 `Current`는 정의되지 않은 값이다.

### 왜 그런가
struct 열거자가 할당을 없앨 수 있는 이유가 곧 이 함정의 원인이다. 힙 객체가 없으니 공유할 참조도 없고, 변수 간 대입과 메서드 인자 전달이 전부 상태 복사가 된다. 성능 최적화가 의미론을 바꾼 사례다.

### 흔한 오해/함정
복사가 일어나는 지점은 메서드 인자 전달만이 아니다. 다른 변수에 대입할 때, `readonly` 필드나 `in` 매개변수에서 꺼내 쓸 때, 프로퍼티 getter를 통해 받을 때에도 방어적 복사가 생길 수 있다. 그래서 struct 열거자는 지역 변수로 만들어 그 자리에서 소비하는 것이 안전한 사용법이고, 굳이 넘겨야 한다면 `ref`로 넘겨야 한다. foreach는 열거자를 지역 변수로 잡고 그 안에서만 쓰기 때문에 이 문제를 겪지 않는다.

## 꼬리 질문
- (이 갈래의 바닥)
