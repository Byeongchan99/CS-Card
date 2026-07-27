import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative } from "../util/path"
import { classNames } from "../util/lang"
import style from "./styles/chainMap.scss"

// quartz/util/path.ts 의 sluggify 와 동일해야 parent(제목) → 파일 슬러그 매칭이 맞는다
function sluggify(s: string): string {
  return s
    .replace(/\s/g, "-")
    .replace(/&/g, "-and-")
    .replace(/%/g, "-percent")
    .replace(/\?/g, "")
    .replace(/#/g, "")
}

interface ChainOptions {
  // parent 도 자식도 없는 단독 카드에서는 패널을 숨긴다
  hideWhenTrivial: boolean
}

const defaultOptions: ChainOptions = {
  hideWhenTrivial: true,
}

export default ((opts?: Partial<ChainOptions>) => {
  const options: ChainOptions = { ...defaultOptions, ...opts }

  const ChainMap: QuartzComponent = ({ fileData, allFiles, displayClass }: QuartzComponentProps) => {
    type Card = (typeof allFiles)[number]
    const cards = allFiles.filter((f) => f.slug?.startsWith("cards/"))
    const baseName = (f: Card) => f.slug!.split("/").pop()!

    // 파일명(슬러그 말단)과 title 양쪽으로 조회 맵을 만든다
    const byKey = new Map<string, Card>()
    for (const f of cards) {
      byKey.set(baseName(f), f)
      const t = f.frontmatter?.title
      if (typeof t === "string" && t.length > 0) byKey.set(t, f)
    }

    const resolveParent = (f: Card): Card | undefined => {
      const p = f.frontmatter?.parent
      if (typeof p !== "string" || p.trim().length === 0) return undefined
      const key = p.trim()
      return byKey.get(key) ?? byKey.get(sluggify(key))
    }

    // 자식 = 자신을 parent 로 가리키는 카드들
    const childrenOf = new Map<string, Card[]>()
    for (const f of cards) {
      const par = resolveParent(f)
      if (par) {
        const arr = childrenOf.get(par.slug!) ?? []
        arr.push(f)
        childrenOf.set(par.slug!, arr)
      }
    }
    const kids = (f: Card): Card[] =>
      (childrenOf.get(f.slug!) ?? [])
        .slice()
        .sort((a, b) => (a.frontmatter?.title ?? "").localeCompare(b.frontmatter?.title ?? "", "ko"))

    const cur = cards.find((f) => f.slug === fileData.slug)
    if (!cur) return null

    // 루트(메인 질문)까지 parent 를 타고 올라간다 (사이클 방어)
    let root: Card = cur
    const up = new Set<string>([cur.slug!])
    while (true) {
      const par = resolveParent(root)
      if (!par || up.has(par.slug!)) break
      up.add(par.slug!)
      root = par
    }

    if (options.hideWhenTrivial && root.slug === cur.slug && kids(cur).length === 0) {
      return null
    }

    // 계층이 CSS 가이드선으로 그려지도록 중첩 ul 로 낸다
    // (평평한 목록 + 들여쓰기로는 부모-자식 관계가 표현되지 않는다)
    const visited = new Set<string>()
    const render = (f: Card): any => {
      if (visited.has(f.slug!)) return null
      visited.add(f.slug!)
      const isCur = f.slug === cur.slug
      const isRoot = f.slug === root.slug
      const children = kids(f)
        .map((c) => render(c))
        .filter(Boolean)
      return (
        <li class={`chain-item${isCur ? " chain-cur" : ""}`}>
          {isCur ? (
            <span class="chain-self">{f.frontmatter?.title}</span>
          ) : (
            <a href={resolveRelative(fileData.slug!, f.slug!)} class="internal">
              {f.frontmatter?.title}
            </a>
          )}
          {isRoot ? <span class="chain-badge">메인</span> : null}
          {children.length > 0 ? <ul class="chain-children">{children}</ul> : null}
        </li>
      )
    }

    return (
      <div class={classNames(displayClass, "chain-map")}>
        <h3>이 카드의 체인</h3>
        <ul class="chain-list">{render(root)}</ul>
      </div>
    )
  }

  ChainMap.css = style
  return ChainMap
}) satisfies QuartzComponentConstructor
