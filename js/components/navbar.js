// Component: Navbar
function renderNavbar() {
  return `
<nav class="navbar" id="navbar">
  <ul class="navbar-links">
    <li><a href="#hero" data-i18n="nav_home">Home</a></li>
    <li><a href="#about" data-i18n="nav_about">About</a></li>
    <li><a href="#skills" data-i18n="nav_skills">Skills</a></li>
    <li><a href="#projects" data-i18n="nav_projects">Projects</a></li>
    <li><a href="#experience" data-i18n="nav_experience">Experience</a></li>
    <li><a href="#education" data-i18n="nav_education">Education</a></li>
    <li><a href="#contact" data-i18n="nav_contact">Contact</a></li>
  </ul>
  <span class="navbar-divider"></span>
  <a href="#contact" class="navbar-cta" data-i18n="nav_get_in_touch">Get in Touch</a>
  <!-- Language Selector -->
  <div class="lang-selector">
    <button class="lang-selector-btn" id="langSelectorBtn" aria-label="Select language">
      <span id="langSelectorFlag">EN</span>
    </button>
    <div class="lang-dropdown" id="langDropdown">
      <button class="lang-dropdown-item active" data-lang="en" id="langItemEn">
        <span class="lang-flag">\u{1F1EC}\u{1F1E7}</span>
        <span class="lang-name">English</span>
        <span class="lang-check">\u2713</span>
      </button>
      <button class="lang-dropdown-item" data-lang="de" id="langItemDe">
        <span class="lang-flag">\u{1F1E9}\u{1F1EA}</span>
        <span class="lang-name">Deutsch</span>
        <span class="lang-check">\u2713</span>
      </button>
      <button class="lang-dropdown-item" data-lang="zh-TW" id="langItemZh">
        <span class="lang-flag">\u{1F1F9}\u{1F1FC}</span>
        <span class="lang-name">\u4e2d\u6587</span>
        <span class="lang-check">\u2713</span>
      </button>
    </div>
  </div>
  <!-- Settings Button -->
  <div class="settings-wrapper">
    <button class="settings-btn" id="settingsBtn" aria-label="Settings">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </button>
    <div class="settings-dropdown" id="settingsDropdown">
      <!-- Accent Color Section -->
      <div class="settings-section">
        <div class="settings-section-header">
          <span class="settings-section-title">Accent Color</span>
          <input type="color" id="accentColorInput" value="#c4652a" class="color-picker-native" />
        </div>
        <div class="color-presets" id="colorPresets">
          <button class="color-preset active" data-color="#c4652a" style="background: #c4652a;" title="Burnt Orange"></button>
          <button class="color-preset" data-color="#e63946" style="background: #e63946;" title="Red"></button>
          <button class="color-preset" data-color="#2a9d8f" style="background: #2a9d8f;" title="Teal"></button>
          <button class="color-preset" data-color="#6a4c93" style="background: #6a4c93;" title="Purple"></button>
          <button class="color-preset" data-color="#1982c4" style="background: #1982c4;" title="Blue"></button>
          <button class="color-preset" data-color="#8ac926" style="background: #8ac926;" title="Green"></button>
          <button class="color-preset" data-color="#ff9f1c" style="background: #ff9f1c;" title="Orange"></button>
          <button class="color-preset" data-color="#f15bb5" style="background: #f15bb5;" title="Pink"></button>
        </div>
      </div>
      
      <!-- Animation Section -->
      <div class="settings-section">
        <div class="settings-row">
          <span class="settings-row-label">Rain Animation</span>
          <label class="settings-switch" id="rainSwitch">
            <input type="checkbox" id="rainToggle" checked />
            <span class="switch-slider"></span>
          </label>
        </div>
      </div>
    </div>
  </div>
  <button class="dark-toggle" id="darkToggle" aria-label="Toggle dark mode">
    <svg class="icon-moon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
    <svg class="icon-sun" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
  </button>
</nav>
  `;
}
