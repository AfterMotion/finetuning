# Fine Tuning — Master Component Inventory & Design Contracts

> **Authoritative Component Specifications, APIs, and Interaction Contracts**  
> *Target Environments: Public Agency Website, Client Event Portals, Production Operations Consoles*  
> *Version: 2.5.0 | Status: Comprehensive Production Standard | Updated: November 2026*  
> *Design Tokens Source: `tokens/design-tokens.json`, `tokens/tokens.css`, `tokens/themes.css`*

---

## Component Catalog Matrix & Implementation Index

Every component across the system is cataloged under one of three implementation tiers:
- **`[Production-Ready]`**: Fully implemented in HTML/CSS/JS with full interactive state machine.
- **`[Interactive Specimen]`**: Functional design prototype exhibiting layout, tokens, and core interactions.
- **`[Reference Contract]`**: Formal design and accessibility specification ready for framework binding.

| ID | Category | Component Name | Status | Token Binding | Primary Context |
| :--- | :--- | :--- | :---: | :--- | :--- |
| **ACT-01** | Actions & Status | Primary Button (Solar Amber) | `[Production-Ready]` | `--color-action-primary` | Marketing, Booking CTAs |
| **ACT-02** | Actions & Status | Secondary Button (Nordic Teal) | `[Production-Ready]` | `--color-action-secondary` | Portals, Secondary Actions |
| **ACT-03** | Actions & Status | Outline & Ghost Buttons | `[Production-Ready]` | `--color-action-outline-border` | Toolbars, Secondary Dialogs |
| **ACT-04** | Actions & Status | Destructive Button | `[Production-Ready]` | `--color-action-destructive` | Emergency Cutoff, Stage Reset |
| **ACT-05** | Actions & Status | Text Links & Arrow Links | `[Production-Ready]` | `--color-action-primary` | Editorial In-line Navigation |
| **ACT-06** | Actions & Status | Icon Buttons | `[Production-Ready]` | `--color-action-ghost-hover-bg` | Header Controls, Audio Panels |
| **ACT-07** | Actions & Status | Split Button | `[Interactive Specimen]` | `--btn-*`, `--z-dropdown` | Multi-action Stage Triggers |
| **ACT-08** | Actions & Status | Floating Action Button (FAB) | `[Production-Ready]` | `--color-emerald-500` | Persistent WhatsApp Live |
| **ACT-09** | Actions & Status | Button Groups & Segmented Bar | `[Interactive Specimen]` | `--color-border-primary` | View Mode, Audio Filter Switch |
| **ACT-10** | Actions & Status | Toggles & Toolbar Controls | `[Interactive Specimen]` | `--color-action-primary` | Rich Editor, Table Action Bar |
| **ACT-11** | Actions & Status | Status Indicators & Beacons | `[Production-Ready]` | `--color-status-*` | Hardware Stage Sync Indicators |
| **ACT-12** | Actions & Status | Badges & Notification Counters | `[Production-Ready]` | `--badge-*`, `--color-status-*` | Live Broadcast, Unread Cues |
| **ACT-13** | Actions & Status | Chips & Removable Tags | `[Interactive Specimen]` | `--radius-full`, `--space-2` | Filter Builder, Event Services |
| **ACT-14** | Actions & Status | Avatars & Avatar Groups | `[Interactive Specimen]` | `--radius-full`, `--space-8` | Production Crew, Client VIPs |
| **ACT-15** | Actions & Status | Progress Bars & Progress Rings | `[Production-Ready]` | `--color-brand-primary` | Decibel Gauge, File Upload |
| **ACT-16** | Actions & Status | Skeletons & Spinners | `[Production-Ready]` | `--duration-normal`, `--ease-*` | Lazy Loading, Network Telemetry |
| **ACT-17** | Actions & Status | Alerts & Banners | `[Production-Ready]` | `--color-status-*-bg` | System Disruption, Soundchecks |
| **ACT-18** | Actions & Status | Toasts (Snackbar) | `[Production-Ready]` | `--z-toast`, `--shadow-lg` | Action Confirmation, Copy Hex |
| **ACT-19** | Actions & Status | Inline Notices | `[Production-Ready]` | `--color-status-info-*` | Form Guidance, Telemetry Notes |
| **ACT-20** | Actions & Status | Empty States & Confirmation | `[Production-Ready]` | `--color-text-muted` | Zero Data Tables, Stage Reset |
| **FRM-01** | Forms & Inputs | Labels, Helper Text & Grouping | `[Production-Ready]` | `--font-size-sm`, `--space-1-5` | Enterprise Forms, Calibration |
| **FRM-02** | Forms & Inputs | Text, Email, Password Inputs | `[Production-Ready]` | `--input-*`, `--density-*` | Delegate Reg, VIP Portal Auth |
| **FRM-03** | Forms & Inputs | Number Stepper & Phone Input | `[Interactive Specimen]` | `--font-mono`, `--space-2` | Attendee Count, BD Phone Mask |
| **FRM-04** | Forms & Inputs | Textarea (Character Counter) | `[Production-Ready]` | `--input-radius`, `--space-3` | Event Briefs, Production Notes |
| **FRM-05** | Forms & Inputs | Search Bar with Clear & Icon | `[Production-Ready]` | `--radius-full`, `--space-4` | Global System Search, Catalog |
| **FRM-06** | Forms & Inputs | Select (Native & Custom Drop) | `[Production-Ready]` | `--input-*`, `--z-dropdown` | Venue Selection, Stage Tier |
| **FRM-07** | Forms & Inputs | Combobox / Autocomplete | `[Interactive Specimen]` | `--color-bg-surface-elevated` | Client Directory, Equipment |
| **FRM-08** | Forms & Inputs | Multiselect Tagging Input | `[Interactive Specimen]` | `--badge-*`, `--space-1` | Equipment Assign, Venue Specs |
| **FRM-09** | Forms & Inputs | Cascading Select | `[Reference Contract]` | `--input-bg`, `--color-border` | Category → Sub-service Routing |
| **FRM-10** | Forms & Inputs | Checkboxes & Radio Groups | `[Production-Ready]` | `--radius-sm`, `--radius-full` | Multi-select Gear, Stage Setup |
| **FRM-11** | Forms & Inputs | Switch Toggles | `[Production-Ready]` | `--color-brand-primary` | Live Audio Feed, Soundcheck |
| **FRM-12** | Forms & Inputs | Range Slider (Decibel Level) | `[Production-Ready]` | `--color-brand-primary` | Master Gain, Lighting Dimmer |
| **FRM-13** | Forms & Inputs | Star Rating Component | `[Interactive Specimen]` | `--color-amber-500` | Post-Event Feedback |
| **FRM-14** | Forms & Inputs | Date, Time & Range Pickers | `[Interactive Specimen]` | `--color-bg-surface-card` | Event Booking, Stage Calendar |
| **FRM-15** | Forms & Inputs | OTP / PIN Verification Box | `[Interactive Specimen]` | `--font-mono`, `--space-3` | Two-Factor Staff Portal Auth |
| **FRM-16** | Forms & Inputs | Drag & Drop File Upload | `[Interactive Specimen]` | `--color-border-highlight` | CAD Layouts, Event Schedules |
| **FRM-17** | Forms & Inputs | Rich-Text Editor Specimen | `[Interactive Specimen]` | `--color-border-primary` | Proposal Writing, Run-of-Show |
| **FRM-18** | Forms & Inputs | Validation States & Masks | `[Production-Ready]` | `--color-status-danger-*` | Inline Form Verification |
| **FRM-19** | Forms & Inputs | Multi-Step Wizard / Stepper | `[Interactive Specimen]` | `--color-brand-primary` | Summit Request Funnel |
| **FRM-20** | Forms & Inputs | Form Summary & Submit State | `[Interactive Specimen]` | `--color-status-success-*` | Order Confirmation, Booking |
| **NAV-01** | Navigation & Layout | Sticky Header & Utility Bar | `[Production-Ready]` | `--glass-bg`, `--z-sticky` | Site-wide Primary Navigation |
| **NAV-02** | Navigation & Layout | Mega Menu (Categorized) | `[Interactive Specimen]` | `--z-dropdown`, `--shadow-xl` | Production Services Explorer |
| **NAV-03** | Navigation & Layout | Mobile Right-Slide Drawer | `[Production-Ready]` | `--z-drawer`, `--ease-standard` | Responsive Mobile Navigation |
| **NAV-04** | Navigation & Layout | Tabs & Vertical Tabs | `[Production-Ready]` | `--color-action-primary` | Dashboard Rigs, Case Studies |
| **NAV-05** | Navigation & Layout | Breadcrumbs Navigation | `[Production-Ready]` | `--font-size-xs`, `--space-2` | Deep Portal Hierarchy |
| **NAV-06** | Navigation & Layout | Collapsible Admin Sidebar | `[Production-Ready]` | `--z-drawer`, `--space-4` | Operations Console Layout |
| **NAV-07** | Navigation & Layout | Command Palette (⌘K) | `[Interactive Specimen]` | `--z-modal`, `--font-mono` | Quick Tool Launcher |
| **NAV-08** | Navigation & Layout | Pagination & Stepper | `[Production-Ready]` | `--font-mono`, `--radius-md` | Event Logs, Table Navigation |
| **NAV-09** | Navigation & Layout | Anchor Nav / Scroll Spy | `[Production-Ready]` | `--color-brand-primary` | Documentation, Proposal Sections |
| **NAV-10** | Navigation & Layout | Footer Block | `[Production-Ready]` | `--color-bg-surface` | Legal, Corporate, Quick Links |
| **NAV-11** | Navigation & Layout | App Shell & Resizable Split | `[Interactive Specimen]` | `--color-border-primary` | Console Rig & Telemetry Split |
| **NAV-12** | Navigation & Layout | Bottom Sheet (Mobile) | `[Interactive Specimen]` | `--radius-xl`, `--z-drawer` | Mobile Quick Filters, Cues |
| **CNT-01** | Content & Marketing | Editorial Headings & Body | `[Production-Ready]` | `--font-display`, `--font-primary` | Storytelling, Case Summaries |
| **CNT-02** | Content & Marketing | Blockquotes & Quotes | `[Production-Ready]` | `--color-teal-500`, `--space-4` | Client Endorsements, Mantras |
| **CNT-03** | Content & Marketing | Media Cards & Case Studies | `[Production-Ready]` | `--card-*`, `--shadow-md` | Motor Fest, BSRM Summit Cards |
| **CNT-04** | Content & Marketing | Metric KPI Cards | `[Production-Ready]` | `--card-*`, `--font-mono` | Event Capacity, Audio Decibels |
| **CNT-05** | Content & Marketing | Pricing & Packages Matrix | `[Interactive Specimen]` | `--card-*`, `--color-amber-500` | 360 Booth Rental, Rig Tiers |
| **CNT-06** | Content & Marketing | Testimonial & Quote Slider | `[Interactive Specimen]` | `--radius-lg`, `--space-6` | Enterprise Client Reviews |
| **CNT-07** | Content & Marketing | Infinite Client Marquee | `[Production-Ready]` | `--duration-marquee`, pure CSS | BSRM, UCB, BYD, Royal Enfield |
| **CNT-08** | Content & Marketing | Accordion / FAQ Disclosure | `[Production-Ready]` | `--radius-md`, `--space-4` | Licensing, Acoustic Specs |
| **CNT-09** | Content & Marketing | Timeline & Milestone Tracker | `[Interactive Specimen]` | `--color-brand-primary` | Run-of-Show Stage Schedule |
| **CNT-10** | Content & Marketing | Newsletter & Contact Strip | `[Production-Ready]` | `--color-bg-surface-elevated` | Direct WhatsApp & Subscription |
| **OVL-01** | Overlays & Disclosure | Modal Dialog (Confirmation) | `[Production-Ready]` | `--z-modal`, `--glass-blur` | Stage Reset, Booking Confirm |
| **OVL-02** | Overlays & Disclosure | Alert Dialog (Destructive) | `[Production-Ready]` | `--color-action-destructive` | High Decibel Cutoff, Emergency |
| **OVL-03** | Overlays & Disclosure | Popover & Floating Menus | `[Interactive Specimen]` | `--z-popover`, `--shadow-lg` | Rig Quick Controls, Filters |
| **OVL-04** | Overlays & Disclosure | Tooltips (Accessible Hover) | `[Production-Ready]` | `--font-size-xs`, `--space-1` | Technical Acronym Explanations |
| **OVL-05** | Overlays & Disclosure | Dropdown & Context Menu | `[Interactive Specimen]` | `--z-dropdown`, `--radius-md` | Table Row Actions, Channel Menu |
| **OVL-06** | Overlays & Disclosure | Slide-Over Inspector Drawer | `[Production-Ready]` | `--z-drawer`, `--space-6` | Detailed Equipment Specs |
| **OVL-07** | Overlays & Disclosure | Notification Center Flyout | `[Interactive Specimen]` | `--z-popover`, `--shadow-xl` | Real-Time Hardware Event Log |
| **DTA-01** | Data-Rich Widgets | Sortable Data Table | `[Production-Ready]` | `--table-*`, `--density-*` | Stage Rig Telemetry Console |
| **DTA-02** | Data-Rich Widgets | Table Bulk Actions Bar | `[Interactive Specimen]` | `--color-action-primary` | Multi-channel Calibrate / Mute |
| **DTA-03** | Data-Rich Widgets | Row Expansion (Sub-channel) | `[Interactive Specimen]` | `--color-bg-surface` | Line-Array Phase Diagnostics |
| **DTA-04** | Data-Rich Widgets | CSV / Data Export Engine | `[Production-Ready]` | Client-side Blob generation | Telemetry Logs, Delegate CSV |
| **DTA-05** | Data-Rich Widgets | Audio SPL Meter (Gauge) | `[Production-Ready]` | `--color-status-*`, `--font-mono` | Decibel Warning System |
| **DTA-06** | Data-Rich Widgets | LED Video Wall FPS Counter | `[Production-Ready]` | `--font-mono`, `--color-teal-400` | 60 FPS Controller Lock |
| **DTA-07** | Data-Rich Widgets | SVG Line & Area Charts | `[Interactive Specimen]` | `--color-amber-500`, `--color-teal-500` | Decibel History, Venue Flow |
| **DTA-08** | Data-Rich Widgets | SVG Donut & Bar Charts | `[Interactive Specimen]` | `--color-brand-*`, `--color-status-*` | Budget Allocation, Attendance |
| **DTA-09** | Data-Rich Widgets | Interactive Calendar Grid | `[Interactive Specimen]` | `--color-border-primary` | Summit Scheduler, Stage Bookings |
| **DTA-10** | Data-Rich Widgets | Equipment Tree View | `[Interactive Specimen]` | `--font-mono`, `--space-2` | Audio / Video / Lighting Assets |
| **DTA-11** | Data-Rich Widgets | Audit Log & Activity Feed | `[Production-Ready]` | `--font-mono`, `--badge-*` | Security, Hardware Adjustments |

