# Fine Tuning — Master Web Patterns & UI Architecture Guide

> **Authoritative Production Web Patterns, Layout Systems & Implementation Contracts**  
> *Target Environments: Agency Marketing Site, Event Portals, Production Consoles (`finetuning.com.bd`)*  
> *Version: 2.5.0 | Date: November 2026 | Status: Authoritative Standard*  
> *Dependencies: `tokens/tokens.css`, `tokens/themes.css`, `tokens/tailwind.config.cjs`, `docs/BRAND_GUIDELINES.md`*

---

## 1. Architectural Overview & Design Philosophy

The Fine Tuning web architecture bridges **high-concept experiential advertising storytelling** with **rigorous stage engineering logistics**. Every web pattern must reflect:

1. **Theatrical Elegance & Stage Atmosphere**: Ambient grid overlays, dual radial spotlight flares (Solar Amber `#F09320` and Nordic Teal `#4694B1`), and deep Midnight Obsidian `#070D18` stage backdrops.
2. **Context-Sensitive Density**: Fluidly adapts between **Comfortable Density** (for editorial storytelling, case studies, and public marketing) and **Compact Density** (for operational telemetry consoles, specialist tables, and hardware meters).
3. **Strict Accessible Contrast**: Color pairings are mathematically verified. Primary Solar Amber buttons **mandate Midnight Obsidian text** (8.24:1 AAA contrast), and light-mode body text uses text-safe teal `#2B5E70` (7.15:1 AAA).
4. **Zero-Dependency Vanilla Runtime**: All interactions (modals, drawers, toasts, CSV export, OTP auto-advance, soundcheck telemetry) run client-side in pure HTML5, CSS custom properties, and modern ES6 JavaScript.

---

## 2. Navigation & App Shell Patterns

### 2.1 Pattern: Sticky Glass Header with Utility Bar
- **Use Case**: Primary global navigation across public marketing pages, archives, and booking wizards.
- **Spec**:
  - Utility Bar: Height 36px, background `#070D18` (Dark) / `#F1F5F9` (Light), border-bottom 1px solid `--color-border-subtle`. Shows live production status beacon, phone (`+880 1671-863685`), and email.
  - Header: Sticky positioned (`top: 0; z-index: 1100`), height 72px, background `rgba(7, 13, 24, 0.85)` (Dark) / `rgba(255, 255, 255, 0.88)` (Light), with `backdrop-filter: blur(16px)`.
  - Brand Mark: SVG vector emblem mark (`viewBox="0 0 2400 1758"`) + `FineTuning` wordmark + descriptor.
  - Action Cluster: Theme toggle button, density toggle button, and primary CTA (`Book Briefing`).
- **Responsive Collapse**: Below 768px, horizontal links hide and an accessible hamburger button (`#mobileNavBtn`) triggers the right-slide drawer.

```html
<!-- HTML Structure Example -->
<header class="ft-site-header">
  <div class="ft-header-container">
    <a href="/" class="ft-brandmark">
      <svg class="ft-brandmark-icon" viewBox="0 0 2400 1758">
        <path fill="#4694B1" d="..."/>
        <path fill="#F09320" d="..."/>
      </svg>
      <div class="ft-brandmark-text">
        <div class="ft-brandmark-name">Fine<span>Tuning</span></div>
        <div class="ft-brandmark-tagline">Advertising Agency</div>
      </div>
    </a>
    <nav class="ft-nav-links">
      <a href="/cases" class="ft-nav-link">Case Studies</a>
      <a href="/request-rig" class="ft-nav-link">Request Rig</a>
      <a href="/console" class="ft-nav-link">Console</a>
    </nav>
    <div class="ft-header-actions">
      <button class="ft-btn ft-btn-primary ft-btn-sm" onclick="openModal('briefingModal')">Book Briefing</button>
      <button id="mobileNavBtn" class="mobile-menu-btn" aria-label="Open mobile menu">☰</button>
    </div>
  </div>
</header>
```

### 2.2 Pattern: Lateral Right-Slide Mobile Drawer
- **Spec**: Anchored at `top: 0; right: 0; bottom: 0; width: 320px; z-index: 1200`.
- **Motion**: `transform: translateX(100%) -> translateX(0)` using `cubic-bezier(0.16, 1, 0.3, 1)` over 250ms.
- **Accessibility**: Body scrolling is locked (`body { overflow: hidden; }`). Pressing `Escape` or tapping the backdrop closes the drawer and returns focus to the hamburger button.

