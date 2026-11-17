# Fine Tuning — Zero-Framework Multipage Static Showcase (`preview-static/`)

> **Production-Grade, Framework-Free Multipage Static Showcase**  
> *Organization: Fine Tuning Advertising Agency (Chattogram & Dhaka, Bangladesh)*  
> *Design System Version: 2.5.0 | Date: November 2026*  
> *Zero Runtime Dependencies: No React, Vue, build step, bundler, Node runtime, or backend required.*

---

## 1. Quick Start & Direct File-Open Instructions

This showcase is engineered to run **directly off the local filesystem** with zero build tools or dependencies.

### Option A: Direct File Open (Zero Server Required)
You can directly open any `.html` page in your web browser:
1. Navigate to the `preview-static/` directory in your file explorer.
2. Double-click `index.html` (or right-click → **Open with** → Google Chrome / Mozilla Firefox / Microsoft Edge / Safari).
3. The page will open instantly with full styling, typography, local interactive controls, theme switching, and responsive layouts via `file:///` protocol.

### Option B: Minimal Local HTTP Server (Recommended for Full Browser Feature Fidelity)
While all pages work via direct `file:///` opening, certain modern browsers enforce strict privacy sandbox restrictions on `localStorage` or local SVG glyphs when served directly from disk. To preview with 100% web-standard parity, execute this one-line command:

```bash
# Python 3 (Installed on virtually all systems)
python -m http.server 8080 --directory preview-static
```

*Alternative if Node/NPM is installed:*
```bash
npx serve preview-static -p 8080
```

Then visit: **`http://localhost:8080/`** (or `http://localhost:8080/index.html`).

---

## 2. Directory Structure & Architecture

All assets, styles, and scripts are self-contained within `preview-static/`:

```
preview-static/
├── assets/
│   ├── brand/
│   │   ├── fine-tuning-icon.svg         # Official vector brand icon (viewBox 0 0 2400 1758)
│   │   ├── fine-tuning-logo.png         # High-resolution agency logo
│   │   └── og-thumbnail.png             # Social Open Graph card
│   └── images/
│       ├── program-01/                  # 8th Motor Fest (BYD & Royal Enfield pavilions)
│       ├── program-02/                  # BSRM CORE Annual ESG Summit (Radisson Blu)
│       ├── program-03/                  # BIZSTAR Season V Grand Finale
│       └── program-04/                  # UCB Bank Retreat (Cox's Bazar amphitheater)
├── css/
│   ├── tokens.css                       # Primitive color ramps, spacing scales, typography
│   ├── theme.css                        # Semantic dual-theme (dark/light) & density modes
│   └── site.css                         # Shared composition styles & responsive layout rules
├── js/
│   └── main.js                          # Pure vanilla JS interaction module (zero framework)
├── index.html                           # 01. Master Marketing Portal & FOH Control Deck
├── about.html                           # 02. Agency Ethos, Fleet Ownership & Milestones
├── service.html                         # 03. Staging Capabilities & Hardware Fleet Rider
├── portfolio-2.html                     # 04. Event Portfolio Archive (Search & Filters)
├── contact.html                         # 05. Executive Hubs & Staging Brief Dispatch
├── blog-grid.html                       # 06. Technical Dispatch & Engineering Whitepapers
├── career.html                          # 07. Engineering Careers & Crew Recruitment
├── team-single.html                     # 08. Specialist Profile: Lead Production Director
├── my-account.html                      # 09. Client VIP Event Portal & Live Staging Console
├── faq.html                             # 10. Technical & Staging Production FAQ
├── privacy.html                         # 11. Corporate Privacy Policy & NDA Protocols
├── terms.html                           # 12. Master Staging & Production Terms
├── 404.html                             # 13. System 404 - Stage Frequency Not Found (100vh)
├── 500.html                             # 14. System 500 - FOH Signal Interrupted (100vh)
├── 503.html                             # 15. System 503 - Acoustic Recalibration (100vh)
├── maintenance.html                     # 16. System Maintenance Screen (100vh)
└── README.md                            # Comprehensive runbook & documentation
```

---

## 3. Page Inventory & User Tasks

