---
title: 알고리즘 면접 대비 문답
---

알고리즘 요약 노트를 토대로 뽑은 예상 면접 문항입니다. 질문을 먼저 보고 소리 내어 답한 다음 펼쳐서 대조하세요. 체크박스로 자신 있는 문항을 표시하면 이 브라우저에 저장됩니다.

<div class="osiv">
<p class="note"><strong>답변 프레임.</strong> 정의·결론 한 문장 먼저 → 왜 그렇게 동작·설계됐는지 → 트레이드오프(꼬리질문의 90%가 여기를 찌릅니다) → 필요하면 실제 예시 한 줄. 복잡도는 "느려지는 정도"로 풀어 말하고, 단정("절대 안 됩니다")은 반례 하나로 무너지니 "일반적으로 ~지만 ~한 경우엔 다릅니다"로.</p>
<div class="bar">
<span class="prog"><b id="osiv-done">0</b> / <span id="osiv-total">37</span> 자신 있음</span>
<span class="bar-sp"></span>
<button class="tool" id="osiv-open" type="button">모두 펼치기</button>
<button class="tool" id="osiv-hide" type="button" aria-pressed="false">체크 숨기기</button>
<button class="tool" id="osiv-reset" type="button">초기화</button>
</div>
<section class="grp">
<div class="grp-head"><h3>복잡도와 재귀</h3><span class="cnt">4문항</span></div>
<p class="grp-note">복잡도는 "무엇에 비례해 느려지는가"로 풀어 말하는 게 핵심입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="q1" aria-label="1번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q2" aria-label="2번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q3" aria-label="3번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q4" aria-label="4번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q5" aria-label="5번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q6" aria-label="6번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q7" aria-label="7번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q8" aria-label="8번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q9" aria-label="9번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q10" aria-label="10번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q11" aria-label="11번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q12" aria-label="12번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q13" aria-label="13번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q14" aria-label="14번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q15" aria-label="15번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q16" aria-label="16번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q17" aria-label="17번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q18" aria-label="18번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q19" aria-label="19번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q20" aria-label="20번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q21" aria-label="21번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q22" aria-label="22번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q23" aria-label="23번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q24" aria-label="24번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q25" aria-label="25번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q26" aria-label="26번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q27" aria-label="27번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q28" aria-label="28번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q29" aria-label="29번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q30" aria-label="30번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q31" aria-label="31번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q32" aria-label="32번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q33" aria-label="33번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q34" aria-label="34번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q35" aria-label="35번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q36" aria-label="36번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q37" aria-label="37번 자신 있음"></label>
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
<script src="./interview.js"></script>
