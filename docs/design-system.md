# Fine Tuning - Design System Specifications & Tokens

> **Technical Design Tokens & System Specifications**  
> _Target Platforms: Web, Mobile Web, Interactive Displays_  
> _Namespace: `ft-` | CSS Custom Properties & Design Tokens | Version: 1.1.0_

---

## 1. Color Tokens & Scales

```css
:root {
  /* Brand Primary (Solar Amber) */
  --ft-color-amber-50: #fff7ed;
  --ft-color-amber-100: #ffedd5;
  --ft-color-amber-200: #fed7aa;
  --ft-color-amber-300: #fdba74;
  --ft-color-amber-400: #fb923c;
  --ft-color-amber-500: #f09320; /* CORE BRAND PRIMARY */
  --ft-color-amber-600: #d97706;
  --ft-color-amber-700: #b45309;
  --ft-color-amber-800: #92400e;
  --ft-color-amber-900: #78350f;
  --ft-color-amber-glow: rgba(240, 147, 32, 0.35);

  /* Brand Secondary (Nordic Teal) */
  --ft-color-teal-50: #f0fdf4;
  --ft-color-teal-100: #e0f2fe;
  --ft-color-teal-200: #bae6fd;
  --ft-color-teal-300: #7dd3fc;
  --ft-color-teal-400: #5ab5d4;
  --ft-color-teal-500: #4694b1; /* CORE BRAND SECONDARY */
  --ft-color-teal-600: #37778e;
  --ft-color-teal-700: #2b5e70;
  --ft-color-teal-800: #204654;
  --ft-color-teal-900: #16313c;
  --ft-color-teal-glow: rgba(70, 148, 177, 0.35);

  /* Atmospheric Neutrals - Obsidian Dark Stage (Default) */
  --ft-bg-stage-root: #070d18;
  --ft-bg-stage-surface: #0b1320;
  --ft-bg-stage-card: #111e33;
  --ft-border-subtle: rgba(70, 148, 177, 0.22);
  --ft-border-focus: #f09320;
  --ft-text-primary: #ffffff;
  --ft-text-secondary: #94a3b8;
  --ft-text-muted: #64748b;
  --ft-text-brand: #f09320;

  /* Typography Fonts */
  --ft-font-display: "Outfit", sans-serif;
  --ft-font-heading: "Syne", sans-serif;
  --ft-font-body: "Outfit", system-ui, -apple-system, sans-serif;
  --ft-font-mono: "JetBrains Mono", "Courier New", monospace;

  /* System Page & Error Tokens */
  --ft-error-glow-amber: 0 0 40px rgba(240, 147, 32, 0.35);
  --ft-error-glow-red: 0 0 40px rgba(239, 68, 68, 0.35);
  --ft-error-glow-teal: 0 0 40px rgba(70, 148, 177, 0.35);
}
```

---

## 2. Typography Hierarchy (v1.1.0 Modern Agency Spec)

| Role                          | Font Family                   | Default Weight    | Size Scale (clamp formula)            | Letter Spacing     |
| :---------------------------- | :---------------------------- | :---------------- | :------------------------------------ | :----------------- |
| **Hero Display Title**        | `'Outfit', sans-serif`        | `800` (ExtraBold) | `clamp(1.65rem, 4.4vh, 3.0rem)`       | `-0.025em`         |
| **Error Code Numeral**        | `'Outfit', sans-serif`        | `900` (Black)     | `clamp(5.0rem, 15vh, 8.5rem)`         | `-0.04em`          |
| **Agency Display / Header**   | `'Syne', sans-serif`          | `700` (Bold)      | `clamp(1.25rem, 3vh, 2.0rem)`         | `-0.01em`          |
| **Subtitle / Explanatory**    | `'Outfit', sans-serif`        | `400` / `500`     | `clamp(0.8125rem, 1.8vh, 1.025rem)`   | `0`                |
| **Status Badge / Descriptor** | `'Outfit', sans-serif`        | `700` (Bold)      | `clamp(0.6875rem, 1.4vh, 0.75rem)`    | `0.12em uppercase` |
| **Timers & Coordinates**      | `'JetBrains Mono', monospace` | `700` (Bold)      | `clamp(1.2rem, 3vh, 2.2rem)`          | `0.02em`           |
| **Footer Contact Link**       | `'Outfit', sans-serif`        | `500` (Medium)    | `clamp(0.6875rem, 1.4vh, 0.78125rem)` | `0`                |

---

## 3. Strict Single-Screen Viewport Architecture

To guarantee that Maintenance and Error Pages never exhibit unwanted scrolling on any screen:

### 3.1 Layout Specifications

