/**
 * Fine Tuning — Multipage Static Showcase Controller (`preview-static/js/main.js`)
 * Version: 2.5.0 | Pure Vanilla JavaScript — ZERO external frameworks or runtimes.
 * Supports direct file opening (file:///) and static web servers.
 */

(function () {
  'use strict';

  // Safe localStorage wrapper for file:/// browser contexts
  const storage = {
    get: function (key, fallback) {
      try {
        return localStorage.getItem(key) || fallback;
      } catch (e) {
        return fallback;
      }
    },
    set: function (key, value) {
      try {
        localStorage.setItem(key, value);
      } catch (e) {
        // Storage restricted in sandboxed file:// mode
      }
    }
  };

  // --------------------------------------------------------------------------
  // 1. DUAL THEME ENGINE (Midnight Stage Dark / Studio Editorial Light)
  // --------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const htmlEl = document.documentElement;

  function initTheme() {
    const saved = storage.get('ft_theme', 'dark');
    htmlEl.setAttribute('data-theme', saved);
    updateThemeIcon(saved);
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'light') {
      themeIcon.innerHTML = '🌙';
      if (themeToggleBtn) themeToggleBtn.setAttribute('aria-label', 'Switch to Midnight Stage Dark Theme');
    } else {
      themeIcon.innerHTML = '☀️';
      if (themeToggleBtn) themeToggleBtn.setAttribute('aria-label', 'Switch to Studio Editorial Light Theme');
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
      const current = htmlEl.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', next);
      storage.set('ft_theme', next);
      updateThemeIcon(next);
      showToast('Theme switched to ' + (next === 'dark' ? 'Midnight Stage (Dark)' : 'Studio Editorial (Light)'), 'info');
    });
  }

  // --------------------------------------------------------------------------
  // 2. DENSITY SWITCHER (.density-comfortable / .density-compact)
  // --------------------------------------------------------------------------
  const densityToggleBtn = document.getElementById('density-toggle-btn');

  function initDensity() {
    const saved = storage.get('ft_density', 'comfortable');
    if (saved === 'compact') {
      document.body.classList.add('density-compact');
    }
  }

  if (densityToggleBtn) {
    densityToggleBtn.addEventListener('click', function () {
      const isCompact = document.body.classList.toggle('density-compact');
      const mode = isCompact ? 'compact' : 'comfortable';
      storage.set('ft_density', mode);
      showToast('Interface density: ' + mode.toUpperCase(), 'info');
    });
  }

  // --------------------------------------------------------------------------
  // 3. ACCESSIBLE MOBILE LATERAL DRAWER & NAVIGATION
  // --------------------------------------------------------------------------
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');

  function openDrawer() {
    if (!drawerOverlay) return;
    drawerOverlay.classList.add('active');
    drawerOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (drawerCloseBtn) drawerCloseBtn.focus();
  }

  function closeDrawer() {
    if (!drawerOverlay) return;
    drawerOverlay.classList.remove('active');
    drawerOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (hamburgerBtn) hamburgerBtn.focus();
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', function (e) {
      if (e.target === drawerOverlay) closeDrawer();
    });
  }

  // Universal Escape key dismissal for drawers and modals
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
      if (drawerOverlay && drawerOverlay.classList.contains('active')) {
        closeDrawer();
      }
      closeModal();
    }
  });

  // --------------------------------------------------------------------------
  // 4. ACCESSIBLE MODAL DIALOGS
  // --------------------------------------------------------------------------
  const modalOverlay = document.getElementById('brief-modal-overlay');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  let lastFocusedElement = null;

  function openModal() {
    if (!modalOverlay) return;
    lastFocusedElement = document.activeElement;
    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const firstInput = modalOverlay.querySelector('input, select, textarea, button');
    if (firstInput) firstInput.focus();
  }

  function closeModal() {
    if (!modalOverlay || !modalOverlay.classList.contains('active')) return;
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  document.querySelectorAll('.trigger-modal-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      if (modalOverlay) {
        e.preventDefault();
        openModal();
      }
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // --------------------------------------------------------------------------
  // 5. ACCESSIBLE TABS & KEYBOARD NAVIGATION
  // --------------------------------------------------------------------------
  const tabLists = document.querySelectorAll('[role="tablist"]');
  tabLists.forEach(function (tabList) {
    const tabs = tabList.querySelectorAll('[role="tab"]');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        selectTab(tabList, tab);
      });

      tab.addEventListener('keydown', function (e) {
        let index = Array.from(tabs).indexOf(tab);
        if (e.key === 'ArrowRight') {
          index = (index + 1) % tabs.length;
          tabs[index].focus();
          selectTab(tabList, tabs[index]);
        } else if (e.key === 'ArrowLeft') {
          index = (index - 1 + tabs.length) % tabs.length;
          tabs[index].focus();
          selectTab(tabList, tabs[index]);
        }
      });
    });
  });

  function selectTab(tabList, activeTab) {
    const tabs = tabList.querySelectorAll('[role="tab"]');
    const targetId = activeTab.getAttribute('aria-controls');

    tabs.forEach(function (t) {
      t.setAttribute('aria-selected', 'false');
      t.classList.remove('active');
      t.setAttribute('tabindex', '-1');
    });

    activeTab.setAttribute('aria-selected', 'true');
    activeTab.classList.add('active');
    activeTab.setAttribute('tabindex', '0');

    const parentSection = tabList.closest('section') || document;
    parentSection.querySelectorAll('[role="tabpanel"]').forEach(function (panel) {
      if (panel.id === targetId) {
        panel.hidden = false;
        panel.classList.add('active');
      } else {
        panel.hidden = true;
        panel.classList.remove('active');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 6. HERO FOH SOUNDCHECK EQUALIZER & SPL DECIBEL FADER
  // --------------------------------------------------------------------------
  const eqBars = document.querySelectorAll('.soundcheck-eq-bar');
  if (eqBars.length > 0) {
    setInterval(function () {
      eqBars.forEach(function (bar) {
        const rand = Math.floor(Math.random() * 65) + 20;
        bar.style.height = rand + '%';
      });
    }, 280);
  }

  const decibelSlider = document.getElementById('decibel-slider');
  const dbDisplay = document.getElementById('db-numeric-display');
  const dbStatusPill = document.getElementById('db-status-pill');

  if (decibelSlider && dbDisplay) {
    decibelSlider.addEventListener('input', function () {
      const val = parseInt(decibelSlider.value, 10);
      dbDisplay.textContent = val + ' dBA';

      if (val <= 85) {
        dbStatusPill.textContent = 'Speech Intelligibility Safe';
        dbStatusPill.className = 'soundcheck-status-pill safe';
      } else if (val <= 95) {
        dbStatusPill.textContent = 'High SPL Level (Caution)';
        dbStatusPill.className = 'soundcheck-status-pill warn';
      } else {
        dbStatusPill.textContent = 'Dante Limiter Active (OSHA Clamp)';
        dbStatusPill.className = 'soundcheck-status-pill alert';
      }
    });
  }

  // --------------------------------------------------------------------------
  // 7. INTERACTIVE STAGING CALCULATOR WIZARD
  // --------------------------------------------------------------------------
  const wizardAttendees = document.getElementById('wizard-attendees');
  const wizardAttendeesVal = document.getElementById('wizard-attendees-val');
  const wizardVenueType = document.getElementById('wizard-venue-type');
  const calcPowerVal = document.getElementById('calc-power-val');
  const calcTrussVal = document.getElementById('calc-truss-val');
  const calcLedVal = document.getElementById('calc-led-val');

  function updateWizardCalculations() {
    if (!wizardAttendees || !calcPowerVal) return;
    const count = parseInt(wizardAttendees.value, 10);
    if (wizardAttendeesVal) wizardAttendeesVal.textContent = count.toLocaleString() + ' Guests';

    const venue = wizardVenueType ? wizardVenueType.value : 'ballroom';
    let power = 65;
    let truss = 24;
    let led = '18 × 4 m';

    if (count > 800) {
      power = 125;
      truss = 38;
      led = '28 × 5 m';
    }
    if (count > 2000 || venue === 'outdoor') {
      power = 250;
      truss = 52;
      led = '38 × 6 m (Curved P2.6)';
    }

    calcPowerVal.textContent = power + ' kVA Redundant';
    if (calcTrussVal) calcTrussVal.textContent = truss + ' m H30V Box Truss';
    if (calcLedVal) calcLedVal.textContent = led;
  }

  if (wizardAttendees) wizardAttendees.addEventListener('input', updateWizardCalculations);
  if (wizardVenueType) wizardVenueType.addEventListener('change', updateWizardCalculations);

  // Wizard step navigation
  const nextStepBtn = document.getElementById('wizard-next-step');
  const prevStepBtn = document.getElementById('wizard-prev-step');
  let currentStep = 1;

  if (nextStepBtn && prevStepBtn) {
    nextStepBtn.addEventListener('click', function () {
      if (currentStep < 3) {
        currentStep++;
        updateWizardSteps(currentStep);
      } else {
        showToast('[DEMO ONLY] Production brief simulated! Ticket #FT-2026-RIG.', 'success');
      }
    });

    prevStepBtn.addEventListener('click', function () {
      if (currentStep > 1) {
        currentStep--;
        updateWizardSteps(currentStep);
      }
    });
  }

  function updateWizardSteps(step) {
    document.querySelectorAll('.wizard-step-pane').forEach(function (pane, idx) {
      pane.style.display = (idx + 1 === step) ? 'block' : 'none';
    });
    document.querySelectorAll('.wizard-progress-dot').forEach(function (dot, idx) {
      dot.classList.toggle('active', idx + 1 <= step);
    });
    if (prevStepBtn) prevStepBtn.disabled = (step === 1);
    if (nextStepBtn) nextStepBtn.textContent = (step === 3) ? 'Confirm & Generate Spec' : 'Next Step →';
  }

  // --------------------------------------------------------------------------
  // 8. CASE STUDIES LIVE SEARCH & CATEGORY FILTER
  // --------------------------------------------------------------------------
  const caseSearchInput = document.getElementById('case-search-input');
  const filterPills = document.querySelectorAll('.filter-pill');
  const caseCards = document.querySelectorAll('.case-card-archive');
  const caseEmptyState = document.getElementById('case-empty-state');

  function filterCases() {
    if (!caseCards.length) return;
    const query = caseSearchInput ? caseSearchInput.value.toLowerCase().trim() : '';
    const activePill = document.querySelector('.filter-pill.active');
    const selectedCategory = activePill ? activePill.getAttribute('data-filter') : 'all';

    let visibleCount = 0;

    caseCards.forEach(function (card) {
      const cardCategory = card.getAttribute('data-category') || '';
      const cardText = card.textContent.toLowerCase();

      const matchesCategory = (selectedCategory === 'all' || cardCategory === selectedCategory);
      const matchesQuery = (!query || cardText.includes(query));

      if (matchesCategory && matchesQuery) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (caseEmptyState) {
      caseEmptyState.style.display = (visibleCount === 0) ? 'block' : 'none';
    }
  }

  if (caseSearchInput) caseSearchInput.addEventListener('input', filterCases);

  filterPills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      filterPills.forEach(function (p) { p.classList.remove('active'); });
      pill.classList.add('active');
      filterCases();
    });
  });

  // --------------------------------------------------------------------------
  // 9. FAQ ACCORDION & SEARCH FILTER
  // --------------------------------------------------------------------------
  document.querySelectorAll('.faq-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const item = trigger.closest('.faq-item');
      const isOpen = item.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach(function (other) {
        other.classList.remove('active');
        const trig = other.querySelector('.faq-trigger');
        if (trig) trig.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  const faqSearchInput = document.getElementById('faq-search-input');
  if (faqSearchInput) {
    faqSearchInput.addEventListener('input', function () {
      const query = faqSearchInput.value.toLowerCase().trim();
      document.querySelectorAll('.faq-item').forEach(function (item) {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? '' : 'none';
      });
    });
  }

  // --------------------------------------------------------------------------
  // 10. CLIENT VIP EVENT PORTAL ACTIONS
  // --------------------------------------------------------------------------
  const signOffBtn = document.getElementById('sign-off-trigger-btn');
  if (signOffBtn) {
    signOffBtn.addEventListener('click', function () {
      showToast('[DEMO OK] Stage clearance approved! Notified FOH Director.', 'success');
      signOffBtn.innerHTML = '<span>✓ Clearance Approved</span>';
      signOffBtn.style.opacity = '0.8';
      signOffBtn.disabled = true;
    });
  }

  const refreshTelemetryBtn = document.getElementById('refresh-telemetry-btn');
  if (refreshTelemetryBtn) {
    refreshTelemetryBtn.addEventListener('click', function () {
      showToast('[TELEMETRY SYNC] Grid load 4.8T, Dante latency 0.25ms (Nominal)', 'info');
    });
  }

  document.querySelectorAll('.download-file-trigger').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const fname = btn.getAttribute('data-filename') || 'schematic.dwg';
      showToast('[DEMO DOWNLOAD] Packaging CAD schematic: ' + fname, 'info');
    });
  });

  // --------------------------------------------------------------------------
  // 11. FORM VALIDATION PRESENTATION & DEMO SUBMISSIONS
  // --------------------------------------------------------------------------
  const consultationForm = document.getElementById('modal-form');
  if (consultationForm) {
    consultationForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('m-client-name').value.trim();
      const phone = document.getElementById('m-client-phone').value.trim();

      if (!name || !phone) {
        showToast('Please fill out all required briefing fields.', 'error');
        return;
      }

      closeModal();
      showToast('[DEMO ONLY] Technical brief simulated! Dispatch ref: #FT-2026-BSRM.', 'success');
      consultationForm.reset();
    });
  }

  const contactRfpForm = document.getElementById('contact-rfp-form');
  if (contactRfpForm) {
    contactRfpForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = contactRfpForm.querySelector('input[name="name"]') || contactRfpForm.querySelector('#c-name');
      const email = contactRfpForm.querySelector('input[name="email"]') || contactRfpForm.querySelector('#c-email');

      if (name && !name.value.trim()) {
        showToast('Please enter your full corporate name.', 'error');
        name.focus();
        return;
      }
      if (email && (!email.value.trim() || !email.value.includes('@'))) {
        showToast('Please enter a valid corporate email address.', 'error');
        email.focus();
        return;
      }

      showToast('[DEMO ONLY] RFP Brief registered locally. Direct dispatch: +880 1671-863685', 'success');
      contactRfpForm.reset();
    });
  }

  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const emailInput = document.getElementById('newsletter-email');
      const email = emailInput ? emailInput.value.trim() : '';
      if (email && email.includes('@')) {
        showToast('[DEMO ONLY] Subscribed to Technical Production Notes dispatch!', 'success');
        newsletterForm.reset();
      } else {
        showToast('Please provide a valid corporate email address.', 'error');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 12. TOAST NOTIFICATION ENGINE (Pure Vanilla, accessible aria-live)
  // --------------------------------------------------------------------------
  const toastContainer = document.getElementById('toast-container');

  window.showToast = function (msg, type) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '⚠️';

    toast.innerHTML = '<span aria-hidden="true">' + icon + '</span><span>' + msg + '</span>';
    toastContainer.appendChild(toast);

    setTimeout(function () {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(function () { toast.remove(); }, 300);
    }, 3800);
  };

  // --------------------------------------------------------------------------
  // 13. INITIALIZATION
  // --------------------------------------------------------------------------
  initTheme();
  initDensity();
  updateWizardCalculations();

})();