### 2.3 Pattern: Collapsible Operations Sidebar
- **Spec**: Used in admin dashboards and operational telemetry consoles.
- **Expanded Mode**: Width 240px, full labels, active indicator with 2px Solar Amber border and subtle background tint (`rgba(240, 147, 32, 0.12)`).
- **Collapsed Mode**: Width 64px, icon-only display with native tooltips.

---

## 3. Hero & Theatrical Stage Patterns

### 3.1 Pattern: Dual Radial Stage Flare & Telemetry Card
- **Atmosphere**: Combines a subtle 48px repeating grid with dual radial gradients:
  ```css
  /* Dual Spotlight Flare */
  .stage-glow-ambient {
    background: radial-gradient(circle at 15% 15%, rgba(240, 147, 32, 0.14) 0%, transparent 45%),
                radial-gradient(circle at 85% 85%, rgba(70, 148, 177, 0.16) 0%, transparent 50%);
  }
  ```
- **Live Telemetry Hologram Card**:
  - Encased in a frosted glass card with 1px border gradient mask.
  - Contains animated CSS equalizer bars representing live ballroom acoustic calibration.
  - Prominent readout: `84.6 dBA (ACOUSTIC SAFE)`.
  - Staging telemetry: `Truss Load: 3.4 Tons • Video Wall: 60 FPS Fixed`.
- **Hero CTA Cluster**:
  - Primary Action: `[Launch Production Brief →]` (Solar Amber, Midnight Obsidian text).
  - Secondary Action: `[Explore 180+ Case Studies]` (Outline button with text-safe teal border).

---

## 4. Proof, Authority & Metrics Patterns

### 4.1 Pattern: GPU-Accelerated Infinite Partner Marquee
- **Spec**: Pure CSS keyframe animation (`marquee-roll 32s linear infinite`) using dual identical `.marquee-track` containers.
- **Interactive Rule**: Hovering over the marquee pauses the roll (`animation-play-state: paused`).
- **Edge Masks**: Left and right 120px transparent-to-canvas gradient masks prevent abrupt visual clipping.
- **Content Integrity**: Real enterprise partners only (BSRM Group, UCB Imperial Bank, BYD Auto, Royal Enfield Bangladesh, CPDL, Akij Group). Zero fabricated logos.

### 4.2 Pattern: Metric KPI Ribbon
- **Spec**: 4-column responsive grid on desktop scaling down to 2 columns on tablet and 1 column on mobile.
- **Card Anatomy**:
  - Uppercase title label (`0.75rem`, letter-spacing `0.08em`, `--color-text-secondary`).
  - Large tabular numeral (`1.875rem`, `font-family: var(--font-mono)`, font-weight 700).
  - Positive trend delta in Emerald Green (`↑ 99.98% Stage Uptime`).

---

## 5. Form, User Input & Wizard Patterns

### 5.1 Pattern: 3-Step Production Staging Wizard (`/request-rig`)
- **Structure**:
  - Progress Stepper: Visual horizontal bar with 3 circular step nodes connected by an animated fill bar (0% -> 50% -> 100%).
  - Step 1: Event Identity & Organization (Title, Client, Contact Lead, Phone, Email, Event Type).
  - Step 2: Spatial Venue & Hardware Rig (Venue, City, Expected Pax, Gear selection cards: P2.6 LED Wall, JBL Line Arrays, Box Truss, 360 Booth).
  - Step 3: Review Staging Manifest (Calculated generator kVA, calculated truss weight, terms acceptance).
- **Validation Contract**: Clicking "Next" validates all required fields on the current step before advancing.
- **Receipt Dialog**: Upon completion, a confirmation modal issues an authentic tracking code (`FT-2026-RIG-9481`) with instant summary download button.

### 5.2 Pattern: 6-Box OTP Verification with Auto-Advance
- **Spec**: 6 individual `<input type="text" maxlength="1">` fields styled with `JetBrains Mono` at `1.5rem` font size.
- **Behavior**:
  - Typing a digit inputs value and automatically focuses the next field (`input.oninput`).
  - Pressing `Backspace` on an empty field shifts focus to the previous field (`input.onkeydown`).
  - Supports pasting full 6-digit codes directly.

