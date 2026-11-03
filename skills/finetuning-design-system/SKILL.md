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
