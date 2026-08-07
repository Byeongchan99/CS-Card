// cards/ → content/cards/<대분류>/ 동기화 (빌드 전 실행)
// - 대분류(tags[0])별 하위 폴더로 나눠 좌측 탐색기가 카테고리로 묶이게 한다
// - parent가 있는 카드: 본문 상단에 상위 질문 링크 주입
// - 심화 노트가 다루는 카드: 본문 상단에 심화 노트 링크 주입
// - related가 있는 카드: 본문 하단에 "연관 카드" 섹션 주입
// - 퀴즈 풀(status 완성 && parent 없음)로 content/quiz-data.json 생성
// - content/index.md의 CATEGORIES 마커 영역에 태그별 카드 수 그리드를 주입
//   (빌드 시에만 채워지며, 커밋된 index.md에는 빈 마커만 남는다)
//
// deep-notes/ → content/deep-notes/<대분류>/ (심화 노트: 질문 체인 하나를 통으로 해설.
//   카드처럼 대분류별 하위 폴더로 나눠 탐색기가 카테고리로 묶게 한다)
// summary-notes/ → content/summary-notes/ (요약 노트: 분야를 얕고 넓게. 카드와 무관)
// 원본 cards/*.md는 절대 수정하지 않는다.
import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const root = process.cwd()
const cardsDir = path.join(root, "cards")
const deepDir = path.join(root, "deep-notes")
const summaryDir = path.join(root, "summary-notes")
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

// frontmatter 값이 문자열 하나로 와도 배열로 다룬다 (chains: "루트카드" 표기 허용)
const asArray = (v) =>
  Array.isArray(v) ? v : typeof v === "string" && v.trim() ? [v.trim()] : []

function readDocs(dir) {
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8")
      return { file, base: file.replace(/\.md$/, ""), raw, fm: matter(raw).data ?? {} }
    })
}

const cards = readDocs(cardsDir)
const deepNotes = readDocs(deepDir)
const summaryNotes = readDocs(summaryDir)

const byBase = new Map(cards.map((c) => [c.base, c]))

