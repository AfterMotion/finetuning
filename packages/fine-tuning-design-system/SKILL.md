---
name: finetuning-design-system
description: >-
  Comprehensive design system, brand guidelines, and UI component standards for
  Fine Tuning (finetuning.com.bd). Use whenever designing, developing, or refactoring
  any web UI component, landing page, event feature, maintenance page, or error page.
---

# Fine Tuning Design System Skill (v2.5.0)

> **Autonomous Coding Agent Operational Standard for finetuning.com.bd**  
> *Target Repository: `finetuning.com.bd` | Package: `@finetuning/design-system`*  
> *Status: Authoritative Standard | Date: November 2026*

This skill directs all future autonomous coding agents and engineers working on **Fine Tuning** (`finetuning.com.bd`), an elite experiential advertising agency and turnkey event staging production firm operating in Chattogram and Dhaka, Bangladesh.

---

## 1. Prime Directive for Future Agents

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

## 2. Document Hierarchy & Single Source of Truth

When designing or authoring code, respect this authoritative hierarchy:

```
┌─────────────────────────────────────────────────────────────────────────────┐
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

## 3. The Six Non-Negotiable Invariants

1. **Invariant 1: Solar Amber Button Text Contrast (8.24:1 WCAG AAA)**  
   Primary buttons with Solar Amber background (`#F09320` / `--color-action-primary`) **MUST ALWAYS HAVE Midnight Obsidian (`#070D18` / `--color-slate-950`) text**. White text on Solar Amber is **strictly forbidden** (2.36:1 fails WCAG AA).
2. **Invariant 2: Nordic Teal on Light Canvas (7.15:1 WCAG AAA)**  
   Light mode body text, links, and text labels must use `--color-teal-700` (`#2B5E70`) or `--color-teal-800` (`#1C4453`). Logo teal (`#4694B1`) is restricted to non-text graphic marks, icons, and dark mode.
3. **Invariant 3: Zero Fabricated Proof, Statistics, or Logos**  
   Never invent fake client reviews, fictitious CMO praise, or synthetic partner logos. Only real verified clients (BSRM Group, UCB Bank, BYD Auto, Royal Enfield Bangladesh, CPDL, Akij Group, KDS Group, BUET Graduates Club). Where unverified, use explicit placeholders: `[PENDING STAKEHOLDER SUBMISSION: Official Trade License / BIN Number]`.
4. **Invariant 4: Token Single Source of Truth**  
   Never hardcode component hex colors directly inside style tags or stylesheets. Always reference CSS custom properties (`var(--color-bg-surface)`). Build tools must read from `tokens/tokens.css` and `tokens/themes.css`.
5. **Invariant 5: No Silent Token Forking**  
   Never introduce rogue CSS variables without documenting them in `docs/COMPONENT_INVENTORY.md` §6.
6. **Invariant 6: Single-Screen Constraint for System Pages**  
   System error screens (404, 500, 503, maintenance) must fit within a single viewport on both desktop and mobile with **zero page scroll** (`height: 100vh; overflow: hidden;`).

---

## 4. Multi-Stack Implementation Code Examples

Different environments require different framework bindings. The following patterns demonstrate standard component implementation across the four supported stacks:

### 4.1 HTML / CSS Token Cascade Example
```html
<!-- Primary CTA Button (Invariant 1: 8.24:1 AAA) -->
<button type="button" class="ft-btn ft-btn-primary ft-btn-lg">
  <span>Launch Production Brief</span>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
</button>

<style>
.ft-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold);
  border-radius: var(--radius-md);
  border: 1px solid transparent;
  cursor: pointer;
  transition: var(--btn-transition);
}
.ft-btn:focus-visible {
  outline: 2px solid var(--color-focus-ring);
  outline-offset: 2px;
}
.ft-btn-primary {
  background-color: var(--color-action-primary);
  color: var(--color-slate-950) !important; /* Invariant 1 */
}
.ft-btn-primary:hover {
  background-color: var(--color-action-primary-hover);
  transform: translateY(-1px);
}
.ft-btn-lg {
  height: var(--btn-h-lg);
  padding: 0 var(--btn-px-lg);
  font-size: var(--font-size-base);
}
</style>
```

