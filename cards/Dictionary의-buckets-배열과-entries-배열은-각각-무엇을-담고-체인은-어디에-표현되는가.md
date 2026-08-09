---
title: Dictionary의 buckets 배열과 entries 배열은 각각 무엇을 담고 체인은 어디에 표현되는가
tags: [자료구조, 해시테이블, CSharp]
related: []
parent: 같은 bucket으로 간 키들을 Dictionary는 메모리에 어떤 구조로 저장하는가
date: 2026-08-10
result: 맞음
status: 완성
---

## 질문
.NET Dictionary는 내부적으로 buckets와 entries 두 배열을 갖는다. 각 배열에는 무엇이 들어있고, 정수 인덱스로 잇는 충돌 체인은 이 둘 중 어디에 어떤 필드로 표현되는가? 키를 하나 조회할 때 두 배열을 어떤 순서로 거치는가?

## 핵심 답변
entries는 실제 데이터(hashCode, next, key, value)가 추가 순서대로 앞에서부터 차는 배열이다. buckets는 정수 배열로, buckets[b]에 b번 bucket 체인의 첫 entry 인덱스를 담는다. 충돌 체인은 entries의 각 슬롯이 가진 next 필드로 표현된다 — next가 같은 bucket의 다음 entry 인덱스를 가리킨다. 조회는 해시로 bucket 번호 b를 구해 buckets[b]로 첫 entry에 진입한 뒤, hashCode를 먼저 비교하고 같을 때만 key의 Equals를 부르며, 다르면 next를 따라 체인 끝까지 이동한다.

## 정리

### 내부 동작
Entry는 네 필드를 갖는다.

```csharp
private struct Entry {
    public int hashCode;   // 키 해시 (하위 31비트)
    public int next;       // 같은 bucket의 다음 entry 인덱스 (없으면 끝 표시)
    public TKey key;
    public TValue value;
}
```

buckets[b]는 체인의 머리 인덱스, entries[i].next는 그 다음 인덱스. 즉 buckets가 진입점, next가 연결 고리다.

### 왜 그런가
hashCode를 먼저 비교하는 게 실질적 최적화다. 사용자 타입의 Equals는 비쌀 수 있고 정수 비교는 싸다. 저장해 둔 hashCode가 다르면 키가 같을 리 없으니 Equals를 아예 부르지 않고 next로 건너뛴다.

### 흔한 오해/함정
buckets에 값이 직접 저장된다고 오해하기 쉽다. buckets에 있는 건 값이 아니라 entries 배열로 가는 인덱스(진입점)일 뿐이다. 실제 key/value는 전부 entries에 있다.

## 꼬리 질문
- [[Dictionary에서 중간 항목을 Remove하면 entries 배열의 구멍을 어떻게 처리하는가]]
