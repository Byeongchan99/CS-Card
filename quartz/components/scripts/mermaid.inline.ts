import { registerEscapeHandler, removeAllChildren } from "./util"

interface Position {
  x: number
  y: number
}

class DiagramPanZoom {
  private isDragging = false
  private startPan: Position = { x: 0, y: 0 }
  private currentPan: Position = { x: 0, y: 0 }
  private scale = 1
  private readonly MIN_SCALE = 0.5
  private readonly MAX_SCALE = 3

  cleanups: (() => void)[] = []

  constructor(
    private container: HTMLElement,
    private content: HTMLElement,
  ) {
    this.setupEventListeners()
    this.setupNavigationControls()
    this.resetTransform()
  }

  private setupEventListeners() {
    // Mouse drag events
    const mouseDownHandler = this.onMouseDown.bind(this)
    const mouseMoveHandler = this.onMouseMove.bind(this)
    const mouseUpHandler = this.onMouseUp.bind(this)

    // Touch drag events
    const touchStartHandler = this.onTouchStart.bind(this)
    const touchMoveHandler = this.onTouchMove.bind(this)
    const touchEndHandler = this.onTouchEnd.bind(this)

    const resizeHandler = this.resetTransform.bind(this)

    this.container.addEventListener("mousedown", mouseDownHandler)
    document.addEventListener("mousemove", mouseMoveHandler)
    document.addEventListener("mouseup", mouseUpHandler)

    this.container.addEventListener("touchstart", touchStartHandler, { passive: false })
    document.addEventListener("touchmove", touchMoveHandler, { passive: false })
    document.addEventListener("touchend", touchEndHandler)

    window.addEventListener("resize", resizeHandler)

    this.cleanups.push(
      () => this.container.removeEventListener("mousedown", mouseDownHandler),
      () => document.removeEventListener("mousemove", mouseMoveHandler),
      () => document.removeEventListener("mouseup", mouseUpHandler),
      () => this.container.removeEventListener("touchstart", touchStartHandler),
      () => document.removeEventListener("touchmove", touchMoveHandler),
      () => document.removeEventListener("touchend", touchEndHandler),
      () => window.removeEventListener("resize", resizeHandler),
    )
  }

  cleanup() {
    for (const cleanup of this.cleanups) {
      cleanup()
    }
  }

  private setupNavigationControls() {
    const controls = document.createElement("div")
    controls.className = "mermaid-controls"

    // Zoom controls
    const zoomIn = this.createButton("+", () => this.zoom(0.1))
    const zoomOut = this.createButton("-", () => this.zoom(-0.1))
    const resetBtn = this.createButton("Reset", () => this.resetTransform())

    controls.appendChild(zoomOut)
    controls.appendChild(resetBtn)
    controls.appendChild(zoomIn)

    this.container.appendChild(controls)
  }

  private createButton(text: string, onClick: () => void): HTMLButtonElement {
    const button = document.createElement("button")
    button.textContent = text
    button.className = "mermaid-control-button"
    button.addEventListener("click", onClick)
    window.addCleanup(() => button.removeEventListener("click", onClick))
    return button
  }

  private onMouseDown(e: MouseEvent) {
    if (e.button !== 0) return // Only handle left click
    this.isDragging = true
    this.startPan = { x: e.clientX - this.currentPan.x, y: e.clientY - this.currentPan.y }
    this.container.style.cursor = "grabbing"
  }

  private onMouseMove(e: MouseEvent) {
    if (!this.isDragging) return
    e.preventDefault()

    this.currentPan = {
      x: e.clientX - this.startPan.x,
      y: e.clientY - this.startPan.y,
    }

    this.updateTransform()
  }

  private onMouseUp() {
    this.isDragging = false
    this.container.style.cursor = "grab"
  }

  private onTouchStart(e: TouchEvent) {
    if (e.touches.length !== 1) return
    this.isDragging = true
    const touch = e.touches[0]
    this.startPan = { x: touch.clientX - this.currentPan.x, y: touch.clientY - this.currentPan.y }
  }

  private onTouchMove(e: TouchEvent) {
    if (!this.isDragging || e.touches.length !== 1) return
    e.preventDefault() // Prevent scrolling

    const touch = e.touches[0]
    this.currentPan = {
      x: touch.clientX - this.startPan.x,
      y: touch.clientY - this.startPan.y,
    }

    this.updateTransform()
  }

  private onTouchEnd() {
    this.isDragging = false
  }

  private zoom(delta: number) {
    const newScale = Math.min(Math.max(this.scale + delta, this.MIN_SCALE), this.MAX_SCALE)

    // Zoom around center
    const rect = this.content.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const scaleDiff = newScale - this.scale
    this.currentPan.x -= centerX * scaleDiff
    this.currentPan.y -= centerY * scaleDiff

    this.scale = newScale
    this.updateTransform()
  }

  private updateTransform() {
    this.content.style.transform = `translate(${this.currentPan.x}px, ${this.currentPan.y}px) scale(${this.scale})`
  }

  private resetTransform() {
    const svg = this.content.querySelector("svg")!
    const rect = svg.getBoundingClientRect()
    const width = rect.width / this.scale
    const height = rect.height / this.scale

    this.scale = 1
    this.currentPan = {
      x: (this.container.clientWidth - width) / 2,
      y: (this.container.clientHeight - height) / 2,
    }
    this.updateTransform()
  }
}

const cssVars = [
  "--secondary",
  "--tertiary",
  "--gray",
  "--light",
  "--lightgray",
  "--highlight",
  "--dark",
  "--darkgray",
  "--codeFont",
  "--bodyFont",
] as const

