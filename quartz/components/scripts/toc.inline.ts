const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    const slug = entry.target.id
    const tocEntryElements = document.querySelectorAll(`a[data-for="${slug}"]`)
    const windowHeight = entry.rootBounds?.height
    if (windowHeight && tocEntryElements.length > 0) {
      if (entry.boundingClientRect.y < windowHeight) {
        tocEntryElements.forEach((tocEntryElement) => tocEntryElement.classList.add("in-view"))
      } else {
        tocEntryElements.forEach((tocEntryElement) => tocEntryElement.classList.remove("in-view"))
      }
    }
  }
})

// 읽는 위치를 따라 목차가 스스로 스크롤되게 한다(스크롤스파이).
// 기준은 뷰포트 상단에서 조금 아래의 "읽는 줄"을 마지막으로 지난 헤딩이다.
// (.in-view는 뷰포트 바닥 기준이라 위로 스크롤할 때 본문과 어긋나므로 쓰지 않는다.)
// 그 헤딩의 목차 항목이 목차 창 밖으로 나가면 목차 컨테이너의 scrollTop만 직접 조정해
// 다시 창 안으로 들인다(페이지 스크롤에는 영향을 주지 않는다).
let headers: HTMLElement[] = []
let rafPending = false

function activeHeadingSlug(): string | null {
  if (headers.length === 0) return null
  const line = Math.min(160, window.innerHeight * 0.25) // 이 줄을 지난 마지막 헤딩이 현재 섹션
  let current: HTMLElement | null = null
  for (const h of headers) {
    if (h.getBoundingClientRect().top - line <= 0) current = h
    else break // 헤딩은 문서 순서(위→아래)라 줄 아래로 처음 벗어나면 멈춤
  }
  // 첫 헤딩도 아직 안 지났으면(문서 맨 위) 첫 헤딩을 현재로 삼아 목차도 맨 위로
  return (current ?? headers[0]).id
}

function syncTocScroll() {
  rafPending = false
  const slug = activeHeadingSlug()
  if (!slug) return
  for (const content of document.querySelectorAll<HTMLElement>(".toc-content")) {
    if (content.classList.contains("collapsed")) continue
    if (content.scrollHeight <= content.clientHeight) continue // 넘치지 않으면 스크롤 불필요

    const anchor = content.querySelector<HTMLElement>(`a[data-for="${slug}"]`)
    if (!anchor) continue

    const el = (anchor.closest("li") as HTMLElement | null) ?? anchor
    const maxScroll = content.scrollHeight - content.clientHeight
    const elTop = el.getBoundingClientRect().top - content.getBoundingClientRect().top + content.scrollTop
    const elCenter = elTop + el.offsetHeight / 2

    // 활성 항목을 목차 창 가운데 밴드(위·아래 25%) 안에 유지한다. 밴드를 벗어나면 가운데로
    // 되돌리므로 스크롤 방향에 상관없이 대칭이고, 문서 양 끝에선 clamp로 목차도 끝까지 간다.
    const relative = elCenter - content.scrollTop
    const band = content.clientHeight * 0.25
    if (relative < band || relative > content.clientHeight - band) {
      const target = Math.max(0, Math.min(elCenter - content.clientHeight / 2, maxScroll))
      content.scrollTo({ top: target, behavior: "smooth" })
    }
  }
}

function onScroll() {
  if (rafPending) return
  rafPending = true
  requestAnimationFrame(syncTocScroll)
}

function toggleToc(this: HTMLElement) {
  this.classList.toggle("collapsed")
  this.setAttribute(
    "aria-expanded",
    this.getAttribute("aria-expanded") === "true" ? "false" : "true",
  )
  const content = this.nextElementSibling as HTMLElement | undefined
  if (!content) return
  content.classList.toggle("collapsed")
}

function setupToc() {
  for (const toc of document.getElementsByClassName("toc")) {
    const button = toc.querySelector(".toc-header")
    const content = toc.querySelector(".toc-content")
    if (!button || !content) return
    button.addEventListener("click", toggleToc)
    window.addCleanup(() => button.removeEventListener("click", toggleToc))
  }
}

document.addEventListener("nav", () => {
  setupToc()

  // update toc entry highlighting
  observer.disconnect()
  headers = Array.from(
    document.querySelectorAll<HTMLElement>("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]"),
  )
  headers.forEach((header) => observer.observe(header))

  // 읽는 위치를 따라 목차 자동 스크롤 (rAF로 프레임당 1회로 스로틀)
  window.addEventListener("scroll", onScroll, { passive: true })
  window.addCleanup(() => window.removeEventListener("scroll", onScroll))
  syncTocScroll() // 진입 시 초기 위치 반영
})
