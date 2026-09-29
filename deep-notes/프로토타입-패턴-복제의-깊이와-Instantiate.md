---
title: 프로토타입 패턴 — 복제의 깊이, 그리고 Instantiate가 대신 내려주는 판단
tags: [디자인 패턴, 프로토타입, 얕은복사, 깊은복사, 유니티]
chains: ["프로토타입 패턴은 생성 코드에서 무엇에 대한 의존을 끊는가"]
cards: []
date: 2026-09-29
---

## 생성 코드가 구체 클래스를 모르게 하는 방법은 이미 만들어진 것을 복사하는 것이다

몬스터 스포너가 `new Goblin(...)`, `new Orc(...)`를 직접 호출하면 스포너는 모든 구체 클래스의 이름과 생성자 시그니처를 알아야 한다. 새 몬스터 종류가 생길 때마다 스포너를 열어 분기를 추가해야 하고, 생성자에 인자가 하나 늘면 스포너도 같이 고쳐야 한다. 생성이라는 행위가 "무엇을 만드는가"에 대한 지식과 묶여 있기 때문이다.

프로토타입 패턴은 이 지식을 "이미 초기화가 끝난 원본 객체"에 넘긴다. 스포너는 `Monster` 추상 타입과 `Clone()`이라는 계약만 안다. 원본이 자기 자신을 복제하는 방법을 알고 있으므로, 스포너는 원본이 실제로 고블린인지 오크인지 몰라도 된다.

```csharp
public class Spawner
{
    private readonly Dictionary<string, Monster> _prototypes = new Dictionary<string, Monster>();

    // 키에 해당하는 원본을 등록한다
    public void Register(string key, Monster prototype) => _prototypes[key] = prototype;

    // 등록된 원본을 복제해 새 몬스터를 만든다
    public Monster Spawn(string key) => _prototypes[key].Clone();
}
```

다만 의존이 사라진 것은 아니다. 누군가는 여전히 `new Goblin()`을 한 번 호출해 원본을 만들고 등록해야 한다. 의존은 매 생성 지점에서 "등록 지점 한 곳"으로 이동한다. 이 이동이 가치 있는 이유는 생성은 게임 곳곳에서 반복되지만 등록은 초기화 시점 한 번이기 때문이다.

## 변형은 서브클래스가 아니라 상태로 표현된다

"체력만 두 배인 엘리트 고블린"을 생성자 방식으로 만들려면 `EliteGoblin` 서브클래스를 만들거나 스포너에 별도 생성 분기를 둬야 한다. 프로토타입 방식에서는 고블린 원본을 복제하고, 그 사본의 체력을 두 배로 올린 뒤 새 키로 등록하면 끝이다. 새 클래스가 하나도 늘지 않는다. 종류의 차이가 타입이 아니라 데이터로 표현되기 때문이다.

여기서 흔히 틀리는 지점은 원본 자체를 수정하는 것이다. 등록된 고블린 원본의 체력을 두 배로 바꾸면 이후 스폰되는 일반 고블린도 전부 엘리트가 된다. 원본은 모든 사본의 기준점이므로 반드시 복제한 사본을 가공해 별도로 등록해야 한다. 이 "원본이 오염되면 이후 모든 사본이 오염된다"는 성질이 이 패턴 전체를 관통하는 위험이다.

## MemberwiseClone은 필드의 값을 복사할 뿐이고, 참조형 필드의 값은 주소다

C#에서 `Clone()`을 가장 쉽게 구현하는 방법은 `System.Object`의 `protected` 메서드인 `MemberwiseClone`을 감싸는 것이다. 이 메서드는 원본과 같은 런타임 타입의 새 객체를 할당하고(생성자는 호출하지 않는다), 인스턴스 필드 각각에 들어 있는 값을 그대로 새 객체에 복사한다.

값 타입 필드에서는 값 자체가 복사되므로 사본은 독립적이다. 참조 타입 필드에서 "필드에 들어 있는 값"은 힙 객체의 주소이므로, 사본과 원본은 같은 힙 객체를 가리키게 된다. 이것이 얕은 복사다.