| Route | Page Title & Scope | Primary User Task & Key Patterns |
| :--- | :--- | :--- |
| `index.html` | Master Marketing Portal | Experience FOH Soundcheck Equalizer, adjust decibel fader (<85 dBA vs. >95 dBA limiter), review verified client marquee, calculate power/trussing via 3-step staging wizard. |
| `about.html` | About Agency & Ethos | Inspect in-house fleet ownership pillars (zero third-party sub-rentals), Nasirabad & Tejgaon warehouse infrastructure, 2018–2026 growth timeline. |
| `service.html` | Staging Capabilities | Review specs for Curved P2.6 LED volumes, Dante line arrays (0.25ms latency), Prolyte H30V box trussing, comparative venue scale matrix. |
| `portfolio-2.html` | Event Portfolio Archive | Real-time text search, category filter pills (Corporate Summit, Automotive Pavilion), genuine WebP galleries, CAD schematic inspect triggers, empty search state. |
| `contact.html` | Executive Hubs & Briefing | Dual-hub split (Chattogram CDA Market & Dhaka Gulshan-2), 24/7 WhatsApp Live Desk callout, validated RFP brief form with labeled simulation feedback. |
| `blog-grid.html` | Technical Dispatch | Read acoustic ray-tracing whitepaper, technical engineering guides (LED curvature, 5:1 rigging factors, neutral floating), newsletter subscribe strip. |
| `career.html` | Engineering Careers | Safety culture manifesto, Petzl PPE gear, active job openings accordion (Rigging Inspector, Acoustic Director, LED Technician). |
| `team-single.html` | Technical Leadership | Director profile (Tanvir Ahmed), certifications (`Audinate Dante L3`, `ETCP Rigging`), standard FOH hardware rider, directed summits grid. |
| `my-account.html` | Client VIP Event Portal | Live rig telemetry tiles (Truss load 4.8T, Dante latency 0.25ms), CAD & simulation download vault (DWG, EASE PDF), on-site crew manifest, clearance approval. |
| `faq.html` | Technical Production FAQ | Instant question search filter, categorized accordions (speech intelligibility, P2.6 viewing distances, weather ratings, Mushak-6.3 VAT & BIN). |
| `privacy.html` | Corporate Privacy & NDA | Table of contents sidebar, CAD blueprint vault encryption, bilateral NDA protocols, zero private attendee conversation recording guarantee. |
| `terms.html` | Master Staging Terms | Rigging safety autonomy & inspector stop-work authority, outdoor wind thresholds (>40 km/h mandatory rig lowering), 50/40/10 milestone invoicing. |
| `404.html` | System 404 Error | Single-screen 100vh constraint, illuminated tuner dial graphic (`000.00 MHz NO CARRIER`), zero page scroll, rapid recovery navigation. |
| `500.html` | System 500 Error | Single-screen 100vh constraint, diagnostic FOH telemetry terminal trace, retry reconnect action, direct emergency hotline. |
| `503.html` | System 503 Recalibration | Single-screen 100vh constraint, real-time JavaScript countdown clock, direct WhatsApp live desk trigger, status verification button. |
| `maintenance.html` | Scheduled Calibration | Single-screen 100vh constraint, calibration status, 24/7 hotline strip. |

---

## 4. Design System & Strict Operational Invariants

### Invariant 1: Solar Amber Button Text Contrast (8.24:1 AAA)
- Primary buttons with Solar Amber background (`#F09320` / `--color-action-primary`) **MUST ALWAYS HAVE Midnight Obsidian (`#070D18` / `--color-slate-950`) text**.
- **Audit**: **100% PASS across all pages**. Controlled via `.btn-amber-primary { background-color: var(--color-action-primary); color: var(--color-slate-950) !important; }`. White text is strictly prohibited.

### Invariant 2: Nordic Teal Text Contrast on Light Canvas
- In Studio Editorial light mode, all body text, hyperlinks, and data labels automatically bind to `--color-teal-700` (`#2B5E70`, **7.15:1 AAA**). Logo raw teal (`#4694B1`) is confined to decorative vector emblem paths and dark mode.
- **Audit**: **100% PASS**.

### Invariant 3: Zero Fabricated Proof, Statistics, or Logos
- Only verified enterprise clients from `docs/brand-activities-overview.md` are featured:
  - **BSRM Group** (CORE Annual ESG Summit at Radisson Blu Chattogram Bay Ballroom)
  - **BYD Auto Bangladesh & Royal Enfield Bangladesh** (8th Motor Fest pavilions)
  - **UCB Bank** (Annual Leadership Retreat at Cox's Bazar amphitheater)
  - **BIZSTAR** (Season V Grand Finale at Radisson Blu)
  - **CPDL, Akij Group, KDS Group, BUET Graduates Club**
- All photography strictly sourced from authentic WebP assets in `assets/images/`.
- **Audit**: **100% PASS**.

### Invariant 4 & 5: Token Single Source of Truth & Zero Silent Forking
- All component styles strictly inherit from `css/tokens.css` and `css/theme.css`. Zero hardcoded hex colors exist in component classes.
- **Audit**: **100% PASS**.

### Invariant 6: Single-Screen Constraint for System Pages
- `404.html`, `500.html`, `503.html`, and `maintenance.html` strictly enforce `height: 100vh; overflow: hidden;` with zero scrollbars across desktop and mobile.
- **Audit**: **100% PASS**.

---

## 5. Accessibility & Interaction Features

1. **Keyboard Focus & Navigation**:
   - Universal 2px Solar Amber outline (`:focus-visible`) with 2px offset.
   - Accessible skip-to-content links present at the top of every document (`.skip-link`).
   - Pressing `Escape` universally dismisses open mobile drawers and modal dialogs.
   - ARIA roles (`role="dialog"`, `aria-modal="true"`, `role="tab"`, `role="tabpanel"`) with arrow key navigation between tabs.
2. **Reduced Motion**:
   - Respected via `@media (prefers-reduced-motion: reduce)` in `css/site.css`: disables non-essential animations, infinite marquee movement, and fader pulses.
3. **Transparent Demo Labeling**:
   - Form submissions and interactive download buttons are explicitly labeled:  
     `[DEMO ONLY: Client-side validation active. Form data is simulated locally without sending to a live server. For actual production dispatch, call +880 1671-863685.]`

---

*Zero-Framework Multipage Static Showcase approved for production distribution.*

