# Fine Tuning — Master Information Architecture & Section Plan (`PAGE_ARCHITECTURE.md`)

> **Authoritative Content-First Page Blueprint, Audience Mental Arcs & Structural ASCII Wireframes**  
> *Target Route: `/` (`index.html`) — Master Experiential Agency Portal & Production Showcase*  
> *Organization: Fine Tuning Advertising Agency (Chattogram HQ & Dhaka Executive Hub)*  
> *Version: 2.5.0 | Date: November 2026 | Status: Authoritative Architecture Plan*  
> *Pre-requisites: `docs/BRAND_GUIDELINES.md`, `docs/DESIGN_SYSTEM.md`, `docs/WEBSITE_BUILD_CONTEXT.md`, `docs/PAGE_BRIEF.md`, `AGENTS.md`*

---

## 1. Executive Context & Methodological Foundation

This document establishes the **content-first information architecture (IA)**, section-by-section specifications, and responsive layout blueprints for the primary route (`/` / `index.html`) of **Fine Tuning** (`finetuning.com.bd`).

In accordance with the `frontend-design` methodology:
- Every structural layout decision is grounded strictly in the agency's operational subject matter: **experiential corporate summits, curved P2.6 LED volumes, Dante-networked acoustic line arrays, architectural exhibition pavilions, and sports hospitality**.
- Avoids generic AI layout clichés (e.g. hero → three identical rounded cards → fake testimonials → CTA button) by grounding each section in verifiable proof, authentic photography from `images/webp/`, and live engineering telemetry.
- Enforces strict design tokens from `tokens/tokens.css` and `tokens/themes.css`.
- Preserves the **non-negotiable contrast invariants** from `AGENTS.md`:
  - **Solar Amber (`#F09320`) buttons MUST ALWAYS feature Midnight Obsidian (`#070D18`) text** (8.24:1 AAA contrast).
  - **Light-mode text teal must use `--color-teal-700` (`#2B5E70`)** (7.15:1 AAA contrast).

---

## 2. Design Plan & Self-Critique (Pass 1 & Pass 2)

