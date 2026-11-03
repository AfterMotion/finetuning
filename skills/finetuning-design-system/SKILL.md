---
name: finetuning-design-system
description: >-
  Comprehensive design system, brand guidelines, and UI component standards for
  Fine Tuning (finetuning.com.bd). Use whenever designing, developing, or refactoring
  any web UI component, landing page, event feature, maintenance page, or error page.
---

# Fine Tuning Design System Skill

This skill acts as the single source of truth for **Fine Tuning** (`finetuning.com.bd`), an elite **Event Management & Experiential Advertising Agency**.

Whenever you are asked to design, build, or update any UI element, page, feature, or component for Fine Tuning, follow the rules, tokens, and code patterns specified here.

---

## 1. Quick Identity & Color Cheat Sheet

| Token Name | Hex Code | RGB | Purpose & Usage |
| :--- | :--- | :--- | :--- |
| `--ft-color-amber-500` | `#F09320` | `240, 147, 32` | **Core Primary**: Primary buttons, headline accents, active badges, hero spotlight |
| `--ft-color-teal-500` | `#4694B1` | `70, 148, 177` | **Core Secondary**: Secondary buttons, borders, subtitle descriptors, acoustic waveforms |
| `--ft-bg-stage-root` | `#070D18` | `7, 13, 24` | **Dark Stage Root**: Base page background for nighttime gala/event feel |
| `--ft-bg-stage-surface` | `#0B1320` | `11, 19, 32` | **Dark Stage Surface**: Containers, hero panels |
| `--ft-bg-stage-card` | `#111E33` | `17, 30, 51` | **Dark Stage Card**: Glass cards, interactive panels |
| `--ft-text-primary` | `#FFFFFF` | `255, 255, 255` | **Primary Text**: Headings, primary copy |
| `--ft-text-secondary` | `#94A3B8` | `148, 163, 184` | **Secondary Text**: Meta information, descriptions |

---

## 2. Modern Font Stack & Typographic Rules

Always import Google Fonts in the `<head>` of any Fine Tuning HTML page:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;700&family=Outfit:wght@300;400;500;600;700;800;900&family=Syne:wght@700;800&display=swap" rel="stylesheet">
```

### Font Pairing Rules:
1. **Primary Brand Display & Headings**: Use `'Outfit', sans-serif` (weights `700`, `800`, `900`).
   - Clean, geometric modernist sans echoing the "Advertising Agency" logo subtitle.
2. **Creative Agency Display Accents**: Use `'Syne', sans-serif` (weights `700`, `800`).
   - Designed specifically for creative advertising agencies, echoing the angular cuts of the FT monogram.
3. **Body & UI Controls**: Use `'Outfit', system-ui, sans-serif` (weights `400`, `500`).
4. **Timers & Coordinates**: Use `'JetBrains Mono', monospace`.

---

## 3. Strict Single-Screen Viewport Rule for System Pages

When generating Maintenance or Error Pages (404, 500, 503):
- **Must fit entirely on a single screen** on both Mobile and Desktop with **zero scrollbar**.
- Structure:
  ```css
  html, body {
    height: 100%;
    height: 100vh;
    height: 100dvh;
    overflow: hidden;
  }
  .ft-page-container {
    height: 100dvh;
    max-height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  ```
- Do not include navigation bars or extraneous preview buttons.

---

## 4. Open Graph (OG) Standard

All pages must include:
```html
<meta property="og:image" content="https://finetuning.com.bd/images/og-thumbnail.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://finetuning.com.bd/images/og-thumbnail.png">
```

---

## 5. Strict Anti-Patterns

- ❌ NEVER use `Playfair Display` or traditional romantic serifs. Use `Outfit` and `Syne`.
- ❌ NEVER introduce vertical scrollbars to Maintenance or Error pages.
- ❌ NEVER use generic purple/violet gradients. Brand colors are strictly Solar Amber (`#F09320`) and Nordic Teal (`#4694B1`).
- ❌ NEVER put white text on top of the solid Amber button. Always use dark obsidian text (`#070D18`) for WCAG AAA contrast.
- ❌ NEVER add generic web contact forms on marketing pages. Always use direct WhatsApp click-to-chat triggers (`+880 1671-863685`) with pre-filled message intents.
- ❌ NEVER use uncompressed raw JPEGs for portfolio galleries. Always encode to WebP with responsive dimension clamping.
- ❌ NEVER display the WhatsApp header button on mobile devices (`<= 768px`). Always hide it on mobile to keep the header uncluttered; the persistent floating button serves mobile users.
- ❌ NEVER duplicate WhatsApp buttons in the Hero when both a header action and floating button exist. Use Hero CTAs for portfolio and capabilities exploration.

---

## 6. Single-Page Portfolio & Light Theme Standard (v2.2.0)

When working on the public-facing portfolio website (`index.html`):
- **Theme**: Light theme (`data-theme="light"` on `<html>`). Base background `#FFFFFF` and surface `#F8FAFC`.
- **Background**: Continuous infinite stage grid (`.ft-animated-grid`) drifting at 32s with zero CPU overhead, paired with Solar Amber and Nordic Teal radial ambient spotlights.
- **Header & Mobile Drawer**: Right-slide drawer navigation (`.ft-mobile-drawer`) with blurred backdrop; header WhatsApp pill active only on desktop.
- **Single-Line Hero Badge**: Compact pill badge (`.ft-badge-hero`) guaranteed to fit on a single line on any mobile viewport down to 320px (`white-space: nowrap; max-width: 100%; text-overflow: ellipsis;`).
- **Hero & CTAs**: Primary CTA directs to featured case studies (`#portfolio`); secondary CTA directs to capabilities (`#services`).
- **Portfolio Showcase**: Interactive card-level navigation arrows (`‹` / `›`), active indicator dots, synchronized thumbnails, and full-screen lightbox modal.
- **Partnerships Marquee**: Automatic infinite scrolling slider (`.ft-marquee-track`) with hover pause and gradient edge masks.
- **Metrics Counter**: Smooth cubic ease-out number count-up triggered on scroll.

---

## 7. Elevated Contact & Agency Footer Standards

- **Zero-Form Direct Connection**: Never use traditional HTML form inputs. All prospective client inquiries route immediately to:
  - Official WhatsApp: `+880 1671-863685` (with pre-filled conversational intent)
  - Direct 24/7 Hotline: `+880 1671-863685` (Tap to call)
  - Formal Email Desk: `finetuningbd@gmail.com`
  - Headquarters Studio: `Shop No. 01, CDA Market, Kajir Dewri, Chittagong, Bangladesh 4203`
- **Floating WhatsApp Collision Avoidance**: Automatically hides the floating WhatsApp pill via `IntersectionObserver` when the user scrolls to the Contact or Footer sections, preventing any visual clutter or UI button overlap on mobile devices.
- **Executive Agency Footer**:
  - Tri-tone top accent border (`linear-gradient(90deg, #F09320 0%, #4694B1 50%, #25D366 100%)`).
  - Obsidian dark backdrop (`#060B13`) with subtle ambient glow.
  - 4-column balanced architecture: Brand Identity with dual-city operation pills (`Chattogram Hub` & `Dhaka Operations`), Agency Navigation, Event Specializations, and Direct Production Desk.
  - Interactive "Back to Main Stage" top-glider button.
