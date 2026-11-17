# Fine Tuning — Master Component Specifications & Anatomy (`component-specs.md`)

> **Authoritative Technical Anatomy, Token Bindings, States & Accessibility Contracts**  
> *Target Repository: `finetuning.com.bd` | Package: `@finetuning/design-system`*  
> *Version: 2.5.0 | Date: November 2026 | Status: Authoritative Standard*

---

## 1. Actions & Status Components

### 1.1 Primary Button (Solar Amber) — `ACT-01`
- **Anatomy**: Container (`<button class="btn btn-primary">`), optional leading icon, label, optional trailing arrow.
- **Token Bindings**:
  - Background: `var(--color-action-primary)` (`#F09320`)
  - Text Color: `var(--color-slate-950)` (`#070D18`) — **MANDATORY Invariant 1 (8.24:1 AAA)**
  - Hover Background: `var(--color-action-primary-hover)` (`#D47911`)
  - Active Background: `var(--color-action-primary-active)` (`#A85A09`)
  - Focus Ring: `2px solid var(--color-focus-ring)` (`#F09320`), offset `2px`
  - Border Radius: `var(--radius-md)` (`8px`)
- **Sizes**:
  - `sm`: Height 32px, Padding 0 12px, Font size 12px
  - `md`: Height 40px, Padding 0 16px, Font size 14px
  - `lg`: Height 48px, Padding 0 24px, Font size 16px
- **States**: `default`, `hover` (`translateY(-1px)`), `active` (`translateY(0)`), `focus-visible`, `disabled` (`opacity: 0.5; pointer-events: none;`).
- **A11y**: Accessible label via inner text or `aria-label`. `:focus-visible` required.

```html
<!-- Primary Button HTML -->
<button type="button" class="btn btn-primary btn-md">
  <span>Launch Production Brief</span>
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
</button>
```

### 1.2 Secondary Button (Nordic Teal) — `ACT-02`
- **Anatomy**: Container (`<button class="btn btn-secondary">`), label.
- **Token Bindings**:
  - Background: `var(--color-action-secondary)` (`#4694B1`)
  - Text Color: `var(--color-white)` (`#FFFFFF`) (5.68:1 AA on dark)
  - Hover Background: `var(--color-action-secondary-hover)` (`#377A93`)
- **Sizes**: `sm`, `md`, `lg`.

### 1.3 Outline Button — `ACT-03`
- **Anatomy**: Transparent container with border (`<button class="btn btn-outline">`).
- **Token Bindings**:
  - Border: `1px solid var(--color-action-outline-border)`
  - Text Color: `var(--color-action-outline-fg)`
  - Hover Background: `var(--color-action-outline-hover-bg)`

### 1.4 Floating Action Button (FAB) — `ACT-08`
- **Anatomy**: Fixed circular container (`.whatsapp-fab`), WhatsApp SVG icon, pulse ripple effect.
- **Token Bindings**:
  - Background: `var(--color-emerald-500)` (`#10B981`)
  - Icon Color: `var(--color-white)`
  - Size: `56px × 56px`, `border-radius: var(--radius-full)`
  - Shadow: `0 8px 24px rgba(16, 185, 129, 0.4)`
  - Z-Index: `var(--z-sticky)` (`1100`)

---

## 2. Form & Input Components

### 2.1 Form Field & Text Input — `FRM-01`, `FRM-02`
- **Anatomy**: Label (`<label class="form-label">`), Required Asterisk, Input Container, Native `<input>`, Helper/Error Text.
- **Token Bindings**:
  - Background: `var(--input-bg)` (`var(--color-bg-surface-elevated)`)
  - Text: `var(--input-fg)` (`var(--color-text-primary)`)
  - Placeholder: `var(--input-placeholder)` (`var(--color-text-muted)`)
  - Border: `1px solid var(--input-border)` (`var(--color-border-primary)`)
  - Focus Ring: `0 0 0 2px var(--color-focus-ring)` with `border-color: var(--color-action-primary)`
  - Height: `var(--density-input-height)` (44px comfortable / 36px compact)
  - Radius: `var(--input-radius)` (`var(--radius-md)`)

```html
<div class="form-group">
  <label class="form-label" for="client-name">Full Name & Title <span class="req">*</span></label>
  <input type="text" id="client-name" class="form-input" placeholder="e.g. Tanvir Ahmed, Brand Director" required>
  <p class="form-helper">Enter executive contact for stage coordination.</p>
</div>
```

### 2.2 Password Input with Reveal Toggle — `FRM-02`
- **Anatomy**: Input container, `<input type="password">`, toggle button (`#toggle-pw-btn`) with eye icon.
- **Interaction**: Clicking eye toggle flips `input.type` between `'password'` and `'text'` with `aria-label="Show password"` / `"Hide password"`.

