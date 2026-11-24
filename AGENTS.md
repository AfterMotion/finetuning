# Fine Tuning — Autonomous Agent Guidelines & Operational Charter (`AGENTS.md`)

> **Authoritative Operational Charter, Token Invariants, Quality Gates & Multi-Agent Workflows**  
> *Target Repository: `finetuning.com.bd` | Package: `@finetuning/design-system`*  
> *Organization: Fine Tuning Advertising Agency (Chattogram & Dhaka, Bangladesh)*  
> *Version: 2.5.0 | Date: November 2026 | Status: Authoritative Standard*

---

## 1. System Identity & Mission

**Fine Tuning** (`finetuning.com.bd`) is an experiential advertising agency and full-service turnkey event production firm operating in Chattogram and Dhaka, Bangladesh. The agency specializes in corporate summits, panoramic curved LED volumes, acoustic line-array engineering, architectural exhibition pavilions, youth and business competitions, and sports hospitality.

All autonomous AI agents, coding assistants, and automated pipelines operating within this repository must adhere to the rules, token architectures, and verification standards defined in this document.

---

## 2. Prime Directive: Package-First Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       PRIME DIRECTIVE FOR CODING AGENTS                     │
├─────────────────────────────────────────────────────────────────────────────┤
│ 1. READ FIRST: Always read packages/fine-tuning-design-system/ before       │
│    authoring, modifying, or refactoring any UI component or page.           │
│ 2. REUSE EXISTING: Never create duplicate components or tokens. Reuse from │
│    docs/COMPONENT_INVENTORY.md (65+ catalog items) and tokens/.             │
│ 3. ENFORCE INVARIANTS: Strictly enforce Invariants 1 through 6.             │
│ 4. DOCUMENT FIRST: If a new component variant or token is required,         │
│    document it as a justified proposal in docs/COMPONENT_INVENTORY.md §6    │
│    BEFORE writing implementation code. Never silently fork tokens.          │
│ 5. WCAG AAA & TOUCH: Enforce 8.24:1 AAA contrast on Solar Amber buttons,    │
│    >= 44px touch targets, 2px :focus-visible rings, and Escape dismissal.   │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Hierarchy of Authoritative Sources

When designing, refactoring, or authoring code, agents must consult and respect the following documented hierarchy. Higher documents supersede lower drafts:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       AUTHORITATIVE DOCUMENT HIERARCHY                      │
├─────────────────────────────────────────────────────────────────────────────┤
│ 1. docs/BRAND_GUIDELINES.md   -> Immutable logo facts & core brand rules    │
│ 2. tokens/tokens.css &        -> Primitive scales & semantic dual-theme     │
│    tokens/themes.css             color, spatial, and density definitions    │
│ 3. docs/DESIGN_SYSTEM.md      -> Architectural three-layer token contracts  │
│ 4. docs/COMPONENT_INVENTORY.md-> 65+ catalog specs, APIs & Gate 3 audit    │
│ 5. docs/WEB_PATTERNS.md       -> Production web patterns & layout contracts │
│ 6. docs/WEBSITE_BUILD_CONTEXT -> Authoritative file paths & conflict log    │
│ 7. docs/PAGE_BRIEF.md         -> Strategic conversion goals & proof rules   │
│ 8. tokens/tailwind.config.cjs -> Tailwind CSS v3/v4 token mapping           │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Core Invariant Rules (Non-Negotiable)

Every agent must enforce these six invariants without exception:

### Invariant 1: Solar Amber Button Text Contrast
- **Rule**: Primary buttons with Solar Amber background (`#F09320` / `--color-action-primary`) **MUST ALWAYS HAVE Midnight Obsidian (`#070D18` / `--color-slate-950`) text**.
- **Contrast**: Achieves **8.24:1 WCAG AAA**.
- **Prohibition**: White text on Solar Amber buttons is **strictly forbidden** (2.36:1 fails WCAG AA).

### Invariant 2: Nordic Teal Text Contrast on Light Canvas
- **Rule**: Raw logo teal (`#4694B1`) is restricted to non-text graphic shapes, icons, and dark mode.
- **Contrast**: Light-mode body text, hyperlinks, and text labels must use `--color-teal-700` (`#2B5E70`, **7.15:1 AAA**) or `--color-teal-800` (`#1C4453`, **10.49:1 AAA**).

### Invariant 3: Zero Fabricated Proof, Statistics, or Logos
- **Rule**: Never invent fake client reviews, fictitious CMO praise, or synthetic partner logos.
- **Allowed Proof**: Only verified clients from `docs/brand-activities-overview.md` (BSRM Group, UCB Bank, BYD Auto, Royal Enfield Bangladesh, CPDL, Akij Group, KDS Group, BUET Graduates Club).
- **Placeholders**: Where facts are unverified, agents must use explicit labeled placeholders: `[PENDING STAKEHOLDER SUBMISSION: Official Trade License / BIN Number]`.

