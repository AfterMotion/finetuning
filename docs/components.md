# Fine Tuning - UI Component Library & Architecture

> **Component Specifications & Interactive Guidelines**  
> _Target: Production HTML/CSS/JS Component Implementation_  
> _Namespace: `.ft-` | Version: 1.1.0_

---

## 1. Single-Screen System Page Components

Used across `index.html` (Maintenance Mode), `404.html`, `500.html`, and `503.html`.

### 1.1 Single-Screen Shell (`.ft-page-container`)

```html
<div class="ft-page-container">
  <!-- Top: Logo -->
  <header class="ft-header">
    <img
      src="images/Fine%20Tuning%20Logo.png"
      alt="Fine Tuning"
      class="ft-brand-logo"
    />
  </header>

  <!-- Center: Hero / Error Content -->
  <main class="ft-hero">...</main>

  <!-- Bottom: Compact Footer -->
  <footer class="ft-footer">
    <span>&copy; 2026 Fine Tuning</span>
    <span>&bull;</span>
    <a href="mailto:info@finetuning.com.bd">info@finetuning.com.bd</a>
  </footer>
</div>
```

### 1.2 Error Numeral Display (`.ft-error-num`)

Displays large, ambient-lit status numerals (`404`, `500`, `503`):

- `font-family: var(--ft-font-display);`
- `font-size: clamp(5.0rem, 15vh, 8.5rem);`
- `font-weight: 900;`
- Gradient text clip from Solar Amber (`#F09320`) through Nordic Teal (`#4694B1`) or Crimson (`#EF4444`).

### 1.3 Compact Single-Line Notification Pill (`.ft-notify-box`)

```html
<form class="ft-notify-form" onsubmit="event.preventDefault();">
  <div class="ft-notify-box">
    <input
      type="email"
      class="ft-notify-input"
      placeholder="Enter corporate email for updates"
      required
    />
    <button type="submit" class="ft-btn ft-btn-primary ft-notify-btn">
      Notify Me
    </button>
  </div>
</form>
```

---

## 2. Buttons & Action Variations

| Class                      | Description             | Visual Appearance                                 | Primary Use                         |
| :------------------------- | :---------------------- | :------------------------------------------------ | :---------------------------------- |
| `.ft-btn.ft-btn-primary`   | High-impact solid amber | `#F09320` background, `#070D18` text, bold weight | "Notify Me", "Return to Main Stage" |
| `.ft-btn.ft-btn-secondary` | Stable corporate teal   | `#4694B1` background, `#FFFFFF` text              | Secondary actions, filters          |
| `.ft-btn.ft-btn-outline`   | Bordered minimalist     | Transparent bg, `1.5px solid #4694B1`             | "Reload Page", "Contact Crew"       |
| `.ft-btn.ft-btn-glass`     | Frosted stage glass     | `rgba(255,255,255,0.08)` bg, blur                 | Theme toggle, secondary links       |

---

## 3. Alerts, Badges & Toasts

### 3.1 Status Badges (`.ft-badge`)

- `.ft-badge-live`: Emerald beacon with pulsing keyframe animation (indicating active live stage / maintenance).
- `.ft-badge-amber`: Solar amber border & tinted background.
- `.ft-badge-teal`: Nordic teal border & tinted background.

### 3.2 Floating Toasts (`.ft-toast`)

- Auto-dismissible notifications fixed at bottom-right of viewport with smooth spring animation.
