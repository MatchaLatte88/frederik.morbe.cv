// Component: About
function renderAbout() {
  return `
<section class="about" id="about">
  <div class="about-container">
    <div class="about-header">
      <div class="about-section-label reveal">
        <span class="num">01</span>
        <span class="line"></span>
        <span class="title" data-i18n="about_label">About</span>
      </div>
      <p class="about-big-text reveal reveal-delay-1">
        <span data-i18n="about_text_1">A decade of turning </span><span class="highlight" data-i18n="about_text_highlight">complex medical challenges</span><span data-i18n="about_text_2"> into elegant, manufacturable instruments that push the boundaries of cellular therapy.</span>
      </p>
    </div>

    <div class="bento-stats">
      <div class="bento-cell reveal reveal-delay-1">
        <div class="bento-number" data-count="10">0</div>
        <div class="bento-label" data-i18n="stat_years">Years Experience</div>
      </div>
      <div class="bento-cell reveal reveal-delay-2">
        <div class="bento-number" data-count="2">0</div>
        <div class="bento-label" data-i18n="stat_devices">Devices Delivered</div>
      </div>
      <div class="bento-cell reveal reveal-delay-3">
        <div class="bento-number" data-count="5">0</div>
        <div class="bento-label" data-i18n="stat_skills">Skill Categories</div>
      </div>
      <div class="bento-cell reveal reveal-delay-4">
        <div class="bento-number" data-count="3">0</div>
        <div class="bento-label" data-i18n="stat_languages">Languages</div>
      </div>
    </div>
  </div>
</section>
  `;
}
