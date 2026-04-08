// Component: Skills
function renderSkills() {
  return `
<section class="skills-section" id="skills">
  <div class="skills-container">
    <div class="skills-header reveal">
      <span class="num">03</span>
      <span class="line"></span>
      <span class="title" data-i18n="skills_label">Skills</span>
    </div>

    <div class="bento-grid">
      <!-- Item 1: CAD (spans 2 cols on desktop) -->
      <div class="bento-item reveal reveal-delay-1">
        <div class="bento-item-label" data-i18n="skill_01_label">01 \u2014 Design</div>
        <div class="bento-item-title" data-i18n="skill_01_title">CAD & 3D Modeling</div>
        <div class="bento-tags">
          <span class="bento-tag" data-hover>Solid Edge</span>
          <span class="bento-tag" data-hover>SolidWorks</span>
          <span class="bento-tag" data-hover>KeyShot</span>
          <span class="bento-tag" data-hover>Cinema 4D</span>
        </div>
      </div>
      <!-- Item 2 -->
      <div class="bento-item reveal reveal-delay-2">
        <div class="bento-item-label" data-i18n="skill_02_label">02 \u2014 Engineering</div>
        <div class="bento-item-title" data-i18n="skill_02_title">Mechanical Engineering</div>
        <div class="bento-tags">
          <span class="bento-tag" data-hover data-i18n="skill_tag_rd">R&D</span>
          <span class="bento-tag" data-hover data-i18n="skill_tag_3d_printing">3D Printing</span>
          <span class="bento-tag" data-hover data-i18n="skill_tag_dfm">DFM</span>
          <span class="bento-tag" data-hover data-i18n="skill_tag_gdt">GD&T</span>
          <span class="bento-tag" data-hover data-i18n="skill_tag_tolerance">Tolerance Analysis</span>
        </div>
      </div>
      <!-- Item 3 -->
      <div class="bento-item reveal reveal-delay-3">
        <div class="bento-item-label" data-i18n="skill_03_label">03 \u2014 Management</div>
        <div class="bento-item-title" data-i18n="skill_03_title">Project Leadership</div>
        <div class="bento-tags">
          <span class="bento-tag" data-hover data-i18n="skill_tag_project_planning">Project Planning</span>
          <span class="bento-tag" data-hover data-i18n="skill_tag_cross_functional">Cross-functional Teams</span>
          <span class="bento-tag" data-hover data-i18n="skill_tag_agile">Agile Basics</span>
        </div>
      </div>
      <!-- Item 4 -->
      <div class="bento-item reveal reveal-delay-4">
        <div class="bento-item-label" data-i18n="skill_04_label">04 \u2014 Software</div>
        <div class="bento-item-title" data-i18n="skill_04_title">Tools & PLM</div>
        <div class="bento-tags">
          <span class="bento-tag" data-hover>SAP</span>
          <span class="bento-tag" data-hover>Pro.File</span>
          <span class="bento-tag" data-hover>MS Office</span>
          <span class="bento-tag" data-hover>Photoshop</span>
          <span class="bento-tag" data-hover>Lightroom</span>
        </div>
      </div>
      <!-- Item 5 -->
      <div class="bento-item reveal reveal-delay-5">
        <div class="bento-item-label" data-i18n="skill_05_label">05 \u2014 Emerging</div>
        <div class="bento-item-title" data-i18n="skill_05_title">Programming & AI</div>
        <div class="bento-tags">
          <span class="bento-tag" data-hover>Python</span>
          <span class="bento-tag" data-hover data-i18n="skill_tag_local_llms">Local LLMs</span>
          <span class="bento-tag" data-hover data-i18n="skill_tag_agentic_ai">Agentic AI Workflows</span>
        </div>
      </div>
      <!-- Item 6: Proficiency bars (spans 3 cols on desktop) -->
      <div class="bento-item reveal reveal-delay-6" id="barsBento">
        <div class="bento-item-label" data-i18n="skill_06_label">06 \u2014 Proficiency</div>
        <div class="skill-bar-item">
          <div class="skill-bar-header">
            <span class="skill-bar-name" data-i18n="skill_bar_cad">CAD & 3D Design</span>
            <span class="skill-bar-pct">95%</span>
          </div>
          <div class="skill-bar-track"><div class="skill-bar-fill" data-width="95"></div></div>
        </div>
        <div class="skill-bar-item">
          <div class="skill-bar-header">
            <span class="skill-bar-name" data-i18n="skill_bar_mech">Mechanical Engineering</span>
            <span class="skill-bar-pct">92%</span>
          </div>
          <div class="skill-bar-track"><div class="skill-bar-fill" data-width="92"></div></div>
        </div>
        <div class="skill-bar-item">
          <div class="skill-bar-header">
            <span class="skill-bar-name" data-i18n="skill_bar_pm">Project Management</span>
            <span class="skill-bar-pct">85%</span>
          </div>
          <div class="skill-bar-track"><div class="skill-bar-fill" data-width="85"></div></div>
        </div>
        <div class="skill-bar-item">
          <div class="skill-bar-header">
            <span class="skill-bar-name" data-i18n="skill_bar_plm">Software & PLM</span>
            <span class="skill-bar-pct">80%</span>
          </div>
          <div class="skill-bar-track"><div class="skill-bar-fill" data-width="80"></div></div>
        </div>
        <div class="skill-bar-item">
          <div class="skill-bar-header">
            <span class="skill-bar-name" data-i18n="skill_bar_ai">Programming & AI</span>
            <span class="skill-bar-pct">65%</span>
          </div>
          <div class="skill-bar-track"><div class="skill-bar-fill" data-width="65"></div></div>
        </div>
      </div>
    </div>
  </div>
</section>
  `;
}