// 종이색(--light)과 글자색(--darkgray)을 t 비율로 섞은 hex. mermaid는 색을 직접 계산하므로
// color-mix() 같은 CSS 식이 아니라 실제 색 값을 넘겨야 한다.
function mixColor(a: string, b: string, t: number): string {
  const rgb = (c: string) => {
    c = c.trim()
    if (c.startsWith("#")) {
      if (c.length === 4) c = "#" + [...c.slice(1)].map((x) => x + x).join("")
      return [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16))
    }
    return (c.match(/\d+/g) ?? ["0", "0", "0"]).slice(0, 3).map(Number)
  }
  const x = rgb(a)
  const y = rgb(b)
  return (
    "#" +
    x.map((v, i) => Math.round(v + (y[i] - v) * t).toString(16).padStart(2, "0")).join("")
  )
}

let mermaidImport = undefined
document.addEventListener("nav", async () => {
  const center = document.querySelector(".center") as HTMLElement
  const nodes = center.querySelectorAll("code.mermaid") as NodeListOf<HTMLElement>
  if (nodes.length === 0) return

  mermaidImport ||= await import(
    // @ts-ignore
    "https://cdnjs.cloudflare.com/ajax/libs/mermaid/11.4.0/mermaid.esm.min.mjs"
  )
  const mermaid = mermaidImport.default

  const textMapping: WeakMap<HTMLElement, string> = new WeakMap()
  for (const node of nodes) {
    textMapping.set(node, node.innerText)
  }

  async function renderMermaid() {
    // de-init any other diagrams
    for (const node of nodes) {
      node.removeAttribute("data-processed")
      const oldText = textMapping.get(node)
      if (oldText) {
        node.innerHTML = oldText
      }
    }

    const computedStyleMap = cssVars.reduce(
      (acc, key) => {
        acc[key] = window.getComputedStyle(document.documentElement).getPropertyValue(key)
        return acc
      },
      {} as Record<(typeof cssVars)[number], string>,
    )

    const darkMode = document.documentElement.getAttribute("saved-theme") === "dark"
    // 노트의 인라인 SVG 그림과 같은 시각 언어로 맞춘다 — 본문 글꼴, 종이색에 글자색을 살짝 섞은
    // 중립 채움·회색 테두리(갈색 --tertiary를 쓰지 않음). 강조색은 custom.scss의 노드 클래스로 준다.
    // 다크도 "dark" 테마 대신 같은 base 테마에 다크 색을 넣어 두 모드가 같은 구조를 갖게 한다.
    const paper = computedStyleMap["--light"]
    const ink = computedStyleMap["--darkgray"]
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "loose",
      theme: "base",
      themeVariables: {
        darkMode,
        background: paper,
        fontFamily: computedStyleMap["--bodyFont"],
        fontSize: "15px",
        primaryColor: mixColor(paper, ink, 0.06),
        primaryTextColor: ink,
        primaryBorderColor: mixColor(paper, ink, 0.38),
        secondaryColor: mixColor(paper, ink, 0.06),
        tertiaryColor: paper,
        lineColor: mixColor(paper, ink, 0.55),
        textColor: ink,
        clusterBkg: mixColor(paper, ink, 0.03),
        clusterBorder: mixColor(paper, ink, 0.3),
        edgeLabelBackground: paper,
        labelBackgroundColor: paper,
        stateBkg: mixColor(paper, ink, 0.06),
        stateBorder: mixColor(paper, ink, 0.38),
        transitionColor: mixColor(paper, ink, 0.55),
        transitionLabelColor: ink,
        specialStateColor: mixColor(paper, ink, 0.6),
        innerEndBackground: mixColor(paper, ink, 0.6),
      },
    })

    await mermaid.run({ nodes })
  }

  await renderMermaid()
  document.addEventListener("themechange", renderMermaid)
  window.addCleanup(() => document.removeEventListener("themechange", renderMermaid))

  for (let i = 0; i < nodes.length; i++) {
    const codeBlock = nodes[i] as HTMLElement
    const pre = codeBlock.parentElement as HTMLPreElement
    const clipboardBtn = pre.querySelector(".clipboard-button") as HTMLButtonElement
    const expandBtn = pre.querySelector(".expand-button") as HTMLButtonElement

    const clipboardStyle = window.getComputedStyle(clipboardBtn)
    const clipboardWidth =
      clipboardBtn.offsetWidth +
      parseFloat(clipboardStyle.marginLeft || "0") +
      parseFloat(clipboardStyle.marginRight || "0")

    // Set expand button position
    expandBtn.style.right = `calc(${clipboardWidth}px + 0.3rem)`
    pre.prepend(expandBtn)

    // query popup container
    const popupContainer = pre.querySelector("#mermaid-container") as HTMLElement
    if (!popupContainer) return

    let panZoom: DiagramPanZoom | null = null
    function showMermaid() {
      const container = popupContainer.querySelector("#mermaid-space") as HTMLElement
      const content = popupContainer.querySelector(".mermaid-content") as HTMLElement
      if (!content) return
      removeAllChildren(content)

      // Clone the mermaid content
      const mermaidContent = codeBlock.querySelector("svg")!.cloneNode(true) as SVGElement
      content.appendChild(mermaidContent)

      // Show container
      popupContainer.classList.add("active")
      container.style.cursor = "grab"

      // Initialize pan-zoom after showing the popup
      panZoom = new DiagramPanZoom(container, content)
    }

    function hideMermaid() {
      popupContainer.classList.remove("active")
      panZoom?.cleanup()
      panZoom = null
    }

    expandBtn.addEventListener("click", showMermaid)
    registerEscapeHandler(popupContainer, hideMermaid)

    window.addCleanup(() => {
      panZoom?.cleanup()
      expandBtn.removeEventListener("click", showMermaid)
    })
  }
})
