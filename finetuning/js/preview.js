/**
 * Fine Tuning Design System - Interactive Preview Portal Script
 * finetuning.com.bd
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initColorCopy();
  initTypeTester();
  initModalDemo();
  initToastDemo();
  initButtonDemos();
  initScrollSpy();
});

/* ==========================================================================
   1. Theme Toggle (Dark Obsidian Stage <-> Light Studio Editorial)
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (!themeToggleBtn) return;

  const currentTheme = localStorage.getItem('ft-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', activeTheme);
    localStorage.setItem('ft-theme', activeTheme);
    updateThemeIcon(activeTheme);
    showToast(`Switched to ${activeTheme === 'dark' ? 'Obsidian Stage' : 'Studio Editorial'} theme`, 'info');
  });
}

function updateThemeIcon(theme) {
  const themeLabel = document.getElementById('theme-label');
  if (themeLabel) {
    themeLabel.textContent = theme === 'dark' ? 'Dark Stage' : 'Light Studio';
  }
}

/* ==========================================================================
   2. Click to Copy Color Values & Snippets
   ========================================================================== */
function initColorCopy() {
  const colorCards = document.querySelectorAll('.ft-color-card');
  colorCards.forEach(card => {
    card.addEventListener('click', () => {
      const hex = card.getAttribute('data-hex') || card.querySelector('.ft-hex-val')?.textContent?.trim();
      if (hex) {
        navigator.clipboard.writeText(hex).then(() => {
          showToast(`Copied ${hex} to clipboard!`, 'success');
        }).catch(() => {
          showToast(`Copied ${hex}`, 'success');
        });
      }
    });
  });

  const copyButtons = document.querySelectorAll('.ft-copy-code-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const codeBlock = btn.closest('.ft-code-box').querySelector('pre') || btn.closest('.ft-code-box');
      const text = codeBlock.innerText.replace('Copy Code', '').trim();
      navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = originalText; }, 2000);
        showToast('Code snippet copied to clipboard!', 'success');
      });
    });
  });
}

/* ==========================================================================
   3. Interactive Typography Tester
   ========================================================================== */
function initTypeTester() {
  const output = document.getElementById('type-sample-output');
  const sizeSlider = document.getElementById('type-size-slider');
  const sizeDisplay = document.getElementById('type-size-display');
  const fontSelect = document.getElementById('type-font-select');
  const weightSelect = document.getElementById('type-weight-select');

  if (!output || !sizeSlider) return;

  sizeSlider.addEventListener('input', (e) => {
    const val = e.target.value;
    output.style.fontSize = `${val}px`;
    if (sizeDisplay) sizeDisplay.textContent = `${val}px`;
  });

  if (fontSelect) {
    fontSelect.addEventListener('change', (e) => {
      output.style.fontFamily = e.target.value;
    });
  }

  if (weightSelect) {
    weightSelect.addEventListener('change', (e) => {
      output.style.fontWeight = e.target.value;
    });
  }
}

/* ==========================================================================
   4. Modal Dialog Controller
   ========================================================================== */
function initModalDemo() {
  const openModalBtn = document.getElementById('open-demo-modal-btn');
  const modalBackdrop = document.getElementById('demo-modal-backdrop');
  const closeModalBtns = document.querySelectorAll('[data-close-modal]');

  if (!openModalBtn || !modalBackdrop) return;

  const openModal = () => {
    modalBackdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modalBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  openModalBtn.addEventListener('click', openModal);

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('is-open')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   5. Interactive Toast Notifications
   ========================================================================== */
let toastContainer = null;

function ensureToastContainer() {
  if (!toastContainer) {
    toastContainer = document.querySelector('.ft-toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.className = 'ft-toast-container';
      document.body.appendChild(toastContainer);
    }
  }
  return toastContainer;
}

window.showToast = function(message, type = 'info', duration = 3500) {
  const container = ensureToastContainer();
  const toast = document.createElement('div');
  toast.className = `ft-toast ft-toast-${type}`;

  const iconMap = {
    success: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    warning: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    danger: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
    info: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`
  };

  toast.innerHTML = `
    <span class="ft-toast-icon">${iconMap[type] || iconMap.info}</span>
    <span class="ft-toast-msg">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('is-closing');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, duration);
};

function initToastDemo() {
  document.querySelectorAll('[data-trigger-toast]').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-trigger-toast');
      const messages = {
        success: 'VIP Reservation Confirmed for Global Leadership Gala!',
        warning: 'High Demand: Only 14 executive stage passes remaining.',
        danger: 'Audio-visual frequency overload detected on channel 4.',
        info: 'Stage schedule updated: Keynote address begins at 7:30 PM.'
      };
      showToast(messages[type] || 'Notification triggered', type);
    });
  });
}

/* ==========================================================================
   6. Button Interactive Demos (Loading State)
   ========================================================================== */
function initButtonDemos() {
  const loadingBtn = document.getElementById('demo-loading-btn');
  if (loadingBtn) {
    loadingBtn.addEventListener('click', () => {
      const originalText = loadingBtn.innerHTML;
      loadingBtn.classList.add('is-loading');
      loadingBtn.innerHTML = `
        <svg style="animation: spin 1s linear infinite; margin-right: 8px;" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
          <path d="M12 2a10 10 0 0 1 10 10"/>
        </svg>
        Calibrating Stage...
      `;
      loadingBtn.disabled = true;

      setTimeout(() => {
        loadingBtn.classList.remove('is-loading');
        loadingBtn.innerHTML = originalText;
        loadingBtn.disabled = false;
        showToast('Stage parameters fine-tuned successfully!', 'success');
      }, 2500);
    });
  }

  // Demo toggle switch
  const switches = document.querySelectorAll('.ft-switch');
  switches.forEach(sw => {
    sw.addEventListener('click', () => {
      sw.classList.toggle('is-active');
    });
  });
}

/* ==========================================================================
   7. Sidebar ScrollSpy
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('.ft-section');
  const navLinks = document.querySelectorAll('.ft-nav-link');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      if (scrollPos >= sec.offsetTop) {
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
}

