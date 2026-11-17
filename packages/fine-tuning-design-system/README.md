# Fine Tuning Design System (`@finetuning/design-system`)

> **Authoritative Portable Design System, Tokens, Components & Page Patterns**  
> *Target Repository: `finetuning.com.bd`*  
> *Organization: Fine Tuning Experiential Advertising & Turnkey Event Staging*  
> *Version: 2.5.0 | Date: November 2026 | Status: Authoritative Standard*

---

## 1. Overview & System Mission

The **Fine Tuning Design System** is an engineering-grade, portable digital standard supporting high-stakes corporate summits, panoramic curved LED volumes, acoustic line-array telemetry, and architectural pavilions across Chattogram and Dhaka, Bangladesh.

It provides a single canonical token hierarchy, dual-theme engine (Midnight Stage dark / Studio Editorial light), context-sensitive density models (Comfortable / Compact), accessible component contracts, and production page blueprints.

---

## 2. Directory Map

```
packages/fine-tuning-design-system/
├── package.json              # Package manifest, metadata & exports (v2.5.0)
├── README.md                 # Authoritative package documentation & usage guide
├── tokens/                   # Canonical Token Layer (Single Source of Truth)
│   ├── index.css             # Terminal bundle importing layers 1, 2, and 3
│   ├── tokens.css            # Layer 1: Primitive scales (color, space, radii, type, z-index)
│   ├── themes.css            # Layer 2: Semantic dual-theme & density layers
│   ├── components.css        # Layer 3: Component tokens (buttons, cards, forms, tables)
│   ├── design-tokens.json    # Canonical W3C DTCG formatted schema
│   └── tailwind.config.cjs   # Pre-configured Tailwind v3/v4 token mapping
├── docs/                     # Authoritative Design & Governance Specifications
│   ├── brand-guidelines.md   # Official emblem geometry, clear space, brand voice
│   ├── design-decisions.md   # Six core invariants & architectural trade-offs
│   ├── component-specs.md    # 65+ catalog item anatomy, tokens, states, accessibility
│   ├── page-patterns.md      # Layout contracts (heroes, telemetry faders, wizards)
│   └── asset-usage.md        # Vector geometry, fonts loading, authentic WebP imagery
├── assets/                   # Official Brand Assets
│   ├── fine-tuning-icon.svg  # Official vector mark (viewBox="0 0 2400 1758")
│   └── fine-tuning-logo.png  # Brand mark preview
└── examples/                 # Production-Fidelity Multi-Stack Implementations
    ├── html-css/             # Standalone semantic HTML5 + CSS token specimen
    ├── tailwind/             # Tailwind utility-first implementation & config
    ├── react-next/           # React / Next.js TypeScript components & ThemeProvider
    └── vue/                  # Vue 3 Single File Components (<script setup lang="ts">)
```

---

## 3. Installation & Usage Quick Start

### Option A: Direct CSS Bundle (HTML / Vanilla / MPA)
Include Google Fonts and the 3-layer CSS token cascade in your `<head>`:

```html
<!-- Google Fonts Triad -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@300;400;500;600;700;800;900&family=Syne:wght@700;800&display=swap" rel="stylesheet">

<!-- Fine Tuning 3-Layer Token Bundle -->
<link rel="stylesheet" href="./tokens/index.css">
```

### Option B: Tailwind CSS v3 / v4 Integration
Import the pre-configured token configuration in your `tailwind.config.cjs`:

```javascript
// tailwind.config.cjs
const ftConfig = require('@finetuning/design-system/tailwind');

module.exports = {
  ...ftConfig,
  content: ['./src/**/*.{html,js,ts,jsx,tsx,vue}'],
};
```

### Option C: React / Next.js (TypeScript)
```tsx
import { Button, TelemetryCard, ConsultationModal, ThemeProvider } from '@finetuning/design-system/react';

export default function FOHConsole() {
  return (
    <ThemeProvider>
      <TelemetryCard
        label="Dante Audio Network"
        value="0.25"
        unit="ms"
        statusText="✓ Zero Packet Drops"
        statusLevel="nominal"
      />
      <Button variant="primary" size="lg">
        Launch Production Brief
      </Button>
    </ThemeProvider>
  );
}
```

### Option D: Vue 3 (Single File Components)
```vue
<script setup lang="ts">
import { Button, TelemetryCard } from '@finetuning/design-system/vue';
</script>

<template>
  <TelemetryCard
    label="Truss Structural Load"
    value="4.8"
    unit="/ 7.5 T"
    statusText="✓ Safety Factor 5.2:1 Compliant"
    statusLevel="nominal"
  />
  <Button variant="primary" size="lg">
    Launch Production Brief
  </Button>
</template>
```

---

## 4. Preview & Local Execution Instructions

To preview all interactive specimens, standalone demos, and static showcases locally:

1. Launch a local web server from the repository root:
   ```bash
   python -m http.server 8080
   ```
