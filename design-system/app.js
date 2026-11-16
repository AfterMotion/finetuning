/**
 * Fine Tuning Design System — Master Interactive Showcase Logic
 * Version: 2.5.0
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
        showToast('Activated Compact Density (Admin Operations Mode)');
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

      categoryGroups.forEach(group => {
        const visibleLinks = group.querySelectorAll('.sidebar-nav-link[style="display: flex;"]');
        const allLinks = group.querySelectorAll('.sidebar-nav-link');
        const hasVisible = visibleLinks.length > 0 || (query === '' && allLinks.length > 0);
        group.style.display = hasVisible ? 'flex' : 'none';
      });
    });
  });

  // 4. COMMAND PALETTE OVERLAY (⌘K / Ctrl+K)
  const cmdPaletteBackdrop = document.getElementById('cmdPaletteBackdrop');
  const cmdPaletteInput = document.getElementById('cmdPaletteInput');
  const cmdPaletteResults = document.getElementById('cmdPaletteResults');

  function openCommandPalette() {
    if (cmdPaletteBackdrop) {
      cmdPaletteBackdrop.classList.add('show');
      cmdPaletteInput?.focus();
    }
  }

  function closeCommandPalette() {
    if (cmdPaletteBackdrop) {
      cmdPaletteBackdrop.classList.remove('show');
    }
  }

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openCommandPalette();
    }
    if (e.key === 'Escape') {
      closeCommandPalette();
      closeModal();
      closeDrawer();
      const popovers = document.querySelectorAll('.ft-popover.show');
      popovers.forEach(p => p.classList.remove('show'));
    }
  });

  if (cmdPaletteBackdrop) {
    cmdPaletteBackdrop.addEventListener('click', (e) => {
      if (e.target === cmdPaletteBackdrop) closeCommandPalette();
    });
  }

  if (cmdPaletteInput && cmdPaletteResults) {
    cmdPaletteInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const items = cmdPaletteResults.querySelectorAll('.cmd-item');
      items.forEach(it => {
        it.style.display = it.textContent.toLowerCase().includes(q) ? 'flex' : 'none';
      });
    });
  }

  // 5. SPECIMEN TABS SWITCHING
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

  // 6. TOAST NOTIFICATION ENGINE
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

  // 7. BUTTON LOADING TOGGLE
  const btnToggleLoading = document.getElementById('btnToggleLoading');
  if (btnToggleLoading) {
    btnToggleLoading.addEventListener('click', () => {
      const demoBtns = document.querySelectorAll('.demo-loading-btn');
      demoBtns.forEach(btn => btn.classList.toggle('is-loading'));
      const isLoading = demoBtns[0]?.classList.contains('is-loading');
      btnToggleLoading.textContent = isLoading ? '⏹️ Stop Loading State' : '⏳ Toggle Loading State';
      showToast(isLoading ? 'Buttons switched to Loading state' : 'Buttons restored to Idle state');
    });
  }

  // 8. OTP AUTO-ADVANCE & BACKSPACE
  const otpBoxes = document.querySelectorAll('.ft-otp-box');
  otpBoxes.forEach((box, index) => {
    box.addEventListener('input', (e) => {
      if (e.target.value.length === 1 && index < otpBoxes.length - 1) {
        otpBoxes[index + 1].focus();
      }
    });
    box.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !e.target.value && index > 0) {
        otpBoxes[index - 1].focus();
      }
    });
  });

  // 9. STAR RATING INTERACTION
  const stars = document.querySelectorAll('.ft-star-rating .star');
  stars.forEach(star => {
    star.addEventListener('click', () => {
      const rating = parseInt(star.dataset.val, 10);
      stars.forEach(s => {
        const val = parseInt(s.dataset.val, 10);
        s.classList.toggle('filled', val <= rating);
      });
      showToast(`Event Satisfaction Rating: ${rating} of 5 Stars`);
    });
  });

  // 10. ACCORDION DISCLOSURE
  document.querySelectorAll('.ft-accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.ft-accordion-item');
      item?.classList.toggle('is-expanded');
    });
  });

  // 11. POPOVER TOGGLE
  window.togglePopover = function(id) {
    const pop = document.getElementById(id);
    if (pop) pop.classList.toggle('show');
  };

  // 12. ADVANCED DATA TABLE (Sort, Bulk Select, CSV Export, Search)
  const tableSelectAll = document.getElementById('tableSelectAll');
  const tableCheckboxes = document.querySelectorAll('.table-row-checkbox');
  const dataTable = document.getElementById('demoDataTable');
  const bulkActionBar = document.getElementById('tableBulkBar');
  const selectedCountText = document.getElementById('selectedCountText');

  function updateBulkBar() {
    const checkedBoxes = Array.from(tableCheckboxes).filter(cb => cb.checked);
    const count = checkedBoxes.length;
    if (bulkActionBar) {
      bulkActionBar.classList.toggle('show', count > 0);
      if (selectedCountText) selectedCountText.textContent = `${count} channels selected`;
    }
  }

  if (tableSelectAll) {
    tableSelectAll.addEventListener('change', (e) => {
      const checked = e.target.checked;
      tableCheckboxes.forEach(cb => {
        cb.checked = checked;
        cb.closest('tr')?.classList.toggle('is-selected', checked);
      });
      updateBulkBar();
    });

    tableCheckboxes.forEach(cb => {
      cb.addEventListener('change', () => {
        cb.closest('tr')?.classList.toggle('is-selected', cb.checked);
        const allChecked = Array.from(tableCheckboxes).every(c => c.checked);
        tableSelectAll.checked = allChecked;
        updateBulkBar();
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

  // CSV Export Engine
  window.exportTableToCSV = function() {
    const rows = Array.from(dataTable.querySelectorAll('tr'));
    const csvContent = rows.map(r => {
      const cells = Array.from(r.querySelectorAll('th, td')).slice(1, -1);
      return cells.map(c => `"${c.textContent.trim().replace(/"/g, '""')}"`).join(',');
    }).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `finetuning_stage_telemetry_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Telemetry CSV report downloaded successfully');
  };

  // 13. DECIBEL SPL SLIDER
  const dbaSlider = document.getElementById('dbaSlider');
  const dbaValueDisplay = document.getElementById('dbaValueDisplay');
  const dbaGaugeFill = document.getElementById('dbaGaugeFill');
  const dbaStatusBadge = document.getElementById('dbaStatusBadge');

  if (dbaSlider && dbaValueDisplay && dbaGaugeFill && dbaStatusBadge) {
    dbaSlider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      dbaValueDisplay.textContent = val.toFixed(1);
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

  // 14. MODAL & DRAWER SYSTEM
  const demoModal = document.getElementById('demoModal');
  const btnCloseModal = document.getElementById('btnCloseModal');
  const btnCancelModal = document.getElementById('btnCancelModal');
  const inspectorDrawer = document.getElementById('inspectorDrawer');

  window.openModal = function() {
    if (demoModal) {
      demoModal.classList.add('show');
      document.body.style.overflow = 'hidden';
      btnCloseModal?.focus();
    }
  };

  window.closeModal = function() {
    if (demoModal) {
      demoModal.classList.remove('show');
      document.body.style.overflow = '';
    }
  };

  window.openDrawer = function() {
    if (inspectorDrawer) inspectorDrawer.classList.add('show');
  };

  window.closeDrawer = function() {
    if (inspectorDrawer) inspectorDrawer.classList.remove('show');
  };

  if (btnCloseModal) btnCloseModal.addEventListener('click', closeModal);
  if (btnCancelModal) btnCancelModal.addEventListener('click', closeModal);

  if (demoModal) {
    demoModal.addEventListener('click', (e) => {
      if (e.target === demoModal) closeModal();
    });
  }

  // 15. MOBILE MENU TOGGLE
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const dsSidebar = document.getElementById('dsSidebar');
  if (mobileMenuToggle && dsSidebar) {
    mobileMenuToggle.addEventListener('click', () => {
      dsSidebar.classList.toggle('is-open');
    });
  }

  // 16. STEPPER ADVANCE
  window.nextWizardStep = function(stepNum) {
    document.querySelectorAll('.ft-wizard-step').forEach((s, idx) => {
      s.classList.toggle('completed', idx < stepNum - 1);
      s.classList.toggle('active', idx === stepNum - 1);
    });
    showToast(`Advanced to Step ${stepNum}: Production Calibration`);
  };

  // Scroll spy
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
