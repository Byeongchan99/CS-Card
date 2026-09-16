---
title: C# 면접 대비 문답
---

C# 요약 노트를 토대로 뽑은 예상 면접 문항입니다. 질문을 먼저 보고 소리 내어 답한 다음 펼쳐서 대조하세요. 체크박스로 자신 있는 문항을 표시하면 이 브라우저에 저장됩니다.

<div class="osiv">
<p class="note"><strong>답변 프레임.</strong> 정의 한 문장으로 결론 먼저 → 왜 그렇게 동작·설계됐는지 → 트레이드오프(꼬리질문의 90%가 여기를 찌릅니다) → 필요하면 실제 예시 한 줄. 단정("절대 안 됩니다")은 반례 하나로 무너지니 "일반적으로 ~지만 ~한 경우엔 다릅니다"로.</p>
<div class="bar">
<span class="prog"><b id="osiv-done">0</b> / <span id="osiv-total">30</span> 자신 있음</span>
<span class="bar-sp"></span>
<button class="tool" id="osiv-open" type="button">모두 펼치기</button>
<button class="tool" id="osiv-hide" type="button" aria-pressed="false">체크 숨기기</button>
<button class="tool" id="osiv-reset" type="button">초기화</button>
</div>
<section class="grp">
<div class="grp-head"><h3>값 타입과 참조 타입</h3><span class="cnt">4문항</span></div>
<p class="grp-note">변수 칸에 무엇이 담기느냐가 대입·비교·복사의 모든 차이를 만듭니다. C#에서 가장 자주 파고드는 축입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="q1" aria-label="1번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q2" aria-label="2번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q3" aria-label="3번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q4" aria-label="4번 자신 있음"></label>
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
<div class="grp-head"><h3>메모리와 박싱</h3><span class="cnt">3문항</span></div>
<p class="grp-note">할당이 어디서 일어나는지 보는 눈이 성능 질문의 바탕입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="q5" aria-label="5번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q6" aria-label="6번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q7" aria-label="7번 자신 있음"></label>
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
</section>
<section class="grp">
<div class="grp-head"><h3>GC와 리소스 관리</h3><span class="cnt">3문항</span></div>
<p class="grp-note">가비지 컬렉터가 무엇을 챙기고 무엇을 못 챙기는지가 핵심입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="q8" aria-label="8번 자신 있음"></label>
<details>
<summary><span><span class="qtag">GC-01</span><span class="qtext">세대별 GC는 어떻게 동작하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>객체를 나이로 세대를 나눠서, 대부분 금방 죽는 젊은 객체만 자주 훑는 방식입니다.</strong></p>
<p>힙을 0세대, 1세대, 2세대로 나눕니다. 새로 만든 객체는 0세대에 들어가고, 수집에서 살아남으면 위 세대로 승격됩니다. 0세대 수집이 빠른 건 최근에 할당된 작은 영역만 훑으면 되고, 대부분의 객체는 금방 죽어서 적은 일로 많이 회수하기 때문입니다.</p>
<p>오래 살아남은 객체는 2세대로 올라가 훨씬 드물게 수집됩니다. 자주 안 죽을 객체를 매번 검사하는 낭비를 줄이는 겁니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>게임에서 GC 때문에 프레임이 튀는데 어떻게 줄이나요?</q>매 프레임 새로 할당하는 걸 줄이는 게 핵심입니다. 임시 객체가 계속 생기면 0세대가 자주 차서 수집이 잦아집니다. 그래서 자주 쓰는 객체는 미리 만들어 재사용하는 오브젝트 풀을 쓰고, 박싱이나 문자열 이어붙이기처럼 숨은 할당을 걷어냅니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="q9" aria-label="9번 자신 있음"></label>
<details>
<summary><span><span class="qtag">GC-02</span><span class="qtext">가비지 컬렉터가 있는데 왜 IDisposable과 using이 필요한가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>가비지 컬렉터는 관리되는 메모리만 회수하고, 파일 핸들이나 소켓 같은 비관리 자원은 챙기지 못하기 때문입니다.</strong></p>
<p>메모리는 가비지 컬렉터가 알아서 정리하지만, 운영체제가 쥐여준 파일 핸들이나 네트워크 소켓, 네이티브 메모리 같은 건 언제 어떻게 풀어야 하는지 모릅니다. 게다가 수집이 도는 시점도 정해져 있지 않아서, 자원을 언제 놓을지 예측할 수 없습니다.</p>
<p>그래서 <code>IDisposable</code>의 <code>Dispose</code>로 이런 자원을 직접 놓아 주고, <code>using</code>으로 감싸서 블록을 벗어나거나 예외가 나도 <code>Dispose</code>가 반드시 불리게 보장합니다.</p>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="q10" aria-label="10번 자신 있음"></label>
<details>
<summary><span><span class="qtag">GC-03</span><span class="qtext">문자열이 불변이라 생기는 문제와 StringBuilder는 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
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
<div class="grp-head"><h3>상속과 다형성</h3><span class="cnt">3문항</span></div>
<p class="grp-note">선언 타입과 런타임 타입 중 무엇을 기준으로 부르는지가 관건입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="q11" aria-label="11번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q12" aria-label="12번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q13" aria-label="13번 자신 있음"></label>
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
<div class="grp-head"><h3>델리게이트와 지연 실행</h3><span class="cnt">4문항</span></div>
<p class="grp-note">호출과 실행이 분리되는 지점, 그리고 무엇을 캡처하는지가 자주 나옵니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="q14" aria-label="14번 자신 있음"></label>
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
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="q15" aria-label="15번 자신 있음"></label>
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
<li><span><q>같은 쿼리를 두 번 쓰면 어떻게 되나요?</q>두 번 다 계산됩니다. 열거할 때마다 처음부터 다시 도는 거라, 무거운 쿼리를 여러 번 쓰거나 결과를 고정하고 싶으면 <code>ToList</code>로 한 번 실체화해 두고 그걸 재사용합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="q16" aria-label="16번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q17" aria-label="17번 자신 있음"></label>
<details>
<summary><span><span class="qtag">DEL-04</span><span class="qtext">for 루프 안에서 만든 람다가 왜 예상과 다른 값을 출력하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>람다가 반복 변수의 값을 복사해 가는 게 아니라 그 변수 자체를 공유해서 캡처하기 때문입니다.</strong></p>
<p>for 문의 변수 하나를 여러 람다가 함께 캡처하면, 나중에 람다가 실행될 때 다들 그 변수의 마지막 상태를 봅니다. 0부터 2까지 도는 루프라면 끝날 때 변수가 3이 되어 있으니, 람다들이 모두 3을 출력합니다.</p>
<p>고치려면 반복마다 새 지역 변수에 값을 복사하고 그 지역 변수를 캡처하게 합니다. 그러면 각 람다가 자기만의 변수를 잡아서 0, 1, 2가 제대로 나옵니다.</p>
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
<div class="grp-head"><h3>제네릭과 타입 도구</h3><span class="cnt">3문항</span></div>
<p class="grp-note">컴파일러에게 무엇을 약속하고 무엇을 얻는지를 설명할 수 있어야 합니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="q18" aria-label="18번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q19" aria-label="19번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q20" aria-label="20번 자신 있음"></label>
<details>
<summary><span><span class="qtag">GEN-03</span><span class="qtext">as와 괄호 캐스트는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
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
</section>
<section class="grp">
<div class="grp-head"><h3>값의 함정과 null</h3><span class="cnt">3문항</span></div>
<p class="grp-note">사소해 보이지만 실수가 잦아 코드 리뷰에서 자주 걸리는 지점입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="q21" aria-label="21번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q22" aria-label="22번 자신 있음"></label>
<details>
<summary><span><span class="qtag">TRAP-02</span><span class="qtext">const와 readonly는 어떻게 다른가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
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
<div class="q">
<label class="chk"><input type="checkbox" id="q23" aria-label="23번 자신 있음"></label>
<details>
<summary><span><span class="qtag">TRAP-03</span><span class="qtext">nullable 참조 타입 기능은 무엇인가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
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
<div class="grp-head"><h3>비동기와 동시성</h3><span class="cnt">3문항</span></div>
<p class="grp-note">비동기와 병렬을 구분하고, 공유 상태를 어떻게 지키는지가 핵심입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="q24" aria-label="24번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q25" aria-label="25번 자신 있음"></label>
<details>
<summary><span><span class="qtag">ASYNC-02</span><span class="qtext">lock은 무엇이고 무엇을 잠가야 하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>lock은 한 번에 한 스레드만 임계 구역에 들이는 장치로, 바깥에 드러나지 않은 전용 객체로 잠가야 합니다.</strong></p>
<p>여러 스레드가 같은 데이터를 동시에 고치면 값이 꼬이는데, <code>lock</code>으로 그 구간을 감싸면 한 스레드가 끝날 때까지 다른 스레드가 기다립니다. 잠글 객체는 바깥에서 접근할 수 없는 전용 인스턴스를 씁니다. this나 타입 객체로 잠그면 바깥 코드도 같은 걸로 잠글 수 있어 예상 못 한 교착이 생기기 때문입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>잠금 말고 다른 방법도 있나요?</q>동시 접근이 잦으면 잠금 자체가 병목이 됩니다. 그럴 때는 스레드 안전하게 만들어진 동시성 컬렉션을 쓰거나, 단순한 증감이면 <code>Interlocked</code> 같은 원자적 연산으로 잠금 없이 처리하는 편이 경합을 줄여 유리합니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="q26" aria-label="26번 자신 있음"></label>
<details>
<summary><span><span class="qtag">ASYNC-03</span><span class="qtext">try, catch, finally는 어떻게 동작하나요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>try에서 예외가 나면 남은 코드를 건너뛰고 맞는 catch로 가며, finally는 예외가 나든 안 나든 항상 실행됩니다.</strong></p>
<p><code>try</code> 도중에 예외가 터지면 그 지점부터 아래는 실행되지 않고, 타입이 맞는 <code>catch</code>로 점프합니다. <code>finally</code>는 정상 흐름이든 예외 흐름이든 반드시 실행되어서, 파일이나 잠금 같은 자원을 놓는 자리로 씁니다. <code>using</code>이 사실 이 <code>try</code>와 <code>finally</code>의 축약입니다.</p>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>catch를 쓸 때 주의할 점은요?</q>구체적인 예외 타입부터 잡아야 합니다. 그리고 빈 catch로 예외를 삼켜서 조용히 넘기면, 문제가 숨어 나중에 더 찾기 어려워집니다. 처리하든 로그를 남기든 다시 던지든 해야 합니다.</span></li>
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
<label class="chk"><input type="checkbox" id="q27" aria-label="27번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q28" aria-label="28번 자신 있음"></label>
<details>
<summary><span><span class="qtag">SIT-02</span><span class="qtext">리스트를 foreach로 돌면서 죽은 적을 Remove했더니 예외가 납니다. 왜 그런가요?</span></span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary>
<div class="ans">
<div class="core">
<p class="lab">핵심 답변</p>
<p><strong>foreach로 도는 중에 컬렉션의 크기를 바꿔서입니다.</strong></p>
<p>열거자는 도는 동안 컬렉션이 바뀌면 그걸 감지해 예외를 던집니다. 순회 중에 원소를 지우면 지금 보고 있는 위치가 어긋나서, 조용히 잘못 도느니 바로 멈추는 겁니다. 고치는 방법은 몇 가지입니다.</p>
<ul>
<li><strong>역순 for 문.</strong> 뒤에서 앞으로 인덱스로 돌면 지워도 남은 인덱스가 안 밀려서 안전합니다.</li>
<li><strong>복사본 순회.</strong> 원본을 복사해 그걸 돌면서 원본을 지웁니다.</li>
<li><strong>조건 삭제.</strong> RemoveAll에 조건을 주면 한 번에 안전하게 지웁니다.</li>
</ul>
</div>
<div class="tails">
<p class="lab">꼬리질문</p>
<ul>
<li><span><q>왜 역순 for는 괜찮은가요?</q>앞에서 지우면 뒤 원소들이 한 칸씩 당겨져 인덱스가 어긋나지만, 뒤에서부터 지우면 이미 지나온 뒤쪽만 영향받아서 아직 안 본 앞쪽 인덱스는 그대로이기 때문입니다.</span></li>
</ul>
</div>
</div>
</details>
</div>
<div class="q">
<label class="chk"><input type="checkbox" id="q29" aria-label="29번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q30" aria-label="30번 자신 있음"></label>
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

<script src="./interview.js"></script>