### Invariant 4: Token Single Source of Truth
- **Rule**: Never hardcode component hex colors (e.g. `background: #0F172A`) directly inside HTML style tags or component stylesheets.
- **Standard**: Always reference CSS custom properties (`var(--color-bg-surface)`). Build tools must read from `tokens/tokens.css` and `tokens/themes.css`.

### Invariant 5: No Silent Token Forking
- **Rule**: Never introduce rogue CSS custom properties without documenting them as justified proposals in `docs/COMPONENT_INVENTORY.md` §6.
- **Backward Compatibility**: Any token additions must preserve existing primitive scales and theme layers.

### Invariant 6: Single-Screen Constraint for System Pages
- **Rule**: System error screens (403, 404, 500, 503) must fit entirely within a single viewport on both desktop and mobile with **zero page scroll** (`height: 100vh; overflow: hidden;`).

### Invariant 7: Authentic Agency Scope & Authentic Logo
- **Rule**: Fine Tuning is an Experiential Advertising & Turnkey Event Staging Agency (corporate summits, exhibition pavilions, brand launches, stage production). Never author acoustic audio fader/limiter decibel gauges or engineering sensor telemetry cards on commercial marketing pages.
- **Logo Standard**: Always render the official brand logo asset `assets/brand/fine-tuning-logo.png` (or `images/fine-tuning-logo.png`). Never author generic sans-serif text lockups.

### Invariant 8: Clean Public Navigation, Fixed Desktop Header, Footer & Zero Emojis
- **Navigation Rule**: Never expose theme or density toggle buttons in public customer-facing navigation headers. On desktop viewports, the main navigation header **MUST REMAIN PERMANENTLY FIXED AT THE VERY TOP** (`position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;`) so users never lose navigational context while scrolling. Content must be offset with `padding-top: 72px;` to prevent layout jumps.
- **Footer Rule**: Public footers must use a clean 3-column layout (Brand Profile, Capabilities, Operations Bases) set on deep midnight canvas (`background: #040810;` or `#070D18;`) with high-contrast text (`#F8FAFC` headings, `#CBD5E1` links). Lists must have `list-style: none; padding: 0; margin: 0;` (strictly no raw browser bullet points). Never place newsletter forms, internal dev links (`Brand Guidelines`, `Console`), or stakeholder placeholders on public pages.
- **Emoji Prohibition**: Never use raw emojis in buttons, pills, or interactive controls. Always use professional inline SVGs.

### Invariant 9: Absolute Dark-Canvas Text Legibility & Theme-Immune Surface Contracts
- **Rule**: On any dark canvas, section, card, modal, or image overlay (`#070D18`, `#0F172A`, `#1E293B`, dark glass):
  - Primary text, headings, and card titles **MUST ALWAYS BE `#F8FAFC` or `#FFFFFF` (15:1 to 18:1 WCAG AAA)**.
  - Body copy, descriptions, and paragraphs **MUST ALWAYS BE `#E2E8F0` or `#CBD5E1` (9.5:1 to 10.5:1 WCAG AAA)**.
  - Meta tags, badges, and micro-labels **MUST BE `--color-amber-400` (`#F8B24C`), `--color-teal-300` (`#93C6D8`), or `#94A3B8` (minimum 7:1 AAA)**.
- **Strict Prohibition**: Dark navy (`#0F172A`, `#1E293B`), dark slate (`#334155`), and muted dark grey (`#475569`) are **STRICTLY FORBIDDEN** as text colors on any dark background.
- **Theme Immunity**: All dark cards, panels, and sections must explicitly declare their text colors to dark-surface tokens (`color: #F8FAFC !important;` for headings, `color: #CBD5E1 !important;` for copy) so they can NEVER be corrupted by light-theme CSS variables or legacy `localStorage` keys.
- **Production Stage Locking**: Public production pages are permanently locked to `data-theme="dark"` (Midnight Stage). Light-theme toggling is strictly disabled on public consumer routes.