2. Navigate in any modern browser:
   - **Component Specimens (HTML/CSS)**: `http://localhost:8080/packages/fine-tuning-design-system/examples/html-css/index.html`
   - **Tailwind Mapping Specimen**: `http://localhost:8080/packages/fine-tuning-design-system/examples/tailwind/index.html`
   - **Production Static Multipage Site**: `http://localhost:8080/preview-static/index.html`
   - **Interactive 9-Demo Suite**: `http://localhost:8080/demos/marketing-homepage.html`
   - **Design System Specimen Viewer**: `http://localhost:8080/design-system/index.html`

---

## 5. Non-Negotiable Invariants & Change Control

All human engineers and AI coding agents operating on this repository must enforce these rules:

1. **Invariant 1: Solar Amber Button Text Contrast (8.24:1 AAA)**  
   Buttons with Solar Amber background (`#F09320`) **MUST ALWAYS HAVE Midnight Obsidian (`#070D18`) text**. White text is **strictly forbidden**.
2. **Invariant 2: Nordic Teal on Light Canvas (7.15:1 AAA)**  
   Light mode body text and links must use `--color-teal-700` (`#2B5E70`) or `--color-teal-800` (`#1C4453`).
3. **Invariant 3: Zero Fabricated Proof**  
   Never invent fake client reviews, fictitious CMO praise, or synthetic partner logos. Only real verified clients (BSRM Group, UCB Bank, BYD Auto, Royal Enfield Bangladesh). Where unverified, use `[PENDING STAKEHOLDER SUBMISSION: Official Trade License / BIN Number]`.
4. **Invariant 4: Token Single Source of Truth**  
   Never hardcode component hex colors directly. Always reference CSS variables (`var(--color-...)`).
5. **Invariant 5: No Silent Token Forking**  
   New tokens must be documented as justified proposals in `COMPONENT_INVENTORY.md` §6 before implementation.
6. **Invariant 6: Single-Screen Constraint for System Pages**  
   System error screens (404, 500, 503, maintenance) must fit within a single viewport with **zero page scroll** (`height: 100vh; overflow: hidden;`).

---

## 6. Master Component Coverage Matrix (65+ Catalog Items)

