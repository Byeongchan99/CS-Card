---
title: 배열을 K개 연속 구간으로 나눌 때 최대 구간합을 최소화하는 문제를 이분 탐색으로 푸는 법
tags: [알고리즘, 이분탐색, 파라메트릭서치]
related: ["left-plus-right-나누기-2-이분-탐색-mid-계산이-오버플로우하는-조건과-수정", "이분-탐색-루프-조건을-left-작거나같음-right에서-left-작음-right로-바꾸면-답이-달라지는-이유", "정렬-배열에서-x-이하-최댓값의-인덱스를-이분-탐색으로-구하는-법"]
parent: 정렬 배열에서 x 이하 최댓값의 인덱스를 이분 탐색으로 구하는 법
date: 2026-08-15
result: 부분
status: 완성
---

## 질문
양의 정수 배열을 순서를 유지한 채 K개의 연속 구간으로 나눈다. "가장 합이 큰 구간의 값"을 최소화하고 싶다. 이 문제를 이분 탐색으로 풀 때, 무엇의 범위를 탐색하고, mid를 놓고 무엇을 판정하며, 판정 결과에 따라 경계를 어느 쪽으로 움직이는가?

## 핵심 답변
배열에서 원소를 찾는 게 아니라 "허용 최대 구간합"이라는 답의 값 자체를 이분 탐색한다(parametric search). 범위는 `left = max(a)`(어떤 구간이든 최소한 가장 큰 원소는 담아야 함), `right = sum(a)`(전부 한 구간에 몰아넣은 경우). mid를 허용 최대 구간합으로 두고, "합이 mid를 넘지 않게 앞에서부터 그리디하게 자를 때 필요한 구간 수 need가 K 이하인가(`need <= K`)"를 판정한다. 가능하면 mid를 후보로 기록하고 더 작은 값을 찾으러 `right = mid - 1`, 불가능하면 허용 합을 키우러 `left = mid + 1`.

## 정리

### 개념
parametric search는 판정 함수가 단조(monotonic)일 때 답의 값을 직접 이분 탐색하는 기법이다. "mid가 가능하면 그보다 큰 값은 전부 가능, mid가 불가능하면 그보다 작은 값은 전부 불가능"이라는 단조성이 있어야 경계가 하나로 정해진다.

### 내부 동작
```csharp
bool Feasible(int[] a, int k, int maxSum)
{
    int need = 1, cur = 0;
    foreach (int t in a)
    {
        if (cur + t <= maxSum) cur += t;   // 현재 구간에 계속 채운다
        else { need++; cur = t; }          // 넘치면 새 구간 시작
    }
    return need <= k;
}

int left = Max(a), right = Sum(a), answer = right;
while (left <= right)
{
    int mid = left + (right - left) / 2;
    if (Feasible(a, K, mid)) { answer = mid; right = mid - 1; }  // 가능 → 후보, 더 작게
    else                     { left = mid + 1; }                 // 불가능 → 더 크게
}
return answer;
```
앞에서부터 넘치기 직전까지 욕심껏 채우고 자르는 그리디가 필요 구간 수를 최소화하므로, 이 need가 K 이하면 mid는 실현 가능하다.

### 왜 그런가
predecessor 인덱스 탐색과 뼈대가 같다. `Feasible(mid)`가 `a[mid] <= x`의 자리를 대신하고, "조건 만족 → 후보 기록 후 한 방향 계속"이 동일하다. 차이는 최댓값을 찾느냐 최솟값을 찾느냐뿐이다. 최솟값을 찾으므로 후보 기록 브랜치에 `right = mid - 1`(더 작게)이 붙는다. 인덱스 predecessor에서는 반대로 `left = mid + 1`이 붙었다.

### 흔한 오해/함정
"가능하면 더 작은 값을 봐야 하니 `right = mid + 1`"은 방향이 거꾸로다. 더 작은 값을 보려면 상한을 내려야 하므로 `right = mid - 1`(또는 mid를 살리는 스타일이면 `right = mid`)다. 움직이는 방향은 "mid 자신이 답 후보인가"를 따지면 기계적으로 정해진다. 가능한 mid는 후보이므로 자신을 넘겨 상한을 내리고, 불가능한 mid는 후보가 아니므로 `left = mid + 1`로 확실히 배제한다.

### 트레이드오프
parametric search가 성립하려면 판정의 단조성이 전제다. 단조성이 깨지는 문제엔 쓸 수 없다. 또한 left/right가 수십억대가 되기 쉬워 `(left+right)/2`가 실제로 오버플로우한다. 인덱스 탐색에서는 교과서적 주의사항에 그쳤던 것이 값 탐색에서는 실제 버그가 되므로 `left + (right - left) / 2`가 필수가 된다.

## 꼬리 질문
- (이 갈래의 바닥)