---

## 1. Actions & Status Category

### 1.1 ACT-01 to ACT-06: Buttons & Action Variants
- **Anatomy**: `[Leading Icon Slot] + [Label Text Slot] + [Trailing Icon Slot]`.
- **Button Tokens**:
  - Primary: `--color-action-primary` (`#F09320`) background, mandatory Obsidian (`#070D18`) text for **8.24:1 AAA contrast**.
  - Secondary: `--color-action-secondary` (`#4694B1`) background, white text (**5.68:1 AA contrast**).
  - Outline: Transparent background, `1px solid var(--color-action-outline-border)`, text-safe teal (`#2B5E70`) text (**7.15:1 AAA** on white).
  - Ghost: Transparent background, hovered background `rgba(255,255,255,0.06)` (Dark) / `rgba(0,0,0,0.06)` (Light).
  - Destructive: `--color-action-destructive` (`#EF4444`) background, white text.
- **Sizes**: `sm` (32px / font 12px), `md` (40px / font 14px), `lg` (48px / font 16px), `icon` (40×40px).
- **Supported States**: Default, Hover (`translateY(-1px)`), Active/Pressed (`scale(0.98)`), Focus-Visible (2px Amber ring, 2px offset), Disabled (`opacity: 0.45; pointer-events: none`), Loading (spinning ring with `aria-busy="true"`).