### 2.1 Pass 1: Design Plan Baseline

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              DESIGN PLAN BASELINE                           │
├─────────────────┬───────────────────────────────────────────────────────────┤
│ Core Palette    │ - Midnight Obsidian: #070D18 (--color-slate-950 / canvas) │
│ (4–6 Hex Values)│ - Deep Navy Slate:   #0F172A (--color-slate-900 / surface)│
│                 │ - Solar Amber:       #F09320 (--color-amber-500 / action) │
│                 │ - Nordic Teal:       #4694B1 (--color-teal-500 / accent)  │
│                 │ - Contrast Teal:     #2B5E70 (--color-teal-700 / text AAA)│
│                 │ - Crisp White:       #F8FAFC (--color-slate-50 / text)    │
├─────────────────┼───────────────────────────────────────────────────────────┤
│ Typography      │ - Outfit (--font-primary, 300–900): Digital UI, copy, nav │
│ Hierarchy       │ - Syne (--font-display, 700–800): Display headers, punch  │
│                 │ - JetBrains Mono (--font-mono, 400–600): Telemetry & data │
├─────────────────┼───────────────────────────────────────────────────────────┤
│ Layout Concept  │ Asymmetric stage atmosphere. Left-aligned assertive       │
│                 │ editorial headlines balanced by live acoustic/structural  │
│                 │ telemetry cards on the right. Ambient radial stage flare. │
├─────────────────┼───────────────────────────────────────────────────────────┤
│ Core Principles │ 1. Certainty over persuasion: Prove capability instantly. │
│                 │ 2. High-contrast theatrical authority without visual noise│
│                 │ 3. Active voice, zero corporate fluff, zero fake quotes.  │
└─────────────────┴───────────────────────────────────────────────────────────┘
```

### 2.2 Pass 2: Critique Against Generic AI Tells & Intentional Corrections

| AI Default / Generic Tell | Why It Fails Fine Tuning | Intentional Agency Correction |
| :--- | :--- | :--- |
| **Tracked-out ALL CAPS eyebrows on every section** | Reads like a generic landing page template; loses hierarchy. | Eyebrows are restricted strictly to functional status indicators (e.g. `● Live Production Desk: Chattogram & Dhaka`). Section headers speak directly through bold `Syne` display typography. |
| **SaaS Card Kit (3 identical rounded cards with soft shadows)** | Fine Tuning builds 40-foot box trusses and curved LED volumes, not software features. | Replaced with an asymmetric, full-width proof architecture: live acoustic fader meter, full-bleed case study schematics, and an interactive 3-step staging brief calculator. |
| **Fake testimonials with stock corporate headshots** | Destroys credibility with enterprise CMOs and violates Invariant 3. | Zero invented reviews. Section 3 leads with a high-velocity marquee of verified corporate conglomerates (BSRM, UCB, BYD, Royal Enfield) and real event photography from `images/webp/`. |
| **Accenting a single random word with color/italic** | Creates choppy, distracting reading cadence. | Typography uses unified, disciplined `Syne` Display weights where entire headlines deliver punch without gimmick styling. |
| **Generic arrow (`→`) appended to every single link** | Templated styling tell. | Explicit, active-voice action labels: `[Book Technical Briefing]`, `[Launch Staging Wizard]`, `[Inspect Case Studies]`. |

---

## 3. Alternative Page Flows & Recommendation

To determine the most effective conversion journey for corporate event conveners, two distinct page flows were architected and evaluated:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    PAGE FLOW 1: TECHNICAL AUTHORITY & PROOF                 │
│                                 (RECOMMENDED)                               │
├─────────────────────────────────────────────────────────────────────────────┤
│ [1. Live Telemetry Hero] -> [2. Enterprise Marquee] -> [3. KPI Ribbon]      │
│ [4. Verified Case Studies] -> [5. Capabilities Grid] -> [6. Soundcheck Fader│
│ [7. Staging Wizard Teaser] -> [8. Dual-Hub Strip] -> [9. Corporate Footer]   │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                  PAGE FLOW 2: CREATIVE MANIFESTO & STORYTELLING             │
│                                 (ALTERNATIVE)                               │
├─────────────────────────────────────────────────────────────────────────────┤
│ [1. Atmospheric Video Hero] -> [2. Agency Manifesto] -> [3. Event Pillars]  │
│ [4. Photo Lightbox Gallery] -> [5. 5-Phase Process] -> [6. Client Logos]    │
│ [7. Contact Inquiry Form] -> [8. Corporate Footer]                          │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.1 Flow Comparison Matrix

| Evaluation Dimension | Flow 1: Technical Authority & Proof (Recommended) | Flow 2: Creative Manifesto & Storytelling |
| :--- | :--- | :--- |
| **Primary Audience Alignment** | **Optimal**: Directly addresses enterprise CMOs, Brand Directors, and procurement officers who risk corporate reputation and prioritize operational zero-failure certainty. | **Sub-optimal**: Appeals to general creative enthusiasts but delays concrete technical verification and hardware specs. |
| **Time-to-Proof** | **Instant (< 5 seconds)**: Live soundcheck telemetry and BSRM/UCB/BYD client logos appear immediately above and at the fold. | **Delayed (> 30 seconds)**: Requires scrolling past abstract manifesto copy before seeing real client verification. |
| **Primary Conversion Driver** | High-intent dual path: Urgent events tap WhatsApp Desk immediately; planned summits engage the 3-step Staging Wizard. | Single generic contact form inquiry; higher friction and lower qualification. |
| **Brand Differentiation** | Radically separates Fine Tuning from amateur decorators by showcasing certified acoustic line-array engineering and civil truss load ratings. | Blends into the sea of generic creative agency portfolio websites. |

### 3.2 Formal Recommendation
**Flow 1 is officially recommended and selected.** Fine Tuning’s core value proposition in the Bangladesh market is **turnkey engineering precision and zero-failure execution**. Flow 1 proves capability before making promises, eliminating buyer skepticism within the first viewport.

---

## 4. Comprehensive Section-by-Section Plan (Flow 1)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                   SECTION 1: GLOBAL HEADER & LIVE UTILITY BAR               │
├──────────────────────┬──────────────────────────────────────────────────────┤
│ Candidate Components │ NAV-01 (Sticky Header & Utility), ACT-01 (Amber CTA),│
│                      │ ACT-06 (Icon Buttons), ACT-11 (Status Beacon)        │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ User Question        │ "Is this agency active, and how do I reach someone   │
│ Answered             │ directly right now?"                                 │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Proof / Content      │ - Real status indicator: "Live Production Desk:      │
│ Required             │   Chattogram & Dhaka" with pulsing green beacon.     │
│                      │ - Direct emergency hotline: +880 1671-863685.        │
│                      │ - Official vector emblem: assets/brand/fine-tuning...│
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Headline Direction   │ FineTuning (Wordmark) + Experiential Advertising     │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Interactive Behavior │ - Header sticks with frosted glass blur upon scroll. │
│                      │ - Theme Switcher toggles dark/light with data-theme. │
│                      │ - Density Switcher toggles comfortable/compact.      │
│                      │ - Primary button triggers OVL-01 Consultation Modal. │
│                      │ - Hamburger triggers NAV-03 Lateral Right Drawer.    │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Image Assets         │ assets/brand/fine-tuning-icon.svg (Vector viewBox)   │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Section CTA          │ Primary Pill: [Book Technical Briefing] (ACT-01,     │
│                      │ Solar Amber background, Midnight Obsidian text).     │
└──────────────────────┴──────────────────────────────────────────────────────┘
```

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                 SECTION 2: HERO — THEATRICAL STAGE FLARE & TELEMETRY        │
├──────────────────────┬──────────────────────────────────────────────────────┤
│ Candidate Components │ CNT-01 (Headings), ACT-01 (Primary Button), ACT-03   │
│                      │ (Outline Button), DTA-05 (SPL Meter), DTA-06 (FPS)   │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ User Question        │ "What exactly does Fine Tuning do, and do they have  │
│ Answered             │ the engineering scale for my high-stakes summit?"    │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Proof / Content      │ - Live FOH Sensor Readout: "84.6 dBA (ACOUSTIC SAFE)"│
│ Required             │ - Rigging Telemetry: "Truss Load: 3.4 Tons • P2.6    │
│                      │   Curved LED: 60 FPS Fixed • Zero Dante Dropouts".   │
│                      │ - True geographic hubs: Chattogram & Dhaka.          │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Headline Direction   │ "Where Experiential Precision Meets Stage Energy."   │
│                      │ Sub: "Turnkey corporate summits, panoramic curved LED│
│                      │ volumes, and acoustic line-array engineering."       │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Interactive Behavior │ - Animated audio equalizer bars pulsing dynamically. │
│                      │ - FOH status badge with live green beacon.           │
│                      │ - Smooth scroll or route jumps on button taps.       │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Image Assets         │ - Ambient background: Stage grid with dual radial    │
│                      │   glows (Amber #F09320 at 15% / Teal #4694B1 at 85%).│
│                      │ - Optional hero preview: images/webp/program-01/     │
│                      │   program-01-cover.webp (Motor Fest BYD Pavilion).   │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Section CTA          │ - Primary: [Launch Production Brief →] (ACT-01)      │
│                      │ - Secondary: [Explore 180+ Case Studies] (ACT-03)    │
└──────────────────────┴──────────────────────────────────────────────────────┘
```

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                 SECTION 3: CONTINUOUS VERIFIED CLIENT MARQUEE                │
├──────────────────────┬──────────────────────────────────────────────────────┤
│ Candidate Components │ CNT-07 (Infinite Client Marquee)                     │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ User Question        │ "What prominent enterprises have trusted Fine Tuning │
│ Answered             │ with their flagship events?"                         │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Proof / Content      │ Verified corporate brand partnerships only:          │
│ Required             │ - BSRM Group of Companies (CORE ESG Annual Summit)   │
│                      │ - United Commercial Bank PLC (UCB Retreat)           │
│                      │ - BYD Bangladesh (Seal 5 & Sealion 6 Launches)       │
│                      │ - Royal Enfield Bangladesh (Flagship Pavilion)       │
│                      │ - Apex Footwear (Dealer Convention)                  │
│                      │ - CPDL (Real Estate Brand Activations)               │
│                      │ - BUET Graduates Club (Alumni Grand Assembly)        │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Headline Direction   │ "Trusted for Flagship National Productions" (Quiet   │
│                      │ uppercase tracking, minimal noise).                  │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Interactive Behavior │ - GPU-accelerated dual-track marquee (32s loop).     │
│                      │ - Pauses automatically on hover or touch hold.       │
│                      │ - High-contrast monochromatic emblems with amber glow│
│                      │   on individual card hover.                          │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Image Assets         │ SVG vector silhouettes of verified corporate marks.  │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Section CTA          │ Text Link: [View Verification Details in Case Studies│
└──────────────────────┴──────────────────────────────────────────────────────┘
```

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                  SECTION 4: VERIFIED METRICS & KPI RIBBON                   │
├──────────────────────┬──────────────────────────────────────────────────────┤
│ Candidate Components │ CNT-04 (Metric KPI Cards), ACT-11 (Status Beacon)    │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ User Question        │ "What is their scale, reliability, and safety track  │
│ Answered             │ record across past seasons?"                         │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Proof / Content      │ 4 authentic performance metrics:                     │
│ Required             │ 1. "180+" -> Turnkey Productions Executed            │
│                      │ 2. "65,000" -> Peak Audience Engaged                 │
│                      │ 3. "99.98%" -> Stage Uptime (Dante Audio Redundancy) │
│                      │ 4. "14" -> Brand & Staging Industry Accolades        │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Headline Direction   │ Large JetBrains Mono numerical displays with green   │
│                      │ positive trend deltas (+12% YoY, Verified).          │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Interactive Behavior │ Metric tiles highlight with subtle amber borders on  │
│                      │ hover; values render crisply without jumpy counters. │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Image Assets         │ Vector telemetry icons (audio wave, truss, crown).   │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Section CTA          │ None (Pure cognitive reassurance & proof layer).     │
└──────────────────────┴──────────────────────────────────────────────────────┘
```

```
┌─────────────────────────────────────────────────────────────────────────────┐
│             SECTION 5: TURNKEY CASE ARCHIVE & PRODUCTION SCHEMATICS         │
├──────────────────────┬──────────────────────────────────────────────────────┤
│ Candidate Components │ CNT-03 (Media Cards), ACT-09 (Segmented Filter Bar), │
│                      │ ACT-02 (Secondary Teal Button), ACT-20 (Empty State) │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ User Question        │ "What do their completed stage builds actually look  │
│ Answered             │ like, and have they handled my exact event format?"  │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Proof / Content      │ 4 authentic verified case study cards with real data:│
│ Required             │ 1. 8th Motor Fest (BYD & Royal Enfield Pavilions)    │
│                      │ 2. BSRM CORE ESG Event (Radisson Blu Grand Ballroom) │
│                      │ 3. BIZSTAR Season V (CU ACC Grand Finale Auditorium) │
│                      │ 4. UCB Annual Retreat (Bargee Lake Valley Rangamati) │
│                      │ - Specs: Hall name, pax count, LED dimensions, dBA.  │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Headline Direction   │ "Engineered Staging. Documented Executions."         │
│                      │ Sub: "Inspect real schematics from past productions."│
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Interactive Behavior │ - Segmented filter bar: [All], [Summits], [Expos],   │
│                      │   [Automotive], [Retreats].                          │
│                      │ - Filter switch re-sorts cards smoothly in DOM.      │
│                      │ - Empty state fallback if zero matches found.        │
│                      │ - Click card opens dedicated case route (/cases).    │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Image Assets         │ - images/webp/program-01/program-01-cover.webp       │
│                      │ - images/webp/program-02/program-02-cover.webp       │
│                      │ - images/webp/program-03/program-03-cover.webp       │
│                      │ - images/webp/program-04/program-04-cover.webp       │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Section CTA          │ Secondary Action: [Explore Complete 180+ Archive]    │
│                      │ (ACT-02, Nordic Teal, links to /cases).              │
└──────────────────────┴──────────────────────────────────────────────────────┘
```

```
┌─────────────────────────────────────────────────────────────────────────────┐
│          SECTION 6: SIX CORE PRODUCTION CAPABILITIES WITH SPECS             │
├──────────────────────┬──────────────────────────────────────────────────────┤
│ Candidate Components │ CNT-01 (Headings), CNT-03 (Capability Cards),        │
│                      │ ACT-05 (Arrow Link), ACT-12 (Specification Badges)   │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ User Question        │ "Do they own and operate the specific technical      │
│ Answered             │ hardware modules required for our stage rider?"      │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Proof / Content      │ 6 distinct capability blocks with hardware specs:    │
│ Required             │ 1. Curved P2.6 LED Volumes (Novastar 4K processing)  │
│                      │ 2. Acoustic Line Arrays (Dante networked, JBL/d&b)   │
│                      │ 3. Turnkey Corporate Summits (Run-of-show directors) │
│                      │ 4. 3D Architectural Pavilions (CNC spatial wood/iron)│
│                      │ 5. 5G Bonded Live Broadcast (Multi-SIM vMix switchers│
│                      │ 6. Dynamic 360° Photo Booths (Motorized 4K slow-mo)  │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Headline Direction   │ "Complete Turnkey Staging Capabilities."             │
│                      │ Sub: "No third-party brokering. Direct agency fleet."│
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Interactive Behavior │ - Cards feature amber top border on hover.           │
│                      │ - Technical hardware badges expand on click.         │
│                      │ - Link jumps directly to pre-filtered staging wizard.│
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Image Assets         │ Clean vector hardware glyphs (curved screen, speaker │
│                      │ array, truss junction, 4K camera, 360 ring, podium). │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Section CTA          │ In-card text links: [View Hardware Specifications →] │
└──────────────────────┴──────────────────────────────────────────────────────┘
```

```
┌─────────────────────────────────────────────────────────────────────────────┐
│         SECTION 7: INTERACTIVE SOUNDCHECK & ACOUSTIC SAFETY FADER           │
├──────────────────────┬──────────────────────────────────────────────────────┤
│ Candidate Components │ DTA-05 (SPL Meter), FRM-12 (Range Slider), ACT-19    │
│                      │ (Inline Notice), ACT-11 (Status Beacon)              │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ User Question        │ "How does Fine Tuning prevent painful feedback, echo,│
│ Answered             │ and harsh audio distortion in difficult venues?"     │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Proof / Content      │ - Real acoustic engineering threshold standards:    │
│ Required             │   • <85 dBA: Speech Intelligible & Safe (Green)      │
│                      │   • 86–95 dBA: Energetic Concert Level (Amber)       │
│                      │   • >95 dBA: Municipal Warning & Limiter Clamp (Red) │
│                      │ - Fine Tuning acoustic limiter guarantee note.       │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Headline Direction   │ "Acoustic Engineering. Zero Distortion Guarantee."   │
│                      │ Sub: "Interactive demonstration of FOH sound limits."│
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Interactive Behavior │ - Live horizontal range fader (60 to 110 dBA).       │
│                      │ - Real-time needle gauge rotation and color shift.   │
│                      │ - Simulates automatic digital limiter clamp when the │
│                      │   user slides above 95 dBA.                          │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Image Assets         │ Custom SVG analog decibel meter dial face.           │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Section CTA          │ Secondary Button: [Read Acoustic Whitepaper / Specs] │
└──────────────────────┴──────────────────────────────────────────────────────┘
```

```
┌─────────────────────────────────────────────────────────────────────────────┐
│          SECTION 8: IN-LINE PRODUCTION STAGING WIZARD (3-STEP TEASER)       │
├──────────────────────┬──────────────────────────────────────────────────────┤
│ Candidate Components │ FRM-19 (Multi-Step Stepper), FRM-06 (Select), FRM-10 │
│                      │ (Checkboxes), ACT-01 (Primary Button), FRM-20 (State)│
├──────────────────────┼──────────────────────────────────────────────────────┤
│ User Question        │ "How quickly can I estimate hardware requirements and│
│ Answered             │ power consumption for our specific event venue?"     │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Proof / Content      │ - Real venue database: Radisson Blu Ctg, ICCB Dhaka, │
│ Required             │   Bargee Lake Valley, KDS Auditorium, Custom Hall.   │
│                      │ - Instant preliminary generator sizing (e.g. 60 kVA).│
│                      │ - 100% confidential submission pledge.               │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Headline Direction   │ "Configure Your Stage in 60 Seconds."                │
│                      │ Sub: "Select your hall and pax for instant sizing."  │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Interactive Behavior │ - Step 1: Venue & Pax Select -> Step 2: AV Modules ->│
│                      │   Step 3: Instant Power & Truss Calculation summary. │
│                      │ - Seamless client-side validation; zero page reload. │
│                      │ - Direct handoff to full wizard (/request-rig).      │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Image Assets         │ Venue hall isometric vector diagrams.                │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Section CTA          │ Primary Action: [Submit Brief & Lock Production Slot]│
│                      │ (ACT-01, Solar Amber background, Obsidian text).     │
└──────────────────────┴──────────────────────────────────────────────────────┘
```

```
┌─────────────────────────────────────────────────────────────────────────────┐
│         SECTION 9: DUAL-HUB LOGISTICS STRIP & VIP CONSULTATION DESK         │
├──────────────────────┬──────────────────────────────────────────────────────┤
│ Candidate Components │ CNT-10 (Contact Strip), ACT-01 (Modal Trigger),      │
│                      │ ACT-08 (WhatsApp FAB), OVL-01 (Consultation Dialog)  │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ User Question        │ "Where are your physical crews based, and how fast   │
│ Answered             │ can you respond to our event procurement team?"      │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Proof / Content      │ - Transparent geographic bases:                      │
│ Required             │   • Chattogram HQ: Nasirabad Logistics Warehouse &   │
│                      │     Shop 01 CDA Market, Kajir Dewri, Ctg 4203.       │
│                      │   • Dhaka Hub: Gulshan-2, Dhaka 1212.                │
│                      │ - Direct WhatsApp line: +880 1671-863685.            │
│                      │ - Guaranteed 2-Hour SLA response commitment.         │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Headline Direction   │ "Dual-Hub Operational Readiness. Nationwide Reach."  │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Interactive Behavior │ - Clicking "Schedule Briefing" triggers OVL-01 modal.│
│                      │ - WhatsApp button opens pre-filled direct chat link. │
│                      │ - Map cards toggle between Chattogram and Dhaka hubs.│
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Image Assets         │ Vector dual-hub logistics route map of Bangladesh.   │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Section CTA          │ - Primary: [Book Technical Briefing] (Triggers Modal)│
│                      │ - Direct: [💬 WhatsApp Live Desk] (ACT-08 / direct)  │
└──────────────────────┴──────────────────────────────────────────────────────┘
```

```
┌─────────────────────────────────────────────────────────────────────────────┐
│               SECTION 10: CORPORATE MULTI-COLUMN FOOTER & COMPLIANCE        │
├──────────────────────┬──────────────────────────────────────────────────────┤
│ Candidate Components │ NAV-10 (Footer Block), FRM-02 (Email Input), ACT-01  │
│                      │ (Submit), ACT-18 (Toast), ACT-11 (Status Beacon)     │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ User Question        │ "What is their legal registration, privacy policy,   │
│ Answered             │ and where can I inspect technical documentation?"    │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Proof / Content      │ - Col 1: Wordmark lockup, mission, social handles.   │
│ Required             │ - Col 2: Capabilities direct route links.            │
│                      │ - Col 3: Physical address, phone, email, BIN note.   │
│                      │ - Col 4: Technical Dispatch newsletter with toast.   │
│                      │ - Legal bar: Trade license placeholder, Brand Guide  │
│                      │   link (/brand-guide), Design System (/design-system)│
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Headline Direction   │ "FineTuning. Orchestrating Extraordinary Moments."   │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Interactive Behavior │ - Newsletter form validates email and shows ACT-18   │
│                      │   Toast ("Subscribed to Technical Production Notes"). │
│                      │ - Back-to-top button returns scroll smoothly to top. │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Image Assets         │ assets/brand/fine-tuning-logo.png (Transparent PNG)  │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Section CTA          │ Newsletter Button: [Join Dispatch] (ACT-01, Amber).  │
└──────────────────────┴──────────────────────────────────────────────────────┘
```

---

## 5. Navigation, Footer & Route Hierarchy

### 5.1 Route Topology & Page Matrix
The primary marketing homepage (`index.html` / `/`) serves as the central anchor of the repository, interconnecting all specialized routes:

```
                                  [ / (index.html) ]
                              Master Experiential Portal
                                          │
      ┌──────────────┬────────────────────┼───────────────────┬──────────────┐
      ▼              ▼                    ▼                   ▼              ▼
[ /about ]     [ /service ]         [ /portfolio-2 ]     [ /contact ]    [ /request-rig ]
About Agency  6 Capabilities        180+ Case Studies     Direct Desk    Staging Wizard
(about.html)  (service.html)        (portfolio-2.html)   (contact.html) (demos/wizard...)
      │              │                    │                   │              │
      ├──────────────┴────────────────────┼───────────────────┴──────────────┤
      ▼                                   ▼                                  ▼
[ /console ]                        [ /brand-guide ]                 [ /design-system ]
Production Ops                       Brand Guidelines                 Master Catalog
(demos/admin...)                    (brand-guide/index)              (design-system/..)
```

### 5.2 Header Navigation Structure
- **Utility Bar**:
  - Live status indicator: `● Live Production Desk: Chattogram & Dhaka`
  - Direct Phone: `+880 1671-863685`
  - Direct Email: `finetuningbd@gmail.com`
- **Main Nav Bar**:
  - **Brand Lockup**: Vector SVG emblem (`assets/brand/fine-tuning-icon.svg`) + `FineTuning` serif wordmark.
  - **Links**:
    1. *Case Studies* (`#cases` or `/portfolio-2`)
    2. *Capabilities* (`#capabilities` or `/service`)
    3. *Staging Wizard* (`/request-rig` / `demos/onboarding-wizard.html`)
    4. *Console* (`/console` / `demos/admin-dashboard.html`)
    5. *About* (`/about`)
    6. *Contact* (`#contact` or `/contact`)
  - **Utility Actions**:
    - Theme Toggle: `[ 🌙 Dark / ☀️ Light ]` (`data-theme="dark"` / `data-theme="light"`)
    - Density Toggle: `[ ⊞ Density ]` (`.density-comfortable` / `.density-compact`)
    - Primary Button: `[Book Technical Briefing]` (ACT-01, Solar Amber)
    - Mobile Menu Trigger: Hamburger icon button (`aria-label="Open Navigation Menu"`)

---

## 6. SEO, Social Graph & Metadata Outline

### 6.1 Meta Tags Specification
```html
<!-- Primary Document Metadata -->
<title>Fine Tuning — Experiential Advertising & Turnkey Event Production</title>
<meta name="title" content="Fine Tuning — Experiential Advertising & Turnkey Event Production">
<meta name="description" content="Turnkey experiential event management and advertising agency in Chattogram and Dhaka. Certified P2.6 curved LED volumes, acoustic line-array engineering, and corporate summits.">
<meta name="keywords" content="event management chattogram, event production dhaka, curved LED screen bangladesh, sound system rental corporate summit, BSRM event agency, stage fabrication bangladesh">
<meta name="author" content="Fine Tuning Advertising Agency">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://finetuning.com.bd/">

<!-- Open Graph / WhatsApp / Facebook Link Previews -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://finetuning.com.bd/">
<meta property="og:site_name" content="Fine Tuning Advertising Agency">
<meta property="og:title" content="Fine Tuning — Experiential Staging & Turnkey Event Production">
<meta property="og:description" content="Precision stagecraft for Bangladesh's leading enterprises. Curved LED volumes, line-array acoustics, and corporate summits.">
<meta property="og:image" content="https://finetuning.com.bd/assets/brand/og-thumbnail.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="en_US">

<!-- Twitter Card Metadata -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://finetuning.com.bd/">
<meta name="twitter:title" content="Fine Tuning — Experiential Staging & Turnkey Event Production">
<meta name="twitter:description" content="Precision stagecraft for Bangladesh's leading enterprises. Direct WhatsApp desk: +880 1671-863685.">
<meta name="twitter:image" content="https://finetuning.com.bd/assets/brand/og-thumbnail.png">
```

### 6.2 JSON-LD Structured Data Schema
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://finetuning.com.bd/#organization",
      "name": "Fine Tuning Advertising Agency",
      "alternateName": "Fine Tuning",
      "url": "https://finetuning.com.bd",
      "logo": "https://finetuning.com.bd/assets/brand/fine-tuning-icon.svg",
      "telephone": "+8801671863685",
      "email": "finetuningbd@gmail.com",
      "sameAs": [
        "https://www.facebook.com/finetuningbd"
      ],
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "Shop 01 CDA Market, Kajir Dewri",
          "addressLocality": "Chattogram",
          "postalCode": "4203",
          "addressCountry": "BD"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "Gulshan-2",
          "addressLocality": "Dhaka",
          "postalCode": "1212",
          "addressCountry": "BD"
        }
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://finetuning.com.bd/#service",
      "name": "Fine Tuning Event Production & Staging",
      "provider": { "@id": "https://finetuning.com.bd/#organization" },
      "areaServed": "Bangladesh",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Production Staging Capabilities",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Curved P2.6 LED Video Volumes" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Acoustic Line Array Audio Engineering" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Turnkey Corporate Summits & AGMs" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "3D Architectural Exhibition Pavilions" } }
        ]
      }
    }
  ]
}
```

---

## 7. Trust, Privacy & Conversion Architecture

To ensure enterprise procurement compliance and eliminate friction for executive decision-makers:

1. **Enterprise Non-Disclosure Agreement (NDA) Pledge**:
   - Explicitly stated on the consultation modal and staging wizard: *"All event agendas, VIP rosters, and preliminary technical briefs are protected under Fine Tuning’s standard corporate confidentiality protocol."*
2. **Verified Physical Infrastructure**:
   - Physical street addresses and technical staging warehouses are transparently published in the footer and contact strip, distinguishing Fine Tuning from fly-by-night brokers.
3. **Guaranteed Response SLA**:
   - The WhatsApp Production Desk advertises an explicit response commitment: *"Active 2-hour technical response during operating hours (09:00–22:00 BST)."*
4. **Zero-Spam Communication Standard**:
   - Inquiries require only necessary event parameters (date, venue, pax, format). No marketing spam or unrequested sales calls.

---

## 8. Mobile Ordering & Responsive Transformation Rules

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      DESKTOP VS. MOBILE LAYOUT ADAPTATION                   │
├───────────────────────┬─────────────────────────────────────────────────────┤
│ Component             │ Desktop (≥ 1024px)       │ Mobile (< 768px)         │
├───────────────────────┼──────────────────────────┼──────────────────────────┤
│ Header                │ Full horizontal nav +    │ Sticky bar with logo +   │
│                       │ theme/density switchers  │ hamburger. Tapping opens │
│                       │ + CTA pill               │ NAV-03 sliding drawer.   │
├───────────────────────┼──────────────────────────┼──────────────────────────┤
│ Hero Section          │ 2-column: Left copy +    │ 1-column stacked: Copy   │
│                       │ right live telemetry     │ leads, telemetry card    │
│                       │ hologram card            │ stacks below CTA cluster.│
├───────────────────────┼──────────────────────────┼──────────────────────────┤
│ KPI Ribbon            │ 4-column inline grid     │ 2×2 touch-friendly grid  │
├───────────────────────┼──────────────────────────┼──────────────────────────┤
│ Client Marquee        │ Dual GPU drifting tracks │ Single track, touch-hold │
│                       │ at 32s loop interval     │ to inspect client marks. │
├───────────────────────┼──────────────────────────┼──────────────────────────┤
│ Case Studies Grid     │ 2×2 or 3-col card grid   │ Single column card stack │
│                       │ with hover zoom          │ with swipeable overflow. │
├───────────────────────┼──────────────────────────┼──────────────────────────┤
│ Capabilities Grid     │ 3-column × 2-row layout  │ Single column stack with │
│                       │                          │ expandable hardware tags.│
├───────────────────────┼──────────────────────────┼──────────────────────────┤
│ Soundcheck Fader      │ Wide analog dial gauge + │ Compact gauge dial +     │
│                       │ horizontal fader slider  │ 44px touch-slider track. │
├───────────────────────┼──────────────────────────┼──────────────────────────┤
│ Floating WhatsApp     │ 56px bottom-right FAB    │ Full-width persistent    │
│ Desk Bar              │ with pulse beacon        │ bottom anchor bar.       │
├───────────────────────┼──────────────────────────┼──────────────────────────┤
│ Corporate Footer      │ 4-column layout + legal  │ Single column accordion  │
│                       │ bottom bar               │ stack with sticky top.   │
└───────────────────────┴──────────────────────────┴──────────────────────────┘
```

