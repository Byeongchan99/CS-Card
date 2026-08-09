---
title: Dictionary에서 중간 항목을 Remove하면 entries 배열의 구멍을 어떻게 처리하는가
tags: [자료구조, 해시테이블, CSharp, GC]
related: []
parent: Dictionary의 buckets 배열과 entries 배열은 각각 무엇을 담고 체인은 어디에 표현되는가
date: 2026-08-10
result: 맞음
status: 완성
---

## 질문
entries 배열은 추가 순서대로 앞에서부터 촘촘히 채워 쓴다. 여기서 중간 항목 하나를 Remove하면 배열 한가운데에 구멍이 뚫린다. .NET Dictionary는 이 구멍을 어떻게 처리하는가? 뒤 항목을 한 칸씩 당겨 메우는가?

## 핵심 답변
당기지 않는다. 뒤 항목을 모두 당기면 삭제 하나가 O(n)이 되어버리기 때문이다. 대신 삭제된 슬롯을 재사용 대상으로 관리한다. 핵심은 이 재사용 목록을 위해 별도 리스트 객체를 두지 않고, 살아 있을 때 충돌 체인용이던 entry의 next 필드를 재활용해 빈 슬롯들을 하나의 사슬(freeList)로 엮는다는 점이다. 삽입 시 빈 슬롯이 있으면 freeList에서 먼저 꺼내 쓰고, 없을 때만 배열의 새 자리를 쓴다.

## 정리

### 내부 동작
_freeList는 빈 슬롯 사슬의 머리 인덱스, _freeCount는 남은 빈 슬롯 수다. 삭제는 두 단계다. 먼저 대상을 충돌 체인에서 떼어낸다 — 머리였으면 buckets[b]를 대상의 next로 잇고, 중간이었으면 앞 entry의 next를 대상의 next로 이어 건너뛰게 한다. 그다음 대상 슬롯을 freeList 머리에 끼운다.

```csharp
entries[last].next = entries[i].next; // 충돌 체인에서 분리 (머리면 buckets[b] 수정)
entries[i].next = freeList;            // freeList 사슬에 끼움 (next 재활용)
freeList = i;
freeCount++;
```

### 왜 그런가
살아 있는 entry의 next는 "같은 bucket의 다음 원소"를, 죽은 entry의 next는 "다음 빈 슬롯"을 가리킨다. 한 필드가 상태에 따라 두 역할을 하므로 재사용 목록을 위한 추가 자료구조나 할당이 필요 없다.

### 실무(게임 개발)에서 생기는 문제와 해결
삽입 시 _freeCount > 0이면 _freeList 슬롯을 꺼내 쓰고 _freeList를 그 슬롯의 next로 옮긴 뒤 _freeCount를 줄인다. 덕분에 삭제·삽입을 반복해도 entries가 앞쪽에 촘촘히 유지되고 구멍이 방치되지 않아, 조회 시 캐시 지역성이 보존된다.

## 꼬리 질문
- [[매 프레임 대량 Add 후 Clear를 반복하는 Dictionary 코드에서 무엇을 피할 수 있는가]]
