# Fine Tuning — Architectural Design Decisions & Invariants (`design-decisions.md`)

> **Authoritative Architectural Rationale, Design Invariants & Trade-Off Analysis**  
> *Target Repository: `finetuning.com.bd` | Package: `@finetuning/design-system`*  
> *Version: 2.5.0 | Date: November 2026 | Status: Authoritative Standard*

---

## 1. Architectural Token Stratification (3-Layer Architecture)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       LAYER 1: PRIMITIVE TOKENS                             │
│  Raw scales (Colors, Spatial 4px grid, Radii, Typography, Durations)        │
│  Example: --color-amber-500: #F09320; --space-4: 16px; --radius-md: 8px;    │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ Inherited by
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                       LAYER 2: SEMANTIC TOKENS                              │
│  Purpose-driven aliases mapped to theme contexts (Light, Dark, Density)     │
│  Example: --color-action-primary: var(--color-amber-500);                   │
│           --color-bg-canvas: var(--color-slate-950);                        │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ Inherited by
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                       LAYER 3: COMPONENT TOKENS                             │
│  Scaffolded contracts binding semantic tokens to UI controls & states       │
│  Example: --btn-primary-bg: var(--color-action-primary);                    │
│           --btn-primary-fg: var(--color-action-primary-fg);                 │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Rationale:
- **Decoupling Raw Values from Context**: By decoupling primitive hex scales from semantic roles, themes can be swapped instantly (`[data-theme="light"]`) without altering component code.
- **Single Source of Truth**: Changes to brand colors ripple down through the semantic layer, eliminating the risk of rogue hex values or broken contrast.

---

## 2. The Six Non-Negotiable Invariants

### Invariant 1: Solar Amber Button Text Contrast (8.24:1 WCAG AAA)
- **Decision**: Primary buttons with Solar Amber background (`#F09320`) **MUST ALWAYS HAVE Midnight Obsidian (`#070D18` / `--color-slate-950`) text**.
- **Rationale**: Solar Amber with white text yields a contrast ratio of **2.36:1**, failing WCAG AA (requires 4.5:1) and rendering buttons unreadable for users with low vision or in bright outdoor sunlight. Midnight Obsidian yields **8.24:1**, achieving WCAG AAA compliance.
- **Rule**: White text on Solar Amber buttons is **strictly forbidden**.

### Invariant 2: Nordic Teal Text Contrast on Light Canvas (7.15:1 WCAG AAA)
- **Decision**: Logo teal (`#4694B1`) is restricted to non-text graphic shapes, icons, and dark mode. Light mode body text, hyperlinks, and text labels must use `--color-teal-700` (`#2B5E70`, **7.15:1 AAA**) or `--color-teal-800` (`#1C4453`, **10.49:1 AAA**).
- **Rationale**: `#4694B1` on white canvas yields **2.78:1**, failing WCAG AA. Swapping to `--color-teal-700` preserves brand color harmony while ensuring compliance.

### Invariant 3: Zero Fabricated Proof, Statistics, or Logos
- **Decision**: Never invent fake client reviews, fictitious CMO praise, or synthetic partner logos.
- **Rationale**: Fine Tuning is an authentic corporate event staging firm. Fabricated proof destroys executive trust among conglomerates (BSRM, UCB, BYD). Only verified client engagements from `docs/brand-activities-overview.md` are documented. Where facts are pending, explicit labeled placeholders are mandatory: `[PENDING STAKEHOLDER SUBMISSION: Official Trade License / BIN Number]`.

### Invariant 4: Token Single Source of Truth
- **Decision**: Never hardcode component hex colors directly inside HTML style tags or component stylesheets.
- **Rationale**: Hardcoded hex values create maintenance debt and break theme switching. All colors must reference CSS variables (`var(--color-bg-surface)`). Build tools must read from `tokens/tokens.css` and `tokens/themes.css`.

### Invariant 5: No Silent Token Forking
- **Decision**: Never introduce rogue CSS custom properties without documenting them as justified proposals in `docs/COMPONENT_INVENTORY.md` §6.
- **Rationale**: Rogue tokens fragment the design system. Any token additions must preserve existing primitive scales and theme layers.

### Invariant 6: Single-Screen Constraint for System Pages
- **Decision**: System error screens (404, 500, 503, maintenance) must fit entirely within a single viewport on both desktop and mobile with **zero page scroll** (`height: 100vh; overflow: hidden;`).
- **Rationale**: Operational staging consoles and emergency telemetry error screens must convey immediate situational awareness without requiring scrolling.

---

## 3. Dual-Theme Strategy (Midnight Stage vs Studio Editorial)

- **Dark Mode (Default)**: Event production and arena staging operate in low-light Front of House (FOH) environments. Midnight Obsidian (`#070D18`) evokes arena lighting, curved LED volumes, and acoustic precision.
- **Light Mode (Studio Editorial)**: High-luminance daylight environments require corporate readability. The background shifts to pure white and subtle slate (`#F8FAFC`), while primary typography shifts to `#0F172A` (17.85:1 AAA).

---

## 4. Context-Sensitive Density Models

- **Comfortable Mode (`.density-comfortable`)**: Default for public marketing, blog dispatches, case studies, and corporate briefs. Features 16px base font, 44px touch targets, and generous card padding (24px).
- **Compact Mode (`.density-compact`)**: Default for VIP telemetry consoles, CAD drawing lists, crew management tables, and technical diagnostics. Features 14px base font, 36px table rows, and 16px card padding.

---

## 5. Zero-Framework Architecture & Portability

- **Decision**: Deliver standalone vanilla CSS/JS alongside framework wrappers (React, Vue, Tailwind).
- **Rationale**: Guarantees zero runtime lock-in. Static preview sites can be served via any basic web server (`python -m http.server`, NGINX, Cloudflare Pages, S3) with zero compilation overhead.

