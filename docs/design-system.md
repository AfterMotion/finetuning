# Fine Tuning — Design System Specifications & Tokens

> **Technical Design Tokens & System Specifications**  
> *Target Platforms: Web, Mobile Web, Interactive Displays*  
> *Namespace: `ft-` | CSS Custom Properties & Design Tokens | Version: 1.1.0*

---

## 1. Color Tokens & Scales

```css
:root {
  /* Brand Primary (Solar Amber) */
  --ft-color-amber-50:  #FFF7ED;
  --ft-color-amber-100: #FFEDD5;
  --ft-color-amber-200: #FED7AA;
  --ft-color-amber-300: #FDBA74;
  --ft-color-amber-400: #FB923C;
  --ft-color-amber-500: #F09320; /* CORE BRAND PRIMARY */
  --ft-color-amber-600: #D97706;
  --ft-color-amber-700: #B45309;
  --ft-color-amber-800: #92400E;
  --ft-color-amber-900: #78350F;
  --ft-color-amber-glow: rgba(240, 147, 32, 0.35);

  /* Brand Secondary (Nordic Teal) */
  --ft-color-teal-50:   #F0FDF4;
  --ft-color-teal-100:  #E0F2FE;
  --ft-color-teal-200:  #BAE6FD;
  --ft-color-teal-300:  #7DD3FC;
  --ft-color-teal-400:  #5AB5D4;
  --ft-color-teal-500:  #4694B1; /* CORE BRAND SECONDARY */
  --ft-color-teal-600:  #37778E;
  --ft-color-teal-700:  #2B5E70;
  --ft-color-teal-800:  #204654;
  --ft-color-teal-900:  #16313C;
  --ft-color-teal-glow:  rgba(70, 148, 177, 0.35);

  /* Atmospheric Neutrals - Obsidian Dark Stage (Default) */
  --ft-bg-stage-root:     #070D18;
  --ft-bg-stage-surface:  #0B1320;
  --ft-bg-stage-card:     #111E33;
  --ft-border-subtle:     rgba(70, 148, 177, 0.22);
  --ft-border-focus:      #F09320;
  --ft-text-primary:      #FFFFFF;
  --ft-text-secondary:    #94A3B8;
  --ft-text-muted:        #64748B;
  --ft-text-brand:        #F09320;

  /* Typography Fonts */
  --ft-font-display: 'Outfit', sans-serif;
  --ft-font-heading: 'Syne', sans-serif;
  --ft-font-body:    'Outfit', system-ui, -apple-system, sans-serif;
  --ft-font-mono:    'JetBrains Mono', 'Courier New', monospace;

  /* System Page & Error Tokens */
  --ft-error-glow-amber:  0 0 40px rgba(240, 147, 32, 0.35);
  --ft-error-glow-red:    0 0 40px rgba(239, 68, 68, 0.35);
  --ft-error-glow-teal:   0 0 40px rgba(70, 148, 177, 0.35);
}
```

---

## 2. Typography Hierarchy (v1.1.0 Modern Agency Spec)

| Role | Font Family | Default Weight | Size Scale (clamp formula) | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Display Title** | `'Outfit', sans-serif` | `800` (ExtraBold) | `clamp(1.65rem, 4.4vh, 3.0rem)` | `-0.025em` |
| **Error Code Numeral** | `'Outfit', sans-serif` | `900` (Black) | `clamp(5.0rem, 15vh, 8.5rem)` | `-0.04em` |
| **Agency Display / Header** | `'Syne', sans-serif` | `700` (Bold) | `clamp(1.25rem, 3vh, 2.0rem)` | `-0.01em` |
| **Subtitle / Explanatory** | `'Outfit', sans-serif` | `400` / `500` | `clamp(0.8125rem, 1.8vh, 1.025rem)` | `0` |
| **Status Badge / Descriptor** | `'Outfit', sans-serif` | `700` (Bold) | `clamp(0.6875rem, 1.4vh, 0.75rem)` | `0.12em uppercase` |
| **Timers & Coordinates** | `'JetBrains Mono', monospace` | `700` (Bold) | `clamp(1.2rem, 3vh, 2.2rem)` | `0.02em` |
| **Footer Contact Link** | `'Outfit', sans-serif` | `500` (Medium) | `clamp(0.6875rem, 1.4vh, 0.78125rem)` | `0` |

---

## 3. Strict Single-Screen Viewport Architecture

To guarantee that Maintenance and Error Pages never exhibit unwanted scrolling on any screen:

### 3.1 Layout Specifications
```css
html, body {
  height: 100%;
  height: 100vh;
  height: 100dvh; /* Accounts for mobile dynamic browser bars */
  width: 100%;
  overflow: hidden; /* Zero scrollbar policy */
}

.ft-page-container {
  height: 100%;
  height: 100vh;
  height: 100dvh;
  max-height: 100dvh;
  width: 100%;
  padding: clamp(14px, 2.5vh, 32px) clamp(16px, 4vw, 36px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
```

### 3.2 Responsive Behavior Checklist
- **Mobile Viewports (375px to 428px)**:
  - Header logo height scales smoothly: `clamp(34px, 5.5vh, 48px)`.
  - Hero margins adjust dynamically via `vh` clamp units so content never overflows the vertical viewport.
  - Notification input uses `flex-direction: row` with a rounded pill structure to fit horizontally without line breaks.
- **Desktop Viewports (1024px to 4K)**:
  - Layout is centered with generous breathing room.
  - Stage flares scale proportionally in the background.
  - Zero browser scrollbar appears.
