---
title: Update에서 입력 플래그를 기록하고 FixedUpdate에서 소비할 때의 두 가지 구현 실수
tags: [디자인 패턴, 게임루프, 입력, CSharp]
related: []
parent: FixedUpdate에서 Input.GetKeyDown을 쓰면 점프가 씹히거나 중복되는 이유
date: 2026-10-16
result: 맞음
status: 완성
---

## 질문
점프 입력을 Update에서 기록하고 FixedUpdate에서 처리하도록 아래처럼 구현했다. 이 코드는 144fps에서의 점프 씹힘과 끊긴 프레임에서의 다중 점프를 해결하는가? 해결하지 못한다면 어디를 어떻게 고쳐야 하는가?

```csharp
private void Update()
{
    _jumpRequested = Input.GetKeyDown(KeyCode.Space);
}

private void FixedUpdate()
{
    if (_jumpRequested)
        _rb.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
}
```

## 핵심 답변
둘 다 해결하지 못한다. 첫째, 매 프레임 플래그를 덮어쓰므로, FixedUpdate가 소비하기 전에 다음 프레임의 Update가 false로 지워 버린다. 둘째, 소비한 뒤 false로 내리지 않으므로, 플래그가 true인 동안 실행되는 FixedUpdate 횟수만큼 임펄스가 중복으로 적용된다. 고치려면 Update에서는 입력이 있을 때만 true로 세우고, FixedUpdate에서는 처리한 직후 false로 내려야 한다.

## 정리
### 내부 동작
```csharp
// 입력이 있을 때만 요청을 세운다
private void Update()
{
    if (Input.GetKeyDown(KeyCode.Space))
        _jumpRequested = true;
}

// 요청을 한 번만 소비한다
private void FixedUpdate()
{
    if (!_jumpRequested) return;
    _rb.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
    _jumpRequested = false;
}
```

### 흔한 오해/함정
한 프레임 안에서 FixedUpdate가 Update보다 먼저 실행된다는 점을 놓치기 쉽다. 그래서 키를 누른 프레임의 FixedUpdate들은 아직 이전 값을 본다. 수정 전 코드의 중복 적용은 그다음 프레임에서 FixedUpdate가 여러 번 돌 때 일어난다.

## 꼬리 질문
- (이 갈래의 바닥)
