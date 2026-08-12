// 슬러그/폴더 세그먼트를 화면 표시명으로 되돌린다.
// quartz.layout.ts의 explorerMapFn과 같은 매핑을, Explorer 밖(Breadcrumbs·TagList·
// 태그 페이지 제목 등)에서도 쓰기 위해 한 곳에 모은다. 데이터(슬러그·태그 값)는
// 그대로 두고 표시만 보정하는 것이 원칙이다.
//
// "C#"는 경로/슬러그에 #을 쓸 수 없어 두 갈래로 축약된다:
//   - 카드 폴더명: sync-content의 catDirName이 "C샵"으로 바꾼다
//   - 태그 슬러그: Quartz의 sluggify가 #을 제거해 "C"가 된다
// 둘 다 화면에는 "C#"로 되돌린다.
export function prettyLabel(segment: string): string {
  switch (segment) {
    case "C샵":
    case "C":
      return "C#"
    case "cards":
      return "질문 카드"
    case "deep-notes":
      return "심화 노트"
    case "summary-notes":
      return "요약 노트"
    default:
      return segment
  }
}
