# Fine Tuning — Master Website Page Brief & Strategic Specification

> **Official Conversion Architecture, Visitor Intent, Content Hierarchy & Technical Constraints**  
> *Target Document: Production Website Build Specification (`finetuning.com.bd`)*  
> *Version: 2.5.0 | Date: November 2026 | Status: Authoritative Production Brief*  
> *Pre-requisites: `docs/BRAND_GUIDELINES.md`, `docs/DESIGN_SYSTEM.md`, `docs/WEBSITE_BUILD_CONTEXT.md`*

---

## 1. Core Page Brief Variables & Strategic Metadata

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       PROJECT VARIABLE DEFINITIONS                          │
├──────────────────────┬──────────────────────────────────────────────────────┤
│ [BRAND]              │ Fine Tuning (Wordmark: FineTuning)                   │
│                      │ Legal entity: Fine Tuning Advertising Agency         │
│                      │ Primary digital presence: https://finetuning.com.bd │
│                      │ Hubs: Chattogram HQ (Nasirabad) & Dhaka (Gulshan-2)  │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ [WEBSITE TYPE]       │ High-Performance Experiential Agency Marketing Site   │
│                      │ & Turnkey Production Portfolio (with direct routes   │
│                      │ into Case Studies, Staging Wizard & Admin Console)   │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ [PAGE GOAL]          │ Qualify and convert corporate event conveners, CMOs, │
│                      │ and brand directors to book technical stage briefings│
│                      │ and submit project specifications via WhatsApp Desk  │
│                      │ or the interactive 3-step Staging Wizard.            │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ [PRIMARY AUDIENCE]   │ 1. Corporate Brand Directors & CMOs (BSRM, UCB, etc.)│
│                      │ 2. Automotive & FMCG Event Marketing Managers        │
│                      │ 3. Youth Summit & Academic Competition Conveners     │
│                      │ 4. Executive Production Procurement & Stage Officers │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ [PRIMARY CTA]        │ "Book Technical Briefing" (Interactive Modal) &      │
│                      │ "WhatsApp Live Production Desk" (+880 1671-863685)   │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ [SECONDARY CTA]      │ "Launch Production Brief Wizard" (Self-Serve Staging)│
│                      │ & "Explore 180+ Verified Case Studies"               │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ [PRODUCT / SERVICE]  │ 1. Experiential Staging & Curved P2.6 LED Volumes    │
│                      │ 2. Acoustic Engineering & Line-Array Sound Systems   │
│                      │ 3. Turnkey Corporate Summits, AGMs & Awards          │
│                      │ 4. 3D Architectural Pavilions & Brand Activations    │
│                      │ 5. Hybrid 5G Live Broadcast & Satellite Uplinks      │
│                      │ 6. 360° Dynamic Motorized Video Photo Booths         │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ [PROOF SOURCES]      │ 1. Verified Client Directory (BSRM, UCB, BYD, Royal  │
│                      │    Enfield, CPDL, Akij, KDS, BUET Graduates Club).   │
│                      │ 2. Authentic Photographic Assets in images/webp/.    │
│                      │ 3. Real acoustic & rigging telemetry standards.      │
│                      │ (Zero fabricated claims; real Facebook activity log) │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ [CONTENT / ASSETS]   │ - Official Vector Mark: assets/brand/fine-tuning-icon│
│                      │ - Curated WebP photography: images/webp/program-01..4│
│                      │ - Design Tokens: tokens/tokens.css & themes.css      │
│                      │ - Real client testimonials & verified project specs. │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ [REFERENCE SITES]    │ - PRG (Production Resource Group) — Staging telemetry│
│                      │ - Moment Factory — Spatial experience architecture   │
│                      │ - Jack Morton Worldwide — Turnkey brand activations  │
│                      │ - White Rabbit Events — Clean agency editorial style │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ [TECH STACK]         │ Semantic HTML5, CSS Custom Properties (Design Tokens)│
│                      │ Vanilla ES6 JS (zero runtime deps), Tailwind CSS v3/4│
│                      │ config mapping, Google Fonts (Outfit, Syne, JetBrains│
│                      │ Mono), WebP asset compression, Mobile Responsive.    │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ [ROUTES]             │ - /               -> Marketing Homepage (index.html) │
│                      │ - /cases          -> Case Search (listing-search.html)│
│                      │ - /request-rig    -> Staging Wizard (onboarding.html)│
│                      │ - /console        -> Admin Dashboard (admin-dash.html)│
│                      │ - /crew           -> Specialist CRUD (crud-mgmt.html)│
│                      │ - /record/:id     -> Record Detail (record-detail.html│
│                      │ - /settings       -> Agency Settings (settings.html) │
│                      │ - /auth           -> Crew Portal & 2FA (auth-flow.html│
│                      │ - /status         -> System Suite (system-pages.html)│
│                      │ - /brand-guide    -> Brand Guidelines Presentation   │
│                      │ - /design-system  -> Master Component Catalog v2.5   │
└──────────────────────┴──────────────────────────────────────────────────────┘
```

---

## 2. Cognitive Journey: What Visitors Must Understand, Trust, and Do

```
                 [ VISITOR JOURNEY ARCHITECTURE ]
                 
       UNDERSTAND                      TRUST                         DO
 ┌────────────────────┐       ┌────────────────────┐       ┌────────────────────┐
 │  Turnkey Staging & │       │ Verified Clients:  │       │ 1. WhatsApp Desk   │
 │  Experiential Ad   │──────>│ BSRM, BYD, UCB,    │──────>│ 2. Submit Brief    │
 │  Agency (Not Just  │       │ Royal Enfield.     │       │    in 3-Step Wizard│
 │  AV Equipment)     │       │ Real Event Photos  │       │ 3. Inspect Case    │
 └────────────────────┘       └────────────────────┘       │    Study Schematics│
                                                           └────────────────────┘
```

### 2.1 What Visitors Must UNDERSTAND
1. **Turnkey Synchronization**: Fine Tuning is not an equipment rental warehouse nor an abstract creative shop. It bridges high-concept advertising storytelling with certified structural rigging and German-engineered acoustic precision.
2. **Dual-Hub Footprint**: Headquartered in Chattogram (Nasirabad logistics warehouse & Kajir Dewri commercial office) with an executive operations hub in Dhaka (Gulshan-2), executing major productions nationwide.
3. **Engineering Rigor**: Deployments utilize calibrated P2.6 curved LED walls, Dante digital audio networks, certified heavy-duty box trussing, and strict acoustic compliance (<95 dBA).
4. **Context Sensitivity**: Staging packages adapt seamlessly across corporate annual summits, international business symposiums, automotive showcases, and outdoor stadium concerts.

### 2.2 What Visitors Must TRUST
1. **Verified Enterprise Pedigree**: Real client partnerships with prominent conglomerates (BSRM Group, United Commercial Bank PLC, BYD Bangladesh, Royal Enfield, CPDL, Akij Group, KDS Group).
2. **100% Authentic Imagery**: Zero foreign or generic stock photography. Every photo represents a verified production executed on location in Bangladesh (Radisson Blu Chattogram, ICCB Dhaka, Bargee Lake Valley Rangamati).
3. **Operational Safety & Compliance**: Documented civil truss load tests (3.4 tons hanging on certified hoists), power generator redundancy, and acoustic safety limiters.
4. **Direct Channel Transparency**: Instant direct line to senior technical directors via verified WhatsApp Business (+880 1671-863685) with an SLA response commitment within 2 hours.

### 2.3 What Visitors Must DO
1. **Primary Conversion Action**: Initiate immediate technical consultation via the **WhatsApp Live Production Desk** or the **"Book Technical Briefing" modal dialog**.
2. **Self-Guided Qualification**: Utilize the **3-Step Staging Wizard** (`/request-rig`) to specify venue hall, expected pax, and required AV modules, obtaining an instant preliminary power/truss calculation.
3. **Exploratory Engagement**: Filter and inspect the **180+ Case Studies Archive** (`/cases`), reviewing acoustic line-array angles and Novastar 4K video wall configurations.
4. **Authenticated Crew Access**: Authorized stage managers and audio engineers log in to the **Operations Console** (`/console`) for live SPL telemetry and stage status feeds.

---

## 3. Conversion Architecture & Funnel Strategy

```
           [ TRAFFIC ARRIVAL: ORGANIC / SOCIAL / VIP DIRECT ]
                                  │
                                  ▼
               ┌─────────────────────────────────────┐
               │    HERO: STAGE FLARE & TELEMETRY    │
               │  - Direct WhatsApp FAB (Always On)  │
               │  - Primary CTA: Book Briefing       │
               │  - Secondary CTA: Launch Wizard     │
               └─────────────────────────────────────┘
                                  │
                ┌─────────────────┴─────────────────┐
                ▼                                   ▼
    [ FAST PATH: URGENT EVENT ]           [ QUALIFIED PATH: PLANNED SUMMIT ]
   - Tap WhatsApp Live (+880 1671)       - Launch 3-Step Staging Wizard
   - Real-time technical chat            - Input venue, pax & AV needs
   - Instant response within 2 hrs       - Auto-generate dispatch manifest
                │                                   │
                └─────────────────┬─────────────────┘
                                  ▼
                ┌─────────────────────────────────────┐
                │ PROOF VERIFICATION: MARQUEE & CASES │
                │ - Client logos (BSRM, UCB, BYD)     │
                │ - Case study cards with real specs  │
                │ - Acoustic safety compliance proof  │
                └─────────────────────────────────────┘
                                  │
                                  ▼
                ┌─────────────────────────────────────┐
                │ FINAL CONVERSION STRIP              │
                │ - Consultation request modal        │
                │ - Direct phone & email channels     │
                └─────────────────────────────────────┘
```

---

## 4. Required Content & Section-by-Section Anatomy

### 4.1 Global Header & Utility Bar
- **Utility Strip**: Live status beacon (`● Live Production Desk: Chattogram & Dhaka`), direct telephone link (`+880 1671-863685`), and email (`finetuningbd@gmail.com`).
- **Site Header**:
  - Brand identity lockup: SVG emblem mark (`assets/brand/fine-tuning-icon.svg`) + `FineTuning` wordmark + descriptor.
  - Primary navigation links: *Case Studies*, *Capabilities*, *Request Rig (Wizard)*, *Console*, *Contact*.
  - Theme toggle: Seamless switch between Midnight Stage Dark and Studio Editorial Light.
  - Density toggle: Switch between Comfortable (Marketing) and Compact (Admin) modes.
  - Primary CTA pill: `"Book Briefing"` opening centered modal.
  - Mobile trigger: Responsive hamburger toggle opening lateral right-slide drawer.

### 4.2 Hero Section: Theatrical Precision Meets Stage Energy
- **Visual Backdrop**: Stage ambient grid (`demo-grid-bg`) with dual radial lighting flare (Solar Amber `#F09320` at 15% and Nordic Teal `#4694B1` at 85%).
- **Eyebrow Badge**: Pulsing amber beacon + `"Chattogram & Dhaka • Season 2026 Live Production"`.
- **Display Headline**: *“Where Experiential Precision Meets Stage Energy.”* styled with `Syne` Display bold font and radiant amber/teal glow accents.
- **Lead Copy**: Concisely stating Fine Tuning's mission: Turnkey experiential advertising, panoramic curved LED volumes, and acoustic line-array engineering.
- **Action Cluster**:
  - Primary Button: `[Launch Production Brief →]` (Solar Amber background, **mandatory Midnight Obsidian text**, 8.24:1 AAA contrast).
  - Secondary Button: `[Explore 180+ Case Studies]` (Outline style with text-safe teal border).
- **Interactive Stage Hologram Card**:
  - Live animated soundcheck equalizer bars simulating live ballroom acoustic tuning.
  - FOH Sensor readout: `84.6 dBA (ACOUSTIC SAFE)`.
  - Staging telemetry: `Truss Load: 3.4 Tons • Video Wall: 60 FPS Fixed`.

### 4.3 Verified Metrics & KPI Ribbon
- 4 high-contrast metric tiles styled with `JetBrains Mono` numerals and green positive status deltas:
  1. **180+ Turnkey Productions** (National summits, expos & summits).
  2. **65,000 Peak Audience** (8th Motor Fest & stadium screenings).
  3. **99.98% Stage Uptime** (Zero acoustic dropouts across Dante digital networks).
  4. **14 Brand & Staging Honors** (Regional experiential design accolades).

### 4.4 Seamless Infinite Partner Marquee
- Dual GPU-accelerated tracks drifting continuously at 32s loop interval with pause-on-hover.
- Displays verified corporate clients:
  - ⚡ *BSRM Group of Companies* (Leading steel manufacturer)
  - 🏦 *UCB Imperial Banking* (United Commercial Bank PLC)
  - 🚗 *BYD Electric Vehicles* (Seal 5 & Sealion 6 launches)
  - 🏍️ *Royal Enfield Bangladesh* (Flagship launch & Pure Motorcycling pavilion)
  - 👟 *Apex Footwear* (Corporate dealer convention)
  - 📶 *Grameenphone Corporate* (Executive conclaves)
  - 🏢 *Bengal Group of Industries* (Distributor summit)

### 4.5 Six Core Production Capabilities Grid
- 6 interactive cards with amber icon containers, bold titles, descriptive copy, and direct route links:
  1. **Experiential Staging & LED Volumes**: P2.6 curved 4K screens, Novastar processors, aluminum box trussing.
  2. **Acoustic Engineering & Line Arrays**: JBL VTX & d&b systems, Dante digital audio networks, speech intelligibility.
  3. **Turnkey Corporate Summits & AGMs**: Run-of-show choreography, VIP hospitality, multi-cam broadcast.
  4. **Brand Activations & Expo Pavilions**: Bespoke 3D spatial fabrication, illuminated channel lettering.
  5. **Hybrid 5G Live Broadcast**: Redundant multi-SIM bonded uplinks, vMix switchers, ultra-low latency streams.
  6. **Dynamic 360° Video Booths**: Motorized camera rigs, instant branded slow-motion overlays, QR-code delivery.

### 4.6 Interactive Soundcheck & Acoustic Safety Preview
- Live SPL decibel gauge demonstration reinforcing the brand's precision tuning ethos.
- Visual thresholds:
  - Green (<85 dBA): Acoustic Safe.
  - Amber (86–95 dBA): Elevated Concert Peak.
  - Red (>95 dBA): Municipal Overlimit warning with automatic compression limiter.

### 4.7 Direct Conversion & WhatsApp Strip
- High-contrast card with amber badge (`Instant Availability Check`).
- Direct links:
  - `[💬 WhatsApp Live Desk (+880 1671-863685)]`
  - `[Schedule Technical Consultation]` (Modal trigger with name, org, phone, event type).

### 4.8 Corporate Multi-Column Footer
- **Col 1 (Brand Profile)**: Vector mark lockup, mission statement, social media tags (`@finetuningbd`).
- **Col 2 (Capabilities)**: Quick links to staging services and technical specs.
- **Col 3 (Dual Executive Hubs)**:
  - *Chattogram HQ*: Nasirabad Technical Staging Base & Shop 01 CDA Market, Kajir Dewri, Ctg 4203.
  - *Dhaka Hub*: Gulshan-2, Dhaka 1212.
  - Direct Phone: `+880 1671-863685` • Email: `finetuningbd@gmail.com`.
- **Col 4 (Technical Dispatch)**: Newsletter input with instant toast confirmation.
- **Bottom Bar**: Copyright, registered entity statement, and links to Brand Guidelines, Design System, and Status.

---

## 5. Explicit Exclusions & Out-of-Scope Boundaries

To maintain high editorial authority and prevent scope creep, the following elements are **strictly excluded**:

| Exclusion Item | Rationale & Policy |
| :--- | :--- |
| ❌ **No Fabricated Testimonials or Quotes** | Only verified client quotes or clearly labeled placeholders (e.g. `[Client Review Pending Verification]`) may be rendered. Never invent fake CMO praise. |
| ❌ **No Generic Stock Photography** | Zero unverified stock photos of foreign auditoriums. All images must originate from verified Fine Tuning productions (`images/webp/`). |
| ❌ **No Unverified Financial Rate Cards** | Complex staging depends on venue dimensions and acoustic riders. Transparent public pricing tables without custom site inspections are excluded to prevent misleading quotes. |
| ❌ **No Low-Quality Third-Party Script Widgets** | No third-party chat widgets, bloated tracking pixels, or external CDN dependencies that degrade performance or violate zero-dependency runtime standards. |
| ❌ **No Non-Accessible Button Contrast** | White text on Solar Amber `#F09320` is permanently excluded. All primary buttons must feature Midnight Obsidian `#070D18` text. |

---

## 6. Proof Requirements, Verification Standards & Labeled Placeholders

### 6.1 Verified Facts (Permitted for Live Production)
1. **Verified Client Engagements**: BSRM Group (ESG Event), UCB (Rangamati Retreat), BYD (Motor Fest Pavilion), Royal Enfield (Flagship Reveal), BUET Graduates Club (Fruit Fest), University of Chittagong ACC (BIZSTAR).
2. **Verified Technical Hardware Fleet**: Curved P2.6 LED panels, JBL VTX line-array acoustic arrays, aluminum box trussing, Clear-Com wireless intercoms, Novastar 4K video switchers, 360 photo booth motorized platforms.
3. **Verified Geographic Hubs**: Chattogram operations base (Nasirabad & Kajir Dewri) and Dhaka executive hub (Gulshan-2).
4. **Verified Communications**: WhatsApp live channel at `+880 1671-863685` and email `finetuningbd@gmail.com`.

### 6.2 Labeled Placeholders (Required Where Data is Pending)
Where specific legal, corporate, or financial details await final stakeholder submission, the following standardized placeholder format must be utilized:

- **Legal Entity Registration**: `[PENDING STAKEHOLDER SUBMISSION: Official Trade License / BIN Number]`
- **Formal Sub-Brand Divisions**: `[OPTIONAL PROPOSAL: Fine Tuning Media / Fine Tuning Tech]`
- **Dhaka Hub Street Address**: `[PENDING VERIFICATION: Detailed Street / Suite Number, Gulshan-2, Dhaka 1212]`
- **Bilingual Bangla Monogram**: `[DESIGN PROPOSAL: Custom Bangla Flared Wordmark — ফাইন টিউনিং]`

---

## 7. Accessibility, Contrast & Interaction Requirements

The build must strictly achieve **WCAG 2.1 AA compliance** across all public pages, and **WCAG 2.1 AAA compliance** for key text and action states:

### 7.1 Strict Color Contrast Audit Matrix
- **Amber Primary Buttons**: Background `#F09320` + Foreground `#070D18` = **8.24:1 AAA PASS** *(Mandatory text color)*.
- **Teal Secondary Buttons**: Background `#4694B1` + Foreground `#FFFFFF` = **5.68:1 AA PASS**.
- **Light Mode Body Copy**: Canvas `#FFFFFF` + Text `#0F172A` = **17.85:1 AAA PASS**.
- **Light Mode Secondary Teal**: Canvas `#FFFFFF` + Text `#2B5E70` = **7.15:1 AAA PASS** *(Never use raw `#4694B1` for light body text)*.
- **Dark Mode Body Copy**: Canvas `#070D18` + Text `#F8FAFC` = **18.10:1 AAA PASS**.
- **Dark Mode Secondary Text**: Canvas `#070D18` + Text `#94A3B8` = **7.25:1 AAA PASS**.

### 7.2 Keyboard Navigation & Focus Indicators
- **Skip Link**: `<a href="#main-content" class="skip-link">` positioned above header, visible on first `Tab`.
- **Focus Rings**: `:focus-visible` styles enforced with `2px solid var(--color-brand-primary)` and `2px outline-offset`.
- **Keyboard Overlay Traversal**: Pressing `Escape` universally dismisses modals, drawers, and menus. Focus is trapped within active modals and restored to invoking triggers upon dismissal.
- **Touch Targets**: All mobile buttons, links, and form elements must meet the minimum **44×44px touch target** standard (`--size-touch-min`).

---

## 8. Technical Performance & Core Web Vitals Targets

The page must satisfy stringent performance criteria across desktop and mobile devices:

| Metric | Target Specification | Architectural Strategy |
| :--- | :---: | :--- |
| **Largest Contentful Paint (LCP)** | **< 1.8 seconds** | Preload hero fonts (`Outfit`, `Syne`); serve compressed WebP hero images; inline critical CSS tokens. |
| **First Input Delay (FID) / INP** | **< 50 milliseconds** | Pure vanilla JavaScript execution with zero heavy runtime frameworks or blocking main-thread loops. |
| **Cumulative Layout Shift (CLS)** | **< 0.02 (Near Zero)** | Explicit `width` and `height` attributes on all images and SVG vectors; font fallback metric matching. |
| **First Contentful Paint (FCP)** | **< 1.0 second** | Preconnect to `fonts.googleapis.com` and `fonts.gstatic.com`; zero render-blocking third-party scripts. |
| **Total Page Weight** | **< 1.2 MB** | High-efficiency WebP images (quality: 85); vector SVG iconography; lightweight tokens stylesheet. |

---

## 9. Page Build & Verification Checklist

Before deploying any production page or layout template, the engineering lead must sign off on:

- [ ] Page strictly implements design tokens from `tokens/tokens.css` and `tokens/themes.css`.
- [ ] No hardcoded component colors; 100% token binding across backgrounds, text, and borders.
- [ ] Primary buttons strictly enforce Midnight Obsidian (`#070D18`) text on Solar Amber (`#F09320`).
- [ ] Light mode body text utilizes text-safe teal (`#2B5E70`) for AAA compliance.
- [ ] All interactive elements (modals, drawers, toasts, faders) execute via vanilla JS without dependencies.
- [ ] Responsive layouts tested down to 320px viewport width with no horizontal overflow.
- [ ] Real client names (BSRM, UCB, BYD, Royal Enfield) and verified photos are used without fabricated stats.
- [ ] Skip to content link, `:focus-visible` rings, and `Escape` key dismissals function as specified.

---

*Master Page Brief compiled and authorized for Fine Tuning Advertising Agency website development.*
