# Fine Tuning — Brand Guidelines & Digital Identity Specification

> **Official Design System & Visual Identity Manual for finetuning.com.bd**  
> *Industry: Experiential Advertising Agency & Event Management Production*  
> *Version: 2.5.0 | Date: November 2026 | Status: Official Standard*  
> *Primary Digital Presence: `https://finetuning.com.bd` | Headquarters: Chattogram & Dhaka, Bangladesh*

---

## Quick Reference

| Element | Value |
|---------|-------|
| Primary Color | #F09320 |
| Secondary Color | #4694B1 |
| Accent Color | #2B5E70 |
| Primary Font | Outfit |
| Voice | Architectural, Celebratory, Meticulous |

---

## 1. Color Palette

### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Primary Amber | #F09320 | rgb(240,147,32) | Primary brand mark, primary CTAs, active highlights |
| Primary Dark | #C9730D | rgb(201,115,13) | Button hover states, pressed borders |
| Primary Light | #F8B24C | rgb(248,178,76) | Subtle tint, stage glow accents |

### Secondary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Nordic Teal | #4694B1 | rgb(70,148,177) | Brand descriptor, cradle basin, secondary badges |
| Nordic Dark | #2B5E70 | rgb(43,94,112) | High-contrast text on white backgrounds (WCAG AAA) |
| Nordic Light | #7BB9CF | rgb(123,185,207) | Badges, hover highlights on dark backgrounds |

### Accent Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Ocean Deep Teal | #2B5E70 | rgb(43,94,112) | High-contrast links, technical labels |
| Solar Glow | #F8B24C | rgb(248,178,76) | Stage lighting effects, gradients |

### Neutral Palette

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Background Light | #FFFFFF | rgb(255,255,255) | Studio light canvas |
| Surface Light | #F8FAFC | rgb(248,250,252) | Subtle cards, table backgrounds |
| Background Dark | #070D18 | rgb(7,13,24) | Midnight obsidian stage canvas |
| Surface Dark | #0F172A | rgb(15,23,42) | Dark mode cards and modals |
| Text Primary Light | #0F172A | rgb(15,23,42) | High-contrast body text on light canvas only (17.85:1) |
| Text Primary Dark | #F8FAFC | rgb(248,250,252) | Mandatory primary headings & titles on dark canvas (18.10:1 AAA) |
| Text Secondary Dark | #CBD5E1 | rgb(203,213,225) | Mandatory body text & descriptions on dark canvas (9.50:1 AAA) |
| Text Muted Dark | #94A3B8 | rgb(148,163,184) | Captions, meta labels, timestamps on dark canvas (7.25:1 AAA) |
| Text Secondary Light | #475569 | rgb(71,85,105) | Captions, muted labels on white canvas only (7.58:1) |
| Border Dark | #1E293B | rgb(30,41,59) | Dividers, card borders in dark mode |
| Border | #E2E8F0 | rgb(226,232,240) | Dividers, card borders in light mode |

### Semantic Colors

| State | Hex | Usage |
|-------|-----|-------|
| Success | #10B981 | Ticket confirmed, stage live, form validated |
| Warning | #F59E0B | High decibel alert, low inventory, pending review |
| Error | #EF4444 | Disconnected signal, 500 server error, form failure |
| Info | #3B82F6 | System updates, stage schedule changes, specs |

### Accessibility & Contrast Invariants

