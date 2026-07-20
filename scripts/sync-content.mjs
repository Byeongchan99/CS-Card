// cards/ → content/cards/ 동기화 (빌드 전 실행)
// - parent가 있는 카드: 본문 상단에 상위 질문 링크 주입
// - related가 있는 카드: 본문 하단에 "연관 카드" 섹션 주입
// - 퀴즈 풀(status 완성 && parent 없음)로 content/quiz-data.json 생성
// - content/index.md의 CATEGORIES 마커 영역에 태그별 카드 수 그리드를 주입
//   (빌드 시에만 채워지며, 커밋된 index.md에는 빈 마커만 남는다)
// 원본 cards/*.md는 절대 수정하지 않는다.
import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const root = process.cwd()
const cardsDir = path.join(root, "cards")
const contentDir = path.join(root, "content")
const outDir = path.join(contentDir, "cards")

// quartz/util/path.ts의 sluggify와 동일해야 카드 페이지 URL과 일치한다
function sluggify(s) {
  return s
    .split("/")
    .map((segment) =>
      segment
        .replace(/\s/g, "-")
        .replace(/&/g, "-and-")
        .replace(/%/g, "-percent")
        .replace(/\?/g, "")
        .replace(/#/g, ""),
    )
    .join("/")
    .replace(/\/$/, "")
}

function splitFrontmatter(raw) {
  const m = raw.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/)
  if (!m) return { head: "", body: raw }
  return { head: m[0], body: raw.slice(m[0].length) }
}

function extractQuestion(body) {
  const m = body.match(/^## 질문\s*\r?\n([\s\S]*?)(?=\r?\n## |$)/m)
  let q = m ? m[1].trim() : ""
  return q
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2")
    .replace(/\[\[([^\]]+)\]\]/g, "$1")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
}

const files = fs.readdirSync(cardsDir).filter((f) => f.endsWith(".md"))
const cards = files.map((file) => {
  const raw = fs.readFileSync(path.join(cardsDir, file), "utf8")
  return { file, base: file.replace(/\.md$/, ""), raw, fm: matter(raw).data ?? {} }
})

const byBase = new Set(cards.map((c) => c.base))
const byTitle = new Map(cards.map((c) => [String(c.fm.title ?? "").trim(), c.base]))

// parent·related 값(제목 또는 파일명)을 실제 카드 파일명으로 해석
function resolveName(name) {
  const n = String(name).trim()
  if (byBase.has(n)) return n
  return byTitle.get(n) ?? null
}

fs.rmSync(outDir, { recursive: true, force: true })
fs.mkdirSync(outDir, { recursive: true })

const quizPool = []
for (const card of cards) {
  const { head, body } = splitFrontmatter(card.raw)
  const parent = typeof card.fm.parent === "string" ? card.fm.parent.trim() : ""
  let newBody = body

  if (parent) {
    const target = resolveName(parent)
    newBody = `> 상위 질문: ${target ? `[[${target}]]` : parent}\n\n${newBody}`
  }

  const related = Array.isArray(card.fm.related) ? card.fm.related : []
  if (related.length > 0) {
    const items = related.map((r) => {
      const target = resolveName(r)
      return `- ${target ? `[[${target}]]` : r}`
    })
    newBody = `${newBody.replace(/\s*$/, "\n")}\n## 연관 카드\n\n${items.join("\n")}\n`
  }

  fs.writeFileSync(path.join(outDir, card.file), head + newBody)

  if (String(card.fm.status ?? "").trim() === "완성" && !parent) {
    quizPool.push({
      slug: sluggify(`cards/${card.base}`),
      title: String(card.fm.title ?? card.base),
      question: extractQuestion(body),
    })
  }
}

fs.writeFileSync(path.join(contentDir, "quiz-data.json"), JSON.stringify(quizPool, null, 2))

// 홈 카테고리 그리드 자동 생성: 태그별 카드 수를 세어 index.md의 마커 영역에 주입
const tagCounts = new Map()
for (const card of cards) {
  const tags = Array.isArray(card.fm.tags) ? card.fm.tags : []
  for (const tag of tags) {
    const t = String(tag).trim()
    if (t) tagCounts.set(t, (tagCounts.get(t) ?? 0) + 1)
  }
}

const sortedTags = [...tagCounts.entries()].sort(
  (a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "ko"),
)

const cardsHtml = sortedTags
  .map(
    ([tag, count]) =>
      `  <a class="category-card" href="./tags/${sluggify(tag)}">` +
      `<div class="accent"></div><div class="body">` +
      `<div class="name">${tag}</div><div class="count">${count}개 카드</div></div></a>`,
  )
  .join("\n")

const grid = `<!-- CATEGORIES:START -->\n<div class="category-grid">\n${cardsHtml}\n</div>\n<!-- CATEGORIES:END -->`
const indexPath = path.join(contentDir, "index.md")
const indexRaw = fs.readFileSync(indexPath, "utf8")
const marker = /<!-- CATEGORIES:START -->[\s\S]*?<!-- CATEGORIES:END -->/
if (marker.test(indexRaw)) {
  fs.writeFileSync(indexPath, indexRaw.replace(marker, grid))
} else {
  console.warn("index.md에 CATEGORIES 마커가 없어 카테고리 그리드를 주입하지 못했습니다")
}

console.log(
  `synced ${cards.length} cards → content/cards, quiz pool: ${quizPool.length}, categories: ${sortedTags.length}`,
)