### Invariant 10: Strict Professional Lucide Vector Iconography & Native UI Control Standard
- **Rule**: All icons across all public pages, components, interactive modals, and design guides must strictly use vector **Lucide Icons** rendered on a 24px grid (`stroke-width: 2`, `stroke-linecap: round`, `stroke-linejoin: round`, `stroke: currentColor`).
- **Prohibitions**: Raw emojis (🎯, ⚡, 🏛️), ASCII bracket labels (`(X) Close`), and raw unicode glyphs (`✕`) are **STRICTLY FORBIDDEN** in buttons, cards, pills, badges, and modals.
- **Select Dropdown Standard**: Form select controls must enforce `appearance: none; -webkit-appearance: none;` and embed a Solar Amber Lucide chevron at `right: 16px` with a minimum of `padding-right: 44px;` so dropdown text never collides with or clips the chevron.
- **Close Button Standard**: All modal, drawer, and expandable panel dismissals must use polished circular frosted-glass buttons (`.btn-close-frosted`) housing a 20px Lucide `x` vector SVG with collision-free spacing.

### Invariant 11: Mobile Viewport Zero-Overflow & Compact Density Contract
- **Rule**: On mobile viewports ($\le 640\text{px}$, including iPhone 16 / 393px width):
  - Display titles and `.section-title` must strictly clamp between `1.35rem` and `1.75rem` (`clamp(1.35rem, 5.5vw, 1.75rem)`). Headlines must NEVER exceed `1.75rem` on mobile.
  - All text containers and titles must declare `overflow-wrap: break-word; word-break: break-word; hyphens: auto;` and `max-width: 100%;` to ensure **ZERO horizontal page scroll**.
  - All multi-column grids must responsively collapse to 1 column (`grid-template-columns: 1fr !important;`). Inline non-responsive grids (`grid-template-columns: 1fr 1fr;`) are strictly prohibited.
  - Partner pills and badges must scale down to compact proportions (`padding: 6px 12px; font-size: 0.8125rem;`).
  - Mobile drawer navigation must visually indicate the active page via `.drawer-link.active` with a Solar Amber left accent bar and amber glow.

### Invariant 12: Interactive Pointer System & Brand-Aligned Custom Scrollbar Standard
- **Custom Scrollbar Standard**: Default operating system scrollbars (such as Windows default grey scrollbars) are **STRICTLY PROHIBITED** on all desktop routes.
  - **Track**: Deep Midnight Obsidian (`#040810` / `--color-slate-950`).
  - **Thumb**: Dark slate-indigo floating pill (`#1E293B`) with `border-radius: 9999px;` and an inset border `2px solid #040810`.
  - **Thumb Hover & Active**: Solar Amber (`#F09320`) with a luminous amber halo (`box-shadow: 0 0 10px rgba(240, 147, 32, 0.4)`).
  - **Cross-Browser Requirement**: Declare both WebKit (`::-webkit-scrollbar`) and W3C standard (`scrollbar-width: thin; scrollbar-color: #1E293B #040810;`).
- **Circular Interactive Mouse Follower System**:
  - **Precision Anchor Dot (`.ft-cursor-dot`)**: 6px Solar Amber (`#F09320`) circle tracking cursor coordinates at 0ms latency.
  - **Magnetic Follower Ring (`.ft-cursor-follower`)**: 36px circular frosted ring (`border: 1.5px solid rgba(240, 147, 32, 0.65); background: rgba(240, 147, 32, 0.05);`) smoothly trailing via 60–120fps LERP easing (`factor: 0.18`).
  - **Interactive States**: Follower ring expands smoothly to 58px (`scale(1.6)`) with Solar Amber halo (`box-shadow: 0 0 20px rgba(240, 147, 32, 0.35)`) when hovering interactive elements (`a`, `button`, `.ft-btn`, `.partner-card`, `.work-card-interactive`, `.expertise-card`, `.slider-nav-btn`, `input`, `select`, `textarea`), and contracts to `0.8x` on click.
  - **Mobile Touch Safety**: All custom cursor styles and engines **MUST BE STRICTLY SUPPRESSED** on touch devices via `@media (hover: none) or (pointer: coarse)` to prevent interference with native gesture interactions.

### Invariant 13: Floating Glassmorphic Dock Navigation & Infinity Atmospheric Canvas Standard
- **Infinity Corner Glow Canvas**:
  - Viewports across desktop and mobile must declare a persistent atmospheric infinity ambient canvas (`.stage-glow-infinity`) fixed to the background (`position: fixed; inset: 0; pointer-events: none; z-index: -1;`).
  - Multi-spectral corner glow anchors: Top-Left Nordic Teal (`rgba(70, 148, 177, 0.16)`), Top-Right Solar Amber (`rgba(240, 147, 32, 0.13)`), Bottom-Left Horizon Amber (`rgba(240, 147, 32, 0.09)`), and Bottom-Right Stagecraft Teal (`rgba(43, 94, 112, 0.15)`).
  - Motion: Driven by a gentle 22-second infinite breathing drift (`@keyframes ft-infinity-drift`), providing authentic optical luminescence behind glassmorphic surfaces.
