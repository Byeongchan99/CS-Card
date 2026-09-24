---
title: 면접 대비 문답
---

분야를 골라 예상 면접 문항으로 대비하세요. 질문을 먼저 보고 소리 내어 답한 다음 펼쳐서 대조하세요. 체크박스로 자신 있는 문항을 표시하면 이 브라우저에 분야별로 저장됩니다.

<div class="osiv">
<div class="tabs" role="tablist">
<button class="tab" type="button" role="tab" data-field="algo" aria-selected="true">알고리즘</button>
<button class="tab" type="button" role="tab" data-field="ds" aria-selected="false">자료구조</button>
<button class="tab" type="button" role="tab" data-field="os" aria-selected="false">운영체제</button>
<button class="tab" type="button" role="tab" data-field="unity" aria-selected="false">유니티</button>
<button class="tab" type="button" role="tab" data-field="csharp" aria-selected="false">C#</button>
<button class="tab" type="button" role="tab" data-field="design-patterns" aria-selected="false">디자인 패턴</button>
<button class="tab" type="button" role="tab" data-field="math-physics" aria-selected="false">게임 수학·물리</button>
<button class="tab" type="button" role="tab" data-field="graphics" aria-selected="false">그래픽스</button>
</div>
<div class="field" data-field="algo">
<p class="note"><strong>답변 프레임.</strong> 정의·결론 한 문장 먼저 → 왜 그렇게 동작·설계됐는지 → 트레이드오프(꼬리질문의 90%가 여기를 찌릅니다) → 필요하면 실제 예시 한 줄. 복잡도는 "느려지는 정도"로 풀어 말하고, 단정("절대 안 됩니다")은 반례 하나로 무너지니 "일반적으로 ~지만 ~한 경우엔 다릅니다"로.</p>
<div class="bar">
<span class="prog"><b class="prog-done">0</b> / <span class="prog-total">37</span> 자신 있음</span>
<span class="bar-sp"></span>
<button class="tool tool-open" type="button">모두 펼치기</button>
<button class="tool tool-hide" type="button" aria-pressed="false">체크 숨기기</button>
<button class="tool tool-reset" type="button">초기화</button>
</div>
<section class="grp">
<div class="grp-head"><h3>복잡도와 재귀</h3><span class="cnt">4문항</span></div>
<p class="grp-note">복잡도는 "무엇에 비례해 느려지는가"로 풀어 말하는 게 핵심입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q1" aria-label="1번 자신 있음"></label>
<details>
<summary><span><span class="qtag">CPX-01</span><span class="qtext">중첩 루프에서 반복 변수가 두 배씩 커지면 복잡도가 어떻게 되나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>반복 변수가 한 칸씩이 아니라 두 배씩 늘어나면 그 루프는 로그 횟수만 돕니다.</strong></p>
<p>예를 들어 바깥 루프에서 변수를 매번 두 배로 키우면, 1에서 2, 4, 8처럼 올라가서 n에 닿기까지 대략 밑이 2인 로그 n번이면 됩니다. 여기에 안쪽 루프가 n번 돌면 전체는 n 곱하기 로그 n에 비례합니다. 그래서 대상 수가 백만이어도 바깥은 스무 번 남짓밖에 안 도는 거죠.</p>
<p>일반화하면, 반복 변수가 더하기나 빼기로 변하면 선형이지만, 곱하기나 나누기로 변하면 대체로 로그가 붙는다고 보면 됩니다. 이분 탐색이 매번 범위를 절반으로 접어 로그가 되는 것도 같은 이유입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>안쪽 루프가 바깥 변수에 딸려 가면요?</q>그때는 단순히 곱하면 안 되고 실제로 도는 총횟수를 더해야 합니다. 예를 들어 안쪽이 바깥 변수만큼만 돌면 1 더하기 2 더하기 4 하는 식이라, 마지막 항이 지배해서 전체가 선형에 가까워집니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q2" aria-label="2번 자신 있음"></label>
<details>
<summary><span><span class="qtag">CPX-02</span><span class="qtext">분할 정복 알고리즘의 복잡도는 어떻게 구하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>분할 정복은 문제를 같은 형태의 작은 하위 문제로 쪼개 풀고 합치는 방식인데, 그 복잡도는 마스터 정리로 판정합니다.</strong></p>
<p>점화식을 세우면 대개 문제를 몇 조각으로 쪼개는지, 각 조각이 몇 분의 일 크기인지, 그리고 쪼개고 합치는 데 얼마가 드는지 세 가지로 정리됩니다. 마스터 정리는 이 합치는 비용과 하위 문제들의 총량 중에 어느 쪽이 더 큰지를 비교해서 전체 복잡도를 정합니다.</p>
<p>병합 정렬을 예로 들면, 절반씩 두 조각으로 나누고 합치는 데 대상 수에 비례하는 비용이 듭니다. 이때 합치는 비용과 하위 문제 총량이 양쪽 다 대상 수에 비례해서 비기기 때문에, 여기에 쪼갠 깊이인 로그가 곱해져 엔 로그 엔이 됩니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q3" aria-label="3번 자신 있음"></label>
<details>
<summary><span><span class="qtag">CPX-03</span><span class="qtext">병합 정렬이 왜 O(n log n)인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>절반씩 나누는 깊이가 로그 엔이고, 각 깊이에서 병합하는 데 드는 비용을 다 합치면 대상 수에 비례하기 때문입니다.</strong></p>
<p>먼저 배열을 절반으로 계속 쪼개면, 하나짜리가 될 때까지 로그 엔 단계가 생깁니다. 그리고 각 단계에서 흩어진 조각들을 다시 병합하는데, 한 단계에서 병합하는 원소를 다 세면 결국 전체 원소를 한 번씩 훑는 셈이라 대상 수에 비례합니다.</p>
<p>그러니까 단계마다 드는 비용은 대상 수에 비례하고, 그런 단계가 로그 엔개 있으니 둘을 곱해서 엔 로그 엔이 됩니다. 중요한 건 이게 최선이든 최악이든 항상 이 깊이만큼 쪼개므로, 최악에서도 이 복잡도가 보장된다는 점입니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q4" aria-label="4번 자신 있음"></label>
<details>
<summary><span><span class="qtag">CPX-04</span><span class="qtext">재귀가 스택 오버플로를 잘 내는 이유는 무엇이고 어떻게 막나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>재귀는 자기를 다시 부를 때마다 스택에 새 프레임이 쌓이는데, 종료 조건에 닿기 전까지 이전 프레임이 안 걷혀서 깊이만큼 계속 쌓이기 때문입니다.</strong></p>
<p>스택에는 운영체제가 정한 크기 한계가 있어서, 깊이가 수만 단계로 가면 프레임이 그만큼 쌓여 금방 그 한계를 넘습니다. 종료 조건이 잘못돼서 무한히 파고들면 특히 그렇고요.</p>
<p>막는 기본은 깊은 재귀를 반복문이나 명시적 스택으로 바꿔서 프레임이 안 쌓이게 하는 겁니다. 꼬리 재귀는 컴파일러가 프레임을 재활용해 완화할 수도 있지만, C#이나 닷넷은 꼬리 호출 최적화를 보장하지 않으니 확실한 해법은 반복문으로 바꾸는 쪽입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>반복문으로 바꾸면 스택을 안 쓰나요?</q>호출 스택은 안 쓰지만, 원래 재귀가 하던 되돌아가기를 흉내 내려면 대신 제 손으로 만든 스택 자료구조에 상태를 담아야 합니다. 결국 쌓이는 자리가 호출 스택에서 힙 위의 스택으로 옮겨가는 건데, 힙은 훨씬 넉넉해서 잘 안 넘칩니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>정렬</h3><span class="cnt">6문항</span></div>
<p class="grp-note">평균은 다 엔 로그 엔이라, 차이를 만드는 건 최악·안정성·캐시 지역성입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q5" aria-label="5번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SORT-01</span><span class="qtext">퀵 정렬의 최악은 언제 O(n²)이 되고 어떻게 완화하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>피벗이 매번 한쪽으로 완전히 치우치게 잡힐 때, 분할이 균형을 잃어서 최악이 됩니다.</strong></p>
<p>예를 들어 이미 정렬된 배열에서 첫 원소를 피벗으로 잡으면, 한쪽은 0개이고 다른 쪽은 나머지 전부로 쪼개집니다. 이러면 절반씩 줄지 않고 하나씩만 줄어서 재귀 깊이가 대상 수만큼 깊어지고, 그래서 전체가 대상 수의 제곱에 비례하게 됩니다.</p>
<p>완화는 피벗을 잘 고르는 겁니다. 무작위로 피벗을 잡거나, 첫 원소와 가운데, 끝 원소의 중앙값을 피벗으로 쓰는 방법이 흔합니다. 그러면 특정 입력이 항상 최악을 때리는 걸 피할 수 있습니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q6" aria-label="6번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SORT-02</span><span class="qtext">실무에서 배열 정렬에 퀵과 병합 중 무엇을 쓰나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>평균은 둘 다 엔 로그 엔이라, 배열을 그냥 정렬할 때는 대개 퀵 계열을 씁니다.</strong></p>
<p>퀵이 배열에서 유리한 이유가 몇 가지 있습니다. 보조 배열 없이 제자리에서 정렬해 추가 메모리를 거의 안 쓰고, 인접한 원소끼리 교환하니 캐시 지역성이 좋고, 상수 인자도 작습니다. 대신 앞서 말한 최악의 대상 수 제곱이 약점입니다.</p>
<p>병합이 나은 자리도 분명합니다. 같은 값의 순서를 지켜야 하는 안정 정렬이 필요할 때, 최악에서도 엔 로그 엔을 보장해야 할 때, 그리고 연결 리스트나 메모리에 다 안 올라가는 외부 정렬처럼 제자리 교환이 어려운 경우에는 병합이 유리합니다. 그래서 상황을 보고 고른다고 답하는 게 안전합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>거의 정렬된 배열이라면요?</q>그럴 땐 삽입 정렬이 의외로 빠릅니다. 각 원소를 왼쪽 정렬된 부분에 끼워 넣는데, 이미 거의 자리를 잡고 있으면 안쪽으로 미는 일이 거의 없어서 비교가 원소당 한 번꼴로 끝나 선형에 수렴합니다. 그래서 실무 정렬 함수도 작은 조각은 삽입 정렬로 마무리하는 경우가 많습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q7" aria-label="7번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SORT-03</span><span class="qtext">안정 정렬이 무엇이고 왜 중요한가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>안정 정렬은 값이 같은 원소들의 원래 순서가 정렬한 뒤에도 그대로 유지되는 정렬입니다.</strong></p>
<p>예를 들어 점수로 정렬하는데 점수가 같은 사람이 여럿이면, 안정 정렬은 먼저 들어온 사람이 그대로 앞에 남습니다. 이게 중요한 건 여러 기준으로 잇달아 정렬할 때입니다. 먼저 이름으로 정렬해 두고 그다음 점수로 정렬하면, 점수가 같은 사람끼리는 이름 순서가 살아남아서 한 번에 두 기준을 겹쳐 줄 세울 수 있습니다.</p>
<p>주의할 점은 언어마다 기본 정렬의 안정성이 다르다는 겁니다. C#에서는 <code>List.Sort</code>나 <code>Array.Sort</code>는 안정성을 보장하지 않고, 링큐의 <code>OrderBy</code>는 안정 정렬입니다. 그래서 순서 유지가 필요하면 아무거나 쓰면 안 되고 안정인 쪽을 골라야 합니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q8" aria-label="8번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SORT-04</span><span class="qtext">계수 정렬은 비교 정렬의 하한을 어떻게 벗어나나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>계수 정렬은 원소끼리 비교하지 않고 각 값이 몇 번 나왔는지를 세서 정렬하기 때문에, 비교 정렬의 하한인 엔 로그 엔에 아예 걸리지 않습니다.</strong></p>
<p>비교로 정렬하면 원소들의 순서 관계를 하나씩 알아내야 해서 이론적으로 엔 로그 엔 아래로는 못 내려갑니다. 계수 정렬은 비교 대신 값을 배열의 인덱스로 삼아 등장 횟수를 세고 그대로 펼치기 때문에, 대상 수에 값 범위를 더한 정도로 끝납니다.</p>
<p>대신 조건과 대가가 있습니다. 값을 인덱스로 써야 하니 범위가 한정된 정수에만 쓸 수 있고 실수나 문자열에는 못 씁니다. 게다가 값 범위가 원소 수보다 훨씬 크면 그 큰 범위만큼 배열을 잡느라 메모리가 폭발하고 오히려 느려집니다. 그래서 값 범위가 원소 수와 비슷하게 좁을 때만 유리합니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q9" aria-label="9번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SORT-05</span><span class="qtext">힙은 왜 우선순위 큐의 표준 구현인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>힙은 최댓값이나 최솟값을 꺼내는 일과 새 값을 넣는 일을 둘 다 값싸게 해내기 때문입니다.</strong></p>
<p>힙은 부모가 자식보다 항상 크거나 항상 작게 유지되는 완전 이진 트리입니다. 이 규칙 덕에 맨 위 루트가 늘 최댓값이나 최솟값이라 그 값을 보는 건 상수 시간이고, 넣거나 빼면서 트리를 다시 정리하는 것도 높이만큼만 오르내리면 돼서 로그 시간입니다. 우선순위 큐가 필요로 하는 게 정확히 이 두 동작이라 힙이 표준으로 쓰입니다. C#도 닷넷 6부터 <code>PriorityQueue</code>를 제공합니다.</p>
<p>힙으로 정렬도 할 수 있는데, 배열을 힙으로 만든 뒤 루트를 하나씩 빼면 엔 로그 엔이 보장되고 추가 메모리도 없습니다. 다만 원소를 꺼낼 때 트리를 위아래로 뛰어다녀 캐시 지역성이 나빠서, 실제로 재 보면 퀵보다 느린 경우가 많습니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q10" aria-label="10번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SORT-06</span><span class="qtext">비교 정렬의 하한이 왜 O(n log n)인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>정렬 결과가 될 수 있는 경우의 수가 원소 수의 계승만큼 많은데, 비교 한 번은 그 후보를 많아야 절반으로만 줄이기 때문입니다.</strong></p>
<p>원소가 엔개면 가능한 정렬 순서가 엔 계승 가지입니다. 비교 정렬은 두 원소의 크고 작음을 물어 이 후보를 좁혀 가는데, 한 번 물으면 답이 예 아니면 아니오라 후보가 많아야 반으로 줄어듭니다. 그러니 엔 계승 가지를 반씩 줄여 하나로 좁히려면 로그 엔 계승만큼 물어야 하고, 이걸 정리하면 엔 로그 엔이 됩니다.</p>
<p>그래서 비교만으로 정렬하는 한 이 아래로는 못 내려갑니다. 계수 정렬 같은 게 더 빠른 건 비교라는 방법 자체를 안 쓰기 때문이지, 이 하한을 뚫은 게 아닙니다.</p>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>탐색과 그래프</h3><span class="cnt">7문항</span></div>
<p class="grp-note">가중치 유무와 음수 간선 여부가 알고리즘 선택을 가릅니다. 게임의 길찾기와 직결됩니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q11" aria-label="11번 자신 있음"></label>
<details>
<summary><span><span class="qtag">GRAPH-01</span><span class="qtext">이진 탐색에서 lower bound는 일반 탐색과 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>일반 이진 탐색은 값을 찾으면 아무 데서나 멈추지만, lower bound는 찾는 값 이상이 처음 나오는 가장 왼쪽 위치를 찾습니다.</strong></p>
<p>이 차이가 중요해지는 건 같은 값이 여러 개 있을 때입니다. 일반 탐색은 그중 어느 하나에서 멈춰 위치가 들쭉날쭉하지만, lower bound는 항상 첫 번째 위치를 콕 집어 줍니다. 게다가 찾는 값이 아예 없어도 그 값이 들어갈 자리를 반환해서, 삽입 위치를 구하는 데도 쓸 수 있습니다.</p>
<p>실무에서 특히 유용한 건 구간에 몇 개가 들어 있는지 셀 때입니다. 어떤 값 이상이 처음 나오는 자리와 어떤 값을 초과하는 값이 처음 나오는 자리를 각각 찾아 빼면, 그 구간에 든 원소 개수가 바로 나옵니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q12" aria-label="12번 자신 있음"></label>
<details>
<summary><span><span class="qtag">GRAPH-02</span><span class="qtext">BFS와 DFS는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>둘 다 그래프를 훑는 방법인데, 가까운 곳부터 넓게 퍼지느냐 한 길로 깊게 파고드느냐가 다릅니다.</strong></p>
<p>BFS는 큐를 써서 한 노드의 이웃을 모두 펼친 다음 그다음 층으로 넘어가므로, 가까운 칸부터 층 순서로 탐색합니다. 그래서 가중치가 없는 그래프에서는 목표에 처음 닿은 경로가 곧 최단 경로가 됩니다. DFS는 막힐 때까지 파고들다가 막히면 가장 최근 갈림길로 되돌아가야 해서 스택을 씁니다.</p>
<p>구현으로 보면, BFS는 먼저 넣은 걸 먼저 꺼내는 큐고 DFS는 나중에 넣은 걸 먼저 꺼내는 스택입니다. 재귀로 짠 DFS는 이 스택을 호출 스택으로 대신하는 것이고, 반복문 DFS는 명시적인 스택 자료구조로 바꾼 것뿐입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>가중치가 있으면 BFS로 최단 경로를 못 구하나요?</q>못 구합니다. BFS가 최단을 보장하는 건 모든 간선의 비용이 같다는 전제에서만입니다. 간선마다 비용이 다르면 층 수가 적은 경로가 비용까지 싼 건 아니라서, 이럴 땐 다익스트라처럼 비용을 우선순위로 다루는 알고리즘이 필요합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q13" aria-label="13번 자신 있음"></label>
<details>
<summary><span><span class="qtag">GRAPH-03</span><span class="qtext">다익스트라와 A*는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>A*는 다익스트라에 목표까지의 추정 비용, 즉 휴리스틱을 더한 것입니다.</strong></p>
<p>다익스트라는 출발점에서 지금까지 든 실제 비용만 보고 가장 싼 노드를 먼저 펼칩니다. A*는 여기에 이 노드에서 목표까지 얼마나 더 들지 추정한 값을 더해서, 실제 비용과 추정 비용의 합이 작은 노드를 먼저 봅니다. 그래서 목표 방향으로 먼저 탐색이 뻗어 나가 훨씬 적은 노드만 보고도 답을 찾습니다. 이 추정을 0으로 두면 A*는 그대로 다익스트라가 됩니다.</p>
<p>대신 추정이 정확해야 최단이 보장됩니다. 목표까지 남은 거리를 실제보다 부풀려 추정하면, 좋은 경로의 우선순위가 잘못 밀려나서 최적해를 놓칠 수 있습니다. 그래서 추정은 실제보다 크지 않게, 즉 과소평가하도록 잡아야 최단 경로가 보장됩니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q14" aria-label="14번 자신 있음"></label>
<details>
<summary><span><span class="qtag">GRAPH-04</span><span class="qtext">다익스트라가 음수 간선을 못 다루는 이유와 대안은 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>다익스트라는 한 노드를 최소 비용으로 확정하면 다시는 안 건드리는데, 음수 간선이 있으면 그 확정을 나중에 더 줄일 수 있어서 전제가 깨지기 때문입니다.</strong></p>
<p>다익스트라는 지금 가장 싼 노드가 최종적으로도 가장 싸다고 믿고 확정합니다. 그런데 음수 간선이 있으면, 나중에 돌아온 경로가 오히려 더 싸질 수 있어서 이미 확정한 값이 틀리게 됩니다.</p>
<p>대안은 두 가지입니다. 벨만-포드는 모든 간선을 정점 수보다 하나 적은 횟수만큼 반복해서 완화하기 때문에 음수 간선을 다룰 수 있고, 한 번 더 돌렸는데도 값이 또 줄어드는 간선이 있으면 음수 사이클이 있다고 탐지합니다. 모든 정점 쌍 사이의 최단 경로가 필요하면 플로이드-워셜을 쓰는데, 거쳐 갈 중간 정점을 하나씩 늘려 가는 삼중 루프로 구합니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q15" aria-label="15번 자신 있음"></label>
<details>
<summary><span><span class="qtag">GRAPH-05</span><span class="qtext">위상 정렬은 무엇이고 언제 가능한가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>위상 정렬은 의존 관계를 어기지 않도록 노드를 일렬로 세우는 것입니다.</strong></p>
<p>먼저 해야 하는 일이 반드시 앞에 오도록 줄 세우는 건데, 대표적인 방법이 두 가지입니다. 하나는 아무도 먼저 안 시켜도 되는, 즉 들어오는 의존이 없는 노드부터 큐에 넣어 처리하면서 이웃의 남은 의존을 하나씩 줄여 가는 방식입니다. 다른 하나는 DFS로 끝까지 갔다가 돌아 나오는 순서를 모아 뒤집는 방식입니다.</p>
<p>단, 방향이 있고 사이클이 없는 그래프에서만 가능합니다. 사이클이 있으면 A가 B보다 앞이고 동시에 B가 A보다 앞이어야 해서 순서가 모순됩니다. 그래서 위상 정렬 결과에 담긴 노드 수가 전체보다 적으면 사이클이 있다는 뜻이라, 사이클 탐지에도 씁니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q16" aria-label="16번 자신 있음"></label>
<details>
<summary><span><span class="qtag">GRAPH-06</span><span class="qtext">최소 신장 트리에서 크루스칼과 프림은 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>둘 다 모든 정점을 잇는 간선 가중치 합이 최소인 트리를 구하는 그리디인데, 간선을 고르는 순서가 다릅니다.</strong></p>
<p>크루스칼은 간선 전체를 가중치 오름차순으로 정렬해 두고, 싼 것부터 보면서 사이클을 안 만드는 간선만 골라 담습니다. 사이클이 생기는지는 유니온-파인드로 두 끝이 이미 같은 묶음인지 확인해서 판정합니다. 프림은 한 정점에서 시작해서, 지금까지 만든 트리에 닿는 간선 중 가장 싼 것을 우선순위 큐로 골라 트리를 키워 나갑니다.</p>
<p>그래서 간선이 성긴 그래프에서는 간선을 정렬해 훑는 크루스칼이, 간선이 조밀한 그래프에서는 정점 중심으로 확장하는 프림이 유리합니다. 둘 다 매번 국소적으로 가장 싼 걸 고르는 그리디지만, 최소 신장 트리 문제에서는 이 그리디가 최적을 보장합니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q17" aria-label="17번 자신 있음"></label>
<details>
<summary><span><span class="qtag">GRAPH-07</span><span class="qtext">유니온-파인드는 어떻게 거의 O(1)이 되나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>유니온-파인드는 원소들을 겹치지 않는 집합으로 관리하는 자료구조인데, 두 가지 최적화를 함께 쓰면 연산이 사실상 상수 시간이 됩니다.</strong></p>
<p>기본 동작은 어떤 원소가 어느 묶음에 속하는지 대표를 찾는 일과, 두 묶음을 합치는 일입니다. 그냥 두면 묶음이 길게 늘어져 대표를 찾는 데 오래 걸리는데, 여기에 경로 압축과 크기 기반 병합을 씁니다. 경로 압축은 대표를 찾으러 가는 길에 들른 노드들을 바로 대표 밑에 붙여서 다음부터 한 번에 찾게 하는 것이고, 크기 기반 병합은 항상 작은 묶음을 큰 묶음 밑에 붙여 트리가 깊어지지 않게 하는 것입니다.</p>
<p>이 둘을 같이 쓰면 연산당 비용이 역아커만 함수라는, 실질적으로 상수나 다름없는 아주 느리게 자라는 값이 됩니다. 그래서 연결 요소 개수 세기, 사이클 판정, 크루스칼의 사이클 검사 같은 데 두루 쓰입니다.</p>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>배열·구간 기법</h3><span class="cnt">5문항</span></div>
<p class="grp-note">같은 계산을 반복하지 않게 상태를 이어 쓰는 게 공통된 아이디어입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q18" aria-label="18번 자신 있음"></label>
<details>
<summary><span><span class="qtag">RANGE-01</span><span class="qtext">투 포인터는 어떻게 O(n)에 두 수의 합을 찾나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>정렬된 배열의 양 끝에 포인터를 두고, 두 포인터가 안쪽으로만 좁혀 오면서 배열을 한 번만 훑기 때문입니다.</strong></p>
<p>왼쪽과 오른쪽 끝에서 시작해 두 값을 더해 목표와 비교합니다. 합이 목표보다 작으면 더 큰 값이 필요하니 왼쪽 포인터를 오른쪽으로 옮겨 합을 키우고, 크면 오른쪽 포인터를 왼쪽으로 옮겨 합을 줄입니다. 이렇게 하면 어느 포인터도 되돌아가지 않고 안쪽으로만 움직여서, 둘이 만날 때까지 대상 수에 비례하는 시간이면 끝납니다.</p>
<p>전제는 배열이 정렬돼 있어야 한다는 겁니다. 정렬이 안 돼 있으면 한쪽을 옮겼을 때 합이 어느 방향으로 갈지 보장할 수 없어서 이 방법이 성립하지 않습니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q19" aria-label="19번 자신 있음"></label>
<details>
<summary><span><span class="qtag">RANGE-02</span><span class="qtext">슬라이딩 윈도우는 어떻게 반복 계산을 줄이나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>윈도우를 한 칸 옮길 때 처음부터 다시 더하지 않고, 빠져나간 값만 빼고 새로 들어온 값만 더해서 매 스텝을 상수 시간에 처리합니다.</strong></p>
<p>크기가 고정된 윈도우의 합을 매번 새로 더하면, 윈도우 크기만큼 곱한 비용이 듭니다. 그런데 이웃한 두 윈도우는 대부분 겹치고 양 끝만 다릅니다. 그래서 이전 합에서 왼쪽으로 빠진 값을 빼고 오른쪽으로 새로 들어온 값을 더하면, 한 칸 옮기는 비용이 상수가 되고 전체는 대상 수에 비례합니다.</p>
<p>핵심은 이전 스텝에서 구한 값을 버리지 않고 이어 쓴다는 겁니다. 겹치는 부분을 다시 계산하지 않는 거죠.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q20" aria-label="20번 자신 있음"></label>
<details>
<summary><span><span class="qtag">RANGE-03</span><span class="qtext">누적 합은 슬라이딩 윈도우와 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>슬라이딩 윈도우가 크기가 고정된 연속 구간에 쓰인다면, 누적 합은 크기가 제각각인 임의의 구간에 대응합니다.</strong></p>
<p>누적 합은 앞에서부터 값을 차곡차곡 더한 배열을 미리 만들어 둡니다. 그러면 어떤 구간의 합은, 그 구간 끝까지의 누적값에서 시작 바로 앞까지의 누적값을 빼기만 하면 상수 시간에 나옵니다. 매번 구간을 처음부터 더하면 질의마다 대상 수에 비례하지만, 이렇게 미리 준비해 두면 질의는 뺄셈 한 번입니다.</p>
<p>그래서 어떤 구간이 들어올지 모를 때 누적 합이 강합니다. 2차원으로 확장하면 부분 직사각형의 합도 상수 시간에 구할 수 있습니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>배열 값이 자주 바뀌면요?</q>그럴 땐 누적 합이 약합니다. 값 하나만 바뀌어도 그 뒤의 누적값을 다 고쳐야 해서 갱신에 대상 수에 비례하는 비용이 듭니다. 값이 자주 바뀌면서 구간 질의도 많으면, 갱신과 질의를 둘 다 로그 시간에 처리하는 세그먼트 트리 같은 구조가 낫습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q21" aria-label="21번 자신 있음"></label>
<details>
<summary><span><span class="qtag">RANGE-04</span><span class="qtext">좌표 압축은 왜 필요한가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>값의 범위는 아주 넓은데 실제 등장하는 값의 개수는 적을 때, 값을 크기 순위로 바꿔서 배열 인덱스로 쓸 수 있게 하려고 씁니다.</strong></p>
<p>누적 합이나 세그먼트 트리처럼 값을 배열 인덱스로 삼는 구조는, 값의 범위만큼 배열을 잡아야 합니다. 그런데 값이 십억까지 벌어져 있는데 실제로는 천 개뿐이라면 그 넓은 범위를 다 잡을 수 없습니다. 이때 등장한 값들을 정렬하고 중복을 없앤 다음 각 값이 몇 번째로 작은지를 매기면, 값 자체 대신 그 순위를 인덱스로 쓸 수 있습니다.</p>
<p>어떤 값의 순위를 찾을 때는 정렬된 목록에서 lower bound로 위치를 구합니다. 값들 사이의 크고 작은 관계는 그대로 보존되니까, 순위로 바꿔도 정렬이나 구간 질의의 결과는 변하지 않습니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q22" aria-label="22번 자신 있음"></label>
<details>
<summary><span><span class="qtag">RANGE-05</span><span class="qtext">비트마스크는 어떻게 여러 상태를 정수 하나로 다루나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>정수 하나의 각 비트를 켜짐과 꺼짐으로 보고, 비트마다 상태 하나를 대응시켜서 여러 상태를 한 정수에 담습니다.</strong></p>
<p>예를 들어 첫 번째 비트는 첫 번째 상태, 두 번째 비트는 두 번째 상태 하는 식입니다. 특정 상태를 켤 때는 OR 연산으로 그 비트를 1로 만들고, 켜져 있는지 확인할 때는 AND 연산으로 그 비트만 걸러 보고, 뒤집을 때는 XOR 연산을 씁니다.</p>
<p>이렇게 하면 상태 여러 개를 정수 하나로 아주 적은 메모리에 담을 수 있고, 비트 연산이 빨라서 여러 상태를 한 번에 검사하거나 합치기도 좋습니다. 게임에서 상태 이상을 겹쳐 표시하거나, 유니티의 레이어 마스크로 여러 레이어를 한 번에 지정하는 게 대표적인 예입니다.</p>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>DP와 그리디</h3><span class="cnt">6문항</span></div>
<p class="grp-note">겹치는 부분 문제냐, 국소 선택으로 충분하냐가 둘을 가릅니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q23" aria-label="23번 자신 있음"></label>
<details>
<summary><span><span class="qtag">DP-01</span><span class="qtext">DP의 탑다운과 바텀업은 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>둘 다 겹치는 부분 문제의 답을 저장해 재사용하는 건데, 큰 문제에서 내려가느냐 작은 문제부터 올라오느냐가 다릅니다.</strong></p>
<p>탑다운은 재귀로 큰 문제를 풀다가 필요한 부분 문제를 만나면 그 답을 계산해 저장해 두는 메모이제이션 방식입니다. 실제로 필요한 부분 문제만 계산한다는 장점이 있지만, 재귀 호출 오버헤드가 있고 깊으면 스택 오버플로 위험이 있습니다. 바텀업은 가장 작은 부분 문제부터 표를 채워 올라오는 타뷸레이션 방식입니다.</p>
<p>바텀업은 반복문이라 스택 위험이 없고, 표를 순서대로 채워서 캐시에도 친화적입니다. 대신 실제로 안 쓰일 부분 문제까지 전부 계산할 수 있다는 게 대가입니다. 그래서 필요한 부분만 성기게 쓰면 탑다운, 어차피 거의 다 쓰거나 깊이가 문제면 바텀업이 무난합니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q24" aria-label="24번 자신 있음"></label>
<details>
<summary><span><span class="qtag">DP-02</span><span class="qtext">최장 증가 부분 수열을 O(n log n)에 어떻게 구하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>각 원소를 끝점으로 하는 길이를 DP로 채우면 대상 수의 제곱이지만, 각 길이마다 끝날 수 있는 가장 작은 마지막 값을 관리하면 로그로 줄어듭니다.</strong></p>
<p>길이별로 그 길이의 증가 수열을 끝낼 수 있는 최소 마지막 값을 배열에 담아 둡니다. 새 원소가 오면 그 값이 들어갈 자리를 이진 탐색의 lower bound로 찾아서, 같은 길이 자리에 더 작은 값이면 갈아 끼우고 모든 값보다 크면 뒤에 이어 붙입니다. 이러면 원소마다 이진 탐색 한 번씩이라 전체가 대상 수 곱하기 로그가 됩니다.</p>
<p>주의할 건 이 배열의 길이가 답인 최장 길이는 맞지만, 배열의 내용 자체가 실제 증가 수열은 아니라는 점입니다. 실제 수열을 복원하려면 각 원소가 어느 길이에 들어갔는지를 따로 기록해야 합니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q25" aria-label="25번 자신 있음"></label>
<details>
<summary><span><span class="qtag">DP-03</span><span class="qtext">0/1 배낭은 왜 그리디로 안 되고 DP가 필요한가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>0/1 배낭은 물건을 쪼갤 수 없어서, 가치 대비 무게가 좋은 것부터 담는 그리디가 최적을 놓치기 때문입니다.</strong></p>
<p>물건을 쪼갤 수 있는 분수 배낭이라면 이야기가 다릅니다. 가치를 무게로 나눈 비율이 좋은 것부터 채우다가 마지막에 남는 공간을 잘라 채우면 그리디로 최적이 나옵니다. 그런데 0/1 배낭은 물건을 통째로 넣거나 아예 빼야 해서, 비율이 가장 좋은 물건을 넣으면 정작 남은 공간이 어중간해져 더 나은 조합을 못 담는 경우가 생깁니다.</p>
<p>그래서 DP로 풉니다. 무게 한도별로 낼 수 있는 최대 가치를 표에 두고, 물건마다 무게를 역순으로 훑으며 갱신하면 한 물건을 두 번 쓰지 않고 채울 수 있습니다. 이러면 물건 수와 무게 한도를 곱한 만큼의 시간이 듭니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q26" aria-label="26번 자신 있음"></label>
<details>
<summary><span><span class="qtag">DP-04</span><span class="qtext">그리디는 언제 실패하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>매 순간의 국소 최선이 전체 최적과 어긋날 때 실패합니다.</strong></p>
<p>대표적인 예가 동전 거스름돈입니다. 1원, 3원, 4원짜리 동전으로 6원을 만든다고 하면, 큰 것부터 담는 그리디는 4원 하나에 1원 둘을 더해 세 개를 씁니다. 그런데 최적은 3원 둘로 두 개면 됩니다. 매번 가장 큰 동전을 고른 게 오히려 손해가 된 거죠.</p>
<p>그래서 그리디가 최적을 보장하려면 두 가지가 필요합니다. 국소적으로 최선을 골라도 전체 최적으로 이어진다는 그리디 선택 속성과, 부분 문제의 최적이 전체 최적을 이룬다는 최적 부분 구조입니다. 이게 성립하는지 증명이 안 되면, 그리디 대신 DP로 모든 조합을 따져야 안전합니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q27" aria-label="27번 자신 있음"></label>
<details>
<summary><span><span class="qtag">DP-05</span><span class="qtext">활동 선택 문제에서 왜 끝나는 시각 기준으로 고르나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>일찍 끝나는 활동을 고를수록 뒤에 남는 시간이 많아져서, 더 많은 활동을 이어 담을 수 있기 때문입니다.</strong></p>
<p>겹치지 않게 활동을 최대한 많이 고르는 문제인데, 끝나는 시각이 이른 것부터 보면서 앞서 고른 것과 안 겹치면 채택합니다. 여기서 끝나는 시각을 기준으로 삼는 게 이 문제의 그리디 선택 속성입니다. 가장 일찍 끝내면 남은 시간이 최대가 되니 나중에 담을 여지가 가장 커집니다.</p>
<p>주의할 건 정렬 기준을 바꾸면 틀린다는 겁니다. 시작 시각이 이른 것부터 고르면 일찍 시작하지만 아주 늦게 끝나는 활동이 다른 걸 다 밀어낼 수 있고, 길이가 짧은 것부터 골라도 반례가 생깁니다. 그래서 무엇을 기준으로 정렬하느냐가 이 문제의 전부라고 할 수 있습니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q28" aria-label="28번 자신 있음"></label>
<details>
<summary><span><span class="qtag">DP-06</span><span class="qtext">백트래킹의 가지치기는 무엇을 잘라내나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>지금까지 만든 부분 해가 이미 답이 될 가능성이 없다고 판단되면, 그 부분 해에서 뻗어 나갈 하위 트리를 통째로 잘라냅니다.</strong></p>
<p>백트래킹은 답 후보를 하나씩 채워 가며 트리를 탐색하는데, 어떤 지점에서 조건을 어겨 더 가 봐야 소용없다는 게 보이면 그 아래를 아예 안 봅니다. 여기서 잘라내는 건 셀 몇 개가 아니라, 그 지점에서 만들어질 수 있는 지수적으로 많은 경우의 수 전체입니다.</p>
<p>그래서 가지치기가 잘 먹히면 완전 탐색이라도 실제로 보는 경우가 크게 줄어듭니다. 유망하지 않은 경로를 얼마나 빨리, 얼마나 많이 쳐 내느냐가 백트래킹 성능을 좌우합니다.</p>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>수학과 문자열</h3><span class="cnt">4문항</span></div>
<p class="grp-note">되풀이를 접어 로그로 줄이거나, 이미 맞춘 정보를 재활용하는 발상들입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q29" aria-label="29번 자신 있음"></label>
<details>
<summary><span><span class="qtag">MATH-01</span><span class="qtext">에라토스테네스의 체는 왜 제곱근까지만 지우면 되나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>대상 수의 제곱근보다 큰 소수의 배수는 이미 더 작은 소인수로 다 지워졌기 때문입니다.</strong></p>
<p>체는 2부터 시작해 각 소수의 배수를 지워 나가고, 다 지우고 남은 수가 소수입니다. 그런데 어떤 합성수든 제곱근 이하의 소인수를 반드시 하나는 가집니다. 두 인수가 모두 제곱근보다 크면 그 곱이 원래 수를 넘어 버리니까요. 그래서 제곱근까지의 소수들로 배수를 지우면 제곱근 위의 합성수는 이미 다 걸러집니다.</p>
<p>덕분에 전체 비용이 대상 수에 로그의 로그를 곱한, 거의 선형에 가까운 수준이라 소수를 대량으로 구할 때 아주 빠릅니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q30" aria-label="30번 자신 있음"></label>
<details>
<summary><span><span class="qtag">MATH-02</span><span class="qtext">유클리드 호제법은 왜 성립하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>두 수의 최대공약수는, 큰 수를 작은 수로 나눈 나머지로 바꿔도 변하지 않기 때문입니다.</strong></p>
<p>두 수를 함께 나누는 공약수는, 큰 수를 작은 수로 나눈 나머지도 똑같이 나눕니다. 그래서 큰 수 자리에 나머지를 넣어도 두 수의 공약수 집합이 그대로라, 최대공약수도 안 바뀝니다. 이걸 반복하면서 나머지로 계속 접어 나가다가, 나머지가 0이 되는 순간의 다른 수가 최대공약수입니다.</p>
<p>뺄셈을 반복하는 대신 나머지로 한 번에 접기 때문에 로그 시간이면 끝납니다. 이걸로 분수를 기약분수로 만들거나, 두 수의 곱을 최대공약수로 나눠 최소공배수를 구하는 데도 씁니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q31" aria-label="31번 자신 있음"></label>
<details>
<summary><span><span class="qtag">MATH-03</span><span class="qtext">빠른 거듭제곱은 어떻게 O(log n)이 되나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>지수를 절반으로 접어서, 절반만큼 거듭제곱한 값을 제곱하는 식으로 곱셈 횟수를 로그로 줄이기 때문입니다.</strong></p>
<p>어떤 수를 엔 번 곱하면 대상 수에 비례하는 곱셈이 필요합니다. 그런데 엔제곱은 엔의 절반제곱을 구해서 그걸 한 번 제곱한 것과 같습니다. 지수가 홀수면 마지막에 밑을 한 번 더 곱해 주면 되고요. 이렇게 지수를 매번 반으로 접으니 곱셈 횟수가 로그로 줄어듭니다.</p>
<p>이건 큰 수의 모듈러 거듭제곱을 다루는 암호나 해시에서 특히 요긴합니다. 또 이 발상을 행렬에 그대로 적용하면 피보나치 같은 선형 점화식도 로그 시간에 구할 수 있습니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q32" aria-label="32번 자신 있음"></label>
<details>
<summary><span><span class="qtag">MATH-04</span><span class="qtext">KMP는 어떻게 O(n+m)에 문자열을 찾나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>불일치가 났을 때, 이미 맞춰 놓은 부분을 버리지 않고 그만큼 패턴을 건너뛰면서 텍스트를 되돌아가지 않기 때문입니다.</strong></p>
<p>순진한 방법은 불일치마다 패턴을 한 칸 밀고 처음부터 다시 비교해서, 텍스트 길이와 패턴 길이를 곱한 비용이 듭니다. KMP는 패턴에서 접두사이면서 동시에 접미사인 부분의 최대 길이를 미리 구해 둡니다. 이걸 실패 함수라고 하는데, 불일치가 나면 이 값만큼은 이미 맞은 상태니까 거기서부터 이어 비교하고, 텍스트를 가리키는 위치는 절대 뒤로 안 옮깁니다.</p>
<p>그래서 텍스트는 한 번만 훑으면 되고, 실패 함수를 만드는 것도 패턴을 자기 자신과 맞춰 보는 방식이라 패턴 길이에 비례합니다. 둘을 합쳐 텍스트 길이 더하기 패턴 길이가 됩니다.</p>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>상황형 문제 해결</h3><span class="cnt">5문항</span></div>
<p class="grp-note">증상을 던지는 문제입니다. 먼저 무엇으로 원인을 좁힐지 말한 다음, 얽힌 개념으로 풉니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q33" aria-label="33번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-01</span><span class="qtext">격자 맵에서 몬스터 길찾기가 인원이 늘수록 눈에 띄게 느려집니다. 어떻게 접근하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>먼저 지금 어떤 탐색을 쓰는지와 한 프레임에 길찾기를 몇 번 도는지를 재서 병목을 좁힌 다음, 그래프의 성질에 맞는 알고리즘으로 바꾸겠습니다.</strong></p>
<p>따져 볼 지점이 몇 가지 있습니다.</p>
<ul>
<li><strong>간선 비용이 균일한가.</strong> 칸 이동 비용이 다 같다면 다익스트라까지 갈 필요 없이 BFS로 충분합니다. 지형마다 비용이 다르면 다익스트라가 맞습니다.</li>
<li><strong>목표가 정해져 있는가.</strong> 목표가 한 점이면 다익스트라 대신 A*로 바꿔서, 목표까지의 거리 추정을 휴리스틱으로 주면 탐색하는 칸 수가 크게 줍니다. 격자에서는 맨해튼 거리 같은 걸 씁니다.</li>
<li><strong>같은 계산을 반복하는가.</strong> 여러 몬스터가 같은 목표로 간다면 매번 새로 푸는 대신, 목표에서 한 번 편 결과를 공유하거나 경로를 캐시해서 호출 자체를 줄입니다.</li>
</ul>
<p>정리하면 측정으로 호출 빈도와 알고리즘을 확인하고, 균일 비용이면 BFS, 단일 목표면 A*, 반복 호출이면 결과 공유 순으로 손봅니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>몬스터가 백 배로 늘면요?</q>개별 길찾기를 아무리 최적화해도 호출 수 자체가 병목이 됩니다. 그때는 한 마리씩 다 풀지 말고, 목표 지점에서 맵 전체로 한 번 편 거리 장을 만들어 몬스터들이 그걸 따라 내려오게 하는 식으로 문제를 아예 다르게 봅니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q34" aria-label="34번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-02</span><span class="qtext">정렬된 점수 데이터에 "몇 점부터 몇 점 사이가 몇 명인가" 질의가 초당 수천 번 들어옵니다. 어떻게 빠르게 하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>매 질의를 처음부터 세는 대신, 이진 탐색으로 구간의 양 끝 위치를 찾아 빼는 방식으로 질의당 로그 시간에 답하겠습니다.</strong></p>
<p>먼저 무엇이 문제인지 보면, 질의마다 배열을 처음부터 훑으면 대상 수에 비례하는 비용이 초당 수천 번 쌓여 느려지는 겁니다. 데이터가 이미 정렬돼 있다는 걸 활용합니다.</p>
<ul>
<li><strong>구간 개수는 위치의 뺄셈으로.</strong> 하한 점수 이상이 처음 나오는 자리를 lower bound로, 상한 점수를 넘는 값이 처음 나오는 자리를 찾아 둘을 빼면 그 구간의 인원이 로그 시간에 나옵니다.</li>
<li><strong>값 범위가 좁으면 누적 합으로.</strong> 점수가 정수이고 범위가 좁으면, 점수별 인원의 누적 합을 미리 만들어 두고 두 누적값을 빼면 질의가 상수 시간이 됩니다.</li>
</ul>
<p>정리하면 정렬을 살려 이진 탐색으로 로그를 만들고, 값 범위가 좁으면 누적 합으로 상수까지 내립니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>점수 범위가 아주 넓고 실제 값은 드문드문하면요?</q>누적 합 배열을 그 넓은 범위로 잡을 수 없으니 좌표 압축을 씁니다. 등장한 점수만 정렬해 순위를 매기고 그 순위를 인덱스로 삼으면, 실제 값 개수만큼의 배열로 누적 합을 만들 수 있습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q35" aria-label="35번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-03</span><span class="qtext">재귀로 짠 맵 탐색이 큰 맵에서 스택 오버플로로 죽습니다. 어떻게 고치나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>먼저 재귀 깊이가 어디까지 가는지 확인하고, 그 깊이가 스택 한계를 넘는 게 원인이면 재귀 DFS를 명시적 스택이나 BFS로 바꾸겠습니다.</strong></p>
<p>원인부터 짚으면, 재귀 DFS는 파고든 깊이만큼 호출 프레임이 쌓이는데 맵이 커서 한 줄로 길게 이어지는 경로가 생기면 그 깊이가 수만 단계로 가 스택이 고갈됩니다.</p>
<ul>
<li><strong>명시적 스택으로 전환.</strong> 호출 스택에 쌓이던 걸 힙 위의 스택 자료구조로 옮기면, 힙은 훨씬 넉넉해서 같은 깊이도 견딥니다. 탐색 순서는 그대로 유지됩니다.</li>
<li><strong>BFS로 대체.</strong> 깊이 순서가 꼭 필요한 게 아니라 방문만 하면 되는 문제라면, 큐를 쓰는 BFS로 바꾸면 깊이만큼 쌓이는 문제 자체가 사라집니다. 가중치가 균일하면 최단 거리까지 덤으로 얻습니다.</li>
</ul>
<p>정리하면 깊이를 재서 원인을 확인하고, 순서 요구에 따라 명시적 스택이나 BFS로 바꿔 쌓이는 자리를 옮기거나 없앱니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q36" aria-label="36번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-04</span><span class="qtext">완전 탐색으로 배치 조합을 다 돌리는 기능이 경우의 수가 늘자 시간이 폭발합니다. 어떻게 줄이나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>먼저 이 문제가 지수적으로 커지는 완전 탐색인지 확인하고, 가지치기로 안 될 경우를 일찍 쳐 내거나 겹치는 부분 문제를 메모이제이션하겠습니다.</strong></p>
<p>원인은 조합 수가 경우의 수에 따라 지수적으로 늘어나는 데 있습니다. 접근은 두 갈래입니다.</p>
<ul>
<li><strong>백트래킹 가지치기.</strong> 부분 배치가 이미 제약을 어겼으면 그 아래로 뻗을 지수적으로 많은 경우를 통째로 잘라냅니다. 유망하지 않은 걸 얼마나 일찍 쳐 내느냐가 성능을 좌우합니다.</li>
<li><strong>상태를 비트마스크로, 겹치면 DP로.</strong> 어떤 것들을 이미 놓았는지가 상태라면 그걸 비트마스크 정수 하나로 표현할 수 있습니다. 서로 다른 순서가 같은 상태로 모이면, 그 상태의 답을 저장해 재사용하는 DP로 지수를 크게 줄입니다.</li>
</ul>
<p>정리하면 완전 탐색인지부터 확인하고, 가지치기로 안 될 가지를 자르고, 상태가 겹치면 비트마스크와 메모이제이션으로 반복 계산을 없앱니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>가지치기로도 안 줄면요?</q>그건 대개 상태가 안 겹치거나 제약이 느슨해 쳐 낼 게 별로 없다는 뜻입니다. 그때는 정확한 최적을 포기하고 그리디나 휴리스틱으로 충분히 좋은 답을 빠르게 내는 쪽으로 방향을 트는 걸 고려합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="algo-q37" aria-label="37번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-05</span><span class="qtext">아이템 목록 정렬 뒤 같은 등급 아이템의 순서가 매번 뒤바뀐다는 버그가 올라옵니다. 원인이 뭘까요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>등급만으로 정렬하면서 불안정 정렬을 썼기 때문일 가능성이 큽니다. 같은 등급끼리의 순서가 보장되지 않는 거죠.</strong></p>
<p>먼저 원인을 좁히면, 등급이 같은 아이템들의 상대 순서가 정렬할 때마다 달라진다는 건 정렬이 안정적이지 않다는 신호입니다. C#에서 <code>List.Sort</code>나 <code>Array.Sort</code>는 안정성을 보장하지 않아서, 같은 키끼리는 원래 순서가 지켜진다는 보장이 없습니다.</p>
<ul>
<li><strong>안정 정렬로 교체.</strong> 순서 유지가 필요하면 안정 정렬인 링큐의 <code>OrderBy</code>를 쓰면 같은 등급끼리 원래 순서가 남습니다.</li>
<li><strong>2차 기준을 명시.</strong> 더 확실하게는 등급이 같을 때 이름이나 획득 순서 같은 2차 기준으로 마저 비교하게 정렬 조건을 정해서, 순서를 아예 결정적으로 만듭니다.</li>
</ul>
<p>정리하면 증상은 불안정 정렬 탓이고, 안정 정렬로 바꾸거나 2차 정렬 기준을 넣어 순서를 확정하면 됩니다.</p>
</div>
</div>
</details>
</div>
</section>
</div>
<div class="field" data-field="ds" hidden>
<p class="note"><strong>답변 프레임.</strong> 정의 한 문장으로 결론을 먼저 말하고, 그다음 왜 그렇게 동작하거나 설계됐는지, 이어서 트레이드오프(꼬리질문의 상당수가 여기를 찌릅니다), 필요하면 실제 예시 한 줄. 자료구조 답은 대부분 "무엇이 빨라지고 대신 무엇을 포기하는가"로 귀결되니, 얻는 것과 잃는 것을 같이 말하면 좋습니다.</p>
<div class="bar">
<span class="prog"><b class="prog-done">0</b> / <span class="prog-total">30</span> 자신 있음</span>
<span class="bar-sp"></span>
<button class="tool tool-open" type="button">모두 펼치기</button>
<button class="tool tool-hide" type="button" aria-pressed="false">체크 숨기기</button>
<button class="tool tool-reset" type="button">초기화</button>
</div>
<section class="grp">
<div class="grp-head"><h3>스택·큐·버퍼</h3><span class="cnt">4문항</span></div>
<p class="grp-note">넣고 빼는 순서를 어떻게 정하느냐가 각 구조의 정체성입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q1" aria-label="1번 자신 있음"></label>
<details>
<summary><span><span class="qtag">LIN-01</span><span class="qtext">스택은 어떤 문제에 자연스럽게 맞나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>스택은 가장 최근에 넣은 것을 가장 먼저 꺼내는 후입선출 구조라, 중첩되거나 되돌아가는 문제에 자연스럽습니다.</strong></p>
<p>대표적인 게 괄호 짝 검사입니다. 여는 괄호는 넣어두고, 닫는 괄호가 나오면 가장 최근에 넣은 것과 맞춰봅니다. 가장 최근에 연 괄호가 가장 먼저 닫히니 후입선출과 정확히 맞아떨어집니다.</p>
<p>같은 원리로 함수 호출 스택, 실행 취소 기능, 깊이 우선 탐색의 되돌아가기에도 쓰입니다. 대신 한쪽 끝에서만 넣고 빼기 때문에 중간에 있는 값에는 바로 접근할 수 없습니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>재귀와 스택은 무슨 관계인가요?</q>재귀는 내부적으로 함수를 부를 때마다 호출 스택에 프레임을 쌓는 것입니다. 그래서 깊은 재귀는 명시적인 스택 하나를 두고 반복문으로 바꿔 풀 수 있고, 그렇게 하면 스택 오버플로도 피할 수 있습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q2" aria-label="2번 자신 있음"></label>
<details>
<summary><span><span class="qtag">LIN-02</span><span class="qtext">덱은 스택·큐와 무엇이 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>덱은 양쪽 끝에서 모두 넣고 뺄 수 있는 구조라, 한쪽 끝만 쓰는 스택과 한 방향만 쓰는 큐를 포괄합니다.</strong></p>
<p>스택은 한쪽 끝에서만, 큐는 뒤로 넣고 앞에서 빼는 한 방향으로만 동작합니다. 덱은 앞뒤 어느 쪽에서든 넣고 빼는 것이 모두 상수 시간이라 더 유연합니다.</p>
<p>그래서 "최근 몇 개만 유지"하는 상황에 잘 맞습니다. 앞에서 오래된 것을 버리고 뒤에서 최근 것을 넣는 식으로 양 끝을 다 쓰기 때문입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>그럼 덱 하나로 스택과 큐를 다 대신할 수 있나요?</q>됩니다. 한쪽 끝만 쓰면 스택처럼, 한쪽으로 넣고 반대쪽에서 빼면 큐처럼 동작합니다. 다만 그만큼 인터페이스가 넓어져서, 스택이나 큐로만 쓸 의도라면 그 이름으로 제한해 쓰는 편이 실수를 줄입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q3" aria-label="3번 자신 있음"></label>
<details>
<summary><span><span class="qtag">LIN-03</span><span class="qtext">스택 두 개로 큐를 구현하면 시간 복잡도가 어떻게 되나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>한 번의 꺼내기가 최악에는 대상 수에 비례해 느려지지만, 전체를 평균 내면 분할 상환으로 상수 시간이 됩니다.</strong></p>
<p>들어오는 값은 입력용 스택에 그냥 쌓습니다. 꺼낼 때는 출력용 스택이 비어 있을 때만 입력용을 통째로 뒤집어 옮기고, 그다음 위에서부터 꺼냅니다. 뒤집으면서 순서가 반대가 되어 먼저 들어온 것이 먼저 나옵니다.</p>
<p>옮기는 그 순간은 원소 수만큼 비용이 들지만, 각 원소가 입력에서 출력으로 옮겨지는 건 평생 한 번뿐입니다. 그래서 넣고 빼는 전체 비용을 원소 수로 나누면 평균이 상수가 됩니다. 스택만 제공되는 환경이나 함수형 불변 큐를 흉내 낼 때 쓰는 고전 기법입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>최악의 한 번이 느린데 실시간에는 문제가 없나요?</q>있을 수 있습니다. 분할 상환은 여러 번에 걸친 평균이라, 하필 옮기는 그 프레임 하나가 크게 튈 수 있습니다. 매 호출의 지연이 일정해야 하는 실시간에서는 평균이 아니라 최악을 기준으로 봐야 합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q4" aria-label="4번 자신 있음"></label>
<details>
<summary><span><span class="qtag">LIN-04</span><span class="qtext">원형 버퍼는 동적 큐에 비해 어떤 장점이 있나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>원형 버퍼는 고정 크기 배열에서 데이터를 옮기지 않고 시작과 끝 인덱스만 회전시켜, 할당과 가비지 컬렉션 없이 최근 몇 개를 유지합니다.</strong></p>
<p>인덱스를 배열 크기로 나눈 나머지로 돌리기 때문에 끝에 닿으면 다시 앞으로 돌아옵니다. 넣기가 상수 시간이고, 꽉 차면 가장 오래된 것을 자동으로 덮어씁니다. 미리 잡아둔 연속 배열을 재사용하니 캐시에도 친화적입니다.</p>
<p>동적 큐는 꽉 차면 더 큰 배열로 다시 할당하고 복사하는 비용이 생기고 가비지 컬렉션 부담도 있는데, 원형 버퍼는 그게 없습니다. 대신 크기가 고정이라는 대가를 치릅니다. 격투 게임의 입력 버퍼나 최근 로그를 담는 링 버퍼에 잘 맞습니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>크기가 고정인 게 문제가 되지는 않나요?</q>"최근 몇 개만 필요"한 용도에서는 오히려 장점입니다. 오래된 것은 어차피 버릴 값이라 덮어써도 되기 때문입니다. 다만 모든 원소를 잃어선 안 되는 상황이라면 원형 버퍼는 맞지 않고, 크기가 늘어나는 동적 큐가 필요합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>배열과 연결 리스트</h3><span class="cnt">4문항</span></div>
<p class="grp-note">연속 메모리냐 흩어진 노드냐, 이 하나가 성능 차이의 뿌리입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q5" aria-label="5번 자신 있음"></label>
<details>
<summary><span><span class="qtag">ARR-01</span><span class="qtext">배열과 연결 리스트는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>배열은 데이터를 연속된 메모리에 담고, 연결 리스트는 노드가 흩어져 포인터로 이어집니다. 그래서 인덱스로 바로 접근하는 건 배열이 상수 시간, 연결 리스트는 앞에서부터 세어 가야 해 대상 수에 비례합니다.</strong></p>
<p>더 중요한 이유는 캐시 지역성입니다. 배열은 값들이 연속으로 붙어 있어 순회할 때 캐시가 잘 맞지만, 연결 리스트는 노드가 메모리 여기저기 흩어져 있어 순회마다 캐시 미스가 잦습니다. 그래서 단순히 처음부터 끝까지 훑는 작업조차 실제로는 배열이 더 빠릅니다.</p>
<p>대신 위치를 이미 알고 있다면 연결 리스트는 포인터만 바꿔 끼우거나 빼서 삽입과 삭제가 상수 시간입니다. 결국 무작위 접근과 순회 성능을 볼 거냐, 특정 위치의 삽입과 삭제를 볼 거냐의 선택입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>그럼 연결 리스트는 언제 쓰는 게 맞나요?</q>순회하면서 지금 손에 쥔 노드를 그 자리에서 빼거나 끼워야 할 때입니다. 대표적으로 LRU 캐시가 노드를 맨 앞으로 옮기려고 이중 연결 리스트를 씁니다. 반대로 위치를 매번 찾아가야 한다면 이점이 거의 사라집니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q6" aria-label="6번 자신 있음"></label>
<details>
<summary><span><span class="qtag">ARR-02</span><span class="qtext">연결 리스트가 중간 삽입에 유리하다는데 항상 그런가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>삽입할 위치를 이미 알고 있을 때만 상수 시간이고, 그 위치를 찾아가는 탐색까지 포함하면 결국 대상 수에 비례합니다.</strong></p>
<p>배열의 중간 삽입은 뒤 원소를 전부 한 칸씩 밀어야 해서 원소 수에 비례하고, 연결 리스트는 포인터 몇 개만 교체하면 되니 상수 시간입니다. 여기까지만 보면 연결 리스트가 압도적입니다.</p>
<p>그런데 삽입할 그 지점까지 가려면 앞에서부터 노드를 따라 세어 가야 하고, 이게 다시 원소 수에 비례합니다. 그래서 "위치를 찾은 다음 삽입"이라면 전체가 선형이라 배열과 큰 차이가 없고, 캐시 지역성까지 고려하면 배열이 나은 경우도 많습니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>그럼 연결 리스트의 상수 시간 삽입이 진짜 빛나는 경우는요?</q>순회하는 동안 현재 노드를 이미 손에 쥐고 있어서, 탐색 없이 바로 그 자리에서 지우거나 끼우는 경우입니다. LRU 캐시에서 방금 쓴 노드를 맨 앞으로 옮기는 동작이 대표적입니다.</span></li>
</ul>
</div>
<div class="trap">
<p class="lab">함정</p>
<p>"연결 리스트는 삽입이 무조건 빠르다"고 단정하면 감점입니다. 상수 시간은 위치를 이미 알 때의 이야기이고, 탐색 비용과 캐시 미스를 함께 말해야 정확합니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q7" aria-label="7번 자신 있음"></label>
<details>
<summary><span><span class="qtag">ARR-03</span><span class="qtext">단일·이중·원형 연결 리스트는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>노드가 가진 링크의 방향과 끝을 어떻게 처리하느냐로 나뉩니다.</strong></p>
<ul>
<li><strong>단일 연결 리스트.</strong> 다음을 가리키는 링크만 있습니다. 앞으로만 순회할 수 있고 그만큼 메모리를 적게 씁니다.</li>
<li><strong>이중 연결 리스트.</strong> 이전과 다음 링크를 둘 다 가집니다. 양방향 순회와 이전 노드로의 상수 시간 접근이 되는 대신 링크가 두 배입니다. 노드 삭제나 LRU 캐시에 유리합니다.</li>
<li><strong>원형 연결 리스트.</strong> 마지막이 다시 처음을 가리킵니다. 라운드로빈처럼 계속 도는 순회나 턴 관리에 씁니다.</li>
</ul>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>LRU 캐시는 왜 하필 이중 연결 리스트인가요?</q>방금 쓴 노드를 맨 앞으로 상수 시간에 옮겨야 하는데, 노드를 중간에서 떼어내려면 그 앞 노드의 링크를 고쳐야 합니다. 단일 링크면 앞 노드를 찾느라 다시 훑어야 하므로, 이전 링크를 가진 이중 연결 리스트가 필요합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q8" aria-label="8번 자신 있음"></label>
<details>
<summary><span><span class="qtag">ARR-04</span><span class="qtext">List에 계속 추가하는데 어떻게 평균 상수 시간이 되나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>내부 배열이 꽉 차면 두 배 크기로 다시 할당하는데, 두 배씩 늘리기 때문에 복사가 점점 드물어져 추가당 평균이 상수 시간이 됩니다.</strong></p>
<p>추가를 여러 번 하는 동안 일어나는 복사 비용을 전부 합치면 원소 수의 약 두 배 정도입니다. 이걸 추가 횟수로 나누면 추가 한 번당 평균이 상수가 되고, 이것이 분할 상환 상수 시간입니다.</p>
<p>대신 하필 재할당이 걸리는 그 한 번은 전체를 복사하느라 원소 수에 비례합니다. 그리고 두 배로 잡다 보니 최대 절반 가까이는 빈 공간으로 남는 낭비가 있습니다. 만약 한 칸씩만 늘린다면 추가마다 복사가 일어나 전체가 원소 수의 제곱이 되어 버립니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>넣을 개수를 미리 안다면요?</q>처음부터 그 개수만큼 용량을 잡아두면 재할당과 복사가 아예 일어나지 않아 더 빠르고, 두 배로 늘리며 생기는 빈 공간 낭비도 없앨 수 있습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>해시 기반 자료구조</h3><span class="cnt">5문항</span></div>
<p class="grp-note">평균 상수 시간의 조회가 어떻게 나오고, 언제 무너지는지가 핵심입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q9" aria-label="9번 자신 있음"></label>
<details>
<summary><span><span class="qtag">HASH-01</span><span class="qtext">포함 여부를 자주 확인해야 하면 List·Dictionary·HashSet 중 무엇을 쓰나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>포함 여부만 자주 본다면 HashSet입니다. 평균 상수 시간에 확인되기 때문입니다.</strong></p>
<p>List는 앞에서부터 하나씩 훑어야 해서 원소 수에 비례합니다. Dictionary와 HashSet은 값을 해시해서 바로 해당 버킷으로 가기 때문에 평균 상수 시간입니다. 존재 여부만 필요하면 HashSet, 그 키에 값까지 매달아 함께 저장할 게 있으면 Dictionary를 씁니다.</p>
<p>대신 HashSet은 순서와 인덱스 접근, 중복 저장을 포기합니다. 그리고 Dictionary의 상수 시간은 키로 찾을 때의 이야기이고, 값으로 찾는 <code>ContainsValue</code>는 딕셔너리라도 전부 훑어 원소 수에 비례합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>원소가 몇 개 안 되면요?</q>수십 개 이하로 적으면 List의 선형 탐색이 캐시에 잘 맞아 오히려 빠를 수 있습니다. 해시는 해시 계산과 버킷 점프 비용이 있어서, 규모가 어느 정도 커져야 그 이득이 비용을 넘어섭니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q10" aria-label="10번 자신 있음"></label>
<details>
<summary><span><span class="qtag">HASH-02</span><span class="qtext">Dictionary 키로 커스텀 클래스를 쓸 때 무엇을 주의하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>GetHashCode와 Equals를 일관되게 함께 오버라이드해야 합니다. 안 하면 내용이 같아도 다른 키로 인식됩니다.</strong></p>
<p>딕셔너리는 <code>GetHashCode</code>로 버킷을 찾고 <code>Equals</code>로 그 안의 항목을 비교합니다. 그런데 커스텀 클래스는 기본이 참조 기준이라, 필드 값이 똑같은 다른 객체라도 해시가 다르고 다른 키로 취급됩니다.</p>
<p>그래서 규칙이 두 가지입니다. <code>Equals</code>가 참이면 해시도 반드시 같아야 하고, 키로 쓰는 객체는 가급적 불변이어야 합니다. 넣은 뒤에 그 객체의 필드를 바꿔 해시가 달라지면, 원래 넣어둔 버킷에서 다시 못 찾게 됩니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>왜 키가 불변이어야 하나요?</q>해시 값으로 버킷을 정해 넣었는데 나중에 그 값이 바뀌면, 조회할 때는 새 해시로 엉뚱한 버킷을 뒤지게 됩니다. 그래서 문자열처럼 한 번 만들면 안 바뀌는 불변 타입이 키로 안전합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q11" aria-label="11번 자신 있음"></label>
<details>
<summary><span><span class="qtag">HASH-03</span><span class="qtext">해시 테이블이 최악에 선형 시간으로 떨어지는 이유는 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>서로 다른 키가 같은 버킷으로 몰리는 해시 충돌 때문입니다. 한 버킷이 길어지면 그 안을 처음부터 훑게 됩니다.</strong></p>
<p>이상적으로는 키가 여러 버킷에 고르게 흩어져서 버킷마다 몇 개뿐이라 상수 시간에 찾습니다. 그런데 해시가 나쁘거나 운이 나빠 한 버킷에 다 몰리면, 사실상 그 버킷 안의 리스트를 훑는 셈이라 원소 수에 비례해 느려집니다.</p>
<p>그래서 채워진 비율인 로드 팩터를 관리합니다. 이게 임계치를 넘으면 테이블을 더 크게 만들고 전체를 다시 해싱해서 다시 고르게 흩뜨립니다. 좋은 분산을 주는 <code>GetHashCode</code>도 그만큼 중요합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>재해싱은 비싸지 않나요?</q>그 순간은 전체를 다시 담느라 원소 수에 비례합니다. 하지만 List의 배열 확장처럼 드물게만 일어나기 때문에, 분할 상환해서 보면 삽입당 평균은 여전히 상수 시간입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q12" aria-label="12번 자신 있음"></label>
<details>
<summary><span><span class="qtag">HASH-04</span><span class="qtext">해시 충돌을 해결하는 방식에는 무엇이 있나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>크게 분리 연결과 개방 주소법 두 가지입니다.</strong></p>
<ul>
<li><strong>분리 연결.</strong> 같은 버킷에 충돌한 것들을 연결 리스트로 이어 붙입니다. 구현이 쉽고 테이블 크기 이상도 담을 수 있는 대신, 노드가 흩어져 추가 메모리를 쓰고 캐시에 불리합니다.</li>
<li><strong>개방 주소법.</strong> 충돌하면 빈 칸을 찾아 다른 자리에 저장합니다. 하나의 연속 배열이라 캐시와 메모리 효율이 좋은 대신, 채운 비율이 높아지면 빈 칸을 찾는 탐사 비용이 커지고 삭제가 까다롭습니다.</li>
</ul>
<p>C#의 <code>Dictionary</code>는 분리 연결 방식을 씁니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>개방 주소법에서 삭제가 왜 까다로운가요?</q>그냥 칸을 비워 버리면, 그 자리를 건너뛰며 저장됐던 뒤쪽 항목들을 조회할 때 중간의 빈 칸에서 탐사가 멈춰 못 찾게 됩니다. 그래서 실제로 지우는 대신 지웠다는 표시만 남기는 tombstone을 두어, 탐사는 계속 이어지되 그 칸은 비었다고 알게 합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q13" aria-label="13번 자신 있음"></label>
<details>
<summary><span><span class="qtag">HASH-05</span><span class="qtext">블룸 필터는 무엇이고 언제 쓰나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>블룸 필터는 여러 해시 함수로 비트 배열에 표시해, 아주 적은 메모리로 어떤 원소가 있는지를 판단하는 확률적 자료구조입니다.</strong></p>
<p>핵심 성질은 한쪽으로만 틀린다는 겁니다. 없는데 있다고 하는 거짓 양성은 생길 수 있어도, 있는데 없다고 하는 거짓 음성은 없습니다. 그래서 "확실히 없다"만은 보장합니다. 대신 원소를 실제로 저장하거나 삭제하거나 열거하지는 못하고, 있는지 없는지 묻는 멤버십 질의만 됩니다.</p>
<p>그래서 캐시나 데이터베이스 앞단에서 "디스크를 뒤질 가치가 있는지" 걸러내는 데 씁니다. 필터가 없다고 하면 바로 건너뛰고, 있다고 할 때만 실제 저장소를 확인하면 헛걸음을 크게 줄일 수 있습니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>거짓 양성이 나면 틀린 결과 아닌가요?</q>최종 판단이 아니라 1차 필터라서 괜찮습니다. 있다고 나온 것만 실제 저장소에서 다시 확인하기 때문에, 거짓 양성은 헛걸음 한 번으로 끝나고 정답 자체는 틀리지 않습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>힙과 우선순위 큐</h3><span class="cnt">4문항</span></div>
<p class="grp-note">최솟값이나 최댓값만 빠르게 뽑는 데 특화된 구조입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q14" aria-label="14번 자신 있음"></label>
<details>
<summary><span><span class="qtag">HEAP-01</span><span class="qtext">우선순위 큐는 왜 힙으로 구현하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>힙은 최솟값이나 최댓값을 상수 시간에 보고, 넣고 빼기를 트리 높이인 로그 시간에 하기 때문입니다. 정렬된 리스트나 일반 큐로는 이 둘을 함께 낼 수 없습니다.</strong></p>
<p>힙은 완전 이진 트리라 높이가 로그 수준입니다. 삽입은 끝에 넣고 부모와 비교하며 위로 올리고, 추출은 루트를 꺼낸 뒤 마지막 원소를 루트로 올려 자식과 비교하며 아래로 내립니다. 둘 다 루트에서 잎까지 한 경로만 정리하므로 로그 시간입니다.</p>
<p>대안과 비교하면 차이가 분명합니다. 정렬된 리스트는 최솟값 읽기는 상수 시간이지만 삽입마다 자리를 만드느라 원소 수에 비례하고, 일반 큐는 우선순위 순 정렬 자체가 안 됩니다. 그래서 A*의 오픈 리스트나, 시간을 키로 삼는 이벤트 스케줄링에 힙을 씁니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>루트를 빼고 나머지를 앞으로 당기면 안 되나요?</q>그건 배열의 앞 삭제라 원소 수에 비례해 느립니다. 힙은 대신 마지막 원소를 루트 자리로 올린 뒤 아래로 내려보내서, 한 경로만 건드리고도 로그 시간을 지킵니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q15" aria-label="15번 자신 있음"></label>
<details>
<summary><span><span class="qtag">HEAP-02</span><span class="qtext">힙을 왜 포인터 없이 배열로 표현할 수 있나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>힙은 마지막 레벨만 왼쪽부터 채우는 완전 이진 트리라, 노드를 위에서부터 빈틈없이 배열에 담을 수 있기 때문입니다.</strong></p>
<p>0부터 세는 배열에서 인덱스 i의 두 자식은 2 곱하기 i에 1과 2를 더한 자리, 부모는 i에서 1을 빼고 2로 나눈 자리입니다. 부모와 자식으로 오가는 게 산술 한 번이라 포인터가 아예 필요 없습니다.</p>
<p>덕분에 노드가 연속 메모리에 놓여 캐시에 친화적이고 포인터 저장 공간도 아낍니다. 이 조밀한 배열 대응은 완전 트리라는 성질이 보장하는 것이라, 중간에 빈 자리가 생기는 트리에는 이 인덱스 계산이 그대로 들어맞지 않습니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>일반 이진 트리도 배열로 담을 수 있나요?</q>담을 수는 있지만 한쪽으로 치우친 트리는 빈 칸이 잔뜩 생겨 메모리가 크게 낭비됩니다. 힙은 항상 완전 트리라서 빈 칸 없이 딱 맞게 들어가는 것이 장점입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q16" aria-label="16번 자신 있음"></label>
<details>
<summary><span><span class="qtag">HEAP-03</span><span class="qtext">다익스트라에서 이미 힙에 든 노드의 우선순위를 낮춰야 할 때, 기본 힙의 문제는 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>기본 이진 힙은 특정 원소가 지금 힙의 어디에 있는지 몰라서, 그 원소를 찾는 데만 원소 수에 비례하는 시간이 듭니다.</strong></p>
<p>다익스트라와 A*는 더 짧은 경로를 발견하면 그 노드의 거리 값을 낮추는 감소 키 연산이 필요합니다. 그런데 힙은 루트 근처의 대소 관계만 알 뿐, 임의의 원소가 배열 어디에 있는지는 알지 못합니다.</p>
<p>이걸 푸는 방법이 두 가지입니다. 하나는 원소에서 힙 인덱스로 가는 매핑을 따로 두는 인덱스드 힙으로, 위치를 상수 시간에 찾아 위로 올리는 정리를 로그 시간에 합니다. 다른 하나는 갱신 대신 새 값을 그냥 또 넣고, 나중에 꺼낼 때 낡은 항목이면 무시하는 게으른 삭제입니다. 구현이 단순해 실무에서 자주 씁니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>게으른 삭제의 단점은요?</q>낡은 항목이 힙에 계속 쌓여 크기가 커지고, 꺼낼 때마다 이게 아직 유효한 값인지 확인하는 절차가 붙습니다. 대신 인덱스 매핑을 따로 관리하지 않아도 되어 코드가 훨씬 간단하다는 이점이 있습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q17" aria-label="17번 자신 있음"></label>
<details>
<summary><span><span class="qtag">HEAP-04</span><span class="qtext">스트림에서 중앙값을 계속 구하려면 어떤 자료구조를 쓰나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>최대 힙과 최소 힙 두 개로 데이터를 절반씩 나눠 담으면, 중앙값을 상수 시간에 읽고 삽입을 로그 시간에 할 수 있습니다.</strong></p>
<p>작은 절반은 최대 힙에, 큰 절반은 최소 힙에 담습니다. 그리고 두 힙의 크기 차이를 1 이하로 맞추면, 중앙값은 두 힙의 루트에서 바로 읽힙니다. 삽입할 때는 값이 어느 쪽에 속하는지 정해 넣고, 크기가 틀어지면 한쪽 루트를 반대편으로 옮겨 재조정하기 때문에 로그 시간입니다.</p>
<p>매번 전체를 다시 정렬한다면 삽입마다 비용이 훨씬 크지만, 두 힙 방식은 정렬을 다시 하지 않고 중앙값만 실시간으로 추적합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>왜 한쪽은 최대 힙, 다른 쪽은 최소 힙인가요?</q>중앙값은 작은 절반에서 가장 큰 값과, 큰 절반에서 가장 작은 값 사이에 있습니다. 그래서 작은 쪽은 최댓값이 루트로 오는 최대 힙, 큰 쪽은 최솟값이 루트로 오는 최소 힙이어야 두 후보를 상수 시간에 볼 수 있습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>트리</h3><span class="cnt">6문항</span></div>
<p class="grp-note">균형을 어떻게 유지하고, 무엇에 최적화했느냐로 종류가 갈립니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q18" aria-label="18번 자신 있음"></label>
<details>
<summary><span><span class="qtag">TREE-01</span><span class="qtext">이진 탐색 트리는 왜 균형이 깨지면 느려지나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>정렬된 순서로 삽입하면 한쪽으로만 자라 사실상 연결 리스트가 되고, 그러면 탐색이 원소 수에 비례해 느려집니다.</strong></p>
<p>이진 탐색 트리의 탐색과 삽입은 트리의 높이에 비례합니다. 균형이 잡히면 높이가 로그 수준이라 로그 시간이지만, 한쪽으로 치우쳐 높이가 원소 수만큼 되면 결국 전부 훑는 것과 같아집니다.</p>
<p>그래서 AVL 트리나 Red-Black 트리는 삽입과 삭제 때 회전으로 높이를 로그 수준으로 유지합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>어떤 경우에 이렇게 치우치나요?</q>이미 정렬된 데이터를 순서대로 넣을 때가 대표적입니다. 매번 새 값이 한쪽 끝에만 붙어서 트리가 한 방향으로만 자랍니다. 그래서 입력 순서를 통제하기 어려운 상황일수록 균형 트리가 필요합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q19" aria-label="19번 자신 있음"></label>
<details>
<summary><span><span class="qtag">TREE-02</span><span class="qtext">AVL 트리는 어떻게 균형을 유지하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>모든 노드에서 좌우 서브트리의 높이 차를 1 이하로 강제하고, 이 조건이 깨지면 회전으로 되돌립니다.</strong></p>
<p>높이 차를 1 이하로 묶으면 트리가 한쪽으로 치우칠 수 없어서 높이가 로그 수준으로 유지되고, 탐색과 삽입, 삭제가 모두 로그 시간이 보장됩니다.</p>
<p>대신 삽입과 삭제 때마다 균형이 깨지지 않았는지 확인하고 필요하면 회전해야 합니다. 회전 자체는 링크 몇 개만 바꾸는 상수 시간 작업입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>회전이 상수 시간인데 왜 AVL이 삽입에 불리하다고 하나요?</q>회전 한 번은 싸지만, 균형 조건이 엄격해서 회전이 자주 일어나기 때문입니다. 그 빈도가 Red-Black 트리보다 높아서 삽입과 삭제가 상대적으로 느립니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q20" aria-label="20번 자신 있음"></label>
<details>
<summary><span><span class="qtag">TREE-03</span><span class="qtext">AVL과 Red-Black 트리는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>둘 다 로그 시간을 보장하는 균형 이진 탐색 트리인데, AVL이 더 엄격하게 균형을 잡고 Red-Black은 더 느슨하게 잡습니다.</strong></p>
<table>
<thead><tr><th></th><th>균형</th><th>탐색</th><th>삽입·삭제</th></tr></thead>
<tbody>
<tr><td>AVL</td><td>엄격(높이 차 1 이하)</td><td>트리가 더 낮아 빠름</td><td>회전이 잦아 느림</td></tr>
<tr><td>Red-Black</td><td>느슨</td><td>살짝 느림</td><td>회전이 적어 빠름</td></tr>
</tbody>
</table>
<p>그래서 읽기가 압도적으로 많으면 AVL이, 삽입과 삭제가 자주 섞이면 Red-Black이 유리합니다. C#의 <code>SortedDictionary</code>와 <code>SortedSet</code>이 Red-Black 트리로 구현돼 있습니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>표준 라이브러리들이 Red-Black을 많이 쓰는 이유는요?</q>범용 컨테이너가 마주하는 상황은 대개 탐색과 삽입, 삭제가 골고루 섞여 있는데, Red-Black이 그 혼합에서 전체적으로 무난하기 때문입니다. 어느 한쪽에 극단적으로 치우친 워크로드가 아니라면 이쪽이 안전한 기본값입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q21" aria-label="21번 자신 있음"></label>
<details>
<summary><span><span class="qtag">TREE-04</span><span class="qtext">트리 순회 세 가지는 각각 언제 쓰나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>루트를 언제 방문하느냐로 나뉘고, 그에 따라 용도가 다릅니다.</strong></p>
<ul>
<li><strong>전위 순회.</strong> 루트를 먼저 보고 왼쪽, 오른쪽 순입니다. 트리 복사나 직렬화에 씁니다. 부모를 먼저 만들어야 위에서부터 다시 지을 수 있기 때문입니다.</li>
<li><strong>중위 순회.</strong> 왼쪽, 루트, 오른쪽 순입니다. 이진 탐색 트리를 오름차순으로 출력할 때 씁니다.</li>
<li><strong>후위 순회.</strong> 왼쪽, 오른쪽, 루트 순입니다. 트리를 삭제하거나 하위 결과를 위로 모을 때 씁니다. 자식부터 처리해야 안전하게 지우고 합칠 수 있습니다.</li>
</ul>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>왜 이진 탐색 트리의 중위 순회가 정렬된 순서인가요?</q>이진 탐색 트리는 왼쪽이 자기보다 작고 오른쪽이 큰 성질이 있습니다. 그래서 왼쪽을 다 보고 자기를 본 다음 오른쪽을 보면, 자연스럽게 작은 값부터 큰 값 순으로 나옵니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q22" aria-label="22번 자신 있음"></label>
<details>
<summary><span><span class="qtag">TREE-05</span><span class="qtext">데이터베이스 인덱스는 왜 이진 트리 대신 B-트리·B+트리를 쓰나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>한 노드에 여러 키를 담아 자식을 많이 두면 트리 높이가 확 낮아지고, 그만큼 디스크를 읽는 횟수가 줄기 때문입니다.</strong></p>
<p>디스크 접근은 메모리보다 수만 배 느려서, 노드를 몇 번 타고 내려가느냐가 성능을 좌우합니다. 이진 트리는 노드마다 자식이 둘뿐이라 높이가 꽤 높아지지만, B-트리는 한 노드가 수백 개의 키를 담아 자식이 많은 만큼 높이가 훨씬 낮습니다.</p>
<p>B+트리는 여기서 한 걸음 더 나아가, 실제 데이터는 잎에만 두고 그 잎들을 연결 리스트로 이어 둡니다. 그래서 범위 검색과 순차 스캔이 빠르고, 이것이 관계형 데이터베이스 인덱스의 표준입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>메모리 안에서 쓰는 자료구조는 왜 그냥 이진 트리를 쓰나요?</q>메모리는 접근 속도가 균일하게 빨라서 노드 접근 횟수보다 비교 횟수가 더 중요합니다. 디스크처럼 한 번의 읽기가 비싸지 않으니, 굳이 여러 키를 한 노드에 뭉쳐 다진 트리로 만들 이유가 적습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q23" aria-label="23번 자신 있음"></label>
<details>
<summary><span><span class="qtag">TREE-06</span><span class="qtext">트라이는 해시 테이블에 비해 어떤 장점이 있나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>트라이는 같은 접두사로 시작하는 단어들을 빠르게 찾을 수 있습니다. 해시 테이블은 완전히 일치하는 키만 빠르게 찾습니다.</strong></p>
<p>트라이는 루트에서 문자를 하나씩 자식으로 내려가는 트리라, 검색 시간이 저장된 단어 수와 무관하게 찾는 단어의 길이에만 비례합니다. 접두사에 해당하는 노드까지 내려간 다음 그 아래 서브트리를 순회하면, 같은 접두사를 가진 단어가 전부 나옵니다.</p>
<p>반면 해시 테이블은 접두사로 시작하는 것들을 찾으려면 전체를 훑어야 합니다. 대신 트라이는 노드마다 자식 링크를 둬서 메모리를 더 씁니다. 게임에서는 채팅 자동완성이나 욕설 필터에 씁니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>자동완성이 왜 트라이에 딱 맞나요?</q>사용자가 친 접두사까지 트리를 따라 내려간 다음, 그 아래에 매달린 단어들만 뽑으면 되기 때문입니다. 전체 단어를 뒤질 필요 없이 후보가 바로 그 서브트리로 좁혀집니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>그래프와 응용 구조</h3><span class="cnt">3문항</span></div>
<p class="grp-note">기본 구조들을 조합해 실제 문제를 푸는 자료구조들입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q24" aria-label="24번 자신 있음"></label>
<details>
<summary><span><span class="qtag">GRPH-01</span><span class="qtext">그래프를 인접 행렬과 인접 리스트 중 무엇으로 표현하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>간선이 빽빽한 밀집 그래프면 인접 행렬, 간선이 성긴 희소 그래프면 인접 리스트가 유리합니다.</strong></p>
<table>
<thead><tr><th></th><th>메모리</th><th>간선 조회</th><th>유리한 곳</th></tr></thead>
<tbody>
<tr><td>인접 행렬</td><td>정점 수의 제곱</td><td>상수 시간</td><td>밀집 그래프</td></tr>
<tr><td>인접 리스트</td><td>정점 수 더하기 간선 수</td><td>그 노드의 연결 수만큼</td><td>희소 그래프</td></tr>
</tbody>
</table>
<p>인접 행렬은 두 정점이 이어졌는지 바로 확인하는 대신 정점 수의 제곱만큼 메모리를 먹습니다. 인접 리스트는 실제 있는 간선만 담아 메모리를 아끼는 대신, 특정 두 정점의 연결을 확인하려면 그 노드의 이웃을 훑어야 합니다. 격자 맵은 한 칸이 상하좌우 넷 정도만 이어지는 희소 그래프라 인접 리스트를 씁니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>정점이 아주 많고 대부분 안 이어져 있으면요?</q>인접 행렬은 대부분 비어 있는데도 정점 수의 제곱만큼 메모리를 다 잡아 낭비가 큽니다. 그래서 규모가 큰 희소 그래프에서는 사실상 인접 리스트가 필수입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q25" aria-label="25번 자신 있음"></label>
<details>
<summary><span><span class="qtag">GRPH-02</span><span class="qtext">유니온-파인드는 무엇을 판단하는 자료구조인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>두 원소가 같은 집합에 속하는지, 즉 서로 연결되어 있는지를 빠르게 판단하고 두 집합을 합치는 자료구조입니다. 핵심은 소속 판단이 아니라 연결성 판단입니다.</strong></p>
<p>빠른 비결은 두 가지 최적화입니다. 하나는 경로 압축으로, 루트를 찾아 올라간 김에 그 경로의 노드들을 전부 루트에 바로 매달아 트리를 납작하게 만듭니다. 다른 하나는 낮은 트리를 높은 트리 밑에 붙이는 랭크 합치기입니다.</p>
<p>이 둘을 함께 쓰면 분할 상환으로 거의 상수 시간에 가까워집니다. 완전한 상수는 아니지만 실질적으로는 상수처럼 동작합니다. 게임에서는 연결된 영역 판정이나 미로 생성에, 알고리즘에서는 최소 신장 트리의 사이클 검사에 씁니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>경로 압축이 정확히 무엇을 하나요?</q>어떤 원소의 루트를 찾느라 위로 올라가는데, 그 김에 지나온 노드들을 전부 루트에 곧바로 연결해 버립니다. 그러면 다음번에 같은 노드를 조회할 때 한 번에 루트에 닿아서 점점 빨라집니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q26" aria-label="26번 자신 있음"></label>
<details>
<summary><span><span class="qtag">GRPH-03</span><span class="qtext">LRU 캐시는 어떤 자료구조로 모든 연산을 상수 시간에 하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>이중 연결 리스트와 해시맵을 조합합니다. 그러면 조회와 갱신, 삭제가 모두 상수 시간이 됩니다.</strong></p>
<p>가장 오래 안 쓴 것을 버리려면 사용 순서를 유지해야 하는데, 큐만으로는 중간에 다시 쓴 항목을 앞으로 끌어올릴 수 없습니다. 그래서 사용 순서는 이중 연결 리스트로 관리해 방금 쓴 것을 맨 앞으로 상수 시간에 옮기고, 키에서 그 노드의 위치는 해시맵으로 상수 시간에 찾습니다.</p>
<p>그래서 조회가 들어오면 해시맵으로 노드를 찾아 리스트 맨 앞으로 옮기고, 용량이 꽉 차면 리스트 꼬리에 있는 가장 오래된 노드를 버립니다. 두 구조가 각자의 약점을 서로 메워 줍니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>왜 단일 연결 리스트로는 안 되나요?</q>노드를 중간에서 떼어내려면 그 앞 노드의 링크를 고쳐야 하는데, 단일 링크면 앞 노드를 찾느라 다시 훑어야 해서 상수 시간이 깨집니다. 이전 링크를 가진 이중 연결 리스트라야 앞뒤를 바로 이어붙일 수 있습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>상황형 문제 해결</h3><span class="cnt">4문항</span></div>
<p class="grp-note">증상을 던지고 자료구조로 풀게 하는 유형입니다. 먼저 무엇으로 원인을 좁힐지부터 말하세요.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q27" aria-label="27번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-01</span><span class="qtext">게임을 오래 켜둘수록 점점 느려지고 메모리도 계속 늘어납니다. 자료구조 관점에서 무엇을 의심하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>먼저 어디서 메모리가 쌓이는지 프로파일러로 좁힌 다음, 계속 커지기만 하고 비워지지 않는 컬렉션을 의심합니다.</strong></p>
<ul>
<li><strong>끝없이 커지는 리스트.</strong> 이벤트 로그나 히스토리를 리스트에 추가만 하고 안 비우는 경우가 흔합니다. 상한을 두거나 원형 버퍼로 최근 몇 개만 유지하면 메모리가 일정하게 유지됩니다.</li>
<li><strong>안 지워지는 딕셔너리 키.</strong> 이미 죽은 오브젝트의 키를 딕셔너리에서 안 지우면, 크기가 계속 커지고 재해싱이 반복되며 조회도 느려집니다.</li>
<li><strong>캐시가 안 맞는 순회.</strong> 흩어진 연결 리스트나 파편화된 컬렉션을 매 프레임 훑으면 캐시 미스가 늘어 점점 느려집니다. 연속 배열로 바꾸면 개선됩니다.</li>
</ul>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>호출 빈도가 100배가 되면 어떻게 되나요?</q>매 프레임 도는 뜨거운 경로라면, 원소 수에 비례하는 순회나 잦은 할당이 그대로 100배로 증폭됩니다. 그래서 이런 경로일수록 상수 시간 조회가 되는 구조와, 미리 할당해 재사용하는 버퍼가 중요해집니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q28" aria-label="28번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-02</span><span class="qtext">적이 많아지니 충돌 검사가 프레임을 잡아먹습니다. 어떻게 개선하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>먼저 모든 쌍을 다 비교하고 있는지 확인합니다. n개를 서로 다 비교하면 n의 제곱으로 늘어나기 때문에, 공간 분할로 비교 후보를 줄이는 것이 핵심입니다.</strong></p>
<p>월드를 격자나 쿼드트리로 나눠 각 오브젝트를 자기가 속한 칸에 등록하고, 같은 칸과 인접한 칸에 있는 것끼리만 비교합니다. 그러면 멀리 떨어져 부딪힐 일 없는 쌍은 아예 보지 않게 되어 검사량이 크게 줄어듭니다. 물리 엔진의 브로드 페이즈가 바로 이 방식입니다.</p>
<p>대신 칸 크기를 잘못 잡으면 오브젝트가 한 칸에 몰려 효과가 사라지므로, 오브젝트 크기와 밀도에 맞춰 칸을 정하는 게 중요합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>오브젝트 분포가 들쭉날쭉하면 어떻게 하나요?</q>균일한 격자는 텅 빈 칸과 붐비는 칸이 갈려서 비효율적입니다. 이럴 때는 점 분포에 맞춰 쪼개는 k-d 트리나 쿼드트리가 밀도가 불균일해도 균형을 잘 유지합니다. 다만 삽입과 삭제가 잦으면 균형이 깨져 재구축이 필요할 수 있습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q29" aria-label="29번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-03</span><span class="qtext">인벤토리에 특정 아이템이 있는지 확인하는 코드가 느립니다. 지금은 List를 처음부터 훑고 있어요.</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>포함 여부 확인이 잦다면 List 대신 HashSet이나 Dictionary로 바꿔 평균 상수 시간으로 만듭니다.</strong></p>
<p>List의 탐색은 원소 수에 비례해서 아이템이 늘수록 선형으로 느려집니다. 해시 기반 구조는 키를 해시해 바로 버킷으로 가기 때문에 평균 상수 시간에 확인합니다.</p>
<p>대신 HashSet은 순서와 인덱스 접근을 포기합니다. 화면에 표시할 순서가 필요하다면, 순서용 리스트와 조회용 HashSet을 함께 두는 방법도 있습니다. 아이템에 고유 ID가 있다면 그 ID를 키로 Dictionary를 만드는 게 가장 깔끔한 마이그레이션입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>아이템이 열 몇 개뿐이면요?</q>그 정도 규모면 List의 선형 탐색이 캐시에 잘 맞아 오히려 더 빠를 수 있습니다. 해시로 바꿔서 얻는 이득은 아이템 수가 충분히 커질 때 나오므로, 작은 컬렉션까지 굳이 바꿀 필요는 없습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="ds-q30" aria-label="30번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-04</span><span class="qtext">실시간 순위표에서 상위 몇 명을 계속 뽑아야 하는데, 지금은 점수가 갱신될 때마다 전체를 다시 정렬합니다.</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>매번 전체를 다시 정렬하는 건 갱신마다 비용이 큽니다. 상위 몇 명만 필요하면 힙을, 순위가 계속 바뀌고 임의 구간 조회가 필요하면 정렬된 균형 구조를 씁니다.</strong></p>
<p>상위 몇 명만 필요할 때는 그 개수만큼의 크기를 가진 힙을 유지하면 됩니다. 새 점수가 들어와도 경계값과만 비교하면 되니 갱신이 로그 시간이고, 전체를 정렬할 필요가 없습니다.</p>
<p>점수가 자주 바뀌고 임의의 순위나 구간을 조회해야 한다면, Red-Black 트리나 스킵 리스트 같은 정렬된 구조가 삽입과 삭제, 조회를 모두 로그 시간에 처리합니다. 레디스의 정렬 집합이 스킵 리스트로 이 기능을 제공합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>플레이어가 100배로 늘면 어떻게 되나요?</q>전체를 다시 정렬하는 방식은 갱신마다 비용이 그대로 커져서 감당이 안 됩니다. 반면 힙이나 정렬된 균형 구조는 갱신 비용이 로그 규모라, 대상이 크게 늘어도 비용이 완만하게만 증가해 견딜 수 있습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
</div>
<div class="field" data-field="os" hidden>
<p class="note"><strong>답변 프레임.</strong> 정의 한 문장으로 결론 먼저 → 왜 그렇게 동작·설계됐는지 → 트레이드오프(꼬리질문의 90%가 여기를 찌릅니다) → 필요하면 실제 예시 한 줄. 단정("절대 안 됩니다")은 반례 하나로 무너지니 "일반적으로 ~지만 ~한 경우엔 다릅니다"로.</p>
<div class="bar">
<span class="prog"><b class="prog-done">0</b> / <span class="prog-total">43</span> 자신 있음</span>
<span class="bar-sp"></span>
<button class="tool tool-open" type="button">모두 펼치기</button>
<button class="tool tool-hide" type="button" aria-pressed="false">체크 숨기기</button>
<button class="tool tool-reset" type="button">초기화</button>
</div>
<section class="grp">
<div class="grp-head"><h3>메모리 관리</h3><span class="cnt">13문항</span></div>
<p class="grp-note">메모리 계층·지역성부터 가상 메모리·페이징까지, "왜"를 파고드는 꼬리질문이 많습니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q1" aria-label="1번 자신 있음"></label>
<details>
<summary><span><span class="qtag">MEM-01</span><span class="qtext">메모리는 왜 여러 계층으로 나뉘나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>빠른 저장 장치일수록 비싸고 작아서, 데이터를 전부 담을 수 없기 때문입니다.</strong></p>
<p>그래서 레지스터, 캐시, 램, 디스크 순으로 위로 갈수록 빠르고 작고 비싼 층을 쌓고, 자주 쓰는 것만 위층에 두고 위층이 아래층의 캐시 역할을 하게 만듭니다. CPU는 위층에서 먼저 찾고, 없으면 아래층으로 내려가 가져옵니다.</p>
<p>그래서 접근이 대부분 위층에서 끝나면 빠르지만, 위층에 없어서 아래층까지 내려가는 미스가 나면 그 층만큼 느려집니다. 이 층별 속도 차이가 뒤에 나올 캐시나 TLB, 페이지 폴트 얘기의 바탕이 됩니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>층마다 못 찾았을 때 비용이 다 같나요?</q>아닙니다, 층에 따라 천차만별입니다. 캐시 미스는 램에 갔다 오는 수십 나노초 정도고, TLB 미스도 램에 있는 페이지 테이블을 한 번 더 읽는 수준이라 비슷하게 빠릅니다. 반면 페이지 폴트는 디스크까지 갔다 와야 해서 수만 배 더 비쌉니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q2" aria-label="2번 자신 있음"></label>
<details>
<summary><span><span class="qtag">MEM-02</span><span class="qtext">지역성이 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>지역성은 프로그램의 메모리 접근이 아무 데나 흩어지지 않고, 한동안 특정 영역에 쏠리는 경향입니다.</strong></p>
<p>크게 두 가지입니다. 방금 접근한 걸 곧 다시 접근하는 시간 지역성이 있고, 방금 접근한 곳의 근처를 곧 접근하는 공간 지역성이 있습니다. 반복문에서 같은 변수를 계속 쓰는 게 시간 지역성이고, 배열을 앞에서부터 순서대로 훑는 게 공간 지역성입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>왜 중요한가요?</q>성능에 바로 직결되기 때문입니다. 위층 캐시는 빠르지만 작아서 데이터를 다 못 담는데, 접근이 쏠려주는 덕분에 그 작은 위층만으로도 대부분의 접근을 받아냅니다. 그래서 평균 접근 속도가 느린 아래층이 아니라 빠른 위층에 가까워집니다. 반대로 접근이 무작위로 흩어지면 캐시가 계속 빗나가서, 같은 알고리즘에 같은 데이터양이라도 접근 패턴만 나빠도 몇 배에서 수십 배까지 느려집니다. 그래서 캐시뿐 아니라 TLB, 요구 페이징, 워킹셋, 페이지 교체의 LRU가 전부 이 지역성에 기대고 있습니다.</span></li>
<li><span><q>지역성을 살리려면 코드를 어떻게 짜나요?</q>데이터를 연속으로 붙여두고 순서대로 훑는 게 기본입니다. 예를 들어 2차원 배열은 저장된 순서대로 접근해야 한 캐시 라인 안에서 처리가 이어져 빠르고, 띄엄띄엄 접근하면 매번 새 라인을 퍼와서 훨씬 느려집니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q3" aria-label="3번 자신 있음"></label>
<details>
<summary><span><span class="qtag">MEM-03</span><span class="qtext">가상 메모리가 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>가상 메모리는 프로세스마다 독립된 가상 주소 공간을 주고, 그 주소를 실제 물리 메모리 주소로 변환해서 쓰는 기법입니다.</strong></p>
<p>프로세스는 0번지부터 이어진 자기만의 주소 공간을 보고, 실제로 물리 메모리 어디에 있는지는 신경 쓰지 않습니다. 접근할 때마다 MMU라는 하드웨어가 페이지 테이블을 참조해서 그 가상 주소를 물리 주소로 바꿔줍니다.</p>
<p>그래서 프로그램은 자기가 메모리를 통째로 혼자 쓰는 것처럼 단순하게 짤 수 있고, 실제 물리 배치나 다른 프로세스와의 분리는 운영체제와 하드웨어가 뒤에서 처리합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>그럼 왜 필요한가요?</q>변환 계층을 한 겹 두는 덕에 두 가지를 얻기 때문입니다. 하나는 보호와 격리인데, 프로세스마다 변환표가 따로라 한 프로세스가 다른 프로세스의 메모리를 아예 가리킬 수조차 없습니다. 다른 하나는 램보다 큰 메모리 사용인데, 당장 안 쓰는 부분은 디스크로 잠깐 내려두기 때문에 실제 램보다 큰 공간을 쓸 수 있습니다.</span></li>
<li><span><q>매번 주소를 변환하면 느리지 않나요?</q>느릴 수 있어서, 최근 변환 결과를 TLB라는 작은 캐시에 담아둡니다. 히트하면 페이지 테이블을 보러 가지 않고 바로 변환하니까, 변환 비용이 대부분 상쇄됩니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q4" aria-label="4번 자신 있음"></label>
<details>
<summary><span><span class="qtag">MEM-04</span><span class="qtext">내부 단편화와 외부 단편화는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>둘 다 메모리 낭비인데, 낭비가 블록 안쪽에서 생기냐 블록 사이에서 생기냐로 나뉩니다.</strong></p>
<p>내부 단편화는 할당받은 블록이 실제 필요보다 커서 안쪽이 남는 겁니다. 크기를 고정해서 나눠줄 때 생기는데, 페이징에서 페이지 끝에 남는 자투리가 대표적입니다. 외부 단편화는 전체적으로 빈 공간은 충분한데 잘게 쪼개져 있어서, 연속된 큰 덩어리가 없어 할당에 실패하는 겁니다. 크기가 제각각인 걸 연속으로 담는 세그멘테이션이나 힙에서 생깁니다.</p>
<p>페이징은 크기가 고정이라 외부가 없는 대신 내부가 생기고, 세그멘테이션은 반대입니다. 결국 단편화는 완전히 없앨 수 없고 둘 중 뭘 감수할지 고르는 문제인데, 예측이 안 되는 외부보다 크기가 정해진 내부가 다루기 쉬워서 요즘은 페이징을 씁니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>외부 단편화는 압축해서 없애면 되지 않나요?</q>이론적으로는 흩어진 걸 한쪽으로 밀어 모으면 없어집니다. 하지만 메모리 내용을 실제로 옮기고 그걸 가리키던 주소를 전부 고쳐야 하는데, 옮기는 동안 프로그램을 멈춰야 해서 비용이 큽니다. 그래서 물리 메모리에서는 상시로는 못 쓰고, 애초에 연속 공간을 요구하지 않는 페이징으로 우회합니다. 다만 참조를 런타임이 다 쥐고 있는 GC 힙은 실제로 압축을 합니다.</span></li>
<li><span><q>x86은 세그멘테이션과 페이징을 결합했는데 왜 요즘은 페이징만 쓰나요?</q>세그멘테이션이 주던 논리 단위 보호를, 운영체제가 페이징 위에서 소프트웨어로 대신할 수 있기 때문입니다. 그 둘을 합친 건 세그멘테이션이 먼저 있던 시절의 역사적 산물이고, 요즘 64비트 x86은 세그멘테이션을 사실상 꺼두고 페이징만 씁니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q5" aria-label="5번 자신 있음"></label>
<details>
<summary><span><span class="qtag">MEM-05</span><span class="qtext">가상 주소를 물리 주소로 어떻게 변환하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>가상 주소를 페이지 번호와 오프셋 두 조각으로 나눠서, 페이지 번호만 프레임 번호로 바꾸고 오프셋은 그대로 붙입니다.</strong></p>
<p>오프셋을 안 바꾸는 이유는, 페이지랑 프레임 크기가 같아서 페이지 안에서의 위치가 곧 프레임 안에서의 위치이기 때문입니다. 그래서 변환의 핵심은 페이지 번호를 프레임 번호로 바꾸는 매핑 하나고, 이 매핑을 페이지 테이블에서 찾습니다. 실제로는 MMU라는 하드웨어가 이 일을 합니다.</p>
<p>문제는 페이지 테이블이 램에 있어서, 변환할 때마다 램을 한 번 더 읽어야 한다는 겁니다. 이게 매 접근마다 붙으면 느리니까, 최근 변환 결과를 TLB라는 작은 캐시에 담아두고 히트하면 테이블을 안 보고 바로 변환합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>페이지가 4KB면 오프셋은 몇 비트인가요?</q>4KB가 2의 12제곱이라 오프셋이 12비트입니다. 그리고 나머지 윗비트 전부가 페이지 번호가 됩니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q6" aria-label="6번 자신 있음"></label>
<details>
<summary><span><span class="qtag">MEM-06</span><span class="qtext">TLB 미스와 페이지 폴트는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>둘 다 뭔가가 없어서 나는 거지만, 무엇이 없는지랑 어디까지 가서 해결하는지가 다릅니다.</strong></p>
<p>TLB 미스는 가상 주소를 물리 주소로 바꾼 결과가 TLB라는 캐시에 없는 겁니다. 이건 메모리에 있는 페이지 테이블을 한 번 더 읽어서 채우면 되니까, 비용이 메모리 접근 몇 번 수준입니다. 반면 페이지 폴트는 페이지 자체가 메모리에 없는 거라, 디스크까지 갔다 와야 해서 수만 배 더 비쌉니다.</p>
<p>정리하면 페이지 테이블은 메모리에 항상 있으니까, TLB 미스는 메모리까지만 가고 페이지 폴트는 디스크까지 간다고 기억하면 됩니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>그럼 TLB 크기를 키우면 되지 않나요?</q>못 키웁니다. TLB는 메모리에 접근할 때마다 거치는 가장 바쁜 길목에 있고 모든 항목을 한꺼번에 비교하는 구조라, 크게 만들면 조회 자체가 느려져서 전체가 느려집니다. 그래서 대신 TLB를 여러 단계로 두거나, 페이지 크기를 키워서 한 항목이 더 넓은 영역을 담당하게 하는 식으로 우회합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q7" aria-label="7번 자신 있음"></label>
<details>
<summary><span><span class="qtag">MEM-07</span><span class="qtext">다단계 페이지 테이블은 왜 쓰나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>페이지 테이블을 하나의 큰 배열로 만들면 감당이 안 될 만큼 커지기 때문입니다.</strong></p>
<p>64비트에 4킬로바이트 페이지면 페이지 수가 2의 52제곱 개나 돼서, 프로세스마다 테이블이 수십 페타바이트가 됩니다. 게다가 프로세스가 실제로 쓰는 건 코드나 스택 같은 몇 조각뿐이고 나머지는 텅 빈 공간이라, 배열로 만들면 그 빈 곳까지 항목을 다 잡아두는 낭비가 생깁니다.</p>
<p>그래서 테이블을 트리처럼 여러 단계로 쪼개서, 안 쓰는 영역은 상위 항목만 비워두고 그 아래 하위 테이블을 아예 안 만듭니다. 실제 쓰는 부분만 테이블이 생기니까 크기가 확 줄어듭니다. 대신 주소 변환 한 번에 테이블을 여러 단계 타야 해서 느려지는데, 그래서 TLB 히트가 더 중요해집니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q8" aria-label="8번 자신 있음"></label>
<details>
<summary><span><span class="qtag">MEM-08</span><span class="qtext">페이지 폴트가 나면 무슨 일이 일어나나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>페이지 폴트는 접근하려는 페이지가 아직 물리 메모리에 올라와 있지 않을 때 발생하는 예외입니다.</strong></p>
<p>이게 나면 CPU가 하던 일을 멈추고 운영체제한테 넘깁니다. 운영체제는 디스크에서 그 페이지를 찾아 빈 자리에 올리고, 빈 자리가 없으면 기존 페이지 하나를 내보낸 다음, 페이지 테이블을 갱신하고 멈췄던 명령부터 다시 실행합니다.</p>
<p>문제는 디스크가 메모리보다 수만 배 느려서, 폴트가 나는 그 순간 프로그램이 눈에 띄게 멈칫한다는 겁니다. 게임 같은 경우엔 이게 프레임 끊김으로 나타나기도 합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>폴트는 무조건 나쁜 건가요?</q>아닙니다. 프로그램을 처음 실행할 때는 필요한 페이지를 미리 다 올리지 않고 실제로 접근하는 순간에 하나씩 올리는데, 이런 폴트는 정상입니다. 진짜 문제는 이미 올려둔 페이지를 내보냈다가 곧바로 다시 불러오는 폴트가 반복될 때입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q9" aria-label="9번 자신 있음"></label>
<details>
<summary><span><span class="qtag">MEM-09</span><span class="qtext">페이지 교체 알고리즘에는 어떤 것이 있나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>페이지 교체 알고리즘은 물리 메모리가 꽉 찼을 때 어떤 페이지를 내보낼지 정하는 정책입니다.</strong> 대표적으로 네 가지를 얘기합니다.</p>
<ul>
<li><strong>OPT.</strong> 앞으로 가장 늦게 쓸 페이지를 내보내는 이상적인 방식인데, 미래를 알아야 해서 실제로는 못 쓰고 비교 기준으로만 씁니다.</li>
<li><strong>FIFO.</strong> 먼저 들어온 페이지부터 내보내는 가장 단순한 방식인데, 오래됐다고 안 쓰는 건 아니라서 자주 쓰는 페이지까지 내보내는 게 단점입니다.</li>
<li><strong>LRU.</strong> 가장 오랫동안 안 쓴 페이지를 내보내는 방식이라 지역성에 잘 맞지만, 언제 마지막에 썼는지 계속 추적해야 해서 비용이 큽니다.</li>
<li><strong>Clock.</strong> 참조 비트 하나로 LRU를 값싸게 흉내 내는 방식이라, 실제로 가장 많이 씁니다.</li>
</ul>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>Belady 이상 현상이 뭔가요?</q>보통은 프레임을 늘리면 폴트가 줄어드는 게 정상인데, FIFO에서는 오히려 늘어나는 경우가 있습니다. FIFO는 안 쓰인 정도가 아니라 들어온 순서로 내쫓다 보니, 프레임을 늘렸을 때 하필 곧 다시 쓸 페이지를 직전에 내보내는 배치가 나올 수 있어서입니다. LRU나 OPT는 프레임을 늘리면 갖고 있던 페이지가 그대로 남는 게 보장돼서 이 현상이 없습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q10" aria-label="10번 자신 있음"></label>
<details>
<summary><span><span class="qtag">MEM-10</span><span class="qtext">스래싱은 왜 생기나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>스래싱은 페이지 폴트가 너무 자주 나서, CPU가 계산은 못 하고 디스크만 기다리는 상태입니다.</strong></p>
<p>생기는 원인은 동시에 너무 많은 일을 메모리에 올리려 할 때입니다. 최근에 실제로 쓰는 페이지들을 워킹셋이라고 하는데, 돌리는 프로세스들의 워킹셋 합이 물리 메모리보다 커지면 무엇을 내보내도 곧 다시 필요해져서 폴트가 폭증하고, 그 폴트를 처리하느라 CPU가 디스크만 기다리게 됩니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>그럼 어떻게 벗어나나요?</q>동시에 돌리는 프로세스 수를 줄이는 게 핵심입니다. 일부를 잠깐 디스크로 내려서, 남은 것들의 워킹셋이 물리 메모리에 들어가게 하면 폴트가 잦아듭니다. 근본적으로는 메모리를 늘리거나, 워킹셋이 확보될 때만 프로세스를 실행하는 스케줄링을 쓰기도 합니다.</span></li>
<li><span><q>CPU 사용률이 낮으니 프로세스를 더 띄우면 되지 않나요?</q>그게 함정이자 악순환입니다. 사용률이 낮은 건 할 일이 없어서가 아니라 다들 디스크를 기다려서인데, 여기서 프로세스를 더 띄우면 워킹셋 합이 더 커져서 폴트가 더 늘고 성능이 절벽처럼 떨어집니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q11" aria-label="11번 자신 있음"></label>
<details>
<summary><span><span class="qtag">MEM-11</span><span class="qtext">프로그램이 메모리에 올라갈 때 영역이 어떻게 나뉘나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>프로세스 주소 공간은 용도에 따라 코드, 데이터, BSS, 힙, 스택으로 나뉩니다.</strong></p>
<p>낮은 주소부터 실행할 기계어가 담긴 코드, 초기값이 정해진 전역 변수가 담긴 데이터, 0으로 시작하는 전역 변수 자리인 BSS가 오고, 그 위로 힙이 자랍니다. 그리고 높은 주소에서 스택이 아래로 자라서, 힙과 스택이 가운데 빈 공간을 사이에 두고 마주 봅니다.</p>
<p>이렇게 나누는 건 영역마다 성격이 다르기 때문입니다. 코드는 읽기 전용이라 실수나 공격으로 못 덮어쓰게 막고, 코드와 데이터와 BSS는 컴파일 때 크기가 정해져 고정인 반면 힙과 스택만 실행 중에 늘고 줍니다. 그래서 힙과 스택이 마주 보며 자라다 부딪히면 스택 오버플로 같은 충돌이 납니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>BSS는 데이터 영역과 왜 따로 두나요?</q>데이터는 초기값이 있어서 그 값을 실행 파일에 그대로 담아야 하지만, BSS는 전부 0이라 값을 담을 필요 없이 이만큼을 0으로 채우라는 크기 정보만 있으면 됩니다. 그래서 따로 두면 실행 파일 크기를 줄일 수 있습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q12" aria-label="12번 자신 있음"></label>
<details>
<summary><span><span class="qtag">MEM-12</span><span class="qtext">스택과 힙 메모리는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>스택과 힙은 할당하고 해제하는 방식이 완전히 다릅니다.</strong></p>
<p>스택은 함수가 호출될 때마다 그 함수의 지역 변수들을 통째로 쌓았다가, 함수가 끝나면 통째로 버립니다. 꼭대기를 가리키는 포인터만 위아래로 움직이면 되니까 아주 빠르고, 함수를 벗어나면 알아서 해제됩니다. 대신 크기를 컴파일 시점에 알아야 하고, 함수가 끝나면 사라지니까 오래 들고 있을 수 없습니다.</p>
<p>힙은 실행 중에 원하는 크기만큼 빈자리를 찾아 할당하고, 원할 때까지 유지할 수 있습니다. 대신 빈자리를 찾고 관리하는 비용이 있어서 느리고, 단편화도 생기고, 다 쓰면 직접 해제하거나 가비지 컬렉터가 치워줘야 합니다. 그래서 함수를 넘어 오래 살아야 하거나 크기가 실행 중에 정해지는 데이터는 힙에, 잠깐 쓰는 지역 변수는 스택에 둡니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q13" aria-label="13번 자신 있음"></label>
<details>
<summary><span><span class="qtag">MEM-13</span><span class="qtext">스택 오버플로는 왜 나나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>스택 오버플로는 스택이 정해진 한계 크기를 넘어 자라다 넘치는 것입니다.</strong></p>
<p>스택은 함수를 호출할 때마다 프레임을 쌓는데, 종료 조건이 잘못됐거나 너무 깊은 재귀, 또는 큰 배열을 지역 변수로 스택에 잡으면 이 한계를 넘어섭니다. 스택에는 운영체제가 정한 최대 크기가 있는데 보통 몇 메가바이트라, 운영체제가 그 끝에 접근 금지된 가드 페이지를 둬서 거길 침범하면 폴트를 내고 프로그램이 대개 그 자리에서 죽습니다. 흔히 힙과 스택이 마주 보다 충돌한다고 그리지만, 실제로는 물리적으로 만나기 전에 이 크기 한계에서 먼저 막힙니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>그럼 어떻게 막나요?</q>깊은 재귀를 반복문으로 바꾸거나, 큰 데이터는 스택 대신 힙에 두는 게 기본입니다. 재귀 깊이 자체가 꼭 필요하면 스택 크기 한계를 늘리기도 하지만, 대개는 알고리즘을 바꿔 프레임이 덜 쌓이게 하는 쪽이 낫습니다.</span></li>
<li><span><q>재귀가 왜 특히 스택 오버플로를 잘 내나요?</q>재귀는 함수가 자기를 다시 부를 때마다 새 프레임이 계속 쌓이는데, 종료 조건에 도달하기 전까지는 이전 프레임들이 안 걷히고 그대로 남아 있기 때문입니다. 깊이가 수만 단계로 가면 프레임이 그만큼 쌓여서 금방 한계를 넘습니다. 그래서 꼬리 재귀는 반복문으로 바꾸거나, 컴파일러가 꼬리 호출 최적화로 프레임을 재활용하게 하면 완화됩니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>프로세스와 스레드</h3><span class="cnt">8문항</span></div>
<p class="grp-note">공유하느냐 격리하느냐가 모든 차이의 뿌리입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q14" aria-label="14번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PROC-01</span><span class="qtext">프로세스와 스레드는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>프로세스는 실행 중인 프로그램 하나이고, 스레드는 그 프로세스 안에서 동시에 진행되는 실행 흐름입니다.</strong></p>
<p>가장 큰 차이는 메모리를 공유하느냐입니다. 프로세스는 각자 격리된 자기 주소 공간을 갖지만, 한 프로세스 안의 스레드들은 코드랑 데이터, 힙을 같이 쓰고, 스택이나 레지스터처럼 지금 어디를 실행 중인지에 대한 것만 따로 가집니다.</p>
<p>그래서 스레드는 만들거나 전환하는 비용이 가볍고 서로 데이터를 주고받기도 쉽지만, 같은 메모리를 동시에 건드리다 보니 레이스 컨디션 같은 동기화 문제를 떠안게 됩니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>프로세스끼리는 어떻게 통신하나요?</q>프로세스는 서로 격리돼 있어서 IPC라는 별도 수단이 필요합니다. 같은 메모리 영역을 양쪽에 매핑하는 공유 메모리를 쓰면 빠르지만 동기화를 직접 해야 하고, 파이프나 소켓으로 메시지를 주고받으면 느린 대신 안전합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q15" aria-label="15번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PROC-02</span><span class="qtext">컨텍스트 스위칭 비용에는 무엇이 있나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>컨텍스트 스위칭 비용은 크게 눈에 보이는 비용과 숨은 비용, 두 가지로 나눌 수 있습니다.</strong></p>
<p>눈에 보이는 건, 지금 실행 중이던 프로세스의 상태, 그러니까 레지스터나 프로그램 카운터 같은 걸 저장해두고 다음 프로세스 것을 불러오는 작업입니다. 숨은 비용은, 전환하고 나면 캐시랑 TLB가 새 프로세스 기준으로 텅 비어 있어서 한동안 캐시 미스가 잔뜩 난다는 겁니다. 이게 오히려 상태를 저장하고 복원하는 것보다 더 클 때도 많습니다.</p>
<p>그래서 같은 프로세스 안의 스레드끼리 전환하는 게 더 쌉니다. 주소 공간을 공유하니까 TLB를 비울 필요가 없거든요.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q16" aria-label="16번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PROC-03</span><span class="qtext">fork에서 copy-on-write를 쓰는 이유는 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>fork는 부모를 복제해서 자식 프로세스를 만드는데, 이때 메모리를 통째로 복사하면 낭비라서 copy-on-write를 씁니다.</strong></p>
<p>특히 자식이 <code>fork</code>하자마자 <code>exec</code>로 완전히 다른 프로그램으로 바뀌는 경우가 많은데, 그러면 방금 복사한 메모리가 그대로 버려지거든요.</p>
<p>그래서 fork 시점에는 부모랑 자식이 같은 메모리를 읽기 전용으로 같이 보다가, 둘 중 하나가 값을 바꾸려는 순간에만 그 페이지를 복사합니다. 실제로 바뀌는 부분만 그때그때 복사되니까, 대부분 읽기만 하는 상황에서는 복사 비용이 거의 안 듭니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>부모 없이 fork되는 프로세스도 있나요?</q>맨 처음 프로세스인 init만 부모가 없습니다. 이건 부팅할 때 커널이 직접 만들고, 그 뒤로는 전부 이 init에서 fork로 갈라져 나와서 하나의 트리를 이룹니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q17" aria-label="17번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PROC-04</span><span class="qtext">좀비 프로세스와 고아 프로세스는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>둘 다 부모-자식 프로세스 사이에서 생기는 상태인데, 누가 먼저 죽었느냐가 다릅니다.</strong></p>
<p>먼저 전제로, 자식이 죽으면 바로 사라지는 게 아니라 부모가 종료 코드를 <code>wait</code>로 받아가야 완전히 정리됩니다. 좀비는 자식이 먼저 죽었는데 부모가 이 wait를 안 해줘서 시체가 안 치워진 상태입니다. 프로세스 번호를 계속 차지해서, 쌓이면 새 프로세스를 못 만들게 될 수 있습니다. 이건 부모 쪽 버그입니다.</p>
<p>고아는 반대로 부모가 먼저 죽어서 자식이 부모를 잃은 겁니다. 이때는 커널이 그 자식을 init한테 입양시키고 init이 나중에 거둬주기 때문에, 문제가 안 되는 정상적인 처리입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>좀비는 어떤 경우에 생기나요?</q>주로 서버나 데몬처럼 오래 떠 있는 부모가 자식을 계속 만들면서 wait를 빠뜨릴 때 생깁니다. 부모가 죽으면 그 좀비들도 init이 입양해서 바로 치워주니까, 잠깐 돌고 끝나는 프로그램에서는 별문제가 안 됩니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q18" aria-label="18번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PROC-05</span><span class="qtext">코어가 하나뿐이어도 멀티스레드가 이득인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>네, 이득입니다. 스레드가 I/O를 기다리는 동안 CPU가 노는 시간을 다른 스레드가 활용할 수 있기 때문입니다.</strong></p>
<p>예를 들어 한 스레드가 디스크나 네트워크 응답을 기다리는 동안, 그냥 두면 CPU가 놀지만 다른 스레드가 있으면 그 시간에 일을 시킬 수 있습니다. 그래서 I/O가 많은 작업에서 특히 이득입니다.</p>
<p>여기서 동시성이랑 병렬성을 구분하는 게 중요한데, 코어가 하나면 아주 빠르게 번갈아 실행하는 동시성이고, 코어가 여러 개라서 같은 순간에 실제로 여러 개가 도는 게 병렬성입니다. 그래서 순수하게 계산만 많은 작업은 번갈아 해봤자 소용이 없고 코어 수만큼만 빨라집니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q19" aria-label="19번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PROC-06</span><span class="qtext">멀티프로세스와 멀티스레드는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>둘 다 작업을 여러 실행 흐름으로 나누는 건데, 흐름을 프로세스로 나누느냐 스레드로 나누느냐가 다릅니다.</strong></p>
<p>멀티프로세스는 각 흐름이 자기만의 독립된 주소 공간을 가집니다. 그래서 하나가 죽어도 나머지는 격리돼서 안전하지만, 서로 통신하려면 IPC가 필요하고 생성이나 전환 비용도 큽니다. 멀티스레드는 한 프로세스 안에서 코드랑 힙을 공유하는 흐름들이라, 데이터를 그냥 같이 보고 전환도 가볍습니다. 대신 하나가 잘못되면 프로세스 전체가 위험하고, 같은 메모리를 동시에 건드리니 동기화 문제를 떠안습니다.</p>
<p>그래서 안정성과 격리가 중요하면 멀티프로세스, 잦은 데이터 공유와 가벼운 전환이 중요하면 멀티스레드를 씁니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>실무에선 어느 쪽을 쓰나요?</q>둘을 섞어 씁니다. 예를 들어 크롬은 탭이나 확장 프로그램마다 프로세스를 따로 띄워서 하나가 죽어도 브라우저 전체는 안 죽게 격리하고, 그 프로세스 안에서는 다시 여러 스레드로 렌더링이나 네트워크를 나눠 처리합니다. 크게는 프로세스로 격리하고 그 안에서 스레드로 잘게 나누는 식입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q20" aria-label="20번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PROC-07</span><span class="qtext">PCB가 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>PCB는 운영체제가 프로세스 하나를 관리하려고 그 프로세스의 정보를 모아 담아두는 구조체입니다.</strong></p>
<p>프로세스마다 하나씩 있고 커널이 들고 있는데, 안에는 PID 같은 식별 정보, 지금 준비 상태인지 실행 중인지 같은 상태, 레지스터나 프로그램 카운터 같은 CPU 문맥, 그리고 페이지 테이블 포인터나 열린 파일 목록 같은 자원 정보가 담깁니다.</p>
<p>그래서 프로세스에 관한 동작은 결국 이 PCB를 두고 돌아갑니다. 상태가 바뀌면 PCB의 상태 필드가 바뀌는 겁니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>컨텍스트 스위칭이랑은 어떤 관계인가요?</q>컨텍스트 스위칭이 바로 이 PCB를 쓰는 대표적인 동작입니다. 실행 중이던 프로세스의 레지스터 같은 CPU 상태를 그 프로세스의 PCB에 저장해두고, 다음에 실행할 프로세스의 PCB에서 저장돼 있던 상태를 불러와 이어서 실행합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q21" aria-label="21번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PROC-08</span><span class="qtext">공유 메모리와 메시지 전달 방식의 IPC는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>프로세스는 서로 격리돼 있어서 통신하려면 IPC가 필요한데, 크게 공유 메모리랑 메시지 전달 두 가지입니다.</strong></p>
<p>공유 메모리는 두 프로세스가 같은 메모리 영역을 같이 보는 방식입니다. 복사가 없어서 빠르지만, 동시에 접근할 때 꼬이지 않게 동기화를 직접 해줘야 하고 잘못 건드리면 오염될 위험이 있습니다. 메시지 전달은 파이프나 소켓으로 커널을 거쳐 데이터를 주고받는 방식입니다. 복사하고 커널을 거치니까 느리지만, 각자 자기 메모리만 만지니까 안전하고 동기화 문제도 적습니다.</p>
<p>결국 속도를 볼 거냐, 안전하고 단순한 걸 볼 거냐의 선택입니다.</p>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>동기화</h3><span class="cnt">6문항</span></div>
<p class="grp-note">공유 데이터를 동시에 건드릴 때 생기는 문제와 도구들입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q22" aria-label="22번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SYNC-01</span><span class="qtext">레이스 컨디션은 왜 생기나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>레이스 컨디션은 여러 스레드가 같은 데이터를 동시에 고칠 때, 실행 순서가 꼬여서 결과가 틀어지는 현상입니다.</strong></p>
<p>예를 들어 <code>count++</code>는 한 줄처럼 보이지만 CPU 입장에서는 값을 읽고, 1 더하고, 다시 쓰는 세 단계로 쪼개집니다. 두 스레드가 둘 다 0을 읽은 다음 각자 1로 써버리면, 분명히 둘이 더했는데 결과는 2가 아니라 1이 됩니다. 한쪽이 더한 게 덮여서 사라진 거죠.</p>
<p>이렇게 한 번에 하나만 들어가야 하는 구간을 임계 구역이라고 하는데, 락으로 한 스레드만 들어가게 막거나, <code>Interlocked</code> 같은 원자적 연산으로 그 세 단계를 쪼개지지 않는 한 덩어리로 처리하면 해결됩니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q23" aria-label="23번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SYNC-02</span><span class="qtext">뮤텍스와 세마포어는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>뮤텍스는 한 번에 딱 한 스레드만 들여보내는 자물쇠이고, 세마포어는 카운터로 동시에 몇 개까지 허용할지를 정하는 도구입니다.</strong></p>
<p>가장 큰 차이는 소유권입니다. 뮤텍스는 잠근 스레드가 직접 풀어야 하는 소유권이 있어서 배타적으로 보호하는 데 안전하고, 주인이 안 풀고 죽어도 운영체제가 알아채고 처리할 수 있습니다. 세마포어는 소유권이 없어서 내린 쪽이랑 올리는 쪽이 달라도 됩니다.</p>
<p>그래서 세마포어는 두 가지로 쓰는데, 하나는 커넥션을 열 개까지만 쓰게 하는 식으로 자원 개수를 제한하는 거고, 다른 하나는 한 스레드가 신호를 올리면 다른 스레드가 받는 신호 전달입니다. 이 신호 전달은 소유권이 없어서 가능한, 뮤텍스로는 못 하는 용법입니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q24" aria-label="24번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SYNC-03</span><span class="qtext">스핀락은 언제 뮤텍스 대신 쓰나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>스핀락은 락을 못 얻었을 때 잠들지 않고 계속 확인하면서 도는 락입니다.</strong></p>
<p>보통 락을 못 얻으면 스레드를 재웠다가 나중에 깨우는데, 이 재우고 깨우는 데 컨텍스트 스위칭 비용이 듭니다. 그런데 락이 아주 잠깐만 잡힐 거라면, 재웠다 깨우느니 몇 바퀴 돌면서 기다리는 게 더 싸거든요. 그래서 락이 짧게 잡히고 코어가 여러 개일 때 유리합니다.</p>
<p>반대로 락이 오래 잡히면 그동안 CPU를 헛돌리는 낭비가 되고, 특히 코어가 하나면 최악입니다. 스핀하는 스레드가 CPU를 붙들고 있으니, 정작 락을 쥔 주인이 실행을 못 해서 영영 안 풀리거든요.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q25" aria-label="25번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SYNC-04</span><span class="qtext">데드락은 어떤 조건에서 발생하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>데드락은 상호 배제, 점유와 대기, 비선점, 순환 대기, 이 네 가지 조건이 동시에 다 성립할 때 발생합니다.</strong></p>
<p>중요한 건 이 넷이 전부 필요한 조건이라, 하나만 깨도 데드락을 막을 수 있다는 점입니다. 가장 실용적인 방법은 자원마다 번호를 매겨서 항상 낮은 번호부터 잡게 하는 건데, 그러면 순환 대기가 성립할 수 없어서 교착이 안 생깁니다. 결국 락을 항상 같은 순서로 잡으라는 얘기입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>예방 말고 다른 대응은요?</q>세 가지가 더 있습니다. 요청이 올 때마다 안전한지 따져보고 허가하는 회피, 일단 놔뒀다가 데드락이 생기면 감지해서 하나를 죽이거나 되돌리는 탐지·복구, 그리고 아주 드무니까 그냥 무시하는 방법입니다. 데이터베이스가 트랜잭션을 되돌리는 게 탐지·복구의 대표적인 예입니다.</span></li>
<li><span><q>실제 코드에선 데드락이 주로 어떻게 나나요?</q>두 개의 락을 서로 반대 순서로 잡을 때 잘 납니다. 한 스레드는 A를 잡고 B를 기다리는데 다른 스레드는 B를 잡고 A를 기다리면, 서로 물려서 교착됩니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q26" aria-label="26번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SYNC-05</span><span class="qtext">우선순위 역전은 무엇이고 어떻게 해결하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>우선순위 역전은 낮은 우선순위 스레드가 쥔 락 때문에, 높은 우선순위 스레드가 오히려 뒤로 밀리는 현상입니다.</strong></p>
<p>낮은 스레드가 락을 쥐고 있는데 높은 스레드가 그 락을 기다린다고 해봅시다. 여기까진 괜찮은데, 이 사이에 락이 필요 없는 중간 우선순위 스레드가 끼어들어서 낮은 스레드를 계속 밀어내면, 낮은 스레드가 락을 못 풀고 그래서 높은 스레드도 계속 못 나아갑니다. 결과적으로 중간 스레드가 제일 높은 스레드보다 먼저 도는 셈이죠. 실제로 화성 탐사선 패스파인더가 이것 때문에 계속 재부팅된 사례가 유명합니다.</p>
<p>해결책은 우선순위 상속인데, 락을 쥔 낮은 스레드를 그 락을 기다리는 높은 스레드만큼 잠깐 올려줘서 중간 스레드가 못 밀어내게 하는 겁니다. 락을 풀면 원래 우선순위로 돌아갑니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q27" aria-label="27번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SYNC-06</span><span class="qtext">volatile만으로 동기화가 충분한가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>충분하지 않습니다. 멀티코어에서 동기화 문제는 크게 두 가지인데, volatile은 그중 하나만 부분적으로 다룹니다.</strong></p>
<p>하나는 원자성 문제입니다. <code>count++</code> 같은 게 여러 단계로 쪼개져서 중간에 끼어드는 건데, 이건 <code>Interlocked</code> 같은 원자적 연산으로 한 덩어리로 묶어야 해결됩니다. 다른 하나는 가시성이랑 순서 문제인데, 코어마다 캐시가 달라서 바꾼 값이 늦게 보이거나, CPU랑 컴파일러가 명령 순서를 바꿔버리는 겁니다. 이건 메모리 배리어로 막습니다.</p>
<p>volatile은 이 가시성이랑 순서 쪽을 일부 도와주긴 하지만, <code>count++</code> 같은 복합 연산이 쪼개지지 않게 해주지는 못합니다. 그래서 원자성이 필요하면 락이나 원자적 연산을 따로 써야 합니다.</p>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>스케줄링</h3><span class="cnt">4문항</span></div>
<p class="grp-note">"다음에 누구를 실행할까"의 규칙과 트레이드오프입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q28" aria-label="28번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SCHED-01</span><span class="qtext">CPU 스케줄링 알고리즘에는 무엇이 있나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>준비된 프로세스 중에 다음에 뭘 실행할지 정하는 규칙인데, 대표적으로 네 가지를 얘기합니다.</strong></p>
<ul>
<li><strong>FCFS.</strong> 먼저 온 순서대로 처리하는 가장 단순한 방식인데, 긴 작업이 앞에 있으면 뒤가 다 밀리는 문제가 있습니다.</li>
<li><strong>SJF.</strong> 실행 시간이 짧은 작업부터 처리해서 평균 대기가 가장 짧지만, 실행 시간을 미리 알아야 하고 긴 작업이 계속 밀리는 기아가 생길 수 있습니다.</li>
<li><strong>라운드 로빈.</strong> 정해진 시간만큼씩 돌아가며 실행해서 응답성이 좋습니다.</li>
<li><strong>MLFQ.</strong> 여러 단계의 큐를 두고 상황에 따라 올리고 내리는 방식인데, 실행 시간을 몰라도 짧거나 반응이 중요한 작업이 자연스럽게 우대돼서 실제로 많이 씁니다.</li>
</ul>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>기아는 어떻게 막나요?</q>에이징으로 막습니다. 오래 기다린 작업일수록 우선순위를 조금씩 올려줘서, 아무리 밀려도 결국은 실행되게 하는 겁니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q29" aria-label="29번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SCHED-02</span><span class="qtext">선점 스케줄링과 비선점 스케줄링은 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>실행 중인 작업을 끝나기 전에 강제로 CPU에서 뺏을 수 있느냐로 갈립니다.</strong></p>
<p>비선점은 한 번 잡으면 스스로 끝내거나 I/O 때문에 양보할 때까지 계속 쥐고 있습니다. 단순하지만 긴 작업이 오래 붙잡고 있으면 급한 일이 와도 못 끼어듭니다. 선점은 더 급한 게 오거나 정해진 시간이 다 되면 CPU를 회수합니다. 응답성이 좋고 기아도 줄지만, 뺏고 넘기는 스위칭 비용이 늘고 실행 도중에 뺏길 수 있어서 동기화가 더 중요해집니다.</p>
<p>요즘 운영체제는 대화형 작업이 많아서 대부분 선점 방식을 씁니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q30" aria-label="30번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SCHED-03</span><span class="qtext">인터럽트가 폴링보다 항상 좋은가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>대부분은 인터럽트가 낫지만, 항상 그런 건 아닙니다.</strong></p>
<p>폴링은 CPU가 직접 왔는지 계속 확인하는 거라, 특히 바쁘게 확인만 반복하면 낭비가 큽니다. 인터럽트는 장치가 준비되면 알아서 신호를 주니까, CPU가 다른 일을 하다가 그때만 반응하면 돼서 효율적입니다.</p>
<p>그런데 인터럽트도 신호가 올 때마다 하던 일을 멈추고 처리 루틴으로 갔다 오는 비용이 있습니다. 그래서 이벤트가 폭주하면 오히려 이 비용이 커지는데, 이럴 땐 여러 이벤트를 모아서 한 번에 처리하거나, 처음엔 인터럽트로 깨어나고 그다음부턴 폴링으로 몰아 처리하는 식으로 둘을 섞습니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q31" aria-label="31번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SCHED-04</span><span class="qtext">디스크 스케줄링 알고리즘에는 무엇이 있나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>하드디스크는 헤드를 옮기는 시간이 제일 느리니까, 쌓인 요청 순서를 재배열해서 헤드 이동을 줄이는 게 디스크 스케줄링입니다.</strong> 대표적으로 세 가지가 있습니다.</p>
<ul>
<li><strong>FCFS.</strong> 온 순서대로 처리해서 헤드가 이리저리 왔다 갔다 하니 이동이 많습니다.</li>
<li><strong>SSTF.</strong> 지금 헤드에서 가장 가까운 요청부터 처리해서 빠르지만, 멀리 있는 요청이 계속 밀리는 기아가 생길 수 있습니다.</li>
<li><strong>SCAN.</strong> 엘리베이터처럼 한 방향으로 끝까지 훑고 반대로 돌아오는 방식이라, 한쪽으로 치우치지 않고 골고루 처리합니다.</li>
</ul>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>SSD에서도 의미가 있나요?</q>의미가 약합니다. SSD는 기계적으로 움직이는 헤드가 없어서 어디에 있든 접근 속도가 비슷하거든요. 그래서 SSD에서는 이런 이동 거리 최소화 대신, 여러 요청을 병렬로 처리하는 쪽에 집중합니다. 디스크 스케줄링은 주로 하드디스크 얘기입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>I/O · 캐시 · 파일시스템 · 커널</h3><span class="cnt">7문항</span></div>
<p class="grp-note">개념이 섞이기 쉬운 축들을 정확히 구분하는지가 관건입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q32" aria-label="32번 자신 있음"></label>
<details>
<summary><span><span class="qtag">IO-01</span><span class="qtext">동기/비동기와 블로킹/논블로킹은 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>이 둘은 서로 다른 축인데 자주 섞여서 헷갈립니다. 블로킹·논블로킹은 호출이 바로 돌아오느냐, 동기·비동기는 완료를 누가 챙기느냐입니다.</strong></p>
<p>블로킹은 일이 끝날 때까지 멈춰서 기다리는 거고, 논블로킹은 아직 안 끝났어도 일단 바로 돌아옵니다. 동기는 결과를 내가 직접 챙기는 거고, 비동기는 다 되면 상대가 콜백이나 이벤트로 알려주는 겁니다.</p>
<p>그래서 바로 돌아오더라도 내가 계속 됐는지 물어보고 있으면, 그건 동기이면서 논블로킹인 경우입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>비동기는 병렬인가요?</q>아닙니다. 비동기는 완료 처리를 떼어놓는 방식일 뿐이라 코어가 하나여도 됩니다. I/O 대기는 하드웨어가 알아서 처리하고 그 사이에 CPU가 다른 일을 하는 거라, 스레드 하나짜리 이벤트 루프로도 비동기가 됩니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q33" aria-label="33번 자신 있음"></label>
<details>
<summary><span><span class="qtag">IO-02</span><span class="qtext">I/O 멀티플렉싱에서 epoll이 select·poll보다 나은 이유는?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>I/O 멀티플렉싱은 한 스레드가 여러 소켓을 동시에 지켜보다가 준비된 것만 처리하는 방식인데, epoll이 select나 poll보다 훨씬 효율적입니다.</strong></p>
<p>select나 poll은 호출할 때마다 지켜볼 소켓 목록 전체를 넘기고, 커널이 그걸 전부 하나하나 확인합니다. 그래서 지켜보는 연결이 많아질수록 느려집니다. epoll은 지켜볼 목록을 커널에 한 번만 등록해두면, 그다음부터는 준비된 것만 골라서 알려줍니다.</p>
<p>그래서 연결이 수만 개씩 되는 큰 서버에서는 epoll이 사실상 표준입니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q34" aria-label="34번 자신 있음"></label>
<details>
<summary><span><span class="qtag">IO-03</span><span class="qtext">캐시 지역성이 게임에서 왜 중요한가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>CPU가 메모리를 한 바이트씩이 아니라 캐시 라인이라는 덩어리 단위로 가져오기 때문입니다.</strong></p>
<p>그래서 연속된 메모리를 순서대로 읽으면, 한 번 가져온 덩어리 안에서 계속 처리하니까 아주 빠릅니다. 반대로 여기저기 흩어진 곳을 오가면 매번 메모리에서 새로 가져와야 해서 느립니다.</p>
<p>게임은 똑같은 처리를 수천 개 객체에 반복하는 경우가 많은데, 데이터를 연속으로 붙여두면 이 캐시 효과를 살릴 수 있습니다. 유니티의 DOTS나 ECS가 나온 배경이 바로 이겁니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>클래스 배열과 struct 배열은 뭐가 다른가요?</q>클래스 객체 배열은 배열에 참조만 나열돼 있고 실제 객체는 힙 여기저기에 흩어져 있어서 캐시 미스가 잦습니다. 반면 struct 배열은 데이터가 배열 안에 연속으로 붙어 있어서 훑을 때 훨씬 빠릅니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q35" aria-label="35번 자신 있음"></label>
<details>
<summary><span><span class="qtag">IO-04</span><span class="qtext">거짓 공유(false sharing)는 무엇이고 어떻게 완화하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>거짓 공유는 서로 다른 코어가 아무 상관없는 변수를 각자 고치는데도, 그 둘이 같은 캐시 라인에 있어서 성능이 확 떨어지는 현상입니다.</strong></p>
<p>캐시 일관성을 맞추는 단위가 변수 하나가 아니라 캐시 라인 전체라서 그렇습니다. 한 코어가 자기 변수를 고치면 그 라인 전체가 무효화돼서, 같은 라인에 있던 다른 코어의 변수까지 다시 읽어와야 합니다. 서로 이걸 반복하면서 캐시를 계속 튕겨내는 거죠. 락도 안 걸고 실제로 공유하는 것도 아닌데 느려져서 거짓 공유라고 부릅니다.</p>
<p>완화하려면 각 코어가 쓰는 데이터 사이에 여백을 넣어서 서로 다른 캐시 라인에 놓이게 합니다. 단일 스레드에서는 데이터를 모아두는 게 좋지만, 여러 코어가 각자 고치는 데이터는 반대로 떨어뜨려 놓는 게 좋다는 게 핵심입니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q36" aria-label="36번 자신 있음"></label>
<details>
<summary><span><span class="qtag">IO-05</span><span class="qtext">파일 시스템에서 inode는 어떤 역할을 하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>inode는 파일 하나에 대한 정보, 그러니까 크기나 권한, 실제 데이터가 디스크 어디에 있는지를 담고 있는 구조체입니다.</strong></p>
<p>여기서 핵심은 inode에는 파일 이름이 없다는 겁니다. 이름은 디렉터리가 가지고 있는데, 디렉터리는 사실 이름과 inode 번호를 짝지어 놓은 목록일 뿐입니다.</p>
<p>그래서 하드 링크라는 게 같은 inode를 여러 이름이 가리키는 거고, 이름이 하나도 안 남았을 때, 그러니까 이 inode를 가리키는 이름 수가 0이 됐을 때 실제 데이터를 지웁니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q37" aria-label="37번 자신 있음"></label>
<details>
<summary><span><span class="qtag">IO-06</span><span class="qtext">저널링은 왜 필요한가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>저널링은 갑자기 전원이 꺼져도 파일 시스템이 깨지지 않게 지켜주는 장치입니다.</strong></p>
<p>파일 하나 쓰는 것도 데이터 쓰고, inode 갱신하고, 디렉터리 갱신하는 여러 단계로 이뤄지는데, 이 중간에 전원이 나가면 일부만 반영돼서 파일 시스템이 엉망이 됩니다.</p>
<p>그래서 실제로 바꾸기 전에, 뭘 바꿀 건지를 저널이라는 곳에 먼저 적어둡니다. 그러면 갑자기 꺼졌다 켜져도 이 저널만 확인해서, 다 적힌 건 마저 반영하고 덜 적힌 건 버리면 됩니다. 디스크 전체를 검사할 필요 없이 빠르게 복구되는 거죠.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q38" aria-label="38번 자신 있음"></label>
<details>
<summary><span><span class="qtag">IO-07</span><span class="qtext">사용자 모드와 커널 모드는 왜 나누나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>위험한 작업을 아무나 못 하게 막는 보호 장치입니다.</strong></p>
<p>앱이 하드웨어를 직접 만지거나 남의 메모리를 건드릴 수 있으면 버그 하나로 시스템 전체가 무너지니까, 그런 작업은 커널 모드에서만 하게 하드웨어 차원에서 막아둡니다. 일반 앱은 사용자 모드에서 자기 메모리만 만질 수 있습니다.</p>
<p>그럼 앱이 파일을 읽거나 네트워크를 쓸 때는 어떻게 하냐면, 시스템 콜로 커널한테 대신 해달라고 요청합니다. 이때 정해진 진입점을 통해서만 커널로 들어가게 돼 있어서, 앱이 커널의 아무 코드나 실행하지는 못합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>시스템 콜이 비싸다는데 어떻게 줄이나요?</q>모드를 넘나드는 것 자체가 비용이라, 한 바이트씩 읽을 때마다 시스템 콜을 하면 그 비용이 폭발합니다. 그래서 버퍼에 어느 정도 모아서 한 번에 처리하는 식으로 호출 횟수를 줄입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>상황형 문제 해결</h3><span class="cnt">5문항</span></div>
<p class="grp-note">정답보다 접근 순서를 봅니다. 한 상황에 여러 분야가 얽혀 있으니, 측정으로 원인을 좁힌 뒤 CS 개념으로 설명하세요.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q39" aria-label="39번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-01</span><span class="qtext">게임을 오래 켜둘수록 점점 느려지고 끊깁니다. 무엇을 의심하겠습니까?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>시간이 갈수록 나빠진다는 게 핵심 단서인데, 이건 순간적인 성능 문제가 아니라 뭔가가 계속 쌓이는 문제라는 뜻입니다.</strong></p>
<p>제일 먼저 메모리 누수를 의심합니다. 안 쓰는 객체를 계속 참조로 붙들고 있으면 가비지 컬렉터가 못 치워서 메모리가 계속 늘어납니다. 그러다 물리 메모리가 부족해지면 운영체제가 페이지를 디스크로 내리기 시작하는데, 이때부터 페이지 폴트가 잦아지면서 프레임이 끊깁니다. 심하면 디스크만 기다리는 스래싱까지 갑니다.</p>
<p>그래서 추측보다 먼저 메모리 프로파일러로 시간에 따라 어떤 객체가 계속 늘어나는지 스냅샷을 비교합니다. 이벤트 구독을 해제 안 했거나, 컬렉션에 계속 쌓기만 하는 코드가 흔한 원인입니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q40" aria-label="40번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-02</span><span class="qtext">매 프레임 수천 개 객체를 순회하는데, CPU는 한가한데도 느립니다. 왜일까요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>CPU가 한가한데 느리다는 건, CPU가 계산을 못 해서가 아니라 메모리에서 데이터가 오기를 기다리고 있다는 신호입니다.</strong></p>
<p>객체들이 힙 여기저기에 흩어져 있으면, 순회할 때마다 캐시에 없는 데이터를 메모리에서 새로 가져와야 해서 캐시 미스가 잔뜩 납니다. CPU는 그 데이터를 기다리느라 노는 거죠.</p>
<p>그래서 자주 같이 쓰는 데이터를 연속된 배열로 모아두면, 캐시 라인 하나에 여러 개가 딸려 와서 훨씬 빨라집니다. 클래스 배열 대신 struct 배열을 쓰거나, 유니티라면 DOTS 같은 방식이 이걸 노린 겁니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>객체가 100배로 늘면요?</q>흩어진 접근이면 캐시 미스가 그만큼 선형으로 늘어서 훨씬 심해집니다. 이럴수록 연속 배치의 이득이 커지고, 여기에 더해 멀리 있는 객체는 덜 자주 갱신하는 식으로 매 프레임 처리하는 일감 자체를 줄이는 걸 같이 봅니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q41" aria-label="41번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-03</span><span class="qtext">작업을 멀티스레드로 나눴는데, 코어를 늘려도 기대만큼 안 빨라지고 가끔 더 느려집니다. 원인이 뭘까요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>병렬화했는데 안 빨라지는 건, 스레드들이 실제로는 서로 기다리거나 방해하고 있다는 뜻입니다.</strong></p>
<p>몇 가지를 의심합니다. 먼저 락 경합인데, 여러 스레드가 같은 락을 두고 줄을 서면 결국 한 번에 하나씩 도는 거라 병렬이 무의미해집니다. 다음은 거짓 공유인데, 스레드마다 다른 변수를 쓰는데도 그게 같은 캐시 라인에 있으면 서로 캐시를 튕겨내면서 오히려 느려집니다. 스레드를 너무 잘게 쪼개면 컨텍스트 스위칭 비용이 이득을 잡아먹기도 하고요.</p>
<p>그래서 락을 잡는 구간을 최대한 줄이고, 각 스레드가 자기 지역 변수에 모았다가 마지막에 합치는 식으로 공유 자체를 줄입니다. 경합하는 데이터는 캐시 라인을 다르게 띄우고요.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q42" aria-label="42번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-04</span><span class="qtext">로그를 파일에 한 줄씩 수만 번 쓰는데 너무 느립니다. 어떻게 개선하겠습니까?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>한 줄씩 쓸 때마다 시스템 콜이 나가는 게 문제입니다.</strong></p>
<p>파일 쓰기는 커널이 하는 특권 작업이라, 쓸 때마다 사용자 모드에서 커널 모드로 넘어갔다 옵니다. 이 모드 전환 자체가 비용인데, 한 줄 쓰자고 매번 이걸 하면 그 비용이 폭발합니다.</p>
<p>그래서 로그를 메모리 버퍼에 모아뒀다가 어느 정도 차면 한 번에 쓰는 식으로 시스템 콜 횟수를 줄입니다. 대부분의 로깅 라이브러리가 이런 버퍼링을 기본으로 합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>매번 바로 안 쓰면 크래시가 났을 때 로그가 날아가지 않나요?</q>맞습니다. 그게 트레이드오프라, 버퍼에만 있고 아직 디스크에 안 내려간 로그는 크래시 때 잃을 수 있습니다. 그래서 꼭 남겨야 하는 중요한 로그는 주기적으로, 또는 그 시점에 강제로 디스크에 내리는 플러시를 걸어서 성능과 안전성 사이를 조율합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="os-q43" aria-label="43번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-05</span><span class="qtext">서버가 동시 접속 수만 개를 받아야 합니다. 연결마다 스레드를 하나씩 두면 왜 안 되나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>연결마다 스레드를 두면 스레드가 수만 개 생기는데, 이게 감당이 안 됩니다.</strong></p>
<p>스레드마다 스택 메모리가 잡히고, 운영체제가 그 많은 스레드를 번갈아 실행하느라 컨텍스트 스위칭 비용이 폭발합니다. 대부분은 그냥 I/O를 기다리며 놀고 있는데도요.</p>
<p>그래서 한 스레드가 여러 연결을 동시에 지켜보다가 준비된 것만 처리하는 I/O 멀티플렉싱을 씁니다. 리눅스라면 epoll인데, 준비된 연결만 골라서 알려주니까 연결이 수만 개여도 효율적입니다. 이게 이벤트 루프 기반 서버의 토대입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>기존에 스레드로 짠 서버를 어떻게 바꾸나요?</q>보통은 직접 epoll을 다루기보다, 이미 이벤트 루프로 도는 프레임워크나 비동기 런타임 위로 옮깁니다. 이때 핵심 작업은 완료까지 멈추는 블로킹 호출들을, 바로 반환하고 나중에 통지받는 논블로킹·비동기 방식으로 바꾸는 겁니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="close">
<h3>면접 당일 체크리스트</h3>
<ul>
<li><strong>모르면 "모르겠습니다"라고 말하세요.</strong> 꼬리질문으로 두세 번만 파고들면 모호한 답은 드러납니다. 인정한 뒤 아는 데까지 추론하는 쪽이 낫습니다.</li>
<li><strong>결론 먼저, 그다음 이유와 트레이드오프.</strong> 정의 한 문장으로 시작하면 흐름이 잡힙니다.</li>
<li><strong>단정하지 마세요.</strong> "절대 안 됩니다"는 반례 하나로 무너집니다. "일반적으로는 ~지만 ~한 경우엔 다릅니다"가 안전하고 더 정확합니다.</li>
<li><strong>소리 내어 연습하세요.</strong> 아는 것과 30초 안에 말하는 것은 다른 능력입니다.</li>
</ul>
</section>
</div>
<div class="field" data-field="unity" hidden>
<p class="note"><strong>답변 프레임.</strong> 정의 한 문장으로 결론 먼저 → 왜 그렇게 동작·설계됐는지 → 트레이드오프(꼬리질문의 90%가 여기를 찌릅니다) → 필요하면 실제 예시 한 줄. 단정("절대 안 됩니다")은 반례 하나로 무너지니 "일반적으로 ~지만 ~한 경우엔 다릅니다"로.</p>
<div class="bar">
<span class="prog"><b class="prog-done">0</b> / <span class="prog-total">42</span> 자신 있음</span>
<span class="bar-sp"></span>
<button class="tool tool-open" type="button">모두 펼치기</button>
<button class="tool tool-hide" type="button" aria-pressed="false">체크 숨기기</button>
<button class="tool tool-reset" type="button">초기화</button>
</div>
<section class="grp">
<div class="grp-head"><h3>생명주기와 실행 순서</h3><span class="cnt">5문항</span></div>
<p class="grp-note">콜백이 언제, 어떤 순서로 불리는지가 버그와 최적화의 출발점입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q1" aria-label="1번 자신 있음"></label>
<details>
<summary><span><span class="qtag">LIFE-01</span><span class="qtext">Awake, OnEnable, Start는 각각 언제 불리고 무엇이 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>셋 다 초기화 콜백인데, 불리는 시점과 횟수가 다릅니다.</strong></p>
<ul>
<li><strong>Awake.</strong> 오브젝트가 생성될 때 딱 한 번 불립니다. 다른 오브젝트를 건드리지 않고 자기 자신을 준비하는 자리입니다.</li>
<li><strong>OnEnable.</strong> 활성화될 때마다 불립니다. 껐다 켜기를 반복하면 그때마다 다시 불립니다.</li>
<li><strong>Start.</strong> 모든 Awake가 끝난 뒤, 첫 프레임 직전에 한 번 불립니다. 다른 오브젝트를 참조해 연결하는 초기화는 여기서 합니다.</li>
</ul>
<p>순서를 이렇게 나눈 이유는, 모든 Awake가 먼저 끝난 다음 Start가 돌기 때문에 Start 시점에는 다른 오브젝트들이 이미 자기 초기화를 마쳤다고 믿고 참조할 수 있어서입니다. 그래서 "내 준비는 Awake, 남과 연결은 Start"로 기억하면 됩니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>오브젝트끼리 Awake 호출 순서는 보장되나요?</q>보장되지 않습니다. 어느 오브젝트의 Awake가 먼저 도는지는 정해져 있지 않아서, Awake 안에서 다른 오브젝트를 참조하면 아직 준비가 안 됐을 수 있습니다. 그래서 다른 오브젝트에 의존하는 건 Start로 미루는 게 안전합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q2" aria-label="2번 자신 있음"></label>
<details>
<summary><span><span class="qtag">LIFE-02</span><span class="qtext">Update와 FixedUpdate를 나누는 이유는 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>Update는 매 프레임 불리고, FixedUpdate는 고정된 시간 간격으로 불립니다. 물리를 프레임률과 무관하게 일관되게 처리하려고 나눈 겁니다.</strong></p>
<p>프레임률은 기기 성능이나 순간 부하에 따라 들쭉날쭉한데, 물리 계산이 이 들쭉날쭉한 간격을 따라가면 같은 힘을 줘도 기기마다 결과가 달라집니다. 그래서 <code>Rigidbody</code>에 힘을 주거나 물리로 이동시키는 건 항상 같은 간격으로 도는 FixedUpdate에서 처리해서, 어느 기기에서 돌리든 물리 결과가 같게 만듭니다.</p>
<p>대신 게임 로직 대부분과 렌더는 Update에서 처리합니다. 프레임마다 반응해야 하는 것들이니까요.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>그럼 입력 감지는 어디에 두나요?</q>Update에 둡니다. <code>GetKeyDown</code>처럼 그 프레임에만 한 번 true인 입력은, FixedUpdate가 한 프레임에 0번 불릴 수도 여러 번 불릴 수도 있어서 놓치거나 중복될 수 있습니다. 그래서 입력은 Update에서 받아 두고, 그 값을 FixedUpdate에서 물리에 반영하는 식으로 나눕니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q3" aria-label="3번 자신 있음"></label>
<details>
<summary><span><span class="qtag">LIFE-03</span><span class="qtext">LateUpdate는 왜 필요한가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>LateUpdate는 그 프레임의 모든 Update가 끝난 뒤에 불립니다. 다른 오브젝트가 움직임을 다 마친 걸 보고 나서 처리해야 하는 일을 위한 자리입니다.</strong></p>
<p>대표적인 게 카메라 추적입니다. 카메라가 플레이어를 따라가는데, 플레이어의 이동이 아직 안 끝난 상태에서 카메라가 따라가면 한 프레임 어긋나서 화면이 미세하게 떨립니다. 그래서 플레이어가 Update에서 이동을 마친 걸 확인한 다음, LateUpdate에서 카메라를 옮기면 지터 없이 딱 붙어 따라갑니다.</p>
<p>정리하면 "남이 다 움직인 뒤에 반응해야 하는 것"을 LateUpdate에 둔다고 보면 됩니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q4" aria-label="4번 자신 있음"></label>
<details>
<summary><span><span class="qtag">LIFE-04</span><span class="qtext">일시정지로 timeScale을 0으로 두면 UI 애니메이션까지 멈춥니다. 어떻게 해결하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>timeScale이 0이면 deltaTime이 0이 되기 때문입니다. deltaTime에는 timeScale이 곱해지거든요.</strong></p>
<p>일시정지를 걸려고 <code>timeScale</code>을 0으로 두면 게임 전체가 시간이 멈춘 것처럼 서는데, 문제는 이걸로 움직이는 것들이 전부 같이 멈춘다는 겁니다. 그래서 정지 메뉴가 떠서 슬라이드되는 애니메이션도 안 움직입니다.</p>
<p>해결책은 UI 애니메이션만 <code>unscaledDeltaTime</code>으로 구동하는 겁니다. 이건 timeScale의 영향을 안 받는 실제 경과 시간이라, 게임은 멈춰 있어도 정지 메뉴 UI는 계속 부드럽게 움직입니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q5" aria-label="5번 자신 있음"></label>
<details>
<summary><span><span class="qtag">LIFE-05</span><span class="qtext">레거시 입력과 새 Input System은 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>레거시는 Update에서 키를 직접 폴링하는 방식이고, 새 Input System은 액션과 실제 키의 바인딩을 에셋으로 분리하는 방식입니다.</strong></p>
<p>레거시는 <code>Input.GetKey</code>로 특정 키를 바로 읽어서 간단하고 빠릅니다. 대신 키가 코드에 하드코딩되니까, 게임패드나 터치를 함께 지원하거나 플레이어가 키를 다시 배치하려면 손이 많이 갑니다.</p>
<p>새 Input System은 "점프"나 "이동" 같은 액션을 먼저 정의하고, 거기에 어떤 키나 버튼을 연결할지를 따로 두는 구조입니다. 그래서 키보드, 게임패드, 터치를 한 번에 다룰 수 있고 런타임 리바인딩도 쉽습니다. 대가는 초기 설정이 복잡하다는 점이라, 입력 소스가 하나뿐인 작은 프로젝트면 레거시가 더 간편할 수 있습니다.</p>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>코루틴과 이벤트</h3><span class="cnt">5문항</span></div>
<p class="grp-note">시간을 다루는 코루틴과, 오브젝트를 느슨하게 잇는 이벤트를 묶었습니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q6" aria-label="6번 자신 있음"></label>
<details>
<summary><span><span class="qtag">CO-01</span><span class="qtext">코루틴은 어떻게 동작하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>코루틴은 실행을 중간에 멈췄다가 나중에 이어서 재개할 수 있는 함수입니다. 유니티 플레이어 루프에 얹혀서 프레임 단위로 재개됩니다.</strong></p>
<p>보통 함수는 호출되면 끝까지 쭉 돌고 반환하는데, 코루틴은 <code>yield</code>를 만나면 거기서 한 번 멈추고 제어를 유니티에 돌려줍니다. 그러면 유니티가 정해진 조건이 될 때 그 지점부터 다시 이어서 실행합니다. 그래서 여러 프레임에 걸친 연출이나 대기를, 한 프레임을 통째로 막지 않고 자연스럽게 풀어 쓸 수 있습니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>yield 종류에는 뭐가 있나요?</q>세 가지를 자주 씁니다. <code>yield return null</code>은 다음 프레임에 재개하고, <code>WaitForSeconds</code>는 지정한 시간이 지난 뒤 재개합니다. 다만 이 시간은 timeScale이 곱해진 시간이라, timeScale이 0이면 안 풀리고 그럴 땐 <code>WaitForSecondsRealtime</code>을 씁니다. <code>WaitForEndOfFrame</code>은 그 프레임 렌더링이 끝난 직후에 재개해서 스크린샷 같은 데 씁니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q7" aria-label="7번 자신 있음"></label>
<details>
<summary><span><span class="qtag">CO-02</span><span class="qtext">반복하는 코루틴에서 WaitForSeconds를 캐싱하라는 이유는?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>반복할 때마다 <code>new WaitForSeconds</code>로 새로 만들면, 그 객체가 매번 힙에 쌓여서 가비지 컬렉터에 부담을 주기 때문입니다.</strong></p>
<p>예를 들어 반복문 안에서 매번 새 대기 객체를 만들면, 같은 1초 대기인데도 계속 새 객체가 생기고 버려집니다. 이렇게 쌓인 쓰레기를 나중에 가비지 컬렉터가 치우는데, 치우는 순간 프레임이 살짝 끊깁니다.</p>
<p>그래서 대기 객체를 미리 한 번만 만들어 필드에 담아두고 반복 내내 그걸 재사용합니다. 값이 매번 바뀌는 게 아니라면 새로 만들 이유가 없으니까요.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q8" aria-label="8번 자신 있음"></label>
<details>
<summary><span><span class="qtag">CO-03</span><span class="qtext">코루틴과 async/await는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>코루틴은 유니티 엔진에 얹혀 프레임 단위로 도는 거고, async/await는 엔진 밖의 Task 기반이라 씬이나 오브젝트 수명과 무관하게 돕니다.</strong></p>
<p>가장 중요한 차이는 수명 관리입니다. 코루틴은 붙어 있는 게임오브젝트가 비활성이 되거나 파괴되면 자동으로 멈춥니다. 반면 async/await는 엔진과 상관없이 살아 있어서, 이미 파괴된 오브젝트를 건드리려 하면 문제가 생깁니다. 그래서 수동으로 취소를 걸어줘야 합니다.</p>
<p>그래서 프레임을 기다리거나 간단한 연출은 코루틴이 맞고, 파일이나 네트워크 같은 진짜 비동기 I/O는 async가 맞습니다. 실무에서는 GC가 안 생기는 UniTask로 둘의 장점을 합쳐 쓰기도 합니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q9" aria-label="9번 자신 있음"></label>
<details>
<summary><span><span class="qtag">CO-04</span><span class="qtext">이벤트 구독을 Start가 아니라 OnEnable/OnDisable에서 하는 이유는?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>Start는 오브젝트 수명에 한 번뿐이지만, 활성과 비활성은 여러 번 반복될 수 있어서 짝이 안 맞기 때문입니다.</strong></p>
<p>특히 풀링으로 오브젝트를 껐다 켰다 재활용하는 경우가 문제입니다. Start에서만 구독하면, 비활성 상태에서도 이벤트에 반응하거나, 다시 켤 때마다 구독이 중복으로 쌓입니다.</p>
<p>그래서 활성화될 때 불리는 OnEnable에서 구독하고, 비활성화될 때 불리는 OnDisable에서 해제하면 구독과 해제가 항상 짝을 이룹니다. 켜져 있을 때만 반응하고, 꺼지면 깔끔하게 떨어집니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q10" aria-label="10번 자신 있음"></label>
<details>
<summary><span><span class="qtag">CO-05</span><span class="qtext">UnityEvent와 C# event는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>C# event는 코드에서 연결하는 이벤트이고, UnityEvent는 인스펙터에서 드래그로 연결하는 이벤트입니다.</strong></p>
<p>C# event는 코드에서 <code>+=</code>로 구독하기 때문에 빠르고 타입이 안전합니다. 대신 인스펙터에는 안 보여서, 프로그래머가 아닌 사람은 배선할 수 없습니다. UnityEvent는 기획자가 코드 없이 인스펙터에서 버튼이나 트리거의 콜백을 드래그로 이을 수 있는 대신, 내부적으로 리플렉션으로 호출해서 더 느리고 GC도 생깁니다.</p>
<p>그래서 코드끼리의 잦은 통신은 C# event나 Action으로 하고, 인스펙터에 노출해 비프로그래머가 잇게 할 콜백은 UnityEvent로 씁니다. 다만 UnityEvent는 대상이 파괴돼도 자동으로 해제되지 않으니 관리가 필요합니다.</p>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>오브젝트 활성화와 파괴</h3><span class="cnt">4문항</span></div>
<p class="grp-note">"오브젝트를 끈다"와 "지운다"가 정확히 무엇을 의미하는지 구분하는 문항들입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q11" aria-label="11번 자신 있음"></label>
<details>
<summary><span><span class="qtag">OBJ-01</span><span class="qtext">SetActive와 컴포넌트의 enabled는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>SetActive는 게임 오브젝트 전체를 끄는 거고, enabled는 그 컴포넌트 하나만 끄는 겁니다.</strong></p>
<p><code>SetActive(false)</code>는 그 오브젝트와 자식까지 통째로 비활성화합니다. 그러면 Update도 안 돌고 <code>OnDisable</code>이 불립니다. 반면 <code>enabled = false</code>는 그 컴포넌트 하나의 동작만 끄고, 오브젝트의 나머지 컴포넌트나 렌더링은 그대로 살아 있습니다.</p>
<p>그래서 풀에 오브젝트를 반환할 때처럼 통째로 재울 때는 SetActive를 쓰고, 예를 들어 공격 히트박스만 잠깐 껐다 켤 때는 그 콜라이더의 enabled만 끕니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>activeSelf와 activeInHierarchy는 무엇이 다른가요?</q><code>activeSelf</code>는 자신에게 건 SetActive 플래그라 부모와 무관하고, <code>activeInHierarchy</code>는 조상까지 전부 켜져 있어야 true인 실제 활성 상태입니다. 그래서 자신은 켜 뒀어도 부모가 꺼져 있으면 activeSelf는 true인데 activeInHierarchy는 false가 됩니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q12" aria-label="12번 자신 있음"></label>
<details>
<summary><span><span class="qtag">OBJ-02</span><span class="qtext">Destroy와 DestroyImmediate는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>Destroy는 이번 프레임이 끝날 때 지연해서 파괴하고, DestroyImmediate는 부르는 즉시 파괴합니다.</strong></p>
<p><code>Destroy</code>가 지연 파괴인 이유는, 지금 프레임에서 그 오브젝트를 아직 참조하고 있을 수 있기 때문입니다. 프레임 끝까지 기다렸다가 안전하게 지웁니다. 반면 <code>DestroyImmediate</code>는 그 자리에서 바로 없애서, 원래는 에디터 툴을 만들 때 쓰라고 있는 겁니다.</p>
<p>그래서 런타임에서, 특히 컬렉션을 순회하는 도중에 DestroyImmediate를 쓰면 참조나 순회가 그 자리에서 깨져서 에러가 납니다. 런타임 파괴는 Destroy를 쓰는 게 원칙입니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q13" aria-label="13번 자신 있음"></label>
<details>
<summary><span><span class="qtag">OBJ-03</span><span class="qtext">DontDestroyOnLoad로 만든 매니저가 씬을 다시 들어가면 중복됩니다. 왜 그렇고 어떻게 막나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>DontDestroyOnLoad는 씬을 바꿔도 그 오브젝트를 살려두는 기능인데, 그 오브젝트가 씬에도 놓여 있으면 씬을 다시 들어올 때마다 새로 하나씩 또 생기기 때문입니다.</strong></p>
<p>이건 씬 전환 후에도 유지해야 하는 매니저 같은 걸 만들 때 씁니다. 그런데 매니저를 원래 씬에 배치해 뒀다면, 그 씬을 재진입할 때 이전 것은 살아 있는데 새 인스턴스가 또 만들어져서 둘이 됩니다.</p>
<p>그래서 이미 인스턴스가 존재하는지 검사해서, 새로 생긴 중복은 스스로 파괴하게 만듭니다. 흔히 싱글턴 패턴으로 "내가 처음이면 나를 유지하고, 아니면 나를 지운다"를 넣어 해결합니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q14" aria-label="14번 자신 있음"></label>
<details>
<summary><span><span class="qtag">OBJ-04</span><span class="qtext">프리팹과 프리팹 변형(Variant)은 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>프리팹은 게임오브젝트 구성을 통째로 저장한 틀이고, 프리팹 변형은 그 프리팹을 상속해서 일부만 바꾼 파생본입니다.</strong></p>
<p>프리팹은 원본을 고치면 그걸 쓰는 모든 인스턴스에 한 번에 반영돼서 일관되게 관리됩니다. 인스턴스에서 특정 값만 바꾸면 그 항목만 오버라이드로 남고 나머지는 원본을 계속 따릅니다. 변형은 여기서 한 걸음 더 나아가, 기존 프리팹을 부모로 두고 색이나 스탯 같은 차이만 유지하는 겁니다.</p>
<p>그래서 공통 구조는 부모 프리팹에서 물려받고 종류별 차이만 변형으로 두면, 기본 적을 고칠 때 그 변형들에도 공통 부분이 자동으로 반영됩니다. 색이나 능력치만 다른 적 종류를 만들 때 잘 맞습니다.</p>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>GC와 성능 최적화</h3><span class="cnt">6문항</span></div>
<p class="grp-note">프레임 끊김의 두 축은 힙 할당과 C++·C# 경계 비용입니다. "왜 비싼가"를 말할 수 있어야 합니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q15" aria-label="15번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PERF-01</span><span class="qtext">유니티에서 GC 스파이크는 왜 생기고 무엇을 피해야 하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>GC 스파이크는 가비지 컬렉터가 힙을 회수할 때 메인 스레드를 잠깐 멈춰서 프레임이 끊기는 현상입니다.</strong></p>
<p>중요한 건 원인이 무거운 계산이 아니라 힙 할당이라는 점입니다. 매 프레임 쓰레기를 계속 만들면 힙이 금방 차고, 그걸 치우느라 GC가 자주 돌면서 그때마다 화면이 멈칫합니다.</p>
<p>그래서 Update처럼 매 프레임 도는 곳에서 새 객체를 만들거나, 박싱, LINQ, 문자열 결합, 람다 클로저처럼 몰래 할당을 일으키는 것들을 피합니다. 대신 객체를 미리 만들어 캐싱하거나 풀링해서, 할당 자체를 줄이는 게 핵심입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>계산량을 줄이는 것과 뭐가 다른가요?</q>다릅니다. CPU 계산이 무거운 건 그 프레임이 통째로 느려지는 문제고, GC 스파이크는 평소엔 멀쩡하다가 가끔 툭 끊기는 문제입니다. 그래서 접근이 다른데, GC 쪽은 연산을 줄이는 게 아니라 할당을 줄이는 방향으로 잡아야 합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q16" aria-label="16번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PERF-02</span><span class="qtext">오브젝트 풀링은 무엇을 해결하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>오브젝트 풀링은 <code>Instantiate</code>와 <code>Destroy</code>를 반복하는 비용을, 오브젝트를 보관했다 재활용하는 방식으로 없애는 기법입니다.</strong></p>
<p>총알이나 이펙트처럼 짧게 살다 사라지는 걸 매번 생성하고 파괴하면 그 자체가 비쌉니다. 특히 <code>Destroy</code>를 반복하면 버려진 오브젝트가 쓰레기로 쌓여서 GC 부담이 커지고, 그게 프레임 끊김으로 나타납니다.</p>
<p>그래서 미리 넉넉히 만들어 풀에 담아 두고, 필요하면 비활성 상태에서 하나 꺼내 켜고, 다 쓰면 파괴하지 않고 다시 꺼서 풀에 돌려놓습니다. 할당과 해제 자체를 없애는 거라 생성 비용도 GC 부담도 같이 사라집니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>Instantiate에 위치를 넘기는 것과 나중에 대입하는 건 차이가 있나요?</q>있습니다. <code>Instantiate(prefab, pos, rot)</code>처럼 처음부터 위치를 넘기면 Transform이 한 번에 정해집니다. 반면 생성한 뒤에 <code>transform.position</code>에 대입하면, 기본 위치로 만들었다가 다시 옮기는 셈이라 자식 좌표 재계산이나 물리 통보 같은 갱신이 두 번 일어날 수 있습니다. 한둘이면 무시할 수준이지만 대량 스폰에서는 차이가 쌓입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q17" aria-label="17번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PERF-03</span><span class="qtext">GetComponent를 매 프레임 호출하면 안 되는 이유는?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>GetComponent는 그 오브젝트의 컴포넌트 목록을 뒤져서 찾는 비용이 있기 때문입니다.</strong></p>
<p>한두 번이면 별것 아니지만, 이걸 Update에 넣어 매 프레임 호출하면 프레임마다 목록을 뒤지는 일이 반복됩니다. 참조는 바뀌지 않는데 매번 찾을 이유가 없죠.</p>
<p>그래서 <code>Awake</code>나 <code>Start</code>에서 한 번 찾아 필드에 캐싱해 두고 재사용합니다. 한 번만 쓰거나 있을지 없을지 모르는 경우엔 <code>TryGetComponent</code>가 깔끔합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>TryGetComponent가 왜 더 나은가요?</q>bool과 out으로 결과를 돌려주는 패턴이라 없을 때의 처리가 자연스럽게 포함됩니다. 그리고 예전에 못 찾았을 때 발생하던 불필요한 가비지 할당도 피할 수 있어서, 조건부로 컴포넌트를 다룰 때 유리합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q18" aria-label="18번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PERF-04</span><span class="qtext">GameObject.Find나 FindObjectOfType를 지양하는 이유는?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>씬에 있는 오브젝트를 전부 훑어서 찾는 방식이라 비싸기 때문입니다.</strong></p>
<p>오브젝트가 많을수록 검색 비용이 커지는데, 이걸 Update에서 매 프레임 하면 치명적입니다. 씬 전체를 프레임마다 뒤지는 셈이니까요.</p>
<p>그래서 대안이 몇 가지 있습니다. <code>Awake</code>나 <code>Start</code>에서 한 번 찾아 캐싱하거나, <code>[SerializeField]</code>로 인스펙터에서 직접 연결해 두거나, 이벤트나 의존성 주입으로 참조를 넘겨받는 겁니다. 되도록 런타임 검색 자체를 없애는 방향입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>Camera.main도 비슷한가요?</q>네, 같은 함정입니다. <code>Camera.main</code>은 호출할 때마다 'MainCamera' 태그가 붙은 오브젝트를 태그로 찾아옵니다. 그래서 Update에서 매 프레임 접근하면 비싸고, <code>Awake</code>나 <code>Start</code>에서 한 번 캐싱해 두고 재사용하는 게 맞습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q19" aria-label="19번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PERF-05</span><span class="qtext">MonoBehaviour가 많을 때 Update가 성능에 부담이 되는 이유는?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>엔진이 각 MonoBehaviour의 Update를 하나씩 불러주는데, 그 호출이 C++로 된 엔진과 C# 코드 사이의 경계를 넘는 일이라 건마다 오버헤드가 있기 때문입니다.</strong></p>
<p>Update를 가진 인스턴스가 많아질수록 이 경계를 넘는 호출 횟수가 그만큼 늘어납니다. 각각의 로직이 가벼워도, 경계를 넘는 것 자체의 비용이 쌓이는 거죠.</p>
<p>그래서 매니저 하나가 리스트를 들고 자기가 대상들을 돌게 만들면, 경계 호출은 매니저의 Update 한 번으로 줄고 나머지는 전부 C# 내부 루프가 됩니다. 핵심은 "매 프레임 콜백을 가진 인스턴스 수"를 줄여서 경계 호출 횟수를 낮추는 겁니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>내용이 빈 Update도 비용이 있나요?</q>있습니다. 엔진이 그 Update가 비었는지 모르고 일단 경계를 넘어 불러보기 때문에, 아무 일도 안 하는 Update도 호출 비용은 그대로 듭니다. 그래서 안 쓰는 Update는 지우는 게 좋습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q20" aria-label="20번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PERF-06</span><span class="qtext">Animator 파라미터를 StringToHash로 캐싱하는 이유는?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong><code>SetTrigger("Jump")</code>처럼 문자열로 넘기면 유니티가 매번 그 문자열을 내부적으로 해시로 바꿔서 조회하기 때문입니다.</strong></p>
<p>애니메이터는 파라미터를 실제로 정수 해시로 관리하는데, 문자열을 넘기면 호출할 때마다 그 문자열을 해시로 변환하는 일이 반복됩니다. 자주 부르는 파라미터라면 이 반복 해싱이 쌓입니다.</p>
<p>그래서 <code>StringToHash</code>로 해시를 미리 한 번 구해 캐싱해 두고, 이후엔 정수 해시를 넘깁니다. 여기서 아끼는 건 GC가 아니라 반복되는 문자열 해싱 비용이라는 점을 짚어주면 좋습니다.</p>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>렌더링과 그래픽스</h3><span class="cnt">5문항</span></div>
<p class="grp-note">화면에 그리는 비용, 특히 드로우콜을 줄이는 이야기가 중심입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q21" aria-label="21번 자신 있음"></label>
<details>
<summary><span><span class="qtag">REND-01</span><span class="qtext">드로우콜을 줄이는 배칭에는 어떤 종류가 있나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>배칭은 여러 오브젝트를 한 번의 드로우콜로 묶어 그리는 기법인데, 크게 세 가지가 있습니다.</strong></p>
<ul>
<li><strong>Static Batching.</strong> 움직이지 않는 오브젝트들을 미리 하나로 결합합니다. 정적이어야만 쓸 수 있습니다.</li>
<li><strong>Dynamic Batching.</strong> 작은 메시를 런타임에 묶습니다. 대신 정점 수 제한이 있어서 큰 메시에는 못 씁니다.</li>
<li><strong>GPU Instancing.</strong> 같은 메시와 머티리얼을 쓰는 다수를 한 드로우콜로 처리합니다. 움직이든 정점이 많든 됩니다.</li>
</ul>
<p>그래서 정점이 많은 같은 메시가 다수라면 Dynamic Batching은 제한에 걸리니 GPU Instancing으로 갑니다. 나무나 적처럼 같은 걸 잔뜩 그릴 때 특히 효과가 큽니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>2D나 UI에서는 어떻게 묶나요?</q>스프라이트 아틀라스를 씁니다. 여러 스프라이트를 한 텍스처로 합쳐 두면, 같은 아틀라스를 쓰는 것끼리 한 드로우콜로 묶입니다. 텍스처가 바뀔 때마다 배치가 끊기는데, 아틀라스로 텍스처를 하나로 합치면 텍스처 전환 횟수가 줄어서 UI나 2D 스프라이트가 한 콜로 묶이는 겁니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q22" aria-label="22번 자신 있음"></label>
<details>
<summary><span><span class="qtag">REND-02</span><span class="qtext">renderer.material에 접근하면 왜 배칭이 깨지나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong><code>renderer.material</code>에 접근하는 순간 그 머티리얼이 복제돼서, 그 렌더러만 고유한 머티리얼을 갖게 되기 때문입니다.</strong></p>
<p>배칭은 같은 머티리얼을 공유하는 것끼리 묶는 건데, 복제가 일어나면 그 오브젝트는 남들과 다른 머티리얼이 되어 묶임에서 빠집니다. 그래서 드로우콜이 늘고, 복제된 인스턴스가 정리되지 않으면 누수도 생깁니다.</p>
<p>그래서 전체가 공유하는 값은 <code>sharedMaterial</code>로 다루고, 개별 오브젝트의 색만 바꾸고 싶으면 머티리얼을 복제하는 대신 <code>MaterialPropertyBlock</code>으로 그 값만 덮어씁니다. 그러면 배칭을 유지하면서 개별 값을 줄 수 있습니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q23" aria-label="23번 자신 있음"></label>
<details>
<summary><span><span class="qtag">REND-03</span><span class="qtext">Built-in, URP, HDRP 렌더 파이프라인은 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>Built-in은 레거시 기본 파이프라인이고, URP와 HDRP는 렌더 흐름을 C#에서 제어하는 스크립터블 렌더 파이프라인 기반으로, 각각 중간 사양과 고사양을 겨눕니다.</strong></p>
<p>Built-in은 오래 검증됐지만 커스터마이즈가 어렵고 확장에 한계가 있습니다. URP는 가볍고 지원 플랫폼이 넓어서 모바일이나 중간 사양에 맞고, HDRP는 고품질 라이팅과 포스트 이펙트를 주는 대신 무거워서 고사양 PC나 콘솔용이고 모바일에는 못 씁니다.</p>
<p>주의할 점은 URP와 HDRP는 프로젝트 초기에 정해야 한다는 겁니다. 중간에 갈아타면 셰이더와 머티리얼을 전부 다시 맞춰야 해서 비쌉니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q24" aria-label="24번 자신 있음"></label>
<details>
<summary><span><span class="qtag">REND-04</span><span class="qtext">오클루전 컬링은 프러스텀 컬링과 무엇이 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>프러스텀 컬링은 카메라 시야 밖을 걸러내는 거고, 오클루전 컬링은 시야 안에 있지만 다른 물체에 완전히 가려서 안 보이는 것을 안 그리는 겁니다.</strong></p>
<p>시야 밖은 당연히 안 그리면 되지만, 시야 안이라도 벽 뒤에 완전히 가린 물체는 그려봤자 화면에 안 나옵니다. 오클루전 컬링은 이런 가려진 것까지 걸러냅니다. 이를 위해 정적 지형을 미리 구워서 어디서 뭐가 보이는지를 셀과 포털 정보로 담아 두고, 런타임에 가시성을 판정합니다.</p>
<p>그래서 실내나 복잡한 도심처럼 가림이 많은 씬에서는 드로우콜을 크게 줄입니다. 대신 굽는 비용과 데이터가 들고, 탁 트인 야외처럼 가리는 게 별로 없는 곳에서는 효과가 적습니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q25" aria-label="25번 자신 있음"></label>
<details>
<summary><span><span class="qtag">REND-05</span><span class="qtext">UGUI에서 UI가 자주 바뀌면 왜 느려지나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>UGUI는 캔버스 단위로 UI 메시를 묶어서 그리는데, 그 캔버스 안의 요소 하나만 바뀌어도 캔버스 전체가 다시 빌드되기 때문입니다.</strong></p>
<p>한 요소가 변하면 그 캔버스가 더티로 표시되고, 캔버스에 속한 UI 메시를 통째로 다시 만듭니다. 그래서 큰 캔버스 하나에 자주 바뀌는 것과 정적인 것을 섞어 두면, 작은 변화 하나마다 전체를 다시 빌드하느라 비싸집니다.</p>
<p>그래서 체력바나 타이머처럼 자주 갱신되는 요소는 별도 캔버스로 분리해서, 그것만 다시 빌드되게 합니다. 여기에 더해, 클릭을 받을 필요 없는 그래픽은 Raycast Target을 꺼서 불필요한 레이캐스트 비용도 줄입니다.</p>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>물리와 충돌</h3><span class="cnt">6문항</span></div>
<p class="grp-note">물리 엔진에게 "제대로 알려주는" 방법과 충돌 감지의 갈래를 다룹니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q26" aria-label="26번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PHYS-01</span><span class="qtext">위치를 transform 대입 대신 Rigidbody.MovePosition으로 옮기는 이유는?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>transform에 위치를 직접 대입하면 물리를 무시하고 순간 이동하는 거라, 콜라이더를 뚫는 터널링이 생길 수 있기 때문입니다.</strong></p>
<p>물리 엔진은 오브젝트들의 위치를 공간을 나눈 자체 자료구조에 캐싱해 두고 충돌을 계산합니다. <code>MovePosition</code>은 이동을 엔진에 등록해서 그 캐시가 갱신되고 충돌도 존중되며 보간까지 적용됩니다. 반면 transform 직접 대입은 엔진의 캐시와 실제 위치가 어긋나서, 엔진이 강제로 다시 계산하게 만들고 경로 중간을 건너뛰어 충돌을 놓칩니다.</p>
<p>그래서 물리 영향을 받는 <code>Rigidbody</code> 오브젝트를 옮길 때는 MovePosition을 씁니다. 벽을 사이에 두고 빠르게 움직이는 물체가 벽을 뚫고 지나가는 게 대표적인 터널링 사례입니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q27" aria-label="27번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PHYS-02</span><span class="qtext">Rigidbody와 CharacterController는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>Rigidbody는 물리 엔진에 맡겨 중력과 힘, 충돌을 자동으로 처리하고, CharacterController는 물리를 쓰지 않고 충돌 감지만 하며 이동은 직접 구현합니다.</strong></p>
<p>Rigidbody는 힘을 주면 엔진이 알아서 밀고 부딪히고 튕깁니다. 그래서 물체가 물리적으로 상호작용해야 할 때 자연스럽습니다. CharacterController는 중력이나 가속 같은 걸 직접 코드로 넣어야 하는 대신, 캐릭터가 미끄러지거나 예측 못 하게 튕기는 일 없이 정밀하게 움직입니다.</p>
<p>그래서 굴러가는 공이나 던진 상자 같은 물리 상호작용은 Rigidbody, 플레이어처럼 조작이 정확해야 하는 캐릭터 이동은 CharacterController가 잘 맞습니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q28" aria-label="28번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PHYS-03</span><span class="qtext">OnCollision과 OnTrigger는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>콜라이더가 <code>isTrigger</code>인지 여부로 갈립니다. 트리거는 물리적으로 부딪히지 않고 통과하며 겹침만 감지하고, 콜리전은 실제로 부딪히는 물리 충돌입니다.</strong></p>
<p>트리거는 범위 감지에 씁니다. 예를 들어 특정 구역에 플레이어가 들어왔는지 알고 싶을 때, 막지 않고 통과시키면서 들어온 사실만 알려줍니다. 콜리전은 벽에 막히거나 물체끼리 튕기는 진짜 물리 충돌입니다.</p>
<p>주의할 점은 둘 다 호출되려면 적어도 한쪽에 <code>Rigidbody</code>가 있어야 한다는 겁니다. 다만 이건 둘의 차이가 아니라 둘 다에 걸리는 공통 전제라서, 물어보면 구분해서 답하는 게 좋습니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q29" aria-label="29번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PHYS-04</span><span class="qtext">레이어 충돌 매트릭스는 무엇이고 왜 쓰나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>오브젝트를 물리 레이어로 나누고, 어떤 레이어끼리 서로 충돌하거나 감지할지를 표에서 켜고 끄는 설정입니다.</strong></p>
<p>이렇게 하는 이유는 두 가지입니다. 하나는 성능인데, 서로 부딪힐 일이 없는 레이어 쌍의 충돌 계산을 아예 건너뛰어서 물리의 초기 검사 비용을 줄입니다. 다른 하나는 게임 규칙인데, 원치 않는 충돌을 없앨 수 있습니다.</p>
<p>예를 들어 아군 총알이 아군에게 맞지 않게 하려면, 아군 총알 레이어와 아군 레이어의 충돌을 매트릭스에서 꺼 두면 됩니다. 레이캐스트의 LayerMask와 같은 레이어 개념을, 물리 충돌 전반에 적용한 거라고 보면 됩니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q30" aria-label="30번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PHYS-05</span><span class="qtext">Raycast는 어떻게 동작하며 LayerMask는 왜 쓰나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>Raycast는 시작점에서 한 방향으로 광선을 쏴서 처음 부딪히는 콜라이더를 찾아 주는 기능입니다.</strong></p>
<p>맞으면 어떤 오브젝트를 어느 지점에서 맞혔는지, 그 표면의 법선과 거리까지 돌려줍니다. 마우스로 뭘 클릭했는지 알고 싶으면 화면 좌표를 <code>ScreenPointToRay</code>로 월드 광선으로 바꿔 쏩니다.</p>
<p>LayerMask는 특정 레이어만 검사 대상으로 삼는 필터입니다. 관심 없는 레이어를 빼면 검사할 대상이 줄어 빨라지고, 원치 않는 것에 걸리지 않아 정확해집니다. 가장 가까운 하나만 필요하면 <code>Raycast</code>, 경로상 전부는 <code>RaycastAll</code>, 할당을 아끼려면 <code>RaycastNonAlloc</code>을 씁니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q31" aria-label="31번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PHYS-06</span><span class="qtext">NavMesh 길찾기는 어떻게 이뤄지나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>걸을 수 있는 표면을 미리 구운 내비게이션 메시 위에서 A* 알고리즘으로 경로를 찾는 방식입니다.</strong></p>
<p>지형 전체를 격자로 훑는 대신, 걸을 수 있는 영역만 폴리곤 그물로 만들어 두고 그 위에서만 경로를 탐색하니 효율적입니다. NavMeshAgent가 목적지까지의 경로를 따라 이동하면서 서로 피해 갑니다.</p>
<p>정적인 지형은 미리 굽고, 실행 중에 생기는 동적 장애물은 NavMeshObstacle로 실시간에 구멍을 냅니다. 계단이나 점프처럼 메시가 끊긴 구간은 Off-Mesh Link로 이어 줍니다.</p>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>에셋·데이터·빌드</h3><span class="cnt">6문항</span></div>
<p class="grp-note">데이터를 어디에 두고, 무엇이 저장되며, 빌드는 어떻게 도는지에 대한 문항들입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q32" aria-label="32번 자신 있음"></label>
<details>
<summary><span><span class="qtag">DATA-01</span><span class="qtext">ScriptableObject는 무엇이고 언제 쓰나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>ScriptableObject는 데이터를 MonoBehaviour에서 떼어 내 에셋으로 관리하는 방식입니다.</strong></p>
<p>핵심은 공유 참조입니다. 예를 들어 적 1000마리가 같은 스킬 데이터를 쓴다고 할 때, 데이터를 MonoBehaviour에 두면 인스턴스마다 그 데이터가 복제돼서 메모리에 1000벌이 생깁니다. ScriptableObject로 두면 에셋 하나를 모두가 참조하니까 메모리에 한 벌만 존재합니다.</p>
<p>그래서 단일 진실 공급원이 되고, 씬 사이에서 공유하거나 데이터를 통째로 교체하기도 쉽습니다. 스탯 표나 설정처럼 여럿이 공유하는 데이터를 담기에 적합합니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q33" aria-label="33번 자신 있음"></label>
<details>
<summary><span><span class="qtag">DATA-02</span><span class="qtext">Transform의 로컬 좌표와 월드 좌표는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>로컬 좌표는 부모를 기준으로 한 상대 위치이고, 월드 좌표는 씬 전체의 절대 위치입니다.</strong></p>
<p>씬은 Transform의 부모-자식 트리로 이뤄져 있습니다. 자식의 위치나 회전, 크기는 부모를 기준으로 하기 때문에, 부모가 움직이면 자식도 딸려 갑니다. 월드 좌표는 조상들의 변환을 전부 누적해서 계산한 값이라, <code>position</code>은 월드 기준이고 <code>localPosition</code>은 부모 기준입니다.</p>
<p>주의할 점은 부모에 스케일이 걸려 있으면 자식의 월드 크기나 거리가 함께 왜곡된다는 겁니다. 그래서 부모에 배율을 줄 때는 자식이 어떻게 늘어나는지 신경 써야 합니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q34" aria-label="34번 자신 있음"></label>
<details>
<summary><span><span class="qtag">DATA-03</span><span class="qtext">필드를 public 대신 [SerializeField] private으로 두는 이유는?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>인스펙터에서는 편집하게 열어 두면서, 코드 상으로는 외부 접근을 막아 캡슐화를 지키기 위해서입니다.</strong></p>
<p><code>public</code>으로 두면 인스펙터 노출과 외부 코드 접근이 한 묶음으로 딸려 옵니다. 그러면 다른 클래스가 그 값을 마음대로 바꿔서 이 오브젝트가 지켜야 할 불변식이 깨질 수 있습니다.</p>
<p><code>[SerializeField]</code>를 붙인 private 필드는 외부 코드에서는 못 건드리지만 인스펙터에는 노출돼서 편집과 디버깅이 됩니다. 즉 "에디터에서의 편집 권한"과 "코드에서의 접근 권한"을 분리하는 겁니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q35" aria-label="35번 자신 있음"></label>
<details>
<summary><span><span class="qtag">DATA-04</span><span class="qtext">유니티에서는 무엇이 직렬화되나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>인스펙터 노출, 저장, 프리팹은 전부 유니티 직렬화를 거치는데, 대상은 public이거나 <code>[SerializeField]</code>가 붙은 필드로 한정됩니다.</strong></p>
<p>프로퍼티나 static, readonly, Dictionary 같은 건 기본적으로 직렬화되지 않습니다. 다형성이 필요한 필드도 기본은 안 돼서 <code>[SerializeReference]</code>가 따로 필요합니다.</p>
<p>이게 중요한 이유는, 직렬화되는지 여부가 값이 유지되는지, 인스펙터에 보이는지, 그리고 스크립트를 다시 컴파일할 때 값이 살아남는지를 좌우하기 때문입니다. 인스펙터에 값이 안 뜨거나 리로드 후 값이 사라지면 대개 직렬화 규칙 문제입니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q36" aria-label="36번 자신 있음"></label>
<details>
<summary><span><span class="qtag">DATA-05</span><span class="qtext">Resources.Load와 Addressables는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>Resources는 폴더 내용을 빌드에 통째로 넣어 로컬에서 불러오는 방식이고, Addressables는 주소로 필요할 때 불러오는 방식입니다.</strong></p>
<p>Resources는 그 폴더가 빌드에 전부 포함되기 때문에 빌드 크기가 커지고, 문자열 경로로 찾아서 오타 같은 실수에 약합니다. Addressables는 에셋에 주소를 매겨 필요한 순간에 온디맨드로 로드하고, 원격 다운로드나 콘텐츠 갱신, 비동기 로드, 참조 카운트 관리까지 됩니다.</p>
<p>여기서 짚을 점은, Resources가 원격에서 받아오는 게 아니라 빌드에 포함된 로컬 로드라는 겁니다. 규모가 커지면 관리와 갱신이 유리한 Addressables 쪽으로 가는 게 일반적입니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q37" aria-label="37번 자신 있음"></label>
<details>
<summary><span><span class="qtag">DATA-06</span><span class="qtext">IL2CPP와 Mono는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>Mono는 코드를 런타임에 그때그때 컴파일하는 방식이고, IL2CPP는 미리 C++로 변환해 네이티브로 컴파일해 두는 방식입니다.</strong></p>
<p>Mono는 IL을 실행 중에 컴파일해서 빌드가 빠르고 개발 중에 유리하지만, 일부 플랫폼은 지원하지 않습니다. IL2CPP는 IL을 C++로 바꾼 뒤 네이티브로 미리 컴파일해서 실행이 빠르고 역공학이 어렵습니다. iOS 같은 플랫폼에서는 필수인 대신 빌드가 느립니다.</p>
<p>주의할 점은 IL2CPP는 미리 컴파일하는 방식이라 런타임에 코드를 생성하는 일부 리플렉션이나 dynamic에 제약이 있다는 겁니다. 그래서 코드 스트리핑 설정에 주의해야 합니다. 출시 빌드는 성능과 보안, 플랫폼 요건 때문에 IL2CPP를 쓰는 경우가 많습니다.</p>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>상황형 문제 해결</h3><span class="cnt">5문항</span></div>
<p class="grp-note">정답보다 접근 순서를 봅니다. 한 증상에 여러 영역이 얽혀 있으니, 측정으로 원인을 좁힌 뒤 개념으로 설명하세요.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q38" aria-label="38번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-01</span><span class="qtext">게임이 진행될수록 주기적으로 프레임이 뚝뚝 끊깁니다. 무엇을 의심하겠습니까?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>평소엔 멀쩡하다가 주기적으로 툭 끊긴다는 게 핵심 단서인데, 이건 계산이 무거운 게 아니라 뭔가 쌓였다가 한꺼번에 처리되는 신호입니다. 저는 GC 스파이크를 먼저 의심합니다.</strong></p>
<p>매 프레임 쓰레기를 만드는 코드가 있으면 힙이 차고, 가비지 컬렉터가 그걸 치우는 순간 메인 스레드가 잠깐 멈춰서 규칙적으로 끊깁니다. 그래서 추측보다 먼저 프로파일러로 어디서 GC Alloc이 나는지 봅니다. Update 안의 new, 박싱, LINQ, 문자열 결합이 흔한 범인입니다.</p>
<p>만약 시간이 갈수록 점점 더 심해진다면 메모리 누수도 같이 봅니다. 이벤트 구독을 해제 안 했거나 컬렉션에 계속 쌓기만 하면 메모리가 늘고, 결국 페이지 폴트까지 겹쳐 끊김이 심해집니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q39" aria-label="39번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-02</span><span class="qtext">총알을 대량으로 발사하는데 쏠 때마다 살짝 끊깁니다. 원인과 해결은?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>발사할 때마다 총알을 <code>Instantiate</code>로 만들고 <code>Destroy</code>로 없애는 게 원인일 가능성이 큽니다.</strong></p>
<p>생성과 파괴 자체가 비용이고, 특히 파괴가 반복되면 버려진 총알이 쓰레기로 쌓여서 GC 부담이 커지고 그게 끊김으로 나타납니다. 그래서 먼저 프로파일러로 발사 순간에 할당이 튀는지 확인합니다.</p>
<p>해결은 오브젝트 풀링입니다. 총알을 미리 만들어 풀에 담아 두고, 쏠 때 비활성 총알을 하나 꺼내 켜고, 사라질 때 파괴 대신 다시 풀에 돌려놓습니다. 할당과 해제를 아예 없애니까 발사할 때의 끊김이 사라집니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>총알이 빠른데 얇은 벽을 통과해 버립니다.</q>터널링입니다. 빠른 물체가 한 프레임에 벽을 건너뛰어 충돌을 놓치는 건데, 물리로 옮길 때 transform 직접 대입 대신 <code>Rigidbody.MovePosition</code>을 쓰거나, 콜라이더의 충돌 감지 모드를 연속 감지로 바꾸면 완화됩니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q40" aria-label="40번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-03</span><span class="qtext">같은 적을 수백 마리 스폰하니 드로우콜이 폭증하고 GPU가 느립니다. 어떻게 줄이나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>같은 메시를 수백 개 그리는데 드로우콜이 그만큼 나간다는 건, 하나로 묶이지 못하고 개별로 그려지고 있다는 뜻입니다.</strong></p>
<p>먼저 프레임 디버거로 왜 배칭이 안 되는지 봅니다. 같은 메시와 머티리얼이라면 GPU Instancing으로 한 드로우콜에 묶을 수 있습니다. 이게 정점 많은 동일 메시 다수에 가장 잘 맞습니다.</p>
<p>배칭이 깨지는 흔한 원인은 코드에서 <code>renderer.material</code>에 접근해 머티리얼이 복제되는 겁니다. 개별 색만 바꾸는 거라면 복제 대신 <code>MaterialPropertyBlock</code>으로 값만 덮어씌워 배칭을 유지합니다. 더 근본적으로 멀리 있는 적은 안 보이게 컬링하거나 단순한 모델로 바꿔 그리는 일감 자체를 줄입니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q41" aria-label="41번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-04</span><span class="qtext">대량 유닛의 경로 계산이 메인 스레드를 막아 프레임이 튑니다. 어떻게 풀겠습니까?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>무거운 계산이 전부 메인 스레드에서 한 프레임 안에 돌기 때문입니다. 그 계산을 메인 스레드 밖으로 빼거나 여러 프레임에 나눠야 합니다.</strong></p>
<p>먼저 프로파일러로 정말 그 계산이 프레임을 잡아먹는지 확인합니다. 유니티에서는 Job System으로 이런 계산을 워커 스레드에 분산해 멀티코어를 활용할 수 있고, 여기에 Burst 컴파일러를 붙이면 그 잡을 SIMD 최적화된 네이티브 코드로 바꿔 수 배 가속됩니다. 데이터를 촘촘한 배열로 두는 방식과 맞물리면 캐시 지역성까지 살아 더 빨라집니다.</p>
<p>스레드로 못 빼는 부분이라면, 코루틴으로 계산을 여러 프레임에 쪼개 나눠 담거나, 멀리 있는 유닛은 덜 자주 갱신해서 한 프레임의 일감 자체를 줄입니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="unity-q42" aria-label="42번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-05</span><span class="qtext">체력바가 매 프레임 갱신되는데 UI 전체가 무거워집니다. 왜일까요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>체력바 하나가 바뀔 때마다 그게 속한 캔버스 전체가 다시 빌드되고 있을 가능성이 큽니다.</strong></p>
<p>UGUI는 캔버스 단위로 UI 메시를 묶어 그리는데, 그 안의 요소 하나만 바뀌어도 캔버스가 더티가 돼서 통째로 다시 빌드됩니다. 그래서 매 프레임 바뀌는 체력바가 크고 정적인 UI와 같은 캔버스에 있으면, 프레임마다 그 큰 캔버스 전체를 다시 만드는 셈이라 무거워집니다.</p>
<p>그래서 자주 바뀌는 체력바나 타이머는 별도 캔버스로 분리해서 그것만 다시 빌드되게 합니다. 여기에 더해, 클릭을 받을 필요 없는 그래픽은 Raycast Target을 꺼서 레이캐스트 비용도 줄입니다.</p>
</div>
</div>
</details>
</div>
</section>
<section class="close">
<h3>면접 당일 체크리스트</h3>
<ul>
<li><strong>모르면 "모르겠습니다"라고 말하세요.</strong> 꼬리질문으로 두세 번만 파고들면 모호한 답은 드러납니다. 인정한 뒤 아는 데까지 추론하는 쪽이 낫습니다.</li>
<li><strong>결론 먼저, 그다음 이유와 트레이드오프.</strong> 정의 한 문장으로 시작하면 흐름이 잡힙니다.</li>
<li><strong>"왜 비싼가"를 항상 준비하세요.</strong> 유니티 최적화 문항은 대부분 GC 할당 아니면 C++·C# 경계 비용, 아니면 드로우콜로 귀결됩니다.</li>
<li><strong>추측보다 측정.</strong> 상황형 문제는 "먼저 프로파일러로 원인을 좁힌다"는 태도를 앞세우면 점수가 높습니다.</li>
<li><strong>소리 내어 연습하세요.</strong> 아는 것과 30초 안에 말하는 것은 다른 능력입니다.</li>
</ul>
</section>
</div>
<div class="field" data-field="csharp" hidden>
<p class="note"><strong>답변 프레임.</strong> 정의 한 문장으로 결론 먼저 → 왜 그렇게 동작·설계됐는지 → 트레이드오프(꼬리질문의 90%가 여기를 찌릅니다) → 필요하면 실제 예시 한 줄. 단정("절대 안 됩니다")은 반례 하나로 무너지니 "일반적으로 ~지만 ~한 경우엔 다릅니다"로.</p>
<div class="bar">
<span class="prog"><b class="prog-done">0</b> / <span class="prog-total">34</span> 자신 있음</span>
<span class="bar-sp"></span>
<button class="tool tool-open" type="button">모두 펼치기</button>
<button class="tool tool-hide" type="button" aria-pressed="false">체크 숨기기</button>
<button class="tool tool-reset" type="button">초기화</button>
</div>
<section class="grp">
<div class="grp-head"><h3>값 타입과 참조 타입</h3><span class="cnt">4문항</span></div>
<p class="grp-note">변수 칸에 무엇이 담기느냐가 대입·비교·복사의 모든 차이를 만듭니다. C#에서 가장 자주 파고드는 축입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q1" aria-label="1번 자신 있음"></label>
<details>
<summary><span><span class="qtag">VAL-01</span><span class="qtext">값 타입과 참조 타입은 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>변수 칸에 데이터가 직접 들어가면 값 타입이고, 데이터가 있는 힙 주소만 들어가면 참조 타입입니다.</strong></p>
<p><code>struct</code> 같은 값 타입은 변수 안에 값 자체를 담고, <code>class</code> 같은 참조 타입은 객체를 힙에 따로 만든 다음 변수에는 그 위치만 담습니다.</p>
<p>그래서 변수를 다른 변수에 대입할 때 동작이 갈립니다. 값 타입은 담긴 데이터가 통째로 복사되어 둘이 서로 독립이 되고, 참조 타입은 위치만 복사되어 두 변수가 같은 객체 하나를 함께 가리킵니다. 그 결과 한쪽에서 객체를 고치면 참조 타입은 다른 쪽에도 보이고, 값 타입은 원본이 그대로입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>그럼 값 타입은 스택, 참조 타입은 힙에 있다고 봐도 되나요?</q>대체로 그렇지만 정확하지는 않습니다. 값 타입이라도 클래스의 필드로 들어가 있거나, 배열의 원소이거나, object로 박싱되면 힙에 저장됩니다. 그래서 스택이냐 힙이냐로 나누기보다, 변수에 값이 담기느냐 위치가 담기느냐로 구분하는 게 맞습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q2" aria-label="2번 자신 있음"></label>
<details>
<summary><span><span class="qtag">VAL-02</span><span class="qtext">struct와 class는 각각 언제 쓰나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>복사해서 따로 노는 게 자연스러운 작은 데이터는 struct, 여러 곳이 같은 하나를 봐야 하는 대상은 class를 씁니다.</strong></p>
<p>좌표나 색처럼 값 자체가 의미이고 복사한 쪽을 고쳐도 원본이 지켜져야 하는 것은 struct가 맞습니다. 반대로 적 캐릭터처럼 AI도 UI도 같은 한 마리를 봐야 하는 것은 class가 맞습니다. 한 곳에서 체력을 깎으면 모두가 깎인 값을 봐야 하니까요.</p>
<p>크기와 수명도 기준입니다. struct는 힙 할당이 없어서 가비지 컬렉션 부담이 없지만, 필드가 많아 덩치가 커지면 복사 비용이 오히려 커집니다. 그래서 작고 불변에 가까운 데이터에 struct를 쓰는 편이 안전합니다.</p>
</div>
<div class="trap">
<p class="lab">함정</p>
<p>필드를 바꿀 수 있는 struct는 복사본만 고치고 원본은 그대로인 실수가 잦습니다. 가능하면 <code>readonly struct</code>로 두는 게 좋습니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q3" aria-label="3번 자신 있음"></label>
<details>
<summary><span><span class="qtag">VAL-03</span><span class="qtext">struct와 class의 기본 Equals는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>class는 같은 객체인지 위치로 비교하고, struct는 필드 값이 모두 같은지 내용으로 비교합니다.</strong></p>
<p>모든 타입은 object에서 <code>Equals</code>를 물려받는데 원래 동작은 위치 비교입니다. 그런데 모든 struct의 부모인 <code>ValueType</code>이 <code>Equals</code>를 필드 값 비교로 다시 정의해 둬서, struct만 기본이 값 비교가 됩니다. struct는 복사가 잦아 같은 객체인지를 물으면 대개 아니오가 나오니, 쓸모 있는 비교가 내용 비교뿐이라 그렇습니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>== 도 똑같이 나뉘나요?</q>절반만 그렇습니다. class의 기본 <code>==</code>는 <code>Equals</code>처럼 위치 비교입니다. 그런데 struct에는 기본 <code>==</code>가 아예 없어서, 직접 정의하지 않으면 컴파일 에러가 납니다. <code>Equals</code>는 물려받는 메서드지만 <code>==</code>는 연산자라 타입마다 따로 정의해야 하기 때문입니다.</span></li>
<li><span><q>딕셔너리 키로 쓸 struct는 뭘 신경 써야 하나요?</q><code>Equals</code>와 <code>GetHashCode</code>를 직접 정의하는 게 좋습니다. 기본 struct의 <code>Equals</code>는 리플렉션으로 필드를 훑고 값을 object로 박싱해서 느립니다. <code>IEquatable</code>을 구현하면 박싱 없이 비교되고, 이때 <code>GetHashCode</code>도 같은 필드로 맞춰야 딕셔너리가 키를 제대로 찾습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q4" aria-label="4번 자신 있음"></label>
<details>
<summary><span><span class="qtag">VAL-04</span><span class="qtext">record는 무엇이고 왜 쓰나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>record는 내용이 같으면 같다고 보는 값 동등성을 컴파일러가 자동으로 만들어 주는 타입입니다.</strong></p>
<p>데이터를 묶는 타입을 class로 만들면 기본이 위치 비교라, 내용 비교를 하려면 <code>Equals</code>와 <code>GetHashCode</code>와 <code>==</code>와 <code>ToString</code>을 전부 직접 써야 합니다. record는 이걸 한 줄 선언으로 대신 생성해 주고, 일부만 바꾼 복사본을 만드는 <code>with</code> 식도 함께 줍니다.</p>
<p>주의할 점은 record가 여전히 참조 타입이라는 겁니다. record는 <code>record class</code>의 줄임말이라 힙에 객체가 만들어지고 변수에는 위치가 들어갑니다. 바뀌는 건 같다의 기준뿐입니다. 값 타입으로 쓰려면 <code>record struct</code>로 선언합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>with는 깊은 복사인가요?</q>아닙니다, 얕은 복사입니다. 프로퍼티 값을 대입하듯 복사하기 때문에, 프로퍼티가 리스트 같은 참조 타입이면 위치만 복사되어 원본과 같은 리스트를 공유합니다. 그래서 복사본에서 리스트에 항목을 추가하면 원본에도 그대로 보입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>메모리와 할당</h3><span class="cnt">4문항</span></div>
<p class="grp-note">할당이 어디서 일어나는지 보는 눈이 성능 질문의 바탕입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q5" aria-label="5번 자신 있음"></label>
<details>
<summary><span><span class="qtag">MEM-01</span><span class="qtext">박싱이 무엇이고 왜 성능 문제가 되나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>박싱은 값 타입을 object로 담을 때 그 값을 힙에 새로 할당해 감싸는 것입니다.</strong></p>
<p>int 같은 값 타입은 원래 변수 칸에 값이 들어 있는데, 이걸 object 자리에 넣으면 힙에 복사본을 만들고 그 위치를 가리키게 됩니다. 다시 꺼내 쓰려면 언박싱으로 되돌립니다.</p>
<p>문제는 이게 힙 할당이라 가비지 컬렉션 대상이 된다는 겁니다. 매 프레임 반복되는 핫 패스에서 박싱이 깔리면 임시 쓰레기가 쌓여 가비지 컬렉터가 자주 돌고, 그때마다 멈칫합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>자기도 모르게 박싱이 일어나는 자리는 어디인가요?</q>값 타입을 object 파라미터로 넘길 때가 대표적입니다. 값 타입을 담은 로그 호출이나, 옛날 방식의 컬렉션처럼 object로 받는 API가 그렇습니다. 열거형을 문자열 포맷에 넣거나 인터페이스로 캐스팅할 때도 생길 수 있어서, 핫 패스에서는 제네릭 버전을 써서 피합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q6" aria-label="6번 자신 있음"></label>
<details>
<summary><span><span class="qtag">MEM-02</span><span class="qtext">"값 타입은 스택, 참조 타입은 힙"이 왜 부정확한가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>값 타입도 힙에 저장되는 경우가 여럿 있기 때문입니다.</strong></p>
<p>값 타입이 힙에 사는 경우는 크게 셋입니다.</p>
<ul>
<li><strong>박싱됐을 때.</strong> object로 감싸지면 힙에 복사본이 생깁니다.</li>
<li><strong>클래스의 필드일 때.</strong> 값 타입이 참조 타입 객체 안에 들어 있으면 그 객체와 함께 힙에 저장됩니다.</li>
<li><strong>값 타입 배열의 원소일 때.</strong> 배열 자체가 힙 객체라 원소도 힙에 놓입니다.</li>
</ul>
<p>그래서 스택이냐 힙이냐는 타입만으로 정해지지 않고 어디에 담겼는지에 달렸습니다. 지역 변수로 둔 값 타입이 스택에 놓이는 건 맞지만, 그게 전부는 아닙니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q7" aria-label="7번 자신 있음"></label>
<details>
<summary><span><span class="qtag">MEM-03</span><span class="qtext">Span과 stackalloc은 무엇을 위한 것인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>둘 다 힙 할당과 복사를 줄여서 가비지 컬렉션 부담을 없애려는 도구입니다.</strong></p>
<p><code>Span</code>은 배열이나 문자열의 일부를 복사하지 않고 그대로 가리키는 뷰입니다. 문자열을 자를 때 <code>Substring</code>은 새 문자열을 할당하지만, <code>Slice</code>로 잘라내면 원본의 일부를 가리키기만 해서 할당이 없습니다.</p>
<p><code>stackalloc</code>은 임시 버퍼를 힙이 아니라 스택에 잡는 겁니다. 스택에 있으니 가비지 컬렉션 대상이 아니고 메서드가 끝나면 자동으로 사라집니다. 파싱이나 버퍼 처리처럼 잠깐 쓰고 버리는 데이터를 다루는 핫 패스에서 할당을 없앨 때 씁니다.</p>
</div>
<div class="trap">
<p class="lab">함정</p>
<p><code>Span</code>은 스택에 묶인 참조라 클래스 필드에 저장하거나 <code>await</code>에 걸쳐 쓸 수 없습니다. 잠깐 쓰고 버리는 범위 안에서만 유효합니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q8" aria-label="8번 자신 있음"></label>
<details>
<summary><span><span class="qtag">MEM-04</span><span class="qtext">문자열이 불변이라 생기는 문제와 StringBuilder는 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>문자열은 고칠 수 없어서 이어붙일 때마다 새 문자열을 통째로 만드는데, 반복되면 StringBuilder로 바꿔야 합니다.</strong></p>
<p>문자열은 불변이라 <code>Replace</code>나 <code>ToUpper</code>가 원본을 바꾸지 않고 새 문자열을 돌려줍니다. 그래서 반환값을 받지 않으면 아무 일도 안 일어난 것처럼 보입니다.</p>
<p>반복문에서 더하기로 문자열을 계속 이어붙이면, 매번 지금까지의 전체를 복사한 새 문자열을 만듭니다. 길이에 제곱으로 느려지고 쓰레기 객체도 많이 생깁니다. <code>StringBuilder</code>는 안에 늘어나는 버퍼를 두고 거기에 덧붙이기만 해서, 길이에 비례하는 선형 비용으로 끝납니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>문자열을 굳이 불변으로 만든 이유는 뭔가요?</q>여러 이점이 겹칩니다. 값이 안 바뀌니 여러 스레드가 잠금 없이 공유해도 안전하고, 딕셔너리 키로 쓸 때 해시값을 한 번 계산해 캐싱할 수 있습니다. 같은 문자열을 하나로 공유해 메모리를 아끼는 것도 불변이라 가능합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>GC와 자원 해제</h3><span class="cnt">3문항</span></div>
<p class="grp-note">가비지 컬렉터가 무엇을 챙기고 무엇을 못 챙기는지가 핵심입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q9" aria-label="9번 자신 있음"></label>
<details>
<summary><span><span class="qtag">GC-01</span><span class="qtext">세대별 GC는 어떻게 동작하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>객체를 나이로 세대를 나눠서, 대부분 금방 죽는 젊은 객체만 자주 훑는 방식입니다.</strong></p>
<p>전제가 되는 관찰이 있습니다. 실제 프로그램에서는 임시 변수나 중간 계산 결과처럼 만들어지자마자 죽는 객체가 압도적으로 많고, 반대로 오래 살아남은 객체는 앞으로도 계속 살 확률이 높습니다. 이걸 세대 가설이라고 합니다.</p>
<p>그래서 힙을 0세대, 1세대, 2세대로 나눕니다. 새로 만든 객체는 0세대에 들어가고, 수집에서 살아남으면 위 세대로 승격됩니다. 자주 도는 수집은 0세대만 보는데, 0세대는 최근 것만 있어 작고 가설대로 대부분 죽어 있어서 조금만 훑어도 많이 회수됩니다. 적은 일로 큰 성과를 내는 겁니다.</p>
<p>반대로 2세대는 잘 안 죽으니 자주 검사해 봐야 헛수고라 드물게만 전체 수집을 합니다. 힙 전체를 매번 훑는 대신 젊은 영역만 자주 훑어서 전체 비용을 크게 줄인 구조입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>GC 때문에 프레임이 튀는데 어떻게 줄이나요?</q>할당 자체를 줄이는 게 핵심입니다. 임시 객체가 계속 생기면 그만큼 수집이 자주 일어나고, 그때마다의 멈칫함이 쌓여 프레임이 끊깁니다. 그래서 자주 쓰는 객체는 미리 만들어 재사용하는 오브젝트 풀을 쓰고, 박싱이나 문자열 이어붙이기처럼 눈에 안 보이는 할당을 걷어냅니다. 값 타입이나 <code>Span</code>, <code>stackalloc</code>을 쓰는 것도 같은 목적입니다.</span></li>
<li><span><q>그 세대 모델은 어느 런타임에나 똑같이 적용되나요?</q>아닙니다. 방금 설명한 0세대, 1세대, 2세대 구조는 표준 닷넷인 CoreCLR 기준입니다. 런타임마다 가비지 컬렉터가 달라서, 예를 들어 유니티의 기본 런타임인 모노나 IL2CPP는 세대 구분이 없는 Boehm 컬렉터를 씁니다. 세대가 없으니 수집할 때마다 전체를 멈추고 훑고, 그 멈춤을 여러 프레임에 나눠 분산하는 증분 GC 옵션이 따로 있습니다. 할당을 줄이라는 결론은 같지만 이유가 다른 셈입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q10" aria-label="10번 자신 있음"></label>
<details>
<summary><span><span class="qtag">GC-02</span><span class="qtext">가비지 컬렉터가 있는데 왜 IDisposable과 using이 필요한가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>가비지 컬렉터는 관리되는 메모리만 회수하고, 파일 핸들이나 소켓 같은 비관리 자원은 챙기지 못하기 때문입니다.</strong></p>
<p>메모리는 가비지 컬렉터가 알아서 정리하지만, 운영체제가 쥐여준 파일 핸들이나 네트워크 소켓, 네이티브 메모리 같은 건 언제 어떻게 풀어야 하는지 모릅니다. 게다가 그 자원을 쥔 래퍼 객체는 관리 메모리로 보면 아주 작아서 메모리 압박을 만들지 않습니다. 그래서 수집이 한참 안 돌고, 그동안 귀한 자원은 계속 붙들려 있습니다. 수집 시점 자체도 정해져 있지 않아 언제 놓일지 예측할 수 없습니다.</p>
<p>그래서 <code>IDisposable</code>의 <code>Dispose</code>로 이런 자원을 직접 놓아 주고, <code>using</code>으로 감싸서 블록을 벗어나거나 예외가 나도 <code>Dispose</code>가 반드시 불리게 보장합니다. 타입이 <code>IDisposable</code>이라는 건 가비지 컬렉터에 맡기지 말고 직접 닫으라는 신호로 읽으면 됩니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>안 닫으면 구체적으로 뭐가 문제가 되나요?</q>두 가지입니다. 먼저 핸들이 열려 있는 동안 운영체제가 그 파일에 대한 다른 접근을 거부합니다. 윈도우에서 읽기로 열어 둔 파일은 남이 쓰거나 지울 수 없고, 자기 프로그램도 예외가 아니라 자기가 안 닫은 파일을 자기가 못 덮어쓰는 일이 흔합니다. 그다음 프로세스가 열 수 있는 핸들 수에는 상한이 있어서, 계속 새면 결국 고갈됩니다. 소켓은 포트가, 데이터베이스는 커넥션 풀이 같은 식으로 마릅니다.</span></li>
<li><span><q>using은 정확히 뭘 해 주나요?</q><code>try</code>와 <code>finally</code>를 깔아 줍니다. <code>Dispose</code>를 손으로 부르면 그 위에서 예외가 났을 때 건너뛰어 자원이 새는데, <code>using</code>은 해제를 <code>finally</code>에 넣은 것과 같아서 어느 경로로 빠져나가든 불립니다. C# 8부터는 중괄호 없이 선언형으로 써서 스코프가 끝날 때 해제되게 할 수도 있습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q11" aria-label="11번 자신 있음"></label>
<details>
<summary><span><span class="qtag">GC-03</span><span class="qtext">소멸자는 언제 불리고, 왜 함부로 쓰면 안 되나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>가비지 컬렉터가 객체를 수거하기 직전에 불리는 안전망이고, 시점을 못 정하는 데다 수거를 두 배로 늦추기 때문에 꼭 필요할 때만 씁니다.</strong></p>
<p>이름이 소멸자라서 C++ 것과 같다고 오해하기 쉬운데 성격이 다릅니다. C++ 소멸자는 스코프를 벗어나면 즉시 불려서 자원을 객체 수명에 묶는 패턴이 성립하지만, C#에서는 가비지 컬렉터가 언제 돌지 모르니 시점이 비결정적입니다. C#에서 그 역할을 하는 건 소멸자가 아니라 <code>using</code>과 <code>IDisposable</code>입니다.</p>
<p>비용이 큰 이유는 한 번의 수집으로 끝나지 않아서입니다. 1차 수집에서 죽은 걸 확인해도 소멸자가 있으면 회수하지 않고 큐에 넣어 두고, 전용 스레드가 소멸자를 실행한 다음 2차 수집에서야 실제로 메모리를 회수합니다. 최소 두 주기를 살아남으니 위 세대로 승격되고, 승격된 세대는 드물게 수집되니 더 오래 남습니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>그럼 Dispose와 소멸자를 같이 쓸 때는 어떻게 하나요?</q><code>Dispose</code>를 정상 경로로 두고 소멸자는 깜빡했을 때의 보험으로만 둡니다. 그리고 <code>Dispose</code> 안에서 <code>GC.SuppressFinalize</code>를 불러서 이미 정리했으니 소멸자 큐에 넣지 말라고 알려 줍니다. 그러면 정상 경로에서는 수집 한 번으로 회수되고, 깜빡했을 때만 두 번 비용을 치르면서 자원은 새지 않습니다.</span></li>
<li><span><q>어떤 클래스에 소멸자를 두면 안 되나요?</q>관리되는 객체만 담은 클래스입니다. 놓아 줄 비관리 자원이 없으면 소멸자가 할 일이 없는데, 두기만 해도 방금 말한 2단계 수거 비용이 붙어서 수거만 느려집니다. 비관리 자원을 직접 쥐고 있을 때만 두는 게 원칙입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>상속과 다형성</h3><span class="cnt">3문항</span></div>
<p class="grp-note">선언 타입과 런타임 타입 중 무엇을 기준으로 부르는지가 관건입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q12" aria-label="12번 자신 있음"></label>
<details>
<summary><span><span class="qtag">OOP-01</span><span class="qtext">virtual과 override, 그리고 new는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>override는 실제 객체 타입을 기준으로 부르고, new는 변수에 적힌 선언 타입을 기준으로 부릅니다.</strong></p>
<p><code>virtual</code>로 연 메서드를 자식이 <code>override</code>하면 가상 디스패치가 걸립니다. 부모 타입 변수에 담겨 있어도 실제로 가리키는 객체가 자식이면 자식 것이 불립니다. 반면 <code>new</code>는 부모 메서드를 가리기만 해서, 변수의 선언 타입이 부모면 부모 것이 불립니다.</p>
<p>그래서 부모 타입 변수에 자식 객체를 담았을 때 둘이 갈립니다. <code>override</code>는 자식 구현이 나오고, <code>new</code>는 변수 타입을 따라 부모 구현이 나옵니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>왜 이렇게 갈리게 설계했나요?</q><code>override</code>는 다형성을 위한 것이라 실제 타입의 동작을 부르는 게 목적이고, <code>new</code>는 이미 있는 부모 메서드와 이름만 같은 별개 메서드를 두는 것이라 선언 타입을 따릅니다. <code>new</code>는 의도치 않게 이름이 겹쳤을 때 경고를 끄는 용도에 가깝고, 다형성이 필요하면 <code>override</code>를 씁니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q13" aria-label="13번 자신 있음"></label>
<details>
<summary><span><span class="qtag">OOP-02</span><span class="qtext">추상 클래스와 인터페이스는 언제 각각 쓰나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>공통 상태와 구현을 나눠 가지는 한 종류의 무리는 추상 클래스, 서로 무관한 타입들이 같은 기능만 갖추게 하려면 인터페이스입니다.</strong></p>
<ul>
<li><strong>추상 클래스.</strong> 하나만 상속되고 필드와 생성자와 공통 구현을 담습니다. 무엇이다에 해당하는 한 종류의 무리에 씁니다.</li>
<li><strong>인터페이스.</strong> 여러 개 구현할 수 있고 기능 계약만 담습니다. 무엇을 할 수 있다에 해당합니다.</li>
</ul>
<p>예를 들어 모든 적이 공통 체력과 공통 피격 처리를 나눠 가진다면 추상 클래스가 맞습니다. 반대로 적이든 상자든 문이든 상관없이 상호작용할 수 있게만 만들고 싶으면, 그 기능만 약속하는 인터페이스를 각자 구현하게 합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>다중 상속 대신 인터페이스를 여러 개 구현하는 거군요?</q>맞습니다. 클래스 상속은 하나만 되지만 인터페이스는 여럿 구현할 수 있어서, 여러 능력을 조합하는 데 씁니다. 공통 구현까지 나누고 싶으면 추상 클래스를 하나 두고, 나머지 능력은 인터페이스로 붙이는 식으로 섞어 씁니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q14" aria-label="14번 자신 있음"></label>
<details>
<summary><span><span class="qtag">OOP-03</span><span class="qtext">상속에서 생성자는 어떤 순서로 실행되나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>부모 생성자가 먼저 끝난 다음 자식 생성자가 실행됩니다.</strong></p>
<p>자식 생성자는 본문이 돌기 전에 부모 생성자를 암묵적으로 먼저 부릅니다. 부모가 완전히 초기화된 상태에서 자식이 동작하도록 보장하는 겁니다. 부모의 필드가 준비되지 않았는데 자식이 그걸 쓰면 곤란하니까요. 그래서 A를 상속한 B를 만들면 A 생성자가 먼저, B 생성자가 나중에 실행됩니다.</p>
</div>
<div class="trap">
<p class="lab">함정</p>
<p>부모 생성자 안에서 가상 메서드를 부르면, 자식 생성자가 아직 안 돈 상태라 자식 필드가 초기화되기 전에 자식 오버라이드가 불릴 수 있습니다. 생성자에서 가상 호출은 피하는 게 안전합니다.</p>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>제네릭과 타입 도구</h3><span class="cnt">3문항</span></div>
<p class="grp-note">타입을 컴파일 타임에 어떻게 약속하고, 런타임에 어떻게 들여다보는지를 다룹니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q15" aria-label="15번 자신 있음"></label>
<details>
<summary><span><span class="qtag">GEN-01</span><span class="qtext">제네릭 where 제약은 왜 필요한가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>제약이 없으면 컴파일러가 타입 매개변수를 object 수준으로만 알아서, object에 있는 기능밖에 못 쓰기 때문입니다.</strong></p>
<p>예를 들어 두 값을 비교해 큰 걸 돌려주는 제네릭 메서드에서, 아무 제약이 없으면 <code>CompareTo</code>를 부를 수 없습니다. 컴파일러가 그 타입이 비교 가능한지 모르니까요. <code>where</code>로 <code>IComparable</code>을 구현한 타입만 받게 제약하면, 모든 타입 매개변수가 <code>CompareTo</code>를 가진다고 보장되어 호출할 수 있습니다.</p>
<p>그래서 제약은 이 타입이 이런 기능을 갖췄다고 컴파일러에게 약속하는 장치입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>제약으로 뭘 걸 수 있나요?</q>특정 인터페이스나 부모 클래스를 구현할 것, 참조 타입일 것이나 값 타입일 것, 매개변수 없는 생성자가 있을 것 같은 조건을 겁니다. 생성자 제약을 걸면 메서드 안에서 그 타입의 객체를 새로 만들 수 있습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q16" aria-label="16번 자신 있음"></label>
<details>
<summary><span><span class="qtag">GEN-02</span><span class="qtext">공변성과 반공변성은 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>제네릭 타입끼리 상속 관계를 이어받게 할지를 정하는 규칙으로, 꺼내기만 하면 공변, 받기만 하면 반공변입니다.</strong></p>
<p><code>IEnumerable</code>은 out으로 선언된 공변이라, 고양이 목록을 동물 목록 자리에 넣을 수 있습니다. 안에서 꺼내기만 하니 고양이를 동물로 보는 게 안전하기 때문입니다. 반대로 <code>Action</code>은 in으로 선언된 반공변이라, 동물을 받는 함수를 고양이를 받는 함수 자리에 넣을 수 있습니다. 고양이가 오면 동물로 받아 처리하니 문제가 없습니다.</p>
<p>넣기와 꺼내기를 다 하는 <code>List</code> 같은 가변 컬렉션은 어느 쪽도 안전하지 않아서 상속 관계를 이어받지 못합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>왜 꺼내기만 할 때만 공변이 안전한가요?</q>꺼낼 때는 더 구체적인 걸 더 일반적인 것으로 보는 거라 늘 성립합니다. 하지만 넣는 걸 허용하면, 동물 목록인 척하는 고양이 목록에 강아지를 넣는 상황이 생겨 깨집니다. 그래서 방향을 한쪽으로 제한할 때만 허용합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q17" aria-label="17번 자신 있음"></label>
<details>
<summary><span><span class="qtag">GEN-03</span><span class="qtext">리플렉션은 무엇이고 어디에 쓰나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>실행 중에 타입의 구조를 물어보고, 멤버 이름을 코드에 직접 박는 대신 멤버를 대표하는 객체를 통해 간접적으로 접근하는 기능입니다.</strong></p>
<p>보통 코드는 멤버 이름을 그대로 적어서 컴파일 타임에 확정합니다. 리플렉션은 그러지 않고 타입에게 어떤 필드와 메서드가 있는지 물어본 다음, 돌려받은 <code>Type</code>이나 <code>FieldInfo</code>, <code>MethodInfo</code> 같은 객체로 값을 읽거나 메서드를 부릅니다. 이름을 문자열로 찾거나 전체를 순회할 수도 있습니다.</p>
<p>그래서 쓰임새는 컴파일 타임에 타입을 모르는데 그 구조를 다뤄야 할 때로 모입니다. 어떤 객체든 필드를 훑어 저장하는 직렬화, 스크립트 필드를 훑어 편집 화면을 만들어 주는 유니티 인스펙터, 특정 어트리뷰트가 붙은 메서드만 찾아 실행하는 테스트나 의존성 주입 프레임워크가 대표적입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>어트리뷰트와는 어떤 관계인가요?</q>짝입니다. 어트리뷰트는 클래스나 필드에 붙이는 선언적인 표시일 뿐이고 그 자체로는 아무 동작도 하지 않습니다. 리플렉션이 그 표시를 읽어서 동작을 바꾸는 겁니다. <code>SerializeField</code>를 붙이면 유니티가 리플렉션으로 그걸 읽어 인스펙터에 노출하는 식이라, 표시하는 쪽과 읽는 쪽이 나뉘어 있다고 보면 됩니다.</span></li>
<li><span><q>단점은 없나요?</q>두 가지가 있습니다. 먼저 실행 중에 조회하는 방식이라 직접 호출보다 느립니다. 그다음 이름을 문자열로 접근하니 오타가 나거나 나중에 이름을 바꿔도 컴파일 에러가 안 나고 실행할 때 터집니다. 컴파일 타임 검사를 우회하는 셈입니다. 그래서 자주 도는 구간에서는 조회 결과를 캐싱하거나, 컴파일 타임에 코드를 대신 만들어 주는 소스 제너레이터로 대체합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>델리게이트와 지연 실행</h3><span class="cnt">4문항</span></div>
<p class="grp-note">호출과 실행이 분리되는 지점, 그리고 무엇을 캡처하는지가 자주 나옵니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q18" aria-label="18번 자신 있음"></label>
<details>
<summary><span><span class="qtag">DEL-01</span><span class="qtext">yield return과 지연 실행은 어떻게 동작하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>yield가 있는 메서드는 호출해도 본문이 바로 돌지 않고, 결과를 하나씩 꺼낼 때마다 다음 yield까지만 실행됩니다.</strong></p>
<p>이터레이터 메서드를 부르면 실제로는 이터레이터 객체만 만들어지고 본문은 멈춰 있습니다. <code>foreach</code>가 값을 하나 요청할 때마다 다음 <code>yield return</code>을 만날 때까지 실행하고 거기서 다시 멈춥니다. 컴파일러가 메서드를 상태를 기억하는 상태 기계로 바꾸기 때문에 이런 멈췄다 이어가기가 됩니다.</p>
<p>그래서 열거를 시작하지 않으면 본문은 영영 안 돕니다. 호출과 실행이 분리되어 있습니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>이게 왜 쓸모가 있나요?</q>필요한 만큼만 계산하고 멈출 수 있어서입니다. 무한 수열이나 아주 큰 데이터도 전부 미리 만들지 않고, 앞에서 몇 개만 꺼내 쓰고 멈추면 그만큼만 계산됩니다. 메모리도 아끼고 불필요한 계산도 피합니다.</span></li>
<li><span><q>실행을 일으키는 건 foreach뿐인가요?</q>아닙니다. 값을 요청하는 건 모두 방아쇠가 됩니다. <code>ToList</code>나 <code>Count</code>는 전부 요청하니 끝까지 돌고, <code>First</code>나 <code>Take(2)</code>는 필요한 만큼만 돌리고 멈춥니다. 열거자를 직접 얻어서 <code>MoveNext</code>를 손으로 눌러도 똑같이 실행됩니다. <code>foreach</code>는 사실 그 <code>MoveNext</code> 반복을 감싼 문법일 뿐입니다.</span></li>
<li><span><q>유니티 코루틴도 이것과 같은 건가요?</q>같은 메커니즘입니다. 코루틴 메서드의 반환형이 <code>IEnumerator</code>인 것도 그래서고, 함수가 중간에 멈췄다 이어지는 것도 방금 말한 상태 기계 덕분입니다. 차이는 두 가지입니다. 먼저 <code>MoveNext</code>를 눌러 주는 주체가 <code>foreach</code>가 아니라 유니티 엔진의 프레임 루프라는 점이고, 그다음 <code>yield</code>가 내놓는 값이 꺼내 쓸 데이터가 아니라 언제 재개할지 알려 주는 지시라는 점입니다. <code>WaitForSeconds</code>가 그 지시에 해당합니다.</span></li>
</ul>
</div>
<div class="trap">
<p class="lab">함정</p>
<p>이터레이터 메서드 안에 인자 검증을 넣으면 호출한 자리에서 안 터집니다. 본문이 지연되니 예외도 실제로 열거하는 시점까지 미뤄져서, 원인과 멀리 떨어진 곳에서 터집니다. 그래서 검증은 즉시 실행되는 바깥 메서드로 분리하고 안쪽만 이터레이터로 두는 게 관례입니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q19" aria-label="19번 자신 있음"></label>
<details>
<summary><span><span class="qtag">DEL-02</span><span class="qtext">LINQ 쿼리는 언제 실행되나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>쿼리를 정의하는 시점이 아니라, 결과를 실제로 열거하는 시점에 실행됩니다.</strong></p>
<p><code>Where</code>나 <code>Select</code> 같은 건 정의만 해 두면 아무 계산도 하지 않습니다. <code>foreach</code>로 돌리거나 <code>ToList</code>나 <code>Count</code>로 결과를 실제로 꺼낼 때 비로소 실행됩니다. 안이 yield 기반이라 그렇습니다.</p>
<p>그래서 쿼리를 만든 뒤 원본 컬렉션이 바뀌면 결과도 따라 바뀝니다. 쿼리 정의가 데이터를 복사해 놓는 게 아니라 계산 방법만 담고 있기 때문입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>같은 쿼리를 두 번 쓰면 어떻게 되나요?</q>두 번 다 계산됩니다. 열거할 때마다 처음부터 다시 도는 거라, 무거운 쿼리를 여러 번 쓰거나 결과를 고정하고 싶으면 <code>ToList</code>로 한 번 실체화해 두고 그걸 재사용합니다. 쿼리 변수는 결과가 아니라 계산 방법을 담은 계획이라고 보면 이해하기 쉽습니다.</span></li>
<li><span><q>지연 실행이 함정만 있는 건 아닐 텐데, 이점은 뭔가요?</q>필요한 만큼만 계산하고 중간 결과를 쌓아 두지 않는 겁니다. 백만 개에서 <code>Where</code>와 <code>Select</code>를 거쳐 <code>Take(3)</code>을 하면, 원소 하나가 파이프라인 전체를 통과하는 식으로 흘러서 세 개가 채워지는 순간 멈춥니다. 백만 개를 다 훑지 않습니다. 즉시 실행이었다면 <code>Where</code>가 걸러 낸 리스트를 만들고 <code>Select</code>가 또 만들면서 중간 리스트가 겹겹이 생겼을 겁니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q20" aria-label="20번 자신 있음"></label>
<details>
<summary><span><span class="qtag">DEL-03</span><span class="qtext">delegate와 event는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>event는 바깥에서 구독과 해지만 되고 호출과 통째 교체는 막은, 델리게이트를 안전하게 감싼 형태입니다.</strong></p>
<p>public 델리게이트를 그대로 열어 두면 바깥에서 직접 부를 수도 있고, 대입으로 남이 등록해 둔 구독 목록을 통째로 지워 버릴 수도 있어서 위험합니다. <code>event</code>로 선언하면 바깥에서는 더하기 등록과 빼기 해지만 되고, 실제 호출은 선언한 클래스 안에서만 할 수 있습니다.</p>
<p>그래서 이벤트를 발생시키는 주체는 자기 자신이고, 남들은 반응만 등록한다는 관계가 강제됩니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>여러 함수를 묶은 델리게이트를 부르면 반환값은 어떻게 되나요?</q>등록된 함수가 모두 실행되지만 반환값은 마지막 것만 남고 앞의 것들은 버려집니다. 그래서 값을 여러 개 돌려받아야 하는 상황이면 반환값 있는 멀티캐스트는 적절하지 않고, 보통 이벤트는 반환값 없는 형태로 둡니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q21" aria-label="21번 자신 있음"></label>
<details>
<summary><span><span class="qtag">DEL-04</span><span class="qtext">for 루프 안에서 만든 람다가 왜 예상과 다른 값을 출력하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>람다가 반복 변수의 값을 복사해 가는 게 아니라 그 변수 자체를 공유해서 캡처하기 때문입니다.</strong></p>
<p>for 문의 변수 하나를 여러 람다가 함께 캡처하면, 나중에 람다가 실행될 때 다들 그 변수의 마지막 상태를 봅니다. 0부터 2까지 도는 루프라면 끝날 때 변수가 3이 되어 있으니, 람다들이 모두 3을 출력합니다.</p>
<p>고치려면 반복마다 새 지역 변수에 값을 복사하고 그 지역 변수를 캡처하게 합니다. 그러면 각 람다가 자기만의 변수를 잡아서 0, 1, 2가 제대로 나옵니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>for 문이 끝나면 그 변수는 사라질 텐데, 람다는 어떻게 그걸 읽나요?</q>캡처된 변수는 보통의 지역 변수처럼 안 사라집니다. 컴파일러가 그 변수를 스택이 아니라 힙에 있는 숨은 객체 안으로 옮기고, 람다가 그 객체를 참조하게 만들기 때문입니다. 그래서 람다가 살아 있는 한 변수도 같이 살아 있습니다. 캡처는 값을 복사하는 게 아니라 변수의 수명을 람다에 맞춰 연장하는 동작이라고 보면 정확합니다.</span></li>
<li><span><q>그럼 그 캡처된 변수는 언제 해제되나요?</q>그 숨은 객체를 참조하는 람다가 전부 도달 불가능해졌을 때 가비지 컬렉터가 회수합니다. 일반 힙 객체와 규칙이 같습니다. 그래서 오래 사는 이벤트에 람다를 등록해 두면 람다가 계속 참조되어 캡처한 객체까지 같이 오래 남습니다. 구독을 해지해서 그 참조를 끊어 줘야 회수됩니다.</span></li>
<li><span><q>foreach에서도 같은 문제가 생기나요?</q>지금은 안 생깁니다. C# 5부터 <code>foreach</code>의 반복 변수는 반복마다 새로 만들어지도록 바뀌어서 각 람다가 서로 다른 변수를 잡습니다. 다만 <code>for</code> 문의 변수는 여전히 루프 전체에 하나라서 이 함정이 그대로 남아 있습니다.</span></li>
</ul>
</div>
<div class="trap">
<p class="lab">함정</p>
<p>코루틴이나 이벤트 핸들러를 루프 안에서 등록할 때 이 실수가 특히 잦습니다. 등록은 루프 중에 하지만 실행은 나중이라, 그때는 변수가 이미 끝값이 되어 있습니다.</p>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>오류 처리와 null</h3><span class="cnt">3문항</span></div>
<p class="grp-note">실패를 어떻게 알리느냐의 축입니다. 예외로 던질지, null로 돌려줄지, 컴파일러 경고로 미리 막을지를 구분해 설명하세요.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q22" aria-label="22번 자신 있음"></label>
<details>
<summary><span><span class="qtag">ERR-01</span><span class="qtext">try, catch, finally는 어떻게 동작하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>try에서 예외가 나면 남은 코드를 건너뛰고 맞는 catch로 가며, finally는 예외가 나든 안 나든 항상 실행됩니다.</strong></p>
<p><code>try</code> 도중에 예외가 터지면 그 지점부터 아래는 실행되지 않고, 타입이 맞는 <code>catch</code>로 점프합니다. 그 <code>catch</code>가 현재 메서드에 없으면 호출 스택을 거슬러 올라가면서 잡아 줄 곳을 찾고, 지나치는 메서드들의 남은 코드는 전부 건너뜁니다. 끝까지 아무도 안 잡으면 프로그램이 종료됩니다. 반환값으로 오류를 알리면 매 단계에서 직접 검사하고 전달해야 하는데, 예외는 중간을 건너뛰고 처리할 수 있는 곳까지 한 번에 간다는 게 차이입니다.</p>
<p><code>finally</code>는 정상 흐름이든 예외 흐름이든, 심지어 아무도 안 잡아서 위로 전파되는 중이든 반드시 실행됩니다. 어느 경로로 빠져나가도 지나가기 때문에 파일이나 잠금 같은 자원을 놓는 자리로 씁니다. 정상 경로에만 해제 코드를 두면 예외가 났을 때 그 줄에 도달하지 못해 자원이 샙니다. <code>using</code>이 사실 이 <code>try</code>와 <code>finally</code>의 축약입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>catch를 쓸 때 주의할 점은요?</q>구체적인 예외 타입부터 잡아야 합니다. <code>catch</code>는 위에서부터 처음 맞는 것이 잡는데, 넓은 <code>Exception</code>을 위에 두면 아래의 구체적인 타입은 영영 도달하지 못합니다. 그리고 빈 catch로 예외를 삼켜서 조용히 넘기면, 문제가 숨어 나중에 더 찾기 어려워집니다. 처리하든 로그를 남기든 다시 던지든 해야 합니다.</span></li>
<li><span><q>그럼 오류는 항상 예외로 알리는 게 좋은가요?</q>아닙니다. 예외는 스택을 거슬러 올라가는 비용이 있어서, 실패가 흔하고 예상된 범위면 반환값으로 알리는 게 맞습니다. 사용자 입력이 숫자가 아닌 건 정상 범위라 <code>TryParse</code>처럼 성공 여부를 <code>bool</code>로 받고, 반드시 숫자여야 하는 내부 설정값이면 <code>Parse</code>로 바로 터뜨려서 버그를 드러냅니다. 판단 기준은 이 실패가 예외적인 상황인지 예상된 정상 범위인지입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q23" aria-label="23번 자신 있음"></label>
<details>
<summary><span><span class="qtag">ERR-02</span><span class="qtext">as와 괄호 캐스트는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>as는 실패하면 null을 돌려주고, 괄호 캐스트는 실패하면 예외를 던집니다.</strong></p>
<p><code>as</code>는 변환에 실패해도 예외 없이 null을 주기 때문에, 뒤에서 null인지 확인해 분기할 때 씁니다. 대신 참조 타입과 nullable에만 됩니다. 괄호 캐스트는 실패하면 <code>InvalidCastException</code>을 던지니, 실패가 곧 버그라서 바로 터뜨리고 싶을 때 씁니다.</p>
<p>그래서 실패할 수도 있는 형 변환이면 <code>as</code>로 받아 null 검사를 하고, 반드시 그 타입이어야 하는 자리면 괄호 캐스트로 둡니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>요즘은 패턴 매칭으로 더 짧게 쓴다던데요?</q>맞습니다. <code>is</code> 패턴을 쓰면 형 검사와 변수 선언을 한 번에 합니다. 객체가 특정 타입이면 그 타입 변수로 바로 받아서 쓰는 식이라, <code>as</code>로 받고 null을 검사하던 두 단계가 한 줄로 정리됩니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q24" aria-label="24번 자신 있음"></label>
<details>
<summary><span><span class="qtag">ERR-03</span><span class="qtext">nullable 참조 타입 기능은 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>참조 타입에도 null을 허용할지 여부를 타입에 표시해, 컴파일러가 null 위험을 미리 경고하게 하는 기능입니다.</strong></p>
<p>물음표 없는 참조 타입은 null이 아니어야 한다는 의도로 보고, null을 넣거나 초기화를 빠뜨리면 경고합니다. 물음표를 붙인 타입은 null일 수 있다고 보고, 값을 꺼내 쓰기 전에 null 검사를 요구합니다. NullReferenceException을 실행 중이 아니라 작성 단계에서 줄이려는 장치입니다.</p>
<p>다만 런타임에 강제되는 게 아니라 컴파일 타임 경고라, 개발자가 책임지겠다고 하면 느낌표로 경고를 끌 수 있습니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>널 병합과 널 조건부 연산자는 뭔가요?</q>둘 다 null을 짧게 다루는 연산자입니다. 널 병합은 왼쪽이 null이면 오른쪽 기본값을 주고, 널 조건부는 왼쪽이 null이면 더 파고들지 않고 그냥 null을 돌려줍니다. 긴 null 검사를 한 줄로 줄여 줍니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>값의 함정</h3><span class="cnt">3문항</span></div>
<p class="grp-note">사소해 보이지만 실수가 잦아 코드 리뷰에서 자주 걸리는 지점입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q25" aria-label="25번 자신 있음"></label>
<details>
<summary><span><span class="qtag">TRAP-01</span><span class="qtext">정수끼리 나눗셈에서 자주 하는 실수는 뭔가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>정수끼리 나누면 소수점이 버려진 정수가 나오는데, 이게 실수로 이어집니다.</strong></p>
<p>예를 들어 1을 3으로 나누고 100을 곱하면 33이 아니라 0이 나옵니다. 앞의 1 나누기 3이 정수끼리라 먼저 0이 되고, 거기에 100을 곱하니 0입니다. 결과를 실수형 변수에 담아도 이미 정수로 계산된 뒤라 소용이 없습니다.</p>
<p>고치려면 나누기 전에 한쪽을 실수로 캐스팅해서, 실수 나눗셈이 되게 해야 합니다.</p>
</div>
<div class="trap">
<p class="lab">함정</p>
<p>결과 변수의 타입만 float으로 바꾸면 고쳐질 거라 착각하기 쉽습니다. 문제는 대입 시점이 아니라 나눗셈 시점이라, 피연산자 쪽을 실수로 만들어야 합니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q26" aria-label="26번 자신 있음"></label>
<details>
<summary><span><span class="qtag">TRAP-02</span><span class="qtext">실수 비교에 등호를 쓰면 왜 안 되나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>부동소수점은 값을 근사해서 저장하기 때문에, 수학적으로 같은 두 값이 비트로는 다를 수 있습니다.</strong></p>
<p>컴퓨터는 실수를 부호와 가수와 지수로 나눠서 2진수로 저장합니다. 지수에 따라 소수점 위치가 떠다녀서 부동소수점이라고 부릅니다. 문제는 10진수 0.1을 2진 소수로 적으면 무한히 반복된다는 점입니다. 3분의 1을 10진수로 적으면 0.333으로 안 떨어지는 것과 같은 이유인데, 2진법에서는 분모가 2의 거듭제곱인 0.5나 0.25 정도만 딱 떨어집니다.</p>
<p>가수 비트 수는 유한하니 그 무한소수를 잘라서 근사값으로 저장합니다. 그래서 0.1 더하기 0.2가 0.3이 아니라 0.30000000000000004처럼 나옵니다. 근사값끼리 더하면서 오차가 드러난 겁니다. 비교할 때는 두 값의 차이의 절댓값이 아주 작은 허용 오차보다 작은지를 보는 식으로 합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>float과 double은 어떻게 다른가요?</q>가수에 쓰는 비트 수가 다릅니다. <code>float</code>은 4바이트에 가수가 23비트라 유효숫자가 약 7자리고, <code>double</code>은 8바이트에 가수가 52비트라 약 15에서 16자리입니다. <code>double</code>이 더 정밀한 건 가수 비트가 많아서입니다. 유니티 좌표가 <code>float</code>인 건 정밀도보다 메모리와 속도가 중요하고 게임에는 7자리면 충분하기 때문입니다.</span></li>
<li><span><q>돈 계산에도 double을 쓰면 되나요?</q>쓰면 안 됩니다. 금액은 10진수로 정확해야 하는데 <code>double</code>은 2진 근사라 0.1 같은 값을 정확히 못 담습니다. 그럴 때는 <code>decimal</code>을 씁니다. <code>decimal</code>은 2진 부동소수점이 아니라 10진수 기반이라 10진 소수를 오차 없이 담습니다. 대신 16바이트로 크고 느리며 표현 범위가 좁습니다. 정밀도보다 정확성이 중요할 때 쓰는 타입입니다.</span></li>
</ul>
</div>
<div class="trap">
<p class="lab">함정</p>
<p>크기 차가 아주 큰 두 수를 더하면 작은 쪽이 가수 범위 밖으로 밀려서 아예 반영되지 않기도 합니다. 반복해서 더하는 누적 계산에서 오차가 쌓이는 원인이 이겁니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q27" aria-label="27번 자신 있음"></label>
<details>
<summary><span><span class="qtag">TRAP-03</span><span class="qtext">const와 readonly는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>const는 컴파일 시점에 값이 박히는 상수고, readonly는 실행 시점에 생성자까지에서 한 번 정해지는 값입니다.</strong></p>
<ul>
<li><strong>const.</strong> 컴파일 시점에 값이 정해져야 해서 리터럴 같은 불변값만 담습니다.</li>
<li><strong>readonly.</strong> 실행 시점 생성자까지에서 정해지고, 객체마다 다른 값이나 참조 타입도 담습니다.</li>
</ul>
<p>그래서 미리 정해진 상수에는 const를, 생성자에서 계산하거나 인스턴스마다 달라지는 값에는 readonly를 씁니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>const에 숨은 함정이 있다던데요?</q>const는 값이 쓰는 쪽 코드에 그대로 박혀 들어갑니다. 그래서 라이브러리의 const 값을 바꿔 다시 배포해도, 그걸 참조하는 쪽이 다시 컴파일하지 않으면 옛날 값을 계속 씁니다. 공개 API로 나가는 상수 중 나중에 바뀔 수 있는 건 readonly로 두는 편이 안전합니다.</span></li>
<li><span><q>readonly면 완전히 못 바꾸나요?</q>참조 타입이면 재할당만 막고 객체 내부는 여전히 바꿀 수 있습니다. readonly로 둔 리스트라도 그 리스트에 항목을 추가하는 건 됩니다. 다른 리스트로 갈아 끼우는 것만 막힙니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>비동기와 동시성</h3><span class="cnt">3문항</span></div>
<p class="grp-note">비동기와 병렬을 구분하고, 공유 상태를 어떻게 지키는지가 핵심입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q28" aria-label="28번 자신 있음"></label>
<details>
<summary><span><span class="qtag">ASYNC-01</span><span class="qtext">async와 await는 어떻게 동작하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>await를 만나면 그 자리에서 제어를 호출자에게 돌려주고, 기다리던 작업이 끝나면 그 지점부터 이어서 실행합니다.</strong></p>
<p>오래 걸리는 작업을 기다리는 동안 스레드를 붙잡고 있지 않아서, UI라면 화면이 안 멈추고 서버라면 그 스레드로 다른 요청을 처리할 수 있습니다. 컴파일러가 메서드를 상태 기계로 바꿔서, 멈췄다가 이어가는 걸 가능하게 합니다. yield와 같은 원리입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>비동기면 병렬로 도는 건가요?</q>아닙니다, 다른 개념입니다. 비동기는 기다리는 동안 스레드를 놓아 주는 것이지, 여러 일을 동시에 계산하는 병렬이 아닙니다. 단일 스레드에서도 비동기는 성립합니다. 기다림이 많은 입출력 작업에는 비동기가, 계산이 많은 작업에는 병렬이 어울립니다.</span></li>
<li><span><q>결과를 기다린다고 Result나 Wait를 쓰면 왜 위험한가요?</q>상황에 따라 교착이 생깁니다. 비동기 작업이 원래 실행되던 자리로 돌아와 이어가려는데, 그 자리를 동기 대기가 붙잡고 안 놓아 주면 서로 기다리며 멈춥니다. 그래서 비동기는 위에서부터 끝까지 await로 잇는 게 안전합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q29" aria-label="29번 자신 있음"></label>
<details>
<summary><span><span class="qtag">ASYNC-02</span><span class="qtext">lock은 무엇이고 무엇을 잠가야 하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>lock은 한 번에 한 스레드만 임계 구역에 들이는 장치로, 바깥에 드러나지 않은 전용 객체로 잠가야 합니다.</strong></p>
<p>왜 꼬이는지부터 보면, 잔고에 금액을 더하는 한 줄도 실제로는 세 단계입니다. 먼저 현재 값을 읽고, 그다음 더하고, 마지막에 결과를 씁니다. 두 스레드가 이걸 겹치면 둘 다 갱신 전 값을 읽어서 각자 같은 결과를 계산하고, 나중에 쓴 쪽이 먼저 쓴 쪽을 덮어써서 갱신 하나가 통째로 사라집니다. 이걸 경쟁 상태라고 합니다.</p>
<p><code>lock</code>으로 그 구간을 감싸면 한 스레드가 읽고 쓰기를 끝낼 때까지 다른 스레드가 기다리므로, 뒤 스레드는 앞 스레드가 쓴 값을 제대로 보고 이어갑니다. 잠글 객체는 바깥에서 접근할 수 없는 전용 인스턴스를 씁니다. this나 타입 객체로 잠그면 바깥 코드도 같은 걸로 잠글 수 있어 예상 못 한 교착이 생기기 때문입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>잠금 말고 다른 방법도 있나요?</q>동시 접근이 잦으면 잠금 자체가 병목이 됩니다. 그럴 때는 스레드 안전하게 만들어진 동시성 컬렉션을 쓰거나, 단순한 증감이면 <code>Interlocked</code> 같은 원자적 연산으로 잠금 없이 처리하는 편이 경합을 줄여 유리합니다.</span></li>
<li><span><q>그럼 셋 중에 뭘 기준으로 고르나요?</q>보호해야 할 범위가 기준입니다. 여러 줄을 하나의 단위로 묶어 보호해야 하면 <code>lock</code>밖에 없습니다. 여러 스레드가 공유하는 컬렉션이면 동시성 컬렉션이 내부에서 잘게 쪼갠 잠금을 써서 경합이 덜합니다. 단순한 숫자 증감이나 값 교체 하나면 <code>Interlocked</code>가 잠금 없이 CPU 명령 하나로 끝내서 가장 빠릅니다. 아래로 갈수록 가볍지만 쓸 수 있는 범위가 좁아지는 관계입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q30" aria-label="30번 자신 있음"></label>
<details>
<summary><span><span class="qtag">ASYNC-03</span><span class="qtext">async void는 왜 피해야 하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>돌려주는 Task가 없어서 예외를 담을 곳도, 완료를 기다릴 방법도 없기 때문입니다.</strong></p>
<p><code>async Task</code>로 선언하면 작업 도중 난 예외가 그 <code>Task</code>에 담깁니다. 그래서 호출한 쪽이 <code>await</code>할 때 예외가 다시 올라와 잡을 수 있습니다. 반면 <code>async void</code>는 돌려주는 <code>Task</code>가 없으니 예외를 실어 보낼 데가 없고, 그대로 밖으로 터져 나가 잡히지 않고 프로세스가 죽을 수 있습니다.</p>
<p>완료 시점도 알 수 없습니다. 반환값이 없으니 호출한 쪽이 <code>await</code>로 기다릴 수 없고, 끝났는지 모른 채 다음으로 넘어갑니다. 그래서 기본은 <code>async Task</code>로 두고, 예외적으로 버튼 클릭 같은 이벤트 핸들러에서만 <code>async void</code>를 씁니다. 이벤트 핸들러는 시그니처가 <code>void</code>로 정해져 있어 어쩔 수 없는 경우입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>그럼 이벤트 핸들러에서는 예외를 어떻게 다루나요?</q>핸들러 안에서 직접 잡아야 합니다. 본문 전체를 <code>try</code>와 <code>catch</code>로 감싸서 예외가 밖으로 새어 나가지 않게 하고, 실제 작업은 <code>async Task</code> 메서드로 빼서 핸들러는 그걸 <code>await</code>하고 예외만 처리하는 얇은 껍데기로 두는 방식이 흔합니다.</span></li>
<li><span><q>반환값이 없는 비동기 메서드는 어떻게 선언하나요?</q>결과가 없어도 <code>async Task</code>로 선언합니다. <code>Task</code>는 결과를 담는 그릇이기도 하지만 완료 여부와 예외를 실어 나르는 핸들이기도 해서, 돌려줄 값이 없어도 <code>Task</code>를 반환해야 호출한 쪽이 기다리고 예외를 받을 수 있습니다. 값이 있으면 <code>Task&lt;T&gt;</code>를 씁니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>상황형 문제 해결</h3><span class="cnt">4문항</span></div>
<p class="grp-note">정답보다 접근 순서를 봅니다. 한 증상에 여러 개념이 얽혀 있으니, 측정으로 원인을 좁힌 뒤 설명하세요.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q31" aria-label="31번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-01</span><span class="qtext">게임을 오래 켜 두면 점점 느려지고, 가끔 프레임이 툭툭 멈칫합니다. 어디부터 보나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>먼저 프로파일러로 그 멈칫이 가비지 컬렉션 때문인지부터 확인합니다.</strong></p>
<p>멈칫이 수집 타이밍과 겹치면 매 프레임 임시 할당이 많다는 신호입니다. 원인을 좁힌 다음 숨은 할당을 걷어냅니다.</p>
<ul>
<li><strong>박싱.</strong> 값 타입을 object로 넘기는 로그나 옛 컬렉션 API가 있으면 임시 객체가 깔립니다.</li>
<li><strong>문자열 이어붙이기.</strong> 매 프레임 문자열을 더하기로 만들면 쓰레기가 쏟아집니다. StringBuilder나 미리 만든 문자열로 바꿉니다.</li>
<li><strong>임시 객체 반복 생성.</strong> 자주 만들고 버리는 객체는 오브젝트 풀로 재사용합니다.</li>
</ul>
<p>점점 느려지기만 하고 안 돌아온다면 메모리 누수도 의심합니다. 이벤트 구독을 해지하지 않아 객체가 계속 살아 있는 경우가 흔합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>호출 빈도가 지금의 100배가 되면 뭘 더 신경 쓰나요?</q>프레임당 할당을 아예 0에 가깝게 만드는 게 중요해집니다. Span이나 stackalloc으로 힙 할당 없이 버퍼를 다루고, 구조를 값 타입으로 바꿔 배열에 연속으로 담아 캐시 지역성까지 챙깁니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q32" aria-label="32번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-02</span><span class="qtext">리스트를 foreach로 돌면서 죽은 적을 Remove했더니 예외가 납니다. 왜 그런가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>foreach로 도는 중에 컬렉션의 크기를 바꿔서입니다.</strong></p>
<p>감지하는 방법은 버전 번호입니다. 컬렉션 안에는 구조를 바꿀 때마다 하나씩 오르는 번호가 있고, 열거자는 순회를 시작할 때 그 번호를 기억해 뒀다가 한 칸 나아갈 때마다 지금 번호와 같은지 확인합니다. 중간에 <code>Add</code>나 <code>Remove</code>가 일어나면 번호가 달라지니 바로 예외를 던집니다.</p>
<p>굳이 예외를 던지는 건 심술이 아니라 보호 장치입니다. 순회 중에 원소를 지우면 뒤 원소들이 앞으로 당겨져서 하나를 통째로 건너뛰게 되는데, 그렇게 조용히 잘못 도는 논리 버그는 찾기가 훨씬 어렵습니다. 그래서 조용히 틀리느니 바로 멈추는 쪽을 택한 겁니다. 고치는 방법은 도는 대상과 바꾸는 대상을 떼어 놓는 것으로 모입니다.</p>
<ul>
<li><strong>역순 for 문.</strong> 뒤에서 앞으로 인덱스로 돌면 지워도 남은 인덱스가 안 밀려서 안전합니다.</li>
<li><strong>복사본 순회.</strong> 원본을 복사해 그걸 돌면서 원본을 지웁니다.</li>
<li><strong>조건 삭제.</strong> RemoveAll에 조건을 주면 한 번에 안전하게 지웁니다.</li>
</ul>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>왜 역순 for는 괜찮은가요?</q>두 가지 이유가 겹칩니다. 먼저 <code>foreach</code>가 아니라 인덱스로 접근하는 방식이라 열거자를 안 쓰고, 따라서 방금 말한 버전 검사 자체가 일어나지 않습니다. 그다음 뒤에서부터 지우면 이미 지나온 뒤쪽만 당겨지고 아직 안 본 앞쪽 인덱스는 그대로라서 건너뛰는 원소가 없습니다.</span></li>
<li><span><q>리스트가 아니라 딕셔너리나 해시셋이면 어떻게 하나요?</q>인덱스가 없으니 역순 <code>for</code>를 못 씁니다. 딕셔너리는 키 목록을 <code>ToList</code>로 복사해 두고 그걸 돌면서 원본을 지우는 게 일반적입니다. 해시셋은 <code>RemoveWhere</code>라는 조건 삭제 메서드가 따로 있어서 그걸 쓰면 되고, 큐나 배열처럼 중간 제거가 없는 구조는 조건으로 거른 결과로 새로 만들어 갈아 끼웁니다.</span></li>
<li><span><q>세 방법 중에 뭘 고르나요?</q>목적이 조건에 맞는 것만 지우는 거라면 <code>RemoveAll</code>이 가장 명확하고, 한 번만 훑어서 효율도 좋습니다. 삭제뿐 아니라 인덱스를 보며 값을 고치는 작업이 섞이면 역순 <code>for</code>가 맞고 복사본도 안 만듭니다. 복사본 순회는 어떤 컬렉션에나 통하는 대신 사본만큼 메모리를 더 쓰니, 앞의 둘이 안 될 때 씁니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q33" aria-label="33번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-03</span><span class="qtext">이벤트에 등록해 둔 오브젝트를 파괴했는데, 이벤트가 발생하니 파괴된 오브젝트가 불려서 에러가 납니다.</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>구독을 해지하지 않아서, 이벤트가 파괴된 오브젝트를 계속 붙잡고 있기 때문입니다.</strong></p>
<p>이벤트에 더하기로 등록하면 이벤트가 그 오브젝트의 메서드를 참조로 쥡니다. 오브젝트를 파괴해도 이벤트가 그 참조를 놓지 않으면, 가비지 컬렉터도 그 오브젝트를 못 치우고 이벤트 발생 시 죽은 오브젝트의 메서드를 부릅니다. 이게 이벤트로 인한 메모리 누수의 전형입니다.</p>
<p>그래서 등록한 만큼 반드시 빼기로 해지해야 합니다. 유니티라면 오브젝트가 비활성화되거나 파괴되는 시점에 구독을 풀어 주는 게 정석입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>구독 해지를 빠뜨리기 쉬운데 구조로 막을 방법은요?</q>등록과 해지를 같은 수명 주기 짝에 붙여 한곳에서 관리하거나, 약한 참조로 등록해 오브젝트가 사라지면 자동으로 끊기게 하는 방법이 있습니다. 다만 약한 참조는 복잡도가 올라가서, 보통은 해지를 규칙으로 강제하는 쪽을 씁니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="csharp-q34" aria-label="34번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-04</span><span class="qtext">리스트에 담아 둔 struct를 꺼내 고쳤는데 반영이 안 됩니다. 왜 그런가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>struct는 값이라 리스트에서 꺼낼 때 복사본이 나오고, 그 복사본을 고쳤기 때문입니다.</strong></p>
<p>리스트의 인덱서로 struct를 꺼내면 원본이 아니라 복사본을 돌려줍니다. 그 복사본의 필드를 고쳐도 리스트 안 원본은 그대로입니다. 고치려면 꺼내서 고친 다음 다시 리스트의 그 자리에 넣어 주거나, 아예 class로 바꿔 참조로 다뤄야 합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>그 struct를 딕셔너리 키로 쓰면 조회가 느리던데요?</q>직접 정의하지 않으면 struct의 <code>Equals</code>와 <code>GetHashCode</code>가 리플렉션으로 필드를 훑고 값을 박싱해서 느립니다. <code>IEquatable</code>을 구현하고 <code>GetHashCode</code>를 필드로 맞춰 주면 박싱 없이 빠르게 조회됩니다.</span></li>
<li><span><q>그럼 이런 데이터는 그냥 class로 쓰는 게 낫나요?</q>고치는 일이 잦고 여러 곳이 같은 하나를 공유해야 하면 class가 편합니다. 하지만 개수가 아주 많고 값처럼 다뤄도 되는 데이터라면, struct로 두고 꺼내 고쳐 다시 넣는 방식이 가비지 컬렉션 부담과 캐시 지역성 면에서 유리합니다. 상황에 따라 고릅니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="close">
<h3>면접 당일 체크리스트</h3>
<ul>
<li><strong>모르면 "모르겠습니다"라고 말하세요.</strong> 꼬리질문으로 두세 번만 파고들면 모호한 답은 드러납니다. 인정한 뒤 아는 데까지 추론하는 쪽이 낫습니다.</li>
<li><strong>결론 먼저, 그다음 이유와 트레이드오프.</strong> 정의 한 문장으로 시작하면 흐름이 잡힙니다.</li>
<li><strong>단정하지 마세요.</strong> "절대 안 됩니다"는 반례 하나로 무너집니다. "일반적으로는 ~지만 ~한 경우엔 다릅니다"가 안전하고 더 정확합니다.</li>
<li><strong>소리 내어 연습하세요.</strong> 아는 것과 30초 안에 말하는 것은 다른 능력입니다.</li>
</ul>
</section>
</div>
<div class="field" data-field="design-patterns" hidden>
<p class="note"><strong>답변 프레임.</strong> 정의 한 문장으로 결론 먼저 → 왜 그런 설계가 나왔는지 → 트레이드오프(꼬리질문의 90%가 여기를 찌릅니다) → 필요하면 실제 예시 한 줄. 패턴 이름을 외워 나열하기보다, "어떤 문제를 푸는가"와 "안 쓰면 무엇이 나빠지는가"로 답하세요. 단정("무조건 이게 낫습니다")은 반례 하나로 무너지니 "일반적으로 ~지만 ~한 경우엔 다릅니다"로.</p>
<div class="bar">
<span class="prog"><b class="prog-done">0</b> / <span class="prog-total">30</span> 자신 있음</span>
<span class="bar-sp"></span>
<button class="tool tool-open" type="button">모두 펼치기</button>
<button class="tool tool-hide" type="button" aria-pressed="false">체크 숨기기</button>
<button class="tool tool-reset" type="button">초기화</button>
</div>
<section class="grp">
<div class="grp-head"><h3>생성 패턴</h3><span class="cnt">6문항</span></div>
<p class="grp-note">객체를 어떻게 만들지를 다룹니다. 공통 동기는 "생성 코드를 사용처에서 떼어내 결합을 낮추는 것"입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q1" aria-label="1번 자신 있음"></label>
<details>
<summary><span><span class="qtag">CRE-01</span><span class="qtext">팩토리 메서드 패턴은 무엇이고 왜 쓰나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>팩토리 메서드는 객체 생성 로직을 한 곳에 모아, 사용처가 구체 타입을 모르고 인터페이스만 알게 분리하는 패턴입니다.</strong></p>
<p>사용처에서 <code>new</code>로 구체 클래스를 직접 만들면, 그 사용처가 구체 타입에 묶여버립니다. 그러면 새 타입을 추가할 때마다 만드는 코드가 흩어진 곳을 다 찾아 고쳐야 합니다. 생성을 팩토리에 위임하면 사용처는 인터페이스만 보고, 새 타입이 생겨도 팩토리 한 곳만 손보면 되니까 기존 사용처 코드는 그대로 둘 수 있습니다. 이게 개방-폐쇄 원칙을 지키는 방식입니다.</p>
<p>대신 구체 타입이 하나뿐이거나 생성이 단순하면 팩토리를 두는 것 자체가 과합니다. 그럴 땐 그냥 <code>new</code>가 낫습니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>그냥 new 쓰는 것과 뭐가 다른가요?</q>결과물은 같은 객체지만, 누가 구체 타입을 아느냐가 다릅니다. <code>new</code>는 부르는 쪽이 구체 타입을 알아야 하고, 팩토리는 그 지식을 팩토리 안으로 숨깁니다. 그래서 나중에 어떤 구현을 줄지 바꾸거나 조건에 따라 다른 걸 주더라도 사용처는 영향을 안 받습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q2" aria-label="2번 자신 있음"></label>
<details>
<summary><span><span class="qtag">CRE-02</span><span class="qtext">팩토리 메서드와 추상 팩토리는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>팩토리 메서드가 객체 하나의 생성을 위임한다면, 추상 팩토리는 서로 어울려야 하는 관련 객체 한 세트를 함께 만드는 팩토리입니다.</strong></p>
<p>추상 팩토리를 쓰는 이유는 조합의 일관성을 보장하기 위해서입니다. 예를 들어 버튼과 체크박스를 만드는데, 윈도우용이면 둘 다 윈도우 스타일로, 맥용이면 둘 다 맥 스타일로 나와야 합니다. 하나의 팩토리 인터페이스로 이 한 벌을 통째로 만들면, 윈도우 버튼에 맥 체크박스가 섞이는 실수를 구조적으로 막을 수 있습니다.</p>
<p>실무에선 테마나 플랫폼별 UI 세트, 난이도별로 묶인 적 세트처럼 여러 객체가 한 묶음으로 일관돼야 할 때 씁니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q3" aria-label="3번 자신 있음"></label>
<details>
<summary><span><span class="qtag">CRE-03</span><span class="qtext">빌더 패턴은 어떤 문제를 해결하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>빌더는 옵션이 많은 객체를 단계별로 조립하게 해서, 이른바 텔레스코핑 생성자 문제를 푸는 패턴입니다.</strong></p>
<p>설정할 게 많은 객체를 생성자 하나로 받으려 하면, 인자가 열 개씩 늘어선 생성자가 여러 개로 불어나서 무엇이 무엇인지 알아보기 어렵습니다. 빌더는 메서드 체이닝으로 필요한 것만 골라 설정하고 나머지는 기본값으로 두게 합니다. 그래서 가독성이 좋고, 다 설정한 뒤 한 번에 완성해서 불변 객체를 만들기도 좋습니다.</p>
<p>대신 옵션이 몇 개 안 되는 단순한 객체엔 과합니다. 그리고 C#에서는 객체 초기화자가 이 역할을 가볍게 대신할 수 있어서, 다단계 검증이나 조립이 필요한 경우가 아니면 굳이 빌더를 안 쓰기도 합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>생성자 오버로딩으로도 되지 않나요?</q>선택 옵션이 늘수록 오버로딩은 조합만큼 폭발하고, 인자 순서가 같은 타입이면 무엇을 넘긴 건지 헷갈립니다. 빌더는 메서드 이름으로 무엇을 설정하는지 드러나고, 필요한 것만 부르면 되니까 조합이 늘어도 생성자가 불어나지 않습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q4" aria-label="4번 자신 있음"></label>
<details>
<summary><span><span class="qtag">CRE-04</span><span class="qtext">오브젝트 풀은 왜 쓰나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>오브젝트 풀은 자주 만들고 없애는 객체를 미리 만들어 비활성으로 쟁여두고, 필요할 때 꺼내 쓰고 다시 반납해 재사용하는 패턴입니다.</strong></p>
<p>총알이나 이펙트, 적처럼 매 프레임 수없이 생겼다 사라지는 객체를 그때그때 만들고 파괴하면, 할당 비용도 들고 버려진 객체가 쌓여 가비지 컬렉터에 부담을 줍니다. 풀은 만들어 둔 것을 껐다 켜며 돌려쓰기 때문에 이 할당과 수거를 없앱니다.</p>
<p>보통 활성인지 비활성인지 플래그로 관리하고, 풀이 비면 몇 개 더 늘리거나 가장 오래된 것을 회수해 씁니다. 유니티는 <code>ObjectPool&lt;T&gt;</code>를 내장하고 있어서 직접 안 짜도 됩니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>가비지 컬렉션이 왜 그렇게 문제인가요?</q>수거가 도는 순간 잠깐 멈칫하는데, 게임에선 이게 프레임 끊김으로 나타납니다. 초당 수십 프레임을 맞춰야 하는데 한 프레임에서 수거가 길게 걸리면 눈에 띄게 튑니다. 그래서 애초에 쓰레기를 덜 만드는 게 중요하고, 풀이 그 수단입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q5" aria-label="5번 자신 있음"></label>
<details>
<summary><span><span class="qtag">CRE-05</span><span class="qtext">싱글톤을 스레드 안전하게 구현하려면 어떻게 하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>문제는 인스턴스가 없으면 만든다는 흔한 코드가, 두 스레드가 동시에 없음을 확인하고 둘 다 만들어버리는 경쟁 조건을 안고 있다는 점입니다.</strong></p>
<p>이 검사와 생성 사이에 다른 스레드가 끼어들 수 있어서, 인스턴스가 여러 개 생길 수 있습니다. 해법은 세 가지를 얘기합니다. 첫째는 이중 검사 잠금인데, 락을 걸고 락 안에서 한 번 더 확인해서 만듭니다. 둘째는 C#의 <code>Lazy&lt;T&gt;</code>인데, 기본으로 스레드 안전한 지연 초기화를 제공합니다. 셋째는 정적 필드 초기화인데, 런타임이 타입을 처음 쓸 때 한 번만 초기화해주는 걸 보장합니다.</p>
<p>반대로 인스턴스를 파괴했다가 다시 만드는 식으로 대응하겠다는 건 틀린 해법입니다. 문제의 원인인 동시 생성을 전혀 막지 못합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>이중 검사 잠금에서 왜 검사를 두 번 하나요?</q>바깥 검사는 이미 만들어진 뒤에 매번 락을 거는 비용을 피하려는 것이고, 락 안의 두 번째 검사는 락을 기다리는 동안 다른 스레드가 이미 만들었을 수 있으니 그걸 다시 확인하는 겁니다. 둘 중 하나만 있으면 성능이나 정확성 중 하나를 잃습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q6" aria-label="6번 자신 있음"></label>
<details>
<summary><span><span class="qtag">CRE-06</span><span class="qtext">싱글톤은 어떤 단점이 있고 어떻게 대체하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>싱글톤은 결국 전역 상태라서, 어디서 참조하고 어디서 바꾸는지 추적하기 어렵고 숨은 결합을 퍼뜨립니다.</strong></p>
<p>가장 실질적인 문제는 테스트입니다. 사용처가 구체 싱글톤 타입에 직접 의존하기 때문에, 테스트할 때 가짜 구현으로 갈아끼울 수가 없습니다. 이건 추상에 의존하라는 의존성 역전 원칙을 어기는 겁니다. 여기에 숨은 결합으로 개방-폐쇄 원칙이나 단일 책임 원칙에도 악영향을 줍니다.</p>
<p>대안은 의존성 주입입니다. 구체 싱글톤을 직접 부르는 대신 인터페이스를 주입받으면, 실제로는 하나만 돌더라도 테스트에선 가짜 구현으로 바꿀 수 있습니다. 매니저류를 만들 때 편해서 쓰지만, 남용하지 않도록 조심하는 게 핵심입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>서비스 로케이터는 싱글톤과 뭐가 다른가요?</q>둘 다 전역 접근이라는 점은 같지만, 서비스 로케이터는 서비스를 한 곳에 등록해 두고 인터페이스로 조회합니다. 그래서 구체 타입이 아니라 인터페이스에 의존하니 결합도가 낮고, 등록만 가짜로 바꾸면 테스트도 쉽습니다. 다만 어디서 무엇을 꺼내 쓰는지 겉으로 안 드러나는 건 여전한 약점입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>구조 패턴</h3><span class="cnt">6문항</span></div>
<p class="grp-note">객체를 어떻게 조립하고 감싸는지를 다룹니다. 감싸는 패턴들은 "목적이 무엇이냐"로 구분하는 게 핵심입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q7" aria-label="7번 자신 있음"></label>
<details>
<summary><span><span class="qtag">STR-01</span><span class="qtext">데코레이터 패턴은 상속에 비해 무엇이 좋나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>데코레이터는 원본 객체를 같은 인터페이스의 다른 객체로 감싸서 기능을 덧붙이는 패턴인데, 자유 조합이 필요할 때 상속의 클래스 폭발을 피합니다.</strong></p>
<p>예를 들어 무기에 화염, 빙결, 흡혈 효과를 자유롭게 조합하고 싶다고 해봅시다. 상속으로 다 만들면 화염빙결, 화염흡혈, 화염빙결흡혈처럼 조합 수만큼 클래스가 필요해서, 효과가 늘면 최악의 경우 2의 n제곱만큼 폭발합니다. 데코레이터는 효과 하나당 감싸개 하나만 만들어 두고, 런타임에 원하는 것만 원하는 순서로 겹겹이 쌓습니다.</p>
<p>그래서 조합을 미리 정하지 않고 실행 중에 동적으로 얹을 수 있다는 게 상속에 없는 유연성입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>쌓는 순서가 결과에 영향을 주나요?</q>줄 수 있습니다. 데미지를 두 배로 만드는 감싸개와 십을 더하는 감싸개가 있으면, 어느 걸 먼저 두르냐에 따라 최종 값이 달라집니다. 그래서 데코레이터는 순서에 의미가 있을 수 있고, 이건 유연함인 동시에 주의할 점이기도 합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q8" aria-label="8번 자신 있음"></label>
<details>
<summary><span><span class="qtag">STR-02</span><span class="qtext">어댑터, 데코레이터, 프록시는 모두 객체를 감싸는데 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>셋 다 다른 객체를 감싸는 모양은 같지만, 인터페이스를 건드리는지와 무엇을 하려는지가 다릅니다.</strong></p>
<ul>
<li><strong>어댑터.</strong> 인터페이스가 맞지 않는 걸 우리 인터페이스로 바꿔 끼웁니다. 외부나 레거시 클래스를 우리 코드가 기대하는 모양으로 변환하는 게 목적입니다.</li>
<li><strong>데코레이터.</strong> 인터페이스는 그대로 두고 기능을 더합니다. 감싼 뒤에도 같은 타입으로 보이되 동작이 추가됩니다.</li>
<li><strong>프록시.</strong> 인터페이스도 그대로, 기능도 안 더하고, 접근만 가로챕니다. 무거운 객체 생성을 실제 쓸 때까지 미루거나, 권한을 검사하거나, 결과를 캐싱하는 식입니다.</li>
</ul>
<p>한 줄로 정리하면 어댑터는 모양을 바꾸고, 데코레이터는 기능을 더하고, 프록시는 접근을 통제합니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q9" aria-label="9번 자신 있음"></label>
<details>
<summary><span><span class="qtag">STR-03</span><span class="qtext">퍼사드 패턴은 언제 쓰나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>퍼사드는 여러 하위 시스템을 감싸서, 복잡한 내부 동작을 간단한 메서드 하나로 노출하는 패턴입니다.</strong></p>
<p>예를 들어 게임을 새로 시작할 때 오디오를 초기화하고, 저장 데이터를 불러오고, 씬을 전환하는 여러 단계를 거친다고 해봅시다. 호출하는 쪽이 이 순서와 내부를 다 알아야 하면 결합이 심해집니다. 퍼사드가 이 과정을 "게임 시작" 같은 메서드 하나 뒤로 숨기면, 호출 쪽은 내부를 몰라도 됩니다.</p>
<p>그래서 나중에 하위 시스템 구현이 바뀌어도 퍼사드가 노출하는 인터페이스만 유지되면 호출 쪽은 영향을 안 받습니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>어댑터랑 뭐가 다른가요?</q>어댑터는 대개 대상 하나의 인터페이스를 다른 모양으로 바꾸는 일대일 변환이고, 퍼사드는 여러 개를 묶어 단순하게 만드는 게 목적입니다. 어댑터의 방점이 호환이라면 퍼사드의 방점은 단순화입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q10" aria-label="10번 자신 있음"></label>
<details>
<summary><span><span class="qtag">STR-04</span><span class="qtext">브리지 패턴은 어떤 문제를 해결하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>브리지는 무엇을 하느냐인 추상과 어떻게 하느냐인 구현을 별개의 클래스 계층으로 나눠, 두 축을 각각 독립적으로 확장하게 하는 패턴입니다.</strong></p>
<p>두 축이 곱으로 늘어나는 상황에서 상속으로 다 조합하면 클래스가 폭발합니다. 예를 들어 리모컨 종류가 여러 개고 조종할 기기도 여러 개면, 리모컨 곱하기 기기 수만큼 클래스가 필요합니다. 브리지는 한 축을 다른 축에 위임해서, 곱이 아니라 두 축의 합으로 줄입니다.</p>
<p>비슷해 보이는 어댑터와 비교하면, 어댑터는 이미 존재하는 걸 사후에 맞추는 것이고 브리지는 처음부터 두 축을 나눠서 설계하는 것이라는 점이 다릅니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q11" aria-label="11번 자신 있음"></label>
<details>
<summary><span><span class="qtag">STR-05</span><span class="qtext">플라이웨이트 패턴은 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>플라이웨이트는 여러 객체가 똑같이 갖는 데이터를 한 벌만 두고 공유해서 메모리를 아끼는 패턴입니다.</strong></p>
<p>핵심은 상태를 둘로 나누는 겁니다. 변하지 않고 모두가 공유할 수 있는 내부 상태, 예를 들어 나무의 메시나 텍스처는 한 벌만 두고 다 같이 가리킵니다. 반면 개체마다 다른 외부 상태, 예를 들어 위치나 크기만 각자 따로 보관합니다.</p>
<p>그래서 같은 자원을 대량으로 반복하는 상황에 잘 맞습니다. 숲의 나무 수천 그루나 파티클, 타일맵처럼 겉모습은 같고 위치만 다른 것들을 그릴 때, 무거운 데이터를 그루마다 복제하지 않아 메모리가 확 줄어듭니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>공유하는 내부 상태를 하나가 바꾸면 어떻게 되나요?</q>그래서 내부 상태는 변하지 않는 것만 골라 넣는 게 전제입니다. 공유하는 값이 가변이면 하나가 바꿨을 때 전부가 영향을 받으니, 개체마다 달라지는 값은 반드시 외부 상태로 빼야 합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q12" aria-label="12번 자신 있음"></label>
<details>
<summary><span><span class="qtag">STR-06</span><span class="qtext">컴포지트 패턴은 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>컴포지트는 개별 객체와 그 객체들의 묶음을 같은 인터페이스로 다뤄서, 트리 구조를 재귀로 일관되게 처리하는 패턴입니다.</strong></p>
<p>파일과 폴더를 생각하면 쉽습니다. 잎에 해당하는 파일과 가지에 해당하는 폴더가 같은 타입으로 취급되기 때문에, 호출하는 쪽은 지금 다루는 게 하나인지 묶음인지 구분하지 않고 같은 연산을 부릅니다. 폴더의 크기를 구할 때 그 안의 자식들 크기를 재귀로 더하는 식입니다.</p>
<p>그래서 부분과 전체가 같은 방식으로 다뤄지는 구조, 예를 들어 UI 계층이나 씬 그래프, 스킬 트리 같은 곳에 씁니다.</p>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>행동 패턴</h3><span class="cnt">7문항</span></div>
<p class="grp-note">객체들이 어떻게 협력하고 책임을 나누는지를 다룹니다. 비슷해 보이는 패턴을 "의도"로 갈라내는 꼬리질문이 자주 나옵니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q13" aria-label="13번 자신 있음"></label>
<details>
<summary><span><span class="qtag">BEH-01</span><span class="qtext">전략 패턴은 무엇이고 개방-폐쇄 원칙과 어떤 관계인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>전략 패턴은 서로 바꿔 낄 수 있는 알고리즘을 각각 객체로 캡슐화하고, 사용하는 쪽이 그중 하나에 위임하게 하는 패턴입니다.</strong></p>
<p>개방-폐쇄 원칙과 바로 연결됩니다. 무기 종류를 <code>if</code>나 <code>switch</code>로 분기하면 새 무기를 추가할 때마다 그 분기문을 찾아 고쳐야 해서 원칙을 어깁니다. 각 무기를 같은 인터페이스의 전략 구현체로 만들면, 새 무기는 새 클래스를 하나 추가하는 것으로 끝나고, 실행하는 쪽은 현재 무기의 공격을 부를 뿐 코드가 그대로입니다.</p>
<p>그래서 흩어진 <code>if</code>나 <code>switch</code> 분기를 없앤다는 게 전략 패턴이 개방-폐쇄 원칙을 실현하는 신호입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>의존성 역전 원칙과도 관련 있지 않나요?</q>맞습니다. 사용처가 구체 무기가 아니라 전략 인터페이스에 의존하니 의존성 역전도 함께 지킵니다. 다만 이 패턴에서 눈에 띄는 변화는 분기문이 사라진다는 점이라, 방점은 보통 개방-폐쇄 원칙에 둡니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q14" aria-label="14번 자신 있음"></label>
<details>
<summary><span><span class="qtag">BEH-02</span><span class="qtext">전략 패턴과 상태 패턴은 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>둘은 구조가 거의 같습니다. 바꿔 낄 수 있는 객체에 위임한다는 점이요. 하지만 누가 그걸 바꾸느냐라는 의도가 다릅니다.</strong></p>
<p>전략은 외부, 즉 클라이언트가 어떤 알고리즘을 쓸지 골라 넣습니다. 그리고 전략끼리 서로 넘어가는 전이는 없습니다. 반면 상태는 객체 내부의 상태가 스스로 행동을 바꾸고, 각 상태가 조건이 맞으면 자기가 다음 상태로 넘어갑니다.</p>
<p>적 인공지능을 예로 들면, 순찰하다 플레이어를 감지하면 추적으로, 사거리에 들어오면 공격으로 각 상태가 스스로 전이하는 게 상태 패턴입니다. 무엇으로 공격할지를 바깥에서 정해 꽂아주는 건 전략 패턴이고요.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>상태 패턴이 거대한 switch를 어떻게 대체하나요?</q>상태마다 <code>switch</code>의 한 갈래로 로직을 몰아넣는 대신, 각 상태를 독립된 클래스로 빼서 그 안에 그 상태의 행동과 전이를 담습니다. 그러면 하나의 거대한 분기문 대신 작은 클래스 여러 개가 되어 복잡도가 낮아지고, 새 상태를 추가할 때 기존 코드를 거의 안 건드립니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q15" aria-label="15번 자신 있음"></label>
<details>
<summary><span><span class="qtag">BEH-03</span><span class="qtext">옵저버 패턴은 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>옵저버는 사건이 일어난 지점이 반응할 시스템들을 직접 부르는 대신, 이벤트를 발행하면 구독자들이 각자 알아서 반응하게 해서 결합을 끊는 패턴입니다.</strong></p>
<p>예를 들어 적이 죽었을 때 점수 UI를 올리고, 사운드를 틀고, 업적을 확인해야 한다고 해봅시다. 적이 이 셋을 직접 부르면 적이 그 셋을 다 알아야 합니다. 대신 적이 사망 이벤트만 발행하고 점수, 사운드, 업적 시스템이 각자 구독해 반응하면, 적은 그들을 전혀 참조하지 않습니다.</p>
<p>그래서 결합이 낮아지고, 새로운 반응, 예를 들어 킬 로그를 추가하더라도 발행하는 적 쪽 코드는 손댈 필요가 없습니다. 이것도 개방-폐쇄 원칙의 실천입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>중재자 패턴과는 뭐가 다른가요?</q>옵저버는 누가 듣는지 모르고 그냥 뿌리는 익명 브로드캐스트에 가깝습니다. 중재자는 반대로 참여자들을 다 알고, 그들 사이의 상호작용 규칙을 한곳에서 조율합니다. 관제탑이 항공기끼리 직접 교신하지 못하게 하고 자기를 거치게 하는 것처럼요. 흩어진 다대다 결합을 중재자 하나를 향한 별 모양으로 정리하는 게 중재자입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q16" aria-label="16번 자신 있음"></label>
<details>
<summary><span><span class="qtag">BEH-04</span><span class="qtext">옵저버 패턴과 이벤트 버스는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>차이는 발행자와 구독자가 서로를 아는 정도입니다.</strong></p>
<p>옵저버에서는 구독자가 발행자를 직접 참조해서 구독합니다. 그러니까 구독자가 누구를 들을지 그 발행자를 알아야 합니다. 이벤트 버스는 가운데에 중앙 버스를 하나 두고, 발행자는 버스에 던지고 구독자는 버스에서 받습니다. 그래서 발행자와 구독자가 서로의 존재를 전혀 몰라도 돼서 결합이 더 느슨합니다.</p>
<p>대신 대가가 있습니다. 누가 무엇에 반응하는지가 코드에서 한눈에 안 보여서 흐름을 추적하기 어렵고, 구독을 제때 해제하는 관리도 필요합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>구독 해제를 빠뜨리면 무슨 일이 생기나요?</q>메모리 누수가 생깁니다. 버스나 발행자가 죽은 구독자를 계속 참조로 붙들고 있으면 가비지 컬렉터가 못 치웁니다. 게다가 이미 사라졌어야 할 객체가 이벤트를 계속 받아서 엉뚱하게 동작하기도 합니다. 그래서 수명이 끝날 때 반드시 구독을 풀어줘야 합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q17" aria-label="17번 자신 있음"></label>
<details>
<summary><span><span class="qtag">BEH-05</span><span class="qtext">커맨드 패턴은 실행 취소를 어떻게 구현하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>커맨드 패턴은 하나의 행동을 실행과 취소를 함께 가진 객체로 캡슐화해서, 실행 취소를 스택으로 관리할 수 있게 합니다.</strong></p>
<p>실행할 때마다 그 커맨드 객체를 실행 취소 스택에 쌓습니다. 되돌리기를 누르면 스택에서 하나 꺼내 취소를 부르고, 그걸 다시 실행 스택으로 옮깁니다. 이 두 스택을 오가는 걸로 취소와 재실행이 됩니다.</p>
<p>취소를 하려면 커맨드가 실행하기 전 상태나, 아니면 되돌리는 역연산을 안에 갖고 있어야 합니다. 여기에 커맨드를 시간과 함께 저장하면 리플레이가 되고, 키 입력을 커맨드에 매핑하면 키 리바인딩도 자연스럽게 풀립니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>취소를 위해 상태를 통째로 저장하는 것과 역연산을 두는 것, 어느 쪽이 낫나요?</q>상황에 따라 다릅니다. 상태를 통째로 스냅샷으로 저장하는 건 메멘토 패턴과 함께 쓰는 방식인데, 구현이 단순한 대신 상태가 크면 메모리 부담이 큽니다. 역연산을 두는 건 가볍지만, 모든 행동에 대해 정확한 반대 연산을 정의할 수 있어야 합니다. 그래서 상태가 작으면 스냅샷, 크면 역연산 쪽으로 기웁니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q18" aria-label="18번 자신 있음"></label>
<details>
<summary><span><span class="qtag">BEH-06</span><span class="qtext">템플릿 메서드와 전략 패턴은 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>둘 다 달라지는 부분을 갈아끼운다는 목적은 같은데, 상속으로 하느냐 조합으로 하느냐가 다릅니다.</strong></p>
<p>템플릿 메서드는 알고리즘의 뼈대를 부모 메서드에 고정해 두고, 그중 달라지는 단계만 자식이 오버라이드합니다. 초기화하고, 처리하고, 정리하는 전체 흐름은 똑같은데 처리 단계의 세부만 다를 때 잘 맞습니다. 전략은 상속이 아니라 위임이라, 행동 전체를 통째로 다른 객체로 바꿔 낍니다.</p>
<p>그래서 전체 흐름을 강제하고 일부만 바꾸고 싶으면 템플릿 메서드가, 행동 전체를 유연하게 교체하고 싶으면 전략이 유리합니다. 유연성은 전략이 위고, 흐름을 강제하는 건 템플릿 메서드가 위입니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q19" aria-label="19번 자신 있음"></label>
<details>
<summary><span><span class="qtag">BEH-07</span><span class="qtext">책임 연쇄 패턴은 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>책임 연쇄는 요청을 처리기들의 사슬에 흘려보내서, 각 처리기가 자기가 처리할 수 있으면 처리하고 아니면 다음으로 넘기는 패턴입니다.</strong></p>
<p>예를 들어 입력이 들어오면 먼저 UI가 받아보고, UI가 안 쓰면 플레이어가, 그것도 아니면 기본 처리로 넘기는 식입니다. 데미지를 방어구가 먼저 깎고, 저항이 또 깎고, 최종 계산으로 넘기는 것도 같은 구조입니다.</p>
<p>이렇게 하면 조건 분기가 잔뜩 쌓인 <code>if</code> 더미 대신 처리 단계를 각각 독립된 객체로 분리하게 됩니다. 그래서 단계의 순서를 바꾸거나 중간에 하나를 끼워 넣기가 쉬워집니다.</p>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>SOLID 원칙과 아키텍처</h3><span class="cnt">6문항</span></div>
<p class="grp-note">다섯 원칙은 전부 "변경의 영향을 최소 범위에 가둔다"는 하나의 목표를 공유합니다. 원칙 이름만 외우지 말고 이 실을 꿰어 답하세요.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q20" aria-label="20번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SOL-01</span><span class="qtext">단일 책임 원칙(SRP)이란 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>단일 책임 원칙은 한 클래스가 변경되는 이유가 하나여야 한다는 원칙입니다.</strong></p>
<p>여기서 흔히 오해하는 게, 한 가지 일만 하라는 뜻으로 받아들이는 겁니다. 정확히는 변경 이유가 하나여야 한다는 겁니다. 예를 들어 입력 처리, 이동, 애니메이션, 저장이 한 클래스에 섞이면, 이 넷이 각기 다른 이유로 바뀌기 때문에 어느 하나를 고칠 때 나머지까지 영향을 받아 파급이 커집니다.</p>
<p>책임을 나누면 변경의 영향이 그 클래스 안에 갇힙니다. 다만 무조건 잘게 쪼개는 게 답은 아니고, 과하게 나누면 오히려 파편화돼서 관리가 어려워집니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q21" aria-label="21번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SOL-02</span><span class="qtext">개방-폐쇄 원칙(OCP)이란 무엇이고 어떻게 달성하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>개방-폐쇄 원칙은 확장에는 열려 있고 수정에는 닫혀 있어야 한다는 원칙입니다.</strong></p>
<p>새 기능을 추가할 때 기존 코드를 고치는 게 아니라, 새 코드를 더하는 방식으로 하라는 겁니다. 이걸 가능하게 하는 엔진이 다형성입니다. 같은 인터페이스를 구현한 새 타입을 추가하면, 그걸 쓰는 쪽은 인터페이스만 보고 있으니 코드가 그대로입니다.</p>
<p>앞에서 본 전략, 팩토리, 상태 패턴이 전부 이 원칙을 실현하는 도구입니다. 그래서 SOLID 다섯 중에서도 중심에 있는 원칙이라고 봅니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>왜 흩어진 if나 switch가 개방-폐쇄 원칙 위반의 신호인가요?</q>타입에 따라 갈라지는 분기를 여기저기 두면, 새 타입이 생길 때마다 그 분기들을 전부 찾아 고쳐야 하기 때문입니다. 즉 확장이 곧 기존 코드 수정을 부릅니다. 그 분기를 다형성으로 바꾸면 새 타입은 클래스 추가로 끝나니, 분기문 제거가 이 원칙을 지키는 대표적 방법입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q22" aria-label="22번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SOL-03</span><span class="qtext">리스코프 치환 원칙(LSP)이란 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>리스코프 치환 원칙은 자식이 부모 자리를 대신 차지해도 프로그램이 여전히 올바르게 동작해야 한다는 원칙입니다.</strong></p>
<p>다시 말해 자식이 부모가 한 약속, 즉 계약을 어기면 안 됩니다. 직사각형을 상속한 정사각형이 너비를 바꾸면 높이까지 바뀌어 부모를 기대한 코드가 깨지는 경우나, 새를 상속했는데 날지 못하는 펭귄이 대표적인 위반 사례입니다.</p>
<p>이게 깨지면 다형성이 무너집니다. 자식을 부모로 못 믿으니 호출하는 쪽에 이 타입이 맞나 확인하는 타입 검사가 다시 들어오고, 그러면 개방-폐쇄 원칙까지 같이 무너집니다. 그래서 상속을 써도 되는지를 검증하는 원칙이라고 볼 수 있습니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q23" aria-label="23번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SOL-04</span><span class="qtext">인터페이스 분리 원칙(ISP)이란 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>인터페이스 분리 원칙은 크고 뚱뚱한 인터페이스 하나보다, 작고 구체적인 인터페이스 여러 개가 낫다는 원칙입니다.</strong></p>
<p>이유는 큰 인터페이스를 구현하게 하면, 실제로 안 쓰는 메서드까지 빈 껍데기로 억지로 구현하도록 강요받기 때문입니다. 그건 필요 없는 것에 의존하게 만드는 겁니다.</p>
<p>그래서 움직이는 능력, 피해를 받는 능력, 공격하는 능력을 각각 <code>IMovable</code>, <code>IDamageable</code>, <code>IAttacker</code>처럼 잘게 쪼개고, 각 객체가 필요한 것만 골라 조합하게 합니다. 이건 필요한 기능만 컴포넌트로 붙이는 유니티의 컴포넌트 철학과도 통합니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q24" aria-label="24번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SOL-05</span><span class="qtext">의존성 역전 원칙(DIP)이란 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>의존성 역전 원칙은 고수준 모듈과 저수준 모듈이 서로 직접 의존하지 말고, 둘 다 추상, 즉 인터페이스에 의존하라는 원칙입니다.</strong></p>
<p>고수준 코드가 저수준 구체 클래스에 직접 의존하면, 그 구현을 교체하거나 테스트용 가짜로 바꾸는 길이 막힙니다. 사이에 인터페이스를 두고 실제 구현을 주입하면, 언제든 갈아끼울 수 있고 가짜 구현으로 테스트도 됩니다.</p>
<p>역전이라는 말은, 원래 고수준이 저수준에 맞추던 방향이 뒤집혀서, 저수준이 고수준이 정의한 인터페이스를 따르게 된다는 뜻입니다. 의존성 주입이나 스크립터블 오브젝트 주입이 이걸 실천하는 방법입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>싱글톤이 왜 이 원칙을 위반하나요?</q>사용처가 싱글톤의 구체 타입을 직접 불러 쓰기 때문입니다. 추상이 아니라 구체에 매여 있으니, 테스트에서 가짜로 바꿀 수도 없고 다른 구현으로 교체할 수도 없습니다. 그래서 싱글톤을 인터페이스 뒤에 두고 주입하는 방식으로 바꾸면 이 위반을 피할 수 있습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q25" aria-label="25번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SOL-06</span><span class="qtext">MVC, MVP, MVVM은 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>셋 다 UI를 로직과 데이터에서 떼어내는 아키텍처 계열이고, 공통 목표는 데이터인 모델과 표시인 뷰를 분리해 각각 따로 테스트하고 교체할 수 있게 하는 겁니다.</strong></p>
<p>차이는 모델과 뷰를 무엇이 어떻게 잇느냐입니다. MVC는 컨트롤러가 입력을 받아 모델을 갱신하고 뷰는 모델을 표시합니다. MVP는 프레젠터가 뷰와 모델 사이를 중재하고, 뷰는 인터페이스 뒤에서 수동적으로 시키는 대로만 합니다. MVVM은 뷰모델이 상태를 노출하고 뷰가 데이터 바인딩으로 그 상태를 자동으로 반영합니다.</p>
<p>그래서 데이터 바인딩을 지원하는 프레임워크에서는 MVVM이 자연스럽고, 바인딩이 없는 수동 UI에서는 MVP가 흔합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>유니티에서는 주로 뭘 쓰나요?</q>전통적인 유니티 UI는 바인딩이 약해서 MVP 스타일로 프레젠터가 뷰를 수동으로 갱신하는 방식이 흔했습니다. 다만 데이터 바인딩을 지원하는 UI 툴킷을 쓰면 MVVM에 가깝게 갈 수 있어서, 어떤 UI 프레임워크를 쓰느냐에 따라 선택이 갈립니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>상황형 문제 해결</h3><span class="cnt">5문항</span></div>
<p class="grp-note">정답보다 접근 순서를 봅니다. 증상을 먼저 측정으로 좁힌 뒤, 어떤 패턴이 그 문제를 푸는지로 이어가세요.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q26" aria-label="26번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-01</span><span class="qtext">총알과 이펙트를 매 프레임 수백 개씩 만들고 없애니 렉이 걸립니다. 어떻게 개선하겠습니까?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>먼저 프로파일러로 이 렉이 잦은 할당 때문에 생기는 가비지 컬렉션 스파이크인지 확인합니다.</strong></p>
<p>매 프레임 객체를 만들고 파괴하면 버려진 객체가 쌓이고, 어느 순간 가비지 컬렉터가 돌면서 프레임이 튑니다. 원인이 이거라면 오브젝트 풀을 도입합니다. 총알과 이펙트를 미리 만들어 비활성으로 쟁여두고, 쏠 때 꺼내 켜고 사라질 때 파괴 대신 반납해 다시 씁니다.</p>
<p>그러면 실행 중에 새로 할당하고 수거하는 일이 사라져서, 가비지 컬렉션으로 인한 끊김이 크게 줄어듭니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>풀이 비면 어떻게 하나요?</q>두 가지 중에 고릅니다. 몇 개를 더 만들어 풀을 늘리거나, 가장 오래된 것을 강제로 회수해 재사용하는 겁니다. 순간적으로 수요가 튀는 게임이면 늘리는 쪽이 안전하고, 상한을 두고 싶으면 회수하는 쪽을 씁니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q27" aria-label="27번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-02</span><span class="qtext">적 종류가 늘 때마다 거대한 switch문을 여기저기 찾아 고쳐야 합니다. 어떻게 바꾸겠습니까?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>타입에 따라 갈라지는 <code>switch</code>가 여러 곳에 흩어져 있다는 건 개방-폐쇄 원칙 위반의 전형적인 신호입니다.</strong></p>
<p>적마다 다른 행동을 각각 구현체로 빼서 다형성으로 바꿉니다. 공격이나 이동 같은 행동이 종류마다 다르면 전략 패턴으로, 순찰이나 추적처럼 상태에 따라 바뀌면 상태 패턴으로 나눕니다. 그리고 어떤 적을 만들지는 팩토리에 위임합니다.</p>
<p>이렇게 하면 새 적을 추가할 때 흩어진 분기문을 고치는 게 아니라, 새 클래스를 하나 추가하는 것으로 끝납니다. 기존 호출부는 인터페이스만 보고 있으니 그대로 둡니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>적 종류가 지금의 백 배로 늘면 이 구조가 감당되나요?</q>분기문 방식보다 훨씬 잘 버팁니다. 종류가 늘어도 호출부는 그대로고 클래스만 늘어나니까요. 다만 종류가 아주 많아지면 데이터로 정의하고 공통 로직은 공유하는 쪽도 함께 봅니다. 겉모습 같은 부분은 플라이웨이트로 공유해 메모리를 아끼는 것도 이때 고려합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q28" aria-label="28번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-03</span><span class="qtext">같은 게임인데 빠른 컴퓨터에선 너무 빠르고 느린 컴퓨터에선 느립니다. 왜 이럴까요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>게임 속도가 프레임률에 묶여 있기 때문입니다. 이건 게임 루프를 실제 시간과 분리하지 않았을 때 나오는 전형적인 증상입니다.</strong></p>
<p>매 프레임 위치를 일정량씩 더하는 식으로 짜면, 초당 프레임이 많은 빠른 컴퓨터에서는 더 자주 더해져서 빨라지고, 느린 컴퓨터에서는 반대로 느려집니다.</p>
<p>해법은 업데이트를 실제 흐른 시간에 맞추는 겁니다. 흐른 시간을 누적해서 고정된 크기의 스텝으로 나눠 물리와 로직을 돌리고, 스텝에 딱 안 맞고 남는 시간은 렌더링에서 보간으로 메웁니다. 이렇게 고정 스텝으로 처리하면 하드웨어 속도와 상관없이 게임이 같은 속도로 흐릅니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>그럼 프레임마다 흐른 시간을 곱해서 더하면 되지 않나요?</q>움직임 같은 건 그 방식으로도 어느 정도 맞습니다. 하지만 물리나 충돌은 스텝 크기가 들쭉날쭉하면 결과가 불안정해지고 컴퓨터마다 미세하게 달라집니다. 그래서 물리는 고정 스텝으로 돌리는 걸 기본으로 합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q29" aria-label="29번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-04</span><span class="qtext">캐릭터가 많아지자 매 프레임 월드 행렬을 다시 구하는 계산이 너무 비쌉니다. 어떻게 줄이겠습니까?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>매 프레임 무조건 다시 계산하는 게 병목인지부터 측정으로 확인하고, 맞다면 더티 플래그 패턴을 적용합니다.</strong></p>
<p>대부분의 캐릭터는 매 프레임 움직이지 않는데도 위치 계산을 다시 하고 있을 가능성이 큽니다. 더티 플래그는 값이 실제로 바뀌었을 때만 더티 표시를 세우고, 재계산은 그 표시가 선 것에만 합니다. 안 움직인 것은 지난 결과를 그대로 씁니다.</p>
<p>계층 구조라면 부모가 더티일 때 자식에게도 더티를 전파해서 필요한 가지만 다시 계산합니다. 다만 대가가 있는데, 값을 바꾸고 표시 세우는 걸 한 군데라도 빠뜨리면 낡은 값이 남는 버그가 생깁니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="design-patterns-q30" aria-label="30번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-05</span><span class="qtext">실행 취소와 리플레이 기능을 넣어야 합니다. 어떤 패턴으로 접근하겠습니까?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>행동을 커맨드 객체로 캡슐화하는 커맨드 패턴을 토대로 잡습니다.</strong></p>
<p>사용자의 각 조작을 실행과 취소를 가진 커맨드로 만들고, 실행할 때마다 실행 취소 스택에 쌓습니다. 되돌리기는 스택에서 꺼내 취소를 부르고 재실행 스택으로 옮기면 됩니다. 리플레이는 이 커맨드들을 시간과 함께 순서대로 저장해 두었다가 다시 실행하면 그대로 재현됩니다.</p>
<p>취소를 위해 상태를 통째로 저장해야 한다면 메멘토를 함께 씁니다. 다만 상태가 크면 스냅샷이 메모리를 많이 먹으니, 그럴 땐 되돌리는 역연산을 커맨드에 두는 쪽이 가볍습니다. 상태 크기에 따라 스냅샷과 역연산 사이를 고릅니다.</p>
</div>
</div>
</details>
</div>
</section>
<section class="close">
<h3>면접 당일 체크리스트</h3>
<ul>
<li><strong>패턴 이름보다 문제를 먼저 말하세요.</strong> "이건 옵저버입니다"가 아니라 "이러이러한 결합을 끊고 싶어서 이벤트로 뿌리는 방식을 씁니다"가 낫습니다.</li>
<li><strong>안 썼을 때 무엇이 나빠지는지 짚으세요.</strong> 대부분의 패턴은 <code>if</code>나 <code>switch</code>의 폭발, 클래스의 폭발, 강한 결합 중 하나를 푸는 겁니다.</li>
<li><strong>비슷한 패턴은 "의도"로 가르세요.</strong> 어댑터와 데코레이터와 프록시처럼 모양이 같아 보이는 것들은 목적으로 구분해야 꼬리질문을 넘깁니다.</li>
<li><strong>단정하지 마세요.</strong> "무조건 이 패턴이 낫습니다"보다 "단순한 경우엔 과하지만 조합이 늘면 유리합니다"가 안전하고 더 정확합니다.</li>
</ul>
</section>
</div>
<div class="field" data-field="math-physics" hidden>
<p class="note"><strong>답변 프레임.</strong> 결론 한 문장으로 시작 → 왜 그렇게 되는지 벡터·기하로 → 트레이드오프나 주의점(꼬리질문이 여길 찌릅니다) → 필요하면 유니티 API나 실제 예시 한 줄. 공식은 외운 걸 읊기보다 "무슨 성분을 빼거나 더하는지"로 풀어 말하는 게 강합니다.</p>
<div class="bar">
<span class="prog"><b class="prog-done">0</b> / <span class="prog-total">37</span> 자신 있음</span>
<span class="bar-sp"></span>
<button class="tool tool-open" type="button">모두 펼치기</button>
<button class="tool tool-hide" type="button" aria-pressed="false">체크 숨기기</button>
<button class="tool tool-reset" type="button">초기화</button>
</div>
<section class="grp">
<div class="grp-head"><h3>벡터 연산</h3><span class="cnt">6문항</span></div>
<p class="grp-note">정규화·내적·외적이 뿌리입니다. "무슨 성분을 뽑아 빼고 더하는가"로 설명하면 공식이 저절로 나옵니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q1" aria-label="1번 자신 있음"></label>
<details>
<summary><span><span class="qtag">VEC-01</span><span class="qtext">벡터를 정규화하는 이유는 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>정규화는 방향은 그대로 두고 크기만 1로 맞추는 것인데, 방향만 쓰고 싶은데 크기가 끼어들어 결과를 왜곡하는 걸 막으려고 합니다.</strong></p>
<p>대표적으로 이동에서 문제가 됩니다. 상하좌우 입력은 각각 크기가 1인데, 대각선으로 가려고 두 방향을 더하면 크기가 약 1.41이 됩니다. 이 벡터에 그대로 속도를 곱하면 대각선이 상하좌우보다 1.41배 빨라집니다. 정규화해서 크기를 1로 맞추면 모든 방향의 속도가 같아집니다.</p>
<p>다만 정규화는 안에서 제곱근을 쓰기 때문에 공짜가 아닙니다. 그래서 방향 비교만 필요하고 정확한 단위 길이가 필요 없을 때는 제곱 길이로 비교해서 제곱근을 피하기도 합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>크기가 0인 벡터를 정규화하면요?</q>0으로 나누는 셈이라 정의가 안 됩니다. 그래서 정규화 전에 길이가 0에 가까운지 확인하거나, 유니티의 <code>normalized</code>처럼 0 벡터를 그대로 0으로 돌려주는 안전한 버전을 씁니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q2" aria-label="2번 자신 있음"></label>
<details>
<summary><span><span class="qtag">VEC-02</span><span class="qtext">내적은 무엇이고 어디에 쓰나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>내적은 두 벡터를 곱해 스칼라 하나를 얻는 연산인데, 정규화된 두 벡터라면 그 값이 두 벡터 사이 각의 코사인입니다.</strong></p>
<p>그래서 값이 1이면 같은 방향, 0이면 수직, 마이너스 1이면 정반대입니다. 각도를 직접 구하지 않고도 두 방향이 얼마나 같은 쪽을 보는지 바로 알 수 있는 게 핵심입니다.</p>
<p>대표적으로 시야 판정에 씁니다. 적이 시야각 안에 있는지 보려면, 내 전방 벡터와 나에게서 적으로 향하는 방향을 정규화해 내적하고, 그 값이 시야 반각의 코사인보다 크거나 같으면 시야 안입니다. 코사인은 각이 좁을수록 커지니까, 각도로 비교하는 대신 코사인 값끼리 비교하는 겁니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>왜 각도를 직접 안 구하고 코사인으로 비교하나요?</q>각도를 구하려면 역코사인 같은 삼각함수를 써야 하는데 이게 비쌉니다. 내적은 곱셈과 덧셈뿐이라 훨씬 싸고, 어차피 시야 판정은 크다 작다만 보면 되니까 코사인 값 그대로 비교하는 게 효율적입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q3" aria-label="3번 자신 있음"></label>
<details>
<summary><span><span class="qtag">VEC-03</span><span class="qtext">외적은 무엇을 알려주나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>외적은 두 벡터에 동시에 수직인 벡터를 만드는 연산이라, 두 벡터가 이루는 평면의 법선 방향을 얻거나 부호로 좌우를 판별하는 데 씁니다.</strong></p>
<p>결과 벡터의 크기는 두 벡터가 만드는 평행사변형의 넓이이고, 방향은 두 벡터 모두에 수직입니다. 그래서 표면의 법선을 구할 때 씁니다.</p>
<p>좌우 판별도 됩니다. 적이 내 왼쪽인지 오른쪽인지는 내 전방 벡터와 적 방향 벡터를 외적한 결과의 부호로 봅니다. 2D에서는 외적이 스칼라 하나로 나와 그 부호가 곧 회전 방향이고, 3D에서는 외적 벡터의 위쪽 축 성분 부호를 봅니다. 다만 부호와 좌우의 대응은 좌표계의 손잡이와 곱하는 순서에 따라 뒤집힙니다. 순서를 바꾸면 부호가 반대가 되니까, 실제로는 프로젝트에서 한 번 방향을 확인하고 씁니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>내적과 외적을 언제 각각 쓰나요?</q>두 방향이 얼마나 같은 쪽을 보는지, 즉 앞이냐 뒤냐를 알고 싶으면 내적을 쓰고, 어느 쪽으로 돌아야 하는지, 즉 왼쪽이냐 오른쪽이냐를 알고 싶으면 외적을 씁니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q4" aria-label="4번 자신 있음"></label>
<details>
<summary><span><span class="qtag">VEC-04</span><span class="qtext">부호 있는 각도는 어떻게 구하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>내적만으로는 두 벡터 사이 각의 크기는 알아도 어느 쪽으로 돌아야 하는지는 모르기 때문에, 외적을 함께 써서 방향까지 담은 부호 있는 각도를 구합니다.</strong></p>
<p>내적으로 얻는 코사인은 0도에서 180도 사이라 부호가 없어서, 목표가 왼쪽에 있든 오른쪽에 있든 같은 각도가 나옵니다. 방향 정보는 외적이 줍니다. 그래서 외적으로 얻은 값을 사인 성분처럼, 내적으로 얻은 값을 코사인 성분처럼 놓고 <code>Atan2(외적, 내적)</code>에 넣으면 마이너스 180도에서 180도까지 부호 있는 각도가 나옵니다.</p>
<p>유니티라면 <code>Vector3.SignedAngle</code>이 이걸 해주는데, 3D에서는 어느 축을 기준으로 도는지 정해야 해서 기준 축을 함께 넘깁니다. 적을 향해 몇 도를 어느 방향으로 돌려야 하는지를 이 값으로 정합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>2D와 3D에서 뭐가 다른가요?</q>2D는 외적이 스칼라 하나라 그 부호가 바로 회전 방향이 됩니다. 3D는 외적이 벡터라, 그 벡터가 기준 축과 같은 쪽을 보는지 반대인지를 내적으로 따져서 부호를 정합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q5" aria-label="5번 자신 있음"></label>
<details>
<summary><span><span class="qtag">VEC-05</span><span class="qtext">벡터 투영으로 벽 슬라이딩을 어떻게 구현하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>벽에 부딪힌 속도에서 벽을 파고드는 성분만 빼면, 벽을 따라 미끄러지는 속도가 남습니다.</strong></p>
<p>벽의 법선 벡터를 정규화해두면, 속도와 법선을 내적한 값이 속도 중 벽을 파고드는 성분의 크기입니다. 여기에 법선을 다시 곱하면 그 성분을 벡터로 만든 것이고, 원래 속도에서 이걸 빼면 벽과 평행한 성분만 남습니다. 식으로는 <code>v - (v·n)n</code>입니다. 각도를 구해 다시 만드는 게 아니라 벡터 연산 한 줄로 바로 나옵니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>경사면에서 미끄러지는 것도 같은 원리인가요?</q>네, 똑같습니다. 중력 벡터에서 경사면 법선 방향 성분을 빼면 경사면을 따라 미끄러지는 힘이 남습니다. 벽 슬라이딩과 식이 같고 속도 대신 중력을 넣은 것뿐입니다. 이때 끝에 법선을 다시 곱하는 걸 빠뜨리면 스칼라를 빼는 셈이 돼서 안 됩니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q6" aria-label="6번 자신 있음"></label>
<details>
<summary><span><span class="qtag">VEC-06</span><span class="qtext">반사 벡터는 어떻게 구하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>입사 벡터에서 법선 방향 성분만 반대로 뒤집고, 벽과 평행한 성분은 그대로 두면 반사된 벡터가 됩니다.</strong></p>
<p>정규화된 법선에 대해 입사 벡터와 법선을 내적하면 법선 방향 성분의 크기가 나오는데, 이걸 두 배로 빼주면 그 성분만 부호가 뒤집힙니다. 식으로는 <code>r = d - 2(d·n)n</code>입니다. 공이 벽에 튕기거나 총알이 도탄되는 걸 이 한 줄로 계산합니다. 유니티에는 <code>Vector3.Reflect</code>가 있습니다.</p>
<p>입사각과 반사각이 같다는 성질을, 각도를 재서 다시 만드는 대신 벡터 분해로 바로 얻는 겁니다. 평행 성분은 그대로 두고 수직 성분만 뒤집으니 자연히 각이 같아집니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>왜 2를 곱하나요?</q>법선 방향 성분을 한 번만 빼면 그 성분이 0이 돼서 벽에 딱 붙어 흐르는 벡터가 됩니다. 반사는 붙는 게 아니라 튕겨 나와야 하니까, 한 번 더 빼서 그 성분을 원래의 반대 방향으로 뒤집는 겁니다. 그래서 두 배입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>회전과 쿼터니언</h3><span class="cnt">5문항</span></div>
<p class="grp-note">짐벌 락의 비교 대상은 행렬이 아니라 오일러 각입니다. 여기를 헷갈리면 꼬리질문에서 드러납니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q7" aria-label="7번 자신 있음"></label>
<details>
<summary><span><span class="qtag">ROT-01</span><span class="qtext">오일러 각의 짐벌 락은 왜 생기나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>짐벌 락은 세 축의 회전을 순서대로 적용하다가 두 축이 겹쳐서, 회전 자유도 하나를 잃는 현상입니다.</strong></p>
<p>오일러 각은 먼저 한 축으로 돌리고, 그다음 축, 그다음 축 순으로 차례차례 적용합니다. 그런데 가운데 축이 90도로 서면 첫 번째 축과 세 번째 축이 같은 방향을 가리키게 됩니다. 그러면 두 축을 아무리 돌려도 같은 회전이 나와서, 세 방향으로 자유롭게 돌 수 있어야 하는데 두 방향으로밖에 못 돌게 됩니다.</p>
<p>이 상태에서는 특정 방향으로 회전이 막히거나, 보간할 때 갑자기 홱 돌아가는 문제가 생깁니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>비교 대상이 회전 행렬인가요?</q>아닙니다. 짐벌 락은 오일러 각으로 회전을 표현할 때 생기는 문제라, 비교 대상은 행렬이 아니라 오일러 각입니다. 해결책으로 쿼터니언을 드는 것도 오일러 각의 대안이라는 뜻이지 행렬의 대안이라는 뜻이 아닙니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q8" aria-label="8번 자신 있음"></label>
<details>
<summary><span><span class="qtag">ROT-02</span><span class="qtext">쿼터니언은 왜 쓰나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>쿼터니언은 회전을 네 개의 값으로 한 번에 표현해서, 오일러 각의 짐벌 락 없이 안정적으로 회전을 다루려고 씁니다.</strong></p>
<p>오일러 각이 세 축을 순서대로 돌려 자유도를 잃을 수 있는 것과 달리, 쿼터니언은 어떤 축을 중심으로 얼마만큼 돈다는 걸 통째로 하나의 표현에 담습니다. 순차 적용이 없으니 짐벌 락이 생기지 않습니다.</p>
<p>게다가 두 회전 사이를 부드럽고 일정하게 보간하는 slerp가 되고, 회전을 이어 붙이는 합성도 안정적입니다. 그래서 엔진 내부는 회전을 쿼터니언으로 들고 다닙니다. 대신 네 값이 사람이 직관적으로 읽기 어려워서, 인스펙터에는 보통 오일러 각으로 보여주고 내부에서만 쿼터니언으로 다룹니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>네 값이 그냥 x, y, z 축 회전 각인가요?</q>아닙니다. 회전축을 나타내는 세 값과 회전량에 관련된 한 값의 조합이라, 각 값이 축별 각도인 오일러 각과는 다릅니다. 그래서 쿼터니언 값을 손으로 직접 세팅하기보다 함수로 만들어 씁니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q9" aria-label="9번 자신 있음"></label>
<details>
<summary><span><span class="qtag">ROT-03</span><span class="qtext">Lerp와 Slerp는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>Lerp는 두 값을 직선으로 잇는 보간이고, Slerp는 원호를 따라 일정한 각속도로 도는 보간입니다.</strong></p>
<p>그래서 위치를 옮길 때는 직선 보간인 Lerp가 맞고, 회전이나 방향을 다룰 때는 Slerp가 맞습니다. 회전을 Lerp로 하면 두 회전을 직선으로 가로질러서 중간에 각속도가 들쭉날쭉해지고, 결과가 단위 길이에서 벗어나 재정규화도 필요해집니다.</p>
<p>Slerp는 원호를 따라 도느라 계산이 조금 더 무겁습니다. 그래서 회전 각도가 아주 작을 때는 티가 안 나서, 가볍게 Lerp로 근사하고 정규화만 해주기도 합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>위치를 Slerp하면 어떻게 되나요?</q>두 점을 직선이 아니라 원점을 중심으로 한 원호를 따라 이동하게 돼서, 곧게 가야 할 이동이 휘어 버립니다. 그래서 위치는 Lerp를 씁니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q10" aria-label="10번 자신 있음"></label>
<details>
<summary><span><span class="qtag">ROT-04</span><span class="qtext">Slerp와 RotateTowards는 무엇이 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>Slerp는 남은 각의 일정 비율만큼 보간하는 방식이고, RotateTowards는 매 초 정해진 각도 이하로만 회전하도록 속도를 제한하는 방식입니다.</strong></p>
<p><code>Slerp(현재, 목표, t)</code>에서 t는 비율이라, 목표에 가까울수록 조금씩 돌아 부드럽게 감속하지만 회전 속도를 도 단위로 정해줄 수는 없습니다. 반면 <code>RotateTowards(현재, 목표, 최대각)</code>는 이번에 돌 수 있는 최대 각도를 직접 주고, 그걸 넘으면 딱 그만큼에서 멈춥니다. 여기에 <code>Time.deltaTime</code>을 곱하면 프레임률과 무관하게 초당 일정 각도가 보장됩니다.</p>
<p>그래서 포탑이 초당 90도 이하로만 조준을 돌게 하는 것처럼 회전 속도에 상한을 두고 싶으면 RotateTowards가 맞습니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>둘을 어떻게 골라 쓰나요?</q>부드럽게 스르륵 붙는 느낌이 중요하면 Slerp를, 초당 회전 속도에 명확한 상한이 필요하면 RotateTowards를 씁니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q11" aria-label="11번 자신 있음"></label>
<details>
<summary><span><span class="qtag">ROT-05</span><span class="qtext">회전 값을 왜 주기적으로 재정규화하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>부동소수점 계산에는 미세한 오차가 있어서, 회전을 오래 누적하면 크기가 1에서 조금씩 벗어나기 때문에 주기적으로 크기를 1로 되돌립니다.</strong></p>
<p>회전은 물체의 크기를 바꾸면 안 되는 변환인데, 부동소수점은 실수를 정확히 저장하지 못해서 회전을 계속 곱하다 보면 값이 1.001이나 0.998처럼 흘러갑니다. 그러면 물체가 조금씩 커지거나 작아지고, 내적으로 코사인을 구하는 계산도 틀어집니다.</p>
<p>그래서 일정 주기마다 벡터나 쿼터니언의 크기를 다시 1로 맞추는 재정규화를 해서 단위 길이를 유지합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>매번 안 하고 주기적으로 하는 이유는요?</q>정규화도 제곱근이 들어가 공짜가 아니라서, 매 연산마다 하면 낭비입니다. 오차는 조금씩 쌓이니까 일정 주기로만 바로잡아도 충분합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>보간과 부드러운 이동</h3><span class="cnt">5문항</span></div>
<p class="grp-note">"보간이라서 부드럽다"가 아니라 "남은 거리에 비례해 줄어드는 반복이라서"가 정답입니다. 프레임률 의존도 자주 물립니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q12" aria-label="12번 자신 있음"></label>
<details>
<summary><span><span class="qtag">INT-01</span><span class="qtext">Lerp를 매 프레임 반복하면 왜 감속하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>매 프레임 현재 값을 목표를 향해 조금씩 갱신하면, 매번 남은 거리의 일정 비율만큼만 줄기 때문에 목표에 가까울수록 느려지는 감속이 생깁니다.</strong></p>
<p><code>Lerp(현재, 목표, t)</code>를 현재 값을 갱신하며 반복한다고 해봅시다. 이번 프레임엔 남은 거리의 t 비율만큼 가고, 다음 프레임엔 줄어든 남은 거리의 t 비율만큼 갑니다. 남은 거리가 계속 줄어드니 이동량도 계속 줄어 목표 근처에서 스르륵 느려집니다. 보간 함수라서 부드러운 게 아니라, 남은 거리에 비례해 줄어드는 반복이라서 감속인 겁니다.</p>
<p>대신 이 방식은 남은 거리에 비례해서만 줄어드니까 목표에 정확히는 안 닿습니다. 그래서 충분히 가까워지면 목표 값으로 그냥 스냅해서 마무리합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>이게 프레임률에 영향을 받나요?</q>받습니다. 프레임이 많을수록 비율을 곱하는 횟수가 늘어서 더 빨리 붙습니다. 그래서 이대로 두면 사양에 따라 움직임이 달라지고, deltaTime을 곱해 보정하지만 그것도 근사입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q13" aria-label="13번 자신 있음"></label>
<details>
<summary><span><span class="qtag">INT-02</span><span class="qtext">MoveTowards와 Lerp는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>MoveTowards는 매번 일정한 거리만큼 다가가 목표에 정확히 도달하고, Lerp는 쓰는 방식에 따라 일정 속도가 되기도 감속이 되기도 합니다.</strong></p>
<p><code>MoveTowards(현재, 목표, 최대이동)</code>는 이번에 갈 거리를 직접 정하고 목표를 지나치지 않게 잘라주기 때문에, 일정한 속도로 가서 정확히 멈춥니다. Lerp는 다릅니다. t를 0에서 1로 직접 선형으로 올리면 일정 속도로 정확히 도달하지만, 매 프레임 현재 값을 넣고 t에 작은 값을 주면 남은 거리에 비례해 줄어드는 감속이 돼서 목표에 영영 정확히는 안 닿습니다.</p>
<p>그래서 일정 속도로 정확히 도착시키려면 MoveTowards, 목표 근처에서 부드럽게 감속시키려면 Lerp를 반복하는 방식을 씁니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q14" aria-label="14번 자신 있음"></label>
<details>
<summary><span><span class="qtag">INT-03</span><span class="qtext">카메라의 스무스 팔로우가 사양에 따라 다르게 움직이는 이유는 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>매 프레임 Lerp로 따라가게 하면 프레임 수만큼 비율을 반복해 곱하는 지수 감쇠가 돼서, 프레임률이 높을수록 더 빨리 따라붙습니다.</strong></p>
<p>스무스 팔로우는 보통 <code>Lerp(현재, 목표, t)</code>를 매 프레임 반복하는데, 이건 매 프레임 남은 거리를 일정 비율로 줄이는 겁니다. 고사양에서 초당 프레임이 두 배면 그만큼 더 많이 곱해 더 빨리 붙고, 저사양에서는 느리게 붙어서, 같은 코드인데 사양마다 카메라 반응이 달라집니다.</p>
<p>deltaTime을 곱하면 개선되지만 지수 특성 때문에 완전하진 않습니다. 프레임률에 정확히 독립적이려면 지수 감쇠를 제대로 반영한 보정을 쓰거나, 뒤에 나올 SmoothDamp처럼 시간 기반으로 도는 방식을 씁니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>왜 지수 감쇠가 되나요?</q>매 프레임 남은 거리에 일정 비율을 곱하는 걸 반복하는 게 곧 지수적으로 줄이는 것이기 때문입니다. 그래서 곱하는 횟수, 즉 프레임 수에 결과가 좌우됩니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q15" aria-label="15번 자신 있음"></label>
<details>
<summary><span><span class="qtag">INT-04</span><span class="qtext">SmoothDamp는 무엇이고 왜 쓰나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>SmoothDamp는 목표를 향해 임계 감쇠 스프링처럼 부드럽게 따라가는 함수라, 튐 없이 자연스럽게 가속하고 감속하며 정착합니다.</strong></p>
<p>현재 속도를 상태로 계속 들고 다니면서, 목표에 가까워지면 스스로 속도를 줄여 오버슛 없이 안착합니다. 그리고 목표에 도달하기까지 걸릴 시간을 직접 지정하기 때문에, Lerp 반복이 프레임률에 흔들리던 것과 달리 사양이 달라도 같은 시간에 붙습니다.</p>
<p>그래서 카메라가 캐릭터를 따라가거나 UI가 부드럽게 이동하는 데 흔히 씁니다. 목표가 계속 움직여도 자연스럽게 따라갑니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>Lerp 반복 대신 이걸 쓰는 이유가 뭔가요?</q>도달 시간을 지정할 수 있어 프레임률과 무관하고, 속도를 상태로 들고 다녀서 목표가 갑자기 바뀌어도 튀지 않고 부드럽게 이어지기 때문입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q16" aria-label="16번 자신 있음"></label>
<details>
<summary><span><span class="qtag">INT-05</span><span class="qtext">베지어 곡선은 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>베지어 곡선은 제어점 몇 개로 곡선의 모양을 조종하는 방식입니다.</strong></p>
<p>3차 베지어라면 시작점과 끝점이 있고, 그 사이를 끌어당기는 제어점 두 개가 있습니다. 곡선은 제어점 쪽으로 휘어지지만 제어점에 실제로 닿지는 않습니다. 내부적으로는 두 점 사이 직선 보간을 여러 겹 중첩하면 곡선이 나오는 방식이라, 점 몇 개로 부드러운 곡선을 얻습니다.</p>
<p>직선 보간과 달리 곡률과 자연스러운 가감속을 표현할 수 있어서 이동 경로나 카메라 궤도, 애니메이션 감속 곡선에 씁니다. 여러 개를 이어 붙이면 긴 경로인 스플라인이 됩니다.</p>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>좌표계와 변환</h3><span class="cnt">4문항</span></div>
<p class="grp-note">손잡이와 곱 순서가 결과를 조용히 뒤집습니다. 로컬과 월드를 오가는 감각이 핵심입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q17" aria-label="17번 자신 있음"></label>
<details>
<summary><span><span class="qtag">TRS-01</span><span class="qtext">왼손 좌표계와 오른손 좌표계는 무엇이 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>둘은 세 축이 놓인 방향과 회전의 양의 방향을 정하는 규약이 다른 것이고, 대표적으로 앞쪽을 가리키는 축의 방향이 반대입니다.</strong></p>
<p>오른손 좌표계는 수학이나 OpenGL에서 쓰는 관례이고, 왼손 좌표계는 유니티나 다이렉트X에서 씁니다. 유니티는 왼손에 위쪽이 y축이라, 앞쪽이 화면 안으로 들어가는 방향입니다.</p>
<p>좌표계의 손잡이가 다르면 외적의 부호나 회전의 양의 방향이 뒤집힙니다. 그래서 다른 엔진이나 파일 포맷과 모델이나 애니메이션 데이터를 주고받을 때 축을 변환해주지 않으면, 물체가 뒤집히거나 거울처럼 반전됩니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>이게 실제로 문제되는 경우가 있나요?</q>외부 툴에서 만든 모델을 가져올 때 앞뒤나 좌우가 뒤집혀 들어오는 게 흔한 사례입니다. 임포트 설정에서 축을 맞춰주거나, 한 축의 스케일을 음수로 줘서 반전을 바로잡습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q18" aria-label="18번 자신 있음"></label>
<details>
<summary><span><span class="qtag">TRS-02</span><span class="qtext">행렬 곱 순서가 결과를 바꾸는 이유는 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>행렬 곱은 교환법칙이 성립하지 않아서, 이동과 회전을 어떤 순서로 적용하느냐에 따라 결과가 달라집니다.</strong></p>
<p>제자리에서 도는 회전은 회전을 먼저 하고 이동을 적용하는 순서이고, 어떤 점을 중심으로 도는 공전은 이동을 먼저 하고 회전을 적용하는 순서입니다. 같은 회전과 같은 이동을 써도 순서를 바꾸면 물체가 제자리에서 돌지, 멀리 원을 그리며 돌지가 달라집니다.</p>
<p>회전은 항상 원점을 기준으로 돌기 때문입니다. 물체를 먼저 옮겨 놓고 회전하면 원점에서 떨어진 채로 돌아 공전이 되고, 원점에서 회전부터 하고 옮기면 제자리 회전이 됩니다. 보통 크기, 회전, 이동 순서로 묶어 적용합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>문제에 위치 얘기가 없으면요?</q>그냥 제자리에서 회전만 시키는 경우라면 회전만 적용해도 됩니다. 순서가 문제되는 건 이동이 함께 있을 때입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q19" aria-label="19번 자신 있음"></label>
<details>
<summary><span><span class="qtag">TRS-03</span><span class="qtext">TransformPoint와 InverseTransformPoint는 무엇에 쓰나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>둘은 로컬 좌표와 월드 좌표를 서로 바꾸는 함수입니다.</strong></p>
<p><code>TransformPoint</code>는 로컬 좌표를 월드 좌표로 바꿉니다. 캐릭터 기준으로 정해둔 총구 위치를 세계 좌표로 바꿔서, 거기서 총알을 스폰하거나 이펙트를 띄울 때 씁니다. <code>InverseTransformPoint</code>는 반대로 월드 좌표를 로컬 좌표로 바꿉니다. 세계 어딘가의 적이 내 기준으로 앞에 있는지 뒤에 있는지, 왼쪽인지 오른쪽인지 판단할 때 씁니다.</p>
<p>내부적으로는 부모의 회전과 크기까지 반영한 변환 행렬과 그 역행렬을 곱하는 거라, 부모를 따라 회전하거나 스케일된 것도 자동으로 반영됩니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>위치가 아니라 방향을 바꿀 때도 같은 걸 쓰나요?</q>방향 벡터는 위치가 아니라서 이동 성분이 끼면 안 됩니다. 그래서 방향에는 이동을 무시하고 회전만 적용하는 <code>TransformDirection</code>을 씁니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q20" aria-label="20번 자신 있음"></label>
<details>
<summary><span><span class="qtag">TRS-04</span><span class="qtext">Atan과 Atan2는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>Atan은 기울기 하나만 받아 방향을 절반밖에 구분 못 하고, Atan2는 세로와 가로 성분을 각각 부호까지 받아 네 방향을 모두 구분합니다.</strong></p>
<p><code>Atan</code>은 세로를 가로로 나눈 비율 하나를 받는데, 나누는 순간 두 값의 부호가 뭉개져서 정반대 방향을 구별하지 못합니다. 값의 범위도 마이너스 90도에서 90도뿐이고, 가로가 0이면 0으로 나눠 터집니다. 반면 <code>Atan2</code>는 세로와 가로를 따로 받아 각각의 부호를 살리기 때문에, 마이너스 180도에서 180도까지 모든 사분면을 정확히 구분합니다.</p>
<p>그래서 어떤 방향 벡터가 향하는 각도를 구할 때는 거의 항상 Atan2를 씁니다. 적을 바라보는 각도나 조이스틱 입력 방향을 각도로 바꿀 때가 대표적입니다.</p>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>충돌 판정</h3><span class="cnt">7문항</span></div>
<p class="grp-note">분리축 하나로 AABB부터 볼록 다각형까지 이어지고, 거리 비교는 제곱으로 제곱근을 피합니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q21" aria-label="21번 자신 있음"></label>
<details>
<summary><span><span class="qtag">COL-01</span><span class="qtext">AABB 충돌은 어떻게 판정하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>축에 정렬된 두 사각형은 모든 축에서 겹칠 때만 충돌이고, 한 축이라도 틈이 있으면 충돌이 아닙니다.</strong></p>
<p>각 축마다 두 상자의 범위가 겹치는지 봅니다. 한 상자의 오른쪽 끝이 다른 상자의 왼쪽 끝보다 왼쪽에 있으면, 그 축에 틈이 있는 거라 충돌이 아닙니다. x축, y축, 필요하면 z축까지 전부 겹쳐야 충돌입니다.</p>
<p>검사할 축이 좌표축뿐이라 비교가 몇 번으로 끝나서 아주 빠릅니다. 그래서 정밀한 충돌 검사 전에 대략 걸러내는 1차 검사로도 많이 씁니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>왜 하나라도 틈이 있으면 바로 충돌이 아닌가요?</q>어느 한 축에 두 도형을 갈라놓는 틈이 있다는 건, 그 방향에서 보면 둘이 떨어져 있다는 뜻이기 때문입니다. 그래서 나머지 축을 볼 것도 없이 즉시 충돌이 아니라고 끝낼 수 있습니다. 이게 분리축 정리의 기본 아이디어입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q22" aria-label="22번 자신 있음"></label>
<details>
<summary><span><span class="qtag">COL-02</span><span class="qtext">회전한 사각형이나 볼록 다각형의 충돌은 어떻게 판정하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>분리축 정리를 씁니다. 두 볼록 도형을 어떤 축에 투영했을 때 겹치지 않는 축이 하나라도 있으면 충돌이 아닙니다.</strong></p>
<p>축에 정렬된 상자는 검사 축이 좌표축뿐이라 간단했지만, 회전한 상자나 볼록 다각형은 각 변에 수직인 방향들을 후보 축으로 삼아 전부 검사합니다. 각 축에 두 도형을 투영해서 겹치는지 보고, 한 축이라도 틈이 있으면 그 즉시 충돌이 아니라고 끝냅니다.</p>
<p>도형이 볼록해야 쓸 수 있어서, 오목한 도형은 여러 볼록 조각으로 나눠 각각 검사합니다. 후보 축을 다 검사해야 하지만 틈을 하나 찾으면 바로 멈추니까 대부분 빨리 끝납니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q23" aria-label="23번 자신 있음"></label>
<details>
<summary><span><span class="qtag">COL-03</span><span class="qtext">원 두 개의 충돌은 어떻게 판정하고, 왜 제곱 거리를 쓰나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>두 원은 중심 사이 거리가 두 반지름의 합보다 작으면 충돌인데, 거리를 그대로 구하지 않고 양변을 제곱해서 비교합니다.</strong></p>
<p>두 점 사이 거리를 구하려면 제곱근이 필요한데, 제곱근은 계산이 비쌉니다. 그런데 거리가 반지름 합보다 작은지만 보면 되니까, 양변을 제곱해서 거리의 제곱이 반지름 합의 제곱보다 작은지를 비교하면 결과는 같으면서 제곱근을 피할 수 있습니다.</p>
<p>그래서 유니티에서도 거리의 제곱을 주는 <code>sqrMagnitude</code>로 비교합니다. 충돌 검사는 매 프레임 수없이 도니까 이 작은 절약이 쌓여서 크게 차이 납니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>거리 값을 직접 비교해야 할 때도 있지 않나요?</q>실제 거리 값 자체가 필요할 때, 예를 들어 거리에 비례해 소리 크기를 줄일 때는 제곱근을 써야 합니다. 크다 작다만 보는 비교에서만 제곱 거리로 제곱근을 피하는 겁니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q24" aria-label="24번 자신 있음"></label>
<details>
<summary><span><span class="qtag">COL-04</span><span class="qtext">캡슐 충돌은 어떻게 판정하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>캡슐은 선분을 반지름만큼 부풀린 도형이라, 캡슐 충돌은 두 선분 사이 최단 거리가 반지름 합보다 작은지로 판정합니다.</strong></p>
<p>먼저 점에서 선분까지의 최단 거리를 구하는 게 기본인데, 점을 선분에 투영한 위치가 선분 안이면 그 수직 거리가 최단이고, 선분을 벗어나면 가까운 끝점까지가 최단입니다. 캡슐끼리라면 두 축 선분 사이 최단 거리를 구해서, 그게 두 반지름의 합보다 작으면 충돌입니다.</p>
<p>결국 원 충돌을 점에서 선분으로 확장한 것뿐이라, 구와 캡슐이든 캡슐과 캡슐이든 전부 두 축 사이 최단 거리와 반지름 합의 비교로 환원됩니다. 여기서도 거리를 제곱으로 비교하면 제곱근을 피합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>캐릭터 충돌에 왜 캡슐을 많이 쓰나요?</q>사람 형태를 감싸기 좋고, 모서리가 없어 계단이나 턱에 걸리지 않고 부드럽게 미끄러지기 때문입니다. 판정도 선분과 반지름만 있으면 돼서 가볍습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q25" aria-label="25번 자신 있음"></label>
<details>
<summary><span><span class="qtag">COL-05</span><span class="qtext">광선과 구의 충돌은 어떻게 판정하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>광선의 방정식을 구의 방정식에 대입하면 t에 대한 이차방정식이 나오고, 그 판별식의 부호로 충돌 여부를 가립니다.</strong></p>
<p>광선은 시작점에서 방향으로 t만큼 나아가는 점들로 나타냅니다. 이걸 구의 방정식에 넣으면 t에 대한 이차식이 되는데, 판별식이 음수면 광선이 구를 빗나간 것이고, 0이면 스치듯 한 점에서 접하고, 양수면 뚫고 지나가 두 점에서 만납니다. t는 시작점에서의 거리이기도 해서 충돌 지점까지 거리도 같이 나옵니다.</p>
<p>다만 t가 음수인 해는 광선의 뒤쪽이라 실제 충돌이 아닙니다. 그래서 t가 0 이상인 해만 유효한 충돌로 봅니다. 마우스로 물체를 클릭해 고르거나 총알의 명중을 판정하는 레이캐스트가 이 원리입니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q26" aria-label="26번 자신 있음"></label>
<details>
<summary><span><span class="qtag">COL-06</span><span class="qtext">충돌을 감지한 다음에는 어떻게 튕겨내나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>충돌을 감지한 뒤에는 충돌 법선 방향으로 두 물체의 상대 속도에 순간적인 힘인 임펄스를 가해서 두 물체의 속도를 갱신합니다.</strong></p>
<p>얼마나 튕길지는 반발 계수로 정합니다. 반발 계수가 1이면 완전 탄성이라 운동 에너지가 그대로 보존돼 잘 튀고, 0이면 완전 비탄성이라 붙어서 같이 움직입니다. 그 사이 값이면 부딪히며 조금씩 에너지를 잃습니다.</p>
<p>그리고 무거운 물체가 덜 밀리도록, 임펄스를 질량의 역수에 비례해 나눠 줍니다. 그래서 가벼운 공이 벽에 부딪히면 공만 튕겨 나가고 벽은 거의 안 움직입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>감지와 응답은 다른 단계인가요?</q>네, 다릅니다. 앞서 얘기한 분리축이나 거리 비교는 충돌했는지를 알아내는 감지 단계이고, 임펄스와 반발 계수는 감지한 다음 어떻게 반응할지를 정하는 응답 단계입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q27" aria-label="27번 자신 있음"></label>
<details>
<summary><span><span class="qtag">COL-07</span><span class="qtext">무게중심 좌표는 무엇이고 어디에 쓰나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>무게중심 좌표는 삼각형 안의 한 점을 세 꼭짓점의 가중치 세 개로 나타내는 방식이고, 세 가중치의 합은 1입니다.</strong></p>
<p>세 가중치가 모두 0 이상이면 그 점이 삼각형 안에 있는 것이고, 하나라도 음수면 밖입니다. 그래서 점이 삼각형 안에 있는지 판정하는 데 씁니다.</p>
<p>같은 가중치로 세 꼭짓점의 색이나 UV, 법선을 섞으면 삼각형 표면 위의 값이 부드럽게 보간됩니다. 화면에 삼각형을 채우는 래스터화가 이 방식으로 픽셀 색을 정하고, 광선이 삼각형에 맞은 지점의 정보를 구하는 데도 씁니다.</p>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>물리와 게임 수학</h3><span class="cnt">5문항</span></div>
<p class="grp-note">속도를 먼저 갱신하고 위치를 옮기는 오일러 적분이 뿌리입니다. deltaTime과 고정 스텝을 엮어서 물어봅니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q28" aria-label="28번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PHY-01</span><span class="qtext">포물선 운동은 어떻게 구현하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>매 프레임 속도에 중력을 더하고 그 속도로 위치를 옮기면, 궤적이 자연스럽게 포물선이 됩니다.</strong></p>
<p>수평 방향은 힘이 없어서 속도가 일정한 등속이고, 수직 방향은 중력이라는 일정한 가속도가 매 프레임 속도를 조금씩 바꿉니다. 변해가는 속도로 위치를 옮기니까 곧게 가지 않고 휘어서 포물선이 그려집니다.</p>
<p>이건 속도를 먼저 갱신하고 그 속도로 위치를 옮기는 오일러 적분과 같습니다. 실제로 던지기, 점프, 발사체가 다 이 방식으로 움직입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>dt를 왜 곱하나요?</q>중력이나 속도는 초당 값이라, 이번 프레임에 실제로 얼마나 변할지는 이번 프레임에 걸린 시간을 곱해야 나옵니다. 안 곱하면 프레임률에 따라 중력이 세지거나 약해집니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q29" aria-label="29번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PHY-02</span><span class="qtext">세미 임플리싯 오일러와 베를레 적분은 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>세미 임플리싯 오일러는 속도를 먼저 갱신하고 그 새 속도로 위치를 옮기는 방식이고, 베를레는 속도를 직접 들지 않고 현재와 이전 위치의 차이로 다음 위치를 추정하는 방식입니다.</strong></p>
<ul>
<li><strong>명시적 오일러.</strong> 옛 속도로 위치부터 갱신하는 가장 단순한 방식인데, 에너지가 새어 나가 시간이 지나면 발산하기 쉽습니다.</li>
<li><strong>세미 임플리싯 오일러.</strong> 속도를 먼저 갱신하고 그 새 속도로 위치를 옮깁니다. 발산을 억제해 안정적이라 게임 물리의 기본으로 씁니다.</li>
<li><strong>베를레.</strong> 속도를 직접 들지 않고 현재와 이전 위치의 차이로 다음 위치를 추정합니다. 에너지 보존이 좋고, 천이나 로프처럼 거리 제약을 반복해 맞추는 물리에 잘 맞습니다.</li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q30" aria-label="30번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PHY-03</span><span class="qtext">드래그를 넣으면 왜 종단 속도에 수렴하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>공기 저항은 속도에 비례해서 반대 방향으로 작용하기 때문에, 빨라질수록 저항이 커지다가 중력과 균형을 이루는 지점에서 더는 안 빨라집니다.</strong></p>
<p>매 스텝 속도에 1보다 조금 작은 값을 곱하는 식으로 저항을 근사하면 속도가 지수적으로 줄어드는 효과가 납니다. 여기에 중력 같은 일정한 힘이 계속 더해지면, 저항으로 줄어드는 양과 중력으로 늘어나는 양이 같아지는 속도에서 멈춰 수렴하는데 이게 종단 속도입니다.</p>
<p>다만 이번 프레임 시간이 너무 크면 속도에 곱하는 계수가 음수가 돼서 속도가 거꾸로 뒤집힐 수 있습니다. 그래서 저항이 크거나 프레임이 튈 때는 물리 스텝을 잘게 나눠야 안정적입니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q31" aria-label="31번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PHY-04</span><span class="qtext">물리를 왜 고정 시간 간격으로 돌리나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>가변 프레임률로 물리를 적분하면 프레임마다 시간 간격이 달라져 결과가 재현되지 않고, 간격이 크면 빠른 물체가 벽을 뚫는 터널링도 생기기 때문에 물리는 고정 간격으로 돌립니다.</strong></p>
<p>유니티라면 렌더링은 매 프레임 도는 <code>Update</code>에서, 물리는 일정한 간격으로 도는 <code>FixedUpdate</code>에서 처리합니다. 물리 스텝을 고정하면 같은 입력에 항상 같은 결과가 나와 재현성이 생기고, 큰 간격에서 물체가 한 번에 너무 많이 움직여 충돌을 건너뛰는 것도 막습니다. 렌더 프레임과 물리 스텝이 어긋나는 사이는 보간으로 메웁니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>Time.deltaTime은 그럼 뭔가요?</q>직전 프레임에서 지금까지 걸린 시간입니다. 속도에 이 값을 곱하면 이번 프레임의 이동 거리가 나와서, 고프레임은 조금씩 자주, 저프레임은 많이 가끔 움직여 1초 동안 총 이동량이 같아집니다. 안 곱하면 프레임당 고정 거리가 돼서 60프레임이 30프레임의 두 배로 움직입니다. 프레임률의 역수가 아니라 한 프레임에 걸린 시간 간격이라는 게 정확한 정의입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q32" aria-label="32번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PHY-05</span><span class="qtext">sin 함수로 물체를 부유시키면 왜 부드러운가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>기준 높이에 사인 값을 진폭만큼 더해 위아래로 흔들면 부드럽게 떠다니는데, 단순히 주기적이어서가 아니라 곡선이 이어지고 꼭대기와 바닥에서 속도가 0으로 감속했다 다시 가속하기 때문입니다.</strong></p>
<p><code>y = baseY + amplitude * Mathf.Sin(Time.time * frequency)</code> 형태로, 시간이 흐르면 사인 값이 마이너스 1과 1 사이를 오가며 물체가 위아래로 움직입니다. 톱니파도 주기적이지만 꺾이는 지점에서 뚝 끊겨 부자연스러운 반면, 사인은 매끄럽게 이어지고 양 끝에서 자연히 느려졌다 빨라져서 부드럽습니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>여러 개를 원형으로 배치할 때도 삼각함수를 쓰지 않나요?</q>씁니다. i번째를 반지름 곱하기 코사인과 반지름 곱하기 사인 위치에 놓고, 각을 전체 개수로 균등하게 나누면 원 둘레에 같은 간격으로 배치됩니다. 단위원 위에서 각이 정해진 점의 좌표가 코사인과 사인이라는 정의를 그대로 쓴 겁니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>상황형 문제 해결</h3><span class="cnt">5문항</span></div>
<p class="grp-note">정답보다 접근 순서를 봅니다. 값을 찍어 원인을 좁힌 뒤 수학·물리 개념으로 설명하세요.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q33" aria-label="33번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-01</span><span class="qtext">캐릭터가 대각선으로 이동하면 상하좌우보다 빠릅니다. 원인과 해결은 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>대각선 방향 벡터의 크기가 1이 아니라 약 1.41이라, 여기에 속도를 곱하면 대각선만 그만큼 빨라지는 겁니다.</strong></p>
<p>상하좌우 입력은 각각 크기가 1인 벡터인데, 대각선은 두 입력을 더한 거라 크기가 약 1.41이 됩니다. 이동은 보통 방향에 속도와 시간을 곱하는데, 방향의 크기가 크면 그만큼 더 멀리 갑니다. 그래서 대각선이 빨라집니다.</p>
<p>해결은 입력으로 만든 이동 방향을 정규화해 크기를 1로 맞춘 뒤 속도를 곱하는 겁니다. 측정으로는 대각선일 때 이동 벡터의 크기를 찍어 보면 1.41이 나와 바로 확인됩니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q34" aria-label="34번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-02</span><span class="qtext">빠르게 나는 총알이 얇은 벽을 그냥 통과해 버립니다. 원인과 해결은 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>이건 터널링인데, 한 프레임에 총알이 벽 두께보다 더 멀리 이동해서 어느 프레임에도 벽 안에 있지 않아 충돌 검사에 안 걸리는 겁니다.</strong></p>
<p>충돌 검사는 매 프레임 그 순간의 위치로만 겹치는지 봅니다. 그런데 프레임 간격이 크거나 물체가 아주 빠르면, 이전 프레임엔 벽 앞, 다음 프레임엔 벽 뒤에 있어서 둘 다 겹치지 않습니다. 물체가 벽을 건너뛴 거죠.</p>
<p>해결은 먼저 물리 스텝을 고정하고 잘게 나눠 한 프레임 이동량을 줄이는 게 기본이고, 근본적으로는 이전 위치에서 현재 위치까지를 선분으로 보고 그 경로가 벽을 지나쳤는지 검사하는 연속 충돌 감지를 씁니다. 유니티라면 리지드바디의 연속 충돌 옵션이 이걸 해줍니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>원인을 어떻게 확인하나요?</q>통과가 나는 순간 물체의 프레임당 이동 거리와 벽 두께를 비교해 봅니다. 이동 거리가 두께보다 크면 터널링이 원인일 가능성이 높습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q35" aria-label="35번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-03</span><span class="qtext">카메라 따라가기가 고사양에서는 부드럽고 저사양에서는 뚝뚝 끊기며 반응도 다릅니다. 왜일까요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>매 프레임 Lerp로 따라가게 짜면 프레임 수만큼 비율을 곱하는 지수 감쇠라, 프레임률에 따라 따라붙는 속도가 달라지기 때문입니다.</strong></p>
<p>스무스 팔로우를 <code>Lerp(현재, 목표, t)</code> 반복으로 만들면, 고사양에서는 초당 프레임이 많아 더 자주 곱해 빨리 붙고, 저사양에서는 느리게 붙습니다. 같은 코드인데 사양마다 카메라 반응이 달라지는 겁니다.</p>
<p>deltaTime을 곱해 보정하면 나아지지만 지수 특성 때문에 완벽하진 않습니다. 확실하게 하려면 프레임률에 독립적인 감쇠식을 쓰거나, 도달 시간을 지정하는 SmoothDamp로 바꿉니다. 측정으로는 프레임률을 강제로 낮춰서 움직임이 달라지는지 보면 원인이 드러납니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q36" aria-label="36번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-04</span><span class="qtext">물체를 오래 회전시키니 조금씩 커지거나 찌그러집니다. 원인이 무엇일까요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>회전 값을 오래 누적하는 사이에 부동소수점 오차가 쌓여서, 회전을 나타내는 벡터나 쿼터니언의 크기가 1에서 벗어난 겁니다.</strong></p>
<p>회전은 물체의 크기를 바꾸면 안 되는 변환인데, 부동소수점은 실수를 정확히 저장하지 못합니다. 그래서 회전을 계속 곱하다 보면 크기가 1.001이나 0.998처럼 조금씩 흘러가고, 그게 스케일에 반영되면 물체가 커지거나 찌그러집니다.</p>
<p>해결은 주기적으로 회전 값을 다시 크기 1로 맞추는 재정규화입니다. 오일러 각을 직접 누적하기보다 엔진이 관리하는 회전 API를 쓰면 이런 누적 오차를 덜 겪습니다. 측정으로는 회전 값의 크기를 찍어 보면 1에서 벗어나 있는 게 보입니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="math-physics-q37" aria-label="37번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-05</span><span class="qtext">적이 플레이어를 부드럽게 조준하게 하고 싶은데, 방법에 따라 홱 돌거나 너무 굼뜹니다. 어떻게 조율하겠습니까?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>먼저 회전에는 위치용 직선 보간이 아니라 회전용 보간을 써야 하고, 원하는 느낌에 따라 비율 기반 Slerp와 속도 제한 기반 RotateTowards 중에 고릅니다.</strong></p>
<p>오일러 각을 각각 직선 보간하면 짐벌 락이나 축 간섭으로 경로가 일그러져 홱 돕니다. 회전은 쿼터니언 기반 보간으로 다뤄야 합니다. 그다음, <code>Slerp(현재, 목표, t)</code>는 남은 각의 비율만큼 도는 거라 목표에 가까울수록 부드럽게 감속하지만 회전 속도에 상한을 둘 수는 없습니다. 반면 <code>RotateTowards</code>에 초당 최대 각도와 deltaTime을 주면 그 속도를 넘지 않게 제한됩니다.</p>
<p>그래서 포탑이 초당 몇 도 이하로만 돌아야 한다는 제약이 있으면 RotateTowards로 상한을 두고, 그냥 스르륵 붙는 느낌이면 Slerp를 씁니다. 너무 굼뜨면 비율이나 최대 각도를 키우고, 홱 돌면 줄여서 조율합니다.</p>
</div>
</div>
</details>
</div>
</section>
<section class="close">
<h3>면접 당일 체크리스트</h3>
<ul>
<li><strong>공식은 "무슨 성분을 빼고 더하는지"로 설명하세요.</strong> 벽 슬라이딩이든 반사든, 외운 식을 읊는 것보다 법선 성분을 어떻게 다루는지 말하면 이해한 게 드러납니다.</li>
<li><strong>결론 먼저, 그다음 이유와 트레이드오프.</strong> 한 문장으로 정의하고 시작하면 흐름이 잡힙니다.</li>
<li><strong>단정하지 마세요.</strong> 좌우 부호나 좌표계 손잡이는 프로젝트마다 다를 수 있으니 "일반적으로는 ~지만 확인이 필요합니다"가 안전합니다.</li>
<li><strong>상황형은 측정부터.</strong> 값을 찍어 원인을 좁힌 뒤 개념으로 설명하는 태도를 앞에 두세요.</li>
</ul>
</section>
</div>
<div class="field" data-field="graphics" hidden>
<p class="note"><strong>답변 프레임.</strong> 정의 한 문장으로 결론 먼저 → 왜 그렇게 동작·설계됐는지 → 트레이드오프(꼬리질문의 90%가 여기를 찌릅니다) → 필요하면 실제 예시 한 줄. 단정("절대 안 됩니다")은 반례 하나로 무너지니 "일반적으로 ~지만 ~한 경우엔 다릅니다"로.</p>
<div class="bar">
<span class="prog"><b class="prog-done">0</b> / <span class="prog-total">39</span> 자신 있음</span>
<span class="bar-sp"></span>
<button class="tool tool-open" type="button">모두 펼치기</button>
<button class="tool tool-hide" type="button" aria-pressed="false">체크 숨기기</button>
<button class="tool tool-reset" type="button">초기화</button>
</div>
<section class="grp">
<div class="grp-head"><h3>좌표 변환 파이프라인</h3><span class="cnt">5문항</span></div>
<p class="grp-note">3D 점 하나가 화면 픽셀이 되기까지의 좌표계 릴레이. "왜 이 단계가 필요한가"를 파고듭니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q1" aria-label="1번 자신 있음"></label>
<details>
<summary><span><span class="qtag">GFX-01</span><span class="qtext">3D 정점 하나가 화면 픽셀이 되기까지 어떤 좌표 변환을 거치나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>로컬 좌표에서 시작해 월드, 카메라, 클립 좌표로 갈아탄 다음, 나눗셈을 거쳐 화면 픽셀이 됩니다.</strong></p>
<p>먼저 모델 변환이 로컬 좌표를 월드의 실제 위치와 회전, 크기로 배치하고, 그다음 뷰 변환이 카메라 기준으로 옮기고, 투영 변환이 시야 공간을 표준 정육면체로 폅니다. 정점 셰이더는 이 세 행렬을 하나로 곱해둔 MVP 행렬로 정점마다 한 번에 처리합니다.</p>
<p>왜 세 단계로 나누냐면, 각 단계를 독립적으로 바꿔 쓰려는 겁니다. 카메라만 움직이면 뷰 행렬만, 오브젝트만 움직이면 모델 행렬만 갈아끼우면 되니까요.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>왜 하필 행렬인가요?</q>회전과 크기, 이동을 4곱하기4 행렬 곱 하나에 다 담을 수 있어서입니다. 그러면 GPU가 정점마다 똑같은 곱셈 한 번만 반복하면 돼서, 수만 개 정점을 병렬로 처리하기에 딱 맞습니다.</span></li>
<li><span><q>MVP를 정점마다 다시 곱하나요?</q>아닙니다. 세 행렬을 CPU에서 한 번 곱해 MVP 하나로 만들어 넘기고, 정점 셰이더는 그 합쳐진 행렬만 곱합니다. 정점마다 세 번 곱하면 낭비니까요.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q2" aria-label="2번 자신 있음"></label>
<details>
<summary><span><span class="qtag">GFX-02</span><span class="qtext">뷰 변환은 왜 카메라를 원점으로 옮기나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>뒷단계인 투영과 클리핑, 래스터화를 카메라 위치와 무관한 고정된 공식으로 유지하려는 겁니다.</strong></p>
<p>매 프레임 좌표계를 원점에 정해진 축을 바라보는 표준 자세로 리셋해두면, 뒤 단계는 카메라가 어디 있든 항상 같은 계산만 하면 됩니다. "카메라를 옮긴다"와 "세상을 반대로 민다"는 결국 같은 역행렬 곱이라 연산량도 똑같습니다.</p>
<p>덤으로 카메라 근처 좌표가 0 근처로 당겨져서 float 정밀도가 좋아집니다. 원점이 멀면 먼 곳에서 좌표가 커져 지터가 생기는데 그걸 막아줍니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>뷰 행렬은 어떻게 구하나요?</q>카메라의 월드 변환 행렬의 역행렬입니다. 카메라를 월드에 놓는 변환을 거꾸로 돌리면, 세상을 카메라 기준으로 끌어오는 변환이 되니까요.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q3" aria-label="3번 자신 있음"></label>
<details>
<summary><span><span class="qtag">GFX-03</span><span class="qtext">동차좌표에서 w 성분은 왜 필요한가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>이동을 행렬 곱 하나로 담고, 나중에 원근 나눗셈까지 재활용하려고 붙입니다.</strong></p>
<p>회전과 크기는 3곱하기3 행렬 곱으로 표현되는데, 이동만은 순수한 곱으로 표현이 안 됩니다. 그래서 좌표에 w를 1로 붙여 4곱하기4로 키우면, 회전과 크기와 이동을 전부 한 번의 행렬 곱에 담을 수 있습니다.</p>
<p>그리고 이 w가 투영 뒤에 거리 정보를 담아, 원근 나눗셈에서 원근감을 만드는 데 그대로 쓰입니다. 자리 하나를 추가한 대가로 두 가지를 한꺼번에 해결하는 셈입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>w가 1이 아니게 되는 건 언제인가요?</q>원근 투영을 곱한 다음입니다. 이때 w에 그 점의 카메라 거리가 들어가고, x와 y와 z를 이 w로 나누면 멀리 있는 점이 화면 중앙으로 모여 작아집니다. 직교 투영은 w를 1로 두므로 이 나눗셈이 아무 효과가 없습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q4" aria-label="4번 자신 있음"></label>
<details>
<summary><span><span class="qtag">GFX-04</span><span class="qtext">원근 투영과 직교 투영은 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>시야 공간이 절두체, 그러니까 잘린 피라미드냐, 아니면 직육면체 상자냐가 근본 차이입니다.</strong></p>
<p>원근은 한 눈에서 시선이 퍼져나가서 멀수록 작아 보입니다. 사람 눈과 같아서 3D 시점에 씁니다. 직교는 시선이 평행해서 거리와 상관없이 크기가 그대로입니다. 그래서 UI나 CAD, 아이소메트릭 게임에 씁니다.</p>
<p>계산으로 보면, 원근은 w에 거리가 들어가서 나눗셈으로 먼 곳을 눌러 모으고, 직교는 축마다 스케일과 이동만 하고 w는 1로 고정합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>절두체는 왜 앞뒤가 잘려 있나요?</q>near 평면과 far 평면으로 앞뒤를 자르기 때문입니다. near는 카메라 바로 앞 물체와 0으로 나누는 문제를 막고, far는 무한히 먼 곳까지 렌더하지 않게 하면서 깊이 정밀도를 확보합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q5" aria-label="5번 자신 있음"></label>
<details>
<summary><span><span class="qtag">GFX-05</span><span class="qtext">원근 나눗셈은 무엇이고 파이프라인 어디에서 일어나나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>클립 좌표의 x, y, z를 w로 나눠 표준 좌표계로 만드는 단계인데, 셰이더 밖 고정 기능이 클리핑 뒤에 처리합니다.</strong></p>
<p>모델과 뷰, 투영 행렬 곱은 전부 정점 셰이더 안에서 일어나고, 그 출력은 아직 w가 붙어 있는 클립 좌표입니다. 그다음 w로 나누는 원근 나눗셈은 셰이더 밖에서 벌어집니다. 그래서 셰이더 코드에는 나눗셈이 안 보입니다.</p>
<p>이 나눗셈이 바로 절두체 피라미드를 정육면체로 펴는 수단입니다. 원근에만 붙고, 직교는 이미 상자 모양이라 필요 없습니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>이 나눗셈이 왜 원근감을 만드나요?</q>먼 점일수록 w에 담긴 거리가 커서, 나누면 화면 중앙 쪽으로 더 많이 끌려옵니다. 그래서 같은 크기의 물체라도 멀리 있으면 화면에서 작게 찍히는 거죠.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>정점·래스터화·보간</h3><span class="cnt">5문항</span></div>
<p class="grp-note">삼각형이 픽셀로 바뀌고, 정점 값이 그 사이를 채우는 단계입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q6" aria-label="6번 자신 있음"></label>
<details>
<summary><span><span class="qtag">RAS-01</span><span class="qtext">정점 셰이더와 프래그먼트 셰이더는 각각 무슨 일을 하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>정점 셰이더는 정점당 한 번 좌표를 변환하고, 프래그먼트 셰이더는 픽셀당 한 번 최종 색을 결정합니다.</strong></p>
<p>중요한 건 실행 횟수 차이입니다. 삼각형 하나는 정점이 3개뿐인데 화면에서 수천 픽셀을 덮으니, 프래그먼트 셰이더가 압도적으로 많이 실행됩니다. 그래서 무거운 연산은 되도록 정점 셰이더에 두고 그 결과를 보간해 쓰고, 픽셀 단계를 아끼는 게 최적화의 핵심입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>"픽셀 단계는 비싸다"가 왜 중요한 상식인가요?</q>그래픽스 최적화 기법 상당수가 결국 비싼 프래그먼트 셰이더를 덜 실행하려는 겁니다. 포워드냐 디퓨드냐, Z 프리패스, LOD가 다 가려질 픽셀이나 안 보일 디테일에 픽셀 셰이딩을 낭비하지 않으려는 노력입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q7" aria-label="7번 자신 있음"></label>
<details>
<summary><span><span class="qtag">RAS-02</span><span class="qtext">정점 셰이더는 왜 정점을 새로 만들거나 없앨 수 없나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>입력 정점 하나에 출력 정점 하나가 고정이라서 그렇습니다. GPU가 정점마다 독립된 스레드를 배정해 동시에 돌리기 때문입니다.</strong></p>
<p>각 스레드는 자기 정점 하나만 알고 있어서, 옆에 새 정점을 끼워넣는다는 개념 자체가 없습니다. 게다가 정점 개수를 중간에 바꾸면 스레드끼리 조율이 필요해져서 병렬성이 깨집니다. 출력 개수가 입력 개수와 같아야 뒷단계가 자원을 미리 예약하고, 인덱스 버퍼가 정의한 삼각형 연결도 그대로 유지됩니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>그럼 정점을 늘리는 건 어디서 하나요?</q>테셀레이션과 지오메트리 셰이더, 그리고 요즘의 메시 셰이더 같은 가변 출력 전용 단계가 담당합니다. 다만 개수를 미리 알 수 없는 만큼 그 단계는 더 비쌉니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q8" aria-label="8번 자신 있음"></label>
<details>
<summary><span><span class="qtag">RAS-03</span><span class="qtext">래스터화는 어떤 픽셀을 삼각형 안이라고 판정하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>픽셀의 중심점이 삼각형 안에 있느냐만 봅니다. 얼마나 덮였는지가 아니라 안이냐 밖이냐의 한 점 판정입니다.</strong></p>
<p>안팎은 세 변의 엣지 함수 부호로 정하는데, 이 값이 그대로 보간에 쓰는 무게중심 가중치가 됩니다. 중심 한 점만 보니까 부호 세 번으로 아주 싸고, 한 픽셀을 딱 한 번만 셰이딩하게 됩니다.</p>
<p>대가는 부분적으로만 덮인 경계를 못 봐서 계단 현상이 생기고, 아주 얇은 삼각형은 중심을 못 지나면 통째로 누락된다는 점입니다. 이걸 MSAA가 픽셀당 샘플점을 늘려 완화합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>공유하는 모서리는 어떻게 처리하나요?</q>두 삼각형이 딱 붙어 있는 경계 픽셀을 Top-Left 규칙으로 한쪽에만 넘깁니다. 그래야 그 픽셀이 두 번 그려지거나 아무도 안 그려서 틈이 생기는 일을 막을 수 있습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q9" aria-label="9번 자신 있음"></label>
<details>
<summary><span><span class="qtag">RAS-04</span><span class="qtext">무게중심 보간이 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>삼각형 내부 픽셀의 속성을 세 정점 값의 거리 비중으로 가중 평균하는 겁니다.</strong></p>
<p>속성 값은 정점 3개에만 정해져 있고, 그 사이 픽셀의 값은 어디에도 저장돼 있지 않습니다. 그래서 각 픽셀이 세 정점에 얼마나 가까운지 비중을 매겨, 색이나 UV, 법선을 그 비중대로 섞어 매끄럽게 채웁니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>그 무게는 어디서 나오나요?</q>픽셀이 삼각형 안인지 판정할 때 쓴 엣지 함수 값이 그대로 무게가 됩니다. 안팎 판정과 보간 가중치가 같은 계산에서 한꺼번에 나오는 셈이라 효율적입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q10" aria-label="10번 자신 있음"></label>
<details>
<summary><span><span class="qtag">RAS-05</span><span class="qtext">원근 보정 보간은 왜 필요한가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>화면에서 그냥 선형으로 보간하면, 기울어진 면의 텍스처가 뒤틀리기 때문입니다.</strong></p>
<p>원근 때문에 화면상 딱 중간에 있는 픽셀이 3D에서는 가까운 쪽에 치우쳐 있습니다. 먼 쪽이 화면에 더 촘촘하게 눌려 찍히니까요. 그래서 화면 거리로 UV를 균등하게 나눠주면 먼 쪽 무늬가 늘어나 보입니다.</p>
<p>해결은 속성을 그냥 보간하지 않고, 정점의 값 나누기 w와 1 나누기 w를 보간한 뒤 다시 나눠서 3D 거리 기준으로 되돌리는 겁니다. 이건 하드웨어가 자동으로 해줍니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>왜곡은 항상 생기나요?</q>깊이가 변하는 축에만 생깁니다. 같은 깊이의 가로줄은 w가 일정해서 선형 보간도 정확합니다. 직교 투영은 w가 1로 고정이라 애초에 보정이 필요 없고요.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>텍스처와 매핑</h3><span class="cnt">5문항</span></div>
<p class="grp-note">2D 그림을 3D 표면에 입히는 과정과, 거기서 생기는 문제들입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q11" aria-label="11번 자신 있음"></label>
<details>
<summary><span><span class="qtag">TEX-01</span><span class="qtext">UV 매핑이 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>3D 메시 표면을 2D 텍스처에 펼치려고, 각 정점에 텍스처 좌표를 대응시키는 겁니다.</strong></p>
<p>이 UV 좌표는 텍스처 해상도와 무관하게 0에서 1로 정규화돼 있습니다. 그리고 UV는 정점에만 저장하고, 삼각형 내부 픽셀은 무게중심 보간으로 채웁니다. 그러면 GPU가 각 픽셀에 텍스처의 어느 지점을 가져다 쓸지 알 수 있습니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>언랩과 심은 뭔가요?</q>3D 껍데기를 가위로 잘라 평면에 펴는 게 언랩이고, 그때 잘린 경계선이 심입니다. 심에서는 한 정점이 양쪽 서로 다른 UV를 가져야 해서 정점이 둘로 쪼개집니다.</span></li>
<li><span><q>텍셀과 픽셀은 같은 말인가요?</q>다릅니다. 텍셀은 텍스처의 점이고 픽셀은 화면의 점인데, 이 둘의 대응 비율이 어긋나는 데서 밉맵이나 필터링 문제가 생깁니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q12" aria-label="12번 자신 있음"></label>
<details>
<summary><span><span class="qtag">TEX-02</span><span class="qtext">텍셀 밀도가 무엇이고 왜 신경 쓰나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>실제 3D 표면 단위 면적당 배정된 텍셀 수입니다. UV 언랩이 면적 비율을 그대로 보존하지 않기 때문에 신경 써야 합니다.</strong></p>
<p>텍스처 크기와 UV 정사각형은 고정이라, 텍셀은 한정된 예산입니다. 그래서 얼굴처럼 눈길이 많이 가는 부위는 UV 조각을 실제 비율보다 크게 배치해 텍셀을 몰아주고, 발바닥 같은 데는 줄입니다. 텍스처가 커지는 게 아니라 고정된 예산을 재배분하는 제로섬입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>밀도가 고른지 어떻게 점검하나요?</q>체커보드 텍스처를 씌워서 표면 곳곳의 칸 크기가 균일한지 봅니다. 칸이 큰 곳은 밀도가 낮아 뭉개지고, 작은 곳은 밀도가 높아 선명합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q13" aria-label="13번 자신 있음"></label>
<details>
<summary><span><span class="qtag">TEX-03</span><span class="qtext">텍스처 래핑 모드는 어떻게 다르고, 아틀라스에서 왜 문제가 되나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>UV가 0에서 1 밖으로 나갔을 때 텍셀을 어떻게 정할지의 규칙입니다.</strong></p>
<p>Repeat는 무늬를 타일처럼 반복해서 바닥이나 벽에 쓰고, Clamp는 가장자리 텍셀을 늘려서 이음매나 번짐을 막아 하늘이나 그라디언트에 씁니다. Mirror는 뒤집어 반복해 경계를 매끄럽게 잇습니다. 아틀라스나 타일맵에서 이걸 잘못 고르면 옆 칸이 새어 드는 경계 누출이 생깁니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>경계 누출은 왜 생기나요?</q>카메라가 float으로 움직이면 화면 픽셀이 샘플하는 좌표가 소수 단위로 밀립니다. 그러면 바이리니어 필터가 경계에서 이웃 텍셀, 즉 옆 타일을 물어 섞어버려서 번쩍입니다. 타일 둘레에 패딩을 주거나, 타일을 각각 독립 레이어로 저장하는 텍스처 배열을 쓰면 구조적으로 막힙니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q14" aria-label="14번 자신 있음"></label>
<details>
<summary><span><span class="qtag">TEX-04</span><span class="qtext">밉맵은 왜 필요한가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>멀리 있는 면에서 생기는 지글거림을 막으려고 미리 만들어둔 축소 버전 텍스처입니다.</strong></p>
<p>멀면 한 픽셀이 여러 텍셀을 덮는데, 밉맵 없이 그중 몇 개만 샘플하면 카메라가 조금만 움직여도 찍히는 텍셀이 들쭉날쭉해서 모아레와 지글거림이 생깁니다. 밉맵은 미리 평균 낸 축소본을 거리에 맞게 골라 써서 샘플링을 안정시킵니다. 작은 텍스처라 텍스처 캐시 효율도 좋아집니다.</p>
<p>단점은 축소본들을 다 들고 있어야 해서 메모리가 약 33퍼센트 늘어난다는 겁니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>필터링과는 어떤 관계인가요?</q>Bilinear는 한 텍스처 안에서 주변 네 텍셀을 보간하고, Trilinear는 거기에 더해 인접한 두 밉맵 레벨 사이도 보간해서 레벨이 바뀌는 경계를 부드럽게 만듭니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q15" aria-label="15번 자신 있음"></label>
<details>
<summary><span><span class="qtag">TEX-05</span><span class="qtext">텍스처 압축은 일반 이미지 압축과 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>GPU가 압축된 상태 그대로 직접 샘플링하는 블록 기반 포맷이라는 점이 다릅니다. JPEG처럼 통째로 풀어서 쓰지 않습니다.</strong></p>
<p>블록 단위로 실시간에 디코드하기 때문에, VRAM 사용량과 메모리 대역폭을 크게 줄여줍니다. 데스크톱은 BC 계열을 쓰고 모바일은 ASTC나 ETC를 쓰는데, 플랫폼마다 지원 포맷이 달라서 빌드 타깃별로 골라야 합니다.</p>
<p>손실 압축이라, 노멀맵이나 UI처럼 정확한 값이 중요한 텍스처는 아티팩트에 주의해야 합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>왜 플랫폼마다 포맷이 다른가요?</q>디코드를 하드웨어 회로가 하는데, 그 회로가 지원하는 포맷이 기기마다 다르기 때문입니다. 그래서 같은 텍스처라도 타깃 플랫폼에 맞는 포맷으로 다시 구워 내보냅니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>라이팅과 재질</h3><span class="cnt">5문항</span></div>
<p class="grp-note">표면이 빛을 어떻게 받아 색이 되는지, 그리고 색공간을 다루는 문항입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q16" aria-label="16번 자신 있음"></label>
<details>
<summary><span><span class="qtag">LIT-01</span><span class="qtext">노멀 맵은 어떻게 폴리곤 없이 굴곡을 표현하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>텍스처에 색 대신 법선 방향을 저장해두고, 라이팅할 때 평면의 진짜 법선 대신 그 법선을 쓰는 겁니다.</strong></p>
<p>픽셀마다 법선이 달라지니 <code>dot(N, L)</code> 값이 픽셀 단위로 달라지고, 그래서 밝기가 울퉁불퉁하게 변해 입체로 보입니다. RGB 채널에 법선의 xyz를 담다 보니 노멀 맵이 푸르스름하게 보이는 거고요.</p>
<p>한계는 실루엣과 자기 그림자가 그대로라는 점입니다. 법선만 속였을 뿐 표면은 평평해서, 비스듬히 보면 납작한 게 들통납니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>더 정교한 방법은요?</q>패럴랙스 매핑은 시선 각도만큼 UV를 어긋내 깊이감을 더 흉내 내고, 변위 매핑은 아예 정점을 진짜로 밀어올려 실루엣과 자기 그림자까지 진짜로 만듭니다. 싼 순서로 노멀 맵, 패럴랙스, 릴리프, 변위입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q17" aria-label="17번 자신 있음"></label>
<details>
<summary><span><span class="qtag">LIT-02</span><span class="qtext">디퓨즈 라이팅은 왜 법선과 광원의 내적으로 밝기를 정하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>단위 벡터 두 개의 내적이 사이각의 코사인이라, 빛이 비스듬히 닿을수록 어두워지는 걸 그대로 담기 때문입니다.</strong></p>
<p>밝기를 <code>max(0, dot(N, L))</code>로 계산하는데, 빛이 정면에서 오면 코사인이 1로 최대고, 스칠수록 0에 가까워지고, 뒤에서 오면 음수라 0으로 잘라냅니다. 물리적으로도 빛이 비스듬히 닿으면 같은 양이 더 넓은 면적에 퍼져서, 단위 면적당 에너지가 코사인만큼 줄어듭니다. 이게 람베르트 법칙입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>왜 음수를 0으로 잘라내나요?</q>음수 밝기는 물리적으로 존재하지 않기 때문입니다. 빛을 등진 면은 그 광원의 빛을 아예 못 받으니 기여가 0이어야 맞습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q18" aria-label="18번 자신 있음"></label>
<details>
<summary><span><span class="qtag">LIT-03</span><span class="qtext">스페큘러 하이라이트는 왜 시선 방향에 의존하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>반사광이 눈 쪽으로 튈 때만 보이는 하이라이트라서 그렇습니다.</strong></p>
<p>디퓨즈는 빛이 사방으로 퍼져 나가서 어디서 보든 밝기가 같지만, 스페큘러는 거울 반사에 가까워서 반사된 빛줄기가 마침 내 눈으로 향할 때만 반짝입니다. 그래서 시선 방향 V가 계산에 들어가고, 카메라가 움직이면 하이라이트 위치도 같이 움직입니다. Phong은 반사 벡터와 시선의 내적을, Blinn-Phong은 반벡터와 법선의 내적을 광택도로 거듭제곱해서 구합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>광택도 지수는 뭘 바꾸나요?</q>클수록 하이라이트가 좁고 날카로워져서 매끈한 표면처럼 보이고, 작을수록 넓게 퍼져서 거친 표면처럼 보입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q19" aria-label="19번 자신 있음"></label>
<details>
<summary><span><span class="qtag">LIT-04</span><span class="qtext">PBR이 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>빛 반사를 에너지 보존이나 프레넬 같은 물리 법칙에 맞춰 계산해서, 어떤 조명 아래서도 재질이 일관되게 보이게 하는 방식입니다.</strong></p>
<p>재질을 알베도와 메탈릭, 러프니스로 기술하는 메탈릭·러프니스 워크플로가 표준입니다. 러프니스가 하이라이트가 얼마나 퍼질지를, 메탈릭이 금속이냐 비금속이냐를 가릅니다.</p>
<p>과거엔 아티스트가 조명이 바뀔 때마다 재질 값을 손봐야 했는데, PBR은 재질과 조명이 분리돼서 한 번 만든 재질이 밝은 실외든 어두운 실내든 자연스럽게 통합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>큐브맵과 IBL은 여기서 어떤 역할인가요?</q>주변 환경을 정육면체 6면 텍스처에 담아 표면의 반사 방향으로 샘플하면 비치는 풍경이 됩니다. PBR에선 이 큐브맵을 러프니스별로 미리 흐려두고 골라 써서 간접광을 근사하는데, 이게 이미지 기반 라이팅, 즉 IBL입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q20" aria-label="20번 자신 있음"></label>
<details>
<summary><span><span class="qtag">LIT-05</span><span class="qtext">감마와 선형 색공간 변환은 왜 필요한가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>빛 계산은 밝기가 선형이어야 맞는데, 텍스처와 모니터는 sRGB 감마 곡선을 쓰기 때문입니다.</strong></p>
<p>그래서 샘플한 sRGB 텍스처를 일단 선형으로 풀어서 더하고 곱하고, 계산이 끝난 결과를 다시 sRGB로 인코딩해 화면에 내보냅니다. 이 변환을 빼먹으면 라이팅이 뿌옇거나 과하게 어두워집니다.</p>
<p>주의할 점은, 노멀맵이나 마스크처럼 색이 아니라 데이터를 담은 텍스처는 선형으로 둬야 한다는 겁니다. 이걸 sRGB로 잘못 풀면 값이 틀어집니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>HDR와 톤매핑은 어떻게 이어지나요?</q>라이팅 결과는 태양이나 발광처럼 1을 넘는 밝기가 자연스럽게 나옵니다. 그걸 HDR 버퍼에 그대로 담아 계산하고, 마지막에 톤매핑으로 0에서 1 범위로 압축합니다. 단순히 잘라내면 밝은 부분이 하얗게 뭉개지니, ACES 같은 곡선으로 하이라이트를 부드럽게 말아넣습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>깊이와 렌더 순서</h3><span class="cnt">5문항</span></div>
<p class="grp-note">무엇을 먼저 그리느냐, 무엇을 남기느냐. 불투명과 반투명이 갈리는 지점입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q21" aria-label="21번 자신 있음"></label>
<details>
<summary><span><span class="qtag">DEP-01</span><span class="qtext">불투명 물체는 왜 그리는 순서가 상관없나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>깊이 버퍼가 픽셀마다 가장 가까운 것만 남기기 때문입니다.</strong></p>
<p>픽셀마다 지금까지 본 것 중 가장 가까운 깊이를 저장해두고, 그보다 먼 게 오면 무시합니다. 이게 깊이 테스트인데, 프래그먼트가 어떤 순서로 도착하든 최종 승자, 즉 가장 앞에 있는 것은 똑같습니다. 가장 작은 깊이를 고르는 연산이라 순서가 바뀌어도 결과가 안 변하는 거죠.</p>
<p>반면 반투명은 뒤 배경에 색을 섞어야 해서 순서가 곧 결과라, 별도로 정렬해야 합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>그럼 순서가 정말 아무래도 상관없나요?</q>결과는 같지만 성능은 다릅니다. 가까운 것부터 앞에서 뒤로 그리면, 뒤에 가려질 것들이 Early-Z로 셰이딩 전에 탈락해서 오버드로우가 줄어듭니다. 그래서 대충이라도 앞에서 뒤 순서가 이득입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q22" aria-label="22번 자신 있음"></label>
<details>
<summary><span><span class="qtag">DEP-02</span><span class="qtext">깊이 값은 왜 실제 거리에 비례하지 않고 비선형으로 저장하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>비선형 깊이가 파이프라인에서 공짜로 나오고, 화면 공간에서 선형이라 싸게 보간되기 때문입니다.</strong></p>
<p>저장되는 값은 거리에 비례하는 게 아니라 1 나누기 거리 형태의 쌍곡선입니다. 원근 나눗셈의 부산물로 그렇게 나오는데, 그래서 정밀도가 카메라 근처에 몰리고 먼 곳은 몇 단계로 뭉개집니다. 실제 거리를 그대로 저장하려면 픽셀마다 원근 보정 나눗셈이 필요해서 오히려 비쌉니다.</p>
<p>이 먼 곳 정밀도 부족이 Z-fighting의 원인이 됩니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>Reversed-Z는 뭔가요?</q>near를 1, far를 0으로 뒤집고 float 깊이를 쓰는 기법입니다. 1 나누기 거리가 근처에 정밀도를 몰아주는 것과, float이 0 근처에서 정밀도가 촘촘한 것이 서로 상쇄돼서, 전 구간에서 정밀도가 고르게 됩니다. 거의 공짜로 정밀도 문제를 없애는 셈입니다.</span></li>
<li><span><q>Z-fighting은 어떻게 해결하나요?</q>거의 같은 깊이의 두 면을 정밀도가 구분 못 해 깜빡이는 건데, 두 면 간격을 띄우거나, near 평면을 너무 가깝게 두지 않아 far와 near 비율을 줄이거나, 깊이 오프셋을 줍니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q23" aria-label="23번 자신 있음"></label>
<details>
<summary><span><span class="qtag">DEP-03</span><span class="qtext">Early-Z가 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>깊이 테스트를 프래그먼트 셰이더 앞으로 당겨서, 가려질 픽셀의 비싼 셰이딩을 아예 건너뛰는 최적화입니다.</strong></p>
<p>원래 깊이 테스트는 셰이더 뒤 고정 기능 단계에서 하는데, 셰이더 전에 판정한 결과가 셰이더 후에도 맞을 때는 미리 해도 됩니다. 그러면 어차피 가려질 픽셀을 셰이딩하기 전에 버려서 오버드로우가 줄어듭니다. Hi-Z는 이걸 타일 단위로 통째 기각까지 합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>언제 Early-Z가 무효화되나요?</q>셰이더가 깊이를 직접 쓰거나(<code>gl_FragDepth</code>), discard나 알파 테스트로 픽셀을 버리면 테스트할 값이 미리 확정되지 않아 Late-Z로 밀립니다. 컷아웃 재질이 그냥 불투명보다 비싼 이유가 이겁니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q24" aria-label="24번 자신 있음"></label>
<details>
<summary><span><span class="qtag">DEP-04</span><span class="qtext">반투명은 왜 뒤에서 앞으로 그리나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>블렌딩이 교환법칙을 만족하지 않아서, 뒤가 먼저 깔려 있어야 그 위에 앞 색을 알파 비율로 덧칠할 수 있기 때문입니다.</strong></p>
<p>그래서 불투명을 다 그린 다음, 반투명끼리는 뒤에서 앞 순서로 그립니다. 이때 보통 깊이 쓰기도 끕니다. 안 끄면 뒤에 있는 반투명이 앞 반투명에 가려진 걸로 판정돼서 아예 안 그려지거든요.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>순서를 못 맞추면 어떻게 되나요?</q>겹친 반투명의 색이 틀리게 섞여 보입니다. 서로 겹친 투명 물체가 상황에 따라 뒤바뀌어 깜빡이기도 하고요. 그래서 정렬 실패가 반투명에서 가장 흔한 버그입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q25" aria-label="25번 자신 있음"></label>
<details>
<summary><span><span class="qtag">DEP-05</span><span class="qtext">알파 블렌딩과 알파 테스트는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>블렌딩은 뒤 색과 알파 비율로 섞는 거고, 테스트는 임계값보다 투명한 픽셀을 통째로 버리는 겁니다.</strong></p>
<p>알파 블렌딩은 유리나 연기 같은 부드러운 반투명에 쓰는데, 정렬이 필요하고 깊이 쓰기를 꺼야 합니다. 알파 테스트, 즉 컷아웃은 나뭇잎이나 울타리처럼 구멍 뚫린 불투명에 씁니다. 픽셀을 버릴지 남길지만 정해서 남은 부분은 불투명으로 취급하니, 순서 문제가 없고 그림자도 정상입니다. 대신 경계가 딱딱하게 각집니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>컷아웃이 왜 그냥 불투명보다 비싼가요?</q>discard로 픽셀을 버릴 수 있다 보니, 조기 깊이 기록이 막힙니다. 구멍 뚫린 자리 뒤가 미리 가려지는 걸 방지하려는 건데, 그래서 Early-Z 이점을 온전히 못 누립니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>파이프라인 최적화</h3><span class="cnt">5문항</span></div>
<p class="grp-note">드로우콜을 줄이고, 안 보일 것을 안 그리고, 계단을 다듬는 실전 최적화입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q26" aria-label="26번 자신 있음"></label>
<details>
<summary><span><span class="qtag">OPT-01</span><span class="qtext">드로우콜이 무엇이고 왜 성능에 중요한가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>CPU가 GPU에 이 메시를 이 머티리얼로 그리라고 보내는 요청 하나가 드로우콜입니다.</strong></p>
<p>콜을 한 번 보낼 때마다 셰이더와 머티리얼 상태를 설정하고, 명령 버퍼를 작성하고, 드라이버가 검증하는 준비 비용이 CPU에 걸립니다. 이 비용이 삼각형 수가 아니라 콜 개수에 비례하는 게 핵심입니다. 그래서 콜이 많으면 GPU는 노는데 CPU만 허덕이는 CPU 바운드가 됩니다. 특히 머티리얼이 바뀔 때마다 콜이 갈립니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>Vulkan이나 DX12 같은 저수준 API는 뭐가 다른가요?</q>명령 버퍼를 미리, 그리고 여러 스레드로 나눠 기록할 수 있어서 콜 하나당 드는 비용 자체를 낮춥니다. 예전 API가 드라이버 한 곳에서 다 처리하던 걸 분산시킨 거죠.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q27" aria-label="27번 자신 있음"></label>
<details>
<summary><span><span class="qtag">OPT-02</span><span class="qtext">배칭과 인스턴싱은 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>둘 다 드로우콜 개수를 줄이는 방법인데, 배칭은 여러 다른 메시를 하나로 합치는 거고 인스턴싱은 같은 메시를 여러 번 그리는 겁니다.</strong></p>
<p>배칭은 여러 메시를 한 정점 버퍼로 합쳐서 한 콜로 그립니다. 인스턴싱은 같은 메시를 위치만 바꿔 여럿 그릴 때, 메시와 머티리얼은 한 번만 보내고 인스턴스별 위치나 색만 배열로 넘겨 한 콜에 수천 개를 그립니다. 나무나 풀, 군중에 씁니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>텍스처 아틀라스는 왜 같이 얘기되나요?</q>여러 텍스처를 한 장에 모아 통일하면, 오브젝트마다 텍스처를 바꾸느라 콜이 갈리던 게 사라져서 한 콜로 묶입니다. 배칭의 전제가 되는 셈이죠. 다만 하드웨어 Repeat를 못 쓰고, 경계 누출이나 패킹 낭비 같은 한계가 붙습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q28" aria-label="28번 자신 있음"></label>
<details>
<summary><span><span class="qtag">OPT-03</span><span class="qtext">프러스텀 컬링과 백페이스 컬링은 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>둘 다 안 보일 걸 안 그리는 건데, 무엇을 얼마나 이르게 버리느냐가 다릅니다.</strong></p>
<p>프러스텀 컬링은 카메라 시야, 즉 절두체 밖에 있는 오브젝트를 드로우콜을 보내기 전에 통째로 제외합니다. 그래서 드로우콜 준비하는 CPU 비용과 정점, 프래그먼트를 처리하는 GPU 비용을 양쪽 다 아낍니다. 백페이스 컬링은 카메라를 등진 삼각형을 안 그려서, 처리할 삼각형과 프래그먼트 수를 줄입니다. 이건 드로우콜은 그대로 두고 그 안의 처리량만 줄이는 거고요.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>등진 삼각형인지 어떻게 판별하나요?</q>화면에 투영된 정점들의 감김 순서를 봅니다. 시계 방향인지 반시계 방향인지로 앞뒤를 가리는데, 이건 법선과 시선의 내적 부호로 판단하는 것과 같은 결과를 냅니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q29" aria-label="29번 자신 있음"></label>
<details>
<summary><span><span class="qtag">OPT-04</span><span class="qtext">오버드로우가 무엇이고 어떻게 줄이나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>같은 픽셀을 여러 번 덧칠하는 겁니다. 결국 보이지도 않을 픽셀에 비싼 프래그먼트 셰이더를 낭비하는 거라 문제입니다.</strong></p>
<p>불투명은 깊이 버퍼로 가려진 게 일찍 버려져서 오버드로우가 적습니다. 반면 반투명은 뒤가 비쳐야 해서 깊이 버퍼로 못 버리고, 겹친 걸 다 그려 섞습니다. 그래서 파티클이나 이펙트가 화면을 여러 겹 덮으면 한 픽셀이 수십 번 칠해져 프레임이 뚝 떨어집니다. 파티클 수와 크기, 겹침을 줄여 대응합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>Z 프리패스는 어떤 경우에 이득인가요?</q>색을 칠하기 전에 깊이만 먼저 한 번 렌더해 깊이 버퍼를 채우는 겁니다. 본 컬러 패스에서는 가려진 프래그먼트가 일찍 탈락해서, 비싼 픽셀 셰이더를 가장 앞 표면에만 실행합니다. 지오메트리를 두 번 그리는 대가가 있으니, 픽셀 셰이더가 무거운 씬에서 이득이 큽니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q30" aria-label="30번 자신 있음"></label>
<details>
<summary><span><span class="qtag">OPT-05</span><span class="qtext">안티에일리어싱 기법은 어떤 게 있고 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>폴리곤 경계의 계단 현상을 완화하는 기법으로, 크게 MSAA와 FXAA, TAA가 있습니다.</strong></p>
<ul>
<li><strong>MSAA.</strong> 경계 픽셀에서만 여러 서브샘플로 커버리지를 계산합니다. 품질이 좋지만 비싸고, 디퓨드 렌더링과 상성이 나쁩니다.</li>
<li><strong>FXAA.</strong> 렌더를 끝낸 이미지에서 경계를 찾아 블러합니다. 싸고 빠르지만 화면 전체가 살짝 뭉개집니다.</li>
<li><strong>TAA.</strong> 프레임마다 화면을 살짝 흔들어 샘플하고 이전 프레임과 누적합니다. 저비용에 품질도 좋지만, 움직일 때 잔상이나 번짐이 생깁니다.</li>
</ul>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>밉맵도 안티에일리어싱 아닌가요?</q>다루는 문제가 다릅니다. 밉맵은 텍스처 안쪽의 지글거림을 다루고, 안티에일리어싱은 폴리곤 실루엣 경계의 계단을 다룹니다. 그래서 둘 다 필요합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>렌더링 구조와 기법</h3><span class="cnt">4문항</span></div>
<p class="grp-note">라이트를 언제 계산하고, 반사와 그림자를 어떻게 만드는지의 큰 그림입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q31" aria-label="31번 자신 있음"></label>
<details>
<summary><span><span class="qtag">STR-01</span><span class="qtext">포워드 렌더링과 디퓨드 렌더링은 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>라이트를 언제 계산하느냐가 갈립니다.</strong></p>
<p>포워드는 물체를 그리면서 그 자리에서 바로 라이팅을 합니다. 투명과 MSAA가 자연스럽고 저사양이나 모바일에 유리하지만, 라이트가 늘면 물체 수 곱하기 라이트 수로 비용이 급증합니다. 디퓨드는 색과 법선, 깊이를 먼저 G-buffer에 써두고, 그다음 화면 픽셀 단위로 한 번에 라이팅합니다. 라이트가 많아도 화면 픽셀 수에만 비례하지만, G-buffer 대역폭이 크고 투명과 MSAA 처리가 까다롭습니다.</p>
<p>그래서 라이트가 적으면 포워드, 동적 라이트가 많으면 디퓨드가 유리합니다. 그 절충으로 Forward+나 클러스터드 방식도 있고요.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>G-buffer가 왜 대역폭을 많이 먹나요?</q>픽셀마다 색과 법선, 깊이 같은 여러 값을 각각의 렌더 타겟에 써야 하기 때문입니다. 화면 해상도 곱하기 타겟 수만큼 메모리를 오가야 해서, 고해상도일수록 부담이 커집니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q32" aria-label="32번 자신 있음"></label>
<details>
<summary><span><span class="qtag">STR-02</span><span class="qtext">래스터화와 레이 트레이싱은 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>래스터화는 삼각형을 화면에 투영해 픽셀을 칠하고, 레이 트레이싱은 픽셀마다 광선을 쏴서 부딪힌 표면을 추적합니다.</strong></p>
<p>래스터화는 빠르고 GPU 파이프라인의 기본이지만, 반사나 그림자, 간접광은 따로 기법을 얹어 흉내 내야 합니다. 레이 트레이싱은 반사와 굴절, 그림자가 물리적으로 정확하지만 광선 하나하나의 교차 판정이 비쌉니다.</p>
<p>그래서 실무는 래스터화를 기본으로 두고, 반사나 그림자 일부만 레이 트레이싱으로 보강하는 하이브리드가 흐름입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>왜 아직 전부 레이 트레이싱을 안 하나요?</q>실시간 프레임 예산 안에서는 광선을 충분히 못 쏩니다. 적게 쏘면 결과가 노이즈투성이라 디노이징으로 메워야 하고, 하드웨어 가속도 비교적 최근에야 들어왔습니다. 그래서 아직은 부분 보강이 현실적입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q33" aria-label="33번 자신 있음"></label>
<details>
<summary><span><span class="qtag">STR-03</span><span class="qtext">섀도우 맵은 어떻게 그림자를 만드나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>광원 시점에서 가장 가까운 표면 깊이를 미리 저장해두고, 카메라 픽셀을 광원 공간으로 옮겨 그 깊이와 비교합니다.</strong></p>
<p>저장된 깊이보다 이 픽셀이 더 멀면, 광원과 이 픽셀 사이에 뭔가 가리고 있다는 뜻이라 그림자가 됩니다. 결국 광원에서 본 깊이 버퍼를 한 장 더 굽고, 그걸 기준으로 가림 여부를 판정하는 셈입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>그림자 경계가 계단지거나 얼룩지는 건 왜인가요?</q>섀도우 맵도 해상도가 유한해서 한 텍셀이 넓은 영역을 담당하기 때문입니다. 그래서 경계가 계단지고, 표면이 자기 자신을 그림자로 판정하는 섀도우 애크니 얼룩도 생깁니다. 깊이 비교에 약간의 바이어스를 주고, PCF 같은 필터로 경계를 부드럽게 완화합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q34" aria-label="34번 자신 있음"></label>
<details>
<summary><span><span class="qtag">STR-04</span><span class="qtext">글로벌 일루미네이션과 라이트맵은 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>빛이 벽이나 바닥에 튕겨 간접적으로 채우는 반사광이 GI이고, 이걸 실시간에 계산하기 비싸서 정적 씬은 미리 구워 라이트맵에 저장합니다.</strong></p>
<p>직접광만 계산하면 그림자 속이 새까맣지만, 실제로는 간접광이 그 안을 채웁니다. 그래서 정적인 씬과 광원은 미리 계산해서 라이트맵 텍스처에 구워두고, 런타임엔 샘플만 합니다. 움직이는 물체에는 라이트 프로브로 구워둔 간접광을 보간해 입힙니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>실시간 GI는 어떻게 하나요?</q>복셀이나 SDF, 레이 트레이싱 기반 기법으로 근사합니다. 언리얼 5의 루멘이 대표적인데, 미리 굽지 않아 동적 조명과 움직이는 물체에도 간접광이 반응하는 대신 비용이 큽니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>상황형 문제 해결</h3><span class="cnt">5문항</span></div>
<p class="grp-note">정답보다 접근 순서를 봅니다. 무엇으로 원인을 좁힐지(측정)를 앞에 두고, 그다음 얽힌 개념으로 설명하세요.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q35" aria-label="35번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-01</span><span class="qtext">씬은 그대로인데 오브젝트를 늘리자 프레임이 뚝 떨어집니다. 무엇부터 보겠습니까?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>삼각형이 늘어서 느린지 드로우콜이 늘어서 느린지부터 나눕니다. 원인 층이 다르면 대책도 다르기 때문입니다.</strong></p>
<p>먼저 프로파일러로 CPU 바운드인지 GPU 바운드인지 봅니다. 오브젝트 수에 비례해 느려지고 CPU가 바쁘면 드로우콜 문제일 가능성이 큽니다. 콜당 준비 비용이 콜 개수에 비례하니까요. 이땐 같은 머티리얼을 쓰는 것끼리 배칭하거나, 같은 메시가 반복되면 GPU 인스턴싱으로 한 콜에 묶습니다.</p>
<p>반대로 GPU가 바쁘면 정점이나 프래그먼트 처리량 문제라, 먼 것은 LOD로 단순 메시로 바꾸고 프러스텀 컬링으로 시야 밖을 걸러냅니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>오브젝트가 100배로 늘면요?</q>개별 드로우콜 방식은 CPU가 먼저 무너집니다. 그래서 인스턴싱이나 GPU 기반 컬링으로 콜 개수 자체를 오브젝트 수와 거의 무관한 상수에 가깝게 눌러야 합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q36" aria-label="36번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-02</span><span class="qtext">반투명 이펙트가 많은 장면에서만 프레임이 확 떨어집니다. 왜일까요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>오버드로우를 의심합니다. 반투명은 깊이 버퍼로 못 걸러서 겹친 만큼 픽셀을 다시 칠하기 때문입니다.</strong></p>
<p>파티클이나 이펙트가 화면을 여러 겹 덮으면 한 픽셀이 수십 번 블렌딩되고, 그만큼 프래그먼트 셰이더가 배로 실행됩니다. 특히 큰 반투명 쿼드가 화면을 꽉 채우면 심해집니다.</p>
<p>그래서 파티클 수와 크기, 겹침을 줄이고, 이펙트를 낮은 해상도 버퍼에 그려서 칠하는 픽셀 수 자체를 줄이는 식으로 대응합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>불투명은 왜 이 문제가 덜한가요?</q>불투명은 깊이 버퍼로 가려진 게 일찍 탈락하고, 앞에서 뒤로 그리면 Early-Z가 오버드로우를 더 줄여줍니다. 반면 반투명은 뒤가 비쳐야 해서 이 최적화를 못 씁니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q37" aria-label="37번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-03</span><span class="qtext">멀리 있는 지형에서 텍스처가 지글거리고 반짝입니다. 무엇이 문제일까요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>밉맵이 꺼져 있거나 안 만들어졌을 가능성이 큽니다. 언더샘플링 에일리어싱의 전형적인 증상입니다.</strong></p>
<p>멀면 한 픽셀이 여러 텍셀을 덮는데, 밉맵 없이 그중 몇 개만 샘플하면 카메라가 조금만 움직여도 찍히는 텍셀이 달라져서 지글거립니다. 밉맵을 켜서 거리에 맞는 축소본을 쓰게 하면 잡힙니다. 레벨 경계가 티 나면 Trilinear로, 비스듬한 면이 뭉개지면 비등방 필터링을 올립니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>경계에서 옆 타일 색이 새는 것도 같은 문제인가요?</q>아닙니다. 그건 아틀라스 경계 누출입니다. 밉맵이 경계 텍셀을 이웃과 평균 내면서 옆 칸 색을 물어버려서 생기는데, 타일 둘레에 패딩을 주거나 텍스처 배열로 나눠서 막습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q38" aria-label="38번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-04</span><span class="qtext">두 면이 겹친 곳에서 화면이 지직거리며 깜빡입니다. 원인과 해결은 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>Z-fighting입니다. 거의 같은 깊이의 두 면을 깊이 버퍼 정밀도가 구분하지 못해 프레임마다 승자가 뒤바뀌는 겁니다.</strong></p>
<p>깊이 정밀도는 카메라에서 멀수록 나빠지는데, 저장값이 1 나누기 거리 형태라 먼 곳은 몇 단계로 뭉개지기 때문입니다. 그래서 멀리 있는 겹친 면에서 특히 잘 생깁니다.</p>
<p>두 면 간격을 띄우고, near 평면을 너무 가깝게 두지 않아 far와 near 비율을 줄이고, 깊이 오프셋을 줍니다. 근본적으로는 Reversed-Z로 전 구간 정밀도를 고르게 만듭니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>near 평면을 왜 함부로 당기면 안 되나요?</q>near가 0에 가까울수록 정밀도가 앞쪽에 과도하게 쏠려서, 정작 먼 곳이 더 심하게 뭉개집니다. 깊이 범위 전체가 far와 near의 비율에 좌우되기 때문입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="graphics-q39" aria-label="39번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-05</span><span class="qtext">라이팅을 새로 넣었더니 전체가 뿌옇고 색이 떠 보입니다. 무엇을 의심하겠습니까?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>감마와 선형 색공간 처리를 의심합니다. sRGB 텍스처를 선형으로 풀지 않고 바로 계산했을 가능성이 큽니다.</strong></p>
<p>빛 계산은 밝기가 선형이어야 맞는데 텍스처는 sRGB로 저장돼 있어서, 풀지 않고 더하고 곱하면 중간 톤이 떠서 전체가 뿌예집니다. 파이프라인을 선형으로 두고, 색 텍스처는 sRGB로 읽어 선형으로 변환한 뒤 계산하고 결과를 다시 sRGB로 출력하도록 맞춥니다.</p>
<p>이때 노멀맵이나 마스크 같은 데이터 텍스처를 sRGB로 잘못 태그하면 값이 틀어지니, 그건 선형으로 둬야 합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>밝은 부분이 하얗게 뭉개지는 건 또 다른 문제인가요?</q>그건 톤매핑 문제입니다. HDR로 계산한 결과를 단순히 잘라내지 말고, ACES 같은 곡선으로 하이라이트를 부드럽게 말아넣어야 밝은 부분의 계조가 살아납니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
</section>
<section class="close">
<h3>면접 당일 체크리스트</h3>
<ul>
<li><strong>모르면 "모르겠습니다"라고 말하세요.</strong> 꼬리질문으로 두세 번만 파고들면 모호한 답은 드러납니다. 인정한 뒤 아는 데까지 추론하는 쪽이 낫습니다.</li>
<li><strong>결론 먼저, 그다음 이유와 트레이드오프.</strong> 정의 한 문장으로 시작하면 흐름이 잡힙니다.</li>
<li><strong>그래픽스는 "왜 비싼가"로 수렴합니다.</strong> 대부분의 최적화가 비싼 프래그먼트 셰이더나 드로우콜을 덜 하려는 것임을 엮으면 답이 깊어집니다.</li>
<li><strong>소리 내어 연습하세요.</strong> 아는 것과 30초 안에 말하는 것은 다른 능력입니다.</li>
</ul>
</section>
</div>
</div>
<script src="./interview.js"></script>
