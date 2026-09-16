---
title: 디자인 패턴 면접 대비 문답
---

디자인 패턴 요약 노트를 토대로 뽑은 예상 면접 문항입니다. 질문을 먼저 보고 소리 내어 답한 다음 펼쳐서 대조하세요. 체크박스로 자신 있는 문항을 표시하면 이 브라우저에 저장됩니다.

<div class="osiv">
<p class="note"><strong>답변 프레임.</strong> 정의 한 문장으로 결론 먼저 → 왜 그런 설계가 나왔는지 → 트레이드오프(꼬리질문의 90%가 여기를 찌릅니다) → 필요하면 실제 예시 한 줄. 패턴 이름을 외워 나열하기보다, "어떤 문제를 푸는가"와 "안 쓰면 무엇이 나빠지는가"로 답하세요. 단정("무조건 이게 낫습니다")은 반례 하나로 무너지니 "일반적으로 ~지만 ~한 경우엔 다릅니다"로.</p>
<div class="bar">
<span class="prog"><b id="osiv-done">0</b> / <span id="osiv-total">30</span> 자신 있음</span>
<span class="bar-sp"></span>
<button class="tool" id="osiv-open" type="button">모두 펼치기</button>
<button class="tool" id="osiv-hide" type="button" aria-pressed="false">체크 숨기기</button>
<button class="tool" id="osiv-reset" type="button">초기화</button>
</div>
<section class="grp">
<div class="grp-head"><h3>생성 패턴</h3><span class="cnt">6문항</span></div>
<p class="grp-note">객체를 어떻게 만들지를 다룹니다. 공통 동기는 "생성 코드를 사용처에서 떼어내 결합을 낮추는 것"입니다.</p>
<div class="q">
<label class="chk"><input type="checkbox" id="q1" aria-label="1번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q2" aria-label="2번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q3" aria-label="3번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q4" aria-label="4번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q5" aria-label="5번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q6" aria-label="6번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q7" aria-label="7번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q8" aria-label="8번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q9" aria-label="9번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q10" aria-label="10번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q11" aria-label="11번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q12" aria-label="12번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q13" aria-label="13번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q14" aria-label="14번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q15" aria-label="15번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q16" aria-label="16번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q17" aria-label="17번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q18" aria-label="18번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q19" aria-label="19번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q20" aria-label="20번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q21" aria-label="21번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q22" aria-label="22번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q23" aria-label="23번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q24" aria-label="24번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q25" aria-label="25번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q26" aria-label="26번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q27" aria-label="27번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q28" aria-label="28번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q29" aria-label="29번 자신 있음"></label>
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
<label class="chk"><input type="checkbox" id="q30" aria-label="30번 자신 있음"></label>
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

<script src="./interview.js"></script>
