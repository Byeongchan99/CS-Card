---
title: 상태 이중 버퍼의 Swap에서 next를 비우지 않으면 생기는 버그
tags: [디자인 패턴, 이중버퍼, 게임루프]
related: []
parent: 갱신 순서에 따라 게임 상태 결과가 달라지는 문제를 이중 버퍼로 해결하는 방법
date: 2026-10-13
result: 맞음
status: 완성
---

## 질문
아래처럼 피격 상태를 이중 버퍼로 구현했다. 배우 셋이 Harry → Baldy → Chump → Harry 순서로 원형으로 서 있다. 처음에 Harry만 `_current = true`이고 나머지 값은 모두 `false`이며, 갱신 순서는 Harry, Baldy, Chump다. 매 프레임 모든 Update를 호출한 뒤 모든 Swap을 호출한다. 1~4프레임의 출력은 무엇이고, 무엇을 빠뜨렸으며, 어떻게 고쳐야 하는가?

```csharp
class Actor
{
    public string Name;
    public Actor Facing;
    bool _current;
    bool _next;

    public void Slap() => _next = true;

    public void Update()
    {
        if (_current)
        {
            Console.WriteLine($"{Name} slaps {Facing.Name}");
            Facing.Slap();
        }
    }

    public void Swap()
    {
        _current = _next;
    }
}
```

## 핵심 답변
출력은 1프레임 Harry, 2프레임 Baldy, 3프레임 Baldy와 Chump, 4프레임 세 명 모두다. Swap에서 next를 비우지 않아서, 한 번 `true`가 된 next가 매 프레임 current로 다시 복사된다. 그래서 피격이 사라지지 않고 누적된다. Swap에서 복사 뒤에 `_next = false`를 넣어야 한다. 비우기를 복사보다 먼저 하면 이번 프레임에 기록한 결과가 사라지므로 순서가 중요하다.

## 정리
### 내부 동작
```
           Harry(cur,next)  Baldy(cur,next)  Chump(cur,next)   출력
시작        (T, F)           (F, F)           (F, F)
1프레임 후  (F, F)           (T, T)           (F, F)            Harry
2프레임 후  (F, F)           (T, T)           (T, T)            Baldy
3프레임 후  (T, T)           (T, T)           (T, T)            Baldy, Chump
4프레임                                                          Harry, Baldy, Chump (이후 영구 반복)
```

수정한 코드는 다음과 같다.

```csharp
public void Swap()
{
    _current = _next;
    _next = false;   // 복사 뒤에 비운다
}
```

### 흔한 오해/함정
Q5 단계의 해법을 "버퍼를 두 개로 나누고 바꾼다"로만 기억하면 이 단계를 빠뜨린다. 기록 버퍼에 무엇이 남아 있는지는 쓰기 방식에 달려 있고, 이벤트성으로 일부만 쓰는 상태는 매 세대마다 깨끗한 상태에서 시작해야 한다.

## 꼬리 질문
- [[대형 격자 이중 버퍼에서 참조 교체를 고르는 이유와 next 비우기가 필요한 기준]]
