import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "CS 면접 카드",
    pageTitleSuffix: "",
    // 랜덤 퀴즈 페이지의 인라인 스크립트는 SPA 내비게이션에서 재실행되지 않으므로 비활성화
    enableSPA: false,
    enablePopovers: true,
    analytics: null,
    locale: "ko-KR",
    baseUrl: "byeongchan99.github.io/CS-Card",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        // 본문 Noto Sans KR과 같은 Noto 슈퍼패밀리의 세리프 — 자획·글자폭이 맞물린다
        header: "Noto Serif KR",
        // 본문은 한글 글리프가 있는 폰트여야 OS 기본 폰트로 떨어지지 않는다.
        // Noto Sans KR에는 italic 축이 없으므로 includeItalic을 꺼야 한다 —
        // 켜두면 Google Fonts CSS2가 400을 반환해 세 폰트가 전부 로드 실패한다.
        body: { name: "Noto Sans KR", weights: [400, 600], includeItalic: false },
        code: "IBM Plex Mono",
      },
      colors: {
        // 노트/메모장 테마 — 쿨한 near-white 종이 + 따뜻한 포인트(빨간 여백선·앰버 형광펜)
        lightMode: {
          light: "#fcfbf8",
          lightgray: "#e3e1da",
          gray: "#97958d",
          darkgray: "#45474a",
          dark: "#26292e",
          secondary: "#35618e",
          tertiary: "#b5674c",
          highlight: "rgba(240, 200, 120, 0.15)",
          textHighlight: "#fff0a8aa",
        },
        // 다크 저널 — 중립-웜 다크
        darkMode: {
          light: "#1b1c1f",
          lightgray: "#34363a",
          gray: "#7e7f83",
          darkgray: "#d3d2cb",
          dark: "#eceae3",
          secondary: "#8fb3d9",
          tertiary: "#d99f83",
          highlight: "rgba(240, 200, 120, 0.10)",
          textHighlight: "#6e5f2e88",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      // prettyLinks는 링크 표시 텍스트에 path.basename을 돌린다. sync-content.mjs가
      // 항상 카드 제목을 라벨로 넣으므로 이득이 없고, 제목에 /가 들어가면 잘리기만 한다.
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest", prettyLinks: false }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // CustomOgImages는 빌드 속도를 위해 비활성화
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
