# CS-Card
CS 공부

# CS 카드 스터디 운영 정리

## 전체 구조
클로드 프로젝트(공부) → GitHub repo(카드 저장) → Claude Code(정비) → GitHub Pages 사이트(복습)

- 클로드 프로젝트: 면접관 모드 공부 세션. 프로젝트 지식에는 index.md만 둔다.
- GitHub repo (CS-Card): 카드 원본(.md)과 index.md, 나중엔 사이트 소스까지 보관.
- Claude Code: 주 1회 정비 담당 (related 링크, 스텁 카드, index.md 재생성, 커밋·푸시).
- 사이트: repo에 커밋되면 자동 배포. 랜덤 퀴즈·태그 분류·위키링크 복습용.

## 세팅 완료 (이미 한 것)
- [x] GitHub 저장소 생성 + index.md 생성
- [x] 클로드 프로젝트 생성 + 지침 최종본 붙여넣기
- [x] 프로젝트 지식에 index.md 연동

## 매 세션 루틴 (지금 ~ Claude Code 도입 전)
1. 프로젝트에서 새 대화 열기 (한 세션 = 한 대화, 대화 재사용 금지)
2. "오늘은 ○○ 주제" 한 줄로 시작 → 면접관 모드 문답
3. 세션 끝: 카드 .md 파일 여러 장 + 인덱스 줄 묶음 받기
4. repo의 cards 폴더에 카드 파일 일괄 업로드 (Upload files, 한 번에 가능)
   - 최초 1회만: Create new file에서 파일명을 cards/파일명.md로 써서 폴더 생성
5. index.md 열어서 받은 인덱스 줄들을 맨 아래에 붙여넣기
6. 프로젝트 쪽 인덱스 갱신 — 자동 아님!
   - GitHub 연동이면: 프로젝트 지식에서 Sync now 버튼
   - 직접 업로드였으면: 기존 파일 삭제 후 재업로드
   - 4~6번은 한 묶음 습관으로 (합쳐서 2~3분)

## 카드 10~20장 쌓인 뒤 (1회성)
1. Claude Code 설치
   - macOS/Linux: curl -fsSL https://claude.ai/install.sh | bash
   - Windows(PowerShell): irm https://claude.ai/install.ps1 | iex
   - Windows는 Git for Windows도 설치
2. git clone → 폴더에서 claude 실행 → claude.ai 구독 계정으로 로그인
3. repo 루트에 CLAUDE.md 작성 (정비 규칙 — 이건 그때 클로드와 같이 작성)
4. 첫 정비 실행 → index.md 자동 재생성 확인
5. Quartz 기반 GitHub Pages 사이트 구축 (랜덤 퀴즈 + parent 카드 제외 필터)

## Claude Code 도입 후 루틴 변화
- 매 세션: 카드 커밋까지는 동일, index.md 한 줄 추가는 불필요 (정비가 자동 재생성)
- 주 1회: Claude Code에서 "정비해줘" → related·스텁·인덱스·푸시 일괄 처리 → Sync now

## 잊기 쉬운 것
- 프로젝트 지식 갱신(Sync now)은 수동이다. 안 누르면 다음 세션이 낡은 인덱스를 본다.
- 프로젝트 지식에 카드 원문을 넣지 않는다. 인덱스만. (세션 비용 증가 방지)
- 카드를 모아뒀다 올리지 않는다. 세션 끝나면 바로 커밋. (인덱스 공백 방지)
- 한 대화에서 여러 세션을 이어가지 않는다. (대화가 길수록 사용량 낭비)
- 첫 세션의 카드는 템플릿 의도대로 나왔는지 점검할 것 (시험 세션의 목적)