---

## 9. Empty States & Asynchronous Fallback Rules

| Context | Trigger / Condition | UI Component | Fallback Message & Recovery Action |
| :--- | :--- | :--- | :--- |
| **Case Studies Filter** | User selects a tag combination with zero matching records. | `ACT-20` Empty State Card | *"No case studies found for this specific filter combination. [Reset Filters to View All 180+ Cases]"* |
| **Live Telemetry Offline** | User loses internet connection or telemetry WebSocket fails. | `ACT-19` Inline Notice | Shows amber warning icon: *"Live FOH sensor disconnected. Showing calibrated benchmark staging telemetry."* |
| **Staging Brief Calculation** | User enters zero pax or unselected venue hall. | `FRM-18` Form Validation | Displays helper hint: *"Please select a valid venue hall or enter approximate attendee count (minimum 50 pax)."* |
| **Newsletter Submission** | User enters invalid email format. | `ACT-17` Inline Alert | *"Please enter a valid corporate email address (e.g. name@company.com)."* |

---

## 10. Architectural ASCII Wireframes

### 10.1 Desktop Viewport Wireframe (Width: 1200px – 1440px)

```text
+----------------------------------------------------------------------------------------------------------+
|  UTILITY BAR: ● Live Production Desk: Chattogram & Dhaka  |  ☎ +880 1671-863685  |  finetuningbd@gmail.com|
+----------------------------------------------------------------------------------------------------------+
| [FT LOGO] FineTuning    Case Studies   Capabilities   Staging Wizard   Console   About   Contact         |
|                         [ 🌙 Dark / ☀️ Light ]   [ ⊞ Density ]            [ BOOK TECHNICAL BRIEFING ]    |
+----------------------------------------------------------------------------------------------------------+
|                                                                                                          |
|   HERO: STAGE AMBIENT FLARE (Solar Amber / Nordic Teal Spotlight Grid)                                  |
|                                                                                                          |
|   ● CHATTOGRAM & DHAKA • SEASON 2026 LIVE PRODUCTION                                                     |
|                                                                                                          |
|   Where Experiential Precision                         +-----------------------------------------------+ |
|   Meets Stage Energy.                                  | LIVE FOH TELEMETRY & SOUNDCHECK               | |
|                                                        | ● Status: FOH Online (Radisson Blu Grand)     | |
|   Turnkey corporate summits, panoramic curved          | [||||||||||||||||||||.......] 84.6 dBA (SAFE) | |
|   LED volumes, and acoustic line-array                 | --------------------------------------------- | |
|   engineering for Bangladesh's leading enterprises.    | Truss Load: 3.4 Tons Hanging  | P2.6 60 FPS   | |
|                                                        | Dante Network: 0 Dropouts     | Generator: OK | |
|   [ LAUNCH PRODUCTION BRIEF -> ]  [ EXPLORE 180+ CASES]| +-----------------------------------------------+ |
|                                                                                                          |
+----------------------------------------------------------------------------------------------------------+
|  TRUSTED BY BANGLADESH'S LEADING CONGLOMERATES & CORPORATE SUMMITS (Infinite GPU Marquee - 32s Loop)     |
|  [⚡ BSRM GROUP]     [🏦 UCB IMPERIAL]     [🚗 BYD ELECTRIC]     [🏍️ ROYAL ENFIELD]     [🏢 CPDL LTD]     |
+----------------------------------------------------------------------------------------------------------+
|                                                                                                          |
|  VERIFIED STAGING METRICS & KPI RIBBON                                                                  |
|  +--------------------+  +--------------------+  +--------------------+  +--------------------+         |
|  |  180+              |  |  65,000            |  |  99.98%            |  |  14                |         |
|  |  Turnkey Projects  |  |  Peak Audience     |  |  Stage Uptime (dBA)|  |  Brand & AV Honors |         |
|  |  ▲ +18% This Season|  |  ▲ Stadium Scaled  |  |  ▲ Zero Audio Drops|  |  ▲ Regional Awards |         |
|  +--------------------+  +--------------------+  +--------------------+  +--------------------+         |
|                                                                                                          |
+----------------------------------------------------------------------------------------------------------+
|                                                                                                          |
|  DOCUMENTED PRODUCTIONS: 180+ VERIFIED CASE STUDIES                                                     |
|  Filter: [ ALL ]  [ CORPORATE SUMMITS ]  [ AUTOMOTIVE EXPOS ]  [ ACADEMIC CONCLAVES ]  [ RETREATS ]     |
|                                                                                                          |
|  +-------------------------------+ +-------------------------------+ +-------------------------------+ |
|  | [IMAGE: BYD SEAL 5 PAVILION]  | | [IMAGE: BSRM ESG SUMMIT]      | | [IMAGE: BIZSTAR GRAND FINALE] | |
|  | 8th Motor Fest Chattogram     | | Radisson Blu Grand Ballroom   | | CU ACC Auditorium             | |
|  | Curved P2.6 LED • 4,500 Pax   | | Panoramic Stage • 850 Pax     | | Line Arrays • 2,200 Students  | |
|  | [ Inspect Case Schematics -> ]| | [ Inspect Case Schematics -> ]| | [ Inspect Case Schematics -> ]| |
|  +-------------------------------+ +-------------------------------+ +-------------------------------+ |
|                                                                                                          |
|                                    [ EXPLORE COMPLETE 180+ ARCHIVE ]                                     |
|                                                                                                          |
+----------------------------------------------------------------------------------------------------------+
|                                                                                                          |
|  CORE TURNKEY CAPABILITIES (Direct Agency Fleet & In-House Rigging Specialists)                          |
|                                                                                                          |
|  +-----------------------------+ +-----------------------------+ +-----------------------------+         |
|  | [ICON] CURVED LED VOLUMES   | | [ICON] ACOUSTIC LINE ARRAYS | | [ICON] CORPORATE SUMMITS    |         |
|  | P2.6 curved video walls,    | | JBL VTX & d&b networks,     | | Run-of-show choreography,   |         |
|  | Novastar 4K processors.     | | Dante digital speech clarity| | VIP protocols & staging.    |         |
|  | [ View Specifications -> ]  | | [ View Specifications -> ]  | | [ View Specifications -> ]  |         |
|  +-----------------------------+ +-----------------------------+ +-----------------------------+         |
|  +-----------------------------+ +-----------------------------+ +-----------------------------+         |
|  | [ICON] BESPOKE 3D PAVILIONS | | [ICON] 5G BONDED BROADCAST  | | [ICON] 360° VIDEO BOOTHS    |         |
|  | Architectural timber, metal | | Multi-SIM redundant uplink, | | Motorized high-speed 4K cam |         |
|  | and illuminated signage.    | | ultra-low latency streams.  | | instant branded slow-mo.    |         |
|  | [ View Specifications -> ]  | | [ View Specifications -> ]  | | [ View Specifications -> ]  |         |
|  +-----------------------------+ +-----------------------------+ +-----------------------------+         |
|                                                                                                          |
+----------------------------------------------------------------------------------------------------------+
|                                                                                                          |
|  INTERACTIVE FOH SOUNDCHECK & ACOUSTIC SAFETY DEMO                                                      |
|                                                                                                          |
|  +---------------------------------------------------------------------------------------------------+  |
|  |  FOH DECIBEL GAUGE DIAL                    INTERACTIVE SPL FADER (Move slider to test acoustic limits) |  |
|  |           [  84.6 dBA  ]                   [====|===============================================]     |  |
|  |         ACOUSTIC SAFE ZONE                 60 dBA (Whisper) ---- 85 dBA (Safe) ---- 110 dBA (Limit)  |  |
|  |                                                                                                       |  |
|  |  NOTICE: Audio levels automatically clamped at 95 dBA to prevent venue distortion & hearing strain. |  |
|  |  [ READ OUR ACOUSTIC SAFETY WHITEPAPER ]                                                             |  |
|  +---------------------------------------------------------------------------------------------------+  |
|                                                                                                          |
+----------------------------------------------------------------------------------------------------------+
|                                                                                                          |
|  CONFIGURE YOUR PRODUCTION IN 60 SECONDS (3-Step Staging Wizard Teaser)                                  |
|                                                                                                          |
|  Step 1: Venue & Pax        Step 2: Technical Modules        Step 3: Staging Estimate                   |
|  +---------------------------------------------------------------------------------------------------+  |
|  | Select Venue: [ Radisson Blu Chattogram ▼ ]    Expected Attendees: [ 800 - 1,200 Pax ▼ ]          |  |
|  | Required Modules: [X] Curved P2.6 LED   [X] Line Array Audio   [ ] 360 Booth   [X] 5G Broadcast   |  |
|  | Preliminary Sizing: Power ~ 45 kVA • Truss Footprint: 36ft × 18ft • FOH Audio Channels: 16        |  |
|  |                                                                                                   |  |
|  | [ SUBMIT SPECIFICATION & LOCK DATE ]    [ Open Full Interactive Staging Wizard -> ]               |  |
|  +---------------------------------------------------------------------------------------------------+  |
|                                                                                                          |
+----------------------------------------------------------------------------------------------------------+
|                                                                                                          |
|  DUAL-HUB OPERATIONAL READINESS (Chattogram HQ & Dhaka Executive Hub)                                   |
|                                                                                                          |
|  +-------------------------------------------+ +-----------------------------------------------------+  |
|  | CHATTOGRAM OPERATIONS BASE                | | DHAKA EXECUTIVE HUB                                 |  |
|  | Nasirabad Logistics Warehouse &           | | Gulshan-2, Dhaka 1212                               |  |
|  | Shop 01 CDA Market, Kajir Dewri, Ctg 4203 | | Executive staging desk & summit consultation       |  |
|  | Hotline: +880 1671-863685                 | | Direct line: +880 1671-863685                       |  |
|  +-------------------------------------------+ +-----------------------------------------------------+  |
|                                                                                                          |
|  [ 💬 WHATSAPP LIVE PRODUCTION DESK ]       [ SCHEDULE TECHNICAL BRIEFING (MODAL) ]                     |
|                                                                                                          |
+----------------------------------------------------------------------------------------------------------+
|                                                                                                          |
|  FOOTER: FineTuning Advertising Agency                                                                   |
|                                                                                                          |
|  [FT LOGO] FineTuning         CAPABILITIES            EXECUTIVE HUBS          TECHNICAL DISPATCH         |
|  Orchestrating extraordinary  - Curved LED Volumes    - Chattogram Base       Subscribe for rigging &    |
|  experiential productions     - Line Array Acoustics  - Dhaka Hub             acoustic whitepapers:      |
|  across Bangladesh.           - Corporate Summits     - +880 1671-863685      [ Enter corporate email  ] |
|  @finetuningbd                - 3D Expo Pavilions     - finetuningbd@gmail.com[ JOIN DISPATCH -> ]       |
|                                                                                                          |
|  ------------------------------------------------------------------------------------------------------  |
|  © 2026 Fine Tuning Advertising Agency. All rights reserved. Trade License: [PENDING STAKEHOLDER BIN]   |
|  [ Brand Guidelines ]  •  [ Design System v2.5 ]  •  [ Operations Console ]  •  [ System Status: Normal] |
+----------------------------------------------------------------------------------------------------------+
```