### 5.3 Pattern: Password Input with Eye Toggle & Strength Meter
- **Spec**: Relative container with trailing eye button toggling `type="password"` and `type="text"`.
- **Strength Meter**: 3 horizontal bars that dynamically shift color:
  - < 6 chars: 1 red bar (Weak).
  - 6–10 chars: 2 amber bars (Medium).
  - \>= 10 chars: 3 emerald green bars (Strong).

---

## 6. Data Visualization & Telemetry Patterns

### 6.1 Pattern: Advanced Sortable Table with Bulk Actions Bar
- **Spec**:
  - Headers: Sticky at top of table container, sortable with `↕` indicator and DOM row reordering on click.
  - Checkboxes: Row checkbox selection + master "Select All" checkbox in header.
  - Floating Bulk Actions Bar: Appears anchored at bottom center (`transform: translateY(0)`) when 1 or more rows are selected, showing count and action triggers (`[Assign]`, `[Export]`, `[Cutoff]`).
  - Client-Side CSV Export: Generates formatted CSV string via `Blob` and triggers automatic browser download of `crew-roster-export.csv`.

### 6.2 Pattern: Real-Time Audio SPL Decibel (dBA) Soundcheck Meter
- **Spec**: Interactive range slider (50 to 115 dBA) controlling dynamic visual thresholds:
  - $< 85\text{ dBA}$: Emerald Green (`#10B981`) — *Acoustic Safe Zone*
  - $86 - 95\text{ dBA}$: Solar Amber (`#F09320`) — *Elevated Concert Peak*
  - $> 95\text{ dBA}$: Crimson Red (`#EF4444`) — *LIMIT EXCEEDED with flashing pulse beacon*
- **Action Triggers**: `[Reset Calibration (82 dBA)]` and `[Emergency Stage Mute]`.

### 6.3 Pattern: Dual-Curve SVG Telemetry Chart
- **Spec**: Responsive vector SVG (`viewBox="0 0 800 180"`) with horizontal reference grid lines.
- **Curves**:
  - Solar Amber primary solid curve (`stroke-width: 3`): Acoustic frequency output.
  - Nordic Teal secondary dashed curve (`stroke-width: 2.5; stroke-dasharray: 4 4`): Audience arrival headcount.
  - Interactive Date Filters: `[Today]`, `[7 Days]`, `[30 Days]`.

---

## 7. Overlays, Modals & Disclosure Patterns

### 7.1 Pattern: Accessible Modal Dialog
- **Z-Index**: `--z-modal` (`1300`) over backdrop `rgba(0, 0, 0, 0.7)` with `backdrop-filter: blur(6px)`.
- **Key Interactions**:
  - Pressing `Escape` closes the modal.
  - Clicking outside the modal on the backdrop dismisses it.
  - Opening locks body scroll (`document.body.style.overflow = 'hidden'`).
  - Focus is trapped inside the modal and restored to trigger on exit.

### 7.2 Pattern: Slide-Over Inspector Drawer
- **Spec**: Anchored at `top: 0; right: 0; bottom: 0; width: 460px; z-index: 1200`.
- **Use Case**: Inspecting specialist credentials, radio frequencies, and detailed stage CAD schematics without leaving the active data table.

### 7.3 Pattern: Toast Notification System (Snackbar)
- **Container**: Fixed at `bottom: 24px; right: 24px; z-index: 1500; display: flex; flex-direction: column; gap: 10px;`.
- **Toast Item**: Max width 380px, left border accent (Amber for Info, Emerald for Success, Crimson for Error), auto-dismissing after 3500ms with smooth slide-in and fade-out animation. Emits `role="status"` and `aria-live="polite"`.

---

## 8. Single-Screen System Page Pattern (403, 404, 500, 503)

- **Strict Constraint**: Must fit entirely within a single viewport on both desktop and mobile with **zero page scroll**:
  ```css
  html, body {
    height: 100%;
    overflow: hidden;
  }
  .system-viewport {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ```
- **Error States**:
  - `404 Out of Range`: Large amber numeral + "Frequency Out of Range" + Return to Main Stage CTA.
  - `403 Forbidden`: Crimson numeral + "Stage Clearance Required" + Request Console Clearance CTA.
  - `500 Signal Disruption`: Crimson numeral + Dante packet loss trace box + "Re-establish Packet Link" retry button.
  - `503 Maintenance / Soundcheck`: Teal numeral + animated progress bar + live countdown clock (`00:14:32`) + WhatsApp Live link.
  - `Empty State Rig`: Theatrical console icon + "No Active Stage Telemetry" + "Initialize New Rig" CTA.

