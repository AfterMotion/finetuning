/**
 * Fine Tuning Design System — Demos Shared Runtime
 * Version: 2.5.0
 * Zero external dependencies — pure vanilla JavaScript.
 */

(function () {
  'use strict';

  // 1. THEME INITIALIZATION & SWITCHER
  const savedTheme = localStorage.getItem('ft_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('ft_theme', newTheme);
    updateThemeButtonUI(newTheme);
    showToast(`Switched to ${newTheme === 'dark' ? 'Midnight Stage Dark' : 'Studio Editorial Light'} Theme`);
  }

  function updateThemeButtonUI(theme) {
    const themeBtn = document.getElementById('demoThemeToggle');
    if (!themeBtn) return;
    if (theme === 'light') {
      themeBtn.innerHTML = '🌙 Dark Mode';
    } else {
      themeBtn.innerHTML = '☀️ Light Mode';
    }
  }

  // 2. DENSITY INITIALIZATION & SWITCHER
  const savedDensity = localStorage.getItem('ft_density') || 'comfortable';
  if (savedDensity === 'compact') {
    document.body.classList.remove('density-comfortable');
    document.body.classList.add('density-compact');
  } else {
    document.body.classList.add('density-comfortable');
    document.body.classList.remove('density-compact');
  }

  function toggleDensity() {
    const isCompact = document.body.classList.contains('density-compact');
    if (isCompact) {
      document.body.classList.remove('density-compact');
      document.body.classList.add('density-comfortable');
      localStorage.setItem('ft_density', 'comfortable');
      updateDensityButtonUI('comfortable');
      showToast('Activated Comfortable Density (Marketing & Portals)');
    } else {
      document.body.classList.remove('density-comfortable');
      document.body.classList.add('density-compact');
      localStorage.setItem('ft_density', 'compact');
      updateDensityButtonUI('compact');
      showToast('Activated Compact Density (Admin Operations Mode)');
    }
  }

  function updateDensityButtonUI(density) {
    const densityBtn = document.getElementById('demoDensityToggle');
    if (!densityBtn) return;
    densityBtn.innerHTML = density === 'compact' ? '📐 Density: Compact' : '📐 Density: Comfortable';
  }

  // 3. TOAST SYSTEM
  function showToast(message, type = 'info', duration = 3500) {
    let container = document.getElementById('ft-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'ft-toast-container';
      container.setAttribute('aria-live', 'polite');
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `ft-toast ${type}`;
    
    let icon = '🔔';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '⚠️';

    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      toast.style.transition = 'all 0.2s ease';
      setTimeout(() => toast.remove(), 250);
    }, duration);
  }

  // 4. MODALS & DRAWERS
  let activeModal = null;
  let previousActiveElement = null;

  function openModal(modalId) {
    const overlay = document.getElementById(modalId);
    if (!overlay) return;
    previousActiveElement = document.activeElement;
    overlay.classList.add('active');
    activeModal = overlay;
    document.body.style.overflow = 'hidden';

    const focusable = overlay.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusable) focusable.focus();
  }

  function closeModal(modalId) {
    const overlay = modalId ? document.getElementById(modalId) : activeModal;
    if (!overlay) return;
    overlay.classList.remove('active');
    activeModal = null;
    document.body.style.overflow = '';
    if (previousActiveElement) {
      previousActiveElement.focus();
      previousActiveElement = null;
    }
  }

  function openDrawer(drawerId) {
    const drawer = document.getElementById(drawerId);
    if (!drawer) return;
    drawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer(drawerId) {
    const drawer = document.getElementById(drawerId);
    if (!drawer) return;
    drawer.classList.remove('active');
    document.body.style.overflow = '';
  }

  // 5. GLOBAL EVENT LISTENERS
  document.addEventListener('DOMContentLoaded', () => {
    updateThemeButtonUI(document.documentElement.getAttribute('data-theme') || 'dark');
    updateDensityButtonUI(document.body.classList.contains('density-compact') ? 'compact' : 'comfortable');

    const themeBtn = document.getElementById('demoThemeToggle');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    const densityBtn = document.getElementById('demoDensityToggle');
    if (densityBtn) densityBtn.addEventListener('click', toggleDensity);

    // Close modals on backdrop click or close button
    document.querySelectorAll('.ft-modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal(overlay.id);
      });
      const closeBtn = overlay.querySelector('.ft-modal-close');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => closeModal(overlay.id));
      }
    });

    // Close drawers on backdrop click
    document.querySelectorAll('.ft-drawer-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeDrawer(overlay.id);
      });
    });

    // Mobile nav toggle
    const mobileBtn = document.getElementById('mobileNavBtn');
    const mobileDrawer = document.getElementById('mobileNavDrawer');
    if (mobileBtn && mobileDrawer) {
      mobileBtn.addEventListener('click', () => {
        mobileDrawer.classList.toggle('active');
      });
    }

    // Keyboard ESC key handler
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (activeModal) closeModal();
        document.querySelectorAll('.ft-drawer-overlay.active').forEach(d => closeDrawer(d.id));
      }
    });
  });

  // Export to window for demo interactivity
  window.ftDemo = {
    toggleTheme,
    toggleDensity,
    showToast,
    openModal,
    closeModal,
    openDrawer,
    closeDrawer
  };
  window.showToast = showToast;
  window.openModal = openModal;
  window.closeModal = closeModal;
  window.openDrawer = openDrawer;
  window.closeDrawer = closeDrawer;

})();
