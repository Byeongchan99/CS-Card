---
title: 운영체제 면접 대비 문답
---

운영체제 요약 노트를 토대로 뽑은 예상 면접 문항입니다. 질문을 먼저 보고 소리 내어 답한 다음 펼쳐서 대조하세요. 체크박스로 자신 있는 문항을 표시하면 이 브라우저에 저장됩니다.

<div class="osiv">
<p class="note"><strong>답변 프레임.</strong> 정의 한 문장으로 결론 먼저 → 왜 그렇게 동작·설계됐는지 → 트레이드오프(꼬리질문의 90%가 여기를 찌릅니다) → 필요하면 실제 예시 한 줄. 단정("절대 안 됩니다")은 반례 하나로 무너지니 "일반적으로 ~지만 ~한 경우엔 다릅니다"로.</p>
<div class="bar">
<span class="prog"><b id="osiv-done">0</b> / <span id="osiv-total">28</span> 자신 있음</span>
<span class="bar-sp"></span>
<button class="tool" id="osiv-open" type="button">모두 펼치기</button>
<button class="tool" id="osiv-hide" type="button" aria-pressed="false">체크 숨기기</button>
<button class="tool" id="osiv-reset" type="button">초기화</button>
</div>
<section class="grp">
<div class="grp-head"><h3>메모리 관리</h3><span class="cnt">7문항</span></div>
<p class="grp-note">가상 메모리·페이징이 중심입니다. "왜"를 파고드는 꼬리질문이 많습니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="q1" aria-label="1번 자신 있음"></label>
<details>
<summary><span><span class="qtag">MEM-01</span><span class="qtext">가상 메모리는 왜 필요하고 어떻게 동작하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>프로세스마다 0번지부터 이어진 독립 가상 주소 공간을 주고, 접근할 때 MMU가 페이지 테이블을 참조해 가상 주소를 물리 프레임으로 변환합니다.</strong> 변환 단위는 페이지(보통 4KB)입니다.</p>
<p>이 변환 계층 하나로 두 가지를 얻습니다. 하나는 <strong>보호·격리</strong>입니다. 프로세스마다 페이지 테이블이 따로라 매핑이 겹치지 않아, 남의 메모리는 주소로 표현할 방법 자체가 없습니다. 다른 하나는 <strong>초과 사용</strong>입니다. 당장 안 쓰는 페이지를 디스크(스왑)로 내려, 물리 RAM보다 큰 주소 공간을 쓸 수 있습니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>매 접근마다 페이지 테이블을 읽으면 느리지 않나요?</q>느립니다. 페이지 테이블이 RAM에 있어 변환마다 메모리를 한 번 더 읽어야 하므로, <code>TLB</code>라는 CPU 내부 캐시가 최근 변환을 들고 있다가 히트하면 테이블 조회 없이 즉시 변환합니다.</span></li>
<li><span><q>페이징이 외부 단편화를 없앤다는데 물리 프레임은 흩어지지 않나요?</q>흩어져도 외부 단편화가 안 생깁니다. 프레임이 전부 같은 크기라 연속을 요구하지 않고, 흩어진 빈 프레임 아무거나 하나면 되기 때문입니다. 대신 페이지 끝 자투리의 내부 단편화가 대가입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="q2" aria-label="2번 자신 있음"></label>
<details>
<summary><span><span class="qtag">MEM-02</span><span class="qtext">페이지 폴트가 나면 무슨 일이 일어나나요? 스래싱은 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p>접근한 페이지가 RAM에 없으면(유효 비트가 꺼져 있으면) <strong>페이지 폴트라는 예외</strong>가 납니다. CPU가 멈추고 커널 핸들러로 진입 → OS가 디스크에서 빈 프레임으로 로드(빈 프레임이 없으면 기존 페이지 교체) → 페이지 테이블을 갱신하고 멈춘 명령부터 재개합니다. 디스크가 RAM보다 수만 배 느려서 그 순간 프로그램이 멈칫합니다.</p>
<p><strong>스래싱은 폴트가 너무 잦아 CPU가 계산은 안 하고 디스크만 기다리는 상태</strong>입니다. 최근 실제 참조하는 페이지 집합(워킹셋)의 합이 물리 프레임을 넘으면, 무엇을 내보내도 곧 다시 필요해져 폴트가 폭증합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>폴트는 무조건 나쁜 건가요?</q>아닙니다. 프로그램 시작 때 안 올린 페이지를 처음 접근하는 순간 올리는 정상 폴트(요구 페이징)가 있습니다. 문제는 이미 있던 페이지를 쫓아냈다 곧 다시 부르는 폴트가 반복될 때입니다.</span></li>
<li><span><q>스래싱은 어떻게 벗어나나요?</q>다중 프로그래밍 수준을 낮춰(일부를 스왑아웃해) 남은 것들의 워킹셋이 RAM에 들어가게 합니다. CPU 사용률이 낮은 걸 "놀고 있다"고 착각해 프로세스를 더 띄우면 오히려 악화되는 악순환이라, 고리를 끊는 게 핵심입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="q3" aria-label="3번 자신 있음"></label>
<details>
<summary><span><span class="qtag">MEM-03</span><span class="qtext">페이지 교체 알고리즘에는 어떤 것이 있나요? LRU를 실제로 어떻게 구현하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p>물리 프레임이 꽉 찼을 때 누구를 내보낼지 정하는 정책입니다.</p>
<ul>
<li><strong>OPT</strong> — 앞으로 가장 늦게 쓸 페이지를 내보냄. 폴트 이론상 최소지만 미래를 알아야 해 구현 불가, 비교 기준용</li>
<li><strong>FIFO</strong> — 먼저 들어온 것부터. 단순하나 "오래됨 ≠ 안 씀"이라 핵심 페이지도 내보냄</li>
<li><strong>LRU</strong> — 가장 오래전에 마지막으로 쓴 것. 시간 지역성에 잘 맞아 OPT에 근접하나 접근 시각 추적 비용이 큼</li>
<li><strong>Clock</strong> — LRU를 참조 비트 하나로 근사. 실전 표준</li>
</ul>
<p>순수 LRU는 매 접근마다 시각을 추적해야 해 비쌉니다. 그래서 <strong>Clock</strong>으로 근사합니다. 페이지를 원형으로 두고 접근 때 참조 비트를 켜고, 교체 때 바늘이 돌며 비트가 1이면 끄고 지나가고(한 번 봐줌) 0이면 교체합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>Belady 이상 현상이 뭔가요?</q>보통 프레임을 늘리면 폴트가 줄어야 하는데, FIFO에서는 프레임을 늘렸는데 오히려 폴트가 늘어나는 역설입니다. "들어온 순서"라는 기준이 실제 사용 패턴과 무관해서 생기고, LRU·OPT에는 없습니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="q4" aria-label="4번 자신 있음"></label>
<details>
<summary><span><span class="qtag">MEM-04</span><span class="qtext">TLB 미스와 페이지 폴트는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p>둘 다 "없어서" 나는 것이지만 무엇이 없는지, 어디까지 가는지가 완전히 다릅니다.</p>
<ul>
<li><strong>TLB 미스</strong> — 가상→물리 변환 결과가 TLB(캐시)에 없는 것. RAM에 있는 페이지 테이블을 한 번 더 읽어 채우면 됩니다. 비용은 메모리 접근 몇 번</li>
<li><strong>페이지 폴트</strong> — 페이지 자체가 RAM에 없는 것. 디스크까지 가서 퍼와야 합니다. 비용은 수만 배 더 큼</li>
</ul>
<p>즉 페이지 테이블은 RAM에 상주하므로 <strong>TLB 미스는 RAM까지, 페이지 폴트는 디스크까지</strong> 갑니다. TLB 미스가 페이지 폴트로 이어질 수는 있어도(테이블을 읽었더니 유효 비트가 꺼져 있으면) 둘은 별개입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>TLB 크기를 키우면 되지 않나요?</q>못 키웁니다. TLB는 모든 메모리 접근의 최단 경로에 있어 전 항목을 병렬 비교하는데, 커지면 조회가 느려져 전체가 느려집니다. 대신 다단계 TLB와 큰 페이지(huge page)로 우회합니다.</span></li>
<li><span><q>컨텍스트 스위칭 때 TLB는 어떻게 되나요?</q>프로세스 전환은 주소 공간이 바뀌어 TLB를 비워야 합니다. 그래서 전환 직후 미스가 잦아 느려지는데, 같은 프로세스 안 스레드 전환은 주소 공간을 공유해 TLB를 안 비워도 돼 더 쌉니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="q5" aria-label="5번 자신 있음"></label>
<details>
<summary><span><span class="qtag">MEM-05</span><span class="qtext">내부 단편화와 외부 단편화의 차이는? 페이징과 세그멘테이션은 각각 어느 쪽이 생기나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>내부 단편화는 할당 블록이 실제 필요보다 커서 안쪽이 남는 것</strong>이고(고정 크기로 나눌 때), <strong>외부 단편화는 전체 여유는 충분한데 빈 공간이 잘게 쪼개져 연속 블록이 없어 할당 실패하는 것</strong>입니다(가변 크기를 연속으로 담을 때).</p>
<p>페이징은 고정 크기 페이지라 외부 단편화가 없는 대신 페이지 끝 자투리의 내부 단편화가 생깁니다. 세그멘테이션은 논리 단위(가변 크기)라 보호·공유가 자연스러운 대신 외부 단편화가 생깁니다. <strong>단편화는 어느 방식도 완전히 못 없애고 무엇을 감수할지 고르는 문제</strong>이고, 예측 불가한 외부보다 상한이 정해진 내부가 다루기 쉬워 페이징 계열이 주력입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>x86은 세그멘테이션과 페이징을 결합했다는데 왜 요즘은 페이징만 쓰나요?</q>세그가 주던 논리 단위 보호를 OS가 페이징 위에서 소프트웨어로(리눅스 VMA + 페이지 권한 비트) 대신할 수 있기 때문입니다. 결합은 세그멘테이션이 먼저 있던 역사적 유산이고, 현대 x86-64는 세그멘테이션을 사실상 꺼(flat model) 페이징 단독으로 갑니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="q6" aria-label="6번 자신 있음"></label>
<details>
<summary><span><span class="qtag">MEM-06</span><span class="qtext">다단계 페이지 테이블은 왜 쓰나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>단일 배열 페이지 테이블은 주소 공간 크기에 비례해 터무니없이 크기 때문</strong>입니다. 64비트·4KB 페이지면 페이지가 2⁵²개라 프로세스당 표가 수십 페타바이트가 됩니다. 게다가 프로세스가 실제 쓰는 건 코드·데이터·힙·스택 몇 조각뿐이고 나머지 광대한 주소 공간은 매핑 없는 허공이라, 배열은 그 허공까지 항목을 잡아두는 낭비가 있습니다.</p>
<p>다단계는 표를 트리로 쪼갭니다. 페이지 번호를 여러 조각으로 나눠 상위 표가 하위 표를 가리키게 하고, <strong>안 쓰는 영역은 상위 항목을 비워 그 아래 하위 표를 아예 안 만듭니다.</strong> 실제 쓰는 영역의 하위 표만 존재해 페타바이트가 KB~MB로 줄어듭니다. 대가는 변환마다 단계 수만큼 표를 타는 것이라 TLB 히트가 더 중요해집니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="q7" aria-label="7번 자신 있음"></label>
<details>
<summary><span><span class="qtag">MEM-07</span><span class="qtext">스택과 힙 메모리는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>스택은 함수 호출 단위로 프레임을 쌓고 벗겨, 꼭대기 포인터만 밀고 당기면 되므로 빠르고 스코프 종료 시 자동 해제</strong>됩니다. 대신 크기가 컴파일 타임에 고정되고 함수 범위를 넘어 오래 못 삽니다. <strong>힙은 런타임에 원하는 크기를 빈 공간을 찾아 할당하고 원할 때까지 유지</strong>하지만, 탐색·단편화·관리 비용이 있어 느리고 직접(또는 GC) 해제해야 합니다.</p>
<p>함수를 넘어 오래 사는 데이터나 런타임에 크기가 정해지는 데이터는 힙에, 짧게 쓰는 지역 데이터는 스택에 둡니다.</p>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>프로세스와 스레드</h3><span class="cnt">6문항</span></div>
<p class="grp-note">공유하느냐 격리하느냐가 모든 차이의 뿌리입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="q8" aria-label="8번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PROC-01</span><span class="qtext">프로세스와 스레드의 차이는 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>프로세스는 실행 중인 프로그램 하나로 격리된 자기 주소 공간을 가지고, 스레드는 그 프로세스 안에서 동시에 진행되는 실행 갈래</strong>입니다. 스레드끼리는 코드·데이터·힙·페이지 테이블을 공유하고, 스택·레지스터·PC만 각자 가집니다. 각자 다른 함수의 다른 지점을 실행하니 현재 위치와 지역 변수는 달라야 하기 때문입니다.</p>
<p>그래서 두 가지가 갈립니다. 스레드는 주소 공간을 공유하므로 <strong>생성·컨텍스트 스위칭이 가볍고</strong>, 힙·전역을 그냥 공유해 <strong>통신이 쉽지만</strong>, 같은 메모리를 동시에 건드려 <strong>레이스 컨디션·동기화 문제를 떠안습니다.</strong></p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>프로세스끼리는 어떻게 통신하나요?</q>격리돼 있어 IPC가 필요합니다. 같은 물리 영역을 매핑하는 공유 메모리(빠르나 동기화 직접), 또는 파이프·소켓으로 커널이 중개해 복사·전달하는 메시지 전달(느리나 안전)을 씁니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="q9" aria-label="9번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PROC-02</span><span class="qtext">컨텍스트 스위칭 비용에는 무엇이 있나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p>두 종류입니다. <strong>보이는 비용</strong>은 실행 중이던 프로세스의 CPU 상태(레지스터·PC·SP)를 PCB에 저장하고 다음 프로세스 것을 복원하는 것입니다. <strong>숨은 비용</strong>은 전환 직후 캐시·TLB가 새 프로세스 기준으로 식어(cold) 캐시 미스가 잔뜩 나는 것인데, RAM에서 다시 퍼오느라 PCB 저장·복원보다 클 때도 많습니다.</p>
<p>그래서 스레드 전환이 프로세스 전환보다 쌉니다. 주소 공간을 공유해 TLB를 안 비워도 되기 때문입니다. 스레드 풀이 워커를 재사용하는 것도 이 생성+전환 비용을 줄이려는 것입니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="q10" aria-label="10번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PROC-03</span><span class="qtext">fork와 copy-on-write를 설명해 주세요.</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><code>fork</code>는 부모를 복제한 자식 프로세스를 만드는 시스템 콜입니다. 주소 공간을 통째로 복사하면 낭비이고(특히 자식이 곧 <code>exec</code>로 다른 프로그램을 덮어쓰면 복사한 게 버려짐), 그래서 <strong>copy-on-write로 복사를 미룹니다.</strong></p>
<p>fork 시점엔 부모·자식이 같은 물리 페이지를 읽기 전용으로 공유합니다. 읽기만 하면 그대로 공유하고, 누군가 쓰려는 순간 보호 폴트가 나 그 페이지 하나만 복사해 줍니다. <strong>실제 바뀌는 페이지만 바뀌는 순간 복사</strong>되므로 복사 비용과 메모리를 크게 아낍니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>부모 없이 fork되는 프로세스도 있나요?</q>맨 처음 프로세스인 init(PID 1)만 부모가 없습니다. 커널이 부팅 때 직접 만들고, 나머지는 전부 init을 뿌리로 fork되어 트리를 이룹니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="q11" aria-label="11번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PROC-04</span><span class="qtext">좀비 프로세스와 고아 프로세스는 무엇이고 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p>자식이 종료해도 종료 코드를 부모가 <code>wait</code>로 거둬가야 완전히 정리됩니다. 그전까진 시체 상태로 프로세스 테이블에 남습니다.</p>
<ul>
<li><strong>좀비</strong> — 자식이 먼저 죽었는데 부모가 <code>wait</code>를 안 불러 시체가 안 치워진 상태. PID를 계속 차지해 쌓이면 PID 고갈. 부모의 버그입니다</li>
<li><strong>고아</strong> — 부모가 먼저 죽어 자식이 부모를 잃은 것. 커널이 즉시 init에 입양시키고 init이 나중에 거둬줘 좀비가 안 됩니다. 정상 처리 경로입니다</li>
</ul>
<p>즉 <strong>좀비는 죽었는데 안 치워진 것(문제), 고아는 살아있는데 부모를 잃은 것(안전)</strong>입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>좀비는 어떤 경우에 생기나요?</q>주로 오래 도는 부모(서버·데몬)가 <code>wait</code>(또는 SIGCHLD 처리)를 빠뜨릴 때입니다. 부모가 죽으면 그 좀비들도 init이 입양해 즉시 거두므로, 짧게 끝나는 프로그램에선 별 문제가 안 됩니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="q12" aria-label="12번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PROC-05</span><span class="qtext">사용자 모드와 커널 모드는 왜 나누나요? 시스템 콜은 어떻게 동작하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p>앱이 하드웨어를 직접 만지거나 남의 메모리를 건드리면 버그 하나로 시스템이 무너지므로, <strong>위험한 작업을 커널 모드에서만 하게 하드웨어로 막는 보호 경계</strong>입니다. 사용자 모드 앱은 자기 메모리만, 커널 모드는 전권을 가집니다.</p>
<p>앱이 파일·네트워크 같은 특권 작업을 하려면 커널에 대신 요청합니다 = <strong>시스템 콜</strong>. 트랩이 걸려 커널 모드로 전환되는데, 아무 데로나 못 들어가고 정해진 진입점(시스템 콜 테이블)을 통해서만 들어갑니다. 커널이 작업 후 사용자 모드로 복귀합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>시스템 콜이 비싸다는데 어떻게 줄이나요?</q>모드 전환 자체가 비용이라 한 바이트씩 매번 콜하면 폭발합니다. 버퍼링으로 데이터를 모아 한 번에 처리해 콜 횟수를 줄입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="q13" aria-label="13번 자신 있음"></label>
<details>
<summary><span><span class="qtag">PROC-06</span><span class="qtext">코어가 하나여도 멀티스레드가 이득인가요? 동시성과 병렬성의 차이는?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>동시성은 번갈아 빠르게 진행하는 것(코어 하나로도 가능), 병렬성은 여러 코어에서 같은 순간 물리적으로 동시에 실행하는 것</strong>입니다. 멀티스레드는 코어가 하나면 동시성, 여러 개면 병렬로 진행됩니다.</p>
<p>코어가 하나여도 이득입니다. 스레드 A가 I/O를 기다리는 동안(CPU가 노는 시간) 스레드 B가 그 CPU를 쓰기 때문입니다. 특히 I/O가 많은 작업에서 CPU 활용도와 반응성이 올라갑니다. 반면 순수 계산만 빡센 작업은 코어 수만큼만 실제로 빨라집니다.</p>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>동기화</h3><span class="cnt">6문항</span></div>
<p class="grp-note">공유 데이터를 동시에 건드릴 때 생기는 문제와 도구들입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="q14" aria-label="14번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SYNC-01</span><span class="qtext">레이스 컨디션이 무엇인가요? count++가 왜 위험한가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>여러 스레드가 같은 데이터를 동시에 고칠 때 실행 순서가 꼬여 결과가 틀어지는 현상</strong>입니다. <code>count++</code> 한 줄이 CPU엔 읽기 → 증가 → 쓰기 세 단계라, 두 스레드가 각자 0을 읽고 각자 1로 만들어 쓰면, 둘 다 +1 했는데 2가 아니라 1이 나옵니다. 한쪽 증가가 덮여 유실되는 것입니다.</p>
<p>이렇게 한 번에 한 스레드만 들어가야 하는 코드 구간이 <strong>임계 구역</strong>이고, 해결은 세 단계가 쪼개지지 않게 묶는 것입니다 — <code>lock</code>(뮤텍스)으로 임계 구역에 한 스레드만 넣거나, 원자적 연산(<code>Interlocked.Increment</code>)으로 하드웨어가 한 덩어리로 처리합니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="q15" aria-label="15번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SYNC-02</span><span class="qtext">뮤텍스와 세마포어의 차이는 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>뮤텍스는 한 번에 한 스레드만 허용하고 소유권이 있어 잠근 스레드가 풀어야 합니다.</strong> 배타적 보호에 안전하고, 주인이 안 풀고 죽어도 OS가 버려진 뮤텍스로 감지해 자동 해제할 수 있습니다.</p>
<p><strong>세마포어는 카운터로 최대 N개를 허용하고 소유권이 없습니다.</strong> 쓰임이 둘로 갈리는데, 하나는 자원 N개 제한(같은 스레드가 진입 시 wait, 종료 시 signal — 예: DB 커넥션 10개)이고, 다른 하나는 신호 전달(내리는 쪽과 올리는 쪽이 달라도 됨 — 생산자가 signal, 소비자가 wait)입니다. 신호 전달은 소유권이 없어 가능한, 뮤텍스로는 못 하는 용법입니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="q16" aria-label="16번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SYNC-03</span><span class="qtext">스핀락은 무엇이고 언제 뮤텍스 대신 쓰나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>스핀락은 락을 못 얻으면 잠들지 않고 얻을 때까지 반복문을 돌며 계속 시도하는 락</strong>입니다. 블로킹 락은 잠들었다 깨는 컨텍스트 스위칭 비용이 드는데, 락이 아주 짧게만 잡힐 거면 그 비용보다 몇 바퀴 도는 게 싸기 때문입니다.</p>
<p>그래서 <strong>락이 짧게 잡히고 멀티코어일 때 유리</strong>합니다. 오래 잡히면 CPU를 헛돌며 낭비이고, 단일 코어에선 최악입니다 — 스핀하는 스레드가 CPU를 붙들어 락 주인이 실행을 못 해 영영 안 풀립니다. 판단 기준은 컨텍스트 스위칭 비용과 대기 시간의 비교입니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="q17" aria-label="17번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SYNC-04</span><span class="qtext">데드락의 발생 조건 4가지와 대응 방법을 설명해 주세요.</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p>상호 배제, 점유와 대기, 비선점, 순환 대기 — <strong>이 넷이 동시에 다 성립해야 발생하는 필요조건이라, 하나만 깨도 예방됩니다.</strong></p>
<p>대응은 네 갈래입니다.</p>
<ul>
<li><strong>예방</strong> — 4조건 중 하나를 원천 봉쇄. 가장 실용적인 건 자원에 번호를 매겨 낮은 번호부터 획득해 순환 대기를 차단(락을 항상 같은 순서로 잡기)</li>
<li><strong>회피</strong> — 요청마다 안전 상태만 유지(은행원 알고리즘)</li>
<li><strong>탐지·복구</strong> — 허용해두고 대기 그래프 사이클로 감지 후 프로세스 종료·롤백(DB의 트랜잭션 abort)</li>
<li><strong>무시</strong> — 드무니 방치, 사용자가 강제 종료(타조 알고리즘)</li>
</ul>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>실제 코드에서 데드락은 주로 어떻게 나나요?</q>두 락을 서로 반대 순서로 잡을 때입니다. A는 락1→락2, B는 락2→락1로 잡으면 순환 대기로 교착됩니다. 락 획득 순서를 통일하면 예방됩니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="q18" aria-label="18번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SYNC-05</span><span class="qtext">우선순위 역전이 무엇이고 어떻게 해결하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p>우선순위 H &gt; M &gt; L에서, <strong>낮은 L이 락을 쥔 채 있고 높은 H가 그 락을 기다리는데, 중간 M이 끼어들어 L을 계속 밀어내면 L이 락을 못 풀어 H도 못 나아가는 현상</strong>입니다. 결과적으로 중간짜리 M이 최고짜리 H보다 먼저 도는 역전입니다. M이 끊임없이 들어오면 무한정 밀려(무한 역전), 고우선순위 작업 미완료를 감지한 워치독이 시스템을 리셋한 화성 탐사선 Pathfinder 사례가 유명합니다.</p>
<p>해결은 <strong>우선순위 상속</strong> — L이 H가 기다리는 락을 쥔 동안 L을 H만큼 올려 M이 못 밀어내게 하고, 락을 풀면 원래대로 복귀시킵니다. 역전 시간이 L의 임계 구역 길이로 유한하게 묶입니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="q19" aria-label="19번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SYNC-06</span><span class="qtext">원자적 연산과 메모리 배리어는 각각 무엇을 해결하나요? volatile로 충분한가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p>멀티코어 동기화 문제는 두 층입니다. <strong>원자성</strong>(복합 연산이 쪼개져 끼어듦)과 <strong>가시성·순서</strong>(코어마다 캐시가 달라 쓴 값이 늦게 퍼지고, CPU·컴파일러가 명령을 재정렬해 다른 코어엔 순서가 뒤바뀌어 보임)입니다.</p>
<p><strong>원자적 연산(Interlocked, CAS)이 원자성을</strong> 해결하고 — 읽기·수정·쓰기를 쪼갤 수 없는 한 단위로 묶습니다. <strong>메모리 배리어가 가시성·순서를</strong> 해결합니다 — 두 연산 사이에 넣어 재정렬을 막고 앞의 쓰기를 다른 코어에 보이게 합니다. <code>volatile</code>은 재정렬·캐싱을 제한해 가시성 일부만 도울 뿐 <code>count++</code> 같은 복합 연산의 원자성은 보장하지 않습니다.</p>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>스케줄링</h3><span class="cnt">4문항</span></div>
<p class="grp-note">"다음에 누구를 실행할까"의 규칙과 트레이드오프입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="q20" aria-label="20번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SCHED-01</span><span class="qtext">CPU 스케줄링 알고리즘에는 무엇이 있나요? 기아는 어떻게 막나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<ul>
<li><strong>FCFS</strong>(선착순) — 단순하나 긴 작업이 앞에 오면 뒤가 다 밀림(호위 효과)</li>
<li><strong>SJF</strong>(최단 작업 우선) — 평균 대기 최소, 실행 시간 예측 필요·긴 작업 기아</li>
<li><strong>RR</strong>(라운드 로빈) — 타임 퀀텀씩 돌아가며, 응답성 좋음</li>
<li><strong>MLFQ</strong>(다단계 피드백 큐) — 여러 큐 + 승·강등, 실행 시간을 몰라도 짧은·대화형 작업이 우대됨. 실전형</li>
</ul>
<p><strong>기아</strong>(특정 작업이 계속 밀려 실행 못 됨)는 SJF·우선순위에서 생기는데, <strong>에이징</strong>으로 막습니다 — 대기 시간에 비례해 우선순위를 점점 올려 오래 기다린 작업이 결국 실행되게 합니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="q21" aria-label="21번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SCHED-02</span><span class="qtext">선점 스케줄링과 비선점 스케줄링의 차이는?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>실행 중인 작업을 끝나기 전에 강제로 CPU에서 뺏을 수 있는가</strong>로 갈립니다. 비선점은 스스로 끝내거나 I/O로 양보할 때까지 유지(FCFS)라 단순하나 긴 작업이 오래 붙잡습니다. 선점은 더 급한 게 오거나 퀀텀 소진 시 회수(RR)라 응답성이 좋고 기아를 줄이지만, 뺏고 넘기는 스위칭 비용이 늘고 실행 도중 뺏길 수 있어 동기화가 더 중요합니다.</p>
<p>현대 OS는 대화형 작업이 많아 대부분 선점형입니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="q22" aria-label="22번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SCHED-03</span><span class="qtext">인터럽트와 폴링의 차이는? 인터럽트가 항상 더 좋나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>폴링은 CPU가 직접 "왔나?"를 확인</strong>하는 방식(바쁜 대기면 확인만 반복해 낭비), <strong>인터럽트는 장치가 이벤트 시 신호를 보내 CPU가 다른 일을 하다 반응</strong>하는 방식입니다. 확인이 필요 없어 보통 인터럽트가 효율·반응성 모두 우수합니다.</p>
<p>다만 항상 더 좋진 않습니다. 인터럽트는 신호마다 하던 일을 멈추고 핸들러로 갔다 오는 문맥 교체 비용이 있어, <strong>이벤트가 폭주하면 그 비용이 커집니다.</strong> 그래서 인터럽트 병합(여러 이벤트를 모아 한 번에)이나 하이브리드(첫 신호로 깨어나 폴링으로 훑는 NAPI 방식)로 양쪽 장점을 취합니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="q23" aria-label="23번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SCHED-04</span><span class="qtext">디스크 스케줄링 알고리즘을 설명해 주세요. SSD에서도 의미가 있나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p>HDD는 헤드를 트랙으로 물리적으로 옮기는 seek이 제일 느려, 쌓인 요청 순서를 재배열해 이동 거리를 줄입니다.</p>
<ul>
<li><strong>FCFS</strong> — 온 순서대로, 이동 거리가 큼</li>
<li><strong>SSTF</strong> — 가장 가까운 요청부터, 빠르나 먼 요청이 밀리는 기아</li>
<li><strong>SCAN</strong>(엘리베이터) — 한 방향으로 끝까지 훑고 되돌음, 기아 없이 균등</li>
</ul>
<p><strong>SSD는 기계적 헤드가 없어 seek 개념이 거의 없으므로 이 스케줄링의 의미가 약합니다.</strong> 병렬성·큐를 살리는 다른 방식을 씁니다. 디스크 스케줄링은 주로 HDD의 seek 비용 얘기입니다.</p>
</div>
</div>
</details>
</div>
</section>
<section class="grp">
<div class="grp-head"><h3>I/O · 캐시 · 파일시스템</h3><span class="cnt">5문항</span></div>
<p class="grp-note">개념이 섞이기 쉬운 축들을 정확히 구분하는지가 관건입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="q24" aria-label="24번 자신 있음"></label>
<details>
<summary><span><span class="qtag">IO-01</span><span class="qtext">동기/비동기와 블로킹/논블로킹의 차이는? 비동기는 병렬인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p>독립된 두 축입니다. <strong>블로킹/논블로킹은 호출이 바로 반환되는가</strong>(블로킹은 완료까지 멈춤, 논블로킹은 즉시 반환), <strong>동기/비동기는 완료를 누가 챙기는가</strong>(동기는 내가 대기하거나 폴링, 비동기는 완료되면 상대가 콜백·이벤트로 통지)입니다. 그래서 즉시 반환돼도 내가 계속 확인하면 동기 논블로킹입니다.</p>
<p><strong>비동기는 병렬이 아닙니다.</strong> 완료 처리를 분리하는 동시성 모델일 뿐이라, 싱글 스레드 이벤트 루프로도 성립합니다. I/O 대기는 하드웨어가 처리하고 그 사이 CPU가 다른 일을 하는 것이라, 코어가 하나여도 됩니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="q25" aria-label="25번 자신 있음"></label>
<details>
<summary><span><span class="qtag">IO-02</span><span class="qtext">I/O 멀티플렉싱이 무엇이고 epoll이 select보다 나은 이유는?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p>서버가 수천 연결을 다룰 때 연결마다 스레드를 두면 스택·스위칭 비용이 폭발합니다. 대신 <strong>한 스레드가 여러 소켓을 동시에 감시하다 준비된 것만 처리</strong>하는 게 I/O 멀티플렉싱입니다.</p>
<p><code>select</code>/<code>poll</code>은 호출마다 전체 fd 목록을 넘기고 커널이 전부 확인해 O(n)이고, 감시 대상이 많으면 느려집니다. <code>epoll</code>은 관심 fd를 커널에 한 번 등록해두면 준비된 fd만 돌려줘 O(1)에 가깝습니다. 그래서 연결이 수만 개인 대규모 서버의 표준입니다. 논블로킹 I/O·이벤트 루프의 토대입니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="q26" aria-label="26번 자신 있음"></label>
<details>
<summary><span><span class="qtag">IO-03</span><span class="qtext">캐시 지역성이 무엇이고 게임에서 왜 중요한가요? 거짓 공유는요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p>CPU는 메모리를 캐시 라인(보통 64바이트) 단위로 통째로 읽어옵니다. 그래서 <strong>연속된 메모리를 순서대로 읽으면 히트라 빠르고, 흩어진 접근은 미스로 느립니다.</strong> 게임은 같은 연산을 수천 객체에 반복하므로, 데이터를 연속 배치(SoA, 연속 배열)하면 캐시가 살아 크게 빨라집니다. Unity DOTS/ECS가 나온 배경입니다.</p>
<p><strong>거짓 공유는 그 반대 함정</strong>입니다. 서로 다른 코어가 무관한 변수를 각자 갱신해도 두 변수가 같은 캐시 라인에 있으면, 무효화 단위가 라인 전체라 서로의 캐시를 계속 튕겨내 성능이 급락합니다. 락도 공유도 없는데 죽습니다. 경합 데이터를 패딩으로 다른 라인에 띄워 완화합니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>그럼 무조건 데이터를 모으는 게 좋은가요?</q>단일 스레드는 "모아라"(공간 지역성)가 맞지만, 여러 코어가 각자 갱신하는 경합 데이터는 "띄워라"로 반대입니다. 같은 캐시 라인이 한쪽엔 이득, 다른 쪽엔 독입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="q27" aria-label="27번 자신 있음"></label>
<details>
<summary><span><span class="qtag">IO-04</span><span class="qtext">inode가 무엇인가요? 저널링은 왜 필요한가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>inode는 파일 하나의 메타데이터(크기·권한·데이터 블록 위치)를 담는 구조체</strong>입니다. 핵심은 inode에 파일 이름이 없다는 것 — 이름은 디렉터리에 있고, 디렉터리는 "이름 → inode 번호" 매핑 목록입니다. 그래서 하드 링크는 같은 inode를 여러 이름이 가리키는 것이고, 링크 카운트가 0이 될 때 실제 데이터를 지웁니다.</p>
<p><strong>저널링은 크래시 일관성을 지킵니다.</strong> 파일 쓰기는 여러 단계라 중간에 전원이 꺼지면 일부만 반영돼 깨집니다. 그래서 실제 쓰기 전에 "무엇을 바꿀지"를 저널에 먼저 기록하고, 크래시 후 저널만 되짚어(완결된 건 마저 반영, 미완은 버림) 복구합니다. 전체 디스크 검사(fsck) 없이 빠릅니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="q28" aria-label="28번 자신 있음"></label>
<details>
<summary><span><span class="qtag">IO-05</span><span class="qtext">공유 메모리와 메시지 전달 방식의 IPC는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p>프로세스는 격리돼 있어 데이터를 주고받으려면 IPC가 필요합니다.</p>
<ul>
<li><strong>공유 메모리</strong> — 두 프로세스에 같은 물리 영역을 매핑해 직접 읽고 씀. 복사가 없어 빠르지만, 동시 접근 동기화(락)를 직접 해야 하고 오염 위험이 있음</li>
<li><strong>메시지 전달</strong> — 파이프·소켓·메시지 큐로 커널이 중개해 복사·전달. 복사·커널 개입으로 느리지만, 각자 자기 메모리만 만져 격리·안전하고 동기화 문제가 적음</li>
</ul>
<p>핵심은 <strong>속도(공유 메모리) vs 안전·단순함(메시지 전달)</strong>의 트레이드오프입니다. 스레드(공유·빠름·위험) vs 프로세스(격리·안전) 대비의 연장입니다.</p>
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

<script src="./interview.js"></script>
