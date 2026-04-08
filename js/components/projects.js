// Component: Projects
function renderProjects() {
  return `
<section class="projects-section" id="projects">
  <div class="projects-container">
    <div class="proj-header reveal">
      <span class="num">04</span>
      <span class="line"></span>
      <span class="title" data-i18n="projects_label">Projects</span>
    </div>
    <p class="proj-desc reveal reveal-delay-1" data-i18n="projects_desc">Selected projects from medical device R&D at Miltenyi Biotec.</p>

    <div class="proj-grid">
      <div class="proj-card reveal reveal-delay-1" data-hover onclick="openProject(0)">
        <div class="proj-card-arrow">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
        </div>
        <span class="proj-card-period" data-i18n="proj_01_period">Jan 2018 \u2014 Jan 2021</span>
        <h3 class="proj-card-title" data-i18n="proj_01_title">New Medical Device Development</h3>
        <p class="proj-card-desc" data-i18n="proj_01_desc">Led end-to-end mechanical design, prototyping, and validation of two new medical research devices for cellular therapy workflows worldwide.</p>
        <div class="proj-card-tech">
          <span>Solid Edge</span><span data-i18n="proj_tag_3d_printing">3D Printing</span><span>KeyShot</span><span>ISO 13485</span>
        </div>
      </div>

      <div class="proj-card reveal reveal-delay-2" data-hover onclick="openProject(1)">
        <div class="proj-card-arrow">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
        </div>
        <span class="proj-card-period" data-i18n="proj_02_period">Jan 2017 \u2014 Jan 2018</span>
        <h3 class="proj-card-title" data-i18n="proj_02_title">CliniMACS Prodigy \u2014 Display Unit</h3>
        <p class="proj-card-desc" data-i18n="proj_02_desc">Designed the mechanical architecture for the HMI display unit of the CliniMACS Prodigy closed-system cell therapy platform.</p>
        <div class="proj-card-tech">
          <span>Solid Edge</span><span>KeyShot</span><span data-i18n="proj_tag_sheet_metal">Sheet Metal</span><span data-i18n="proj_tag_injection_molding">Injection Molding</span>
        </div>
      </div>

      <div class="proj-card reveal reveal-delay-3" data-hover onclick="openProject(2)">
        <div class="proj-card-arrow">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
        </div>
        <span class="proj-card-period" data-i18n="proj_03_period">Jan 2017 \u2014 Jan 2018</span>
        <h3 class="proj-card-title" data-i18n="proj_03_title">MACSima \u2014 Histology Platform</h3>
        <p class="proj-card-desc" data-i18n="proj_03_desc">Owned product design for major mechanical subsystems including enclosure housing, automated door mechanisms, and display integration.</p>
        <div class="proj-card-tech">
          <span>SolidWorks</span><span>Cinema 4D</span><span data-i18n="proj_tag_mechanism">Mechanism Design</span>
        </div>
      </div>
    </div>
  </div>
</section>
  `;
}
