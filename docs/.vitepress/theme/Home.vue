<script setup lang="ts">
import { computed } from 'vue'
import { withBase, useData } from 'vitepress'
import { data as allAnnouncements } from '../announcements.data'
import { data as allReleases } from '../releases.data'

const { lang } = useData()
const isEn = computed(() => lang.value === 'en-US')

const RECENT_ANNOUNCEMENTS = 3

const recentAnnouncements = computed(() => {
  const locale = isEn.value ? 'en' : 'ko'
  return allAnnouncements.filter(a => a.lang === locale).slice(0, RECENT_ANNOUNCEMENTS)
})

const recentReleases = computed(() => {
  const locale = isEn.value ? 'en' : 'ko'
  const services = ['code-mate', 'opencode', 'roo'] as const
  return services
    .map(s => allReleases.find(r => r.service === s && r.lang === locale))
    .filter(Boolean)
})

const base = computed(() => isEn.value ? '/en' : '')

const i18n = computed(() => isEn.value
  ? {
      subtitle: 'Code Mate Services Integration Hub',
      serviceTitle: '🚀 Services',
      announcementTitle: '📢 Announcements',
      releaseTitle: '📋 Release Notes',
      seeAll: 'See all →',
      empty: 'No announcements yet.',
    }
  : {
      subtitle: 'Code Mate 서비스 통합 안내소',
      serviceTitle: '🚀 서비스 바로가기',
      announcementTitle: '📢 공지사항',
      releaseTitle: '📋 Release Notes',
      seeAll: '전체 보기 →',
      empty: '아직 등록된 공지가 없습니다.',
    }
)

const services = computed(() => [
  {
    id: 'code-mate',
    name: 'Code Mate',
    desc: isEn.value ? 'Main coding assistant' : '메인 코딩 어시스턴트',
    color: '#534AB7',
    bg: '#EEEDFE',
    fg: '#3C3489',
    links: [
      { icon: '📖', label: isEn.value ? 'Wiki Guide' : 'Wiki 가이드', url: 'https://github.com/your-org/code-mate/wiki' },
      { icon: '🐛', label: 'VOC / Issues', url: 'https://github.com/your-org/code-mate/issues' },
    ],
  },
  {
    id: 'opencode',
    name: '+ OpenCode',
    desc: isEn.value ? 'OpenCode CLI integration' : 'OpenCode CLI 통합',
    color: '#1D9E75',
    bg: '#E1F5EE',
    fg: '#085041',
    links: [
      { icon: '🌐', label: isEn.value ? 'Introduction' : '소개 페이지', url: 'https://github.com/your-org/code-mate-opencode' },
      { icon: '🐛', label: 'VOC / Issues', url: 'https://github.com/your-org/code-mate-opencode/issues' },
    ],
  },
  {
    id: 'roo',
    name: '+ Roo',
    desc: isEn.value ? 'Roo Code integration' : 'Roo Code 통합',
    color: '#D85A30',
    bg: '#FAECE7',
    fg: '#712B13',
    links: [
      { icon: '🌐', label: isEn.value ? 'Introduction' : '소개 페이지', url: 'https://github.com/your-org/code-mate-roo' },
      { icon: '🐛', label: 'VOC / Issues', url: 'https://github.com/your-org/code-mate-roo/issues' },
    ],
  },
])

const categoryStyle: Record<string, { bg: string; fg: string }> = {
  NEW:    { bg: '#FAEEDA', fg: '#854F0B' },
  '공지': { bg: '#E6F1FB', fg: '#0C447C' },
  '가이드': { bg: '#E1F5EE', fg: '#085041' },
  Notice: { bg: '#E6F1FB', fg: '#0C447C' },
  Guide:  { bg: '#E1F5EE', fg: '#085041' },
}

const releaseTagStyle: Record<string, { bg: string; fg: string; label: string }> = {
  'code-mate': { bg: '#EEEDFE', fg: '#3C3489', label: 'Code Mate' },
  'opencode':  { bg: '#E1F5EE', fg: '#085041', label: 'OpenCode' },
  'roo':       { bg: '#FAECE7', fg: '#712B13', label: 'Roo' },
}

function formatDate(d: string) {
  if (!d || d.length < 10) return d
  return `${d.slice(5, 7)}.${d.slice(8, 10)}`
}
</script>