```css
html,
body {
  height: 100%;
  height: 100vh;
  height: 100dvh; /* Accounts for mobile dynamic browser bars */
  width: 100%;
  overflow: hidden; /* Zero scrollbar policy */
}

.ft-page-container {
  height: 100%;
  height: 100vh;
  height: 100dvh;
  max-height: 100dvh;
  width: 100%;
  padding: clamp(14px, 2.5vh, 32px) clamp(16px, 4vw, 36px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
```

### 3.2 Responsive Behavior Checklist

- **Mobile Viewports (375px to 428px)**:
  - Header logo height scales smoothly: `clamp(34px, 5.5vh, 48px)`.
  - Hero margins adjust dynamically via `vh` clamp units so content never overflows the vertical viewport.
  - Notification input uses `flex-direction: row` with a rounded pill structure to fit horizontally without line breaks.
- **Desktop Viewports (1024px to 4K)**:
  - Layout is centered with generous breathing room.
  - Stage flares scale proportionally in the background.
  - Zero browser scrollbar appears.

---

## 4. Light Theme Portfolio Component Architecture (v2.0)

For public-facing marketing and portfolio displays (`site.css`):

### 4.1 Portfolio & Media Grid Specifications
- **Program Cards**: Responsive 2-column grid (`@media (max-width: 768px)` collapses to 1-column).
- **Aspect Ratio Policy**: Master exhibition photos use a stable `16:10` aspect ratio (`object-fit: cover`).
- **Interactive Lightbox**: All images support high-resolution click-to-zoom overlays via `[data-lightbox-src]`.
- **Image Optimization Standard**: All photographic assets must be encoded in `.webp` format at `quality=84`, reducing payload size by >60% compared to raw camera JPEGs.

### 4.2 Floating WhatsApp Action Architecture
- **Positioning**: Fixed at `bottom: 24px; right: 24px; z-index: 999;`.
- **Dimensions**: `58px × 58px` circle with vibrant WhatsApp green (`#25D366`).
- **Pulse Beacon Animation**: Ambient radial ring pulse alerting mobile visitors to immediate chat availability.

### 4.3 Card-Level Multi-Image Carousel & Indicators (v2.1.0)
- **Side Navigation Handles**: Translucent circular arrow controls (`.ft-media-nav-prev` / `.ft-media-nav-next`) positioned at `top: 50%; transform: translateY(-50%)` with smooth hover elevation.
- **Micro Dot Indicators**: Compact pill at `bottom: 12px; left: 50%; transform: translateX(-50%)` displaying current slide position.
- **Synchronized Thumbnail Strip**: Clicking miniature gallery thumbnails below the description updates the main media view, indicator dot, and lightbox target in real-time.

### 4.4 Infinite Marquee Animation Specification
- **Velocity**: 32 seconds per full traversal loop (`animation: ft-marquee 32s linear infinite`).
- **Masking**: Smooth 12% alpha gradient fade at left and right edges (`mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)`).
- **Interaction**: Cursor hover triggers `animation-play-state: paused` for easy readability.

### 4.5 Numerical Counter Animation Engine
- **Trigger**: Single-shot `IntersectionObserver` when `.ft-stats-ribbon` enters 25% of viewport.
- **Easing**: Exponential ease-out curve (`1 - (1 - progress)^3`) over 1,600ms duration.
- **Formatting**: Auto-commas for thousands (`2,000+`) and preserved unit suffixes (`+`, `%`).

---

## 7. Mobile Hero Badge Standard

- **Class**: `.ft-badge-hero`
- **Specification**: Designed to fit strictly on a single line on any mobile device down to 320px screen width.
- **CSS Enforcement**:
  ```css
  .ft-badge-hero {
    font-size: clamp(0.65rem, 2.2vw, 0.75rem);
    white-space: nowrap;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (max-width: 768px) {
    .ft-badge-hero {
      font-size: 0.6875rem;
      padding: 4px 12px;
      letter-spacing: 0.04em;
    }
  }
  @media (max-width: 380px) {
    .ft-badge-hero {
      font-size: 0.625rem;
      padding: 3px 10px;
    }
  }
  ```

---

## 8. Frictionless Contact & Executive Agency Footer

- **Zero-Form Policy**: Eliminates input fatigue. Direct tap actions for WhatsApp (`+880 1671-863685`), 24/7 Hotline, Official Email Desk, and Studio Location.
- **Floating WhatsApp Smart Collision Avoidance**: Uses `IntersectionObserver` to hide the fixed WhatsApp button when `#contact` or `.ft-footer` enters viewport, avoiding any overlay on mobile.
- **Agency Footer Architecture**:
  - Top tricolor accent line: Solar Amber (`#F09320`) → Nordic Teal (`#4694B1`) → WhatsApp Green (`#25D366`).
  - Obsidian surface `#060B13`.
  - 4-column layout: Brand Essence with operation hubs (`Chattogram Hub` & `Dhaka Operations`), Agency Navigation, Event Specializations, and Direct Production Desk.
  - Interactive "Back to Main Stage" smooth glide button.



