/**
 * Fine Tuning Production Preview Controller (`preview/app.js`)
 * Version: 2.5.0
 * Zero external dependencies — Pure Vanilla JavaScript.
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. DUAL THEME ENGINE (DARK / LIGHT)
  // --------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const htmlEl = document.documentElement;

  function initTheme() {
    const saved = localStorage.getItem('ft_theme') || 'dark';
    htmlEl.setAttribute('data-theme', saved);
    updateThemeIcon(saved);
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'light') {
      themeIcon.innerHTML = '🌙'; // moon to switch to dark
      themeToggleBtn.setAttribute('aria-label', 'Switch to Dark Theme');
    } else {
      themeIcon.innerHTML = '☀️'; // sun to switch to light
      themeToggleBtn.setAttribute('aria-label', 'Switch to Light Theme');
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
      const current = htmlEl.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', next);
      localStorage.setItem('ft_theme', next);
      updateThemeIcon(next);
      showToast('Theme switched to ' + (next === 'dark' ? 'Midnight Stage' : 'Studio Editorial'), 'info');
    });
  }

  // --------------------------------------------------------------------------
  // 2. DENSITY SWITCHER (.density-comfortable / .density-compact)
  // --------------------------------------------------------------------------
  const densityToggleBtn = document.getElementById('density-toggle-btn');

  function initDensity() {
    const saved = localStorage.getItem('ft_density') || 'comfortable';
    if (saved === 'compact') {
      document.body.classList.add('density-compact');
    }
  }

  if (densityToggleBtn) {
    densityToggleBtn.addEventListener('click', function () {
      const isCompact = document.body.classList.toggle('density-compact');
      const mode = isCompact ? 'compact' : 'comfortable';
      localStorage.setItem('ft_density', mode);
      showToast('Interface density: ' + mode.toUpperCase(), 'info');
    });
  }

  // --------------------------------------------------------------------------
  // 3. MOBILE LATERAL DRAWER & NAVIGATION
  // --------------------------------------------------------------------------
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');

  function openDrawer() {
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    drawerCloseBtn.focus();
  }

  function closeDrawer() {
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
    hamburgerBtn.focus();
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', function (e) {
      if (e.target === drawerOverlay) closeDrawer();
    });
  }

  // Close drawer on link click
  document.querySelectorAll('.drawer-link').forEach(function (link) {
    link.addEventListener('click', closeDrawer);
  });

  // --------------------------------------------------------------------------
  // 4. HERO FOH SOUNDCHECK EQUALIZER SIMULATION
  // --------------------------------------------------------------------------
  const eqBars = document.querySelectorAll('.soundcheck-bar-cluster .sc-bar');

  function pulseEqualizer() {
    if (document.hidden) return;
    eqBars.forEach(function (bar) {
      const h = Math.floor(Math.random() * 42) + 8;
      bar.style.height = h + 'px';
    });
  }
  setInterval(pulseEqualizer, 280);

  // --------------------------------------------------------------------------
  // 5. INTERACTIVE SOUNDCHECK DECIBEL LIMITER FADER
  // --------------------------------------------------------------------------
  const faderSlider = document.getElementById('soundcheck-fader');
  const gaugeNeedle = document.getElementById('gauge-needle');
  const gaugeVal = document.getElementById('gauge-live-val');
  const gaugeStatus = document.getElementById('gauge-status-text');
  const limiterAlert = document.getElementById('limiter-clamp-alert');

  if (faderSlider && gaugeNeedle) {
    faderSlider.addEventListener('input', function () {
      const val = parseFloat(faderSlider.value);
      if (gaugeVal) gaugeVal.textContent = val.toFixed(1) + ' dBA';

      // Needle angle: 60 dBA = -45deg, 85 dBA = 0deg, 110 dBA = 45deg
      const angle = ((val - 85) / 25) * 45;
      gaugeNeedle.setAttribute('transform', 'rotate(' + angle + ' 130 130)');

      // Threshold zones
      if (val <= 85.0) {
        gaugeStatus.textContent = '● SPEECH INTELLIGIBLE & ACOUSTIC SAFE';
        gaugeStatus.style.color = 'var(--color-emerald-400)';
        gaugeVal.style.color = 'var(--color-emerald-400)';
        limiterAlert.classList.remove('active');
      } else if (val <= 95.0) {
        gaugeStatus.textContent = '▲ ELEVATED CONCERT PEAK LEVEL';
        gaugeStatus.style.color = 'var(--color-action-primary)';
        gaugeVal.style.color = 'var(--color-action-primary)';
        limiterAlert.classList.remove('active');
      } else {
        gaugeStatus.textContent = '■ MUNICIPAL OVERLIMIT (LIMITER CLAMP)';
        gaugeStatus.style.color = 'var(--color-rose-400)';
        gaugeVal.style.color = 'var(--color-rose-400)';
        limiterAlert.classList.add('active');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 6. CASE STUDIES CATEGORY FILTERING
  // --------------------------------------------------------------------------
  const filterPills = document.querySelectorAll('.filter-pill');
  const caseCards = document.querySelectorAll('.case-card');

  filterPills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      filterPills.forEach(function (p) { p.classList.remove('active'); });
      pill.classList.add('active');
      const cat = pill.getAttribute('data-filter');

      caseCards.forEach(function (card) {
        const cardCat = card.getAttribute('data-category');
        if (cat === 'all' || cardCat === cat) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 7. IN-LINE STAGING WIZARD DYNAMIC ESTIMATOR
  // --------------------------------------------------------------------------
  const wizardVenue = document.getElementById('wizard-venue');
  const wizardPax = document.getElementById('wizard-pax');
  const wizardBoxes = document.querySelectorAll('.wizard-box');
  const calcPower = document.getElementById('calc-power');
  const calcTruss = document.getElementById('calc-truss');
  const calcAudio = document.getElementById('calc-audio');

  function updateWizardCalculations() {
    if (!wizardVenue || !wizardPax) return;
    let power = 25; // base kVA
    let truss = '24ft × 14ft';
    let channels = 8;

    const paxVal = parseInt(wizardPax.value, 10);
    if (paxVal >= 1000) {
      power += 25;
      truss = '48ft × 24ft Box Truss';
      channels += 16;
    } else if (paxVal >= 500) {
      power += 15;
      truss = '36ft × 18ft Box Truss';
      channels += 8;
    }

    wizardBoxes.forEach(function (box) {
      if (box.checked) {
        if (box.value === 'led') power += 15;
        if (box.value === 'audio') { power += 10; channels += 8; }
        if (box.value === 'broadcast') power += 5;
        if (box.value === 'booth') power += 3;
      }
    });

    if (calcPower) calcPower.textContent = '~' + power + ' kVA';
    if (calcTruss) calcTruss.textContent = truss;
    if (calcAudio) calcAudio.textContent = channels + ' Channels';
  }

  if (wizardVenue) wizardVenue.addEventListener('change', updateWizardCalculations);
  if (wizardPax) wizardPax.addEventListener('change', updateWizardCalculations);
  wizardBoxes.forEach(function (box) {
    box.addEventListener('change', updateWizardCalculations);
  });

  // --------------------------------------------------------------------------
  // 8. MEANINGFUL FAQ ACCORDION
  // --------------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', function () {
      const isActive = item.classList.contains('active');
      // Collapse others
      faqItems.forEach(function (other) {
        other.classList.remove('active');
        const otherTrigger = other.querySelector('.faq-trigger');
        if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // --------------------------------------------------------------------------
  // 9. CONSULTATION BOOKING MODAL & SUBMISSION
  // --------------------------------------------------------------------------
  const modalOverlay = document.getElementById('consultation-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const openModalTriggers = document.querySelectorAll('.trigger-modal-btn');
  const consultationForm = document.getElementById('consultation-form');

  function openModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    const firstInput = document.getElementById('modal-client-name');
    if (firstInput) firstInput.focus();
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  openModalTriggers.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Universal Escape key dismissal
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (modalOverlay && modalOverlay.classList.contains('active')) closeModal();
      if (drawerOverlay && drawerOverlay.classList.contains('active')) closeDrawer();
    }
  });

  if (consultationForm) {
    consultationForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('modal-client-name').value.trim();
      const phone = document.getElementById('modal-client-phone').value.trim();

      if (!name || !phone) {
        showToast('Please enter your name and contact phone number.', 'error');
        return;
      }

      closeModal();
      showToast('Technical briefing brief registered! Ticket #FT-2026-BSRM.', 'success');
      consultationForm.reset();
    });
  }

  // --------------------------------------------------------------------------
  // 10. NEWSLETTER DISPATCH FORM
  // --------------------------------------------------------------------------
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('newsletter-email').value.trim();
      if (email && email.includes('@')) {
        showToast('Subscribed to Technical Production Notes dispatch!', 'success');
        newsletterForm.reset();
      } else {
        showToast('Please enter a valid corporate email address.', 'error');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 11. TOAST NOTIFICATION ENGINE
  // --------------------------------------------------------------------------
  const toastContainer = document.getElementById('toast-container');

  window.showToast = function (msg, type) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '⚠️';

    toast.innerHTML = '<span>' + icon + '</span><span>' + msg + '</span>';
    toastContainer.appendChild(toast);

    setTimeout(function () {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(function () { toast.remove(); }, 300);
    }, 3800);
  };

  // --------------------------------------------------------------------------
  // 12. FAQ SEARCH FILTER
  // --------------------------------------------------------------------------
  const faqSearchInput = document.getElementById('faq-search-input');
  if (faqSearchInput) {
    faqSearchInput.addEventListener('input', function () {
      const query = faqSearchInput.value.toLowerCase().trim();
      document.querySelectorAll('.faq-item').forEach(function (item) {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 13. CLIENT VIP PORTAL ACTIONS
  // --------------------------------------------------------------------------
  const signOffBtn = document.getElementById('sign-off-trigger-btn');
  if (signOffBtn) {
    signOffBtn.addEventListener('click', function () {
      showToast('Stage clearance approved! Notification dispatched to FOH Director.', 'success');
      signOffBtn.innerHTML = '<span>✓ Clearance Approved</span>';
      signOffBtn.style.opacity = '0.8';
      signOffBtn.disabled = true;
    });
  }

  const refreshTelemetryBtn = document.getElementById('refresh-telemetry-btn');
  if (refreshTelemetryBtn) {
    refreshTelemetryBtn.addEventListener('click', function () {
      showToast('Telemetry refreshed: Grid load 4.8T, Dante latency 0.25ms (Nominal)', 'info');
    });
  }

  document.querySelectorAll('.download-file-trigger').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const fname = btn.getAttribute('data-filename') || 'document';
      showToast('Packaging CAD schematic: ' + fname, 'info');
    });
  });

  // Initialize
  initTheme();
  initDensity();
  updateWizardCalculations();

})();


