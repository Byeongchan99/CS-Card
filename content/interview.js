// 면접 대비 문답 페이지 공유 로직 (분야별 *-interview.md에서 <script src="./interview.js">로 로드)
// 인라인 <script>/<style>는 Quartz 직렬화에서 이스케이프되므로 CSS도 여기서 주입한다.
// 페이지 구조: .osiv 안에 .q(체크박스+details)들, 툴바 버튼 id는 osiv-open/hide/reset,
// 진행률 표시는 #osiv-done / #osiv-total. 진행 상태는 페이지 경로별로 localStorage에 저장된다.
;(function () {
  var root = document.querySelector(".osiv")
  if (!root) return

  // ---------- 스타일 주입 (페이지당 한 번; SPA 네비게이션 시 중복 방지) ----------
  if (!document.getElementById("osiv-style")) {
  var CSS = `
.osiv {
  --osiv-surface: #ffffff;
  --osiv-surface-2: #f0f2f6;
  --osiv-ink-2: #3d444f;
  --osiv-muted: #6a7280;
  --osiv-rule: #dfe3ea;
  --osiv-rule-soft: #eaedf2;
  --osiv-accent: #1f55d0;
  --osiv-accent-ink: #16409e;
  --osiv-accent-soft: #e8eefb;
  --osiv-flag: #a55a08;
  --osiv-flag-soft: #fbf0df;
  --osiv-ok: #1c7a55;
  --osiv-mono: ui-monospace, SFMono-Regular, Menlo, monospace;
  word-break: keep-all;
  overflow-wrap: break-word;
}
:root[saved-theme="dark"] .osiv {
  --osiv-surface: #1a1e25;
  --osiv-surface-2: #212630;
  --osiv-ink-2: #c2c8d3;
  --osiv-muted: #929baa;
  --osiv-rule: #2c323d;
  --osiv-rule-soft: #242932;
  --osiv-accent: #7aa3ff;
  --osiv-accent-ink: #a6c1ff;
  --osiv-accent-soft: #1d2740;
  --osiv-flag: #dfa144;
  --osiv-flag-soft: #2c2418;
  --osiv-ok: #5fc79b;
}
.osiv .dek { color: var(--osiv-ink-2); margin: 0 0 6px; }
.osiv .note {
  margin: 18px 0 4px; padding: 13px 16px; background: var(--osiv-accent-soft);
  border-radius: 4px; font-size: 0.9em; line-height: 1.7; color: var(--osiv-ink-2);
}
.osiv .note strong { color: inherit; }

/* 답변 프레임 */
.osiv .frame { margin: 26px 0; }
.osiv .frame h3 { margin: 0 0 10px; }
.osiv ol.steps { list-style: none; counter-reset: s; margin: 0; padding: 0; display: grid; gap: 8px; }
.osiv ol.steps li {
  counter-increment: s; display: grid; grid-template-columns: 26px 1fr; gap: 10px; align-items: baseline;
}
.osiv ol.steps li::before {
  content: counter(s, decimal-leading-zero); font-family: var(--osiv-mono);
  font-size: 0.72em; color: var(--osiv-accent); letter-spacing: 0.04em;
}
.osiv ol.steps b { font-weight: 600; }
.osiv ol.steps span { color: var(--osiv-ink-2); }

/* 툴바 */
.osiv .bar {
  position: sticky; top: 0; z-index: 5;
  background: var(--osiv-surface);
  border: 1px solid var(--osiv-rule); border-radius: 4px;
  padding: 9px 13px; margin: 22px 0 8px;
  display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
}
.osiv .prog {
  font-family: var(--osiv-mono); font-size: 0.8em; color: var(--osiv-muted);
  font-variant-numeric: tabular-nums; white-space: nowrap;
}
.osiv .prog b { color: var(--osiv-ok); font-weight: 600; }
.osiv .bar-sp { flex: 1 1 auto; }
.osiv button.tool {
  font: inherit; font-size: 0.8em; font-weight: 500; color: var(--osiv-ink-2);
  background: var(--osiv-surface); border: 1px solid var(--osiv-rule);
  border-radius: 4px; padding: 5px 11px; cursor: pointer; line-height: 1.5;
}
.osiv button.tool:hover { border-color: var(--osiv-accent); color: var(--osiv-accent); }
.osiv button.tool[aria-pressed="true"] {
  background: var(--osiv-accent); border-color: var(--osiv-accent); color: #fff;
}

/* 그룹 */
.osiv section.grp { margin: 34px 0 0; }
.osiv .grp-head {
  display: flex; align-items: baseline; gap: 10px;
  padding-bottom: 8px; border-bottom: 2px solid var(--osiv-ink-2); margin-bottom: 2px;
}
.osiv .grp-head h3 { margin: 0; font-size: 1.15em; }
.osiv .grp-head .cnt {
  font-family: var(--osiv-mono); font-size: 0.72em; color: var(--osiv-muted);
  margin-left: auto; font-variant-numeric: tabular-nums;
}
.osiv .grp-note { margin: 10px 0 4px; color: var(--osiv-muted); font-size: 0.85em; }

/* 질문 */
.osiv .q { display: grid; grid-template-columns: 28px 1fr; border-bottom: 1px solid var(--osiv-rule-soft); }
.osiv .q.done { opacity: 0.5; }
.osiv.hide-done .q.done { display: none; }
.osiv .chk { display: flex; align-items: start; justify-content: center; padding-top: 18px; }
.osiv .chk input {
  appearance: none; -webkit-appearance: none; width: 15px; height: 15px;
  border: 1.5px solid var(--osiv-rule); border-radius: 3px; background: var(--osiv-surface);
  cursor: pointer; margin: 0; display: grid; place-content: center;
}
.osiv .chk input:hover { border-color: var(--osiv-ok); }
.osiv .chk input:checked { background: var(--osiv-ok); border-color: var(--osiv-ok); }
.osiv .chk input:checked::after {
  content: ""; width: 8px; height: 4px;
  border-left: 2px solid #fff; border-bottom: 2px solid #fff;
  transform: rotate(-45deg) translate(1px, -1px);
}
.osiv details { min-width: 0; }
.osiv summary {
  list-style: none; cursor: pointer; padding: 13px 0 13px 6px;
  display: grid; grid-template-columns: 1fr 16px; gap: 12px; align-items: start;
}
.osiv summary::-webkit-details-marker { display: none; }
.osiv .qtag {
  display: block; font-family: var(--osiv-mono); font-size: 0.68em;
  letter-spacing: 0.08em; color: var(--osiv-accent); margin-bottom: 2px;
}
.osiv .qtext { font-size: 1.02em; font-weight: 600; line-height: 1.5; }
.osiv .chev { width: 16px; height: 16px; margin-top: 5px; color: var(--osiv-muted); transition: transform .18s ease; flex: none; }
.osiv details[open] .chev { transform: rotate(180deg); }
.osiv .ans { padding: 2px 0 20px 6px; display: grid; gap: 14px; }
.osiv .lab {
  font-family: var(--osiv-mono); font-size: 0.66em; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--osiv-muted); margin: 0 0 5px;
}
.osiv .core { border-left: 2px solid var(--osiv-accent); padding-left: 14px; }
.osiv .core p { margin: 0 0 8px; color: var(--osiv-ink-2); }
.osiv .core p:last-child { margin-bottom: 0; }
.osiv .core ul { margin: 5px 0 8px; padding-left: 17px; color: var(--osiv-ink-2); }
.osiv .core li { margin-bottom: 3px; }
.osiv .tails { padding-left: 15px; }
.osiv .tails ul { margin: 0; padding: 0; list-style: none; display: grid; gap: 9px; }
.osiv .tails li { display: grid; grid-template-columns: 15px 1fr; gap: 8px; font-size: 0.92em; color: var(--osiv-ink-2); }
.osiv .tails li::before { content: "↳"; font-family: var(--osiv-mono); color: var(--osiv-flag); font-size: 0.85em; line-height: 1.8; }
.osiv .tails q { display: block; color: var(--osiv-accent-ink); font-weight: 600; quotes: "“" "”"; margin-bottom: 1px; }
.osiv .trap { background: var(--osiv-flag-soft); border-radius: 4px; padding: 11px 14px; font-size: 0.92em; color: var(--osiv-ink-2); }
.osiv .trap .lab { color: var(--osiv-flag); }
.osiv .trap p { margin: 0; }
.osiv code {
  font-family: var(--osiv-mono); font-size: 0.88em; background: var(--osiv-surface-2);
  padding: 0.08em 0.34em; border-radius: 3px; color: var(--osiv-accent-ink);
}
.osiv .close { margin-top: 40px; padding-top: 22px; border-top: 2px solid var(--osiv-ink-2); }
.osiv .close ul { margin: 0; padding-left: 18px; color: var(--osiv-ink-2); display: grid; gap: 6px; }
@media (max-width: 620px) {
  .osiv .q { grid-template-columns: 24px 1fr; }
}
`
  var styleEl = document.createElement("style")
  styleEl.id = "osiv-style"
  styleEl.textContent = CSS
  document.head.appendChild(styleEl)
  }

  // ---------- 체크리스트 (페이지 경로별로 저장) ----------
  var KEY = "interview-prep:" + (location.pathname || "default")
  var boxes = Array.prototype.slice.call(root.querySelectorAll(".chk input"))
  var doneEl = document.getElementById("osiv-done")
  var totalEl = document.getElementById("osiv-total")
  if (totalEl) totalEl.textContent = boxes.length

  function load() {
    try {
      var raw = localStorage.getItem(KEY)
      return raw ? JSON.parse(raw) : []
    } catch (e) {
      return []
    }
  }
  function save(ids) {
    try {
      localStorage.setItem(KEY, JSON.stringify(ids))
    } catch (e) {}
  }
  function sync() {
    var n = 0
    boxes.forEach(function (b) {
      var row = b.closest(".q")
      if (b.checked) {
        n++
        row.classList.add("done")
      } else {
        row.classList.remove("done")
      }
    })
    if (doneEl) doneEl.textContent = n
    save(
      boxes
        .filter(function (b) {
          return b.checked
        })
        .map(function (b) {
          return b.id
        }),
    )
  }

  var saved = load()
  boxes.forEach(function (b) {
    if (saved.indexOf(b.id) !== -1) b.checked = true
    b.addEventListener("change", sync)
  })
  sync()

  // ---------- 툴바 ----------
  var details = Array.prototype.slice.call(root.querySelectorAll(".q details"))
  var openBtn = document.getElementById("osiv-open")
  if (openBtn) {
    openBtn.addEventListener("click", function () {
      var anyClosed = details.some(function (d) {
        return !d.open
      })
      details.forEach(function (d) {
        d.open = anyClosed
      })
      openBtn.textContent = anyClosed ? "모두 접기" : "모두 펼치기"
    })
  }

  var hideBtn = document.getElementById("osiv-hide")
  if (hideBtn) {
    hideBtn.addEventListener("click", function () {
      var on = hideBtn.getAttribute("aria-pressed") === "true"
      hideBtn.setAttribute("aria-pressed", on ? "false" : "true")
      root.classList.toggle("hide-done", !on)
    })
  }

  var resetBtn = document.getElementById("osiv-reset")
  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      boxes.forEach(function (b) {
        b.checked = false
      })
      sync()
    })
  }
})()
