// Main JavaScript - Animations, Interactions, and Language Switching

(function() {
  'use strict';

  // Current language (default: en)
  let currentLang = localStorage.getItem('preferredLang') || 'en';

  // Project data for modals
  const projects = [
    {
      period: 'Jan 2018 — Jan 2021',
      title: 'New Medical Device Development',
      desc: 'Led end-to-end mechanical design, prototyping, and validation of two new medical research devices for cellular therapy workflows worldwide. Coordinated with electrical, software, and regulatory teams to deliver instruments now used in cell therapy labs globally.',
      tech: ['Solid Edge', '3D Printing', 'KeyShot', 'Pro.File', 'ISO 13485']
    },
    {
      period: 'Jan 2017 — Jan 2018',
      title: 'CliniMACS Prodigy — Display Unit',
      desc: 'Designed the mechanical architecture for the HMI display unit of the CliniMACS Prodigy closed-system cell therapy platform. Focused on ergonomics, serviceability, and cleanroom compatibility.',
      tech: ['Solid Edge', 'KeyShot', 'Sheet Metal', 'Injection Molding']
    },
    {
      period: 'Jan 2017 — Jan 2018',
      title: 'MACSima — Automated Histology Platform',
      desc: 'Owned product design for major mechanical subsystems including enclosure housing, automated door mechanisms, and display integration for a fully automated multiplex immunohistochemistry instrument.',
      tech: ['SolidWorks', 'Cinema 4D', 'Mechanism Design', 'Tolerance Stack-up']
    }
  ];

  // Render all sections
  function renderApp() {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
      ${renderNavbar()}
      ${renderHero()}
      ${renderAbout()}
      ${renderSkills()}
      ${renderProjects()}
      ${renderExperience()}
      ${renderEducation()}
      ${renderContact()}
      ${renderFooter()}
      <!-- Modal -->
      <div class="modal-backdrop" id="modalBackdrop" onclick="closeModal(event)">
        <div class="modal-content" id="modalContent">
          <button class="modal-close" onclick="closeModalDirect()" aria-label="Close" data-hover>
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div id="modalBody"></div>
        </div>
      </div>
    `;

    // Re-initialize everything after rendering
    initializeApp();
  }

  // Initialize all animations and interactions
  function initializeApp() {
    /* ---- Hero word animation on load ---- */
    window.addEventListener('load', () => {
      setTimeout(() => document.getElementById('word1')?.classList.add('visible'), 300);
      setTimeout(() => document.getElementById('word2')?.classList.add('visible'), 600);
    });

    /* ---- Scroll Reveal (IntersectionObserver) ---- */
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
      revealObserver.observe(el);
    });

    /* ---- Animated Counters ---- */
    let countersDone = false;
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersDone) {
          countersDone = true;
          document.querySelectorAll('[data-count]').forEach(el => {
            const target = parseInt(el.getAttribute('data-count'));
            let current = 0;
            const increment = target / 40;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                el.textContent = target + '+';
                clearInterval(timer);
              } else {
                el.textContent = Math.floor(current);
              }
            }, 40);
          });
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const bentoStats = document.querySelector('.bento-stats');
    if (bentoStats) counterObserver.observe(bentoStats);

    /* ---- Skill Bars Animation ---- */
    let barsDone = false;
    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !barsDone) {
          barsDone = true;
          document.querySelectorAll('.skill-bar-fill').forEach(bar => {
            const w = bar.getAttribute('data-width');
            setTimeout(() => { bar.style.width = w + '%'; }, 200);
          });
          barObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const barsBento = document.getElementById('barsBento');
    if (barsBento) barObserver.observe(barsBento);

    /* ---- Magnetic Buttons ---- */
    document.querySelectorAll('.btn-magnetic').forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
      });
    });

    /* ---- 3D Tilt on Project Cards ---- */
    document.querySelectorAll('.proj-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(800px) rotateY(0) rotateX(0) translateY(0)';
      });
    });

    /* ---- Dark Mode Toggle ---- */
    const darkToggle = document.getElementById('darkToggle');
    const savedDark = localStorage.getItem('darkMode');
    if (savedDark === 'true') document.documentElement.classList.add('dark');
    if (darkToggle) {
      darkToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
      });
    }

    /* ---- Language Switching ---- */
    setLanguage(currentLang);

    // Language selector toggle
    const langBtn = document.getElementById('langSelectorBtn');
    const langDropdown = document.getElementById('langDropdown');

    if (langBtn && langDropdown) {
      langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('open');
      });

      // Language item clicks
      langDropdown.querySelectorAll('.lang-dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
          const lang = item.getAttribute('data-lang');
          setLanguage(lang);
          langDropdown.classList.remove('open');
        });
      });

      // Close dropdown on outside click
      document.addEventListener('click', (e) => {
        if (!langDropdown.contains(e.target) && e.target !== langBtn) {
          langDropdown.classList.remove('open');
        }
      });
    }
  }

  // Language switching function
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLang', lang);
    document.documentElement.lang = lang;

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (window.translations[lang] && window.translations[lang][key]) {
        el.textContent = window.translations[lang][key];
      }
    });

    // Update language selector button display
    const flagMap = { en: 'EN', de: 'DE', 'zh-TW': '中文' };
    const flagEl = document.getElementById('langSelectorFlag');
    if (flagEl) flagEl.textContent = flagMap[lang] || 'EN';

    // Update active state in dropdown
    document.querySelectorAll('.lang-dropdown-item').forEach(item => {
      item.classList.toggle('active', item.getAttribute('data-lang') === lang);
    });
  }

  // Project modal functions (make global)
  window.openProject = function(idx) {
    const p = projects[idx];
    document.getElementById('modalBody').innerHTML =
      '<p style="font-family:JetBrains Mono,monospace;font-size:11px;color:#c4652a;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.5rem">' + p.period + '</p>' +
      '<h3 style="font-family:DM Serif Display,Georgia,serif;font-size:1.5rem;line-height:1.2">' + p.title + '</h3>' +
      '<p style="margin-top:1rem;font-size:14px;line-height:1.7;color:#5a5a5a">' + p.desc + '</p>' +
      '<div style="margin-top:1.5rem"><p style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.2em;color:#9a9a9a;margin-bottom:0.75rem">Technologies</p>' +
      '<div style="display:flex;flex-wrap:wrap;gap:0.5rem">' +
      p.tech.map(t => '<span style="padding:0.375rem 0.875rem;background:#fff;border:1px solid #e8e4df;border-radius:100px;font-size:12px;font-weight:500">' + t + '</span>').join('') +
      '</div></div>';
    document.getElementById('modalBackdrop').classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeModal = function(e) {
    if (e.target === document.getElementById('modalBackdrop')) closeModalDirect();
  };

  window.closeModalDirect = function() {
    document.getElementById('modalBackdrop').classList.remove('open');
    document.body.style.overflow = '';
  };

  document.addEventListener('keydown', e => { 
    if (e.key === 'Escape') closeModalDirect(); 
  });

  // Start the app
  renderApp();

  /* ---- Rain Animation ---- */
  initRainAnimation();

  /* ---- Accent Color Picker ---- */
  const savedColor = localStorage.getItem('accentColor');
  if (savedColor) {
    setAccentColor(savedColor);
  }

  // Accent color functions
  function setAccentColor(color) {
    document.documentElement.style.setProperty('--accent', color);
    
    const lighter = adjustColor(color, 20);
    const darker = adjustColor(color, -20);
    
    document.documentElement.style.setProperty('--accent-light', lighter);
    document.documentElement.style.setProperty('--accent-dark', darker);
    
    const rgb = hexToRgb(color);
    if (rgb) {
      document.documentElement.style.setProperty('--accent-bg', `rgba(${rgb.r},${rgb.g},${rgb.b},0.08)`);
      document.documentElement.style.setProperty('--accent-bg-hover', `rgba(${rgb.r},${rgb.g},${rgb.b},0.15)`);
      document.documentElement.style.setProperty('--accent-border', `rgba(${rgb.r},${rgb.g},${rgb.b},0.3)`);
      document.documentElement.style.setProperty('--accent-border-light', `rgba(${rgb.r},${rgb.g},${rgb.b},0.4)`);
      document.documentElement.style.setProperty('--accent-text', color);
    }
    
    localStorage.setItem('accentColor', color);
  }

  function updateActivePreset(color, presets) {
    if (!presets) presets = document.querySelectorAll('.color-preset');
    presets.forEach(p => {
      const isActive = color && p.getAttribute('data-color') === color;
      p.classList.toggle('active', isActive);
    });
  }

  function adjustColor(color, amount) {
    const rgb = hexToRgb(color);
    if (!rgb) return color;
    
    const r = Math.max(0, Math.min(255, rgb.r + amount));
    const g = Math.max(0, Math.min(255, rgb.g + amount));
    const b = Math.max(0, Math.min(255, rgb.b + amount));
    
    return `rgb(${r}, ${g}, ${b})`;
  }

  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  // Settings dropdown logic (inside initializeApp to ensure elements exist)
  function initSettingsDropdown() {
    const settingsBtn = document.getElementById('settingsBtn');
    const settingsDropdown = document.getElementById('settingsDropdown');
    const colorInput = document.getElementById('accentColorInput');
    const presets = document.querySelectorAll('.color-preset');
    const rainToggle = document.getElementById('rainToggle');

    if (!settingsBtn || !settingsDropdown) {
      console.warn('Settings elements not found, retrying...');
      setTimeout(initSettingsDropdown, 100);
      return;
    }

    // Settings dropdown toggle
    settingsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isOpen = settingsDropdown.classList.contains('open');
      settingsDropdown.classList.toggle('open', !isOpen);
    });

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
      if (!settingsDropdown.contains(e.target) && e.target !== settingsBtn) {
        settingsDropdown.classList.remove('open');
      }
    });

    // Prevent dropdown from closing when clicking inside
    settingsDropdown.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    // Native color picker change
    if (colorInput) {
      colorInput.addEventListener('input', (e) => {
        setAccentColor(e.target.value);
        updateActivePreset(null);
      });
    }

    // Preset color clicks
    presets.forEach(preset => {
      preset.addEventListener('click', () => {
        const color = preset.getAttribute('data-color');
        setAccentColor(color);
        updateActivePreset(color);
        if (colorInput) colorInput.value = color;
      });
    });

    // Rain toggle
    let rainEnabled = true;
    const savedRainState = localStorage.getItem('rainAnimation');
    if (savedRainState !== null) {
      rainEnabled = savedRainState === 'true';
      if (rainToggle) rainToggle.checked = rainEnabled;
    }
    
    if (rainToggle) {
      rainToggle.addEventListener('change', () => {
        rainEnabled = rainToggle.checked;
        localStorage.setItem('rainAnimation', rainEnabled);
        const canvas = document.getElementById('rainCanvas');
        if (canvas) {
          canvas.style.display = rainEnabled ? 'block' : 'none';
        }
      });
      
      // Apply initial state
      const canvas = document.getElementById('rainCanvas');
      if (canvas && !rainEnabled) {
        canvas.style.display = 'none';
      }
    }

    function updateActivePreset(color) {
      presets.forEach(p => {
        const isActive = color && p.getAttribute('data-color') === color;
        p.classList.toggle('active', isActive);
      });
    }
  }

  // Initialize settings after render
  setTimeout(initSettingsDropdown, 50);

  /* ---- Rain Animation Implementation ---- */
  function initRainAnimation() {
    const canvas = document.getElementById('rainCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let drops = [];
    let splashes = [];
    const isDark = document.documentElement.classList.contains('dark');
    
    // Resize canvas to window size
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Raindrop class
    class Drop {
      constructor() {
        this.reset();
      }
      
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height;
        this.length = Math.random() * 20 + 10;
        this.speed = Math.random() * 8 + 6;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.thickness = Math.random() * 1.5 + 0.5;
      }
      
      update() {
        this.y += this.speed;
        
        // Create splash when drop reaches bottom
        if (this.y > canvas.height) {
          if (Math.random() > 0.7) {
            createSplash(this.x, canvas.height);
          }
          this.reset();
        }
      }
      
      draw() {
        const isDarkMode = document.documentElement.classList.contains('dark');
        const color = isDarkMode ? `rgba(255, 255, 255, ${this.opacity})` : `rgba(10, 10, 10, ${this.opacity * 0.5})`;
        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = this.thickness;
        ctx.lineCap = 'round';
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + 0.5, this.y + this.length);
        ctx.stroke();
      }
    }
    
    // Splash class
    class Splash {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.particles = [];
        this.createParticles();
      }
      
      createParticles() {
        const count = Math.floor(Math.random() * 3) + 2;
        for (let i = 0; i < count; i++) {
          this.particles.push({
            x: this.x,
            y: this.y,
            vx: (Math.random() - 0.5) * 2,
            vy: -Math.random() * 3 - 1,
            radius: Math.random() * 1.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.3,
            gravity: 0.15
          });
        }
      }
      
      update() {
        this.particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += p.gravity;
          p.opacity -= 0.01;
        });
        
        // Remove faded particles
        this.particles = this.particles.filter(p => p.opacity > 0);
      }
      
      draw() {
        const isDarkMode = document.documentElement.classList.contains('dark');
        
        this.particles.forEach(p => {
          const color = isDarkMode ? `rgba(255, 255, 255, ${p.opacity})` : `rgba(10, 10, 10, ${p.opacity * 0.5})`;
          
          ctx.beginPath();
          ctx.fillStyle = color;
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        });
      }
      
      isDead() {
        return this.particles.length === 0;
      }
    }
    
    function createSplash(x, y) {
      splashes.push(new Splash(x, y));
    }
    
    // Initialize drops
    const dropCount = Math.min(100, Math.floor(window.innerWidth / 15));
    for (let i = 0; i < dropCount; i++) {
      drops.push(new Drop());
    }
    
    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw drops
      drops.forEach(drop => {
        drop.update();
        drop.draw();
      });
      
      // Update and draw splashes
      splashes.forEach(splash => {
        splash.update();
        splash.draw();
      });
      
      // Remove dead splashes
      splashes = splashes.filter(s => !s.isDead());
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    // Adjust drop count on resize
    window.addEventListener('resize', () => {
      const newCount = Math.min(100, Math.floor(window.innerWidth / 15));
      while (drops.length < newCount) {
        drops.push(new Drop());
      }
      while (drops.length > newCount) {
        drops.pop();
      }
    });
  }

})();
