# Fine Tuning — Asset Usage Rules & Brand Media Guidelines (`asset-usage.md`)

> **Authoritative Vector Geometry, Asset Locations, Imagery Contracts & Typography Loading**  
> *Target Repository: `finetuning.com.bd` | Package: `@finetuning/design-system`*  
> *Version: 2.5.0 | Date: November 2026 | Status: Authoritative Standard*

---

## 1. Official Vector Emblems & Geometry

All vector marks are located in [packages/fine-tuning-design-system/assets/](file:///d:/my-project/FineTuning/finetuning.com.bd/packages/fine-tuning-design-system/assets/) and `assets/brand/`:

```
assets/brand/
├── logo-mark.svg         # Standalone Tuning Fork & Stage Flare vector emblem
├── logo-horizontal.svg   # Primary horizontal header lockup (Emblem + Wordmark)
├── logo-vertical.svg     # Stacked vertical lockup for badges and print
└── favicon.svg           # Scalable square favicon for browsers
```

### 1.1 Geometry Invariants
- **SVG ViewBox**: Must strictly preserve `viewBox="0 0 2400 1758"`.
- **Cradle Arc Path**: Nordic Teal (`#4694B1`), stroke width calibrated to base radius.
- **Tuning Needle Path**: Solar Amber (`#F09320`), golden-ratio vertical axis.
- **Clear Space Parameter**: Minimum $X = 443\text{ SVG units}$ around all bounding edges. In CSS layouts, enforce minimum `48px` margin on desktop and `24px` on mobile.

```html
<!-- Inline Vector Mark Embed -->
<svg class="brand-emblem" viewBox="0 0 2400 1758" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Fine Tuning Official Emblem">
  <!-- Cradle Arc (Nordic Teal) -->
  <path d="M400 800 C400 1400 2000 1400 2000 800" stroke="var(--color-teal-500)" stroke-width="120" stroke-linecap="round"/>
  <!-- Central Needle (Solar Amber) -->
  <path d="M1200 200 L1200 1550" stroke="var(--color-amber-500)" stroke-width="160" stroke-linecap="round"/>
  <circle cx="1200" cy="200" r="100" fill="var(--color-amber-500)"/>
</svg>
```

---

## 2. Web Typography Loading Contract

Every web document or application template must load the official Google Fonts triad in the `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@300;400;500;600;700;800;900&family=Syne:wght@700;800&display=swap" rel="stylesheet">
```

### Font Fallback Stacks:
- **UI Sans**: `'Outfit', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Display Sans**: `'Syne', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Telemetry Mono**: `'JetBrains Mono', 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace`

---

## 3. Authentic Event Photography Manifest

Fine Tuning strictly prohibits synthetic stock photography. All case study assets must reference genuine event production photography stored in `images/webp/` (or `preview-static/assets/images/`):

| File Path | Event / Production Title | Client & Venue | Technical Hardware Shown |
| :--- | :--- | :--- | :--- |
| `images/webp/motor-fest-byd-royalenfield.webp` | 8th Motor Fest Chattogram | BYD Auto & Royal Enfield | Architectural black-anodized box-trussing, curved LED volumes, vehicle reveal spotlights. |
| `images/webp/bsrm-summit.webp` | BSRM CORE ESG Annual Summit | BSRM Group (Radisson Blu) | 38m continuous curved P2.6 LED video wall, 16-box Dante distributed line arrays. |
| `images/webp/bizstar-finale.webp` | BIZSTAR Season V Grand Finale | National Youth Business Plenary | Live multi-tier arena stage, broadcast lighting, computerized timer screens. |
| `images/webp/ucb-retreat.webp` | UCB Annual Corporate Retreat | UCB Bank (Saint Martin Island) | Outdoor weatherproof acoustic towers, synchronized gensets, coastal stage rigging. |

### Image Format & Optimization Standard
- Format: Next-gen **WebP** (`image/webp`) with fallback to JPG/PNG.
- Aspect Ratios: `16:9` for case cards and heroes; `1:1` for specialist avatars.
- Responsive Attributes: Always specify `loading="lazy"`, `decoding="async"`, and explicit `width` and `height` attributes to prevent Cumulative Layout Shift (CLS).

---

## 4. Prohibited Asset Treatments

- **NO Fake Logos**: Never introduce synthetic partner logos (e.g. Acme Corp, Sample Inc).
- **NO Distorted Emblems**: Never stretch, skew, or flip the brand vector mark.
- **NO Drop Shadows on Emblems**: Avoid heavy black drop-shadows on the logo mark; use native ambient obsidian glass (`--glass-bg`) instead.
- **NO White Text on Amber CTAs**: Under Invariant 1, buttons with amber background must always have dark text (`#070D18`).