| ID | Component Name | Implementation Tier | Token Binding | Supported Stacks |
| :--- | :--- | :---: | :--- | :--- |
| **ACT-01** | Primary Button (Solar Amber) | `[Production-Ready]` | `--color-action-primary` | HTML/CSS, Tailwind, React, Vue |
| **ACT-02** | Secondary Button (Nordic Teal) | `[Production-Ready]` | `--color-action-secondary` | HTML/CSS, Tailwind, React, Vue |
| **ACT-03** | Outline Button | `[Production-Ready]` | `--color-action-outline-border` | HTML/CSS, Tailwind, React, Vue |
| **ACT-04** | Destructive Button | `[Production-Ready]` | `--color-action-destructive` | HTML/CSS, Tailwind, React, Vue |
| **ACT-05** | Text Links & Arrow Links | `[Production-Ready]` | `--color-action-primary` | HTML/CSS, Tailwind |
| **ACT-06** | Icon Button | `[Production-Ready]` | `--color-action-ghost-hover-bg` | HTML/CSS, Tailwind, React, Vue |
| **ACT-07** | Split Button | `[Interactive Specimen]` | `--btn-*`, `--z-dropdown` | HTML/CSS |
| **ACT-08** | Floating Action Button (FAB) | `[Production-Ready]` | `--color-emerald-500` | HTML/CSS, Tailwind |
| **ACT-09** | Button Groups & Segmented Bar | `[Interactive Specimen]` | `--color-border-primary` | HTML/CSS, React |
| **ACT-10** | Toggles & Toolbar Controls | `[Interactive Specimen]` | `--color-action-primary` | HTML/CSS |
| **ACT-11** | Status Indicators & Beacons | `[Production-Ready]` | `--color-status-*` | HTML/CSS, Tailwind, React, Vue |
| **ACT-12** | Badges & Notification Counters | `[Production-Ready]` | `--badge-*`, `--color-status-*` | HTML/CSS, Tailwind |
| **ACT-13** | Chips & Removable Tags | `[Interactive Specimen]` | `--radius-full`, `--space-2` | HTML/CSS, Tailwind |
| **ACT-14** | Avatars & Avatar Groups | `[Interactive Specimen]` | `--radius-full`, `--space-8` | HTML/CSS |
| **ACT-15** | Progress Bars & Progress Rings | `[Production-Ready]` | `--color-brand-primary` | HTML/CSS, Tailwind |
| **ACT-16** | Skeletons & Spinners | `[Production-Ready]` | `--duration-normal` | HTML/CSS |
| **ACT-17** | Alerts & Banners | `[Production-Ready]` | `--color-status-*-bg` | HTML/CSS, Tailwind |
| **ACT-18** | Toast Notification (Snackbar) | `[Production-Ready]` | `--z-toast`, `--shadow-lg` | HTML/CSS, React |
| **ACT-19** | Inline Notices | `[Production-Ready]` | `--color-status-info-*` | HTML/CSS |
| **ACT-20** | Empty States & Confirmation | `[Production-Ready]` | `--color-text-muted` | HTML/CSS |
| **FRM-01** | Form Field & Labels | `[Production-Ready]` | `--font-size-sm`, `--space-1-5` | HTML/CSS, Tailwind, React, Vue |
| **FRM-02** | Text, Email, Password Inputs | `[Production-Ready]` | `--input-*`, `--density-*` | HTML/CSS, Tailwind, React, Vue |
| **FRM-03** | Number Stepper & Phone Input | `[Interactive Specimen]` | `--font-mono`, `--space-2` | HTML/CSS, React |
| **FRM-04** | Textarea (Character Counter) | `[Production-Ready]` | `--input-radius`, `--space-3` | HTML/CSS, Tailwind |
| **FRM-05** | Select Dropdown | `[Production-Ready]` | `--input-*`, `--density-*` | HTML/CSS, Tailwind, React, Vue |
| **FRM-06** | Checkbox & Radio Controls | `[Production-Ready]` | `--color-action-primary` | HTML/CSS, Tailwind |
| **FRM-07** | Interactive Range Slider | `[Production-Ready]` | `--color-action-primary` | HTML/CSS, React |
| **FRM-08** | Multi-Item Gear Selector Cards| `[Production-Ready]` | `--card-*`, `--color-action-primary` | HTML/CSS, React |
| **NAV-01** | Sticky Global Navigation | `[Production-Ready]` | `--glass-*`, `--z-sticky` | HTML/CSS, React |
| **NAV-02** | Mobile Sliding Drawer | `[Production-Ready]` | `--z-drawer`, `--color-bg-canvas` | HTML/CSS, React |
| **NAV-03** | Horizontal Filter Pills | `[Production-Ready]` | `--radius-full`, `--color-amber-500`| HTML/CSS, Tailwind |
| **NAV-04** | Tabbed Segmented Switcher | `[Production-Ready]` | `--color-bg-surface-elevated` | HTML/CSS, React |
| **NAV-05** | Breadcrumbs Strip | `[Production-Ready]` | `--font-mono`, `--color-text-muted`| HTML/CSS |
| **NAV-06** | Pagination Controls | `[Production-Ready]` | `--btn-*` | HTML/CSS |
| **CNT-01** | Elevated Content Card | `[Production-Ready]` | `--card-*` | HTML/CSS, Tailwind, React, Vue |
| **CNT-02** | Stage Flare Hero Container | `[Production-Ready]` | `--stage-glow`, `--font-display` | HTML/CSS |
| **CNT-03** | Split Section Layout | `[Production-Ready]` | `--container-xl` | HTML/CSS |
| **CNT-04** | Accordion FAQ Drawer | `[Production-Ready]` | `--color-bg-surface-elevated` | HTML/CSS |
| **CNT-05** | Single-Screen System Box | `[Production-Ready]` | `100vh`, `overflow: hidden;` | HTML/CSS |
| **DTA-01** | Technical Specification Table| `[Production-Ready]` | `--table-*`, `overflow-x: auto` | HTML/CSS |
| **DTA-02** | Monospace Data Cell (`.mono`) | `[Production-Ready]` | `--font-mono`, `--color-action-primary`| HTML/CSS, Tailwind |
| **DTA-03** | Metric Stat Tile | `[Production-Ready]` | `--font-display`, `--color-slate-50`| HTML/CSS, Tailwind, React, Vue |
| **DTA-04** | Live Stage Activity Feed | `[Interactive Specimen]` | `--font-mono`, `--color-emerald-500`| HTML/CSS |
| **DTA-05** | Soundcheck Decibel Fader | `[Production-Ready]` | `--color-status-*`, `--font-mono` | HTML/CSS, React |
| **DTA-06** | Vector Line/Area Chart | `[Interactive Specimen]` | SVG, `--color-amber-500` | HTML/CSS |
| **DTA-07** | Client-Side CSV Exporter | `[Production-Ready]` | JavaScript Blob Engine | HTML/CSS, JS |
| **OVL-01** | Consultation Modal Dialog | `[Production-Ready]` | `--modal-*`, `--z-modal` | HTML/CSS, React, Vue |
| **OVL-02** | Destructive Confirmation Box | `[Production-Ready]` | `--color-action-destructive` | HTML/CSS, React |
| **OVL-03** | Side-Over Inspector Drawer | `[Production-Ready]` | `--drawer-*`, `--z-drawer` | HTML/CSS |
| **OVL-04** | Popovers & Tooltips | `[Interactive Specimen]` | `--z-popover` | HTML/CSS |
| **SYS-01** | 404 Radio Frequency Screen | `[Production-Ready]` | Single-screen 100vh | HTML/CSS |
| **SYS-02** | 500 Signal Disruption Screen | `[Production-Ready]` | Single-screen 100vh | HTML/CSS |
| **SYS-03** | 503 Recalibration Screen | `[Production-Ready]` | Single-screen 100vh | HTML/CSS |
| **SYS-04** | Maintenance Warehouse Screen | `[Production-Ready]` | Single-screen 100vh | HTML/CSS |

*Note: All items marked `[Production-Ready]` have been verified via Playwright automated testing and binary visual inspection across 4 viewports (1440px, 1024px, 768px, 360px).*

