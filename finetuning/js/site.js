/**
 * Fine Tuning - Single Page Portfolio Interactive Engine (v2.1.0)
 * finetuning.com.bd
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // 1. Header scroll effect
  // ==========================================================================
  const header = document.querySelector('.ft-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  });

  // ==========================================================================
  // 2. Right-Slide Mobile Drawer Navigation
  // ==========================================================================
  const hamburgerBtn = document.getElementById('ft-hamburger-btn');
  const mobileDrawer = document.getElementById('ft-mobile-drawer');
  const drawerBackdrop = document.getElementById('ft-drawer-backdrop');
  const drawerCloseBtn = document.getElementById('ft-drawer-close');

  function openDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('is-open');
    if (drawerBackdrop) drawerBackdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('is-open');
    if (drawerBackdrop) drawerBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
    if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'false');
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  // Close drawer on link click
  if (mobileDrawer) {
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  }

  // ==========================================================================
  // 3. Scroll Reveal Animations (IntersectionObserver)
  // ==========================================================================
  const revealElements = document.querySelectorAll('.ft-reveal');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  // ==========================================================================
  // 4. Numerical Counter Animation
  // ==========================================================================
  const statNumbers = document.querySelectorAll('.ft-stat-num');
  let hasCounted = false;

  function runCounters() {
    statNumbers.forEach(stat => {
      const targetStr = stat.getAttribute('data-count');
      if (!targetStr) return;

      const target = parseInt(targetStr.replace(/[^0-9]/g, ''), 10);
      const suffix = targetStr.replace(/[0-9]/g, '');
      const duration = 1600;
      const startTime = performance.now();

      function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing: easeOutCubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.floor(easeProgress * target);

        // Format numbers with comma if >= 1000
        const formatted = currentVal >= 1000 
          ? currentVal.toLocaleString('en-US') 
          : currentVal.toString();

        stat.textContent = formatted + suffix;

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        } else {
          stat.textContent = (target >= 1000 ? target.toLocaleString('en-US') : target) + suffix;
        }
      }

      requestAnimationFrame(updateNumber);
    });
  }

  const statsRibbon = document.querySelector('.ft-stats-ribbon');
  if (statsRibbon && 'IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasCounted) {
          hasCounted = true;
          runCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    statsObserver.observe(statsRibbon);
  }

  // ==========================================================================
  // 5. Portfolio Filtering
  // ==========================================================================
  const filterBtns = document.querySelectorAll('.ft-filter-btn');
  const programCards = document.querySelectorAll('.ft-program-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const filterVal = btn.getAttribute('data-filter');

      programCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterVal === 'all' || category === filterVal) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; }, 20);
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });

  // ==========================================================================
  // 6. In-Card Multi-Image Carousel with Side Arrows & Indicators
  // ==========================================================================
  // Store all program image collections
  const programGalleries = {
    'prog-01': [
      {
        src: 'images/webp/program-01/motorfest-byd-royalenfield-master.webp',
        caption: '8th Motor Fest: BYD Seal 5 & Sealion 6 Pavilion and Royal Enfield Motorcycle Showcase'
      }
    ],
    'prog-02': [
      {
        src: 'images/webp/program-02/bsrm-esg-stage-led.webp',
        caption: 'BSRM CORE ESG Event: Main Stage with curved panoramic LED backdrop, dais & monitors'
      },
      {
        src: 'images/webp/program-02/bsrm-esg-banquet-hall.webp',
        caption: 'BSRM CORE ESG Event: Executive Banquet Hall & Delegate Seating'
      },
      {
        src: 'images/webp/program-02/bsrm-esg-wayfinding-standee.webp',
        caption: 'BSRM CORE ESG Event: Eco Wayfinding Standee on 1st Floor'
      }
    ],
    'prog-03': [
      {
        src: 'images/webp/program-03/bizstar-sponsor-standees.webp',
        caption: 'BIZSTAR Season V Grand Finale: Outdoor Sponsor Avenue with KDS, DDN, and Seven Rings Cement'
      },
      {
        src: 'images/webp/program-03/bizstar-grand-finale-stage.webp',
        caption: 'BIZSTAR Season V: Grand Finale Stage Lighting and Presentation Screen'
      },
      {
        src: 'images/webp/program-03/bizstar-competition-hall.webp',
        caption: 'BIZSTAR Season V: Competition Hall with Finalist Teams'
      },
      {
        src: 'images/webp/program-03/bizstar-trophy-moment.webp',
        caption: 'BIZSTAR Season V: Championship Trophy & Award Ceremony'
      }
    ],
    'prog-04': [
      {
        src: 'images/webp/program-04/ucb-lake-stage-backdrop.webp',
        caption: 'UCB Annual Get-Together 2026: Scenic Open-Air Stage at Bargee Lake Valley, Rangamati'
      },
      {
        src: 'images/webp/program-04/ucb-corporate-team-group.webp',
        caption: 'UCB Executive Team in Custom Branded Uniforms at Bargee Lake Valley'
      },
      {
        src: 'images/webp/program-04/ucb-rangamati-retreat-view.webp',
        caption: 'Bargee Lake Valley Panoramic Destination View'
      },
      {
        src: 'images/webp/program-04/ucb-lakeside-activities.webp',
        caption: 'UCB Outdoor Team Building & Lakeside Gathering'
      }
    ]
  };

  // Card controller initialization
  programCards.forEach(card => {
    const progId = card.getAttribute('data-prog-id');
    const gallery = programGalleries[progId];
    if (!gallery || gallery.length <= 1) return;

    let currentIndex = 0;
    const mainImg = card.querySelector('.ft-program-img');
    const prevBtn = card.querySelector('.ft-media-nav-prev');
    const nextBtn = card.querySelector('.ft-media-nav-next');
    const dots = card.querySelectorAll('.ft-indicator-dot');
    const thumbs = card.querySelectorAll('.ft-gallery-thumb');

    function updateCardSlide(index) {
      if (index < 0) index = gallery.length - 1;
      if (index >= gallery.length) index = 0;
      currentIndex = index;

      const item = gallery[currentIndex];
      if (mainImg) {
        mainImg.style.opacity = '0.7';
        setTimeout(() => {
          mainImg.src = item.src;
          mainImg.setAttribute('data-lightbox-src', item.src);
          mainImg.setAttribute('data-lightbox-caption', item.caption);
          mainImg.style.opacity = '1';
        }, 120);
      }

      // Update dots
      dots.forEach((dot, idx) => {
        dot.classList.toggle('is-active', idx === currentIndex);
      });

      // Update thumbs
      thumbs.forEach((th, idx) => {
        th.classList.toggle('is-active', idx === currentIndex);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        updateCardSlide(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        updateCardSlide(currentIndex + 1);
      });
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        updateCardSlide(idx);
      });
    });

    thumbs.forEach((thumb, idx) => {
      thumb.addEventListener('click', (e) => {
        e.stopPropagation();
        updateCardSlide(idx);
      });
    });
  });

  // ==========================================================================
  // 7. Lightbox Modal with Full-Screen Navigation
  // ==========================================================================
  const modal = document.getElementById('ft-image-modal');
  const modalImg = document.getElementById('ft-modal-img');
  const modalCaption = document.getElementById('ft-modal-caption');
  const modalClose = document.getElementById('ft-modal-close');
  const modalPrev = document.getElementById('ft-modal-prev');
  const modalNext = document.getElementById('ft-modal-next');

  let activeModalGallery = [];
  let activeModalIndex = 0;

  function updateModalImage(index) {
    if (activeModalGallery.length === 0) return;
    if (index < 0) index = activeModalGallery.length - 1;
    if (index >= activeModalGallery.length) index = 0;
    activeModalIndex = index;

    const item = activeModalGallery[activeModalIndex];
    if (modalImg) modalImg.src = item.src;
    if (modalCaption) modalCaption.textContent = item.caption || '';
  }

  function openLightbox(src, caption, progId) {
    if (!modal || !modalImg || !src || src.trim() === '') return;
    if (progId && programGalleries[progId]) {
      activeModalGallery = programGalleries[progId];
      activeModalIndex = activeModalGallery.findIndex(item => item.src === src);
      if (activeModalIndex === -1) activeModalIndex = 0;
    } else {
      activeModalGallery = [{ src, caption }];
      activeModalIndex = 0;
    }

    // Toggle navigation buttons visibility in modal
    if (modalPrev && modalNext) {
      const showNav = activeModalGallery.length > 1;
      modalPrev.style.display = showNav ? 'flex' : 'none';
      modalNext.style.display = showNav ? 'flex' : 'none';
    }

    updateModalImage(activeModalIndex);
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!modal) return;
    modal.classList.remove('is-open');
    if (modalImg) modalImg.src = '';
    document.body.style.overflow = '';
  }

  // Attach triggers
  document.querySelectorAll('[data-lightbox-src]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const src = el.getAttribute('data-lightbox-src');
      const caption = el.getAttribute('data-lightbox-caption');
      const progCard = el.closest('.ft-program-card');
      const progId = progCard ? progCard.getAttribute('data-prog-id') : null;
      openLightbox(src, caption, progId);
    });
  });

  if (modalPrev) {
    modalPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      updateModalImage(activeModalIndex - 1);
    });
  }

  if (modalNext) {
    modalNext.addEventListener('click', (e) => {
      e.stopPropagation();
      updateModalImage(activeModalIndex + 1);
    });
  }

  if (modalClose) modalClose.addEventListener('click', closeLightbox);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!modal || !modal.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') updateModalImage(activeModalIndex - 1);
    if (e.key === 'ArrowRight') updateModalImage(activeModalIndex + 1);
  });

  // ==========================================================================
  // 8. Active Navigation Link Spy
  // ==========================================================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.ft-nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('is-active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('is-active');
      }
    });
  });

  // ==========================================================================
  // 9. Floating WhatsApp Collision Avoidance
  // Smoothly hides the floating WhatsApp pill when user reaches Contact/Footer
  // to prevent overlapping with on-screen action cards on mobile
  // ==========================================================================
  const floatingWhatsapp = document.querySelector('.ft-floating-whatsapp');
  const contactSection = document.getElementById('contact');
  const footerSection = document.querySelector('.ft-footer');

  if (floatingWhatsapp && 'IntersectionObserver' in window) {
    const hideFloatingObserver = new IntersectionObserver((entries) => {
      let isVisibleOnScreen = false;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisibleOnScreen = true;
        }
      });
      if (isVisibleOnScreen) {
        floatingWhatsapp.classList.add('is-hidden');
      } else {
        floatingWhatsapp.classList.remove('is-hidden');
      }
    }, { threshold: 0.08 });

    if (contactSection) hideFloatingObserver.observe(contactSection);
    if (footerSection) hideFloatingObserver.observe(footerSection);
  }
});