<svg viewBox="0 0 540 312" role="img" aria-label="MemberwiseClone 얕은 복사 메모리 그래프: goblin과 elite가 Weapon·Buffs 힙 객체를 공유하고 Hp만 독립" xmlns="http://www.w3.org/2000/svg" style="max-width:540px;width:100%;height:auto;font-family:inherit"><defs><marker id="proto-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#e2574c"/></marker></defs><rect x="16" y="20" width="190" height="104" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.4"/><line x1="16" y1="48" x2="206" y2="48" stroke="currentColor" stroke-opacity="0.2"/><line x1="16" y1="76" x2="206" y2="76" stroke="currentColor" stroke-opacity="0.12"/><line x1="16" y1="100" x2="206" y2="100" stroke="currentColor" stroke-opacity="0.12"/><text x="28" y="40" font-size="14" font-weight="700" fill="currentColor">goblin<tspan opacity="0.55" font-weight="400"> · 원본</tspan></text><text x="28" y="66" font-size="13" fill="currentColor">Hp = <tspan fill="#3fae7a" font-weight="700">100</tspan></text><text x="28" y="92" font-size="13" fill="currentColor">Weapon</text><text x="28" y="116" font-size="13" fill="currentColor">Buffs</text><circle cx="196" cy="88" r="4" fill="#e2574c"/><circle cx="196" cy="112" r="4" fill="#e2574c"/><rect x="16" y="164" width="190" height="104" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.4"/><line x1="16" y1="192" x2="206" y2="192" stroke="currentColor" stroke-opacity="0.2"/><line x1="16" y1="220" x2="206" y2="220" stroke="currentColor" stroke-opacity="0.12"/><line x1="16" y1="244" x2="206" y2="244" stroke="currentColor" stroke-opacity="0.12"/><text x="28" y="184" font-size="14" font-weight="700" fill="currentColor">elite<tspan opacity="0.55" font-weight="400"> · 사본</tspan></text><text x="28" y="210" font-size="13" fill="currentColor">Hp = <tspan fill="#3fae7a" font-weight="700">200</tspan></text><text x="28" y="236" font-size="13" fill="currentColor">Weapon</text><text x="28" y="260" font-size="13" fill="currentColor">Buffs</text><circle cx="196" cy="232" r="4" fill="#e2574c"/><circle cx="196" cy="256" r="4" fill="#e2574c"/><rect x="356" y="70" width="168" height="46" rx="8" fill="none" stroke="#e2574c" stroke-width="1.5"/><text x="440" y="90" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">Weapon 객체</text><text x="440" y="108" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.75">Durability = 100</text><rect x="356" y="196" width="168" height="46" rx="8" fill="none" stroke="#e2574c" stroke-width="1.5"/><text x="440" y="216" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">List&lt;string&gt; 객체</text><text x="440" y="234" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.75">Buffs 항목들</text><path d="M202,88 L352,86" fill="none" stroke="#e2574c" stroke-width="1.5" marker-end="url(#proto-ah)"/><path d="M202,232 L352,100" fill="none" stroke="#e2574c" stroke-width="1.5" marker-end="url(#proto-ah)"/><path d="M202,112 L352,212" fill="none" stroke="#e2574c" stroke-width="1.5" marker-end="url(#proto-ah)"/><path d="M202,256 L352,226" fill="none" stroke="#e2574c" stroke-width="1.5" marker-end="url(#proto-ah)"/><rect x="16" y="278" width="12" height="12" rx="3" fill="#3fae7a"/><text x="34" y="288" font-size="12" fill="currentColor">값 타입(Hp) — 값이 복사돼 사본이 독립</text><rect x="16" y="296" width="12" height="12" rx="3" fill="#e2574c"/><text x="34" y="306" font-size="12" fill="currentColor">참조 타입(Weapon·Buffs) — 주소가 복사돼 힙 객체를 공유</text></svg>

그래서 `elite.Hp *= 2`는 elite만 바꾸지만, `elite.Weapon.Durability = 50`과 `elite.Buffs.Add("Rage")`는 원본 goblin에게도 그대로 보인다. 정확히 말하면 goblin의 필드 값은 하나도 바뀌지 않았다. goblin의 `Weapon` 필드는 여전히 같은 주소를 담고 있고, 바뀐 것은 그 주소에 있는 공유 객체다.

## 오염의 원인은 타입이 아니라 공유 객체를 수정했느냐다

