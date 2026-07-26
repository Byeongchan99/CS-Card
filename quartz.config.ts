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
        header: "Nanum Myeongjo",
        body: "Source Sans Pro",
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
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
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
