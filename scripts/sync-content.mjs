// cards/ → content/cards/ 동기화 (빌드 전 실행)
// - parent가 있는 카드: 본문 상단에 상위 질문 링크 주입
// - related가 있는 카드: 본문 하단에 "연관 카드" 섹션 주입
// - 퀴즈 풀(status 완성 && parent 없음)로 content/quiz-data.json 생성
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
console.log(`synced ${cards.length} cards → content/cards, quiz pool: ${quizPool.length}`)
