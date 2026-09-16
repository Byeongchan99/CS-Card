---
title: 유니티 면접 대비 문답
---

유니티 요약 노트를 토대로 뽑은 예상 면접 문항입니다. 질문을 먼저 보고 소리 내어 답한 다음 펼쳐서 대조하세요. 체크박스로 자신 있는 문항을 표시하면 이 브라우저에 저장됩니다.

<div class="osiv">
<p class="note"><strong>답변 프레임.</strong> 정의 한 문장으로 결론 먼저 → 왜 그렇게 동작·설계됐는지 → 트레이드오프(꼬리질문의 90%가 여기를 찌릅니다) → 필요하면 실제 예시 한 줄. 단정("절대 안 됩니다")은 반례 하나로 무너지니 "일반적으로 ~지만 ~한 경우엔 다릅니다"로.</p>
<div class="bar">
<span class="prog"><b id="osiv-done">0</b> / <span id="osiv-total">42</span> 자신 있음</span>
<span class="bar-sp"></span>
<button class="tool" id="osiv-open" type="button">모두 펼치기</button>
<button class="tool" id="osiv-hide" type="button" aria-pressed="false">체크 숨기기</button>
<button class="tool" id="osiv-reset" type="button">초기화</button>
</div>
<section class="grp">
<div class="grp-head"><h3>생명주기와 실행 순서</h3><span class="cnt">5문항</span></div>
<p class="grp-note">콜백이 언제, 어떤 순서로 불리는지가 버그와 최적화의 출발점입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="q1" aria-label="1번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q2" aria-label="2번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q3" aria-label="3번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q4" aria-label="4번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q5" aria-label="5번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q6" aria-label="6번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q7" aria-label="7번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q8" aria-label="8번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q9" aria-label="9번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q10" aria-label="10번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q11" aria-label="11번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q12" aria-label="12번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q13" aria-label="13번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q14" aria-label="14번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q15" aria-label="15번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q16" aria-label="16번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q17" aria-label="17번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q18" aria-label="18번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q19" aria-label="19번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q20" aria-label="20번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q21" aria-label="21번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q22" aria-label="22번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q23" aria-label="23번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q24" aria-label="24번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q25" aria-label="25번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q26" aria-label="26번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q27" aria-label="27번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q28" aria-label="28번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q29" aria-label="29번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q30" aria-label="30번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q31" aria-label="31번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q32" aria-label="32번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q33" aria-label="33번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q34" aria-label="34번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q35" aria-label="35번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q36" aria-label="36번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q37" aria-label="37번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q38" aria-label="38번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q39" aria-label="39번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q40" aria-label="40번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q41" aria-label="41번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q42" aria-label="42번 자신 있음"></label>
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

<script src="./interview.js"></script>
