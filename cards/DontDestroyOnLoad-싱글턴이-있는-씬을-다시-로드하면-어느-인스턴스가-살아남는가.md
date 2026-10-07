---
title: DontDestroyOnLoad 싱글턴이 있는 씬을 다시 로드하면 어느 인스턴스가 살아남는가
tags: [유니티, 싱글턴, 생명주기]
related: []
parent: 싱글턴 매니저가 MonoBehaviour를 상속하면 쓸 수 있는 기능과 static 클래스가 못 쓰는 이유
date: 2026-10-06
result: 맞음
status: 완성
---

## 질문
아래 GameManager를 Title 씬에 배치하고 Title → Game → Title 순으로 씬을 로드했다. Game 씬에서 score는 120이 되었다. 다시 Title에 돌아온 뒤 GameManager는 몇 개이고, 남은 것은 처음 것인가 새 것인가, score는 얼마인가?

```csharp
public class GameManager : MonoBehaviour
{
    public static GameManager Instance;
    [SerializeField] private int score;
    public int Score => score;

    private void Awake()
    {
        if (Instance != null)
        {
            Destroy(gameObject);
            return;
        }
        Instance = this;
        DontDestroyOnLoad(gameObject);
    }
}
```

## 핵심 답변
1개이고, 처음 만들어진 것이 남으며 score는 120이다. 처음 인스턴스는 `DontDestroyOnLoad`로 씬 전환에서 살아남는다. Title이 다시 로드되면 씬 파일에 들어 있던 새 복제본이 만들어져 자기 `Awake`를 처음 실행하는데, 이미 `Instance`가 있으므로 스스로 파괴된다. 단 `Destroy`는 프레임 끝에 처리되므로 그 프레임 동안은 둘이 잠깐 공존한다.

## 정리
### 내부 동작
```
[Title 1회차] A.Awake → Instance = A, DontDestroyOnLoad(A)
[Game]        A 생존, score = 120
[Title 2회차] B(씬 파일의 복제본).Awake → Instance == A → Destroy(B) 예약
[프레임 끝]   B 실제 파괴 → A만 남음 (score 120)
```

### 흔한 오해/함정
"Awake가 다시 실행된다"는 표현은 오해를 부른다. Awake는 인스턴스당 한 번이며, 두 번째 Title 로드 때 도는 것은 원본 A가 아니라 새 복제본 B의 Awake다. 또 `Destroy`는 호출 즉시 객체를 없애지 않고 현재 프레임의 업데이트 루프가 끝난 뒤 실제로 파괴한다. 같은 프레임 안에서 복제본을 찾거나 참조하는 코드가 있으면 영향을 받을 수 있다.

### 실무(게임 개발)에서 생기는 문제와 해결
이 패턴은 매니저를 Title 같은 진입 씬에 두고 시작하는 프로젝트에서 표준이다. 대신 Game 씬에서 바로 플레이 테스트를 시작하면 매니저가 없으므로, 부트스트랩 씬을 두거나 지연 생성 getter를 함께 쓰는 경우가 많다.

## 꼬리 질문
- [[싱글턴 OnDestroy에서 Instance를 무조건 null로 만들면 생기는 사고]]
