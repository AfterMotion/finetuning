# Fine Tuning — Brand Guidelines & Digital Identity Specification

> **Official Design System & Visual Identity Manual for finetuning.com.bd**  
> *Industry: Experiential Advertising Agency & Event Management Production*  
> *Version: 2.5.0 | Date: November 2026 | Status: Official Standard*  
> *Primary Digital Presence: `https://finetuning.com.bd` | Headquarters: Chattogram & Dhaka, Bangladesh*

---

## Quick Reference

| Token / Element | Value / Spec | Notes & Compliance |
| :--- | :--- | :--- |
| **Brand Name** | Fine Tuning (Wordmark: `FineTuning`) | Legal entity: Fine Tuning Advertising Agency |
| **Primary Color (Solar Amber)** | `#F09320` (`rgb(240, 147, 32)`) | Core energy, mark wings & needle, hero CTAs |
| **Secondary Color (Nordic Teal)** | `#4694B1` (`rgb(70, 148, 177)`) | Technical precision, cradle basin, descriptor |
| **Deep Dark Anchor (Midnight Obsidian)** | `#070D18` (`rgb(7, 13, 24)`) | Stage backdrop, high-contrast dark canvas |
| **High-Contrast Dark Teal (Text Safe)** | `#2B5E70` (`rgb(43, 94, 112)`) | **7.15:1 WCAG AAA** on white canvas |
| **Primary Typeface (UI & Headings)** | `Outfit`, system-ui, sans-serif | Geometric modernist agency sans |
| **Editorial Display Typeface** | `Syne`, sans-serif | Sculpted architectural display for stage titles |
| **Monospace / Data Typeface** | `JetBrains Mono`, monospace | Clocks, event telemetry, dashboard metrics |
| **Primary Brand Voice** | Architectural, Celebratory, Meticulous | "Precision in staging, vitality in execution" |
| **Clear Space Requirement** | $X = 1\times\text{Needle Width or F-height}$ | Min 24px digital / 15mm print |
| **Minimum Digital Size** | 160px full lockup / 24px emblem | Vector SVG rendering mandatory for icons |

---

## 1. Brand Foundations & Positioning

### 1.1 Brand Purpose & Positioning
Fine Tuning occupies the nexus between **experiential advertising** and **turnkey event engineering**. Unlike traditional marketing firms that stop at conceptual campaigns, or equipment vendors that only handle staging hardware, Fine Tuning synchronizes:
1. High-concept creative storytelling.
2. Turnkey architectural staging, 3D channel exhibition pavilions, and panoramic LED spatial environments.
3. Live operational and acoustic precision.

```
       [ HIGH-CONCEPT CREATIVE STORYTELLING ]
                         │
                         ▼
          ┌─────────────────────────────┐
          │         FINE TUNING         │
          │   Harmonic Orchestration    │
          └─────────────────────────────┘
                         ▲
                         │
       [ RIGOROUS PRODUCTION & STAGE LOGISTICS ]
```

### 1.2 Core Brand Values
1. **Precision Calibration ("Fine-Tuning")**: Nothing is left to approximation. Every sound decibel, lighting cue, line-array phase, guest journey, and digital pixel is dialed to acoustic and visual equilibrium.
2. **Dynamic Vitality (Solar Amber `#F09320`)**: Infusing every corporate summit, youth competition, and brand launch with infectious warmth, human enthusiasm, and memorable celebration.
3. **Architectural Poise & Trust (Nordic Teal `#4694B1` & Midnight Obsidian `#070D18`)**: Engineering integrity, structural reliability, transparent client partnerships, and calm mastery under high-pressure live production environments.
4. **Contemporary Digital Elegance**: Razor-sharp, uncluttered web and dashboard interfaces that favor speed, direct messaging, and editorial clarity over bloated marketing jargon.

### 1.3 Brand Voice & Personality Framework

| Dimension | We Are | We Are Not | Rationale / Expression |
| :--- | :--- | :--- | :--- |
| **Tone** | Authoritative, composed, welcoming | Arrogant, aloof, or hyper-formal | Speak like veteran stage producers who have mastered the craft and welcome partners into the control room. |
| **Pace** | Direct, purposeful, rhythmic | Verbose, rambling, or bureaucratic | Event professionals value real-time clarity. Give clear answers and direct action channels. |
| **Energy** | Electrifying yet grounded | Gimmicky, hype-driven, or frantic | Confidence comes from flawless rehearsal and acoustic engineering, not artificial superlatives. |
| **Vocabulary** | Crafted, architectural, precise | Generic "360-agency" buzzwords | Use authentic industry vocabulary: *orchestration, acoustic resonance, spatial design, turnkey fabrication, precision cues*. |

### 1.4 Voice by Context

