import { createContentLoader } from 'vitepress'

export interface Announcement {
  url: string
  title: string
  category: string
  date: string // YYYY-MM-DD
  lang: 'ko' | 'en'
}

declare const data: Announcement[]
export { data }

export default createContentLoader(['announcements/*.md', 'en/announcements/*.md'], {
  excerpt: false,
  transform(raw): Announcement[] {
    return raw
      .filter((p) => !p.url.endsWith('/') && p.frontmatter.title)
      .map((p) => ({
        url: p.url,
        title: p.frontmatter.title,
        category: p.frontmatter.category ?? '공지',
        date: p.frontmatter.date instanceof Date
          ? p.frontmatter.date.toISOString().slice(0, 10)
          : String(p.frontmatter.date ?? ''),
        lang: p.url.startsWith('/en/') ? 'en' : 'ko',
      }))
      .sort((a, b) => b.date.localeCompare(a.date))
  },
})
