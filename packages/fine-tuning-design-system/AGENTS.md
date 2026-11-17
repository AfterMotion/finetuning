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