| Context | Voice Modulation | Example Communication |
| :--- | :--- | :--- |
| **Public Portfolio & Case Studies** | Editorial, cinematic, celebratory | *"Engineering the future of mobility: Transforming 8,000 sq.ft of pavilion space for BYD and Royal Enfield at the 8th Motor Fest."* |
| **Direct Client WhatsApp & Inquiries** | Responsive, crisp, hospitable | *"Hello! Fine Tuning production desk here. We've received your summit brief. Let's calibrate your stage specifications."* |
| **Admin Panel & Operations Dashboard** | Functional, high-density, unambiguous | *"Stage A Line-Array: Calibrated at 98.4 dBA. LED Wall Controller: Synced 60Hz. Zero dropped frames."* |
| **System & Error Recovery** | Thematic, calm, solution-oriented | *"Stage Soundcheck in Progress (503): Our audio-visual crew is calibrating server capacity. Returning live in 120 seconds."* |

### 1.5 Content Rules & Forbidden Clichés
- ❌ **Forbidden Clichés**: Never use *"synergistic solutions"*, *"one-stop-shop"*, *"disrupting the space"*, *"game-changing paradigm"*, or *"out of the box"*.
- ❌ **No Generic Contact Friction**: Never force users through 10-field web contact forms. Fine Tuning prioritizes direct WhatsApp conversations (`+880 1671-863685`), direct telephone dialing, and verified physical studio visits.

---

## 2. Logo System & Visual Anatomy

### 2.1 Observed Logo Facts vs. Proposed Design Choices