- **Floating Glassmorphic Capsule Dock (Desktop $\ge 1024\text{px}$)**:
  - Header floats 12px below the top viewport edge with sculpted `border-radius: 9999px;`, 24px frosted glass blur, and perimeter amber glow.
  - Nav links are nested inside an illuminated frosted chip track with Solar Amber active pill indicators.
  - On scroll, header transitions to `.scrolled` state with intensified blur and border glow.
- **Luxury Production Dispatch CTA Button**:
  - Replaces flat rectangular buttons with a sculpted luxury amber capsule (`border-radius: 9999px;`).
  - Incorporates a live pulsating dark indicator beacon dot (`• BOOK TECHNICAL BRIEFING`) and an embedded circular obsidian Lucide arrow pod.
  - Strictly preserves **Invariant 1** (Solar Amber `#F09320` background with Midnight Obsidian `#070D18` text, 8.24:1 AAA contrast).

### Invariant 14: Flanking Lateral Slider Architecture, Glassmorphic Control System & Unified Vector CTA Standards
- **Flanking Lateral Slider Navigation**:
  - Carousel navigation controls must never be relegated to an asymmetric corner cluster.
  - Previous (`#hero-slider-prev`) and Next (`#hero-slider-next`) handles must be placed laterally on the viewport edges (`position: absolute; top: 50%; transform: translateY(-50%);`), vertically centered over slides (`left: 24px;` and `right: 24px;` on desktop, `12px` on mobile).
  - Handles must use frosted glassmorphic circular buttons (48px diameter on desktop, 40px on mobile; `backdrop-filter: blur(16px); background: rgba(7, 13, 24, 0.65); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 50%;`) illuminating to Solar Amber with an ambient amber halo on hover.
  - Continuous 6-second rotation (`6000ms`) with pause-on-hover and touch swipe support is mandatory.
- **Glassmorphic Button & Surface Architecture**:
  - Secondary action buttons and controls must specify translucent frosted glass (`background: rgba(255, 255, 255, 0.06); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.14); border-radius: 9999px;`) to achieve authentic optical depth above stage canvas.
- **Enterprise Partner Grid Alignment & Anti-Collision**:
  - Partner logo/monogram slots must enforce fixed 44px $\times$ 44px square geometry (`flex-shrink: 0; border-radius: 8px;`) with clean `Outfit` typography.
  - Partner text containers must declare `flex: 1; min-width: 0;` with responsive card padding (`padding: 14px 18px;`) to guarantee zero text collision and zero horizontal clipping across all breakpoints.
- **Strict Prohibition of Raw ASCII Button Arrows**:
  - Literal characters such as `>`, `->`, or `&gt;` are **STRICTLY FORBIDDEN** inside action buttons (including contact form submissions).
  - All primary action buttons must embed the authoritative circular obsidian Lucide arrow pod (`width: 32px; height: 32px; border-radius: 50%; background: #070D18; color: #F09320;`) housing vector arrow SVG `→`.

---

## 5. Multi-Stack Code Implementation Examples

Future coding agents should refer to these stack-specific implementations:

### 5.1 HTML / CSS Cascade Implementation
```html
<button type="button" class="ft-btn ft-btn-primary ft-btn-md">
  <span>Launch Production Brief</span>
</button>

<style>
.ft-btn-primary {
  background-color: var(--color-action-primary);
  color: var(--color-slate-950) !important; /* Invariant 1: 8.24:1 AAA */
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold);
  height: var(--btn-h-md);
  padding: 0 var(--btn-px-md);
  border-radius: var(--radius-md);
}
.ft-btn-primary:hover {
  background-color: var(--color-action-primary-hover);
  transform: translateY(-1px);
}
.ft-btn-primary:focus-visible {
  outline: 2px solid var(--color-focus-ring);
  outline-offset: 2px;
}
</style>
```

### 5.2 Tailwind CSS Implementation
```html
<button class="bg-[#F09320] hover:bg-[#D47911] text-[#070D18] font-bold h-10 px-4 rounded-lg transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#F09320] focus:ring-offset-2 focus:ring-offset-[#070D18] flex items-center gap-2">
  <span>Book Technical Briefing</span>
  <span>→</span>
</button>
```

