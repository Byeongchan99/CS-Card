---
title: 자료구조 면접 대비 문답
---

자료구조 요약 노트를 토대로 뽑은 예상 면접 문항입니다. 질문을 먼저 보고 소리 내어 답한 다음 펼쳐서 대조하세요. 체크박스로 자신 있는 문항을 표시하면 이 브라우저에 저장됩니다.

<div class="osiv">
<p class="note"><strong>답변 프레임.</strong> 정의 한 문장으로 결론을 먼저 말하고, 그다음 왜 그렇게 동작하거나 설계됐는지, 이어서 트레이드오프(꼬리질문의 상당수가 여기를 찌릅니다), 필요하면 실제 예시 한 줄. 자료구조 답은 대부분 "무엇이 빨라지고 대신 무엇을 포기하는가"로 귀결되니, 얻는 것과 잃는 것을 같이 말하면 좋습니다.</p>
<div class="bar">
<span class="prog"><b id="osiv-done">0</b> / <span id="osiv-total">30</span> 자신 있음</span>
<span class="bar-sp"></span>
<button class="tool" id="osiv-open" type="button">모두 펼치기</button>
<button class="tool" id="osiv-hide" type="button" aria-pressed="false">체크 숨기기</button>
<button class="tool" id="osiv-reset" type="button">초기화</button>
</div>
<section class="grp">
<div class="grp-head"><h3>스택·큐·버퍼</h3><span class="cnt">4문항</span></div>
<p class="grp-note">넣고 빼는 순서를 어떻게 정하느냐가 각 구조의 정체성입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="q1" aria-label="1번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q2" aria-label="2번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q3" aria-label="3번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q4" aria-label="4번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q5" aria-label="5번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q6" aria-label="6번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q7" aria-label="7번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q8" aria-label="8번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q9" aria-label="9번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q10" aria-label="10번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q11" aria-label="11번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q12" aria-label="12번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q13" aria-label="13번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q14" aria-label="14번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q15" aria-label="15번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q16" aria-label="16번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q17" aria-label="17번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q18" aria-label="18번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q19" aria-label="19번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q20" aria-label="20번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q21" aria-label="21번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q22" aria-label="22번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q23" aria-label="23번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q24" aria-label="24번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q25" aria-label="25번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q26" aria-label="26번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q27" aria-label="27번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q28" aria-label="28번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q29" aria-label="29번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q30" aria-label="30번 자신 있음"></label>
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

<script src="./interview.js"></script>
