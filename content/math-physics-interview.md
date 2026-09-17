---
title: 게임 수학·물리 면접 대비 문답
---

게임 수학·물리 요약 노트를 토대로 뽑은 예상 면접 문항입니다. 질문을 먼저 보고 소리 내어 답한 다음 펼쳐서 대조하세요. 체크박스로 자신 있는 문항을 표시하면 이 브라우저에 저장됩니다.

<div class="osiv">
<p class="note"><strong>답변 프레임.</strong> 결론 한 문장으로 시작 → 왜 그렇게 되는지 벡터·기하로 → 트레이드오프나 주의점(꼬리질문이 여길 찌릅니다) → 필요하면 유니티 API나 실제 예시 한 줄. 공식은 외운 걸 읊기보다 "무슨 성분을 빼거나 더하는지"로 풀어 말하는 게 강합니다.</p>
<div class="bar">
<span class="prog"><b id="osiv-done">0</b> / <span id="osiv-total">37</span> 자신 있음</span>
<span class="bar-sp"></span>
<button class="tool" id="osiv-open" type="button">모두 펼치기</button>
<button class="tool" id="osiv-hide" type="button" aria-pressed="false">체크 숨기기</button>
<button class="tool" id="osiv-reset" type="button">초기화</button>
</div>
<section class="grp">
<div class="grp-head"><h3>벡터 연산</h3><span class="cnt">6문항</span></div>
<p class="grp-note">정규화·내적·외적이 뿌리입니다. "무슨 성분을 뽑아 빼고 더하는가"로 설명하면 공식이 저절로 나옵니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="q1" aria-label="1번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q2" aria-label="2번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q3" aria-label="3번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q4" aria-label="4번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q5" aria-label="5번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q6" aria-label="6번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q7" aria-label="7번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q8" aria-label="8번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q9" aria-label="9번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q10" aria-label="10번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q11" aria-label="11번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q12" aria-label="12번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q13" aria-label="13번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q14" aria-label="14번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q15" aria-label="15번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q16" aria-label="16번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q17" aria-label="17번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q18" aria-label="18번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q19" aria-label="19번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q20" aria-label="20번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q21" aria-label="21번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q22" aria-label="22번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q23" aria-label="23번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q24" aria-label="24번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q25" aria-label="25번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q26" aria-label="26번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q27" aria-label="27번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q28" aria-label="28번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q29" aria-label="29번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q30" aria-label="30번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q31" aria-label="31번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q32" aria-label="32번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q33" aria-label="33번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q34" aria-label="34번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q35" aria-label="35번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q36" aria-label="36번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q37" aria-label="37번 자신 있음"></label>
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

<script src="./interview.js"></script>
