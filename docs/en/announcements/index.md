# Announcements

<script setup>
import { withBase } from 'vitepress'
import { data as allAnnouncements } from '../../.vitepress/announcements.data'

const announcements = allAnnouncements.filter(a => a.lang === 'en')
</script>

<div v-for="item in announcements" :key="item.url" style="display: flex; gap: 12px; padding: 12px 0; border-bottom: 1px solid var(--vp-c-divider); align-items: center;">
  <span :style="{
    background: item.category === 'NEW' ? '#FAEEDA' : item.category === 'Guide' ? '#E1F5EE' : '#E6F1FB',
    color: item.category === 'NEW' ? '#854F0B' : item.category === 'Guide' ? '#085041' : '#0C447C',
    fontSize: '11px',
    padding: '2px 8px',
    borderRadius: '6px',
    fontWeight: 500,
  }">{{ item.category }}</span>
  <a :href="withBase(item.url)" style="flex: 1; font-size: 14px; color: var(--vp-c-text-1); text-decoration: none;">{{ item.title }}</a>
  <span style="font-size: 12px; color: var(--vp-c-text-3);">{{ item.date }}</span>
</div>