### 1.2 ACT-07: Split Button `[Interactive Specimen]`
- **Structure**: Compound button combining a primary trigger label on the left and a dropdown chevron toggle on the right, divided by a 1px hairline border.
- **Interaction Contract**: Clicking the primary trigger executes the default action (e.g., "Calibrate Audio"); clicking the chevron opens an anchored menu (e.g., "Calibrate Stage A", "Calibrate Stage B", "Save Diagnostics").
- **Keyboard Traversal**: `Tab` focuses primary action; next `Tab` focuses dropdown trigger; `Enter` or `Down Arrow` opens flyout.

### 1.3 ACT-08: Floating Action Button (FAB) `[Production-Ready]`
- **Token Spec**: `--color-emerald-500` background, `--radius-full`, `--shadow-xl`, anchored fixed at `bottom: 24px; right: 24px; z-index: 1200`.
- **Primary Use Case**: Direct WhatsApp live contact button (`+880 1671-863685`).
- **Responsive Rule**: On mobile viewports (`<= 768px`), redundant header WhatsApp pills are hidden, making the FAB the sole conversion channel.

### 1.4 ACT-11 & ACT-12: Status Indicators, Beacons & Counters
- **Live Beacon (`.ft-beacon-dot.pulse`)**: Dual-ring hardware pulse animation in pure CSS:
  ```css
  @keyframes pulse-ring {
    0% { transform: scale(0.6); opacity: 0.9; }
    100% { transform: scale(2.2); opacity: 0; }
  }
  ```
