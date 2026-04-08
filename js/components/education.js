// Component: Education
function renderEducation() {
  return `
<section class="education-section" id="education">
  <div class="education-container">
    <div class="edu-header reveal">
      <span class="num">06</span>
      <span class="line"></span>
      <span class="title" data-i18n="edu_label">Education</span>
    </div>

    <div class="edu-grid">
      <div class="edu-card reveal reveal-delay-1">
        <span class="edu-card-year">2009 \u2014 2013</span>
        <h3 class="edu-card-degree" data-i18n="edu_01_degree">B.Eng. Mechanical Engineering</h3>
        <p class="edu-card-school" data-i18n="edu_01_school">Frankfurt University of Applied Sciences</p>
        <p class="edu-card-detail" data-i18n="edu_01_detail">Bachelor of Applied Science with focus on mechanical design, manufacturing processes, and engineering mathematics.</p>
      </div>
      <div class="edu-card reveal reveal-delay-2">
        <span class="edu-card-year">2014</span>
        <h3 class="edu-card-degree" data-i18n="edu_02_degree">Mandarin Chinese Studies</h3>
        <p class="edu-card-school" data-i18n="edu_02_school">Wenzao Ursuline University of Languages, Kaohsiung</p>
        <p class="edu-card-detail" data-i18n="edu_02_detail">Intensive language program. Achieved Basic Chinese Level A2 certificate. Final grade: 97/100.</p>
      </div>
    </div>

    <div class="lang-section reveal reveal-delay-3">
      <div class="edu-header" style="margin-bottom:1.5rem">
        <span class="num" data-i18n="lang_label">Languages</span>
      </div>
      <div class="lang-pills">
        <div class="lang-pill" data-hover>
          <span class="lang-pill-name" data-i18n="lang_german">German</span>
          <span class="lang-pill-level" data-i18n="lang_native">Native</span>
        </div>
        <div class="lang-pill" data-hover>
          <span class="lang-pill-name" data-i18n="lang_english">English</span>
          <span class="lang-pill-level" data-i18n="lang_full_professional">Full Professional</span>
        </div>
        <div class="lang-pill" data-hover>
          <span class="lang-pill-name" data-i18n="lang_mandarin">Mandarin</span>
          <span class="lang-pill-level" data-i18n="lang_elementary">Elementary A2</span>
        </div>
      </div>
    </div>
  </div>
</section>
  `;
}