### 5.3 React / Next.js (TypeScript) Implementation
```tsx
import React from 'react';

export const PrimaryButton: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({
  children,
  onClick,
}) => (
  <button
    onClick={onClick}
    className="inline-flex items-center justify-center font-bold h-10 px-4 rounded-lg bg-[#F09320] hover:bg-[#D47911] text-[#070D18] focus:outline-none focus:ring-2 focus:ring-[#F09320] focus:ring-offset-2 transition-all hover:-translate-y-0.5"
    style={{ fontFamily: 'var(--font-primary, Outfit, sans-serif)' }}
  >
    {children}
  </button>
);
```

### 5.4 Vue 3 (Single File Component) Implementation
```vue
<script setup lang="ts">
defineProps<{ disabled?: boolean }>();
const emit = defineEmits<{ (e: 'click', ev: MouseEvent): void }>();
</script>

<template>
  <button
    type="button"
    :disabled="disabled"
    class="ft-btn-primary"
    @click="(e) => emit('click', e)"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.ft-btn-primary {
  background-color: var(--color-action-primary, #F09320);
  color: var(--color-slate-950, #070D18) !important;
  font-family: var(--font-primary, 'Outfit', sans-serif);
  font-weight: 700;
  height: 40px;
  padding: 0 16px;
  border-radius: var(--radius-md, 8px);
  border: none;
  cursor: pointer;
  transition: all 150ms ease;
}
.ft-btn-primary:hover {
  background-color: var(--color-action-primary-hover, #D47911);
  transform: translateY(-1px);
}
.ft-btn-primary:focus-visible {
  outline: 2px solid var(--color-focus-ring, #F09320);
  outline-offset: 2px;
}
</style>
```

---

## 6. Multi-Agent Delegation Protocols

When multiple autonomous agents collaborate on this repository, work must be partitioned by specialty:

```
                           [ COORDINATOR AGENT ]
                                     │
           ┌─────────────────────────┼─────────────────────────┐
           ▼                         ▼                         ▼
   [ UI BUILDER AGENT ]    [ TOKEN AUDITOR AGENT ]   [ A11Y & QA AGENT ]
   - Authors semantic HTML - Audits CSS variables    - Verifies contrast
   - Implements patterns   - Validates DTCG JSON     - Verifies keyboard flow
   - Wires up vanilla JS   - Enforces token aliases  - Validates ARIA tags
```

1. **UI Builder Agent**: Owns HTML page structure, layout composition, pattern implementation from `docs/WEB_PATTERNS.md`, and responsive styling.
2. **Token Auditor Agent**: Inspects stylesheets and templates to ensure 100% token adherence, zero hardcoded hex values, and valid DTCG JSON schemas.
3. **A11y & QA Agent**: Validates WCAG 2.1 AA/AAA contrast ratios, verifies touch targets (>= 44px), tests keyboard focus trapping, and audits screen-reader labels.

---

## 7. Future-Page Authoring Prompt Template

When directing an agent to build a new page, use this standardized prompt:

```markdown
Build a new page for Fine Tuning (finetuning.com.bd) titled "[PAGE TITLE]".
Target route: "[PAGE ROUTE]".
Adhere strictly to AGENTS.md, docs/BRAND_GUIDELINES.md, tokens/tokens.css, tokens/themes.css, and docs/WEB_PATTERNS.md.

Requirements:
1. Package First: Consult packages/fine-tuning-design-system/ and reuse existing components from docs/COMPONENT_INVENTORY.md.
2. CSS Cascade: Link tokens/tokens.css, tokens/themes.css, and preview/styles.css. Use CSS variables for all component colors.
3. Contrast Invariant: Primary buttons must use Solar Amber (--color-action-primary) with Midnight Obsidian (--color-slate-950) text. Light-mode text teal must use --color-teal-700 (#2B5E70).
4. Header & Navigation: Include sticky navigation with brand logo, links, theme switcher, and density toggle.
5. Mobile Responsiveness: Support viewports down to 320px with lateral sliding drawer navigation.
6. Proof Integrity: Use real verified client names (BSRM, UCB, BYD, Royal Enfield) and real event photos from images/webp/. Never fabricate stats or quotes.
7. A11y Standards: Include skip link, 2px :focus-visible rings, and Escape key dismissal for modals.
```

---

## 8. Maintenance Runbook

- **Token Auditing**: Run regex checks across all HTML/CSS files to verify zero naked hex codes in component classes:  
  `Select-String -Path "demos/*.html" -Pattern "#[0-9a-fA-F]{3,6}"` (should only match token definitions).
- **Brand Sync Tool**: When editing `docs/brand-guidelines.md`, execute:  
  `node .claude/skills/brand/scripts/sync-brand-to-tokens.cjs --force`
- **Link Verification**: Ensure all internal Markdown links use clickable `file:///` URLs with forward slashes.

---

*Charter established and binding for all autonomous agents in the Fine Tuning repository.*
