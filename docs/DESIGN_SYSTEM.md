# Fine Tuning — Design System Specification

> **Technical System Architecture & Design Contracts for finetuning.com.bd**  
> *Target Environments: Public Agency Website, Authenticated Client Portals, Production Event Dashboards*  
> *Version: 2.0.0 | Status: Official Engineering Standard | Updated: November 2026*  
> *Authoritative Sources: `docs/BRAND_GUIDELINES.md` & `docs/BRAND_FOUNDATIONS.json`*

---

## 1. Architectural Overview & Token Stratification

The Fine Tuning Design System operates on a strict **three-layer token hierarchy** ensuring that foundational values (primitives) are decoupled from their contextual meanings (semantic) and interface implementations (components).

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       LAYER 1: PRIMITIVE TOKENS                             │
│  Raw, immutable scales (Colors, Spatial Grid, Radii, Typography, Durations)  │
│  Examples: --color-amber-500: #F09320;  --space-4: 16px;  --radius-md: 8px; │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ Inherited by
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                       LAYER 2: SEMANTIC TOKENS                              │
│  Purpose-driven aliases mapped to theme contexts (Light, Dark, Density)     │
│  Examples: --color-action-primary: var(--color-amber-500);                  │
│            --color-bg-canvas: var(--color-slate-950);                       │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ Inherited by
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                       LAYER 3: COMPONENT TOKENS                             │
│  Scaffolded contracts binding semantic tokens to UI controls & states       │
│  Examples: --btn-primary-bg: var(--color-action-primary);                   │
│            --btn-primary-fg: var(--color-action-primary-fg);                │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1.1 Token Naming & Aliasing Protocol
- **Prefix Standard**:
  - Primitives: `--color-{family}-{stop}`, `--space-{index}`, `--radius-{size}`, `--font-size-{step}`, `--duration-{speed}`.
  - Semantics: `--color-bg-{role}`, `--color-text-{role}`, `--color-action-{role}`, `--color-status-{role}`.
  - Components: `--{component}-{part}-{state}-{property}` (e.g., `--btn-primary-hover-bg`).
- **No Hardcoded Hex Values**: Component tokens and CSS files must never contain raw hex values. All values inherit through the semantic layer.

---

## 2. Context-Sensitive Density Models

Fine Tuning designs for two contrasting digital environments sharing the same foundational primitives:

```
┌──────────────────────────────────────┬──────────────────────────────────────┐
│  COMFORTABLE DENSITY                 │  COMPACT DENSITY                     │
│  (Public Marketing & Portals)        │  (Production Ops & Data Dashboards)  │
├──────────────────────────────────────┼──────────────────────────────────────┤
│ • Generous spacing (padding: 16-24px)│ • High-density grid (padding: 6-12px)│
│ • Base typography: 16px (1.0rem)     │ • Base typography: 14px (0.875rem)   │
│ • Hero headlines & editorial layouts │ • Dense data rows (height: 36px)     │
│ • Rich stage flares & glassmorphism  │ • Crisp 1px borders, minimal glows   │
│ • Touch targets: 44px minimum        │ • Mouse/desktop targets: 32-36px     │
└──────────────────────────────────────┴──────────────────────────────────────┘
```

### Density Token Mapping

| Token Attribute | Comfortable Token (`.density-comfortable`) | Compact Token (`.density-compact`) |
| :--- | :--- | :--- |
| **Component Padding Y** | `var(--space-3)` (`12px`) | `var(--space-1-5)` (`6px`) |
| **Component Padding X** | `var(--space-4)` (`16px`) | `var(--space-3)` (`12px`) |
| **Card / Surface Padding** | `var(--space-6)` (`24px`) | `var(--space-4)` (`16px`) |
| **Table Row Height** | `48px` | `36px` |
| **Default Body Size** | `var(--font-size-base)` (`16px`) | `var(--font-size-sm)` (`14px`) |
| **Form Input Height** | `44px` | `36px` |
| **Section Gap** | `var(--space-16)` (`64px`) | `var(--space-8)` (`32px`) |

---

## 3. Accessible Dual-Theme Engine (Light & Dark)

### 3.1 Theme Architecture & Surface Mapping