### 4.2 Tailwind CSS Example
```html
<!-- Primary Button via Tailwind Mapping -->
<button class="bg-[#F09320] hover:bg-[#D47911] text-[#070D18] font-bold h-12 px-6 rounded-lg transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#F09320] focus:ring-offset-2 focus:ring-offset-[#070D18] inline-flex items-center gap-2.5">
  <span>Book Technical Briefing</span>
  <span>→</span>
</button>

<!-- Telemetry Card via Tailwind -->
<div class="bg-[#131D31] border border-slate-800 rounded-2xl p-6 shadow-xl space-y-2">
  <div class="flex justify-between items-center text-xs font-mono text-slate-400 uppercase">
    <span>Truss Structural Load</span>
    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10B981]"></span>
  </div>
  <div class="font-display text-3xl font-extrabold text-white">
    4.8 <span class="font-mono text-sm text-slate-400 font-normal">/ 7.5 T</span>
  </div>
  <p class="font-mono text-xs text-emerald-400">✓ Safety Factor: 5.2:1 (Compliant)</p>
</div>
```

### 4.3 React / Next.js TypeScript Example
```tsx
import React, { useEffect, useRef } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...rest
}) => {
  const sizeClasses = {
    sm: 'h-8 px-3 text-xs gap-1.5',
    md: 'h-10 px-4 text-sm gap-2',
    lg: 'h-12 px-6 text-base gap-2.5',
  }[size];

  // Invariant 1: Solar Amber MUST have Midnight Obsidian (#070D18) text
  const variantClasses = {
    primary: 'bg-[#F09320] hover:bg-[#D47911] text-[#070D18] focus:ring-[#F09320]',
    secondary: 'bg-[#4694B1] hover:bg-[#377A93] text-white focus:ring-[#4694B1]',
    outline: 'bg-transparent border border-slate-700 text-slate-200 hover:border-amber-500',
    ghost: 'bg-transparent text-slate-300 hover:bg-slate-800',
    destructive: 'bg-[#EF4444] hover:bg-[#DC2626] text-white focus:ring-[#EF4444]',
  }[variant];

  return (
    <button
      className={`inline-flex items-center justify-center font-bold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${sizeClasses} ${variantClasses} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
```

### 4.4 Vue 3 (Single File Component) Example
```vue
<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
});

const emit = defineEmits<{ (e: 'click', event: MouseEvent): void }>();

const classes = computed(() => ['ft-btn', `ft-btn-${props.variant}`, `ft-btn-${props.size}`]);
</script>

<template>
  <button :type="type" :disabled="disabled" :class="classes" @click="(e) => emit('click', e)">
    <slot></slot>
  </button>
</template>

<style scoped>
.ft-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-primary, 'Outfit', sans-serif);
  font-weight: 700;
  border-radius: var(--radius-md, 8px);
  border: 1px solid transparent;
  cursor: pointer;
  transition: all var(--duration-fast, 150ms) ease;
}
.ft-btn:focus-visible {
  outline: 2px solid var(--color-focus-ring, #F09320);
  outline-offset: 2px;
}
/* Invariant 1: Solar Amber MUST HAVE Midnight Obsidian text */
.ft-btn-primary {
  background-color: var(--color-action-primary, #F09320);
  color: var(--color-slate-950, #070D18) !important;
}
.ft-btn-primary:hover {
  background-color: var(--color-action-primary-hover, #D47911);
  transform: translateY(-1px);
}
.ft-btn-secondary {
  background-color: var(--color-action-secondary, #4694B1);
  color: #FFFFFF;
}
.ft-btn-sm { height: 32px; padding: 0 12px; font-size: 0.75rem; }
.ft-btn-md { height: 40px; padding: 0 16px; font-size: 0.875rem; }
.ft-btn-lg { height: 48px; padding: 0 24px; font-size: 1rem; }
</style>
```

---

## 5. Maintenance Checklist for Future Pages

Before marking any new page or component complete, execute this checklist:
- [ ] Read `packages/fine-tuning-design-system/` to confirm token and component reuse.
- [ ] Verify primary buttons use Solar Amber with Midnight Obsidian text (**8.24:1 AAA**).
- [ ] Verify light-mode body text uses `--color-teal-700` (`#2B5E70`, **7.15:1 AAA**).
- [ ] Verify authentic proofs only (BSRM, UCB, BYD, Royal Enfield); zero fake statistics or logos.
- [ ] Verify skip link and 2px amber `:focus-visible` ring active on keyboard Tab traversal.
- [ ] Test mobile viewport at 360px (`document.documentElement.scrollWidth === window.innerWidth`).
- [ ] Verify single-screen error pages fit within 100vh with zero scroll.
- [ ] Verify zero JavaScript console errors during state machine transitions.
