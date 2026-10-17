---
title: FixedUpdate에서 Input.GetKeyDown을 쓰면 점프가 씹히거나 중복되는 이유
tags: [디자인 패턴, 게임루프, 고정시간간격, 입력]
related: []
parent: 고정 시간 간격 누적기 루프에서 렌더 주기와 스텝 주기가 어긋나면 생기는 떨림
date: 2026-10-16
result: 부분
status: 완성
---

## 질문
`Time.fixedDeltaTime`이 기본값 0.02인 유니티에서, `FixedUpdate`가 `Input.GetKeyDown(KeyCode.Space)`를 검사해 임펄스 5를 가한다. 144fps에서 점프가 자주 씹히는 이유는 무엇인가? 60ms짜리 끊긴 프레임에서는 무슨 일이 생기는가?

```csharp
private void FixedUpdate()
{
    if (Input.GetKeyDown(KeyCode.Space))
        _rb.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
}
```

## 핵심 답변
레거시 Input Manager의 `GetKeyDown`은 키를 누른 렌더 프레임 하나에서만 true이고, 그 프레임 안에서는 값이 변하지 않는다. 유니티는 매 프레임 Update보다 먼저, 밀린 만큼 FixedUpdate를 0회 이상 실행한다. 144fps에서는 렌더 프레임 약 세 개 중 하나에만 FixedUpdate가 있다. 그래서 FixedUpdate가 없는 프레임에 누른 키는 다음 프레임에 false로 돌아가 확실히 사라진다. 반대로 한 프레임에 FixedUpdate가 세 번 돌면 세 호출 모두 true를 보고, 임펄스가 세 번(총 15) 들어가 3배 높이로 점프한다.

## 정리
### 내부 동작
FixedUpdate는 고정 스텝 누적기 루프의 안쪽 while문이고, 입력은 바깥 루프(렌더 프레임) 단위로 갱신된다. 이 두 주기가 어긋나는 것이 문제의 근원이다.

### 흔한 오해/함정
결과가 실행 순서에 따라 달라서 확정할 수 없다고 생각하기 쉽다. 하지만 레거시 Input에서는 프레임 단위로 값이 고정되므로 결과는 확정된다. 신규 Input System은 ProcessEventsInFixedUpdate 업데이트 모드를 쓰면 입력 이벤트를 FixedUpdate 직전에 처리하므로 동작이 달라진다.

## 꼬리 질문
- [[Update에서 입력 플래그를 기록하고 FixedUpdate에서 소비할 때의 두 가지 구현 실수]]
