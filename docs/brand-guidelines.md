# Fine Tuning — Brand Identity & Style Guidelines

> **Brand Identity System for finetuning.com.bd**  
> *Industry: Event Management & Experiential Advertising Agency*  
> *Version: 1.1.0 | Updated: 2026*

---

## 1. Brand Essence & Philosophy

**Fine Tuning** represents the art of harmonic orchestration, acoustic perfection, and precision execution in the event management and advertising landscape.

### 1.1 Brand Mission
To engineer unforgettable experiential moments, corporate summits, brand activations, and grand celebrations with meticulous precision—calibrating every sonic, visual, and operational detail until it achieves absolute resonance.

### 1.2 Core Brand Values
1. **Precision Calibration ("Fine-Tuning")**: Nothing is left to chance. Every frequency, lighting cue, guest journey, and visual asset is dialed to perfection.
2. **Dynamic Vitality**: Driven by the warmth, enthusiasm, and celebration of the Solar Amber palette (`#F09320`), infusing energy into every stage and campaign.
3. **Architectural Trust & Poise**: Anchored by the serene stability and engineering integrity of Nordic Teal (`#4694B1`) and Midnight Obsidian (`#070D18`).
4. **Contemporary Agency Minimalism**: Sharp, geometric, digital-first aesthetics powered by modern agency typography (**Outfit** & **Syne**).

---

## 2. Logo System & Visual Anatomy

The Fine Tuning mark consists of three core components: the **Wordmark**, the **Agency Descriptor**, and the **Harmonic Emblem**.

```
       ┌────────────────────────────────────────────────────────┐
       │                                                        │
       │     F i n e T u n i n g                                │  <-- Primary Wordmark
       │        A d v e r t i s i n g   A g e n c y             │  <-- Descriptor (Geometric Sans)
       │                                                        │
       │                      ┌─┐                               │
       │                     ┌┘ └┐                              │
       │                   ══╡ T ╞══                            │  <-- Harmonic Monogram / Needle
       │                     │   │                              │
       │                    ( \_/ )                             │  <-- Cerulean Basin / Crescent Cradle
       │                     \___/                              │
       │                                                        │
       └────────────────────────────────────────────────────────┘
```

### 2.1 Logo Components
- **The Wordmark ("FineTuning")**:
  - Color Strategy: Orange body (`#F09320`) with distinctive Nordic Teal circular dots (tittles) on both instances of the letter `i` (`#4694B1`).
  - Significance: Conveys bespoke craft, musical cadence, and tailored luxury.
- **The Descriptor ("Advertising Agency")**:
  - Typographic Category: Clean geometric sans-serif with ultra-wide tracking (`letter-spacing: 0.28em` - `0.35em`).
  - Color Strategy: Muted Cerulean / Nordic Teal (`#4694B1`).
  - Significance: Establishes professional breadth and contemporary modernism.
- **The Harmonic Emblem**:
  - The Winged "FT" Monogram & Precision Arrow: Resembles a stylized tuning needle, acoustic transducer, and celebratory wings in Solar Amber (`#F09320`).
  - The Resonant Cradle / Basin: A stabilizing geometric arc in Nordic Teal (`#4694B1`), symbolizing an amphitheater, stage cradle, or harmonic dish holding the creative energy.

### 2.2 Clear Space & Exclusion Zone
$$\text{Clear Space} = X \quad (\text{where } X = \text{height of the letter 'F' in the primary wordmark})$$

- Minimum Digital Clear Space: $24\text{px}$ on all sides.
- Minimum Digital Sizes:
  - Full Primary Lockup: $160\text{px}$ width.
  - Icon Emblem standalone: $32\text{px} \times 32\text{px}$ (favicons, app icons, social avatars).

---

## 3. Open Graph (OG) & Social Card Specification

