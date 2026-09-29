---
title: MemberwiseClone으로 Clone을 구현하면 참조형 필드에서 무슨 일이 일어나는가
tags: [디자인 패턴, 프로토타입, 얕은복사, CSharp]
related: []
parent: 프로토타입 패턴은 생성 코드에서 무엇에 대한 의존을 끊는가
date: 2026-09-29
result: 부분
status: 완성
---

## 질문
아래 코드에서 `Clone()`은 `MemberwiseClone`으로 구현되어 있다. 세 줄의 출력값은 무엇이며, 왜 그렇게 나오는가?

```csharp
public class Weapon { public int Durability; }

public class Monster
{
    public int Hp;
    public Weapon Weapon;
    public List<string> Buffs;

    public Monster Clone() => (Monster)MemberwiseClone();
}

var goblin = new Monster { Hp = 100, Weapon = new Weapon { Durability = 100 }, Buffs = new List<string>() };

var elite = goblin.Clone();
elite.Hp *= 2;
elite.Weapon.Durability = 50;
elite.Buffs.Add("Rage");

Console.WriteLine(goblin.Hp);
Console.WriteLine(goblin.Weapon.Durability);
Console.WriteLine(goblin.Buffs.Count);
```

## 핵심 답변
출력은 100, 50, 1이다. `MemberwiseClone`은 같은 타입의 새 객체를 만들고 각 인스턴스 필드에 들어 있는 값을 그대로 복사한다. 값 타입인 `Hp`는 값 자체가 복사되어 독립적이지만, 참조 타입인 `Weapon`과 `Buffs`는 힙 객체의 주소가 복사되어 원본과 사본이 같은 객체를 공유한다. 그래서 elite를 통해 공유 객체를 수정하면 goblin에서도 보인다.

## 정리
### 내부 동작
`MemberwiseClone`은 `System.Object`의 `protected` 메서드라 클래스 내부에서만 호출할 수 있고, 보통 public `Clone()`으로 감싼다. 원본과 같은 런타임 타입의 객체를 할당하되 생성자는 호출하지 않는다.

```
goblin ──┬─ Hp = 100
         ├─ Weapon ──────┐
         └─ Buffs ───┐   │
                     │   ▼
elite ───┬─ Hp = 100 │  [Weapon Durability=100]  ← 공유
         ├─ Weapon ──┼──┘
         └─ Buffs ───┴──▶ [List<string>]          ← 공유
```

`elite.Hp *= 2`는 복사가 끝난 뒤 elite 자신의 필드만 200으로 바꾸는 별개의 단계다.

### 흔한 오해/함정
"원본 goblin의 필드값이 바뀌었다"는 부정확하다. `goblin.Weapon` 필드에 담긴 참조는 그대로이고, 바뀐 것은 두 필드가 함께 가리키는 힙의 공유 객체다. 이 구분이 필드 재할당과 공유 객체 수정을 가르는 기준이 된다.

## 꼬리 질문
- [[string은 참조 타입인데 얕은 복사해도 원본이 오염되지 않는 이유]]
- [[프로토타입의 Clone에서 필드별로 얕은 복사와 깊은 복사를 가르는 기준]]