```
[ DARK MODE: Midnight Stage (Default) ]   [ LIGHT MODE: Studio Editorial ]
Canvas:  #070D18 (Obsidian Slate 950)     Canvas:  #FFFFFF (Pure White)
Surface: #0F172A (Slate 900)              Surface: #F8FAFC (Slate 50)
Card:    rgba(15, 23, 42, 0.85)           Card:    #FFFFFF (Drop shadow)
Border:  #1E293B (Slate 800)              Border:  #E2E8F0 (Slate 200)
Text:    #F8FAFC (18.10:1 AAA)            Text:    #0F172A (17.85:1 AAA)
```

### 3.2 WCAG 2.1 Contrast & Accessibility Audit

| Foreground Element | Background Surface | Contrast Ratio | Rating | Required Architectural Rule |
| :--- | :--- | :---: | :---: | :--- |
| **Obsidian (`#070D18`)** | Solar Amber (`#F09320`) | **8.24 : 1** | **✓ AAA** | **MANDATORY**: Button text on Amber fills. Never use white text. |
| **White (`#FFFFFF`)** | Solar Amber (`#F09320`) | `2.36 : 1` | ❌ FAIL | **STRICTLY PROHIBITED**. Unreadable for standard text. |
| **Solar Amber (`#F09320`)** | Obsidian (`#070D18`) | **8.24 : 1** | **✓ AAA** | Permitted for dark mode titles, badges, and glowing accents. |
| **Text-Safe Teal (`#2B5E70`)** | White (`#FFFFFF`) | **7.15 : 1** | **✓ AAA** | **MANDATORY**: Teal text, badges, and links on light mode. |
| **Raw Logo Teal (`#4694B1`)** | White (`#FFFFFF`) | `3.43 : 1` | ❌ Text Fail | Permitted for UI components and graphic shapes ONLY (>3:1). |
| **Slate 900 (`#0F172A`)** | White (`#FFFFFF`) | **17.85 : 1** | **✓ AAA** | Primary body copy and headings in light mode. |
| **Slate 50 (`#F8FAFC`)** | Obsidian (`#070D18`) | **18.10 : 1** | **✓ AAA** | Primary body copy and headings in dark mode. |
| **Emerald (`#10B981`)** | Dark Bg (`rgba(16,185,129,0.12)`) | **6.40 : 1** | **✓ AA** | Live status indicators and confirmed delegate badges. |
| **Crimson (`#EF4444`)** | Dark Bg (`rgba(239,68,68,0.12)`) | **4.91 : 1** | **✓ AA** | High decibel warnings, connection drop alerts. |

### 3.3 High-Contrast & Assistive Technology Provisions
1. **Windows High Contrast / Forced Colors**:
   ```css
   @media (forced-colors: active) {
     :root {
       --color-border-primary: ButtonBorder;
       --color-focus-ring: Highlight;
       --color-action-primary: Highlight;
       --color-action-primary-fg: HighlightText;
     }
     .btn, .input {
       forced-color-adjust: none;
       border: 2px solid ButtonText;
     }
   }
   ```
2. **Keyboard Focus Indicator**:
   - Every interactive control must exhibit a persistent 2px focus ring:
     `outline: var(--border-width-thick) solid var(--color-focus-ring);` with `outline-offset: 2px;`.
   - Never use `outline: none` without immediate replacement.
3. **Scroll Padding Prevention**:
   - `html { scroll-padding-top: 80px; }` prevents sticky headers from obscuring focused controls during tab navigation.

---

## 4. Spacing, Typography & Layout Systems

### 4.1 4px Numeric Spatial Scale
All margins, paddings, gaps, and offsets are strict multiples of 4px:
- `--space-1`: `4px` (`0.25rem`)
- `--space-1-5`: `6px` (`0.375rem`)
- `--space-2`: `8px` (`0.5rem`)
- `--space-2-5`: `10px` (`0.625rem`)
- `--space-3`: `12px` (`0.75rem`)
- `--space-4`: `16px` (`1.0rem`)
- `--space-5`: `20px` (`1.25rem`)
- `--space-6`: `24px` (`1.5rem`)
- `--space-8`: `32px` (`2.0rem`)
- `--space-10`: `40px` (`2.5rem`)
- `--space-12`: `48px` (`3.0rem`)
- `--space-16`: `64px` (`4.0rem`)
- `--space-20`: `80px` (`5.0rem`)
- `--space-24`: `96px` (`6.0rem`)