`string`도 참조 타입이므로 `MemberwiseClone` 직후 원본과 사본은 같은 문자열 객체를 가리킨다. 내용이 복사되는 것이 아니다. 그런데도 `elite.Name = "Elite Goblin"`은 원본에 영향을 주지 않는다. 이 대입은 elite의 필드가 가리키는 대상을 새 문자열로 바꾸는 "필드 재할당"이고, 공유 객체를 건드리지 않기 때문이다. `elite.Weapon = new Weapon()`이 원본에 영향을 주지 않는 것과 완전히 같은 원리다.

문자열이 특별한 점은 불변이라는 것 하나다. 문자열 객체를 제자리에서 바꾸는 API가 없으므로 공유 객체를 수정하는 경로 자체가 존재하지 않는다. 그래서 얕은 복사로 공유해도 원본이 오염될 가능성이 없다. 이 성질은 문자열에만 해당하지 않는다. 불변으로 설계한 객체라면 무엇이든 얕은 복사로 공유해도 안전하다.

## 무엇을 깊게 복제할지는 독립적으로 변해야 하는가로 정한다

`Clone()`을 직접 구현할 때 필드마다 얕은 복사와 깊은 복사를 고르는 기준은 하나다. 원본과 사본이 그 객체의 상태를 서로 독립적으로 바꿔야 하는가.

```csharp
public class Monster
{
    public int Hp;                       // 값 타입: MemberwiseClone으로 이미 독립
    public Weapon Weapon;                // 가변, 인스턴스마다 닳음: 깊은 복사
    public List<string> Buffs;           // 가변, 인스턴스마다 다름: 깊은 복사
    public MonsterStatTable StatTable;   // 종족 공통, 아무도 수정 안 함: 공유
    public string Name;                  // 불변: 공유

    // 인스턴스별로 변해야 하는 참조형 필드만 새로 만들어 독립된 사본을 반환한다
    public Monster Clone()
    {
        var copy = (Monster)MemberwiseClone();
        copy.Weapon = new Weapon { Durability = Weapon.Durability };
        copy.Buffs = new List<string>(Buffs);
        return copy;
    }
}
```

값 타입에는 얕음과 깊음의 구분이 없다. 직접 손봐야 하는 것은 가변 참조 타입뿐이다.

모든 필드를 깊은 복사하는 것은 안전해 보이지만 정답이 아니다. 메모리와 복사 비용이 드는 것은 표면적인 이유이고, 더 중요한 것은 의미다. 종족 스탯 테이블은 모든 고블린이 같은 객체를 본다는 것 자체가 설계 의도다. 인스턴스마다 사본을 두면 밸런스를 수정해도 이미 스폰된 몬스터에는 반영되지 않고, 진실의 원천이 여러 개로 갈라진다. 유니티에서는 스폰마다 불필요한 힙 할당이 쌓여 GC 부담으로 돌아온다는 것도 더해진다.

## Instantiate는 같은 판단을 의미가 아니라 계층 구조로 내린다

유니티의 프리팹과 `Instantiate`는 엔진에 내장된 프로토타입 패턴이다. 프리팹이 원본이고 `Instantiate`가 `Clone()`이다. 그리고 `Instantiate`도 "무엇을 공유하고 무엇을 복제할지"를 결정해야 한다.

```csharp
public class Enemy : MonoBehaviour
{
    [SerializeField] private EnemyStatData _statData;   // ScriptableObject 에셋
    [SerializeField] private Transform _muzzle;          // 프리팹의 자식 "Muzzle"
}
```

두 개를 `Instantiate`하면 `_statData`는 둘 다 같은 에셋을 가리키고, `_muzzle`은 각자 자기 복제본 안의 Muzzle을 가리킨다. 결과만 보면 사람이 Q4 기준으로 설계한 것과 같지만, 유니티는 필드의 설계 의도를 알 방법이 없다. 실제 기준은 구조적이다. 복제 대상 계층 안에 있는 게임 오브젝트와 컴포넌트를 가리키는 참조는 복제본의 대응 객체로 다시 연결(remap)되고, 계층 바깥을 가리키는 참조(텍스처, 메시, 머티리얼, ScriptableObject, 다른 프리팹, 다른 씬 오브젝트)는 그대로 남는다. 필드 값 자체는 얕게 복사하고, 계층 내부 참조만 새로 이어주는 방식이다.