- **Semantic Color Spectrum**:
  - Live Stage Sync: Emerald (`#10B981`)
  - Soundcheck Standby: Amber (`#F59E0B`)
  - Signal Disrupted: Crimson (`#EF4444`)
  - Controller Locked (60 FPS): Blue (`#3B82F6`)
- **Accessibility Rule**: Color is never the sole differentiator. Every beacon is accompanied by an uppercase textual status label.

### 1.5 ACT-18 & ACT-20: Toasts & Empty States
- **Toast Engine**: Stacked at `--z-toast` (`1500`), auto-dismissing after 3200ms with smooth cubic-bezier slide up. Emits `role="status"` and `aria-live="polite"`.
- **Empty State**: Centered dashed container with an illustrative acoustic tuning icon, clear title (*"No Active Event Channels Detected"*), helpful description, and a primary action button to restore defaults.

---

## 2. Forms & Inputs Category

### 2.1 FRM-01 & FRM-02: Text, Email, Password & Phone Controls
- **Anatomy**: `[Label] + [Optional/Required Indicator] + [Leading Icon Slot] + [Input Field] + [Trailing Action Slot] + [Helper/Error Text]`.
- **Password Input**: Trailing eye icon toggles `type="password"` and `type="text"` with accessible `aria-label="Show password"`.
- **Phone Input**: Bangladesh localized prefix `+880` with input masking `01XXX-XXXXXX`.
- **Validation Contract**:
  - Valid: Border shifts to `--color-status-success-base` (`#10B981`) with trailing checkmark icon.
  - Invalid: Border shifts to `--color-status-danger-base` (`#EF4444`), box-shadow glows red (`rgba(239, 68, 68, 0.2)`), displays inline error message with `aria-invalid="true"` and `aria-describedby="err-msg"`.