### 4.2 Responsive Breakpoints & Container Architecture

| Breakpoint | Viewport Width | Container Max-Width | Column Grid | Primary Purpose |
| :--- | :---: | :---: | :---: | :--- |
| **`xs`** | `375px` | `100%` (padding: 16px) | 1 Column | Mobile phone portrait |
| **`sm`** | `640px` | `600px` | 2 Columns | Mobile landscape / phablet |
| **`md`** | `768px` | `720px` | 6 Columns | Tablet portrait / compact dashboard |
| **`lg`** | `1024px` | `960px` | 12 Columns | Laptop / standard dashboard |
| **`xl`** | `1280px` | `1240px` | 12 Columns | Desktop workstation / hero portfolio |
| **`2xl`** | `1536px` | `1440px` | 12 Columns | Large presentation monitors / multi-monitor rig |

### 4.3 Typography Scale & Fluid Clamping Formulas

| Token Name | Desktop Size | Mobile Size | Line Height | Letter Spacing | Font Family | Default Weight |
| :--- | :---: | :---: | :---: | :---: | :--- | :---: |
| `--font-size-6xl` (Display) | `64px` | `36px` | `1.10` | `-0.02em` | `Syne` | `800` |
| `--font-size-5xl` (H1) | `48px` | `30px` | `1.15` | `-0.015em` | `Outfit` | `700` |
| `--font-size-4xl` (H2) | `36px` | `24px` | `1.20` | `-0.01em` | `Outfit` | `700` |
| `--font-size-3xl` (H3) | `30px` | `20px` | `1.25` | `0em` | `Outfit` | `600` |
| `--font-size-2xl` (H4) | `24px` | `18px` | `1.30` | `0em` | `Outfit` | `600` |
| `--font-size-xl` (H5) | `20px` | `16px` | `1.35` | `0em` | `Outfit` | `600` |
| `--font-size-lg` (Body Large) | `18px` | `16px` | `1.60` | `0em` | `Outfit` | `400` |
| `--font-size-base` (Body) | `16px` | `15px` | `1.50` | `0em` | `Outfit` | `400` |
| `--font-size-sm` (Data/UI) | `14px` | `13px` | `1.45` | `0em` | `Outfit` | `400` / `500` |
| `--font-size-xs` (Badge/Cap) | `12px` | `11px` | `1.40` | `+0.05em` | `Outfit` | `600` |
| `--font-mono-data` | `13px` | `12px` | `1.40` | `0em` | `JetBrains Mono` | `500` |

---

## 5. Shape, Elevation, Overlays & Motion

### 5.1 Corner Radii Hierarchy
- `--radius-none`: `0px` (Square architectural grid tiles)
- `--radius-sm`: `4px` (Checkboxes, micro-tags, tooltips)
- `--radius-md`: `8px` (Buttons, text inputs, dropdown triggers)
- `--radius-lg`: `12px` (Cards, alert banners, KPI blocks)
- `--radius-xl`: `16px` (Modals, media containers, flyout drawers)
- `--radius-2xl`: `24px` (Featured hero showcase banners)
- `--radius-full`: `9999px` (Pill badges, avatars, floating WhatsApp button)

### 5.2 Z-Index Layering Stack
To prevent z-fighting between fixed headers, slide drawers, dropdowns, and modals:
- `--z-base`: `0` (Normal canvas flow)
- `--z-raised`: `10` (Hovered cards, table sticky columns)
- `--z-dropdown`: `1000` (Autocomplete menus, select dropdowns)
- `--z-sticky`: `1100` (Sticky top navigation bar)
- `--z-drawer`: `1200` (Mobile navigation drawer, slide-out filter drawer)
- `--z-modal`: `1300` (Action dialogs, stage booking popups)
- `--z-popover`: `1400` (Floating action menus, datepickers)
- `--z-toast`: `1500` (System notifications, clipboard alerts)

