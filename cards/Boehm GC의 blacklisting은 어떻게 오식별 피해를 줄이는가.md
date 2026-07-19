---
title: Boehm GC의 blacklisting은 어떻게 오식별 피해를 줄이는가
tags: [유니티, GC, 메모리]
related: ["Conservative GC에서 죽은 객체가 잘못 살아남는 현상", "Boehm GC가 객체를 이동시키지 못하는 이유", "Conservative GC에서 포인터를 갱신하면 나는 사고", "List 리사이즈가 힙에 남기는 쓰레기", "유니티 GC의 내부 동작"]
parent:
date: 2026-07-19
result: 모름
status: 스텁
---

## 질문
Boehm GC는 conservative 오식별로 인한 우발적 잔존을 줄이기 위해 페이지 blacklisting을 사용한다. "니어 미스" 추적이 구체적으로 어떻게 이뤄지고, 블랙리스트된 페이지에 pointer-free 객체만 할당하는 것이 왜 피해를 줄이는가?

## 핵심 답변
(스텁 — 다음 세션에서 채운다.)