### 2.2 FRM-04: Textarea with Character Counter `[Production-Ready]`
- **Spec**: Resizable vertically only (`resize: vertical`), minimum height 100px.
- **Counter Binding**: Live event listener updates characters count (e.g. `142 / 500`). When limit is exceeded, counter turns Crimson (`#EF4444`).

### 2.3 FRM-06 & FRM-07: Select & Combobox / Autocomplete
- **Native Select**: Used for simple mobile forms to trigger native iOS wheel / Android dialog.
- **Custom Select / Combobox**: Built for desktop portals, featuring filter search, keyboard navigation (`ArrowUp`, `ArrowDown`, `Enter`, `Escape`), and custom checkmarks for selected options.

### 2.4 FRM-11 & FRM-12: Switch & Decibel Range Slider
- **Switch**: Smooth hardware toggle (`transform: translateX(20px)`), `role="switch"`, `aria-checked="true"`.
- **Decibel Range Slider**: Custom thumb in Solar Amber (`#F09320`), driving real-time dBA gauge updates from 50 to 115 dBA.

### 2.5 FRM-15: OTP / PIN Verification Box `[Interactive Specimen]`
- **Structure**: 6 individual single-character input boxes set in `JetBrains Mono`.
- **Interaction Contract**: Auto-focuses next input on character entry; pressing `Backspace` clears current box and shifts focus to previous input. Supports paste parsing of 6-digit codes.

