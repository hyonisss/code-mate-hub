import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Code Mate Hub',
  description: 'AI 코딩 어시스턴트 통합 안내소',
  lang: 'ko-KR',

  // GitHub Pages 배포 시 repo 이름에 맞게 변경하세요
  // 예: https://<user>.github.io/code-mate-hub/ → '/code-mate-hub/'
  base: '/code-mate-hub/',

  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/code-mate-hub/favicon.svg', type: 'image/svg+xml' }],
  ],

  themeConfig: {
    logo: { src: '/logo.svg', width: 24, height: 24 },

    nav: [
      { text: '홈', link: '/' },
      { text: '공지사항', link: '/announcements/' },
      {
        text: 'Release Notes',
        items: [
          { text: 'Code Mate', link: '/releases/code-mate/' },
          { text: 'Code Mate with OpenCode', link: '/releases/opencode/' },
          { text: 'Code Mate with Roo', link: '/releases/roo/' },
        ],
      },
    ],

    sidebar: {
      '/announcements/': [
        {
          text: '공지사항',
          items: [{ text: '전체 보기', link: '/announcements/' }],
        },
      ],
      '/releases/': [
        {
          text: 'Code Mate',
          items: [{ text: '전체 보기', link: '/releases/code-mate/' }],
        },
        {
          text: 'Code Mate with OpenCode',
          items: [{ text: '전체 보기', link: '/releases/opencode/' }],
        },
        {
          text: 'Code Mate with Roo',
          items: [{ text: '전체 보기', link: '/releases/roo/' }],
        },
      ],
    },

    docFooter: { prev: '이전', next: '다음' },
    outline: { label: '목차' },
    lastUpdatedText: '최근 업데이트',
    returnToTopLabel: '맨 위로',
    sidebarMenuLabel: '메뉴',
    darkModeSwitchLabel: '테마',
    lightModeSwitchTitle: '라이트 모드',
    darkModeSwitchTitle: '다크 모드',
  },
})