### 5.3 Motion Choreography & Performance
- **Timing Tokens**:
  - `--duration-instant`: `100ms` (Checkbox toggles, radio buttons)
  - `--duration-fast`: `150ms` (Button hovers, link color shifts)
  - `--duration-normal`: `250ms` (Card elevation, dropdown expansion)
  - `--duration-slow`: `400ms` (Slide-in mobile drawer, modal backdrop)
  - `--duration-marquee`: `32s` (Continuous partner logo slider)
- **Standard Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (Snappy spring response).
- **Reduced Motion Guarantee**: When `prefers-reduced-motion: reduce` is detected, all transition durations collapse to `0.01ms` and infinite marquee sliders pause.

---

## 6. Data Visualization & Telemetry Color Conventions

For event telemetry consoles, soundcheck meters, and business analytics:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       DATA VISUALIZATION SEQUENCE                           │
├─────────┬──────────────┬──────────────┬──────────────┬──────────────────────┤
│ Series  │ Token        │ Hex Value    │ Palette Role │ Semantics            │
├─────────┼──────────────┼──────────────┼──────────────┼──────────────────────┤
│ Track 1 │ Amber 500    │ #F09320      │ Primary      │ Main metric / Energy │
│ Track 2 │ Teal 500     │ #4694B1      │ Secondary    │ Secondary channel    │
│ Track 3 │ Dark Teal    │ #2B5E70      │ Tertiary     │ Baseline target      │
│ Track 4 │ Emerald 500  │ #10B981      │ Status Safe  │ Normal operating zone│
│ Track 5 │ Crimson 500  │ #EF4444      │ Status Alert │ Decibel peak limit   │
└─────────┴──────────────┴──────────────┴──────────────┴──────────────────────┘
```

1. **Acoustic Decibel Meter Rule**:
   - $0 - 85\text{ dBA}$: Nordic Teal (`#4694B1`) / Emerald (`#10B981`)
   - $86 - 95\text{ dBA}$: Solar Amber (`#F09320`)
   - $> 95\text{ dBA}$: Crimson Alert (`#EF4444`) with flashing beacon
2. **Chart Accessibility**: Every chart slice or series line must combine color with distinct dash patterns (`solid`, `dashed`, `dotted`) and hover data point markers for color-blind accessibility.

---

## 7. Tailwind CSS v3 / v4 Integration Contract

All design tokens are mapped into Tailwind CSS via [tokens/tailwind.config.cjs](file:///d:/my-project/FineTuning/finetuning.com.bd/tokens/tailwind.config.cjs).

### Configuration Snippet
```javascript
// tailwind.config.cjs
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        brand: {
          amber: {
            DEFAULT: 'var(--color-amber-500)',
            500: 'var(--color-amber-500)',
            600: 'var(--color-amber-600)',
          },
          teal: {
            DEFAULT: 'var(--color-teal-500)',
            500: 'var(--color-teal-500)',
            700: 'var(--color-teal-700)',
          },
        },
        bg: {
          canvas: 'var(--color-bg-canvas)',
          surface: 'var(--color-bg-surface)',
          card: 'var(--color-bg-surface-card)',
        },
        fg: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          amber: 'var(--color-text-brand-amber)',
          teal: 'var(--color-text-brand-teal)',
        },
        border: {
          primary: 'var(--color-border-primary)',
          highlight: 'var(--color-border-highlight)',
        },
      },
      fontFamily: {
        primary: ['var(--font-primary)'],
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
};
```

---

## 8. Gate 2 Review Checklist

```
[✓] ZERO CONFLICTING TOKENS: Primitives -> Semantics -> Component inheritance verified.
[✓] COHERENT TYPE & SPACING: 4px spatial grid and Outfit / Syne / JetBrains Mono hierarchy enforced.
[✓] CONTRAST VERIFIED: 8.24:1 AAA on Amber CTA; 7.15:1 AAA on light-mode text teal (#2B5E70).
[✓] STATUS COLORS DISTINCT: Emerald, Warning Amber, Crimson, and Blue uniquely distinguished.
[✓] DUAL DENSITY VERIFIED: Comfortable (Marketing) vs Compact (Admin telemetry) standardized.
[✓] RESPONSIVE & DARK THEME: Full support for dark-first Midnight Stage and Studio Light modes.
[✓] HIGH CONTRAST & ACCESSIBILITY: Forced-colors and prefers-reduced-motion media queries included.
```