<template>
  <div class="hub-page">
    <!-- 헤더 -->
    <header class="hub-header">
      <h1>Code Mate Hub</h1>
      <p>{{ i18n.subtitle }}</p>
    </header>

    <!-- 서비스 바로가기 -->
    <section class="hub-section">
      <h2>{{ i18n.serviceTitle }}</h2>
      <div class="hub-grid">
        <div
          v-for="svc in services"
          :key="svc.id"
          class="hub-card service-card"
        >
          <div class="service-meta">
            <span class="dot" :style="{ background: svc.color }"></span>
          </div>
          <p class="service-name">{{ svc.name }}</p>
          <p class="service-desc">{{ svc.desc }}</p>
          <div class="service-links">
            <a v-for="link in svc.links" :key="link.url" :href="link.url" target="_blank" rel="noopener">
              {{ link.icon }} {{ link.label }} →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 공지사항 -->
    <section class="hub-section">
      <div class="hub-section-head">
        <h2>{{ i18n.announcementTitle }}</h2>
        <a :href="withBase(base + '/announcements/')" class="see-all">{{ i18n.seeAll }}</a>
      </div>
      <div class="hub-card hub-list">
        <a
          v-for="(item, idx) in recentAnnouncements"
          :key="item.url"
          :href="withBase(item.url)"
          class="hub-list-item"
          :class="{ 'no-border': idx === recentAnnouncements.length - 1 }"
        >
          <span
            class="badge"
            :style="{
              background: categoryStyle[item.category]?.bg,
              color: categoryStyle[item.category]?.fg,
            }"
          >
            {{ item.category }}
          </span>
          <span class="title">{{ item.title }}</span>
          <span class="date">{{ formatDate(item.date) }}</span>
        </a>
        <p v-if="recentAnnouncements.length === 0" class="empty">{{ i18n.empty }}</p>
      </div>
    </section>

    <!-- Release Notes -->
    <section class="hub-section">
      <div class="hub-section-head">
        <h2>{{ i18n.releaseTitle }}</h2>
        <a :href="withBase(base + '/releases/code-mate/')" class="see-all">{{ i18n.seeAll }}</a>
      </div>
      <div class="hub-grid">
        <a
          v-for="rel in recentReleases"
          :key="rel!.url"
          :href="withBase(rel!.url)"
          class="hub-card release-card"
        >
          <div>
            <span
              class="badge"
              :style="{
                background: releaseTagStyle[rel!.service].bg,
                color: releaseTagStyle[rel!.service].fg,
              }"
            >
              {{ releaseTagStyle[rel!.service].label }}
            </span>
          </div>
          <div class="release-head">
            <span class="version">{{ rel!.version }}</span>
            <span class="date">{{ formatDate(rel!.date) }}</span>
          </div>
          <ul class="features">
            <li v-for="f in rel!.features.slice(0, 3)" :key="f">{{ f }}</li>
          </ul>
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hub-page {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

.hub-header {
  text-align: center;
  padding: 2.5rem 0 2rem;
}
.hub-header h1 {
  margin: 0 0 8px;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.02em;
}
.hub-header p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 15px;
}

.hub-section { margin-bottom: 2rem; }
.hub-section h2 {
  margin: 0 0 12px;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.01em;
  border: none;
  padding: 0;
}
.hub-section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}
.hub-section-head h2 { margin: 0; }
.see-all {
  font-size: 13px;
  color: var(--vp-c-text-2);
  text-decoration: none;
}
.see-all:hover { color: var(--vp-c-brand-1); }

.hub-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
}

.hub-list-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--vp-c-divider);
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: background 0.15s;
}
.hub-list-item:hover { background: var(--vp-c-bg-soft); }
.hub-list-item.no-border { border-bottom: none; }
.hub-list-item .title { flex: 1; font-size: 14px; }
.hub-list-item .date { font-size: 12px; color: var(--vp-c-text-3); }

.badge {
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 6px;
  font-weight: 500;
  display: inline-block;
}

.empty {
  padding: 2rem;
  text-align: center;
  color: var(--vp-c-text-3);
  font-size: 13px;
  margin: 0;
}

.hub-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
@media (max-width: 720px) {
  .hub-grid { grid-template-columns: 1fr; }
}

.service-card {
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
}
.service-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
  min-height: 20px;
}
.dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
.service-name {
  margin: 8px 0 4px;
  font-weight: 600;
  font-size: 15px;
}
.service-desc {
  margin: 0 0 12px;
  font-size: 12px;
  color: var(--vp-c-text-2);
}
.service-links {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: auto;
}
.service-links a {
  font-size: 13px;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  padding: 6px 10px;
  background: var(--vp-c-bg-soft);
  border-radius: 6px;
  transition: background 0.15s;
}
.service-links a:hover { background: var(--vp-c-bg-mute); }

.release-card {
  padding: 16px 20px;
  text-decoration: none;
  color: var(--vp-c-text-1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: border-color 0.15s;
}
.release-card:hover { border-color: var(--vp-c-brand-1); }
.release-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.version { font-size: 14px; font-weight: 600; }
.release-card .date { font-size: 11px; color: var(--vp-c-text-3); }
.features {
  margin: 0;
  padding-left: 16px;
  font-size: 12px;
  color: var(--vp-c-text-2);
  line-height: 1.7;
}
.features li { margin: 0; }
</style>