### 2.6 FRM-16: Drag & Drop File Upload Zone `[Interactive Specimen]`
- **Structure**: Dashed border container (`border: 2px dashed var(--color-border-highlight)`) with upload cloud icon.
- **Interaction**: Dragging files over the zone applies an active Solar Amber glow and highlight border; dropping registers files and renders thumbnail previews with progress bars.

---

## 3. Navigation & Layout Category

### 3.1 NAV-01 & NAV-03: Header & Right-Slide Mobile Drawer
- **Header Structure**: Sticky, 72px height, frosted glass backdrop (`backdrop-filter: blur(16px)`), containing vector emblem mark, primary nav links, search input, and toolbar actions.
- **Mobile Right-Slide Drawer**:
  - Replaces top dropdown menus with a lateral slide on the X-axis: `transform: translateX(100%) -> translateX(0)`.
  - Spring-like timing curve: `cubic-bezier(0.16, 1, 0.3, 1)`.
  - Paired with an interactive frosted backdrop (`backdrop-filter: blur(8px)`) and distinct close trigger.
  - Focus is trapped inside the drawer while active; pressing `Escape` or tapping the backdrop closes it immediately.

### 3.2 NAV-04 & NAV-06: Tabs & Collapsible Admin Sidebar
- **Tab Component**: ARIA tabs contract (`role="tablist"`, `role="tab"`, `role="tabpanel"`). `ArrowLeft` and `ArrowRight` navigate tabs.
- **Admin Sidebar**:
  - Expanded Mode (`width: 280px`): Full category headers, item labels, and metric badge counts.
  - Collapsed Mode (`width: 64px`): Icon-only navigation with tooltips.
  - Active Link Indicator: 2px Solar Amber border on left, subtle amber background tint (`rgba(240, 147, 32, 0.1)`).

### 3.3 NAV-07: Command Palette Overlay (⌘K) `[Interactive Specimen]`
- **Interaction**: Pressing <kbd>⌘K</kbd> or <kbd>Ctrl+K</kbd> opens a floating modal input with fuzzy search over all system pages, actions, and rigs.
- **Keyboard Navigation**: `ArrowDown` / `ArrowUp` to navigate options; `Enter` to select; `Escape` to dismiss.

---

## 4. Content & Marketing Category

### 4.1 CNT-03 to CNT-05: Editorial Case Cards & Metric KPI Tiles
- **Editorial Case Card**: 16:9 featured event photography, category badge, bold headline, brief excerpt, and direct case study CTA. Features smooth hover elevation (`translateY(-2px)`).
- **Metric KPI Tile**: Clean card displaying metric title in uppercase caption font, prominent numeral in `JetBrains Mono`, and status delta indicator (+12.4% green / -2.1% red).

### 4.2 CNT-07: Infinite Seamless Partner Marquee `[Production-Ready]`
- **Architecture**: Dual identical `.marquee-track` flex containers drifting continuously at a `32s` loop interval using pure GPU CSS keyframes (`@keyframes marquee-drift`).
- **Features**: Automatic pause on cursor hover (`animation-play-state: paused`) and transparent left/right gradient edge masks.

