# Code Mate Hub

Code Mate · Code Mate with OpenCode · Code Mate with Roo 통합 안내 페이지

## 🏗️ 기술 스택

- **VitePress** — 정적 사이트 생성기
- **GitHub Pages** — 호스팅
- **GitHub Actions** — 자동 배포
- **Sveltia CMS** — 웹 기반 콘텐츠 편집 UI
- **Cloudflare Workers** — CMS 인증 OAuth 프록시

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 로컬 개발 서버

```bash
npm run docs:dev
```

→ http://localhost:5173/code-mate-hub/ 에서 확인

### 3. 프로덕션 빌드

```bash
npm run docs:build
```

### 4. 빌드 결과 미리보기

```bash
npm run docs:preview
```

## 📦 GitHub Pages 배포 설정

### 1. Repo 생성 및 푸시

```bash
git init
git add .
git commit -m "init"
git remote add origin https://github.com/<your-org>/code-mate-hub.git
git push -u origin main
```

### 2. `docs/.vitepress/config.ts`의 `base` 수정

repo 이름과 일치시켜주세요. (예: repo 이름이 `hub`이면 `'/hub/'`)

### 3. GitHub Pages 활성화

1. Repo → **Settings** → **Pages**
2. **Source**를 **GitHub Actions**로 선택
3. main 브랜치에 push하면 자동 배포

### 4. 배포 URL

`https://<your-org>.github.io/code-mate-hub/`

## ✏️ CMS (웹 편집 UI)

### 접속 주소

`https://hyonisss.github.io/code-mate-hub/admin/`

### 동작 원리

```
편집자 브라우저
  → CMS 페이지 열기 (GitHub Pages에서 정적으로 서빙)
  → GitHub OAuth 로그인 시도
  → Cloudflare Worker(/auth)가 GitHub 인증 페이지로 리다이렉트
  → GitHub에서 로그인 승인
  → Cloudflare Worker(/callback)가 액세스 토큰 수령
  → CMS가 토큰으로 GitHub API 직접 호출
  → 글 작성/수정 시 GitHub 레포에 자동 커밋
  → GitHub Actions가 트리거되어 사이트 자동 재배포
```

CMS는 별도 서버 없이 **GitHub 레포를 데이터베이스**로 사용합니다.
Cloudflare Worker는 GitHub OAuth의 Client Secret을 브라우저에 노출하지 않기 위한 중계 역할만 합니다.

### CMS 구성 요소

| 구성 요소 | 역할 |
|---|---|
| `docs/public/admin/index.html` | CMS UI 진입점 (Sveltia CMS 로드) |
| `docs/public/admin/config.yml` | CMS 컬렉션·백엔드 설정 |
| Cloudflare Worker `cms-auth` | GitHub OAuth 토큰 교환 프록시 |
| GitHub OAuth App | CMS 전용 OAuth 앱 |

---

## 👥 권한 관리

CMS 편집 권한은 **GitHub 레포 Collaborator 권한**과 연동됩니다.
GitHub 계정이 있는 사람만 CMS에 로그인할 수 있으며, 레포에 Write 이상의 권한이 있어야 실제로 저장됩니다.

| 역할 | GitHub 권한 | 가능한 작업 |
|---|---|---|
| 운영자 | Admin | 모든 작업 + 설정 변경 |
| 편집자 | Write | CMS에서 공지·릴리즈노트 작성/수정 |
| 일반 사용자 | (없음) | 사이트 열람만 가능 |

### 편집자 추가

1. GitHub 레포 → **Settings** → **Collaborators** → **Add people**
2. 초대할 사람의 GitHub 아이디 또는 이메일 입력
3. 권한: **Write** 선택 후 초대
4. 상대방이 초대 수락하면 CMS 로그인 가능

### 편집자 제거

1. GitHub 레포 → **Settings** → **Collaborators**
2. 해당 사용자 오른쪽 **Remove** 클릭
3. 즉시 CMS 접근 차단됨

## 📝 콘텐츠 작성

자세한 가이드는 [CONTRIBUTING.md](./CONTRIBUTING.md)를 참고하세요.

### 공지사항 추가

`docs/announcements/` 폴더에 새 `.md` 파일 생성:

```markdown
---
title: 제목
category: NEW   # NEW | 공지 | 가이드
date: 2026-04-29
---

본문 내용...
```

### 릴리즈 노트 추가

`docs/releases/{service}/` 폴더에 새 `.md` 파일 생성:

```markdown
---
version: v2.1.0
date: 2026-04-29
features:
  - 주요 기능 1
  - 주요 기능 2
  - 주요 기능 3
---

상세 내용...
```

## 🔗 외부 링크 변경

`docs/.vitepress/theme/Home.vue`에서 각 서비스의 GitHub Wiki / Issues URL을 실제 주소로 교체하세요.

```ts
// 현재 (placeholder)
url: 'https://github.com/your-org/code-mate/wiki'

// 실제 주소로 교체
url: 'https://github.com/samsung-ds/code-mate/wiki'
```