To preserve absolute brand integrity, we explicitly distinguish between immutable physical attributes of the supplied identity and proposed design system rules:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       IDENTITY ATTRIBUTE CLASSIFICATION                     │
├──────────────────────────────────────┬──────────────────────────────────────┤
│       OBSERVED LOGO FACTS            │       PROPOSED DESIGN CHOICES        │
│       (Immutable Assets)             │       (Design System Standards)      │
├──────────────────────────────────────┼──────────────────────────────────────┤
│ 1. Vector mark in fine-tuning-icon   │ 1. Standard exclusion zone:          │
│    has viewBox="0 0 2400 1758".      │    X = width of central needle       │
│ 2. Exact hex colors:                 │ 2. Minimum digital rendering:        │
│    #F09320 (Orange) & #4694B1 (Blue) │    160px full lockup, 24px icon      │
│ 3. Center needle points downward     │ 3. Modern digital web typography:    │
│    flanked by stepped horizontal     │    Outfit (Sans) + Syne (Display)    │
│    crossbars forming dual "F"s.      │ 4. WCAG AAA accessible high-contrast │
│ 4. Semicircular cradle arc encloses  │    text teal: #2B5E70 (7.15:1)       │
│    the lower half of the needle.     │ 5. Dark mode card container with     │
│ 5. Wordmark uses flared serifs with  │    1px #4694B1 border & stage glow   │
│    Nordic Teal dots on both 'i's.    │ 6. Complete 50-900 tonal scale for   │
│ 6. Sub-descriptor "Advertising       │    CSS variable tokens               │
│    Agency" is a tracked sans-serif.  │ 7. Dedicated admin dashboard token   │
│                                      │    density & status feedback tokens  │
└──────────────────────────────────────┴──────────────────────────────────────┘
```

### 2.2 Visual Anatomy of the Logo

```
                             [X: Upper Wing Margin]
           ┌─────────────────────────────────────────────────────────┐
           │                                                         │
           │      \═══════/       ▲  978, 53      \═══════/          │ <─ [1] Solar Amber Dual "F" Wings
           │       \═════/       /│\               \═════/           │    & Upper Crossbars (#F09320)
           │                    / │ \                                │
           │                   /  │  \                               │ <─ [2] Central Precision Needle /
           │                  /   │   \                              │    Tuning Pointer (Y: 53 -> 1495)
           │                 /    │    \                             │
           │  (41, 358)╭─── ──    │    ── ───╮(2347, 296)            │
           │          │           │           │                      │ <─ [3] Nordic Teal Semicircular
           │          │           │           │                      │    Cradle / Resonant Basin (#4694B1)
           │           ╰─── ───   ▼   ─── ───╯                       │    (Inner arc apex: Y: 1540)
           │                   (1200, 1495)                          │
           │                 \_____________/                         │
           │                   (1278, 1701)                          │
           └─────────────────────────────────────────────────────────┘
```

1. **The Precision Needle & Transducer (`#F09320`)**:
   - Anchored at the apex (`X: 978` to `1421`, `Y: 53`) and tapering down to a single needle coordinate (`X: 1200, Y: 1495`).
   - Represents micro-calibration, frequency tuning, stage focus, and directed operational momentum.
2. **The Symmetrical FT Flight Wings (`#F09320`)**:
   - Two tiers of horizontal stepped wings flanking the needle (`Y: 53-241` and `Y: 607-795`).
   - Abstractly forms the initials **"F"** and **"T"** while evoking an audio VU-meter, equalizer bars, and dynamic stage wings.
3. **The Harmonic Cradle / Cerulean Basin (`#4694B1`)**:
   - A robust geometric arc sweeping from top left (`41, 358`) around the base (`1278, 1701`) up to top right (`2347, 296`).
   - Represents an amphitheater bowl, acoustic dish, and solid infrastructure supporting the creative performance.
4. **The Wordmark Typography ("FineTuning")**:
   - Flared serif styling with bespoke Nordic Teal tittles (dots) on both instances of lowercase `i`.
   - In light backgrounds: Solar Amber lettering (`#F09320`) with Nordic Teal dots (`#4694B1`).
   - In dark backgrounds: Solar Amber lettering glowing with subtle warmth over deep midnight slate.
5. **The Descriptor ("Advertising Agency")**:
   - Clean, geometric all-caps sans-serif with expansive tracking (`letter-spacing: 0.28em` to `0.35em`).
   - Rendered in Nordic Teal (`#4694B1`) for harmonious tonal separation.

### 2.3 Proportions & Mathematical Geometry
- **Aspect Ratio**: $2400 : 1758 \approx 1.365 : 1$ (Emblem Mark).
- **Needle Width to Overall Width**: $\frac{443}{2400} \approx 18.45\%$.
- **Cradle Arc Sweep**: Sweeps an arc of $184^\circ$, cradling $68\%$ of the emblem's total vertical height.

### 2.4 Clear Space (Exclusion Zone)
To protect the visual prominence of the logo, a mandatory clear space must surround the logo at all times:
$$\text{Clear Space } X = \text{Width of the needle apex } (X = 443\text{ SVG units} \approx 18.5\% \text{ of mark width})$$
- **On Web & UI**: Minimum digital padding of **24px** on mobile screens and **48px** on desktop hero sections.
- **On Print**: Minimum physical clearance of **12mm** around all sides.
- No typography, interface buttons, watermark textures, or layout borders may infringe upon this exclusion perimeter.

```
            ┌──────────────────────────────────────────────┐
            │                  [  X  ]                     │
            │        ┌────────────────────────────┐        │
            │        │                            │        │
    [  X  ] │        │     [ BRAND LOCKUP ]       │ [  X  ]│
            │        │                            │        │
            │        └────────────────────────────┘        │
            │                  [  X  ]                     │
            └──────────────────────────────────────────────┘
```

### 2.5 Minimum Size Specifications

| Lockup Variant | Digital Minimum (px) | Print Minimum (mm) | Recommended Context |
| :--- | :--- | :--- | :--- |
| **Primary Full Lockup (Stacked)** | $160\text{px}$ width | $45\text{mm}$ width | Editorial headers, invoices, pitch decks |
| **Horizontal Linear Lockup** | $140\text{px}$ width | $38\text{mm}$ width | Sticky website navbars, admin headers |
| **Standalone Icon Emblem** | $24\text{px} \times 24\text{px}$ | $8\text{mm} \times 8\text{mm}$ | Favicon, app icons, mobile avatar, tab indicators |
| **Favicon Specific** | $16\text{px} \times 16\text{px}$ | N/A | Favicon (`favicon.ico` / `.svg`) |

### 2.6 Approved Brand Variants

```
Variant A: Full Primary (Stacked)       Variant B: Horizontal Linear Lockup
┌────────────────────────────────┐     ┌────────────────────────────────────────────────┐
│          FineTuning            │     │   [EMBLEM]   FineTuning                        │
│      Advertising Agency        │     │              ADVERTISING AGENCY                │
│            [EMBLEM]            │     └────────────────────────────────────────────────┘
└────────────────────────────────┘

Variant C: Standalone Monogram          Variant D: Midnight Stage Glow Card
┌────────────────────────────────┐     ┌────────────────────────────────────────────────┐
│                                │     │ ┌─ (Amber Flare) ────────────────────────────┐ │
│            [EMBLEM]            │     │ │        FineTuning                          │ │
│                                │     │ │    Advertising Agency                      │ │
└────────────────────────────────┘     │ │         [EMBLEM]         (Teal Glow)       │ │
                                       │ └────────────────────────────────────────────┘ │
                                       └────────────────────────────────────────────────┘
```

1. **Variant A — Primary Stacked (Default Agency Lockup)**: Wordmark top, descriptor middle, emblem bottom. Suitable for hero centerpieces, documents, and formal branding.
2. **Variant B — Horizontal Linear (Digital Navigation Standard)**: Emblem on left, followed by "FineTuning" and "Advertising Agency" stacked on the right. Mandated for sticky headers and dashboards.
3. **Variant C — Standalone Emblem**: Sole icon used when brand context is already established (favicons, profile avatars, dashboard collapsed sidebars).
4. **Variant D — Midnight Stage Glow**: Set against `#070D18` with ambient Solar Amber top-left flare, Nordic Teal bottom-right rim glow, and subtle 1px border. Mandated for social OpenGraph cards and dark UI containers.
5. **Variant E — High-Contrast Monochrome**: Solid black (`#000000`) on white paper; solid white (`#FFFFFF`) on dark apparel or single-color foil print.

### 2.7 Incorrect Usage & Brand Anti-Patterns

| Violation | Description | Visual Representation | Correct Remedy |
| :--- | :--- | :--- | :--- |
| **❌ Aspect Distortion** | Stretching or squishing logo horizontally or vertically | `[  <=> LOGO <=>  ]` | Lock aspect ratio $1.365 : 1$ at all times. |
| **❌ Angle Rotation** | Tilting the emblem or wordmark at arbitrary angles | `[ / LOGO / ]` | Always position on horizontal $0^\circ$ baseline. |
| **❌ Drop Shadows** | Adding heavy raster drop shadows or fuzzy blur | `[ LOGO + fuzzy black blur ]` | Use clean vector edges; stage glow allowed only on background. |
| **❌ Color Modification** | Changing amber to red, or teal to purple | `[ LOGO in pink/neon green ]` | Stick strictly to `#F09320` and `#4694B1`. |
| **❌ Element Separation** | Floating the needle away from the teal cradle | `[ Needle detached above arc ]` | Emblem components must remain locked in geometry. |
| **❌ Low-Contrast Placement** | Placing colored logo directly on raw busy photography | `[ Logo over multi-colored concert ]` | Place on solid surface or frosted backdrop (`blur(12px)`). |
| **❌ Inverted Fill** | Inverting colors (e.g. blue needle, orange cradle) | `[ Teal needle + Amber cradle ]` | Never invert primary assignments. |
| **❌ Re-typing Descriptor** | Setting descriptor in Comic Sans, Papyrus, or serif | `[ FineTuning in Times New Roman ]` | Use official vector asset or approved `Outfit` font. |

---

## 3. Comprehensive Color Architecture

### 3.1 Primary Brand Palette

| Color Swatch | Token Name | HEX | RGB | HSL | Core Role | Contrast vs `#FFFFFF` | Contrast vs `#070D18` |
| :---: | :--- | :---: | :---: | :---: | :--- | :---: | :---: |
| 🟧 | `--color-amber-500` (Primary) | `#F09320` | `240, 147, 32` | `33°, 88%, 53%` | Primary brand mark, primary CTAs, active highlights | 2.36:1 *(Non-text only)* | **8.24:1 (AAA)** |
| 🟧 | `--color-amber-600` (Primary Dark) | `#C9730D` | `201, 115, 13` | `33°, 88%, 42%` | Amber CTA hover state, pressed borders | 3.25:1 *(Large text)* | **5.98:1 (AA)** |
| 🟧 | `--color-amber-400` (Primary Light) | `#F8B24C` | `248, 178, 76` | `35°, 92%, 64%` | Stage glow accents, ambient spotlights | 1.84:1 | **10.58:1 (AAA)** |
| 🟦 | `--color-teal-500` (Secondary) | `#4694B1` | `70, 148, 177` | `196°, 43%, 48%` | Brand descriptor, cradle basin, secondary badges | 3.43:1 *(UI & Graphic)* | **5.68:1 (AA)** |
| 🟦 | `--color-teal-700` (Text-Safe Teal) | `#2B5E70` | `43, 94, 112` | `196°, 45%, 30%` | **High-contrast text on white** (links, tags) | **7.15:1 (AAA)** | 2.72:1 |
| 🟦 | `--color-teal-800` (Deep Teal) | `#1C4453` | `28, 68, 83` | `196°, 50%, 22%` | Maximum-contrast editorial headings in light mode | **10.49:1 (AAA)** | 1.86:1 |

> [!CRITICAL]
> **WCAG Contrast Rule on `#F09320`**:
> Raw Solar Amber (`#F09320`) on a pure white background achieves only **2.36:1** contrast, failing WCAG AA for body text.
> - **Light Mode CTA Rule**: Primary buttons filled with `#F09320` **MUST** use Midnight Obsidian (`#070D18`) text, achieving **8.24:1 (AAA)** contrast. Never use white text on an Amber button.
> - **Light Mode Text Rule**: For teal-colored text on light cards, use **`#2B5E70`** (7.15:1 AAA).

### 3.2 Extended Tonal Scales (Design Tokens)

#### Solar Amber Scale (`--color-amber-xx`)
```css
--color-amber-50:  #FEF8EE; /* Subtle warm tint, hover card background */
--color-amber-100: #FDF0D6; /* Selected chip highlight, badge background */
--color-amber-200: #FADDAA; /* Warm borders, progress tracks */
--color-amber-300: #F7C577; /* Disabled button states, secondary highlights */
--color-amber-400: #F4AB44; /* High-vibrancy display accent */
--color-amber-500: #F09320; /* BASE BRAND COLOR */
--color-amber-600: #D47911; /* Hover state for primary buttons */
--color-amber-700: #A85A09; /* Active pressed state, dark borders */
--color-amber-800: #7C3E04; /* Deep dark amber accent */
--color-amber-900: #4B2400; /* Dark contrast shadow */
```

#### Nordic Teal Scale (`--color-teal-xx`)
```css
--color-teal-50:  #F0F7FA; /* Very light cool background */
--color-teal-100: #DCEDF3; /* Badge background, notification tint */
--color-teal-200: #BADCE7; /* Subtle border for info cards */
--color-teal-300: #93C6D8; /* Secondary icons in light mode */
--color-teal-400: #6BAEC6; /* Vibrant graphic highlight */
--color-teal-500: #4694B1; /* BASE BRAND COLOR */
--color-teal-600: #377A93; /* Subtle hover state */
--color-teal-700: #2B5E70; /* WCAG AAA Accessible Text on White (7.15:1) */
--color-teal-800: #1E4452; /* Deep slate-teal heading */
--color-teal-900: #122B35; /* Darkest teal border */
```

### 3.3 Neutral Palette for Dual Themes & Dark-Canvas Legibility

| Role | Light Theme (Studio Editorial) | Dark Theme (Midnight Stage) | Notes & Contrast |
| :--- | :---: | :---: | :--- |
| **Canvas / Background** | `#FFFFFF` | `#070D18` | Base page canvas |
| **Subtle Surface** | `#F8FAFC` | `#0B1320` | Section backgrounds, table striping |
| **Elevated Card** | `#FFFFFF` (Shadow) | `#0F172A` | Cards, popovers, flyout drawers |
| **Border Primary** | `#E2E8F0` | `#1E293B` | Structural dividers, card borders |
| **Border Highlight** | `#CBD5E1` | `#334155` | Focused inputs, hovered cards |
| **Text Primary** | `#0F172A` (17.85:1 AAA) | `#F8FAFC` (18.10:1 AAA) | Mandatory headlines, card titles on dark |
| **Text Secondary** | `#475569` (7.58:1 AAA) | `#CBD5E1` (9.50:1 AAA) | Mandatory body descriptions & copy on dark |
| **Text Muted / Meta** | `#64748B` (4.76:1 AA) | `#94A3B8` (7.25:1 AAA) | Timestamps, tags, captions on dark |

> [!CRITICAL]
> **Invariant 9: Absolute Dark-Canvas Text Legibility & Theme-Immune Surface Contracts**:
> On any dark canvas, section, card, modal, or image overlay (`#070D18`, `#0F172A`, `#1E293B`, dark glass):
> - Primary text and titles **MUST ALWAYS BE `#F8FAFC` or `#FFFFFF` (15:1 to 18:1 WCAG AAA)**.
> - Body copy and descriptions **MUST ALWAYS BE `#E2E8F0` or `#CBD5E1` (9.50:1 to 10.5:1 WCAG AAA)**.
> - Micro-labels, meta badges, and captions **MUST BE `--color-amber-400` (`#F8B24C`), `--color-teal-300` (`#93C6D8`), or `#94A3B8` (minimum 7:1 AAA)**.
> - **Strict Prohibition**: Dark navy (`#0F172A`, `#1E293B`), dark slate (`#334155`), and muted dark grey (`#475569`) are **strictly forbidden** as text colors on any dark background.
> - **Theme Immunity**: All dark cards, panels, and sections must explicitly declare their text colors to dark-surface tokens (`color: #F8FAFC !important;` for headings, `color: #CBD5E1 !important;` for copy) so they can never be corrupted by light-theme CSS variables or legacy `localStorage` keys.

### 3.4 Semantic & Feedback Palette (Dashboards & Forms)

```
           [ SUCCESS ]              [ WARNING ]              [ DANGER ]               [ INFO ]
         #10B981 (Emerald)        #F59E0B (Amber)          #EF4444 (Crimson)        #3B82F6 (Blue)
```

| State | Base HEX | Light Tint (Bg) | Dark Tint (Bg) | Text on Light | Use Case |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **Success** | `#10B981` | `#ECFDF5` | `#064E3B` | `#065F46` | Ticket confirmed, stage live, form validated |
| **Warning** | `#F59E0B` | `#FFFBEB` | `#78350F` | `#92400E` | High decibel alert, low inventory, pending review |
| **Danger / Error** | `#EF4444` | `#FEF2F2` | `#7F1D1D` | `#991B1B` | Disconnected signal, 500 server error, form failure |
| **Info / Notice** | `#3B82F6` | `#EFF6FF` | `#1E3A8A` | `#1D4ED8` | System updates, stage schedule changes, specs |

---

## 4. Typography Pairing & Hierarchy

### 4.1 Digital Font Strategy
While the original print logo features flared serifs, modern web viewports and complex event dashboards require **crystal-clear legibility, optical balancing, and zero raster degradation**. We therefore specify a three-tier web font hierarchy:

1. **Primary Brand & UI Typeface — `Outfit`**:
   - Clean, geometric modernist sans echoing the "Advertising Agency" logo descriptor.
   - Weights: `400` (Regular), `500` (Medium), `600` (SemiBold), `700` (Bold), `800` (ExtraBold).
   - Usage: Primary headlines, UI controls, navigation, data tables, form fields, and body copy.
2. **Editorial Display Accents — `Syne`**:
   - Sculpted, architectural sans engineered specifically for creative agencies and art spaces.
   - Weights: `700` (Bold), `800` (ExtraBold).
   - Usage: Hero case study titles, large section numbers, stage production banners.
3. **Monospace & Coordinates — `JetBrains Mono`**:
   - Monospaced typeface with open counters and clear numeral distinction.
   - Weights: `400` (Regular), `500` (Medium).
   - Usage: Live countdown clocks, ticket QR codes, audio decibel telemetry, server status codes.

### 4.2 Font Loading Specification
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@300;400;500;600;700;800&family=Syne:wght@700;800&display=swap" rel="stylesheet">
```

### 4.3 Type Scale Matrix (Web & Dashboard)

| Element | Desktop Size | Mobile Size | Line Height | Letter Spacing | Font Family | Default Weight |
| :--- | :---: | :---: | :---: | :---: | :--- | :---: |
| **Display Hero** | `64px` (`4.0rem`) | `36px` (`2.25rem`) | `1.1` | `-0.02em` | `Syne` | `800` |
| **Headline 1 (H1)** | `48px` (`3.0rem`) | `30px` (`1.875rem`) | `1.15` | `-0.015em` | `Outfit` | `700` |
| **Headline 2 (H2)** | `36px` (`2.25rem`) | `24px` (`1.5rem`) | `1.2` | `-0.01em` | `Outfit` | `700` |
| **Headline 3 (H3)** | `28px` (`1.75rem`) | `20px` (`1.25rem`) | `1.25` | `0em` | `Outfit` | `600` |
| **Headline 4 (H4)** | `22px` (`1.375rem`) | `18px` (`1.125rem`) | `1.3` | `0em` | `Outfit` | `600` |
| **Body Large** | `18px` (`1.125rem`) | `16px` (`1.0rem`) | `1.6` | `0em` | `Outfit` | `400` |
| **Body Base** | `16px` (`1.0rem`) | `15px` (`0.9375rem`) | `1.5` | `0em` | `Outfit` | `400` |
| **Body Small** | `14px` (`0.875rem`) | `13px` (`0.8125rem`) | `1.45` | `0em` | `Outfit` | `400` / `500` |
| **Caption / Label** | `12px` (`0.75rem`) | `11px` (`0.6875rem`) | `1.4` | `+0.05em` | `Outfit` | `500` |
| **Agency Descriptor** | `13px` (`0.8125rem`) | `11px` (`0.6875rem`) | `1.2` | `+0.28em` | `Outfit` | `600` |
| **Telemetry / Code** | `13px` (`0.8125rem`) | `12px` (`0.75rem`) | `1.4` | `0em` | `JetBrains Mono` | `500` |

### 4.4 Dashboard vs. Public Website Density Rules
- **Public Portfolio Layouts**: Spacious rhythm (`padding: 80px 0`), body copy `18px` with `line-height: 1.65`, generous white space, cinematic imagery.
- **Admin & Stage Operations Dashboards**: High-density rhythm (`gap: 12px` to `16px`), body and data copy `13px` to `14px` with `line-height: 1.35`, monospaced metric values, compact table rows (`height: 38px`), explicit status indicators.

---

## 5. Visual Language, Surfaces, Shapes & Motion

### 5.1 Iconography Standards
- **Grid & Stroke**: 24px grid with consistent 2px stroke width (`stroke-width: 2`, `stroke-linecap: round`, `stroke-linejoin: round`).
- **Color Accent**: Monochromatic base with single Solar Amber (`#F09320`) active highlight or Nordic Teal (`#4694B1`) secondary indicator.
- **Recommended Library**: Lucide Icons or Feather Icons.

### 5.2 Imagery & Photography Principles
1. **Dramatic Live Atmosphere**: Real photographs from high-impact corporate summits (e.g. BSRM CORE ESG), automotive exhibitions (BYD, Royal Enfield at Motor Fest), and large arena gatherings.
2. **Warmth & Precision**: Highlight vibrant stage lighting flares, crisp LED video walls, architectural stall structures, and authentic audience engagement.
3. **No Stock Clichés**: Strictly prohibit generic stock images of disconnected business people shaking hands in generic glass offices.

### 5.3 Surfaces & Glassmorphism Tokens
- **Frosted Modal & Header Backdrop**:
  ```css
  background: rgba(255, 255, 255, 0.85); /* Light */
  background: rgba(7, 13, 24, 0.85);    /* Dark */
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border-bottom: 1px solid rgba(226, 232, 240, 0.8);
  ```
- **Stage Glow Effects (Hero Canvas)**:
  ```css
  /* Dual Stage Lighting */
  background: 
    radial-gradient(circle at 15% 15%, rgba(240, 147, 32, 0.12) 0%, transparent 45%),
    radial-gradient(circle at 85% 85%, rgba(70, 148, 177, 0.15) 0%, transparent 50%),
    #070D18;
  ```

### 5.4 Shape System & Border Radii
- `--radius-sm`: `4px` (Form checkboxes, small tags, tooltips)
- `--radius-md`: `8px` (Buttons, form input fields, table rows)
- `--radius-lg`: `12px` (Cards, alert banners, event badges)
- `--radius-xl`: `16px` (Modals, media containers, flyout drawers)
- `--radius-full`: `9999px` (Pill badges, avatar circles, floating action buttons)

### 5.5 Motion & Animation System

```
          [ TIMING ]                              [ EASING CURVES ]
    Fast:    150ms (micro-interactions)      Standard: cubic-bezier(0.16, 1, 0.3, 1)
    Normal:  250ms (card hovers, modals)    Entrance: cubic-bezier(0, 0, 0.2, 1)
    Slow:    400ms (drawer transitions)      Infinite: 32s linear continuous
```

- **Live Pulsing Beacon**:
  ```css
  @keyframes ft-pulse-beacon {
    0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
    70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
  }
  ```
- **Infinite Marquee Drift**: Smooth linear translation with hover-to-pause (`animation-play-state: paused`).
- **Reduced Motion**: Mandated `@media (prefers-reduced-motion: reduce)` disabling non-essential stage drifts.

---

## 6. Public Website vs. Admin Panel Design Rules

### 6.1 Public Website Component Rules

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       PUBLIC WEBSITE COMPONENT RULES                        │
├──────────────────────────────────────┬──────────────────────────────────────┤
│ DO                                   │ DON'T                                │
├──────────────────────────────────────┼──────────────────────────────────────┤
│ ✓ Use direct WhatsApp CTA with live  │ ❌ Don't trap users in long web      │
│   beacon indicator (+8801671863685)  │    inquiry forms with 8+ inputs.     │
│ ✓ Use Studio Editorial Light canvas  │ ❌ Don't use heavy all-black pages   │
│   with warm Solar Amber accents.     │    for daytime marketing.            │
│ ✓ Keep mobile header uncluttered by  │ ❌ Don't crowd the mobile header     │
│   using bottom floating WhatsApp.    │    with multiple pills and numbers.  │
│ ✓ Use high-contrast #2B5E70 for      │ ❌ Don't use low-contrast #F09320 or │
│   teal text on white backgrounds.    │    #4694B1 for light-mode body copy. │
│ ✓ Animate brand logo with subtle     │ ❌ Don't auto-play heavy audio/video │
│   smooth hover elevation.            │    with loud volume on load.         │
└──────────────────────────────────────┴──────────────────────────────────────┘
```

### 6.2 Admin Panel & Dashboard Component Rules

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      ADMIN PANEL & DASHBOARD RULES                          │
├──────────────────────────────────────┬──────────────────────────────────────┤
│ DO                                   │ DON'T                                │
├──────────────────────────────────────┼──────────────────────────────────────┤
│ ✓ Use high-density 12-14px typography│ ❌ Don't use oversized marketing     │
│   and compact 36-40px table rows.    │    headings in operational tables.   │
│ ✓ Use semantic colors (Emerald,      │ ❌ Don't overload the UI with amber  │
│   Crimson, Blue) only for statuses.  │    badges for non-urgent items.      │
│ ✓ Format all timestamps and counts   │ ❌ Don't use proportional fonts for  │
│   in JetBrains Mono for alignment.   │    tabular figures and telemetry.    │
│ ✓ Use clear 1px borders (#E2E8F0     │ ❌ Don't rely on faint drop shadows  │
│   light / #1E293B dark) for grids.   │    to separate operational metrics.  │
│ ✓ Support dual-theme switching with  │ ❌ Don't hardcode light colors into  │
│   CSS variables (--surface, etc.).   │    reusable dashboard widgets.       │
└──────────────────────────────────────┴──────────────────────────────────────┘
```

---

## 7. Accessibility, Contrast & Compliance Matrix

### 7.1 WCAG 2.1 Contrast Ratios Verification

Every color pairing has been verified with standard relative luminance formulas:

| Foreground Color | Background Color | Contrast Ratio | WCAG 2.1 AA | WCAG 2.1 AAA | Permitted Usage |
| :--- | :--- | :---: | :---: | :---: | :--- |
| `#F09320` (Amber) | `#FFFFFF` (White) | `2.36 : 1` | ❌ Fail | ❌ Fail | Graphical accents & icons ONLY. **Never text.** |
| `#070D18` (Obsidian) | `#F09320` (Amber) | **8.24 : 1** | **✓ PASS** | **✓ PASS** | **Mandatory text color on Amber buttons.** |
| `#FFFFFF` (White) | `#F09320` (Amber) | `2.36 : 1` | ❌ Fail | ❌ Fail | **STRICTLY PROHIBITED.** |
| `#F09320` (Amber) | `#070D18` (Obsidian) | **8.24 : 1** | **✓ PASS** | **✓ PASS** | Dark mode headings, badges, glowing accents. |
| `#4694B1` (Teal) | `#FFFFFF` (White) | `3.43 : 1` | ❌ Text Fail | ❌ Fail | UI components, icons, borders, graphic shapes. |
| `#2B5E70` (Dark Teal)| `#FFFFFF` (White) | **7.15 : 1** | **✓ PASS** | **✓ PASS** | **Mandatory text teal on white backgrounds.** |
| `#1C4453` (Deep Teal)| `#FFFFFF` (White) | **10.49 : 1** | **✓ PASS** | **✓ PASS** | Editorial headlines, high-contrast links. |
| `#4694B1` (Teal) | `#070D18` (Obsidian) | **5.68 : 1** | **✓ PASS** | ❌ AAA Norm | Dark mode badges, secondary labels, links. |
| `#0F172A` (Slate 900)| `#FFFFFF` (White) | **17.85 : 1** | **✓ PASS** | **✓ PASS** | Primary headlines and body copy in light mode. |
| `#475569` (Slate 600)| `#FFFFFF` (White) | **7.58 : 1** | **✓ PASS** | **✓ PASS** | Secondary body copy and metadata in light mode. |
| `#F8FAFC` (Slate 50) | `#070D18` (Obsidian) | **18.10 : 1** | **✓ PASS** | **✓ PASS** | Primary headlines and body copy in dark mode. |
| `#94A3B8` (Slate 400)| `#070D18` (Obsidian) | **7.25 : 1** | **✓ PASS** | **✓ PASS** | Secondary text and labels in dark mode. |

### 7.2 Non-Color Dependency
Status states must never rely on color alone. Every badge, form feedback, and operational alert must pair color with an explicit icon (e.g., ✓ Checkmark, ⚠ Warning Triangle, ✕ Cross, ℹ Info Circle) and a textual label.

### 7.3 Keyboard Navigation & Focus Rings
All interactive elements (buttons, links, form inputs) must feature a distinct, visible focus ring:
```css
:focus-visible {
  outline: 2px solid #F09320;
  outline-offset: 2px;
}
```

---

## 8. Explicit Assumptions & Open Questions

### 8.1 Documented Assumptions
1. **Digital Primary Sans**: The original wordmark uses flared serifs (`FineTuning`), but for web interfaces and administrative dashboards, we assume `Outfit` as the primary digital workhorse to ensure crisp rendering at low pixel densities.
2. **Text-Safe Teal Adaptation**: We introduce `--color-teal-700` (`#2B5E70`) to fulfill WCAG AAA text contrast standards on light canvases where the raw logo teal (`#4694B1`) falls short.
3. **Primary Action Mechanism**: Given the agency's established practice in Bangladesh, we prioritize direct WhatsApp communications over web forms for primary conversion funnels.

### 8.2 Open Questions for Brand Stakeholders
1. **Formal Sub-Brand Architecture**: Does Fine Tuning plan to launch formal sub-brands (e.g. *Fine Tuning Media*, *Fine Tuning Tech / 360 Booth*, *Fine Tuning Summits*) that require color-coded emblem variants?
2. **Favicon Vector Simplification**: At 16px favicon resolution, the fine gap between the needle and the cradle arc can blend together on non-retina displays. Should a dedicated, simplified 16px optical favicon variant be rendered?
3. **Bangla Monogram / Typography**: When co-branding in Bangla (e.g., event licensing or government partnerships), should a bespoke Bangla wordmark (ফাইন টিউনিং) be crafted using matching flared terminal strokes?

---

*Brand Guidelines compiled and standardized for Fine Tuning Advertising Agency (`finetuning.com.bd`).*

