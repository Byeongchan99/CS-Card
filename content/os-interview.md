---
title: 운영체제 면접 대비 문답
---

운영체제 요약 노트를 토대로 뽑은 예상 면접 문항입니다. 질문을 먼저 보고 소리 내어 답한 다음 펼쳐서 대조하세요. 체크박스로 자신 있는 문항을 표시하면 이 브라우저에 저장됩니다.

<div class="osiv">
<p class="note"><strong>답변 프레임.</strong> 정의 한 문장으로 결론 먼저 → 왜 그렇게 동작·설계됐는지 → 트레이드오프(꼬리질문의 90%가 여기를 찌릅니다) → 필요하면 실제 예시 한 줄. 단정("절대 안 됩니다")은 반례 하나로 무너지니 "일반적으로 ~지만 ~한 경우엔 다릅니다"로.</p>
<div class="bar">
<span class="prog"><b id="osiv-done">0</b> / <span id="osiv-total">43</span> 자신 있음</span>
<span class="bar-sp"></span>
<button class="tool" id="osiv-open" type="button">모두 펼치기</button>
<button class="tool" id="osiv-hide" type="button" aria-pressed="false">체크 숨기기</button>
<button class="tool" id="osiv-reset" type="button">초기화</button>
</div>
<section class="grp">
<div class="grp-head"><h3>메모리 관리</h3><span class="cnt">13문항</span></div>
<p class="grp-note">메모리 계층·지역성부터 가상 메모리·페이징까지, "왜"를 파고드는 꼬리질문이 많습니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="q1" aria-label="1번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q2" aria-label="2번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q3" aria-label="3번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q4" aria-label="4번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q5" aria-label="5번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q6" aria-label="6번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q7" aria-label="7번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q8" aria-label="8번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q9" aria-label="9번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q10" aria-label="10번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q11" aria-label="11번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q12" aria-label="12번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q13" aria-label="13번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q14" aria-label="14번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q15" aria-label="15번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q16" aria-label="16번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q17" aria-label="17번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q18" aria-label="18번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q19" aria-label="19번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q20" aria-label="20번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q21" aria-label="21번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q22" aria-label="22번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q23" aria-label="23번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q24" aria-label="24번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q25" aria-label="25번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q26" aria-label="26번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q27" aria-label="27번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q28" aria-label="28번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q29" aria-label="29번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q30" aria-label="30번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q31" aria-label="31번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q32" aria-label="32번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q33" aria-label="33번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q34" aria-label="34번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q35" aria-label="35번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q36" aria-label="36번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q37" aria-label="37번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q38" aria-label="38번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q39" aria-label="39번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q40" aria-label="40번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q41" aria-label="41번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q42" aria-label="42번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q43" aria-label="43번 자신 있음"></label>
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

<script src="./interview.js"></script>
