# 공지사항

<script setup>
import { withBase } from 'vitepress'
import { data as allAnnouncements } from '../.vitepress/announcements.data'

const announcements = allAnnouncements.filter(a => a.lang === 'ko')

const categoryStyle = {
  'Code Mate': { bg: '#EEEDFE', color: '#3C3489' },
  'OpenCode':  { bg: '#E1F5EE', color: '#085041' },
  'Roo':       { bg: '#FAECE7', color: '#712B13' },
}
</script>

<div v-for="item in announcements" :key="item.url" style="display: flex; gap: 12px; padding: 12px 0; border-bottom: 1px solid var(--vp-c-divider); align-items: center;">
  <span :style="{
    background: categoryStyle[item.category]?.bg ?? '#F0F0F0',
    color: categoryStyle[item.category]?.color ?? '#666',
    fontSize: '11px',
    padding: '2px 8px',
    borderRadius: '6px',
    fontWeight: 500,
  }">{{ item.category }}</span>
  <a :href="withBase(item.url)" style="flex: 1; font-size: 14px; color: var(--vp-c-text-1); text-decoration: none;">{{ item.title }}</a>
  <span style="font-size: 12px; color: var(--vp-c-text-3);">{{ item.date }}</span>
</div>
