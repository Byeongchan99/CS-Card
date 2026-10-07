---
title: 싱글턴 OnDestroy에서 Instance를 무조건 null로 만들면 생기는 사고
tags: [유니티, 싱글턴, 생명주기]
related: []
parent: DontDestroyOnLoad 싱글턴이 있는 씬을 다시 로드하면 어느 인스턴스가 살아남는가
date: 2026-10-06
result: 부분
status: 완성
---

## 질문
Awake에서 중복을 파괴하고 `DontDestroyOnLoad`로 유지하는 MonoBehaviour 싱글턴에 `private void OnDestroy() { Instance = null; }`을 추가했다. Title에 배치하고 Title → Game → Title로 돌아오면 다음 프레임의 `GameManager.Instance.Score` 접근은 어떻게 되는가? 한 번 더 왕복하면 GameManager는 몇 개가 되는가? 어떻게 고쳐야 하는가?

## 핵심 답변
첫 귀환 후 접근은 NullReferenceException이다. 새 복제본은 Awake에서 자폭을 예약하고, 프레임 끝에 실제로 파괴되면서 OnDestroy가 static `Instance`를 null로 지운다. 원본은 살아 있지만 아무도 가리키지 않는다. 한 번 더 왕복하면 null을 본 새 복제본이 `Instance`가 되어 GameManager가 두 개가 되고, 새 쪽의 score는 씬에 직렬화된 초기값이다. `if (Instance == this) Instance = null;`로 고친다.

## 정리
### 내부 동작
```
[1차 귀환, 프레임 N]   B.Awake → Instance == A → Destroy(B) 예약, return
[프레임 N 끝]          B 파괴 → B.OnDestroy → Instance = null   (A는 생존)
[프레임 N+1]           Instance.Score → NullReferenceException
[2차 귀환]             C.Awake → Instance == null → Instance = C, DontDestroyOnLoad(C)
                       → A와 C 공존, C.score = 씬 초기값
```

### 왜 그런가
static 필드는 클래스에 하나뿐이다. 어느 인스턴스의 OnDestroy에서 지우든 모든 인스턴스가 공유하는 같은 참조가 지워진다. 그리고 B의 Awake는 OnDestroy보다 먼저, 단 한 번 실행되므로 null이 된 뒤 B가 다시 자리를 차지할 기회는 없다.

### 흔한 오해/함정
첫 귀환과 두 번째 귀환을 하나로 합쳐 생각하면 "null이 된 뒤 새 복제본이 Instance가 된다"고 잘못 예측하게 된다. 자폭한 복제본의 Awake는 이미 끝났다는 점이 핵심이다.

## 꼬리 질문
- [[종료 시 OnDestroy에서 지연 생성 싱글턴에 접근하면 유령 오브젝트가 생기는 이유]]