// 대분류(tags[0])별 하위 폴더로 나눈다 → Quartz 탐색기가 카테고리별로 묶어 보여준다.
// 폴더명은 화면에도 그대로 노출되므로(탐색기는 슬러그가 아니라 파일 경로 세그먼트를
// 표시한다) 공백을 하이픈으로 바꾸지 않는다. URL을 깨뜨리는 문자만 치환.
// 대분류(태그) → 카드 하위 폴더명. URL을 깨뜨리는 문자만 치환한다(#→샵 등).
// 공백은 여기서 바꾸지 않는다 — 폴더명은 화면에 그대로 노출되기 때문(탐색기).
function catDirName(tag) {
  const raw = String(tag ?? "").trim()
  if (!raw) return "기타"
  return raw.replace(/#/g, "샵").replace(/[/:?%&=.]/g, "-")
}

function categoryDir(fm) {
  const tags = Array.isArray(fm.tags) ? fm.tags : []
  return catDirName(tags[0])
}

const dirOf = new Map(cards.map((c) => [c.base, categoryDir(c.fm)]))

// 링크는 파일명만 쓰지 않고 항상 전체 경로로 낸다.
// CrawlLinks 의 "shortest" 전략은 파일명이 유일할 때만 매칭하는데, 전체 경로로
// 적으면 그 휴리스틱을 아예 타지 않아 폴더가 바뀌어도 해석이 흔들리지 않는다.
const slugOf = (base) => `cards/${dirOf.get(base)}/${base}`

// 제목 → 파일명. 제목이 겹치면 완성 카드가 이기도록 완성을 뒤에 놓아 덮어쓴다
// (스텁이 같은 제목의 실제 카드를 가리는 것을 방지)
const byTitle = new Map()
for (const c of [...cards].sort(
  (a, b) => (a.fm.status === "완성" ? 1 : 0) - (b.fm.status === "완성" ? 1 : 0),
)) {
  const t = String(c.fm.title ?? "").trim()
  if (t) byTitle.set(t, c.base)
}

// parent·related·위키링크 값(파일명 또는 제목 또는 공백 표기)을 실제 카드 파일명으로 해석
function resolveName(name) {
  const n = String(name).trim()
  if (byBase.has(n)) return n
  const byT = byTitle.get(n)
  if (byT) return byT
  // "Boehm GC가 객체를 …" 처럼 공백으로 적혔지만 제목과는 안 맞는 표기 → 슬러그로 한 번 더
  const s = sluggify(n)
  return byBase.has(s) ? s : null
}

const titleOf = (base) => String(byBase.get(base)?.fm?.title ?? "").trim() || base

// 링크는 위키링크가 아니라 마크다운 링크로 낸다.
// - Quartz는 위키링크 표시 텍스트로 대상의 title이 아니라 원문 문자열을 그대로 쓴다.
//   링크 대상은 파일명이어야 안 깨지므로, 그대로 두면 하이픈이 그대로 노출된다.
// - 별칭 [[파일명|제목]]은 ofm.ts의 wikilinkRegex가 별칭에 #을 허용하지 않아
//   제목에 C#이 든 카드가 [[...]] 리터럴로 찍힌다.
// 꺾쇠 목적지 <...>는 괄호가 든 파일명(List의-Add가-상환-O(1)인-이유)을 안전하게 감싼다.
const mdLink = (base) => `[${titleOf(base)}](<${slugOf(base)}>)`

// ── 심화 노트 ↔ 카드 연결 ───────────────────────────────────────────────
// 노트가 frontmatter로 카드를 가리키는 단방향이다. 원본 카드는 건드리지 않는다.
//   chains: 체인 루트 카드 → parent 트리를 타고 자손까지 전부 전개
//   cards:  체인 일부만 다루는 노트를 위한 개별 지정
// 한 노트가 여러 체인을 아우르고 한 카드가 여러 노트에 걸리므로 양쪽 다 다대다다.
const deepByBase = new Map(deepNotes.map((n) => [n.base, n]))
// 심화 노트도 카드와 같이 대분류(tags[0])별 하위 폴더로 나눈다 → 탐색기가 카테고리로 묶는다.
// 폴더명은 카드와 동일한 catDirName 규칙(공백은 그대로, URL 깨뜨리는 문자만 치환)이라
// 같은 대분류면 카드와 심화 노트가 같은 이름의 폴더로 나란히 표시된다.
const deepDirOf = new Map(deepNotes.map((n) => [n.base, categoryDir(n.fm)]))
const noteTitleOf = (base) => String(deepByBase.get(base)?.fm?.title ?? "").trim() || base
const noteLink = (base) => `[${noteTitleOf(base)}](<deep-notes/${deepDirOf.get(base)}/${base}>)`

// parent → 자식 목록. ChainMap.tsx 와 같은 규칙(자식 = 자신을 parent 로 가리키는 카드)
const childrenOf = new Map()
for (const c of cards) {
  const p = typeof c.fm.parent === "string" ? resolveName(c.fm.parent) : null
  if (!p) continue
  const arr = childrenOf.get(p) ?? []
  arr.push(c.base)
  childrenOf.set(p, arr)
}

// 루트에서 시작해 자손을 전위 순회로 펼친다. 형제는 ChainMap 과 같이 제목순.
function expandChain(rootBase, out = []) {
  if (out.includes(rootBase)) return out // 사이클 방어
  out.push(rootBase)
  const kids = (childrenOf.get(rootBase) ?? [])
    .slice()
    .sort((a, b) => titleOf(a).localeCompare(titleOf(b), "ko"))
  for (const kid of kids) expandChain(kid, out)
  return out
}

const notesOfCard = new Map() // 카드 base → 심화 노트 base[]
const cardsOfNote = new Map() // 심화 노트 base → 카드 base[]

for (const note of deepNotes) {
  const covered = []
  const add = (base) => {
    if (base && !covered.includes(base)) covered.push(base)
  }
  for (const name of asArray(note.fm.chains)) {
    const target = resolveName(name)
    if (target) expandChain(target).forEach(add)
    else console.warn(`심화 노트 ${note.file}: chains "${name}"에 해당하는 카드가 없습니다`)
  }
  for (const name of asArray(note.fm.cards)) {
    const target = resolveName(name)
    if (target) add(target)
    else console.warn(`심화 노트 ${note.file}: cards "${name}"에 해당하는 카드가 없습니다`)
  }
  cardsOfNote.set(note.base, covered)
  for (const base of covered) {
    const arr = notesOfCard.get(base) ?? []
    arr.push(note.base)
    notesOfCard.set(base, arr)
  }
}

// 본문 위키링크를 "파일명으로 연결되고 제목으로 보이는" 마크다운 링크로 바꾼다.
// 해석되지 않는 링크(예: aliases로만 존재하는 이름)는 그대로 둬서 Quartz가 처리하게 한다.
// 원본 카드는 건드리지 않고 content/ 사본에서만 교정한다.
function rewriteWikilinks(text) {
  return text.replace(/\[\[([^\]]+)\]\]/g, (full, inner) => {
    const target = resolveName(inner)
    return target ? mdLink(target) : full
  })
}

fs.rmSync(outDir, { recursive: true, force: true })
fs.mkdirSync(outDir, { recursive: true })

