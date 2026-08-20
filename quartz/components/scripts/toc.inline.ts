// 읽는 위치를 따라 목차가 스스로 스크롤되게 한다(스크롤스파이).
// .in-view는 화면 아래 경계 위쪽의 모든 헤딩에 붙으므로, 가장 아래 in-view 항목이
// 현재 읽고 있는 지점이다. 그 항목이 목차 창 밖으로 나가면 목차 컨테이너의 scrollTop만
// 직접 조정해 다시 창 안으로 들인다(페이지 스크롤에는 영향을 주지 않는다).
function scrollActiveTocEntryIntoView() {
  for (const content of document.querySelectorAll<HTMLElement>(".toc-content")) {
    if (content.classList.contains("collapsed")) continue
    if (content.scrollHeight <= content.clientHeight) continue // 넘치지 않으면 스크롤 불필요

    const active = content.querySelectorAll<HTMLElement>("a.in-view")
    if (active.length === 0) continue

    const el = (active[active.length - 1].closest("li") as HTMLElement | null) ?? active[active.length - 1]
    const elTop = el.getBoundingClientRect().top - content.getBoundingClientRect().top + content.scrollTop
    const elBottom = elTop + el.offsetHeight
    const viewTop = content.scrollTop
    const viewBottom = viewTop + content.clientHeight
    const margin = Math.min(el.offsetHeight * 2, content.clientHeight / 3)

    if (elTop < viewTop + margin) {
      content.scrollTo({ top: Math.max(0, elTop - margin), behavior: "smooth" })
    } else if (elBottom > viewBottom - margin) {
      content.scrollTo({ top: elBottom - content.clientHeight + margin, behavior: "smooth" })
    }
  }
}

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
  scrollActiveTocEntryIntoView()
})

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
  const headers = document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]")
  headers.forEach((header) => observer.observe(header))
})
