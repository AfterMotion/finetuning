/**
 * Fine Tuning Production Preview Controller (`preview/app.js`)
 * Version: 2.5.0
 * Zero external dependencies — Pure Vanilla JavaScript.
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. THEME ENGINE (DARK STAGE AUTHORITATIVE STANDARD - Invariant 9)
  // --------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const htmlEl = document.documentElement;

  function initTheme() {
    // Invariant 9: Enforce Dark Stage Theme and purge any legacy light preference
    try {
      localStorage.removeItem('ft_theme');
      localStorage.setItem('ft_theme', 'dark');
    } catch (e) {
      // Ignore storage errors in private browsing
    }
    htmlEl.setAttribute('data-theme', 'dark');
    updateThemeIcon('dark');
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    themeIcon.innerHTML = '🌙';
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('aria-label', 'Midnight Stage Theme Active');
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
      htmlEl.setAttribute('data-theme', 'dark');
      try {
        localStorage.setItem('ft_theme', 'dark');
      } catch (e) {}
      showToast('Midnight Stage dark theme is active', 'info');
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
  if (eqBars.length > 0) {
    setInterval(pulseEqualizer, 280);
  }

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
      if (lightboxOverlay && lightboxOverlay.classList.contains('active')) closeLightbox();
      if (modalOverlay && modalOverlay.classList.contains('active')) closeModal();
      if (drawerOverlay && drawerOverlay.classList.contains('active')) closeDrawer();
    }
  });

  // --------------------------------------------------------------------------
  // 9B. FULLSCREEN IMAGE LIGHTBOX VIEWER
  // --------------------------------------------------------------------------
  const lightboxOverlay = document.getElementById('image-lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-full-img');
  const lightboxTitle = document.getElementById('lightbox-caption-title');
  const lightboxSub = document.getElementById('lightbox-caption-sub');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');

  function openLightbox(src, title, sub) {
    if (!lightboxOverlay || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = title || 'Staging Execution Photo';
    if (lightboxTitle) lightboxTitle.textContent = title || '';
    if (lightboxSub) lightboxSub.textContent = sub || '';
    lightboxOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (lightboxCloseBtn) lightboxCloseBtn.focus();
  }

  function closeLightbox() {
    if (!lightboxOverlay) return;
    lightboxOverlay.classList.remove('active');
    document.body.style.overflow = '';
    if (lightboxImg) lightboxImg.src = '';
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxOverlay) {
    lightboxOverlay.addEventListener('click', function (e) {
      if (e.target === lightboxOverlay) closeLightbox();
    });
  }

  // Bind clicks on case media boxes and case links
  document.querySelectorAll('.case-card').forEach(function (card) {
    const imgEl = card.querySelector('.case-img');
    const titleEl = card.querySelector('.case-title');
    const venueEl = card.querySelector('.case-venue-line');
    const mediaBox = card.querySelector('.case-media-box');
    const briefLink = card.querySelector('a.utility-link');

    function triggerCardLightbox(e) {
      if (e) e.preventDefault();
      if (!imgEl) return;
      openLightbox(
        imgEl.src,
        titleEl ? titleEl.textContent : 'Case Study Execution',
        venueEl ? venueEl.textContent : 'Fine Tuning Live Staging'
      );
    }

    if (mediaBox) mediaBox.addEventListener('click', triggerCardLightbox);
    if (briefLink && briefLink.textContent.includes('Rigging Brief')) {
      briefLink.addEventListener('click', triggerCardLightbox);
    }
  });

  // Also bind hero showcase media
  const heroShowcaseMedia = document.querySelector('.hero-showcase-media');
  if (heroShowcaseMedia) {
    heroShowcaseMedia.style.cursor = 'pointer';
    heroShowcaseMedia.title = 'Click to inspect full staging photograph';
    heroShowcaseMedia.addEventListener('click', function () {
      const img = heroShowcaseMedia.querySelector('img');
      if (img) {
        openLightbox(
          img.src,
          'Radisson Blu Grand Ballroom • Turnkey Summit Staging',
          'BSRM CORE ESG Annual Corporate Summit • 24m Ultra-Wide Curved P2.6 LED Volume'
        );
      }
    });
  }

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
  // 11. TOAST NOTIFICATION ENGINE (Pure SVG icons - Invariant 8 compliant)
  // --------------------------------------------------------------------------
  const toastContainer = document.getElementById('toast-container');

  window.showToast = function (msg, type) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    let iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';
    if (type === 'success') {
      iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>';
    } else if (type === 'error') {
      iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
    }

    toast.innerHTML = '<span>' + iconSvg + '</span><span>' + msg + '</span>';
    toastContainer.appendChild(toast);

    setTimeout(function () {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(function () { toast.remove(); }, 300);
    }, 3800);
  };

  // --------------------------------------------------------------------------
  // 12. HERO SLIDER ENGINE (3-Slide Carousel)
  // --------------------------------------------------------------------------
  function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.slider-dot');
    const counter = document.getElementById('hero-slide-counter');
    const prevBtn = document.getElementById('hero-slider-prev');
    const nextBtn = document.getElementById('hero-slider-next');
    if (!slides.length) return;

    let current = 0;
    let timer = null;

    function goToSlide(idx) {
      slides[current].classList.remove('active');
      if (dots[current]) dots[current].classList.remove('active');

      current = (idx + slides.length) % slides.length;

      slides[current].classList.add('active');
      if (dots[current]) dots[current].classList.add('active');
      if (counter) {
        counter.textContent = '0' + (current + 1) + ' / 0' + slides.length;
      }
    }

    function nextSlide() {
      goToSlide(current + 1);
    }

    function prevSlide() {
      goToSlide(current - 1);
    }

    if (nextBtn) nextBtn.addEventListener('click', function () {
      nextSlide();
      resetTimer();
    });

    if (prevBtn) prevBtn.addEventListener('click', function () {
      prevSlide();
      resetTimer();
    });

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        goToSlide(i);
        resetTimer();
      });
    });

    function startTimer() {
      timer = setInterval(nextSlide, 6000);
    }

    function resetTimer() {
      clearInterval(timer);
      startTimer();
    }

    const sliderSec = document.querySelector('.hero-slider-section');
    if (sliderSec) {
      sliderSec.addEventListener('mouseenter', function () { clearInterval(timer); });
      sliderSec.addEventListener('mouseleave', function () { startTimer(); });

      // Touch swipe
      let startX = 0;
      sliderSec.addEventListener('touchstart', function (e) {
        startX = e.changedTouches[0].screenX;
      }, { passive: true });

      sliderSec.addEventListener('touchend', function (e) {
        const diffX = e.changedTouches[0].screenX - startX;
        if (Math.abs(diffX) > 50) {
          if (diffX < 0) nextSlide();
          else prevSlide();
          resetTimer();
        }
      }, { passive: true });
    }

    startTimer();
  }

  // --------------------------------------------------------------------------
  // 13. "EXPERTISE IN ACTION" EXPANDABLE CARD EXPLORER
  // --------------------------------------------------------------------------
  function initExpertiseExplorer() {
    const cards = document.querySelectorAll('.expertise-card');
    const panel = document.getElementById('expertise-detail-panel');
    const closeBtn = document.getElementById('expertise-panel-close');
    if (!cards.length || !panel) return;

    const expertiseData = {
      'countrywide': {
        title: 'Countrywide Reach & Dual-Hub Staging Logistics',
        badge: 'Chattogram & Dhaka Active Hubs',
        image: 'images/webp/program-04/ucb-lake-stage-backdrop.webp',
        desc: 'From corporate ballrooms at Radisson Blu Chattogram to open-air lake valleys in Rangamati, Fine Tuning maintains in-house staging fleets and logistics crews across Bangladesh. Dual warehouses enable 4-hour rapid equipment dispatch for urgent summits.',
        points: [
          'Full-service staging infrastructure in Chattogram and Dhaka',
          'End-to-end transport, crew accommodation & site zoning',
          'Proven delivery in remote, island, and mountain terrains'
        ]
      },
      'led-staging': {
        title: 'Curved P2.6 Panoramic LED Volume Engineering',
        badge: '3840Hz High Refresh Rate',
        image: 'images/webp/program-02/bsrm-esg-stage-led.webp',
        desc: 'High-contrast, zero-reflection curved LED video walls engineered for broadcast-grade corporate conferences. Seamless curved corners eliminate visual seams, delivering immersive visuals for executive summits like the BSRM CORE ESG Event.',
        points: [
          'In-house high-density P2.6 and P3.9 modular panels',
          'Broadcast camera sync with zero moiré artifacting',
          'Novastar ultra-low latency processing'
        ]
      },
      'acoustics': {
        title: 'Concert-Grade Acoustic Line-Array Precision',
        badge: 'Audinate Dante Level 3 Certified',
        image: 'images/webp/program-03/bizstar-grand-finale-stage.webp',
        desc: 'Precision audio dispersion modeling guaranteeing crystal-clear speech intelligibility and concert dynamics across 2,000+ attendee arenas. Continuous digital DSP monitoring ensures zero acoustic distortion or podium feedback.',
        points: [
          'Dual-line array hangs calibrated with SMAART acoustic software',
          'Redundant digital audio network over Cat6/Fiber Dante backbone',
          'Multi-channel encrypted wireless microphones'
        ]
      },
      'fabrication': {
        title: 'Architectural Exhibition Pavilions & Turnkey Fabrication',
        badge: 'Certified Rigging Safety Standards',
        image: 'images/webp/program-01/motorfest-byd-royalenfield-master.webp',
        desc: 'Custom architectural stall design and master carpentry for global automotive brands like BYD and Royal Enfield. In-house CNC cutting, 3D channel lettering, load-tested structural trussing, and luxury ambient lighting.',
        points: [
          'Heavy vehicle showcase platforms with certified axle ratings',
          'Custom illuminated architectural facades & neon branding',
          'Certified structural aluminum box trussing'
        ]
      }
    };

    cards.forEach(function (card) {
      card.addEventListener('click', function () {
        const key = card.getAttribute('data-expertise');
        const data = expertiseData[key];
        if (!data) return;

        const titleEl = document.getElementById('expertise-panel-title');
        const badgeEl = document.getElementById('expertise-panel-badge');
        const descEl = document.getElementById('expertise-panel-desc');
        const imgEl = document.getElementById('expertise-panel-img');
        const listEl = document.getElementById('expertise-panel-list');

        if (titleEl) titleEl.textContent = data.title;
        if (badgeEl) badgeEl.textContent = data.badge;
        if (descEl) descEl.textContent = data.desc;
        if (imgEl) {
          imgEl.src = data.image;
          imgEl.alt = data.title;
        }

        if (listEl) {
          listEl.innerHTML = '';
          data.points.forEach(function (pt) {
            const li = document.createElement('li');
            li.textContent = pt;
            listEl.appendChild(li);
          });
        }

        cards.forEach(function (c) { c.classList.remove('active'); });
        card.classList.add('active');
        panel.classList.add('is-open');

        // Smooth scroll to panel if mobile
        if (window.innerWidth < 768) {
          panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        panel.classList.remove('is-open');
        cards.forEach(function (c) { c.classList.remove('active'); });
      });
    }
  }

  // --------------------------------------------------------------------------
  // 14. "OUR ACHIEVEMENTS" CAROUSEL CONTROLLER
  // --------------------------------------------------------------------------
  function initAchievementsCarousel() {
    const track = document.getElementById('achievements-track');
    const prevBtn = document.getElementById('achieve-prev');
    const nextBtn = document.getElementById('achieve-next');
    if (!track) return;

    let offset = 0;
    const cards = track.querySelectorAll('.achievement-card');
    const cardWidth = 320; // approximate width + gap

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        const maxOffset = Math.max(0, (cards.length * cardWidth) - track.parentElement.offsetWidth);
        offset = Math.min(offset + cardWidth, maxOffset);
        track.style.transform = 'translateX(-' + offset + 'px)';
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        offset = Math.max(0, offset - cardWidth);
        track.style.transform = 'translateX(-' + offset + 'px)';
      });
    }
  }

  // --------------------------------------------------------------------------
  // 15. WORKS FILTER & WORK DETAIL DYNAMIC ROUTER
  // --------------------------------------------------------------------------
  const verifiedProjects = {
    'motorfest': {
      title: '8th Motor Fest, Chattogram — BYD & Royal Enfield Exhibition Pavilions',
      client: 'BYD Auto & Royal Enfield Bangladesh',
      category: 'Brand Activations & Exhibition Pavilions',
      date: 'October 2026',
      venue: 'GEC Convention Center, Chattogram',
      capacity: '15,000+ Visitors over 3 Days',
      heroImage: 'images/webp/program-01/motorfest-byd-royalenfield-master.webp',
      overview: 'Fine Tuning engineered and fabricated custom architectural pavilions for global new energy vehicle manufacturer BYD (showcasing the Seal 5 sedan and Sealion 6 SUV) alongside an authentic heritage showcase for Royal Enfield ("Pure Motorcycling Since 1901").',
      challenge: 'Fabricating heavy-duty vehicle turntables and platforms within a 24-hour setup window while ensuring ambient lighting complemented automotive paint finishes without glare.',
      techSpecs: [
        'Custom vehicle reveal platforms with 3,500kg load test capacity',
        'Overhead aluminum box trussing with 3200K warm and 5600K cool balanced profiles',
        '3D illuminated acrylic channel lettering and glowing neon typography',
        'Integrated VIP client reception lounge and promotional booth'
      ],
      gallery: [
        'images/webp/program-01/motorfest-byd-royalenfield-master.webp',
        'images/webp/program-02/bsrm-esg-stage-led.webp'
      ]
    },
    'bsrm-esg': {
      title: 'BSRM CORE ESG National Corporate Summit',
      client: 'BSRM Group of Companies',
      category: 'Corporate Summits & ESG Conferences',
      date: 'September 2026',
      venue: 'Radisson Blu Chattogram Bay View',
      capacity: '600+ Corporate Delegates & VIP Executives',
      heroImage: 'images/webp/program-02/bsrm-esg-stage-led.webp',
      overview: 'A flagship national sustainability conference for Bangladesh\'s largest steel conglomerate, BSRM. Fine Tuning delivered complete turnkey stagecraft including a panoramic curved P2.6 LED volume, eco-friendly wayfinding totems, and an executive banquet hall.',
      challenge: 'Delivering continuous 4K visual playback across a curved screen without distortion while maintaining strict audio speech clarity across a banquet hall setup.',
      techSpecs: [
        'Curved P2.6 high-refresh LED backdrop (48ft × 14ft)',
        'Dual line-array hang with digital steering for banquet table coverage',
        'Recycled wood and eco-sustainable wayfinding totems',
        'Multi-camera 4K broadcast feed with zero latency'
      ],
      gallery: [
        'images/webp/program-02/bsrm-esg-stage-led.webp',
        'images/webp/program-02/bsrm-esg-banquet-hall.webp',
        'images/webp/program-02/bsrm-esg-wayfinding-standee.webp'
      ]
    },
    'bizstar-v': {
      title: 'BIZSTAR Season V Grand Finale — National Case Competition',
      client: 'Accounting Communication Club (ACC), University of Chittagong',
      category: 'Academic & Business Competitions',
      date: 'September 2026',
      venue: 'University of Chittagong Auditorium',
      capacity: '1,200+ Students, Faculty & Corporate Judges',
      heroImage: 'images/webp/program-03/bizstar-grand-finale-stage.webp',
      overview: 'Bangladesh\'s premier national business case competition grand finale. Fine Tuning orchestrated stage visual design, synchronized countdown timers, sponsor standee avenues, and award ceremonies.',
      challenge: 'Managing high-tempo multi-team presentation transitions with live digital scoring, podium acoustics, and lighting shifts for judges.',
      techSpecs: [
        'Multi-screen projection and LED display synchronization',
        'Direct digital audio mixing with redundant presenter lavaliers',
        'Outdoor sponsor avenue with customized vertical brand totems',
        'Live stream broadcast to 20,000+ virtual viewers'
      ],
      gallery: [
        'images/webp/program-03/bizstar-grand-finale-stage.webp',
        'images/webp/program-03/bizstar-competition-hall.webp',
        'images/webp/program-03/bizstar-sponsor-standees.webp',
        'images/webp/program-03/bizstar-audience-judges.webp'
      ]
    },
    'ucb-summit': {
      title: 'UCB Annual Get-Together 2026 — Scenic Destination Retreat',
      client: 'United Commercial Bank PLC (UCB)',
      category: 'Mega Reunions & Destination Retreats',
      date: 'August 2026',
      venue: 'Bargee Lake Valley, Rangamati',
      capacity: '800+ Banking Executives & Regional Teams',
      heroImage: 'images/webp/program-04/ucb-lake-stage-backdrop.webp',
      overview: 'Turnkey outdoor event engineering on the scenic lake banks of Rangamati for United Commercial Bank PLC. Custom lakeside stage backdrop, corporate team-building zones, and banquet hospitality.',
      challenge: 'Staging full sound, lighting, and heavy stage rigging in a remote lakeside environment with off-grid power generation and rain contingency.',
      techSpecs: [
        'Weatherproof aluminum roof stage and stage decking over water bank',
        'Silent diesel synchronized 60 kVA generator fleet',
        'Long-throw line-array audio covering lake picnic zones',
        'Custom corporate team jerseys, wayfinding and security staging'
      ],
      gallery: [
        'images/webp/program-04/ucb-lake-stage-backdrop.webp',
        'images/webp/program-04/ucb-corporate-team-group.webp',
        'images/webp/program-04/ucb-lake-valley-summit.webp',
        'images/webp/program-04/ucb-rangamati-retreat-view.webp'
      ]
    }
  };

  function initWorkDetailRouter() {
    const detailRoot = document.getElementById('work-detail-root');
    if (!detailRoot) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || 'motorfest';
    const proj = verifiedProjects[id] || verifiedProjects['motorfest'];

    const heroImg = document.getElementById('work-hero-bg');
    const titleEl = document.getElementById('work-title');
    const clientEl = document.getElementById('work-client');
    const catEl = document.getElementById('work-category');
    const dateEl = document.getElementById('work-date');
    const venueEl = document.getElementById('work-venue');
    const capacityEl = document.getElementById('work-capacity');
    const overviewEl = document.getElementById('work-overview');
    const challengeEl = document.getElementById('work-challenge');
    const specsEl = document.getElementById('work-specs-list');
    const galleryEl = document.getElementById('work-gallery-container');

    if (heroImg) heroImg.style.backgroundImage = 'url("' + proj.heroImage + '")';
    if (titleEl) titleEl.textContent = proj.title;
    if (clientEl) clientEl.textContent = proj.client;
    if (catEl) catEl.textContent = proj.category;
    if (dateEl) dateEl.textContent = proj.date;
    if (venueEl) venueEl.textContent = proj.venue;
    if (capacityEl) capacityEl.textContent = proj.capacity;
    if (overviewEl) overviewEl.textContent = proj.overview;
    if (challengeEl) challengeEl.textContent = proj.challenge;

    if (specsEl) {
      specsEl.innerHTML = '';
      proj.techSpecs.forEach(function (spec) {
        const li = document.createElement('li');
        li.textContent = spec;
        specsEl.appendChild(li);
      });
    }

    if (galleryEl && proj.gallery) {
      galleryEl.innerHTML = '';
      proj.gallery.forEach(function (imgSrc) {
        const div = document.createElement('div');
        div.className = 'work-gallery-img';
        div.innerHTML = '<img src="' + imgSrc + '" alt="' + proj.title + '" loading="lazy">';
        galleryEl.appendChild(div);
      });
    }
  }

  function initWorksFilter() {
    const buttons = document.querySelectorAll('.works-filter-bar .filter-btn');
    const cards = document.querySelectorAll('.works-masonry-grid .work-card-interactive');
    if (!buttons.length || !cards.length) return;

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');

        cards.forEach(function (card) {
          const cardCat = card.getAttribute('data-category');
          if (filter === 'all' || cardCat === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // --------------------------------------------------------------------------
  // 16. NEWS & DISPATCHES ROUTER
  // --------------------------------------------------------------------------
  function initNewsDetailRouter() {
    const newsRoot = document.getElementById('news-single-root');
    const listRoot = document.getElementById('news-list-root');
    if (!newsRoot || !listRoot) return;

    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug');

    if (slug) {
      listRoot.style.display = 'none';
      newsRoot.style.display = 'block';

      if (slug.includes('motorfest')) {
        document.getElementById('news-article-title').textContent = '8th Motor Fest Chattogram: Engineering Luxury Staging for BYD and Royal Enfield';
        document.getElementById('news-article-date').textContent = 'October 2026 — Production Engineering Dispatch';
        document.getElementById('news-article-img').src = 'images/webp/program-01/motorfest-byd-royalenfield-master.webp';
      } else if (slug.includes('bsrm')) {
        document.getElementById('news-article-title').textContent = 'Staging National Corporate Sustainability: BSRM CORE ESG Summit Breakdown';
        document.getElementById('news-article-date').textContent = 'September 2026 — Technical Case Study';
        document.getElementById('news-article-img').src = 'images/webp/program-02/bsrm-esg-stage-led.webp';
      }
    } else {
      listRoot.style.display = 'block';
      newsRoot.style.display = 'none';
    }
  }

  // Initialize all interactive suites
  initTheme();
  initDensity();
  initHeroSlider();
  initExpertiseExplorer();
  initAchievementsCarousel();
  initWorksFilter();
  initWorkDetailRouter();
  initNewsDetailRouter();
  updateWizardCalculations();

})();


