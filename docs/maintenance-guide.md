# Fine Tuning — Design System Maintenance & Governance Guide

> **Developer & Designer Implementation Runbook**  
> *Version: 1.1.0 (Updated 2026)*

---

## 1. Governance for System & Error Pages

When building or updating system-level pages (e.g., Maintenance Mode, 404, 500, 503, 403, 502):

### 1.1 Strict Single-Screen Viewport Rule
- All system pages **must** fit entirely within a single screen on both Desktop and Mobile viewports.
- The `body` must be configured with `height: 100vh; height: 100dvh; overflow: hidden;`.
- Avoid adding excessive paragraphs, multi-step accordions, or secondary galleries to error pages.
- Ensure that the primary recovery action (`Return to Main Stage`, `Reload Page`, or `Notify Me`) is always visible above the footer without scrolling.

### 1.2 Open Graph (OG) Thumbnail Compliance
Every HTML page in the repository must specify the official OG thumbnail in its `<head>`:
```html
<meta property="og:image" content="https://finetuning.com.bd/images/og-thumbnail.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://finetuning.com.bd/images/og-thumbnail.png">
```

---

## 2. Font Stack Enforcement

- Display & Headings: Use `'Outfit', sans-serif` (weights 700, 800, 900) or `'Syne', sans-serif` for artistic accents.
- Body Copy: Use `'Outfit', system-ui, sans-serif` (weights 400, 500).
- Monospace: Use `'JetBrains Mono', monospace`.
- **Note**: `Playfair Display` has been deprecated as of v1.1.0 to ensure a modern, sleek agency identity.

---

## 3. File Inventory

```
finetuning.com.bd/
├── index.html                 # Single-screen Maintenance Mode Page
├── 404.html                   # Single-screen 404 Page Not Found
├── 500.html                   # Single-screen 500 Internal Server Error
├── 503.html                   # Single-screen 503 Service Unavailable
├── images/
│   ├── Fine Tuning icon.png   # Official FT needle emblem asset
│   ├── Fine Tuning Logo.png   # Official brand lockup
│   └── og-thumbnail.png       # Official 1200x630 social share thumbnail
├── docs/                      # Written brand guidelines & architecture
├── skills/                    # Reusable Antigravity AI Agent Skill
├── finetuning/                # Standalone Interactive HTML Preview Showroom
└── CNAME                      # Custom domain (finetuning.com.bd)
```
