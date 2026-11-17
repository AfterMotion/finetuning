---
name: finetuning-design-system
description: >-
  Comprehensive design system, brand guidelines, and UI component standards for
  Fine Tuning (finetuning.com.bd). Use whenever designing, developing, or refactoring
  any web UI component, landing page, event feature, maintenance page, or error page.
---

# Fine Tuning Design System Skill (v2.5.0)

This skill acts as the single source of truth for **Fine Tuning** (`finetuning.com.bd`), an elite **Experiential Advertising Agency & Turnkey Event Staging Production Firm** headquartered in Chattogram and Dhaka, Bangladesh.

Whenever you are asked to design, build, or update any UI element, page, feature, or component for Fine Tuning, follow the rules, tokens, and code patterns specified here.

---

## 1. Authoritative Document Hierarchy & File Paths

Always consult these canonical references before authoring or modifying code:
1. **Brand Guidelines**: `docs/BRAND_GUIDELINES.md` — Immutable logo facts, clear space, brand voice.
2. **Design Tokens Source**: `tokens/tokens.css` (primitives) & `tokens/themes.css` (semantic layers).
3. **DTCG Token Schema**: `tokens/design-tokens.json` (W3C standard format).
4. **Tailwind Config**: `tokens/tailwind.config.cjs` (Tailwind v3/v4 token mapping).
5. **Component Inventory**: `docs/COMPONENT_INVENTORY.md` (65+ catalog items, APIs & Gate 3 audit).
6. **Web Patterns Guide**: `docs/WEB_PATTERNS.md` (Layouts, heroes, modals, drawers, tables, toasts).
7. **Website Build Context**: `docs/WEBSITE_BUILD_CONTEXT.md` (Paths, fonts, imagery rules, conflict resolutions).
8. **Page Brief**: `docs/PAGE_BRIEF.md` (Conversion funnels, visitor journey: understand, trust, do).
9. **Interactive Demos Suite**: `demos/` (9 standalone application prototypes: homepage, search, auth, wizard, dashboard, CRUD, record detail, settings, system pages).

---

## 2. Core Identity, Colors & Contrast Invariants

| Token Name | Hex Code | Strict Contrast Standard | Purpose & Approved Usage |
| :--- | :--- | :---: | :--- |
| `--color-amber-500` | `#F09320` | Core Primary | Mark wings & needle, hero spotlights, primary CTA background. |
| `--color-slate-950` | `#070D18` | **8.24:1 AAA on Amber** | **MANDATORY text color on Solar Amber buttons.** Never use white text on amber. |
| `--color-teal-500` | `#4694B1` | 5.68:1 AA on Dark | Core Secondary: Mark cradle arc, secondary button background, badges. |
| `--color-teal-700` | `#2B5E70` | **7.15:1 AAA on White** | **MANDATORY text teal on white backgrounds.** (Replaces unreadable `#4694B1`). |
| `--color-teal-800` | `#1C4453` | **10.49:1 AAA on White** | High-contrast editorial links and dark teal headings. |
| `--color-slate-900` | `#0F172A` | **17.85:1 AAA on White** | Primary headlines and body copy in Light Mode (`data-theme="light"`). |
| `--color-slate-50` | `#F8FAFC` | **18.10:1 AAA on Dark** | Primary headlines and body copy in Dark Mode (`data-theme="dark"`). |
| `--color-emerald-500`| `#10B981` | Status: Success | WhatsApp FAB background, stage sync beacons, acoustic safe zone (<85 dBA). |
| `--color-crimson-500`| `#EF4444` | Status: Danger | Emergency cutoff button, destructive alerts, overlimit sound warning (>95 dBA). |

---

## 3. Typographic System & Font Pairings

Always load fonts in the `<head>` of any Fine Tuning HTML page:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@300;400;500;600;700;800;900&family=Syne:wght@700;800&display=swap" rel="stylesheet">
```

### Font Usage Rules:
1. **Primary Digital UI Sans (`--font-primary`)**: `'Outfit', system-ui, sans-serif` (weights `300`–`900`). Used for all body copy, navigation links, form labels, inputs, and table content.
2. **Editorial Display Sans (`--font-display`)**: `'Syne', sans-serif` (weights `700`, `800`). Used for hero display headlines, section titles, and case study titles.
3. **Data & Telemetry Mono (`--font-mono`)**: `'JetBrains Mono', monospace` (weights `400`–`600`). Used for decibels (dBA), timestamps, radio call-signs, CSV data, and code tokens.

---

## 4. Non-Negotiable Anti-Patterns

- ❌ **NEVER** put white text on top of Solar Amber (`#F09320`) buttons. Contrast is 2.36:1 (fails WCAG AA). Always use Midnight Obsidian (`#070D18`).
- ❌ **NEVER** use raw `#4694B1` for body copy on light backgrounds. Always use `--color-teal-700` (`#2B5E70`, 7.15:1 AAA).
- ❌ **NEVER** hardcode component hex colors. Always reference CSS variables (`var(--color-*)`).
- ❌ **NEVER** fabricate statistics, client testimonials, or partner logos. Use labeled placeholders (`[PENDING STAKEHOLDER SUBMISSION]`) where data is absent.
- ❌ **NEVER** use generic stock photography. All event photography must come from verified Fine Tuning productions (`images/webp/`).
- ❌ **NEVER** introduce page scrollbars to single-screen system pages (403, 404, 500, 503). They must fit within `100vh`.

---

## 5. Standard Component Class References

```html
<!-- Primary Button (Solar Amber with Mandatory Dark Text) -->
<button class="ft-btn ft-btn-primary ft-btn-md">Book Technical Briefing</button>

<!-- Secondary Button (Nordic Teal with White Text) -->
<button class="ft-btn ft-btn-secondary ft-btn-md">Explore Capabilities</button>

<!-- Outline Button (Text-Safe Teal) -->
<button class="ft-btn ft-btn-outline ft-btn-md">Inspect Rider</button>

<!-- Status Beacon with Pulse -->
<span class="ft-beacon-dot pulse" style="color: var(--color-emerald-500);"></span>

<!-- Floating Action Button (WhatsApp) -->
<a href="https://wa.me/8801671863685" target="_blank" rel="noopener noreferrer" class="ft-fab" title="Chat on WhatsApp">
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">...</svg>
</a>
```

---

*Skill aligned with Fine Tuning Design System v2.5.0 standards.*
