---
title: 유니티에서 IL2CPP는 GC에 어떤 영향을 주는가
tags: [유니티, GC, IL2CPP]
related: ["유니티-GC의-내부-동작", "Boehm-GC가-객체를-이동시키지-못하는-이유", "Conservative-GC에서-죽은-객체가-잘못-살아남는-현상", "Conservative-GC에서-포인터를-갱신하면-나는-사고", "GC 스파이크와 프레임 예산"]
parent:
date: 2026-07-19
result: 모름
status: 스텁
---

## 질문
유니티의 IL2CPP 백엔드는 C# IL을 C++로 변환해 네이티브로 빌드한다. 이 과정이 GC 동작(스택 스캔, 포인터 인식, Boehm 채택 이유)과 어떻게 얽히는가? Mono 백엔드일 때와 GC 관점에서 무엇이 달라지는가?

## 핵심 답변
(스텁 — 다음 세션에서 채운다.)
