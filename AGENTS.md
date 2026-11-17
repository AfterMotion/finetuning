# Fine Tuning — Autonomous Agent Guidelines & Operational Charter (`AGENTS.md`)

> **Authoritative Operational Charter, Token Invariants, Quality Gates & Multi-Agent Workflows**  
> *Target Repository: `finetuning.com.bd`*  
> *Organization: Fine Tuning Advertising Agency (Chattogram & Dhaka, Bangladesh)*  
> *Version: 2.5.0 | Date: November 2026 | Status: Authoritative Standard*

---

## 1. System Identity & Mission

**Fine Tuning** (`finetuning.com.bd`) is an experiential advertising agency and full-service turnkey event production firm operating in Chattogram and Dhaka, Bangladesh. The agency specializes in corporate summits, panoramic curved LED volumes, acoustic line-array engineering, architectural exhibition pavilions, youth and business competitions, and sports hospitality.

All autonomous AI agents, coding assistants, and automated pipelines operating within this repository must adhere to the rules, token architectures, and verification standards defined in this document.

---

## 2. Hierarchy of Authoritative Sources

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

## 3. Core Invariant Rules (Non-Negotiable)

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

## 4. Quality & Testing Gateways

Before completing any task, agents must verify the appropriate quality gate:

### GATE 1 — Brand Identity Sign-Off
- [x] Vector emblem preserves exact geometry (`viewBox="0 0 2400 1758"`).
- [x] Clear space perimeter $X = 443\text{ SVG units}$ respected (min 24px mobile, 48px desktop).
- [x] Brand typography follows `Outfit` (Primary UI), `Syne` (Display), `JetBrains Mono` (Data).

### GATE 2 — Token Architecture Sign-Off
- [x] Primitive layer -> Semantic layer -> Component token inheritance intact.
- [x] Dual-theme engine (`data-theme="dark"` / `data-theme="light"`) verified.
- [x] Density modes (`.density-comfortable` / `.density-compact`) functional.

### GATE 3 — Component & Interaction Sign-Off
- [x] All 65+ catalog components verified across desktop and mobile (<768px).
- [x] Focus rings active on keyboard navigation (`:focus-visible` with 2px amber outline).
- [x] Accessible skip-to-content link present at the top of every page.
- [x] Pressing `Escape` universally dismisses modals, drawers, and popovers.
- [x] Zero console errors during client-side state machine execution.

---

## 5. Multi-Agent Delegation Protocols

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

## 6. Future-Page Authoring Prompt Template

When directing an agent to build a new page, use this standardized prompt:

```markdown
Build a new page for Fine Tuning (finetuning.com.bd) titled "[PAGE TITLE]".
Target route: "[PAGE ROUTE]".
Adhere strictly to AGENTS.md, docs/BRAND_GUIDELINES.md, tokens/tokens.css, tokens/themes.css, and docs/WEB_PATTERNS.md.

Requirements:
1. CSS Cascade: Link tokens/tokens.css, tokens/themes.css, and demos/demo-shell.css. Use CSS variables for all component colors.
2. Contrast Invariant: Primary buttons must use Solar Amber (--color-action-primary) with Midnight Obsidian (--color-slate-950) text. Light-mode text teal must use --color-teal-700 (#2B5E70).
3. Header & Navigation: Include sticky navigation with brand logo, links, theme switcher, and density toggle.
4. Mobile Responsiveness: Support viewports down to 320px with lateral sliding drawer navigation.
5. Proof Integrity: Use real verified client names (BSRM, UCB, BYD, Royal Enfield) and real event photos from images/webp/. Never fabricate stats or quotes.
6. A11y Standards: Include skip link, 2px :focus-visible rings, and Escape key dismissal for modals.
```

---

## 7. Maintenance Runbook

- **Token Auditing**: Run regex checks across all HTML/CSS files to verify zero naked hex codes in component classes:  
  `Select-String -Path "demos/*.html" -Pattern "#[0-9a-fA-F]{3,6}"` (should only match token definitions).
- **Brand Sync Tool**: When editing `docs/brand-guidelines.md`, execute:  
  `node .claude/skills/brand/scripts/sync-brand-to-tokens.cjs --force`
- **Link Verification**: Ensure all internal Markdown links use clickable `file:///` URLs with forward slashes.

---

*Charter established and binding for all autonomous agents in the Fine Tuning repository.*

