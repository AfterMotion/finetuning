/**
 * Fine Tuning Design System — Interactive Showcase JavaScript
 * Version: 2.0.0
 * Zero external dependencies — pure vanilla JS.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. THEME SWITCHER
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const themeLabel = document.getElementById('themeLabel');
  const htmlRoot = document.documentElement;

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlRoot.setAttribute('data-theme', newTheme);

      if (newTheme === 'light') {
        themeIcon.textContent = '🌙';
        themeLabel.textContent = 'Dark Mode';
        showToast('Switched to Studio Editorial Light Theme');
      } else {
        themeIcon.textContent = '☀️';
        themeLabel.textContent = 'Light Mode';
        showToast('Switched to Midnight Stage Dark Theme');
      }
    });
  }

  // 2. DENSITY SWITCHER
  const densityToggleBtn = document.getElementById('densityToggleBtn');
  const densityLabel = document.getElementById('densityLabel');
  const bodyRoot = document.body;

  if (densityToggleBtn) {
    densityToggleBtn.addEventListener('click', () => {
      const isComfortable = bodyRoot.classList.contains('density-comfortable') || !bodyRoot.classList.contains('density-compact');
      if (isComfortable) {
        bodyRoot.classList.remove('density-comfortable');
        bodyRoot.classList.add('density-compact');
        densityLabel.textContent = 'Density: Compact';
        showToast('Activated Compact Density (Admin Console Mode)');
      } else {
        bodyRoot.classList.remove('density-compact');
        bodyRoot.classList.add('density-comfortable');
        densityLabel.textContent = 'Density: Comfortable';
        showToast('Activated Comfortable Density (Marketing Mode)');
      }
    });
  }

  // 3. SEARCH NAVIGATION FILTERING
  const searchInputs = [
    document.getElementById('headerSearchInput'),
    document.getElementById('sidebarSearchInput')
  ].filter(Boolean);

  const navLinks = document.querySelectorAll('.sidebar-nav-link');
  const categoryGroups = document.querySelectorAll('.sidebar-category-group');

  searchInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      
      navLinks.forEach(link => {
        const text = link.textContent.toLowerCase();
        const matches = text.includes(query);
        link.style.display = matches ? 'flex' : 'none';
      });

      // Hide category headers if all children are hidden
      categoryGroups.forEach(group => {
        const visibleLinks = group.querySelectorAll('.sidebar-nav-link[style="display: flex;"]');
        const allLinks = group.querySelectorAll('.sidebar-nav-link');
        const hasVisible = visibleLinks.length > 0 || (query === '' && allLinks.length > 0);
        group.style.display = hasVisible ? 'flex' : 'none';
      });
    });
  });

  // Keyboard shortcut Ctrl+K / Cmd+K to focus search
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      const target = document.getElementById('headerSearchInput') || document.getElementById('sidebarSearchInput');
      if (target) {
        target.focus();
        target.select();
      }
    }
  });

  // 4. SPECIMEN TABS SWITCHING (Preview / Code / Specs)
  document.querySelectorAll('.specimen-card').forEach(card => {
    const tabBtns = card.querySelectorAll('.specimen-tab-btn');
    const previewPane = card.querySelector('.specimen-preview-canvas');
    const codePane = card.querySelector('.specimen-code-pane');
    const specsPane = card.querySelector('.specimen-specs-pane');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const tab = btn.dataset.tab;

        if (previewPane) previewPane.style.display = tab === 'preview' ? 'flex' : 'none';
        if (codePane) codePane.classList.toggle('active', tab === 'code');
        if (specsPane) specsPane.classList.toggle('active', tab === 'specs');
      });
    });
  });

  // 5. TOAST NOTIFICATION UTILITY
  const toastStack = document.getElementById('toastStack') || createToastStack();

  function createToastStack() {
    const stack = document.createElement('div');
    stack.id = 'toastStack';
    stack.className = 'ds-toast-stack';
    document.body.appendChild(stack);
    return stack;
  }

  window.showToast = function(message) {
    const toast = document.createElement('div');
    toast.className = 'ds-toast-card';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.innerHTML = `<span style="color: var(--color-brand-primary)">✓</span> <span>${message}</span>`;
    toastStack.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  };

  window.copyToClipboard = function(text, label = 'Copied') {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`${label}: ${text}`);
    }).catch(() => {
      showToast(`${label}: ${text}`);
    });
  };

  // 6. INTERACTIVE SPECIMEN: TOGGLE LOADING STATE
  const btnToggleLoading = document.getElementById('btnToggleLoading');
  if (btnToggleLoading) {
    btnToggleLoading.addEventListener('click', () => {
      const demoBtns = document.querySelectorAll('.demo-loading-btn');
      demoBtns.forEach(btn => {
        btn.classList.toggle('is-loading');
      });
      const isLoading = demoBtns[0]?.classList.contains('is-loading');
      btnToggleLoading.textContent = isLoading ? '⏹️ Stop Loading State' : '⏳ Toggle Loading State';
      showToast(isLoading ? 'Buttons switched to Loading state' : 'Buttons restored to Idle state');
    });
  }

  // 7. INTERACTIVE SPECIMEN: LIVE FORM VALIDATION
  const demoEmailInput = document.getElementById('demoEmailInput');
  const demoEmailError = document.getElementById('demoEmailError');

  if (demoEmailInput && demoEmailError) {
    demoEmailInput.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (val === '') {
        demoEmailInput.classList.remove('is-error', 'is-success');
        demoEmailError.style.display = 'none';
      } else if (emailRegex.test(val)) {
        demoEmailInput.classList.remove('is-error');
        demoEmailInput.classList.add('is-success');
        demoEmailError.style.display = 'none';
      } else {
        demoEmailInput.classList.remove('is-success');
        demoEmailInput.classList.add('is-error');
        demoEmailError.style.display = 'flex';
      }
    });
  }

  // 8. INTERACTIVE SPECIMEN: DATA TABLE SORTING & CHECKBOX SELECTION
  const tableSelectAll = document.getElementById('tableSelectAll');
  const tableCheckboxes = document.querySelectorAll('.table-row-checkbox');
  const dataTable = document.getElementById('demoDataTable');

  if (tableSelectAll) {
    tableSelectAll.addEventListener('change', (e) => {
      const checked = e.target.checked;
      tableCheckboxes.forEach(cb => {
        cb.checked = checked;
        cb.closest('tr')?.classList.toggle('is-selected', checked);
      });
      showToast(checked ? 'Selected all 4 operational rigs' : 'Deselected all rigs');
    });

    tableCheckboxes.forEach(cb => {
      cb.addEventListener('change', () => {
        cb.closest('tr')?.classList.toggle('is-selected', cb.checked);
        const allChecked = Array.from(tableCheckboxes).every(c => c.checked);
        tableSelectAll.checked = allChecked;
      });
    });
  }

  // Sortable column headers
  if (dataTable) {
    const headers = dataTable.querySelectorAll('th[data-sort]');
    headers.forEach(th => {
      th.addEventListener('click', () => {
        const colIndex = parseInt(th.dataset.colIndex, 10);
        const isAsc = th.classList.contains('sort-asc');
        headers.forEach(h => h.classList.remove('sort-asc', 'sort-desc'));
        th.classList.toggle('sort-asc', !isAsc);
        th.classList.toggle('sort-desc', isAsc);

        const tbody = dataTable.querySelector('tbody');
        const rows = Array.from(tbody.querySelectorAll('tr'));
        rows.sort((a, b) => {
          const valA = a.children[colIndex].textContent.trim();
          const valB = b.children[colIndex].textContent.trim();
          return isAsc ? valB.localeCompare(valA) : valA.localeCompare(valB);
        });
        rows.forEach(r => tbody.appendChild(r));
        showToast(`Sorted table by ${th.textContent.trim()}`);
      });
    });
  }

  // 9. INTERACTIVE SPECIMEN: TELEMETRY DECIBEL SLIDER
  const dbaSlider = document.getElementById('dbaSlider');
  const dbaValueDisplay = document.getElementById('dbaValueDisplay');
  const dbaGaugeFill = document.getElementById('dbaGaugeFill');
  const dbaStatusBadge = document.getElementById('dbaStatusBadge');

  if (dbaSlider && dbaValueDisplay && dbaGaugeFill && dbaStatusBadge) {
    dbaSlider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      dbaValueDisplay.textContent = val.toFixed(1);
      
      // Calculate fill percent (0 to 120 dBA mapped to 0-100%)
      const pct = Math.min(100, Math.max(0, (val / 120) * 100));
      dbaGaugeFill.style.width = `${pct}%`;

      if (val < 85) {
        dbaGaugeFill.style.backgroundColor = 'var(--color-status-success-base)';
        dbaStatusBadge.className = 'ft-badge ft-badge-success';
        dbaStatusBadge.innerHTML = '<span class="ft-beacon-dot"></span> Acoustic Safe';
      } else if (val <= 95) {
        dbaGaugeFill.style.backgroundColor = 'var(--color-brand-primary)';
        dbaStatusBadge.className = 'ft-badge ft-badge-warning';
        dbaStatusBadge.innerHTML = '<span class="ft-beacon-dot pulse"></span> Elevated Concert Level';
      } else {
        dbaGaugeFill.style.backgroundColor = 'var(--color-status-danger-base)';
        dbaStatusBadge.className = 'ft-badge ft-badge-danger';
        dbaStatusBadge.innerHTML = '<span class="ft-beacon-dot pulse"></span> PEAK LIMIT WARNING';
      }
    });
  }

  // 10. MODAL DIALOG INTERACTION
  const btnOpenModal = document.getElementById('btnOpenModal');
  const demoModal = document.getElementById('demoModal');
  const btnCloseModal = document.getElementById('btnCloseModal');
  const btnCancelModal = document.getElementById('btnCancelModal');

  function openModal() {
    if (demoModal) {
      demoModal.classList.add('show');
      document.body.style.overflow = 'hidden';
      btnCloseModal?.focus();
    }
  }

  function closeModal() {
    if (demoModal) {
      demoModal.classList.remove('show');
      document.body.style.overflow = '';
    }
  }

  if (btnOpenModal) btnOpenModal.addEventListener('click', openModal);
  if (btnCloseModal) btnCloseModal.addEventListener('click', closeModal);
  if (btnCancelModal) btnCancelModal.addEventListener('click', closeModal);

  // Close modal when clicking backdrop
  if (demoModal) {
    demoModal.addEventListener('click', (e) => {
      if (e.target === demoModal) closeModal();
    });
  }

  // Escape key closes modal & drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      const sidebar = document.getElementById('dsSidebar');
      if (sidebar && sidebar.classList.contains('is-open')) {
        sidebar.classList.remove('is-open');
      }
    }
  });

  // 11. MOBILE SIDEBAR TOGGLE
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const dsSidebar = document.getElementById('dsSidebar');

  if (mobileMenuToggle && dsSidebar) {
    mobileMenuToggle.addEventListener('click', () => {
      dsSidebar.classList.toggle('is-open');
    });
  }

  // Active scroll spy for sidebar links
  const sections = document.querySelectorAll('.ds-section');
  window.addEventListener('scroll', () => {
    let currentId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) {
        currentId = sec.id;
      }
    });
    if (currentId) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
      });
    }
  }, { passive: true });
});

