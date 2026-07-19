---
title: 랜덤 퀴즈
---

무작위 카드의 질문만 보여줍니다. 답을 떠올린 뒤 정답을 확인하세요. (스텁 카드와 꼬리 질문 카드는 출제되지 않습니다.)

<blockquote id="quiz-question" style="white-space: pre-wrap; min-height: 4rem;">문제를 불러오는 중...</blockquote>
<div style="display: flex; gap: 0.5rem;">
  <button id="quiz-answer" disabled style="padding: 0.5rem 1rem; cursor: pointer;">정답 보러 가기</button>
  <button id="quiz-next" disabled style="padding: 0.5rem 1rem; cursor: pointer;">다른 문제</button>
</div>

<script>
  (function () {
    var qEl = document.getElementById("quiz-question")
    var answerBtn = document.getElementById("quiz-answer")
    var nextBtn = document.getElementById("quiz-next")
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
      .then(function (res) { return res.json() })
      .then(function (data) {
        pool = data
        pick()
      })
      .catch(function () {
        qEl.textContent = "퀴즈 데이터를 불러오지 못했습니다."
      })
  })()
</script>