---

## 9. Token Usage Examples: CSS Variables vs. Tailwind

### 9.1 Button Tokens
```css
/* Pure CSS Variable Syntax */
.ft-btn-primary {
  background-color: var(--color-action-primary); /* #F09320 */
  color: var(--color-slate-950);                 /* #070D18 (MANDATORY AAA) */
  font-family: var(--font-primary);              /* Outfit */
  font-weight: var(--font-weight-bold);          /* 700 */
  border-radius: var(--radius-md);               /* 8px */
  padding: 10px 18px;
}

/* Tailwind v3/v4 Equivalent (via tokens/tailwind.config.cjs) */
<button class="bg-brand-amber text-slate-950 font-sans font-bold rounded-md px-4 py-2 hover:bg-brand-amber-600 focus:outline-none focus:ring-2 focus:ring-brand-amber">
  Schedule Briefing
</button>
```

### 9.2 Text & Contrast Tokens
```css
/* Text on Light Canvas */
.editorial-lead {
  color: var(--color-text-primary);    /* #0F172A on light (17.85:1 AAA) */
}
.text-teal-compliant {
  color: var(--color-teal-700);         /* #2B5E70 on light (7.15:1 AAA) */
}

/* Tailwind Equivalent */
<p class="text-fg-primary text-base font-sans">
  <span class="text-brand-teal-700 font-semibold">Fine Tuning</span> delivers turnkey event staging.
</p>
```

---

## 10. Brand Compliance & Accessibility Invariants

1. **The Solar Amber Contrast Rule**:
   - `Background: #F09320` MUST ALWAYS pair with `Text: #070D18` (**8.24:1 AAA**).
   - White text on `#F09320` is **permanently prohibited** (2.36:1 fails WCAG AA).
2. **The Light-Mode Teal Rule**:
   - Raw logo teal `#4694B1` is restricted to non-text graphic shapes, icons, and dark mode.
   - All body copy, hyperlinks, and text labels on light canvases must use `--color-teal-700` (`#2B5E70`, **7.15:1 AAA**).
3. **Non-Color Dependency**:
   - Status indicators must pair color with a textual label (e.g. `LIVE ON-STAGE`, `AVAILABLE`, `OFF-DUTY`) and an explicit icon.
4. **Keyboard Focus Rings**:
   - Every interactive control must feature a visible `2px solid var(--color-brand-primary)` focus ring with `2px outline-offset`.
5. **No Synthetic Proof**:
   - Never fabricate client reviews, statistics, or partner logos. Use labeled placeholders (`[PENDING STAKEHOLDER SUBMISSION]`) where data is absent.

---

## 11. Maintenance Checklist & Future-Page Prompt Template

### Maintenance Runbook
- [ ] Confirm all component classes use `var(--color-*)` tokens. Zero inline hex codes.
- [ ] Verify primary button text is `#070D18` on `#F09320`.
- [ ] Verify light-mode text teal is `#2B5E70`.
- [ ] Test keyboard navigation: `Tab` visits all inputs; `Escape` dismisses open overlays.
- [ ] Verify single-screen system pages fit within `100vh` without scrollbars.
- [ ] Test mobile responsiveness down to 320px viewport width.

### Future-Page Prompt Template
```markdown
Build a new page for Fine Tuning (finetuning.com.bd) titled "[PAGE TITLE]".
Target route: "[PAGE ROUTE]".
Adhere strictly to docs/BRAND_GUIDELINES.md, docs/DESIGN_SYSTEM.md, tokens/tokens.css, and docs/WEB_PATTERNS.md.

Requirements:
1. CSS: Link tokens/tokens.css, tokens/themes.css, and demos/demo-shell.css.
2. Tokens: Primary buttons must use Solar Amber with Midnight Obsidian text. Light-mode text teal must use #2B5E70.
3. Header: Include sticky navigation with brand logo, links, theme switcher, and density toggle.
4. Mobile: Support viewports down to 320px with lateral sliding drawer navigation.
5. Proof: Use real verified client names (BSRM, UCB, BYD, Royal Enfield) and real event photos from images/webp/.
6. A11y: Include skip link, 2px :focus-visible rings, and Escape key dismissal for modals.
```

---

*Master Web Patterns & UI Architecture Guide verified for Fine Tuning engineering execution.*

