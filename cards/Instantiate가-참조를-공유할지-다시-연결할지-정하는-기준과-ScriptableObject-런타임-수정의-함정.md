---
title: Instantiate가 참조를 공유할지 다시 연결할지 정하는 기준과 ScriptableObject 런타임 수정의 함정
tags: [유니티, 프리팹, ScriptableObject]
related: []
parent: 유니티 Instantiate는 프리팹의 참조 필드 중 무엇을 공유하고 무엇을 복제하는가
date: 2026-09-29
result: 맞음
status: 완성
---

## 질문
유니티 `Instantiate`는 필드의 설계 의도를 알 수 없는데도 ScriptableObject 참조는 공유하고 자식 Transform 참조는 복제본으로 바꿔 끼운다. 실제로 무엇을 기준으로 구분하는가? 그리고 누군가 `EnemyStatData`(ScriptableObject)에 `CurrentHp`를 넣고 피격 시 `_statData.CurrentHp -= damage`로 깎으면 두 Enemy 인스턴스와 에셋에는 무슨 일이 생기는가?

## 핵심 답변
기준은 참조 대상이 복제되는 계층에 포함된 유니티 객체인가다. 계층 안의 객체는 복제본으로 재연결되고, 계층 밖은 기존 객체를 그대로 참조한다. ScriptableObject 에셋은 계층 밖이므로 모든 Enemy가 같은 객체 하나를 공유한다. 그래서 A가 맞아 `CurrentHp`를 깎으면 에셋 자체가 바뀌고, 맞지 않은 B도 줄어든 값을 본다.

## 정리
### 실무(게임 개발)에서 생기는 문제와 해결
에디터에서는 씬 오브젝트와 달리 에셋이 플레이 모드 종료 시 되돌려지지 않는다. 스크립트로 바꾼 값이 메모리상의 에셋에 남아 다음 플레이에 이어지고, 경우에 따라 디스크까지 저장될 수 있다. 빌드에서는 런타임 변경이 파일에 저장되지 않아 재시작하면 원래 값으로 돌아간다. 에디터와 빌드 동작이 달라 재현이 어렵다. ScriptableObject는 읽기 전용 정의 데이터로 쓰고, 런타임 상태는 MonoBehaviour 인스턴스 필드에 둔다.

### 흔한 오해/함정
이 사고는 `MemberwiseClone`으로 얕게 복사한 Weapon을 사본이 수정해 원본까지 망가뜨리는 것과 같은 구조다. 공유된 가변 객체를 수정하면 공유자 전원이 영향을 받는다.

## 꼬리 질문
- (이 갈래의 바닥)
