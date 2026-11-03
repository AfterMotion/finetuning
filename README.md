# Fine Tuning - Brand Identity, Design System & Event Management Website

> **Official Single-Page Portfolio Website & Brand System for finetuning.com.bd**  
> _Industry: Event Management & Experiential Advertising Agency_  
> _Headquarters: Shop No. 01, CDA Market, Kajir Dewri, Chittagong, Bangladesh, 4203_  
> _Primary Channel: Direct WhatsApp (+880 1671-863685)_  
> _Version: 2.0.0 (2026)_

---

## 🌟 Executive Summary

This repository hosts the official web infrastructure, brand guidelines, and single-page portfolio website for **Fine Tuning** (`finetuning.com.bd`).

Fine Tuning is a premier event management and experiential advertising agency based in Chattogram and Dhaka, orchestrating corporate summits, architectural exhibition pavilions, youth and business competitions, sports hospitality, and brand activations across Bangladesh.

---

## 📁 Repository Structure

```
finetuning.com.bd/
├── index.html                             # Single-Page Light-Theme Event Management Portfolio Website
├── maintenance.html                       # Single-Screen Maintenance Mode Page (Archived)
├── 404.html                               # Single-Screen 404 Not Found Page ("Frequency Out of Range")
├── 500.html                               # Single-Screen 500 Server Error Page ("Signal Interrupted")
├── 503.html                               # Single-Screen 503 Service Unavailable ("Soundcheck in Progress")
│
├── images/                                # Brand & Event Photography Assets
│   ├── fine-tuning-icon.png               # High-res FT needle emblem asset
│   ├── fine-tuning-logo.png               # High-res brand lockup
│   ├── og-thumbnail.png                   # Official 1200x630 Open Graph sharing thumbnail
│   ├── program-01/                        # Raw photos: 8th Motor Fest (BYD & Royal Enfield)
│   ├── program-02/                        # Raw photos: BSRM CORE ESG Event
│   ├── program-03/                        # Raw photos: BIZSTAR Season V Grand Finale
│   ├── program-04/                        # Raw photos: UCB Annual Get-Together in Rangamati
│   └── webp/                              # High-performance WebP optimized portfolio images
│       ├── program-01/                    # WebP automotive pavilions
│       ├── program-02/                    # WebP corporate ESG summits
│       ├── program-03/                    # WebP business case competitions
│       └── program-04/                    # WebP scenic destination retreats
│
├── docs/                                  # Complete Written Documentation
│   ├── brand-activities-overview.md       # Full data synthesis: 45+ Facebook post catalog, clients & services
│   ├── brand-guidelines.md                # Brand philosophy, logo anatomy, clear space, light theme standards
│   ├── design-system.md                   # Tokens, typography hierarchy (Outfit & Syne), portfolio grid specs
│   ├── components.md                      # UI component specifications (buttons, cards, lightbox, badges)
│   ├── maintenance-guide.md               # Developer & designer governance runbook
│   └── changelog.md                       # Architecture Decision Record
│
├── skills/                                # Reusable AI & Developer Skill
│   └── finetuning-design-system/
│       └── SKILL.md                       # Antigravity skill enforcing typography, light theme & WhatsApp standards
│
├── finetuning/                            # Design System Preview & Assets
│   ├── index.html                         # Full interactive showroom & documentation portal
│   ├── css/
│   │   ├── tokens.css                     # Core CSS custom properties (light & dark modes)
│   │   ├── components.css                 # Production component classes (.ft-btn, .ft-card, etc.)
│   │   ├── preview.css                    # Showroom portal layout and navigation
│   │   └── site.css                       # Single-page portfolio website styling
│   └── js/
│       ├── preview.js                     # Theme toggle, click-to-copy hex, modals, live toasts
│       └── site.js                        # Single-page portfolio scripts (filters, lightbox, mobile drawer)
│
├── CNAME                                  # Custom domain (finetuning.com.bd)
└── README.md                              # This project overview
```

---

## 🚀 Key Website Features

1. **Editorial Studio Light Theme**: Built with crisp whites (`#FFFFFF`), architectural slate (`#F8FAFC`), vibrant Solar Amber (`#F09320`), and deep Nordic Teal (`#4694B1` / `#2B5E70`) ensuring WCAG AAA accessibility.
2. **Zero-Form WhatsApp-First Contact Architecture**: No cumbersome web forms. Clients click directly to initiate pre-filled event consultations on WhatsApp (`+880 1671-863685`), backed by direct telephone and email links.
3. **Verified Real-World Case Studies (WebP Optimized)**:
   - **8th Motor Fest, Chattogram**: BYD Seal 5 / Sealion 6 & Royal Enfield / GP Lubricants pavilions.
   - **BSRM CORE ESG Event**: National corporate summit with curved panoramic LED stage and executive banqueting.
   - **BIZSTAR Season V Grand Finale**: University of Chittagong ACC national competition sponsored by KDS.
   - **UCB Annual Get-Together 2026**: United Commercial Bank PLC destination retreat at Bargee Lake Valley, Rangamati.
4. **Interactive Experience**:
   - Filterable portfolio categories (`All`, `Exhibitions`, `Corporate & ESG`, `Competitions`, `Retreats`).
   - High-resolution Lightbox Modal with keyboard navigation (`Esc`).
   - Responsive mobile navigation drawer.
   - Persistent pulsing floating WhatsApp action button.
