# Fine Tuning — Brand Guidelines & Visual Identity Standard

> **Authoritative Brand Architecture, Emblem Geometry, Color Systems & Voice**  
> *Target Organization: Fine Tuning Advertising Agency (Chattogram & Dhaka, Bangladesh)*  
> *Version: 2.5.0 | Status: Canonical Standard | Package: `@finetuning/design-system`*

---

## 1. System Identity & Mission

**Fine Tuning** (`finetuning.com.bd`) is an experiential advertising agency and full-service turnkey event production firm operating in Chattogram and Dhaka, Bangladesh. The agency specializes in corporate summits, panoramic curved LED volumes, acoustic line-array engineering, architectural exhibition pavilions, youth and business competitions, and sports hospitality.

### Brand Tagline
- **Primary**: *Where Experiential Precision Meets Stage Energy.*
- **Secondary**: *Engineering Immaculate Experiential Environments.*

---

## 2. Emblem Geometry & Wordmark Specifications

The Fine Tuning vector mark combines acoustic tuning fork precision with the dynamic energy of an arena spotlight.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       OFFICIAL LOGO GEOMETRY CONTRACT                       │
├─────────────────────────────────────────────────────────────────────────────┤
│ ViewBox Coordinates: viewBox="0 0 2400 1758"                                │
│ Clear Space Perimeter: X = 443 SVG units                                    │
│ Minimum Clear Space: 48px Desktop / 24px Mobile                             │
│ Primary Emblem Colors: Solar Amber (#F09320) & Nordic Teal (#4694B1)        │
│ Wordmark Font: Syne (Weight 800 ExtraBold) & Outfit (Weight 700 Bold)      │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.1 Logo Clear Space
No typography, UI borders, imagery edges, or graphical elements may encroach within perimeter $X = 443\text{ SVG units}$ around the emblem.

### 2.2 Prohibited Logo Treatments
- Never alter the aspect ratio or skew the emblem geometry.
- Never render the emblem in unapproved colors (e.g. magenta, purple, green).
- Never place the logo on busy photographic backgrounds without an obsidian glass scrim (`--glass-bg`).
- Never separate the needle from the cradle arc in official brand headers.

---

## 3. Brand Color Palette & Contrast Hierarchy

The color system is engineered for dual-theme environments with strict WCAG AAA contrast compliance:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          BRAND COLOR TAXONOMY                               │
├─────────────────────────────────────────────────────────────────────────────┤
│ SOLAR AMBER (#F09320 / --color-amber-500): Core Brand Action Primary        │
│ - Mandatory Text: Midnight Obsidian (#070D18 / --color-slate-950) -> 8.24:1 │
│ - Strict Rule: WHITE TEXT ON AMBER IS FORBIDDEN (2.36:1 fails WCAG AA).     │
├─────────────────────────────────────────────────────────────────────────────┤
│ NORDIC TEAL (#4694B1 / --color-teal-500): Secondary Accent & Cradle Mark   │
│ - Dark Mode Contrast: 5.68:1 AA against Midnight Obsidian canvas.          │
│ - Light Mode Contrast: BANNED for text. Must use --color-teal-700 (#2B5E70) │
│   (7.15:1 AAA) or --color-teal-800 (#1C4453) (10.49:1 AAA) for body copy.   │
├─────────────────────────────────────────────────────────────────────────────┤
│ MIDNIGHT OBSIDIAN (#070D18 / --color-slate-950): Default Dark Canvas        │
│ - Canvas Background for staging consoles, telemetry, and dark-mode web.     │
│ - Achieves 18.10:1 AAA contrast with White / Slate-50 body copy.            │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Typographic System & Font Pairings

The brand uses a calibrated three-font stack loaded via Google Fonts:

1. **Editorial Display Sans (`--font-display`)**: `'Syne', sans-serif` (Weights `700`, `800`).
   - *Role*: Hero display headlines, page titles, section numbers, case study titles.
   - *Character*: Structural, mechanical, confident, architectural.
2. **Primary Digital UI Sans (`--font-primary`)**: `'Outfit', system-ui, sans-serif` (Weights `300`–`900`).
   - *Role*: Body copy, navigation links, form labels, inputs, table cells, and button text.
   - *Character*: Highly legible, geometric, modern grotesque.
3. **Data & Telemetry Mono (`--font-mono`)**: `'JetBrains Mono', monospace` (Weights `400`–`600`).
   - *Role*: Soundcheck decibel metrics (`dBA`), timestamps, CAD filenames, radio frequencies, hardware specs.
   - *Character*: High-density data legibility, tabular alignment.

---

## 5. Authentic Proof Policy & Voice

Fine Tuning strictly enforces an **authentic engineering voice**:
- **Tone**: Technical, authoritative, unflappable, precise, safety-first.
- **Zero Fabricated Proof**: Never invent fake testimonials, fictional CMO quotes, or mock corporate logos.
- **Approved Clients**: BSRM Group, UCB Bank, BYD Auto, Royal Enfield Bangladesh, CPDL, Akij Group, KDS Group, BUET Graduates Club.
- **Pending Stakeholder Facts**: Explicitly marked as `[PENDING STAKEHOLDER SUBMISSION: Official Trade License / BIN Number]`.

