---
title: Instance를 직접 참조하는 코드가 유닛 테스트하기 어려운 이유와 생성자 주입
tags: [디자인 패턴, 싱글턴, SOLID]
related: [강결합 방식 대비 옵저버 패턴에서 새 반응자 추가가 쉬운 이유 (OCP·DIP)]
parent: 싱글턴이 static 클래스로는 얻을 수 없는 것과 그 차이가 생기는 이유
date: 2026-10-06
result: 부분
status: 완성
---

## 질문
`Shop.Buy(int price)`가 내부에서 `GameState.Instance.Gold`를 직접 읽고 차감한다(GameState는 private 생성자와 private setter를 가진 싱글턴). "골드 30일 때 가격 50을 사면 false이고 골드는 30 그대로"를 유닛 테스트하려 할 때 구체적으로 무엇이 막히는가? Shop을 어떻게 바꾸면 해결되고, 바꾼 뒤에도 GameState 싱글턴을 계속 쓸 수 있는가?

## 핵심 답변
첫째, 테스트가 원하는 Gold 상태를 만들기 어렵다. 생성자와 setter가 private이라 별도 인스턴스를 만들 수 없고 전역 인스턴스를 직접 조작해야 한다. 둘째, static 상태가 테스트 사이에 새어 실행 순서에 따라 결과가 바뀐다. 셋째, `Buy(int)` 시그니처만 봐서는 GameState 의존이 드러나지 않는 숨은 의존성이다. 해결은 Shop이 필요한 기능만 담은 인터페이스를 생성자로 받는 것이다. 게임 코드는 GameState 싱글턴(인터페이스 구현)을 넘기고 테스트는 가짜를 넘기므로 싱글턴은 그대로 쓸 수 있다.

## 정리
### 실무(게임 개발)에서 생기는 문제와 해결
```csharp
// Shop이 실제로 쓰는 것만 담은 좁은 인터페이스
public interface IWallet { int Gold { get; set; } }

public class Shop
{
    private readonly IWallet _wallet;
    public Shop(IWallet wallet) { _wallet = wallet; }

    // 잔액이 충분하면 차감하고 true를 돌려준다
    public bool Buy(int price)
    {
        if (_wallet.Gold < price) return false;
        _wallet.Gold -= price;
        return true;
    }
}

// 게임 쪽 조립: new Shop(GameState.Instance)   (GameState : IWallet)
// 테스트:       new Shop(new FakeWallet(30))
```
인터페이스를 GameState 전체(필드 30개)로 잡으면 가짜도 30개를 구현해야 하므로, 소비자가 쓰는 것만 담는다(인터페이스 분리 원칙). MonoBehaviour는 생성자를 쓸 수 없으므로 유니티에서는 Inspector 참조, 초기화 메서드, DI 프레임워크(VContainer, Zenject 등)로 같은 구조를 만든다.

### 흔한 오해/함정
"싱글턴이라 테스트가 어렵다"는 답은 불충분하다. 무엇이 막히는지(상태 설정, 상태 오염, 숨은 의존성)를 구체적으로 말해야 한다. 그리고 private 생성자 때문에 구체 타입 GameState를 주입받는 방식은 테스트에서 넘길 객체를 만들 수 없으므로, 인터페이스로 받아야 한다.

## 꼬리 질문
- [[의존성 주입은 싱글턴의 유일성과 전역 접근 중 무엇을 제거하는가]]
