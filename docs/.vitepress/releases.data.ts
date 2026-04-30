import { createContentLoader } from 'vitepress'

export interface Release {
  url: string
  service: 'code-mate' | 'opencode' | 'roo'
  serviceLabel: string
  version: string
  date: string // YYYY-MM-DD
  features: string[]
  lang: 'ko' | 'en'
}

const SERVICE_LABEL: Record<string, string> = {
  'code-mate': 'Code Mate',
  'opencode': 'OpenCode',
  'roo': 'Roo',
}

declare const data: Release[]
export { data }

export default createContentLoader(['releases/*/*.md', 'en/releases/*/*.md'], {
  excerpt: false,
  transform(raw): Release[] {
    return raw
      .filter((p) => !p.url.endsWith('/') && p.frontmatter.version)
      .map((p) => {
        const isEn = p.url.startsWith('/en/')
        const segments = p.url.split('/').filter(Boolean)
        // Korean: ['releases', 'code-mate', 'v2.1.0']
        // English: ['en', 'releases', 'code-mate', 'v2.1.0']
        const service = segments[isEn ? 2 : 1] as Release['service']
        return {
          url: p.url,
          service,
          serviceLabel: SERVICE_LABEL[service] ?? service,
          version: p.frontmatter.version,
          date: p.frontmatter.date instanceof Date
            ? p.frontmatter.date.toISOString().slice(0, 10)
            : String(p.frontmatter.date ?? ''),
          features: Array.isArray(p.frontmatter.features) ? p.frontmatter.features : [],
          lang: isEn ? 'en' : 'ko',
        }
      })
      .sort((a, b) => b.date.localeCompare(a.date))
  },
})
