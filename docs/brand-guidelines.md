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
| Text Primary Light | #0F172A | rgb(15,23,42) | High-contrast body text on light (17.85:1) |
| Text Primary Dark | #F8FAFC | rgb(248,250,252) | High-contrast body text on dark (18.10:1) |
| Text Secondary | #475569 | rgb(71,85,105) | Captions, muted labels (7.58:1) |
| Border | #E2E8F0 | rgb(226,232,240) | Dividers, card borders |

### Semantic Colors

| State | Hex | Usage |
|-------|-----|-------|
| Success | #10B981 | Ticket confirmed, stage live, form validated |
| Warning | #F59E0B | High decibel alert, low inventory, pending review |
| Error | #EF4444 | Disconnected signal, 500 server error, form failure |
| Info | #3B82F6 | System updates, stage schedule changes, specs |

### Accessibility

- **Solar Amber (#F09320) on White**: 2.36:1 (Fails normal text; graphical objects only).
- **Midnight Obsidian (#070D18) on Solar Amber (#F09320)**: **8.24:1 (WCAG AAA)** — mandatory button text.
- **Nordic Dark Teal (#2B5E70) on White**: **7.15:1 (WCAG AAA)** — mandatory text teal on white.
- **Deep Slate (#0F172A) on White**: **17.85:1 (WCAG AAA)**.
- All interactive elements meet WCAG 2.1 AA and AAA standards.

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
