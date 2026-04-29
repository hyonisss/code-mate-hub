# Code Mate Hub

Code Mate · Code Mate with OpenCode · Code Mate with Roo 통합 안내 페이지

## 🏗️ 기술 스택

- **VitePress** — 정적 사이트 생성기
- **GitHub Pages** — 호스팅
- **GitHub Actions** — 자동 배포

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

## 👥 권한 관리

| 역할 | 권한 | 작업 |
|---|---|---|
| 운영자 | Admin | 모든 작업 |
| 개발자 | Write | 코드·MD 편집 |
| 비개발자 편집자 | Write | MD 편집 (웹 UI) |
| 일반 사용자 | (없음) | URL로 페이지 열람만 |

설정: Repo → **Settings** → **Collaborators and teams** → **Add people**

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
