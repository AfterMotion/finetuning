# Fine Tuning — Multipage Architecture & Component Synchronization (`docs/MULTIPAGE_ARCHITECTURE.md`)

> **Comprehensive Information Architecture, Page-by-Page Specifications, Component Reuse Matrix & Verification Index**  
> *Target Repository: `finetuning.com.bd`*  
> *Organization: Fine Tuning Advertising Agency (Chattogram & Dhaka, Bangladesh)*  
> *Version: 2.5.0 | Date: November 2026 | Status: Authoritative Production Standard*  
> *Design System Cascades: [tokens.css](file:///d:/my-project/FineTuning/finetuning.com.bd/tokens/tokens.css), [themes.css](file:///d:/my-project/FineTuning/finetuning.com.bd/tokens/themes.css), [styles.css](file:///d:/my-project/FineTuning/finetuning.com.bd/preview/styles.css)*

---

## 1. Executive Architecture Summary

Following the approval of **Concept 1: "Theatrical Stagecraft & Live Telemetry" (The FOH Control Deck)** in [ART_DIRECTION.md](file:///d:/my-project/FineTuning/finetuning.com.bd/docs/ART_DIRECTION.md) and the master structural plan in [PAGE_ARCHITECTURE.md](file:///d:/my-project/FineTuning/finetuning.com.bd/docs/PAGE_ARCHITECTURE.md), the Fine Tuning digital presence has been extended into a unified, high-performance, 16-page production website.

Every page is tailored to a distinct business function, user task, and content architecture—explicitly avoiding cloned layouts or template reuse with changed titles. All pages strictly adhere to the [AGENTS.md](file:///d:/my-project/FineTuning/finetuning.com.bd/AGENTS.md) operational charter, token-first design principles, and WCAG 2.1 AAA accessibility requirements.

```
                                  [ FINE TUNING DIGITAL ECOSYSTEM ]
                                                  │
         ┌─────────────────────────┬──────────────┴──────────────┬─────────────────────────┐
         ▼                         ▼                             ▼                         ▼
   PUBLIC BRAND             CAPABILITIES & ARCHIVE         CLIENT VIP & ENGAGEMENT     GOVERNANCE & SYSTEM
   - index.html             - service.html                - my-account.html (portal)  - privacy.html
   - about.html             - portfolio-2.html (portfolio)- contact.html              - terms.html
   - team-single.html (team)- blog-grid.html (blog)       - faq.html                  - 404 / 500 / 503
   - career.html                                                                      - maintenance.html
```

---

## 2. Master Verification & Preview URL Directory

All pages are live and served via the background HTTP server on port 8080 (`http://localhost:8080/`). Dual deployment paths are synchronized: both isolated `./preview/*` preview targets and root `./*` production files are 100% functional with zero dead ends.

| Page Name & Purpose | Preview Path (`preview/`) | Root Production Route | Key Layout Pattern | Verified Viewports |
| :--- | :--- | :--- | :--- | :--- |
| **01. Master Marketing Portal** | [preview/index.html](http://localhost:8080/preview/index.html) | [index.html](http://localhost:8080/index.html) | FOH Equalizer, SPL Limiter, Trust Marquee, Staging Calculator | 1440, 1024, 768, 360px |
| **02. About Agency & Ethos** | [preview/about.html](http://localhost:8080/preview/about.html) | [about.html](http://localhost:8080/about.html) | Dual-Hub Warehouse Grid, Fleet Ownership, Milestone Timeline | 1440, 1024, 768, 360px |
| **03. Capabilities & Fleet** | [preview/service.html](http://localhost:8080/preview/service.html) | [service.html](http://localhost:8080/service.html) | Curved LED Specs, Dante Line Arrays, Staging Scale Matrix | 1440, 1024, 768, 360px |
| **04. Event Portfolio Archive** | [preview/portfolio.html](http://localhost:8080/preview/portfolio.html) | [portfolio-2.html](http://localhost:8080/portfolio-2.html) | Real-time Search, Category Filter Pills, Authentic WebP Grid | 1440, 1024, 768, 360px |
| **05. Executive Contact Hubs** | [preview/contact.html](http://localhost:8080/preview/contact.html) | [contact.html](http://localhost:8080/contact.html) | Dual-Hub Split, WhatsApp Live Desk, Validated RFP Dispatch | 1440, 1024, 768, 360px |
| **06. Technical Dispatch** | [preview/blog.html](http://localhost:8080/preview/blog.html) | [blog-grid.html](http://localhost:8080/blog-grid.html) | Ray-Tracing Whitepaper Lead, Engineering Guides, Newsletter | 1440, 1024, 768, 360px |
| **07. Engineering Careers** | [preview/career.html](http://localhost:8080/preview/career.html) | [career.html](http://localhost:8080/career.html) | Safety Culture Pillars, Open Roles Accordion (Rigging/Audio) | 1440, 1024, 768, 360px |
| **08. Specialist Profile** | [preview/team.html](http://localhost:8080/preview/team.html) | [team-single.html](http://localhost:8080/team-single.html) | Director Sidebar, Cert Badges, Hardware Rider, Directed Summits | 1440, 1024, 768, 360px |
| **09. Client VIP Event Portal** | [preview/portal.html](http://localhost:8080/preview/portal.html) | [my-account.html](http://localhost:8080/my-account.html) | Real-time Rig Telemetry, CAD/Simulation Vault, Crew Manifest | 1440, 1024, 768, 360px |
| **10. Technical Production FAQ** | [preview/faq.html](http://localhost:8080/preview/faq.html) | [faq.html](http://localhost:8080/faq.html) | Instant Search Filter, Grouped Accordions, Director Hotline | 1440, 1024, 768, 360px |
| **11. Privacy & NDA Policy** | [preview/privacy.html](http://localhost:8080/preview/privacy.html) | [privacy.html](http://localhost:8080/privacy.html) | Sticky Table of Contents, CAD Vault Protocols, Telemetry Privacy | 1440, 1024, 768, 360px |
| **12. Master Staging Terms** | [preview/terms.html](http://localhost:8080/preview/terms.html) | [terms.html](http://localhost:8080/terms.html) | 5:1 Rigging Liability, Force Majeure Wind Clause, Mushak-6.3 VAT | 1440, 1024, 768, 360px |
| **13. System 404 Error** | [preview/404.html](http://localhost:8080/preview/404.html) | [404.html](http://localhost:8080/404.html) | Single-Screen 100vh, Tuner Dial Frequency Graphic, Quick Return | 1440, 1024, 768, 360px |
| **14. System 500 Error** | [preview/500.html](http://localhost:8080/preview/500.html) | [500.html](http://localhost:8080/500.html) | Single-Screen 100vh, Diagnostic Telemetry Log, Re-establish Link | 1440, 1024, 768, 360px |
| **15. System 503 Recalibration** | [preview/503.html](http://localhost:8080/preview/503.html) | [503.html](http://localhost:8080/503.html) | Single-Screen 100vh, Live Countdown Timer, WhatsApp Comms | 1440, 1024, 768, 360px |
| **16. Maintenance Screen** | [preview/maintenance.html](http://localhost:8080/preview/maintenance.html) | [maintenance.html](http://localhost:8080/maintenance.html) | Single-Screen 100vh, Calibration Status, 24/7 Hotline Strip | 1440, 1024, 768, 360px |

---

## 3. Page-by-Page Architectural Deep Dive

### 3.1 Master Marketing Portal (`index.html`)
- **Route**: `index.html` (Preview: `preview/index.html`)
- **Target Audience**: Corporate CMOs, Head of Communications, Automobile Brand Directors, Grand Summit Organizers.
- **Primary User Task**: Assess turnkey production credibility, interact with live soundcheck telemetry, calculate required generator/truss specs via the 3-step staging wizard, and submit an RFP.
- **Content Stack**:
  1. Universal Utility Strip (Chattogram & Dhaka operational live status).
  2. Sticky Navigation with Brand Lockup, Theme (`dark`/`light`), and Density Mode (`comfortable`/`compact`).
  3. FOH Control Deck Hero: Interactive Equalizer pulse + Soundcheck Decibel Fader with dynamic limiter protection (<85 dBA green, 86–95 dBA amber, >95 dBA red alarm).
  4. Telemetry Ribbon: 4 verified KPI cards (180+ productions, 38m curved LED, 0.25ms Dante latency, 100% safety record).
  5. Infinite Client Proof Marquee: BSRM Group, UCB Bank, BYD Auto, Royal Enfield Bangladesh, CPDL, Akij Group, KDS Group, BUET Graduates Club.
  6. Staging Capabilities Grid: 4 cards with technical tags (P2.6 LED, Dante Line Array, Box Truss, Generator Sync).
  7. Interactive Staging Wizard: Live attendee slider, venue selection, and real-time kVA/ton calculations.
  8. Verified Case Studies: Authentic WebP photography from Radisson Blu, Motor Fest, and Port City daises.
  9. FAQ Accordions: Real operational questions (wind thresholds, acoustic ray-tracing, lead times).
  10. Full Corporate Footer with dual-city hub addresses and legal links.
- **Reused Components**: `NAV-01`, `NAV-03`, `CNT-01`, `CNT-03`, `CNT-04`, `CNT-07`, `CNT-08`, `FRM-12`, `FRM-19`, `ACT-01`, `ACT-18`, `OVL-01`.

---

### 3.2 About Agency & Engineering Ethos (`about.html`)
- **Route**: `about.html` (Preview: `preview/about.html`)
- **Target Audience**: Procurement Directors, Corporate Risk Officers, Structural Engineers.
- **Primary User Task**: Verify in-house fleet ownership (zero rented third-party hardware risks), inspect dual-hub warehouse facilities, and review the agency's 2018–2026 growth milestones.
- **Content Stack**:
  1. Breadcrumbs: Home → About Agency & Engineering Ethos.
  2. Subpage Hero: "Turnkey Staging Sovereignty" with agency manifesto.
  3. 3 Core Pillars: 100% In-House Fleet Ownership, Certified Rigging Engineering, Dual-Hub Redundancy.
  4. Warehouse Infrastructure Grid: Nasirabad Main Logistics Depot (Chattogram, 12,000 sq ft) and Tejgaon Staging Depot (Dhaka, 8,500 sq ft).
  5. Milestone Timeline: 2018 (Agency founding & first line-array fleet) through 2026 (Launch of P2.6 curved volumes).
  6. Warehouse Inspection Booking CTA.
- **Reused Components**: `NAV-01`, `NAV-05`, `CNT-01`, `CNT-09`, `ACT-01`, `ACT-03`, `ACT-18`.

---

### 3.3 Staging Capabilities & Hardware Fleet (`service.html`)
- **Route**: `service.html` (Preview: `preview/service.html`)
- **Target Audience**: Technical Event Directors, Stage Designers, Sound Engineers, Production Coordinators.
- **Primary User Task**: Review precise technical equipment rider specifications, understand Dante digital network distribution, and select staging packages.
- **Content Stack**:
  1. Breadcrumbs: Home → Capabilities & Fleet.
  2. Technical Hero: "Hardware Sovereignty & Zero Stage Latency".
  3. Deep-Dive Spec Modules:
     - Curved P2.6 Video Volumes: 3,840 Hz refresh rate, Brompton/Novastar HDR10 processing, 140° viewing angle.
     - Dante Line-Array Engineering: 64-channel 96 kHz digital audio, 0.25ms latency, cardioid sub arrays.
     - Structural Box Trussing: Prolyte H30V, CM Lodestar 1-ton hoists, live wireless load cells.
     - Synchronized Redundant Power: Dual 125 kVA diesel generators with AMF auto-transfer panels.
  4. Comparative Staging Scale Matrix: Executive Ballroom vs. Grand Corporate Summit vs. Stadium Exhibition.
  5. Technical Consultation Booking Trigger.
- **Reused Components**: `NAV-01`, `NAV-05`, `CNT-01`, `CNT-03`, `DTA-01`, `ACT-01`, `ACT-03`.

---

### 3.4 Event Portfolio Archive (`portfolio-2.html` / `portfolio.html`)
- **Route**: `portfolio-2.html` and `portfolio.html` (Preview: `preview/portfolio.html`)
- **Target Audience**: Brand Managers, Media Agencies, Corporate Executive Committees.
- **Primary User Task**: Search and filter past verified productions by category (Corporate Summit, Automotive Pavilion, Youth Summit) and view CAD schematics/photography.
- **Content Stack**:
  1. Breadcrumbs: Home → Event Portfolio Archive.
  2. Header with Live Dynamic Search Input (`FRM-05`) and Filter Category Pills (`ACT-13`).
  3. Interactive Case Grid: 4 major verified productions using authentic WebP photography:
     - BSRM CORE Annual ESG Summit (38m curved LED, 16-box Dante arrays).
     - 8th Motor Fest BYD & Royal Enfield Pavilions (Architectural box trussing, vehicle reveal lighting).
     - BIZSTAR Season V Grand Finale (Radisson Blu Chattogram, pristine acoustic STI score).
     - UCB Annual Leadership Retreat (Cox's Bazar outdoor amphitheater, weather-rated trussing).
  4. Live Instant Client-Side Filtering with Empty State handling (`ACT-20`).
  5. CAD Schematic & Spec Inspection Triggers.
- **Reused Components**: `NAV-01`, `NAV-05`, `FRM-05`, `ACT-13`, `CNT-03`, `ACT-20`, `ACT-18`.

---

### 3.5 Executive Contact Hubs (`contact.html`)
- **Route**: `contact.html` (Preview: `preview/contact.html`)
- **Target Audience**: Corporate Event Committees, Executive Assistants, Procurement Leads.
- **Primary User Task**: Connect immediately with Chattogram or Dhaka central dispatch, initiate a WhatsApp direct consultation, or submit an RFP with technical rider specifications.
- **Content Stack**:
  1. Breadcrumbs: Home → Executive Contact Hubs.
  2. Subpage Hero: "Direct Line to Turnkey Production Desks".
  3. Dual-Hub Address Grid:
     - Chattogram Hub: Shop No. 01, CDA Market, Kajir Dewri & Nasirabad Logistics Base.
     - Dhaka Hub: Gulshan-2 Executive Suite & Tejgaon Staging Depot.
  4. WhatsApp 24/7 Live FOH Desk Callout Card (`+880 1671-863685`).
  5. RFP Brief Submission Form (`FRM-01` to `FRM-06`): Full Name, Corporate Organization, Phone, Date, Expected Attendees, Staging Scope, and NDA Acknowledgement.
  6. Instant Toast Confirmation (`ACT-18`) upon submission.
- **Reused Components**: `NAV-01`, `NAV-05`, `FRM-01`, `FRM-02`, `FRM-04`, `FRM-06`, `ACT-01`, `ACT-18`.

---

### 3.6 Technical Dispatch & Production Insights (`blog-grid.html` / `blog.html`)
- **Route**: `blog-grid.html` and `blog.html` (Preview: `preview/blog.html`)
- **Target Audience**: Sound Designers, Riggers, Event Planners, Industry Enthusiasts.
- **Primary User Task**: Read technical whitepapers on acoustic engineering, LED calibration, and rigging safety standards in Bangladesh.
- **Content Stack**:
  1. Breadcrumbs: Home → Technical Dispatch.
  2. Featured Whitepaper Lead: "Acoustic Ray-Tracing in Echoic Hotel Ballrooms: Eliminating Flutter Echo with Distributed Dante Line Arrays".
  3. 3 Technical Article Cards:
     - Curved LED Curvature Calculation: Preventing Shutter Moiré on 4K Broadcast Cameras.
     - 5:1 Rigging Safety Factors: Calculating Dynamic Wind Loads for Open-Air Pavilions.
     - Zero-Volt Neutral Floating: Preventing Hum in 125 kVA Synchronized Generator Arrays.
  4. Engineering Dispatch Subscription Strip.
- **Reused Components**: `NAV-01`, `NAV-05`, `CNT-01`, `CNT-03`, `FRM-02`, `ACT-01`, `ACT-18`.

---

### 3.7 Engineering Careers & Crew Recruitment (`career.html`)
- **Route**: `career.html` (Preview: `preview/career.html`)
- **Target Audience**: Certified Structural Riggers, Dante Audio Engineers, Novastar LED Technicians, Stagehands.
- **Primary User Task**: Understand Fine Tuning's rigorous safety culture, review active job openings, and apply for on-site crew roles.
- **Content Stack**:
  1. Breadcrumbs: Home → Careers & Crew Recruitment.
  2. Culture & Safety Manifesto: "Zero Accidents Through Engineering Discipline".
  3. 3 Culture Pillars: Continuous Certification (Audinate & ETCP sponsorship), In-House Safety Gear (Petzl PPE), Fair Overtime Compensation.
  4. Active Openings Accordion:
     - Senior Structural Rigging Inspector (Chattogram Hub & On-Site).
     - FOH Acoustic & Dante System Engineer (Dhaka & Chattogram).
     - Lead Novastar LED & Media Server Technician (Chattogram Hub).
  5. Direct Application Brief Form with file attachment specimen.
- **Reused Components**: `NAV-01`, `NAV-05`, `CNT-01`, `CNT-08`, `FRM-01`, `FRM-02`, `ACT-01`, `ACT-18`.

---

### 3.8 Specialist Profile: Technical Leadership (`team-single.html` / `team.html`)
- **Route**: `team-single.html` and `team.html` (Preview: `preview/team.html`)
- **Target Audience**: Enterprise clients seeking direct assurance from the individual directing their summit rig.
- **Primary User Task**: Inspect credentials, certifications, past directed summits, and standard hardware rider of the Lead Production Director.
- **Content Stack**:
  1. Breadcrumbs: Home → About Agency → Technical Leadership: Tanvir Ahmed.
  2. Director Profile Card:
     - Headshot frame with brand amber glow.
     - Lead Acoustic & Staging Director.
     - Certification Pills: `Audinate Dante L3`, `ETCP Rigging Certified`, `Meyer Sound MAPP 3D`, `SMAART Live V8`.
     - 180+ Productions Directed, 100% Safety Record.
  3. Engineering Manifesto: "Predictable Physics Over Event-Day Luck".
  4. Key Directed Summits Grid: BSRM CORE ESG Summit, 8th Motor Fest (BYD & Royal Enfield), BIZSTAR Season V.
  5. FOH Hardware Rider Preferences: Avid S6L-32D, d&b KSL line arrays, Shure Axient Digital, Prolyte H30V.
  6. Direct Technical Consultation Booking Trigger.
- **Reused Components**: `NAV-01`, `NAV-05`, `CNT-01`, `CNT-03`, `ACT-01`, `ACT-03`, `ACT-18`.

---

### 3.9 Client VIP Event Portal & Live Console (`my-account.html` / `portal.html`)
- **Route**: `my-account.html` and `portal.html` (Preview: `preview/portal.html`)
- **Target Audience**: Active contracted enterprise clients currently in pre-production or show-day staging phases.
- **Primary User Task**: Monitor live stage telemetry, verify safety factors, download approved CAD plots and acoustic heatmaps, and authorize stage clearance.
- **Content Stack**:
  1. Breadcrumbs: Home → Client VIP Telemetry Console.
  2. Production Header Bar: Client Avatar ("BSRM"), Production Title ("BSRM Sustainable Manufacturing Summit"), Live Rigging Phase Status Badge.
  3. 4 Live Telemetry KPI Tiles:
     - Truss Structural Load: 4.8 / 7.5 T (Safety factor 5.2:1 Compliant).
     - Dante Audio Network: 0.25 ms latency (Zero packet drops across 64 ch).
     - Curved P2.6 LED Canvas: 9,216 × 2,160 px (100% modules calibrated).
     - Synchronized Power: Dual 125 kVA Gensets (AMF standby armed).
  4. 2-Column Operational Grid:
     - Pre-Production Blueprints & CAD Downloads (DWG Rigging Plot, EASE Acoustic Simulation, LED Patch Map, Civil Defense Fire Clearance).
     - On-Site Key Production Manifest (Technical Director, FOH Audio Lead, Master Rigger) with direct telephone triggers.
  5. "Approve Stage Clearance" interactive button with confirmation state and toast notification.
- **Reused Components**: `NAV-01`, `NAV-05`, `CNT-04`, `ACT-01`, `ACT-03`, `ACT-18`.

---

### 3.10 Technical Production FAQ (`faq.html`)
- **Route**: `faq.html` (Preview: `preview/faq.html`)
- **Target Audience**: Corporate event planners requiring clarification on technical specs, lead times, safety, and compliance.
- **Primary User Task**: Rapidly search and resolve questions regarding speech intelligibility, LED viewing distances, rigging load limits, power redundancy, and billing.
- **Content Stack**:
  1. Breadcrumbs: Home → Technical Staging FAQ.
  2. Live Instant FAQ Search Input (`FRM-05`).
  3. Grouped Accordion List (`CNT-08`):
     - Speech intelligibility and echo reduction via Dante delay arrays.
     - P2.6 LED minimum viewing distance (2.5m) and broadcast camera refresh rate (3,840 Hz).
     - 5:1 working load limit safety factor on Prolyte trussing.
     - Dual 125 kVA N+1 synchronized generator power redundancy.
     - Production lead times (10–14 days summit, 21–30 days pavilion).
     - Official Mushak-6.3 VAT, BIN, and Civil Defense fire clearances.
  4. Unlisted Question Escalation Card: Links to technical site review or WhatsApp live desk.
- **Reused Components**: `NAV-01`, `NAV-05`, `FRM-05`, `CNT-08`, `ACT-01`, `ACT-03`.

---

### 3.11 Corporate Privacy Policy & Technical Confidentiality (`privacy.html`)
- **Route**: `privacy.html` (Preview: `preview/privacy.html`)
- **Target Audience**: Legal Counsel, Enterprise Procurement, Compliance Officers.
- **Primary User Task**: Verify NDA protocols, trade-secret protections for CAD schematics, and attendee data privacy standards.
- **Content Stack**:
  1. Breadcrumbs: Home → Privacy Policy & NDA Protocol.
  2. Sticky Navigation Sidebar: Quick links to Sections 1 through 5.
  3. Legal Content Card:
     - Section 1: Scope & Jurisdiction (Bangladesh ICT Act compliance).
     - Section 2: CAD & Proprietary Engineering Blueprints (5-year structural audit retention, zero competitor repurposing).
     - Section 3: Strict Non-Disclosure Agreement (NDA) Guarantee (Binding crew confidentiality).
     - Section 4: FOH Telemetry & Acoustic Logging (Zero recording of private attendee conversations).
     - Section 5: Data Retention & Post-Show Sanitization Requests.
- **Reused Components**: `NAV-01`, `NAV-05`, `CNT-01`, `ACT-05`.

---

### 3.12 Master Staging & Event Production Terms (`terms.html`)
- **Route**: `terms.html` (Preview: `preview/terms.html`)
- **Target Audience**: Legal Directors, Corporate Sourcing, Event Producers.
- **Primary User Task**: Review terms of engagement, rigging stop-work authority, site custody obligations, outdoor weather/force majeure thresholds, and payment milestones.
- **Content Stack**:
  1. Breadcrumbs: Home → Master Staging & Production Terms.
  2. Sticky Terms Index Sidebar.
  3. Contractual Standards Card:
     - Section 1: Scope of Turnkey Engagement.
     - Section 2: Load-In, Structural Rigging & Safety Autonomy (5:1 safety factor, inspector stop-work authority).
     - Section 3: Equipment Custody & Site Security (Client perimeter security requirements).
     - Section 4: Outdoor Operations & Force Majeure Wind Protocols (Mandatory rig lowering if wind >40 km/h).
     - Section 5: Commercial Invoicing, Taxes & VAT (50/40/10 milestone payments, Mushak-6.3 compliance).
- **Reused Components**: `NAV-01`, `NAV-05`, `CNT-01`, `ACT-05`.

---

### 3.13 Single-Screen System Suite (`404.html`, `500.html`, `503.html`, `maintenance.html`)
- **Routes**: `404.html`, `500.html`, `503.html`, `maintenance.html` (Previews in `preview/`)
- **Constraint**: **Non-Negotiable Invariant 6** — Must fit entirely within `height: 100vh; overflow: hidden;` with zero page scroll on desktop and mobile.
- **Design Patterns**:
  - `404.html`: "Stage Frequency Not Found" — Huge 404 text, illuminated tuner dial frequency (`000.00 MHz NO CARRIER`), recovery actions (Return Home, Case Studies, FOH Desk).
  - `500.html`: "FOH Signal Interrupted" — Red accented 500 error, terminal diagnostic telemetry log showing Dante packet buffer trace, retry link re-establishment button.
  - `503.html` & `maintenance.html`: "Acoustic Recalibration in Progress" — Live animated countdown timer (Hours, Mins, Secs), WhatsApp Live Desk action, emergency hotline.
- **Reused Components**: `ACT-01`, `ACT-03`, `CNT-01`.

---

## 4. Component Reuse & Inventory Cross-Reference Matrix

All components implemented across the 16 pages map directly to the authoritative specifications documented in [docs/COMPONENT_INVENTORY.md](file:///d:/my-project/FineTuning/finetuning.com.bd/docs/COMPONENT_INVENTORY.md).

| Component ID | Component Name & Token Contract | index | about | service | portfolio | contact | blog | career | team | portal | faq | legal (privacy/terms) | system (404/500/503) |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **ACT-01** | Primary Button (`--color-action-primary` + `--color-slate-950`) | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● |
| **ACT-03** | Secondary Ghost Button (`--color-action-outline-border`) | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● |
| **ACT-06** | Icon Buttons (Theme toggle, Density toggle, Hamburger) | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ○ |
| **ACT-11** | Status Indicators (Live pulsing green/amber beacons) | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● |
| **ACT-13** | Filter Chip Tags (`--color-bg-surface-elevated`) | ○ | ○ | ○ | ● | ○ | ● | ○ | ● | ○ | ○ | ○ | ○ |
| **ACT-18** | Toast Snackbar Engine (`#toast-container`) | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ○ |
| **FRM-01** | Form Field Groupings & Accessible Labels | ● | ● | ● | ○ | ● | ● | ● | ● | ○ | ○ | ○ | ○ |
| **FRM-02** | Text/Email/Phone Form Inputs | ● | ● | ● | ○ | ● | ● | ● | ● | ○ | ○ | ○ | ○ |
| **FRM-05** | Real-time Search Input Field with Icon | ○ | ○ | ○ | ● | ○ | ○ | ○ | ○ | ○ | ● | ○ | ○ |
| **FRM-06** | Custom Styled Dropdown Select | ● | ● | ● | ○ | ● | ○ | ● | ● | ○ | ○ | ○ | ○ |
| **FRM-12** | Range Slider (Decibel Fader & Capacity Slider) | ● | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ |
| **FRM-19** | Multi-Step Staging Wizard with Live Calculation | ● | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ |
| **NAV-01** | Sticky Header & Global Operational Utility Strip | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ○ |
| **NAV-03** | Lateral Sliding Mobile Navigation Drawer | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ○ |
| **NAV-05** | Accessible Breadcrumbs Navigation (`.breadcrumb-nav`) | ○ | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ○ |
| **NAV-10** | Global 4-Column Corporate Footer Block | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ○ |
| **CNT-01** | Typographic Hierarchy (`Syne`, `Outfit`, `JetBrains Mono`)| ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● |
| **CNT-03** | Media Cards & Case Study Containers | ● | ○ | ● | ● | ○ | ● | ○ | ● | ○ | ○ | ○ | ○ |
| **CNT-04** | Telemetry & Metric KPI Cards | ● | ● | ○ | ○ | ○ | ○ | ○ | ● | ● | ○ | ○ | ○ |
| **CNT-07** | Pure CSS Infinite Proof Marquee (32s loop) | ● | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ |
| **CNT-08** | Accessible FAQ & Staging Accordions | ● | ○ | ○ | ○ | ○ | ○ | ● | ○ | ○ | ● | ○ | ○ |
| **CNT-09** | Milestone Timeline Tracker (2018–2026) | ○ | ● | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ |
| **OVL-01** | Technical Briefing Modal Dialog | ● | ● | ● | ● | ● | ● | ● | ● | ○ | ● | ○ | ○ |

*Legend: ● = Actively Rendered & Functional; ○ = Not applicable for this page purpose.*

---

## 5. SEO Metadata Plan & Schema.org Specification

Every page features an individualized SEO title, meta description, canonical URL, and Open Graph tags. Below is the production metadata registry:

| Route | Page Title | Canonical URL | Open Graph Image | Schema.org Type |
| :--- | :--- | :--- | :--- | :--- |
| `index.html` | Fine Tuning — Turnkey Event Staging & Experiential Production | `https://finetuning.com.bd/` | `/images/webp/program-01/motorfest-byd-royalenfield-master.webp` | `Organization`, `EventPlanningOrService` |
| `about.html` | About Agency & Engineering Ethos \| Fine Tuning | `https://finetuning.com.bd/about/` | `/images/webp/program-02/bsrm-esg-stage-led.webp` | `AboutPage`, `LocalBusiness` |
| `service.html` | Staging Capabilities & Hardware Fleet \| Fine Tuning | `https://finetuning.com.bd/service/` | `/images/webp/program-02/bsrm-esg-stage-led.webp` | `Service`, `ItemList` |
| `portfolio.html` | Event Portfolio & Production Archive \| Fine Tuning | `https://finetuning.com.bd/portfolio/` | `/images/webp/program-03/bizstar-grand-finale-stage.webp` | `CollectionPage`, `CreativeWork` |
| `contact.html` | Executive Hubs & Staging Brief Dispatch \| Fine Tuning | `https://finetuning.com.bd/contact/` | `/images/webp/program-01/motorfest-byd-royalenfield-master.webp` | `ContactPage` |
| `blog.html` | Technical Dispatch & Production Insights \| Fine Tuning | `https://finetuning.com.bd/blog/` | `/images/webp/program-04/ucb-lake-stage-backdrop.webp` | `Blog`, `TechArticle` |
| `career.html` | Careers & Staging Crew Recruitment \| Fine Tuning | `https://finetuning.com.bd/career/` | `/images/webp/program-01/motorfest-byd-royalenfield-master.webp` | `JobPosting`, `ItemPage` |
| `team.html` | Technical Leadership & Production Director \| Fine Tuning | `https://finetuning.com.bd/team-single/` | `/images/webp/program-02/bsrm-esg-stage-led.webp` | `ProfilePage`, `Person` |
| `portal.html` | Client VIP Event Portal & Live Staging Console \| Fine Tuning | `https://finetuning.com.bd/my-account/` | `/images/webp/program-02/bsrm-esg-stage-led.webp` | `ItemPage` |
| `faq.html` | Technical & Staging Production FAQ \| Fine Tuning | `https://finetuning.com.bd/faq/` | `/images/webp/program-03/bizstar-grand-finale-stage.webp` | `FAQPage` |
| `privacy.html` | Privacy Policy & Technical Confidentiality \| Fine Tuning | `https://finetuning.com.bd/privacy/` | `/images/webp/program-01/motorfest-byd-royalenfield-master.webp` | `WebPage` |
| `terms.html` | Master Staging & Event Production Terms \| Fine Tuning | `https://finetuning.com.bd/terms/` | `/images/webp/program-01/motorfest-byd-royalenfield-master.webp` | `WebPage` |
| `404.html` | 404 - Stage Frequency Not Found \| Fine Tuning | `https://finetuning.com.bd/404.html` | `/images/fine-tuning-logo.png` | `WebPage` |
| `500.html` | 500 - FOH Signal Interrupted \| Fine Tuning | `https://finetuning.com.bd/500.html` | `/images/fine-tuning-logo.png` | `WebPage` |
| `503.html` | 503 - Acoustic Recalibration in Progress \| Fine Tuning | `https://finetuning.com.bd/503.html` | `/images/fine-tuning-logo.png` | `WebPage` |
| `maintenance.html` | Scheduled Maintenance & Calibration \| Fine Tuning | `https://finetuning.com.bd/maintenance.html` | `/images/fine-tuning-logo.png` | `WebPage` |

---

## 6. Strict Invariant & Quality Gate Audit

### Invariant 1: Solar Amber Button Text Contrast
- **Rule**: Primary action buttons with Solar Amber background (`#F09320` / `--color-action-primary`) **MUST ALWAYS HAVE Midnight Obsidian (`#070D18` / `--color-slate-950`) text**.
- **Audit Result**: **100% PASS across all 16 pages**. Verified in CSS via `.btn-amber-primary { background-color: var(--color-action-primary); color: var(--color-slate-950) !important; }`. Measured contrast is **8.24:1 (WCAG AAA)**. Zero instances of white text on Solar Amber buttons.

### Invariant 2: Nordic Teal Text Contrast on Light Canvas
- **Rule**: Light-mode body text, hyperlinks, and text labels must use `--color-teal-700` (`#2B5E70`, **7.15:1 AAA**) or `--color-teal-800` (`#1C4453`, **10.49:1 AAA**). Logo raw teal (`#4694B1`) is strictly restricted to graphic vectors and dark backgrounds.
- **Audit Result**: **100% PASS**. Controlled via CSS variables in `tokens/themes.css` and verified in Studio Editorial light mode.

### Invariant 3: Zero Fabricated Proof, Statistics, or Logos
- **Rule**: Never invent fake client reviews, fictitious CMO praise, or synthetic partner logos.
- **Audit Result**: **100% PASS**. Only verified client brands from `docs/brand-activities-overview.md` are referenced:
  - BSRM Group (Annual CORE ESG Summit at Radisson Blu Chattogram Bay Ballroom)
  - BYD Auto Bangladesh & Royal Enfield Bangladesh (8th Motor Fest pavilions)
  - UCB Bank (Annual Leadership Retreat at Cox's Bazar amphitheater)
  - BIZSTAR (Season V Grand Finale at Radisson Blu)
  - CPDL, Akij Group, KDS Group, BUET Graduates Club.
- All photography strictly sourced from local verified WebP assets in `images/webp/`.

### Invariant 4: Token Single Source of Truth
- **Rule**: Never hardcode component hex colors directly inside component style rules.
- **Audit Result**: **100% PASS**. All component rules reference CSS variables (`var(--color-*)`, `var(--font-*)`, `var(--radius-*)`, `var(--shadow-*)`).

### Invariant 5: No Silent Token Forking
- **Rule**: Additions must follow semantic architecture and be documented in the inventory.
- **Audit Result**: **100% PASS**. All subpage extensions (`.director-profile-grid`, `.portal-kpi-card`, `.legal-layout`, `.tuner-freq-box`) reuse canonical primitive tokens without creating duplicate custom properties.

### Invariant 6: Single-Screen Constraint for System Pages
- **Rule**: System screens (`404.html`, `500.html`, `503.html`, `maintenance.html`) must fit within a single viewport on desktop and mobile with **zero page scroll** (`height: 100vh; overflow: hidden;`).
- **Audit Result**: **100% PASS**. Verified on both 1440px desktop and 360px mobile viewports.

---

## 7. Responsive Quality Gate Sign-Off

Visual presentation has been inspected and confirmed across the four canonical breakpoints:

1. **Desktop Large (1440px)**:
   - FOH Soundcheck Equalizer and Staging Telemetry render side-by-side.
   - Dual-hub warehouse cards, case studies, and article grids render as balanced 3-column or 4-column structures.
   - Full utility bar, sticky navigation links, and primary CTA button visible.
2. **Desktop Medium / Tablet Landscape (1024px)**:
   - Sticky navigation gracefully transitions to the lateral sliding drawer (`#hamburger-btn` / `#drawer-overlay`) to prevent logo/link collisions.
   - Director profile and VIP portal shift to 2-column stacked layouts.
3. **Tablet Portrait (768px)**:
   - Case studies and capabilities grids stack to single-column full-width cards.
   - Staging wizard form inputs expand to 100% width for finger taps.
4. **Mobile Compact (360px)**:
   - Breadcrumbs wrap smoothly without horizontal viewport scrolling.
   - Tuner dials and live telemetry metric cards stack vertically.
   - Touch targets for buttons, inputs, and links strictly enforce $\ge 44\text{px}$.

---

## 8. Maintenance Runbook & Expansion Checklist

When authoring future pages or updating existing routes:

1. **Authoring Template**: Use the standardized prompt in [AGENTS.md](file:///d:/my-project/FineTuning/finetuning.com.bd/AGENTS.md) §6.
2. **Cascade Inclusion**: Always include `<link rel="stylesheet" href="./preview/styles.css">` and `<script src="./preview/app.js"></script>`.
3. **Token Verification**: Run regex check across all newly authored HTML files:
   ```powershell
   node scratch/audit_assets.js
   ```
4. **Button Invariant Check**: Ensure every `.btn-amber-primary` explicitly inherits `color: var(--color-slate-950) !important;`.
5. **Single-Screen Check**: For any error or system page, verify `html, body { height: 100vh; overflow: hidden; }`.

---

*Multipage architecture approved and binding for all digital staging operations at Fine Tuning.*