참고로 `[Serializable]`을 붙인 일반 C# 클래스 필드는 이 구분에서 다르게 취급된다. 유니티 오브젝트가 아니라 직렬화 데이터의 일부이므로 복제본마다 별도 인스턴스로 복제된다.

## ScriptableObject에 런타임 상태를 넣으면 원본 프로토타입을 오염시키는 것과 같다

기준이 의미가 아니라 구조라는 것은 곧 유니티가 잘못된 설계를 막아주지 않는다는 뜻이다. `EnemyStatData`에 `CurrentHp`를 넣고 피격 시 `_statData.CurrentHp -= damage`로 깎으면, 모든 Enemy가 같은 에셋 하나를 공유하므로 A가 맞았는데 B의 체력도 줄어든다. 얕은 복사로 공유한 가변 객체를 수정했다는 점에서 `MemberwiseClone`의 Weapon 오염과 정확히 같은 사고다.

에디터에서는 더 고약하다. 씬 오브젝트와 달리 에셋은 플레이 모드를 종료해도 되돌려지지 않는다. 스크립트로 바꾼 값이 메모리상의 에셋에 남아 다음 플레이에도 이어지고, 경우에 따라 디스크에까지 저장될 수 있다. 반면 빌드에서는 런타임 변경이 파일에 저장되지 않아 재시작하면 원래 값으로 돌아간다. 에디터와 빌드의 동작이 달라 재현이 어려운 버그가 된다. 그래서 ScriptableObject는 읽기 전용 정의 데이터로만 쓰고, 런타임 상태는 인스턴스 쪽 필드에 두는 것이 원칙이다.

## 풀링과 결합할 때는 원본에서 복원하되 새로 만들지 말고 값을 부어 넣는다

스폰이 잦아 오브젝트 풀을 붙이면 반납된 인스턴스의 상태를 리셋해야 한다. 이때 레지스트리의 원본 프로토타입을 리셋 기준으로 삼으면 초기값의 원천이 원본 하나로 유지되어, 기획이 원본을 바꾸면 리셋 결과도 자동으로 따라간다.

문제는 리셋을 어떻게 구현하느냐다. 원본의 필드를 그대로 대입하면 모든 풀 인스턴스가 원본의 Weapon과 Buffs를 공유하게 된다. 한 마리가 무기를 쓰는 순간 원본의 내구도가 깎이고, 이후 리셋되는 모든 몬스터가 닳은 무기로 복원된다. 리셋의 기준점 자체가 오염되는 것이다. 이걸 피하려고 리셋마다 `new`로 깊은 복사를 하면 원본과의 공유는 끊기지만, 반납할 때마다 할당이 생겨 할당을 없애려고 붙인 풀링의 목적과 정면으로 부딪힌다.

해소 방법은 참조를 옮기지도, 새로 만들지도 않고 인스턴스가 이미 가진 객체에 원본의 값만 복사해 넣는 것이다.

```csharp
// 원본 프로토타입의 초기 상태를 이 인스턴스가 이미 가진 객체들에 덮어써서 할당 없이 복원한다
public void ResetFrom(Monster prototype)
{
    Hp = prototype.Hp;
    Weapon.Durability = prototype.Weapon.Durability;   // 새 Weapon을 만들지 않는다
    Buffs.Clear();                                      // 내부 배열 용량은 유지된다
    Buffs.AddRange(prototype.Buffs);
    StatTable = prototype.StatTable;                    // 공유 대상은 참조 대입이 맞다
    Name = prototype.Name;                              // 불변이라 공유해도 안전하다
}
```

생성 시점의 `Clone()`은 새 객체를 만드는 깊은 복사, 반납 시점의 `ResetFrom()`은 기존 객체에 값을 붓는 복사로 역할이 나뉜다. 공유할 것과 독립시킬 것을 가르는 기준은 두 경우 모두 같다. 다만 이 방식은 `Monster`에 필드가 추가될 때마다 `Clone()`과 `ResetFrom()` 양쪽을 함께 고쳐야 하는 부담을 남긴다. 한쪽을 빠뜨리면 그 필드는 리셋되지 않거나 원본과 공유된 채로 남는다.