### 2.3 Interactive Range Slider — `FRM-07`
- **Anatomy**: Native `<input type="range">`, track fill, thumb, live numeric badge (`.metric-val`).
- **Token Bindings**:
  - Track: `var(--color-bg-surface-elevated)`
  - Thumb: `var(--color-action-primary)` (`#F09320`), `width: 20px; height: 20px; border-radius: 50%;`

---

## 3. Navigation & Header Components

### 3.1 Sticky Global Navigation — `NAV-01`
- **Anatomy**: Glass container (`<header class="site-header">`), Brand Emblem & Wordmark link, Desktop nav links, Theme Toggle, Density Toggle, Primary CTA button, Mobile hamburger button.
- **Token Bindings**:
  - Background: `var(--glass-bg)` (`rgba(7, 13, 24, 0.85)`)
  - Backdrop Filter: `blur(var(--glass-blur))` (`16px`)
  - Border Bottom: `var(--glass-border)`
  - Z-Index: `var(--z-sticky)` (`1100`)

### 3.2 Mobile Lateral Sliding Drawer — `NAV-02`
- **Anatomy**: Backdrop overlay (`.mobile-drawer-backdrop`), sliding panel (`.mobile-drawer`), close button (`.drawer-close-btn`), vertical nav links, contact strip, primary CTA.
- **Token Bindings**:
  - Panel Background: `var(--color-bg-canvas)` (`#070D18`)
  - Width: `320px`, Height `100vh`, `position: fixed; right: 0; top: 0;`
  - Z-Index: `var(--z-drawer)` (`1200`)
- **Key Invariants**:
  - **No Off-Canvas Bleed**: Must use `display: none;` when inactive and `display: block;` when `.active` to guarantee zero page scroll in Blink/Chrome.
  - **Escape Dismissal**: Universal listener on `document.addEventListener('keydown')` dismisses drawer on `Escape`.

---

## 4. Container & Surface Components

### 4.1 Elevated Content Card — `CNT-01`
- **Anatomy**: Container (`.card` / `.card-elevated`), optional image, header with category badge, body copy, footer with action links.
- **Token Bindings**:
  - Background: `var(--card-bg)` (`var(--color-bg-surface-card)`)
  - Border: `var(--card-border)` (`1px solid var(--color-border-primary)`)
  - Border Radius: `var(--radius-xl)` (`16px`)
  - Padding: `var(--space-6)` (24px comfortable) / `var(--space-4)` (16px compact/mobile)
  - Hover: `border-color: var(--color-border-highlight); transform: translateY(-2px);`

### 4.2 Consultation Modal Dialog — `OVL-01`
- **Anatomy**: Dimmed backdrop overlay (`.modal-backdrop`), dialog window (`.modal-dialog`), header title, close `[X]` button, briefing form, submit button.
- **Token Bindings**:
  - Backdrop: `rgba(7, 13, 24, 0.85)` with `backdrop-filter: blur(12px)`
  - Dialog Background: `var(--color-bg-surface-elevated)` (`#131D31`)
  - Border: `1px solid var(--color-border-highlight)`
  - Radius: `var(--radius-xl)`
  - Z-Index: `var(--z-modal)` (`1300`)
- **Accessibility**: Traps Tab focus inside dialog; dismisses immediately on `Escape`.

---

## 5. Telemetry & Data Components

### 5.1 FOH Live Soundcheck Decibel Fader — `DTA-05`
- **Anatomy**: Sound pressure level (SPL) meter, digital readout (`84.6 dBA`), dynamic multi-tier color arc gauge, interactive fader slider.
- **Acoustic Safety States**:
  - **Nominal / Safe (<85 dBA)**: Emerald indicator (`--color-emerald-500`), "SPEECH INTELLIGIBLE".
  - **Elevated (86–95 dBA)**: Amber indicator (`--color-amber-500`), "AUDIENCE ENGAGED".
  - **Overlimit (>95 dBA)**: Crimson alert (`--color-crimson-500`), "OSHA CLAMP ACTIVE".

### 5.2 Technical Specification Table — `DTA-01`
- **Anatomy**: Scroll wrapper (`.spec-table-wrap`), `<table>`, `<thead>`, `<tbody>`, monospace parameter cells (`.mono`).
- **Token Bindings**:
  - Wrapper: `overflow-x: auto; width: 100%; border: 1px solid var(--color-border-primary);`
  - Header Background: `rgba(7, 13, 24, 0.6)`
  - Row Hover: `background: rgba(240, 147, 32, 0.04)`

---

## 6. Feedback & Notification Components

### 6.1 Toast Notification (Snackbar) — `ACT-18`
- **Anatomy**: Container (`.toast-notification`), status icon, message string, dismiss button.
- **Token Bindings**:
  - Background: `var(--color-bg-surface-elevated)`
  - Border: `1px solid var(--color-border-primary)`
  - Radius: `var(--radius-md)`
  - Shadow: `var(--shadow-lg)`
  - Z-Index: `var(--z-toast)` (`1500`)
  - Fixed Position: Bottom Left (`bottom: 24px; left: 24px;`)