- **Invariant 1: Solar Amber (#F09320) Button Text**: Midnight Obsidian (`#070D18`) text is mandatory (**8.24:1 WCAG AAA**). White text on Amber is strictly prohibited.
- **Invariant 2: Nordic Dark Teal (#2B5E70) on White**: Mandatory text teal on white canvas (**7.15:1 WCAG AAA**).
- **Invariant 9: Absolute Dark-Canvas Text Legibility**:
  - Headings & Titles on dark canvas (`#070D18`, `#0F172A`): **#F8FAFC or #FFFFFF (18.10:1 AAA)**.
  - Body copy & descriptions on dark canvas: **#CBD5E1 or #E2E8F0 (9.50:1 AAA)**.
  - Dark text (`#0F172A`, `#1E293B`, `#334155`, `#475569`) on dark canvas is **strictly prohibited**.
  - Components on dark backgrounds must declare explicit dark-surface color tokens so they can never be polluted by light theme inheritance.

---

## 2. Typography

### Font Stack

```css
--font-heading: 'Outfit', system-ui, -apple-system, sans-serif;
--font-body: 'Outfit', system-ui, -apple-system, sans-serif;
--font-display: 'Syne', sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

### Type Scale

| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height |
|---------|----------------|---------------|--------|-------------|
| Display | 64px | 36px | 800 | 1.1 |
| H1 | 48px | 30px | 700 | 1.15 |
| H2 | 36px | 24px | 700 | 1.2 |
| H3 | 28px | 20px | 600 | 1.25 |
| H4 | 22px | 18px | 600 | 1.3 |
| Body Large | 18px | 16px | 400 | 1.6 |
| Body | 16px | 15px | 400 | 1.5 |
| Small | 14px | 13px | 400 | 1.45 |
| Caption | 12px | 11px | 500 | 1.4 |

### Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@300;400;500;600;700;800&family=Syne:wght@700;800&display=swap" rel="stylesheet">
```

---

## 3. Logo System & Usage

### Brand Personality

| Trait | Description | Expression |
|-------|-------------|------------|
| **Architectural** | Precision calibration and structural poise | Crisp geometry, clean alignments, rigorous staging |
| **Celebratory** | Dynamic vitality and warmth | Solar Amber glow, memorable event moments |
| **Meticulous** | No detail left to chance | Flawless audio-visual cues, exact telemetry |

### Prohibited

| Term / Cliché | Why Avoid | Preferred Alternative |
|---------------|-----------|----------------------|
| One-stop-shop | Overused, implies commodity broker | Turnkey experiential agency |
| Synergistic solutions | Vague corporate buzzword | Harmonic orchestration |
| Disrupting the space | Cliché tech jargon | Precision stage engineering |

### Logo Variants

| Variant | File | Use Case |
|---------|------|----------|
| Full Stacked | fine-tuning-logo.png | Headers, presentations, hero cards |
| Icon Emblem | fine-tuning-icon.svg | Favicons, app icons, navigation pills |
| Midnight Stage Card | og-thumbnail.png | OpenGraph social preview, dark mode hero |

### Clear Space

$$\text{Clear Space} = X \quad (\text{where } X = \text{width of the needle apex} \approx 18.5\% \text{ of mark width})$$

- Minimum Digital Clear Space: **24px** on mobile, **48px** on desktop.
- Minimum Digital Size: **160px** full lockup, **24px** icon emblem.

---

## Iconography Framework (Lucide Standard — Invariant 10)
All digital products, marketing pages, and client portals must strictly adhere to **Lucide Vector Icons**:
- Bounding Box: 24px grid (`viewBox="0 0 24 24"`)
- Stroke Width: 2px (`stroke-width: 2`, `stroke-linecap: round`, `stroke-linejoin: round`)
- Fill: `none`, `stroke: currentColor`
- Emojis, raw unicode glyphs, and text approximations like `(X)` are strictly forbidden in UI controls.
- Dropdown menus must maintain a custom SVG chevron with $\ge 44\text{px}$ clearance.
- Modal & panel dismissals must use circular frosted glass buttons (`.btn-close-frosted`).

---

## Mobile Viewport Zero-Overflow Standard (Invariant 11)
- On screens $\le 640\text{px}$ (e.g. iPhone 16 / 393px width), all display headlines clamp to $\le 1.75\text{rem}$ with `overflow-wrap: break-word`.
- Horizontal overflow is strictly prohibited (`max-width: 100vw; overflow-x: hidden;`).
- Multi-column grids collapse to a single column on mobile.
- Mobile drawer navigation must highlight the current active route via `.drawer-link.active` with a Solar Amber indicator.

---

## Brand Scrollbar & Interactive Pointer System (Invariant 12)
- **Brand Scrollbar**: Desktop viewports replace standard OS grey scrollbars with a custom Midnight Obsidian (`#040810`) track and a dark slate (`#1E293B`) pill thumb that illuminates to Solar Amber (`#F09320`) on hover.
- **Dual-Layer Circular Cursor**: Desktop mice feature a 6px Solar Amber precision anchor dot and a 36px frosted follower ring that dynamically tracks via 60–120fps LERP easing, expanding smoothly to 58px over interactive elements.
- **Mobile Touch Preservation**: Cursor engines are strictly suppressed on touch devices (`@media (hover: none)`).

---

## Floating Glassmorphic Dock & Infinity Ambient Canvas Standard (Invariant 13)
- **Infinity Canvas**: Desktop and mobile viewports feature a 4-corner multi-spectral ambient glow (Teal top-left/bottom-right, Solar Amber top-right/bottom-left) with a 22s gentle breathing drift (`ft-infinity-drift`).
- **Floating Glass Dock**: Desktop navigation floats 12px below top with `border-radius: 9999px;`, 24px glass blur, and chip link track.
- **Elevated CTA**: "Book Technical Briefing" is elevated into a luxury amber dispatch capsule with a live pulsating beacon dot and embedded circular obsidian arrow pod (8.24:1 AAA).

---

## Flanking Slider, Glassmorphism & Unified Vector CTA Standards (Invariant 14)
- **Lateral Slider Handlers**: Slider controls flank left and right at vertical center (`top: 50%; transform: translateY(-50%);`) in circular frosted glass buttons with 6s autoplay.
- **Glassmorphic System**: Buttons and surfaces utilize 16px blur with subtle white borders, catching background radial light.
- **Partner Card Monograms**: 44px square monogram boxes in `Outfit` sans, preventing text collision.
- **Vector Arrow Standard**: Raw text `>` is replaced by the embedded circular dark obsidian Lucide arrow pod.
