---
title: string은 참조 타입인데 얕은 복사해도 원본이 오염되지 않는 이유
tags: [C#, 얕은복사, 불변, 참조형식]
related: []
parent: MemberwiseClone으로 Clone을 구현하면 참조형 필드에서 무슨 일이 일어나는가
date: 2026-09-29
result: 부분
status: 완성
---

## 질문
`MemberwiseClone`으로 복제한 `Monster`에서 `Name`은 `"Goblin"`인 `string` 필드, `Weapon`은 클래스 필드다. 사본에 대해 아래를 실행하면 원본의 출력은 무엇인가? `string`도 참조 타입인데 왜 이런 결과가 나오며, `string` 필드는 얕은 복사로 원본이 오염될 가능성 자체가 없다고 말할 수 있는가?

```csharp
elite.Name = "Elite Goblin";
elite.Weapon = new Weapon { Durability = 999 };

Console.WriteLine(goblin.Name);              // ?
Console.WriteLine(goblin.Weapon.Durability); // ? (원래 100)
```

## 핵심 답변
출력은 `Goblin`, `100`이다. 두 대입 모두 공유 객체를 수정한 것이 아니라 elite의 필드가 가리키는 대상을 새 객체로 바꾼 필드 재할당이라 원본과 무관하다. 복제 직후 두 `Name` 필드는 같은 문자열 객체를 가리키지만, `string`은 불변이라 그 객체를 제자리에서 바꾸는 방법이 없다. 공유 객체를 수정하는 경로 자체가 없으므로 얕은 복사로 공유해도 오염될 수 없다.

## 정리
### 왜 그런가
원본 오염 여부를 가르는 것은 타입이 값형인지 참조형인지가 아니라, 공유 객체를 수정했느냐 필드를 재할당했느냐다. `elite.Weapon.Durability = 50`은 공유 객체 수정이라 원본에 보이고, `elite.Weapon = new Weapon()`은 재할당이라 보이지 않는다. `elite.Name = "..."`은 후자와 같다.

### 흔한 오해/함정
"string은 불변이라 복사할 때 내용이 복사된다"는 틀렸다. `MemberwiseClone`은 문자열 내용을 복사하지 않고 참조만 복사한다. 안전한 이유는 복사 방식이 아니라 불변성이다. 같은 이유로 직접 불변으로 설계한 객체도 얕은 복사로 공유해도 안전하다.

## 꼬리 질문
- (이 갈래의 바닥)
