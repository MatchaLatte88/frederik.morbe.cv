// Component: Experience
function renderExperience() {
  return `
<section class="experience-section" id="experience">
  <div class="experience-container">
    <div class="exp-header reveal">
      <span class="exp-label" data-i18n="exp_label">Career</span>
      <h2 class="exp-title"><span data-i18n="exp_title_work">Work </span><span class="italic" data-i18n="exp_title_experience">Experience</span></h2>
    </div>

    <div class="timeline">
      <!-- Item 1 -->
      <div class="timeline-item reveal">
        <div class="timeline-dot"></div>
        <div class="timeline-header">
          <h3 class="timeline-role" data-i18n="exp_01_role">Mechanical Design Engineer</h3>
          <span class="timeline-period" data-i18n="exp_01_period">Feb 2018 \u2014 Present</span>
        </div>
        <p class="timeline-company">Miltenyi Biotec</p>
        <ul class="timeline-bullets">
          <li data-i18n="exp_01_bullet_01">Technical project management and mechanical design for next-generation medical research devices</li>
          <li data-i18n="exp_01_bullet_02">Delivered end-to-end development of two new medical devices from concept through validation</li>
          <li data-i18n="exp_01_bullet_03">Owned mechanical architecture for the CliniMACS Prodigy Display Unit</li>
          <li data-i18n="exp_01_bullet_04">Designed major mechanical systems for MACSima \u2014 housing, automated doors, display integration</li>
          <li data-i18n="exp_01_bullet_05">Utilize Solid Edge, KeyShot, and Cinema 4D for parametric modeling and design reviews</li>
        </ul>
        <div class="timeline-tags">
          <span class="timeline-tag" data-i18n="exp_tag_medical_devices">Medical Devices</span>
          <span class="timeline-tag">Solid Edge</span>
          <span class="timeline-tag">ISO 13485</span>
          <span class="timeline-tag">KeyShot</span>
          <span class="timeline-tag">Cinema 4D</span>
        </div>
      </div>

      <!-- Item 2 -->
      <div class="timeline-item reveal">
        <div class="timeline-dot"></div>
        <div class="timeline-header">
          <h3 class="timeline-role" data-i18n="exp_02_role">Mechanical Design Engineer</h3>
          <span class="timeline-period" data-i18n="exp_02_period">Jan 2016 \u2014 Jan 2018</span>
        </div>
        <p class="timeline-company">Miltenyi Biotec</p>
        <ul class="timeline-bullets">
          <li data-i18n="exp_02_bullet_01">Developed mechanical components for automated cell-processing instruments using Solid Edge and Pro.File PLM</li>
          <li data-i18n="exp_02_bullet_02">Created detailed CAD models, engineering drawings, and BOMs for ISO 13485-regulated production</li>
          <li data-i18n="exp_02_bullet_03">Produced KeyShot renderings for design reviews and stakeholder presentations</li>
        </ul>
        <div class="timeline-tags">
          <span class="timeline-tag" data-i18n="exp_tag_cad_modeling">CAD Modeling</span>
          <span class="timeline-tag">PLM</span>
          <span class="timeline-tag" data-i18n="exp_tag_eng_drawings">Engineering Drawings</span>
          <span class="timeline-tag" data-i18n="exp_tag_bom">BOM Management</span>
        </div>
      </div>

      <!-- Item 3 -->
      <div class="timeline-item reveal">
        <div class="timeline-dot"></div>
        <div class="timeline-header">
          <h3 class="timeline-role" data-i18n="exp_03_role">Development Engineer</h3>
          <span class="timeline-period" data-i18n="exp_03_period">Mar 2015 \u2014 Dec 2015</span>
        </div>
        <p class="timeline-company">Brunel GmbH</p>
        <ul class="timeline-bullets">
          <li data-i18n="exp_03_bullet_01">Deployed on-site at Miltenyi Biotec, supporting mechanical design and documentation</li>
          <li data-i18n="exp_03_bullet_02">Collaborated on component optimization and design-for-manufacturability reviews</li>
        </ul>
        <div class="timeline-tags">
          <span class="timeline-tag">DFM</span>
          <span class="timeline-tag" data-i18n="exp_tag_comp_opt">Component Optimization</span>
          <span class="timeline-tag" data-i18n="exp_tag_documentation">Documentation</span>
        </div>
      </div>

      <!-- Item 4 -->
      <div class="timeline-item reveal">
        <div class="timeline-dot"></div>
        <div class="timeline-header">
          <h3 class="timeline-role" data-i18n="exp_04_role">R&D Student Trainee</h3>
          <span class="timeline-period" data-i18n="exp_04_period">Oct 2013 \u2014 Jan 2014</span>
        </div>
        <p class="timeline-company">Thermo Fisher Scientific</p>
        <ul class="timeline-bullets">
          <li data-i18n="exp_04_bullet_01">Supported R&D team with prototype assembly, testing, and documentation</li>
        </ul>
        <div class="timeline-tags">
          <span class="timeline-tag" data-i18n="exp_tag_prototyping">Prototyping</span>
          <span class="timeline-tag" data-i18n="exp_tag_testing">Testing</span>
          <span class="timeline-tag">R&D</span>
        </div>
      </div>

      <!-- Item 5 -->
      <div class="timeline-item reveal">
        <div class="timeline-dot"></div>
        <div class="timeline-header">
          <h3 class="timeline-role" data-i18n="exp_05_role">Bachelor Thesis \u2014 R&D</h3>
          <span class="timeline-period" data-i18n="exp_05_period">May 2013 \u2014 Oct 2013</span>
        </div>
        <p class="timeline-company">Thermo Fisher Scientific</p>
        <ul class="timeline-bullets">
          <li data-i18n="exp_05_bullet_01">Completed bachelor thesis focused on mechanical design optimization within the R&D division</li>
        </ul>
        <div class="timeline-tags">
          <span class="timeline-tag" data-i18n="exp_tag_mech_design">Mechanical Design</span>
          <span class="timeline-tag" data-i18n="exp_tag_thesis">Thesis</span>
        </div>
      </div>
    </div>
  </div>
</section>
  `;
}