To ensure high-impact visual representation when links are shared across Facebook, LinkedIn, WhatsApp, X (Twitter), and Slack:

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   (Amber Stage Glow)                                            │
│                                                                 │
│                    FineTuning                                   │
│                 Advertising Agency                              │
│                         ▼                                       │
│                                                                 │
│                                              (Teal Stage Glow)  │
└─────────────────────────────────────────────────────────────────┘
```

- **File Path**: `images/og-thumbnail.png` (Absolute URL: `https://finetuning.com.bd/images/og-thumbnail.png`)
- **Dimensions**: $1200\text{px} \times 630\text{px}$ (aspect ratio $1.91:1$).
- **Background**: Deep Midnight Obsidian (`#070D18`) with ambient Solar Amber top-left flare and Nordic Teal bottom-right floodlight.
- **Content**: Perfectly centered Fine Tuning brand lockup with a crisp 1px subtle border.
- **Required HTML Meta Tags**:
  ```html
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://finetuning.com.bd/">
  <meta property="og:title" content="Fine Tuning — Orchestrating Extraordinary Experiences">
  <meta property="og:description" content="Dhaka's premier Event Management & Experiential Advertising Agency.">
  <meta property="og:image" content="https://finetuning.com.bd/images/og-thumbnail.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:image" content="https://finetuning.com.bd/images/og-thumbnail.png">
  ```

---

## 4. Modern Typography System

To mirror the sleek, geometric precision of modern experiential advertising, traditional serifs have been replaced by a razor-sharp modern agency font family:

### 4.1 Font Families
1. **Primary Brand & UI Typeface — `Outfit`**:
   - Clean, geometric modernist sans echoing the "Advertising Agency" logo descriptor.
   - Weights: `400` (Regular), `500` (Medium), `700` (Bold), `800` (ExtraBold), `900` (Black).
   - Usage: Primary headlines, titles, body copy, form inputs, buttons.
2. **Creative Agency Display Accents — `Syne`**:
   - Sculpted, architectural sans engineered specifically for creative agencies and art spaces.
   - Weights: `700` (Bold), `800` (ExtraBold).
   - Usage: Category markers, section titles, event posters.
3. **Monospace & Coordinates — `JetBrains Mono`**:
   - High-legibility monospaced typeface.
   - Usage: Countdown clocks, ticket IDs, timestamps, status error numerals.

---

## 5. System & Error Pages Architecture

All system pages (Maintenance Mode, 404, 500, 503) are governed by the **Strict Single-Screen Constraint**:

### 5.1 Single-Screen Principles
- **Zero Scrollbar Required**: The entire layout, from header logo to footer contact, must fit within a single screen (`height: 100vh; height: 100dvh; overflow: hidden;`) on both Mobile ($375\text{px} - 428\text{px}$) and Desktop ($1024\text{px} - 4\text{K}$).
- **No Extraneous Navigation**: System pages do not include top navigation bars, nested device previewers, or multi-page tab controls.
- **Three-Tier Vertical Rhythm**:
  1. **Top**: Centered brand logo (`height: clamp(34px, 5.5vh, 50px)`).
  2. **Center**: Status badge $\rightarrow$ Error code / Main headline $\rightarrow$ Concise explanatory message $\rightarrow$ Recovery CTA / Notify input.
  3. **Bottom**: Single-line compact footer with copyright and direct contact link (`info@finetuning.com.bd`).

### 5.2 Error Page Messaging Standards
- **404 Not Found (`404.html`)**:
  - Badge: `"PAGE NOT FOUND"`
  - Code: `404` in Solar Amber / Gold gradient glow.
  - Title: *"Frequency Out of Range"*
  - Message: *"The stage or resource you are looking for has been moved, rescheduled, or does not exist on our production server."*
  - CTA: `[ Return to Main Stage ]` linking to `/`.
- **500 Internal Server Error (`500.html`)**:
  - Badge: `"INTERNAL SERVER ERROR"`
  - Code: `500` in Crimson / Amber gradient glow.
  - Title: *"Signal Interruption Detected"*
  - Message: *"Our audio-visual and server crew detected an unexpected technical disruption. We are actively recalibrating the signal."*
  - CTA: `[ Reload Page ]` + `[ Contact Crew ]`.
- **503 Service Unavailable (`503.html`)**:
  - Badge: `"STAGE SOUNDCHECK IN PROGRESS"`
  - Code: `503` in Nordic Teal / Amber gradient glow.
  - Title: *"Live Soundcheck & Tuning"*
  - Message: *"Our production systems are undergoing scheduled capacity calibration. We will be back live momentarily."*
  - CTA: `[ Retry Connection ]` + `[ Contact Desk ]`.
