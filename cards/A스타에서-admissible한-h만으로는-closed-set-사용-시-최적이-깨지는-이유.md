---
title: A*에서 admissible한 h만으로는 closed set 사용 시 최적이 깨지는 이유
tags: [알고리즘, 길찾기, A스타, 휴리스틱]
related: ["A스타-휴리스틱이-admissible하다는-것의-의미와-위반-시-생기는-문제", "8방향-격자에-맨해튼-거리-휴리스틱을-쓰면-생기는-일-추론"]
parent: A* 휴리스틱이 admissible하다는 것의 의미와 위반 시 생기는 문제
date: 2026-07-31
result: 맞음
status: 완성
---

## 질문
격자 A*는 성능을 위해 closed set(한 번 확장한 노드는 다시 꺼내지 않고 버림)을 쓴다. 이 구현에서는 h가 admissible이기만 해서는 최적 경로를 보장하지 못하는데, 어떤 상황에서 노드 단위로 깨지며, 이를 막으려면 h에 어떤 조건이 더 필요한가?

## 핵심 답변
admissible은 h와 실제 잔여비용의 관계만 보장할 뿐, 큰 g로 먼저 closed에 들어간 노드에 나중에 더 작은 g로 재도달하지 않는다는 보장은 없다. h가 노드마다 들쭉날쭉한 inconsistent 휴리스틱이면 이런 g 역전이 실제로 일어나고, closed의 노드를 다시 안 보므로 더 좋은 경로를 놓친다. 이를 막는 조건이 consistency(monotonicity)로, 모든 간선 (n,m)에 대해 h(n) ≤ cost(n,m) + h(m)이라는 삼각부등식이다. 이게 성립하면 f가 경로를 따라 비감소하고, 노드가 pop되는 시점의 g가 이미 최적이라 재방문이 불필요해져 closed set이 안전해진다.

## 정리
### 왜 그런가
admissible은 h(n) ≤ h*(n)만 말한다. 이는 "이 노드에 나중에 더 짧은 경로로 도달할 수 있는가"에는 아무 말도 하지 않는다. 그래서 어떤 노드가 큰 g 값으로 먼저 pop되어 closed에 들어간 뒤, 다른 경로로 더 작은 g를 들고 다시 그 노드에 도달하는 일이 생길 수 있다. closed는 이미 확장한 노드를 버리므로 이 개선된 도달이 반영되지 못한다.

### 내부 동작
consistency 조건 h(n) ≤ cost(n,m) + h(m)을 간선을 따라 이어붙이면 f(m) = g(n) + cost(n,m) + h(m) ≥ g(n) + h(n) = f(n)이 되어 f가 경로를 따라 비감소한다. f가 비감소이면 A*가 노드를 pop하는 순서가 f 오름차순이고, 어떤 노드가 처음 pop될 때의 g가 그 노드의 최적 g임이 보장된다. 따라서 이미 확장한 노드에 더 작은 g로 재도달하는 일 자체가 없어 closed set을 안심하고 쓸 수 있다.

### 트레이드오프
consistency가 깨진 채 최적을 지키려면 closed를 포기하고, 이미 확장한 노드라도 더 작은 g로 재도달하면 다시 오픈에 넣어야 한다(node re-expansion). 최적성은 되찾지만 같은 노드를 여러 번 확장해 느려진다. 그래서 정석은 "consistent한 h를 설계해 closed를 그냥 쓴다"이다. 격자에서 맨해튼/유클리드/옥타일 거리가 사랑받는 이유가 자연스럽게 consistent해서다.

### 흔한 오해/함정
consistency와 admissibility를 별개의 조건처럼 여기기 쉽지만, consistency ⟹ admissibility다(goal에서 h=0을 삼각부등식으로 이어붙이면 h(n) ≤ h*(n)이 유도됨). 즉 consistency가 더 강한 조건이고, 실전에서 문제를 일으키는 건 언제나 "admissible이지만 inconsistent한" 중간 지대의 휴리스틱이다.

## 꼬리 질문
- [[8방향 격자에 맨해튼 거리 휴리스틱을 쓰면 생기는 일 (추론)]]
