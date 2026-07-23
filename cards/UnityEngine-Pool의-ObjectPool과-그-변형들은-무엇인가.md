---
title: UnityEngine.Pool의 ObjectPool과 그 변형들은 무엇인가
tags: [유니티, 성능, 메모리]
related: ["오브젝트 풀링은 무엇이고 어떻게 GC 부담을 줄이는가", "풀에서 꺼낸 오브젝트의 상태 리셋은 어떻게 하는가", "Instantiate와 Destroy는 각각 왜 비싼 연산인가", "유니티가 쓰는 GC는 무엇이고 닷넷 표준 GC와 구조적으로 어떻게 다른가", "오버로딩된 == 의 null 체크가 성능 함정이 되는 이유와 완화법"]
parent:
date: 2026-07-23
result: 틀림
status: 완성
---

## 질문
UnityEngine.Pool.ObjectPool<T>에서 풀이 비었을 때 Get은 어떻게 동작하며, maxSize는 무엇을 제한하는가?

## 핵심 답변
Get은 절대 실패하지 않는다. 풀이 비어 있으면 createFunc으로 새 인스턴스를 만들어 내주며, 상한이 없다. maxSize가 걸리는 곳은 Get이 아니라 Release다. 반납 시점에 풀이 보관 중인 유휴 객체 수가 maxSize에 도달해 있으면 그 인스턴스는 풀에 들어가지 못하고 actionOnDestroy로 파괴된다. 즉 maxSize는 총 생성 개수가 아니라 유휴 보관량의 상한이며, 유니티 소스의 주석대로 파국적인 메모리 보유를 막기 위한 값이다.

### 개념
UnityEngine.Pool은 유니티 2021.1부터 기본 제공되는 네임스페이스다. ObjectPool<T>의 생성자는 createFunc, actionOnGet, actionOnRelease, actionOnDestroy, collectionCheck, defaultCapacity, maxSize를 받는다. 네 개의 델리게이트가 생성·대여·반납·파괴 각 시점의 동작을 정의하고, 나머지 셋이 정책을 정한다. 카운터로 CountAll, CountActive, CountInactive를 제공하며 CountActive는 CountAll - CountInactive로 계산된다.

### 내부 동작
Get은 내부 리스트가 비어 있으면 createFunc을 호출해 하나를 만들고, 비어 있지 않으면 꺼내 쓴 뒤 actionOnGet을 호출한다. 여기에 2배 확장 같은 성장 정책은 없다. 한 번에 하나씩 만들 뿐이다. Release는 actionOnRelease를 호출한 뒤, CountInactive가 maxSize 미만이면 리스트에 넣고 그렇지 않으면 actionOnDestroy를 호출한다. collectionCheck가 켜져 있으면 이미 풀에 있는 인스턴스를 다시 Release할 때 예외를 던지며, 이 검사는 에디터에서만 동작하고 플레이어 빌드에서는 실행되지 않는다.

### 변형들
LinkedPool<T>는 연결 리스트로 보관한다. ObjectPool은 스택(내부적으로 연속 배열)이라 큰 덩어리의 연속 메모리를 잡는 반면, LinkedPool은 실제 보관 중인 요소만큼만 쓴다. 풀이 매우 크고 보유량 변동이 심하면 LinkedPool이, 평범한 규모면 캐시 지역성이 좋은 ObjectPool이 유리하다.
GenericPool<T>는 ObjectPool의 static 구현이고, UnsafeGenericPool<T>는 거기서 컬렉션 체크를 뺀 것이다.
ListPool<T>, DictionaryPool<K,V>, HashSetPool<T>는 CollectionPool 기반의 컬렉션 전용 풀이며 동일한 static API를 갖는다. GameObject가 아니라 매 프레임 만들어지는 임시 컬렉션의 매니지드 힙 할당을 없애는 용도다.

### 흔한 오해/함정
- maxSize를 동시 사용 개수 상한으로 오해하기 쉽다. 실제로는 유휴 보관량 상한이고 Get은 무제한이다.
- 풀이 부족하면 크기를 2배로 늘린다는 것은 자작 풀이나 List의 백킹 배열 성장 방식이지 ObjectPool의 동작이 아니다.
- 컬렉션 풀과 GenericPool은 static 기반이라 에디터에서 도메인 리로드 비활성화를 쓰면 풀 내용이 플레이 세션을 넘어 남는다.
- 이 풀들은 스레드 안전하지 않다. 메인 스레드 전용이다.
