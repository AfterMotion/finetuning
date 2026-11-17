# Fine Tuning — Production Page Patterns & Layout Contracts (`page-patterns.md`)

> **Authoritative Page Layout Contracts, Information Architecture & Responsive Blueprints**  
> *Target Repository: `finetuning.com.bd` | Package: `@finetuning/design-system`*  
> *Version: 2.5.0 | Date: November 2026 | Status: Authoritative Standard*

---

## 1. Pattern Overview

The Fine Tuning web platform avoids generic web templates (such as repeated equal 3-card grids or unmotivated stock banners) in favor of **engineering-driven, domain-specific layouts** modeled after event production consoles, stage schematics, and broadcast master control rooms.

---

## 2. Marketing Homepage Pattern (`/index.html`)

### 2.1 Section Composition & Hierarchy
1. **Utility Status Bar**: BST timestamp, Chattogram & Dhaka hubs live operational beacon, direct dispatch phone hotline (`+880 1671-863685`).
2. **Glass Sticky Navigation**: Brand emblem, primary links, theme switcher (Midnight Stage $\leftrightarrow$ Studio Editorial), density toggle (Comfortable $\leftrightarrow$ Compact), primary consultation CTA.
3. **Stage Flare Hero Section**:
   - Asymmetric split layout: Editorial headline (`Syne` 800) with Solar Amber gradient accent + Floating FOH Soundcheck Telemetry widget.
   - Dual CTA: Primary "Launch Production Brief" (Amber with Midnight Obsidian text) + Secondary "Explore 180+ Case Studies".
4. **Authentic Metric Strips**:
   - `180+` Turnkey Productions Executed
   - `65,000` Peak Audience Engaged
   - `99.98%` Stage Audio Uptime
   - `14` Acoustic RT60 Venues Calibrated
5. **Turnkey Capabilities Showcase**:
   - Curved P2.6 LED Video Volumes (0°–15° continuous curve, 3840 Hz refresh)
   - Acoustic Line Array Audio Engineering (Dante redundant loops, EASE ray-tracing)
   - Heavy Box-Truss Structural Rigging (Prolyte H30V, CM Lodestar dual-brake hoists)
   - Architectural Exhibition Pavilions & Automotive Stages
6. **Live Interactive Soundcheck Decibel Fader**:
   - Real-time client-side interactive SPL fader demonstrating acoustic safety zones (<85 dBA, 86–95 dBA, >95 dBA clamp).
7. **Documented Productions Archive**:
   - Filterable production cards featuring authentic client summits (BSRM Group, BYD & Royal Enfield Motor Fest, BIZSTAR, UCB).
8. **Interactive Production Estimator (60-Second Wizard)**:
   - Dynamic parameters (Venue type, attendee scale, curved LED modules, audio channels) computing estimated power kW and truss load tons.
9. **Dual-Hub Operations Footprint**:
   - Chattogram Operations Base (Nasirabad & Kajir Dewri) + Dhaka Executive Hub (Gulshan-2).
10. **Full Corporate Governance Footer**:
    - Authentic client hub contacts, corporate NDA pledge, trade license placeholder `[PENDING STAKEHOLDER SUBMISSION: Official Trade License / BIN Number]`, legal links.

---

## 3. Case Studies & Filterable Archive Pattern (`/portfolio-2.html`)

### 3.1 Architecture
- **Header**: Breadcrumbs navigation (`Home / Case Studies Archive`), display title (`180+ Verified Case Studies`).
- **Interactive Control Bar**:
  - Horizontal filter pills: "All Productions", "Automotive Pavilions", "Corporate Summits", "Youth & Academic", "Destination Retreats".
  - Instant text search input with search icon.
- **Card Grid Layout**:
  - 2-column on desktop ($1440\text{px}$), 1-column on mobile ($\le 768\text{px}$).
  - Authentic 16:9 WebP photography, category tag, client venue, technical hardware specifications (LED pixel pitch, line array model, truss span).
- **Empty State**: Friendly technical empty state if query matches 0 cases ("No productions match frequency parameters").

---

## 4. Hardware Fleet & Specifications Pattern (`/service.html`)

### 4.1 Architecture
- **Section Layout**: Split sections featuring technical equipment categories.
- **Specification Tables (`.spec-table-wrap`)**:
  - Full-width table with monospace parameter highlights.
  - Horizontal scroll container (`overflow-x: auto; -webkit-overflow-scrolling: touch;`) ensuring clean tabular inspection on 360px mobile viewports without breaking global page bounds.
- **Staging Scale Matrix**: Hardware fleet tiers mapped to event scale (Executive Summit $\rightarrow$ Automotive Expo $\rightarrow$ Mega Stadium Plenary).

---

## 5. Specialist Director Profile Pattern (`/team-single.html`)

### 5.1 Architecture
- **Director Profile Grid (`.director-profile-grid`)**:
  - Desktop ($1440\text{px}$): Sticky 360px sidebar card + wide main content area.
  - Tablet/Mobile ($\le 1024\text{px}$): Sidebar card unpins and stacks above main content; `grid-template-columns: minmax(0, 1fr); min-width: 0;`.
- **Content Blocks**:
  - Profile Sidebar: Avatar ring, title, certification pills (Audinate Dante L3, ETCP Rigging, SMAART Live), stats chip, primary "Consult On Event Rig" CTA.
  - Manifesto: "Predictable Physics Over Event-Day Luck".
  - Directed Summits: BSRM ESG Summit, 8th Motor Fest.
  - Standard FOH Rider: Avid S6L-32D, d&b KSL line arrays, Shure Axient Digital, Prolyte trussing.

---

## 6. VIP Telemetry Console Pattern (`/my-account.html`)

### 6.1 Architecture
- **Live Status Header**: Active stage link indicator (Radisson Blu Grand Ballroom).
- **Telemetry Metric Tiles (`.portal-kpi-grid`)**:
  - Truss Structural Load: `4.8 / 7.5 T` (Safety Factor 5.2:1)
  - Dante Audio Network: `0.25 ms` (Zero packet drops across 64 ch)
  - Curved P2.6 LED Canvas: `9,216 × 2,160` (100% aligned)
  - Synchronized Power: `220 V / 50 Hz` (Auto-transfer standby armed)
- **Pre-Production CAD & Reports List**:
  - Continuous alphanumeric filenames (`BSRM_Ballroom_Rigging_Plot_Rev3.dwg`) wrapped with `word-break: break-all`.
  - Download buttons with file size and format badges.
- **Stage Clearance Approval**:
  - Interactive "Authorize Staging Clearance" button triggering state transition to "✓ Clearance Approved" and toast notification.

---

## 7. Single-Screen System Page Pattern (`404`, `500`, `503`, `maintenance`)

### 7.1 Architecture & Invariant 6 Constraint
- **Constraint**: Must fit 100% within the viewport height on both desktop and mobile with **zero page scroll** (`height: 100vh; overflow: hidden;`).
- **Visual Motif**:
  - `404.html`: Radio tuner frequency out of range (`000.00 MHz • NO CARRIER`).
  - `500.html`: Generator circuit breaker disruption (`SYNC LOOP DROP: 0 VAC`).
  - `503.html`: Soundcheck recalibration with live countdown clock and progress bar.
  - `maintenance.html`: Scheduled warehouse gear maintenance notice.
- **Controls**: Primary button returning to Master Portal + secondary links to Case Studies Archive and FOH Desk.

