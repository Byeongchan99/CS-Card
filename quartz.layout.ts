import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
// 타입 전용 import — 런타임 import 가 되면 레이아웃 모듈이 불필요한 코드를 끌어온다
import type { FileTrieNode } from "./quartz/util/fileTrie"

// 탐색기 폴더 표시명. 카드는 sync-content.mjs 가 대분류(tags[0])별 하위 폴더로 나눠
// 복사하는데, 파일명에 #을 쓸 수 없어 C# 대분류만 폴더가 C샵이 되므로 표시만 되돌린다.
// 최상위 세 폴더(cards/deep-notes/summary-notes)도 영문 경로를 한글 표시로 바꾼다.
//
// 이 함수는 Explorer 가 mapFn.toString() 으로 직렬화해 브라우저에서 실행한다.
// 따라서 본문에서 바깥 값을 참조하면 안 된다 — 리터럴만 쓸 것.
// (const 로 빼서 공유하는 것은 안전하다. 직렬화되는 건 함수 소스 자체이므로
//  내용 페이지와 목록 페이지의 표시명이 갈리지 않게 한 곳에서 관리한다.)
const explorerMapFn = (node: FileTrieNode) => {
  if (node.slugSegment === "C샵") {
    node.displayName = "C#"
  }
  if (node.slugSegment === "cards") {
    node.displayName = "질문 카드"
  }
  if (node.slugSegment === "deep-notes") {
    node.displayName = "심화 노트"
  }
  if (node.slugSegment === "summary-notes") {
    node.displayName = "요약 노트"
  }
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/Byeongchan99/CS-Card",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({ mapFn: explorerMapFn }),
  ],
  right: [
    Component.ChainMap(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({ mapFn: explorerMapFn }),
  ],
  right: [],
}
