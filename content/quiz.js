// 랜덤 퀴즈 로직 (quiz.md에서 로드)
// 인라인 <script>는 Quartz 직렬화 과정에서 내용이 이스케이프되므로 외부 파일로 분리했다.
;(function () {
  var qEl = document.getElementById("quiz-question")
  var answerBtn = document.getElementById("quiz-answer")
  var nextBtn = document.getElementById("quiz-next")
  if (!qEl || !answerBtn || !nextBtn) return

  var pool = []
  var current = null

  function pick() {
    if (pool.length === 0) {
      qEl.textContent = "출제할 카드가 없습니다."
      return
    }
    var next = current
    while (pool.length > 1 && next === current) {
      next = pool[Math.floor(Math.random() * pool.length)]
    }
    if (pool.length === 1) next = pool[0]
    current = next
    qEl.textContent = current.question
    answerBtn.disabled = false
    nextBtn.disabled = false
  }

  answerBtn.addEventListener("click", function () {
    if (current) window.location.href = current.slug
  })
  nextBtn.addEventListener("click", pick)

  fetch("./quiz-data.json")
    .then(function (res) {
      return res.json()
    })
    .then(function (data) {
      pool = data
      pick()
    })
    .catch(function () {
      qEl.textContent = "퀴즈 데이터를 불러오지 못했습니다."
    })
})()