### 4.3 CNT-08: Accordions & FAQ Disclosures
- **Markup**: Structured with accessible `<button aria-expanded="false">` triggers and content panels. Smooth vertical transition on height expansion.

---

## 5. Overlays & Disclosure Category

### 5.1 OVL-01 to OVL-04: Modals, Dialogs, Popovers & Tooltips
- **Modal Dialog Rules**:
  - Centered vertically and horizontally over `--z-modal` (`1300`) backdrop.
  - Background scrolling is locked (`body { overflow: hidden; }`).
  - Pressing `Escape` or clicking the backdrop dismisses the dialog.
  - Focus is automatically placed on the first interactive element upon open, and restored to the trigger button upon close.
- **Tooltip Contract**: Displayed on hover or focus after a 200ms delay. Contains only brief informational text (zero interactive controls inside tooltips; use popovers for interactive menus).

### 5.2 OVL-06: Slide-Over Inspector Drawer `[Production-Ready]`
- Anchored to the right viewport edge. Used in operations consoles for inspecting line-array phase alignment, stage schematics, and VIP guest records without navigating away from the active data table.

---

## 6. Data-Rich Widgets Category

### 6.1 DTA-01 to DTA-04: Advanced Data Table Engine
- **Sortable Columns**: Clicking column headers toggles between ascending (`sort-asc`), descending (`sort-desc`), and neutral order, with real-time DOM row sorting.
- **Bulk Selection**: Checking the header master checkbox selects or deselects all rows; selecting individual rows displays the floating **Bulk Actions Bar** (*"3 Selected — [Calibrate] [Mute] [Export]"*).
- **CSV Data Export**: A working client-side engine generates a formatted CSV file using `Blob` and triggers an automatic browser download.
- **Compact vs. Comfortable Row Densities**: 36px row height in compact ops mode vs. 48px in comfortable mode.

### 6.2 DTA-05: Live SPL Decibel (dBA) Soundcheck Meter `[Production-Ready]`
- Real-time reactivity driven by an interactive input range slider.
- Visual thresholds:
  - $< 85\text{ dBA}$: Emerald Green (`#10B981`) — *Acoustic Safe*
  - $86 - 95\text{ dBA}$: Solar Amber (`#F09320`) — *Elevated Concert Level*
  - $> 95\text{ dBA}$: Crimson Red (`#EF4444`) — *PEAK LIMIT WARNING with flashing beacon*

### 6.3 DTA-07 & DTA-08: SVG Interactive Charts `[Interactive Specimen]`
- Vector Line, Bar, and Donut charts styled with design tokens:
  - Line Chart: Solar Amber primary curve with Nordic Teal secondary baseline.
  - Donut Chart: Categorical breakdown of production assets (Audio, Video, Trussing, Tech).
  - Hover Tooltips: Floating cards showing exact numerical values on data point hover.

---

## 7. Responsiveness & Long-Label Behavior Matrix

| Component | Default Desktop View | Mobile Transformation (< 768px) | Long-Label / Overflow Strategy |
| :--- | :--- | :--- | :--- |
| **Buttons** | Inline flex with icon + label | Full-width (`w-100`) in mobile dialogs | Text wraps gracefully or clamps with ellipsis |
| **Data Tables** | Multi-column grid with sticky headers | Card-tile stacked mode or horizontal scroll | Cell text truncates with tooltip on hover |
| **Header Nav** | Horizontal link strip + actions | Collapses to hamburger + right slide drawer | Long links wrap cleanly inside lateral drawer |
| **Tabs** | Horizontal tab list with indicator | Scrollable horizontal strip with fade masks | Flex-shrink: 0 with swipe gestures |
| **Modal Dialogs** | Centered box (max-width: 540px) | Full-width bottom sheet or bottom modal | Body scrolls with sticky header and footer |
| **KPI Tiles** | 3 or 4-column horizontal grid | 1-column stacked cards | Values maintain tabular font (`JetBrains Mono`) |

---

*Master Component Inventory & Design Contracts verified for Fine Tuning engineering execution.*
