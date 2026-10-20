---
title: 코루틴의 MoveNext가 매번 첫 줄부터 실행되는데도 yield 다음 지점에서 재개하는 원리
tags: [디자인 패턴, 코루틴, 컴파일러, CSharp]
related: [Setup이 끝난 뒤에도 람다가 지역 변수를 계속 쓸 수 있는 이유]
parent: while true가 있는 코루틴이 화면을 멈추지 않는 이유와 지역 변수와 실행 위치가 보존되는 곳
date: 2026-10-20
result: 맞음
status: 완성
---

## 질문
유니티가 코루틴을 진행시키기 위해 매번 호출하는 반복자의 `MoveNext()`는 평범한 메서드라서, 호출될 때마다 첫 줄부터 실행된다. 그런데 어떻게 두 번째 `for`문 한가운데, 즉 `yield return null` 바로 다음부터 실행을 이어갈 수 있는가? 그리고 `MoveNext()`의 반환값 `true`/`false`는 유니티에게 각각 무엇을 알려 주는가?

## 핵심 답변
CPU가 실행 위치를 붙잡아 두는 것이 아니다. 컴파일러가 메서드를 `yield` 지점마다 단계로 쪼개고, 각 `yield` 직전에 "다음 진입점 번호"를 상태 필드에 기록한다. `MoveNext()`의 실제 첫 줄은 `switch (state)`이며, 상태 값에 따라 해당 `yield` 바로 뒤의 레이블로 `goto`한다. 루프 변수도 필드에 있으므로 값이 그대로 남아 있다. 반환값 `true`는 아직 끝나지 않았으니 `Current`가 지정한 조건에 맞춰 다시 불러 달라는 뜻이고, `false`는 반복자가 끝났다는 뜻이다.

## 정리
### 내부 동작
```csharp
public bool MoveNext()
{
    switch (_state)
    {
        case 1: goto ResumeA;     // 첫 for문 yield 직후
        case 2: goto ResumeB;     // 둘째 for문 yield 직후
    }
LoopTop:
    _xA = 0;
CheckA:
    if (_xA < 100) { skeleton.SetX(_xA); Current = null; _state = 1; return true; }
    _xB = 100;
CheckB:
    if (_xB > 0)   { skeleton.SetX(_xB); Current = null; _state = 2; return true; }
    goto LoopTop;
ResumeA: _xA++; goto CheckA;
ResumeB: _xB--; goto CheckB;
}
```

### 실무(게임 개발)에서 생기는 문제와 해결
`Current`가 `null`이면 유니티는 다음 프레임의 `Update` 단계가 끝난 직후 `MoveNext()`를 다시 호출한다. `WaitForSeconds`나 `WaitForFixedUpdate` 같은 `YieldInstruction`이면 그 조건이 만족되는 시점에 호출한다. 첫 `yield` 이전 코드는 `StartCoroutine`을 호출한 쪽에서 즉시 실행된다.

## 꼬리 질문
- (이 갈래의 바닥)
