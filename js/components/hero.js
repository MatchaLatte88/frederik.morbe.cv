// Component: Hero
function renderHero() {
  return `
<section class="hero" id="hero">
  <!-- Rain Canvas -->
  <canvas id="rainCanvas" class="rain-canvas"></canvas>
  
  <!-- Animated background blobs -->
  <div class="hero-bg" aria-hidden="true">
    <div class="hero-bg-blob"></div>
    <div class="hero-bg-blob"></div>
    <div class="hero-bg-blob"></div>
  </div>

  <div class="hero-content">
    <div class="hero-grid">
      <!-- Left -->
      <div class="hero-left">
        <div class="hero-label reveal">
          <span class="hero-label-line"></span>
          <span class="hero-label-text" data-i18n="hero_label">B.Sc. Mechanical Engineering \u00b7 M\u00f6rfelden-Walldorf, Germany</span>
        </div>

        <h1 class="hero-name">
          <span class="word"><span class="word-inner" id="word1">Frederik</span></span>
          <span class="word"><span class="word-inner" id="word2">Morbe</span></span>
        </h1>

        <p class="hero-subtitle reveal reveal-delay-1" data-i18n="hero_subtitle">
          Mechanical Design Engineer \u00b7 Medical Devices \u00b7 Miltenyi Biotec
        </p>

        <p class="hero-description reveal reveal-delay-2" data-i18n="hero_description">
          10+ years designing medical research devices that advance cellular therapy worldwide. Bridging R&D innovation with manufacturable, user-centered engineering.
        </p>

        <div class="hero-ctas reveal reveal-delay-3">
          <a href="#experience" class="btn-magnetic btn-primary-mag" data-hover>
            <span data-i18n="hero_btn_experience">Experience</span>
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </a>
          <a href="#contact" class="btn-magnetic btn-outline-mag" data-hover>
            <span data-i18n="hero_btn_contact">Contact</span>
          </a>
          <a href="CV_Frederik_Morbe.pdf" download class="btn-magnetic btn-outline-mag" data-hover>
            <span data-i18n="hero_btn_download">Download CV</span>
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
          </a>
        </div>
      </div>

      <!-- Right -->
      <div class="hero-right reveal reveal-delay-4">
        <div class="hero-photo-wrap">
          <div class="hero-photo-frame">
            <img src="placeholder.jpg" alt="Profile photo" />
            <div class="photo-glass">
              <h3 data-i18n="photo_glass_name">Frederik Morbe</h3>
              <p data-i18n="photo_glass_role">Mechanical Design Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="scroll-indicator" aria-hidden="true">
    <span class="scroll-indicator-text" data-i18n="scroll_indicator">Scroll</span>
    <div class="scroll-indicator-line"></div>
  </div>
</section>
  `;
}
