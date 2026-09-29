---
title: 프로토타입의 Clone에서 필드별로 얕은 복사와 깊은 복사를 가르는 기준
tags: [디자인 패턴, 프로토타입, 깊은복사, 얕은복사]
related: []
parent: MemberwiseClone으로 Clone을 구현하면 참조형 필드에서 무슨 일이 일어나는가
date: 2026-09-29
result: 맞음
status: 완성
---

## 질문
프로토타입 레지스트리의 원본을 `Clone()`으로 복제해 몬스터를 스폰한다. 아래 필드 각각을 얕은 복사(참조 공유)로 둘지 깊은 복사(새 객체 생성)로 할지 무엇을 기준으로 결정하는가? 그리고 모든 필드를 무조건 깊은 복사하는 것이 정답이 아닌 이유는 무엇인가?

```csharp
public class Monster
{
    public int Hp;                       // 전투 중 감소
    public Weapon Weapon;                // 사용할수록 내구도 감소
    public List<string> Buffs;           // 전투 중 추가/제거
    public MonsterStatTable StatTable;   // 종족 기본 스탯, 런타임에 아무도 수정하지 않음
    public string Name;
}
```

## 핵심 답변
기준은 원본과 사본이 그 객체의 상태를 독립적으로 바꿔야 하는가이다. 인스턴스마다 변하는 가변 참조형인 `Weapon`과 `Buffs`는 깊은 복사하고, 아무도 수정하지 않는 공통 데이터인 `StatTable`과 불변인 `Name`은 공유한다. `Hp`는 값 타입이라 이미 독립적이다. 모든 필드를 깊은 복사하면 메모리와 복사 비용이 들 뿐 아니라, 공유되어야 할 데이터의 원천이 여러 개로 갈라진다.

## 정리
### 내부 동작
```csharp
// 인스턴스별로 변해야 하는 참조형 필드만 새로 만들어 독립된 사본을 반환한다
public Monster Clone()
{
    var copy = (Monster)MemberwiseClone();
    copy.Weapon = new Weapon { Durability = Weapon.Durability };
    copy.Buffs = new List<string>(Buffs);
    return copy;
}
```

### 트레이드오프
전부 깊은 복사는 안전해 보이지만 의미를 깨뜨린다. 종족 스탯 테이블은 모든 고블린이 같은 객체를 본다는 것 자체가 설계 의도다. 사본마다 테이블을 가지면 밸런스 수정이 이미 스폰된 몬스터에 반영되지 않는다. 유니티에서는 스폰마다 불필요한 할당이 쌓여 GC 부담이 된다.

### 흔한 오해/함정
값 타입 필드를 "깊은 복사 대상"으로 분류하는 것은 범주 오류다. 값 타입에는 얕음/깊음 구분이 없고 `MemberwiseClone`이 이미 독립된 값을 만든다. 직접 손봐야 하는 것은 가변 참조형 필드뿐이다.

## 꼬리 질문
- [[유니티 Instantiate는 프리팹의 참조 필드 중 무엇을 공유하고 무엇을 복제하는가]]
- [[풀 반납 시 원본 프로토타입에서 상태를 복원하는 방식의 이점과 함정 (추론)]]