---

### 10.2 Mobile Viewport Wireframe (Width: 375px – 390px)

```text
+---------------------------------------+
| ● Desk Online: Ctg & Dha  | ☎ Call   |
+---------------------------------------+
| [FT] FineTuning          [ ☀️ ] [ ☰ ] |
+---------------------------------------+
|                                       |
| ● SEASON 2026 LIVE PRODUCTION         |
|                                       |
| Where Experiential                    |
| Precision Meets                       |
| Stage Energy.                         |
|                                       |
| Turnkey corporate summits, panoramic  |
| curved LED volumes, and acoustic      |
| line-array engineering.               |
|                                       |
| [ LAUNCH PRODUCTION BRIEF -> ]        |
| [ EXPLORE 180+ CASE STUDIES ]         |
|                                       |
| +-----------------------------------+ |
| | LIVE FOH TELEMETRY                | |
| | ● Radisson Blu Grand Ballroom     | |
| | [||||||||||||||.....] 84.6 dBA    | |
| | Truss: 3.4T  |  P2.6 LED: 60 FPS  | |
| +-----------------------------------+ |
|                                       |
+---------------------------------------+
| TRUSTED BY LEADING CONGLOMERATES      |
| >>> [BSRM]  [UCB]  [BYD]  [ENFIELD] >>>
+---------------------------------------+
|                                       |
| VERIFIED STAGING METRICS              |
| +-----------------+ +---------------+ |
| | 180+            | | 65,000        | |
| | Productions     | | Peak Audience | |
| +-----------------+ +---------------+ |
| +-----------------+ +---------------+ |
| | 99.98%          | | 14            | |
| | Stage Uptime    | | Stage Honors  | |
| +-----------------+ +---------------+ |
|                                       |
+---------------------------------------+
|                                       |
| DOCUMENTED CASE STUDIES               |
| Filters: [ All ] [ Summits ] [ Expos ]|
|                                       |
| +-----------------------------------+ |
| | [IMAGE: BYD SEAL 5 SHOWCASE]      | |
| | 8th Motor Fest Chattogram         | |
| | Curved P2.6 LED • 4,500 Pax       | |
| | [ View Project Details -> ]       | |
| +-----------------------------------+ |
| +-----------------------------------+ |
| | [IMAGE: BSRM ESG SUMMIT]          | |
| | Radisson Blu Ballroom             | |
| | Panoramic Stage • 850 Pax         | |
| | [ View Project Details -> ]       | |
| +-----------------------------------+ |
|                                       |
| [ EXPLORE COMPLETE 180+ ARCHIVE ]     |
|                                       |
+---------------------------------------+
|                                       |
| CORE CAPABILITIES                     |
|                                       |
| +-----------------------------------+ |
| | [ICON] CURVED LED VOLUMES         | |
| | P2.6 high-refresh LED walls.      | |
| | Specs: Novastar 4K processing.    | |
| +-----------------------------------+ |
| +-----------------------------------+ |
| | [ICON] ACOUSTIC LINE ARRAYS       | |
| | Dante networked line-array sound. | |
| | Specs: JBL VTX & d&b audiotechnik.| |
| +-----------------------------------+ |
| +-----------------------------------+ |
| | [ICON] TURNKEY CORPORATE SUMMITS  | |
| | Run-of-show choreography & VIP.   | |
| +-----------------------------------+ |
|                                       |
+---------------------------------------+
|                                       |
| ACOUSTIC SAFETY METER DEMO            |
|                                       |
| +-----------------------------------+ |
| | [ 84.6 dBA - ACOUSTIC SAFE ]      | |
| | FADER: [====|==================]  | |
| | 60 dBA             110 dBA (MAX)  | |
| | Levels auto-clamped at 95 dBA.    | |
| +-----------------------------------+ |
|                                       |
+---------------------------------------+
|                                       |
| QUICK STAGING ESTIMATOR               |
|                                       |
| Venue: [ Radisson Blu Ctg      ▼ ]   |
| Pax:   [ 500 - 1,000 Attendees ▼ ]   |
|                                       |
| Est. Power: 45 kVA • Truss: 36×18ft   |
| [ SUBMIT BRIEF SPECIFICATION ]        |
|                                       |
+---------------------------------------+
|                                       |
| DUAL EXECUTIVE HUBS                   |
|                                       |
| • Chattogram: Nasirabad Base &        |
|   CDA Market, Kajir Dewri 4203        |
| • Dhaka: Gulshan-2 Hub                |
|                                       |
| [ ☎ CALL DIRECT: +880 1671-863685 ]   |
| [ SCHEDULE TECHNICAL BRIEFING ]       |
|                                       |
+---------------------------------------+
|                                       |
| FOOTER & COMPLIANCE                   |
|                                       |
| [FT] FineTuning Agency                |
| Chattogram & Dhaka, Bangladesh        |
|                                       |
| [ Enter corporate email...          ] |
| [ SUBSCRIBE TO DISPATCH ]             |
|                                       |
| Trade Lic: [PENDING STAKEHOLDER BIN]  |
| © 2026 Fine Tuning Agency.            |
| [ Brand Guide ] • [ Design System ]   |
|                                       |
+---------------------------------------+
| PERSISTENT BOTTOM CONVERSION BAR      |
| [ 💬 WhatsApp Desk ] [ Book Briefing ]|
+---------------------------------------+
```

---

## 11. Maintenance & Review Checklist

Before approving any HTML implementation authored against this architecture, verify:

- [ ] **No Decorative Coding Yet**: This document defines information architecture, content hierarchy, and ASCII layouts only.
- [ ] **Tone & Vocabulary**: Copy uses active voice, technical specificity, and zero filler phrases.
- [ ] **Proof Integrity**: Every client referenced is verified in `docs/brand-activities-overview.md` (BSRM, UCB, BYD, Royal Enfield, CPDL, Akij, KDS, BUET).
- [ ] **Button Contrast Mandate**: Primary buttons strictly map to Solar Amber (`#F09320`) background with Midnight Obsidian (`#070D18`) text (8.24:1 AAA contrast).
- [ ] **Candidate Component Mapping**: All candidates map 1:1 to verified component IDs in [docs/COMPONENT_INVENTORY.md](file:///d:/my-project/FineTuning/finetuning.com.bd/docs/COMPONENT_INVENTORY.md).
- [ ] **Clickable File References**: All internal file citations utilize valid markdown links with `file:///` URLs and forward slashes.

---

*Master Information Architecture & Section Plan authored and approved for Fine Tuning engineering execution.*

