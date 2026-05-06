---
title: Wadiz
layout: page
---

<div class="wadiz-wrap">
  <iframe
    src="https://www.wadiz.kr/web/main"
    frameborder="0"
    allowfullscreen
  ></iframe>
  <div class="wadiz-blocked">
    <p>⚠️ Wadiz 페이지를 직접 열어주세요.</p>
    <a href="https://www.wadiz.kr/web/main" target="_blank" rel="noopener">Wadiz 바로가기 →</a>
  </div>
</div>

<style>
.VPDoc { padding: 0 !important; }
.VPDoc .container { max-width: 100% !important; margin: 0 !important; padding: 0 !important; }
.VPDoc .content { padding: 0 !important; }

.wadiz-wrap {
  position: fixed;
  top: var(--vp-nav-height);
  left: 0;
  right: 0;
  bottom: 0;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wadiz-wrap iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
.wadiz-blocked {
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: #666;
}
.wadiz-blocked a {
  color: #534AB7;
  font-weight: 600;
  text-decoration: none;
}
</style>