const quizPool = []
for (const card of cards) {
  const { head, body } = splitFrontmatter(card.raw)
  const parent = typeof card.fm.parent === "string" ? card.fm.parent.trim() : ""
  let newBody = rewriteWikilinks(body)

  // 심화 노트 → 상위 질문 순으로 prepend 하면 최종 표시는 상위 질문이 위, 심화 노트가 아래
  const notes = notesOfCard.get(card.base) ?? []
  if (notes.length > 0) {
    newBody = `> 심화 노트: ${notes.map(noteLink).join(" · ")}\n\n${newBody}`
  }

  if (parent) {
    const target = resolveName(parent)
    newBody = `> 상위 질문: ${target ? mdLink(target) : parent}\n\n${newBody}`
  }

  const related = Array.isArray(card.fm.related) ? card.fm.related : []
  if (related.length > 0) {
    const items = related.map((r) => {
      const target = resolveName(r)
      return `- ${target ? mdLink(target) : r}`
    })
    newBody = `${newBody.replace(/\s*$/, "\n")}\n## 연관 카드\n\n${items.join("\n")}\n`
  }

  const cardOutDir = path.join(outDir, dirOf.get(card.base))
  fs.mkdirSync(cardOutDir, { recursive: true })
  fs.writeFileSync(path.join(cardOutDir, card.file), head + newBody)

  if (String(card.fm.status ?? "").trim() === "완성" && !parent) {
    quizPool.push({
      slug: sluggify(slugOf(card.base)),
      title: String(card.fm.title ?? card.base),
      question: extractQuestion(body),
    })
  }
}

fs.writeFileSync(path.join(contentDir, "quiz-data.json"), JSON.stringify(quizPool, null, 2))

// 위키링크 교정은 카드와 같은 경로를 타므로 노트 본문에서도 [[카드 제목]]이 그대로 통한다.
// subdirOf 를 주면 doc 별 하위 폴더로 나눈다(심화 노트를 대분류별로 묶을 때 사용).
function syncNotes(docs, outSubdir, decorate, subdirOf) {
  const dir = path.join(contentDir, outSubdir)
  fs.rmSync(dir, { recursive: true, force: true })
  if (docs.length === 0) return
  fs.mkdirSync(dir, { recursive: true })
  for (const doc of docs) {
    const { head, body } = splitFrontmatter(doc.raw)
    let newBody = rewriteWikilinks(body)
    if (decorate) newBody = decorate(doc, newBody)
    const targetDir = subdirOf ? path.join(dir, subdirOf(doc)) : dir
    fs.mkdirSync(targetDir, { recursive: true })
    fs.writeFileSync(path.join(targetDir, doc.file), head + newBody)
  }
}

// 심화 노트: 카드처럼 대분류별 하위 폴더로 나눠 탐색기에서 카테고리로 묶이게 한다.
syncNotes(
  deepNotes,
  "deep-notes",
  (note, body) => {
    const covered = cardsOfNote.get(note.base) ?? []
    if (covered.length === 0) return body
    const items = covered.map((base) => `- ${mdLink(base)}`)
    return `${body.replace(/\s*$/, "\n")}\n## 다루는 카드\n\n${items.join("\n")}\n`
  },
  (note) => deepDirOf.get(note.base),
)

// 요약 노트: 파일 하나가 곧 대분류이므로 하위 폴더로 쪼개지 않는다.
syncNotes(summaryNotes, "summary-notes")

// 홈 카테고리 그리드 자동 생성: 대분류(첫 태그)별 카드 수를 세어 index.md의 마커 영역에 주입
// (세부태그는 그리드에서 제외 — Quartz 태그 페이지로 접근)
// 링크는 태그 페이지가 아니라 카드 폴더 페이지로 보낸다 — 태그 페이지에는 심화·요약 노트가
// 섞이지만, 카드 폴더 페이지에는 그 대분류의 카드만 나와 "N개 카드" 카운트와 일치한다.
const tagCounts = new Map()
for (const card of cards) {
  const tags = Array.isArray(card.fm.tags) ? card.fm.tags : []
  const dae = tags.length ? String(tags[0]).trim() : ""
  if (dae) tagCounts.set(dae, (tagCounts.get(dae) ?? 0) + 1)
}

const sortedTags = [...tagCounts.entries()].sort(
  (a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "ko"),
)

const cardsHtml = sortedTags
  .map(
    ([tag, count]) =>
      `  <a class="category-card" href="./cards/${sluggify(catDirName(tag))}/">` +
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
  `synced ${cards.length} cards → content/cards, quiz pool: ${quizPool.length}, categories: ${sortedTags.length}\n` +
    `       ${deepNotes.length} deep notes → content/deep-notes ` +
    `(카드 ${notesOfCard.size}장에 심화 노트 링크 주입), ` +
    `${summaryNotes.length} summary notes → content/summary-notes`,
)
