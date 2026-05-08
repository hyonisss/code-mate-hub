import { defineConfig } from 'vitepress'

export default defineConfig({
  appearance: false,
  base: '/code-mate-hub/',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/code-mate-hub/favicon.svg', type: 'image/svg+xml' }],
  ],

  locales: {
    root: {
      label: '한국어',
      lang: 'ko-KR',
      title: 'Code Mate Hub',
      description: 'Code Mate 서비스 통합 안내소',
      themeConfig: {
        nav: [],
        sidebar: {
          '/announcements/': [
            { text: '공지사항', items: [{ text: '전체 보기', link: '/announcements/' }] },
          ],
          '/releases/': [
            { text: 'Code Mate', items: [{ text: '전체 보기', link: '/releases/code-mate/' }] },
            { text: 'Code Mate with OpenCode', items: [{ text: '전체 보기', link: '/releases/opencode/' }] },
            { text: 'Code Mate with Roo', items: [{ text: '전체 보기', link: '/releases/roo/' }] },
          ],
        },
        docFooter: { prev: '이전', next: '다음' },
        outline: { label: '목차' },
        lastUpdatedText: '최근 업데이트',
        returnToTopLabel: '맨 위로',
        sidebarMenuLabel: '메뉴',
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Code Mate Hub',
      description: 'Code Mate Services Integration Hub',
      themeConfig: {
        nav: [],
        sidebar: {
          '/en/announcements/': [
            { text: 'Announcements', items: [{ text: 'View all', link: '/en/announcements/' }] },
          ],
          '/en/releases/': [
            { text: 'Code Mate', items: [{ text: 'View all', link: '/en/releases/code-mate/' }] },
            { text: 'Code Mate with OpenCode', items: [{ text: 'View all', link: '/en/releases/opencode/' }] },
            { text: 'Code Mate with Roo', items: [{ text: 'View all', link: '/en/releases/roo/' }] },
          ],
        },
        docFooter: { prev: 'Previous', next: 'Next' },
        outline: { label: 'On this page' },
        lastUpdatedText: 'Last updated',
        returnToTopLabel: 'Back to top',
        sidebarMenuLabel: 'Menu',
      },
    },
  },

  themeConfig: {
    logo: { src: '/logo.svg', width: 24, height: 24 },
  },
})
