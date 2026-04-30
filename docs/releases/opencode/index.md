# Code Mate with OpenCode Release Notes

<script setup>
import { withBase } from 'vitepress'
import { data as allReleases } from '../../.vitepress/releases.data'
import { computed } from 'vue'

const items = computed(() => allReleases.filter(r => r.service === 'opencode' && r.lang === 'ko'))
</script>

<div v-for="rel in items" :key="rel.url" style="border: 1px solid var(--vp-c-divider); border-radius: 12px; padding: 16px 20px; margin: 12px 0;">
  <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 10px;">
    <a :href="withBase(rel.url)" style="font-size: 16px; font-weight: 600; color: var(--vp-c-text-1); text-decoration: none;">{{ rel.version }}</a>
    <span style="font-size: 12px; color: var(--vp-c-text-3);">{{ rel.date }}</span>
  </div>
  <ul style="margin: 0; padding-left: 18px; font-size: 13px; color: var(--vp-c-text-2); line-height: 1.7;">
    <li v-for="f in rel.features" :key="f">{{ f }}</li>
  </ul>
</div>
