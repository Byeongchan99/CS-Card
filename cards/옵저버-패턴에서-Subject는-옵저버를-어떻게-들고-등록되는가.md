---
title: 옵저버 패턴에서 Subject는 옵저버를 어떤 형태로 들고 등록 시 무슨 일이 일어나는가
tags: [디자인 패턴, 옵저버, SOLID]
related: ["옵저버-패턴에서-새-반응자-추가가-쉬운-이유-OCP-DIP", "옵저버-패턴은-무엇과-무엇을-분리하는가", "Notify-순회-도중-옵저버가-자기-자신을-구독-해제하면"]
parent: 옵저버 패턴은 무엇과 무엇을 분리하는가
date: 2026-08-11
result: 맞음
status: 완성
---

## 질문
Subject(발행자)가 "누가 구독하든 그 구체 타입을 모른다"는 상태를 코드로 유지하려면, 옵저버들을 어떤 형태로 들고 있어야 하고 새 옵저버가 등록될 때 내부적으로 무슨 일이 일어나야 하는가?

## 핵심 답변
Subject는 공통 인터페이스를 구현한 옵저버들의 리스트를 든다. 등록은 그 리스트에 참조를 추가하는 것뿐이고, Subject는 원소의 구체 타입을 특별 취급하지 않는다. 리스트의 정적 타입이 인터페이스이므로 Subject는 HealthBar인지 SoundEffect인지 알 필요가 없다.

## 정리
### 내부 동작
```csharp
public interface IHealthObserver
{
    void OnHealthChanged(int current, int max);
}

public class Player
{
    private readonly List<IHealthObserver> _observers = new();

    public void Register(IHealthObserver observer) => _observers.Add(observer);
    public void Unregister(IHealthObserver observer) => _observers.Remove(observer);

    private void Notify()
    {
        foreach (var o in _observers)
            o.OnHealthChanged(_currentHp, _maxHp);
    }
}
```
등록은 `_observers.Add(observer)` 한 줄이다. 리스트 원소 타입이 `IHealthObserver`라, 어떤 구체 타입이 들어와도 Player 코드는 동일하다.

### 왜 그런가
이 "구체 타입이 아니라 인터페이스에 의존한다"는 구조가 곧 DIP이고, 그 위에서 새 옵저버 추가 시 Player를 수정하지 않아도 되는 OCP가 성립한다. 즉 Subject의 내부 자료구조 선택이 앞선 OCP·DIP 논의의 물리적 근거다.

## 꼬리 질문
- [[옵저버 Notify 순회 도중 옵저버가 자기 자신을 구독 해제하면 무슨 일이 일어나는가]]
