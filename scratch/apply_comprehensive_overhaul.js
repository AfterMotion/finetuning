const fs = require('fs');
const path = require('path');

const previewDir = path.join(__dirname, '..', 'preview');

const whatsappSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="color: #25D366; flex-shrink: 0;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.204 8.204 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.53c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.11-.23-.17-.48-.29z"/></svg>`;

const faqChevronSvg = `<svg class="faq-chevron-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>`;

const standardizedFooter = `  <!-- 12. MULTI-COLUMN CORPORATE FOOTER -->
  <footer class="corporate-footer" role="contentinfo">
    <div class="container">
      <div class="footer-grid">
        <!-- Col 1: Brand & Profile -->
        <div>
          <a href="./index.html" class="brand-lockup" style="margin-bottom: 16px; text-decoration: none;" aria-label="Fine Tuning Home">
            <img src="../assets/brand/fine-tuning-logo.png" alt="Fine Tuning Advertising Agency" class="brand-logo-img" style="height: 38px;">
          </a>
          <p style="font-size: 0.875rem; color: #94A3B8; line-height: 1.6; margin-bottom: 16px;">
            Fine Tuning is an experiential advertising agency and full-service turnkey event production firm operating in Chattogram and Dhaka, Bangladesh.
          </p>
          <div style="font-family: var(--font-mono); font-size: 0.75rem; color: #94A3B8;">
            Facebook: <a href="https://www.facebook.com/finetuningbd" target="_blank" rel="noopener" class="footer-link">@finetuningbd</a>
          </div>
        </div>

        <!-- Col 2: Capabilities & Pages -->
        <div>
          <div class="footer-col-title">Capabilities &amp; Fleet</div>
          <ul class="footer-links-list">
            <li><a href="./service.html" class="footer-link">Curved P2.6 LED Volumes</a></li>
            <li><a href="./service.html" class="footer-link">Acoustic Line Arrays</a></li>
            <li><a href="./service.html" class="footer-link">Turnkey Corporate Summits</a></li>
            <li><a href="./service.html" class="footer-link">3D Architectural Pavilions</a></li>
            <li><a href="./service.html" class="footer-link">5G Bonded Live Broadcast</a></li>
            <li><a href="./service.html" class="footer-link">360° Motorized Video Booths</a></li>
          </ul>
        </div>

        <!-- Col 3: Operational Bases -->
        <div>
          <div class="footer-col-title">Operations Bases</div>
          <ul class="footer-links-list">
            <li><span class="footer-base-label">Chattogram Base:</span> <span class="footer-base-val">Nasirabad &amp; Kajir Dewri</span></li>
            <li><span class="footer-base-label">Dhaka Hub:</span> <span class="footer-base-val">Gulshan-2, Dhaka 1212</span></li>
            <li><a href="tel:+8801671863685" class="footer-link">Direct: +880 1671-863685</a></li>
            <li><a href="mailto:finetuningbd@gmail.com" class="footer-link">Email: finetuningbd@gmail.com</a></li>
            <li><span style="font-family: var(--font-mono); font-size: 0.75rem; color: #F09320;">2-Hour Technical SLA</span></li>
          </ul>
        </div>
      </div>

      <!-- Legal & Public Status Bar -->
      <div class="footer-bottom-bar">
        <div>
          © 2026 Fine Tuning Advertising Agency. All rights reserved.
        </div>
        <div style="display: flex; gap: 20px; align-items: center; flex-wrap: wrap;">
          <a href="./privacy.html" class="footer-link">Privacy Policy</a>
          <a href="./terms.html" class="footer-link">Terms of Service</a>
          <a href="https://wa.me/8801671863685" target="_blank" rel="noopener" class="footer-link" style="color: #F09320 !important;">WhatsApp Desk: +880 1671-863685</a>
          <span style="display: inline-flex; align-items: center; gap: 6px; color: #94A3B8;">
            <span class="status-dot-pulse" style="width: 6px; height: 6px;"></span>
            <span>Chattogram &amp; Dhaka Live</span>
          </span>
        </div>
      </div>
    </div>
  </footer>`;

const files = fs.readdirSync(previewDir).filter(f => f.endsWith('.html'));

files.forEach(filename => {
  const filePath = path.join(previewDir, filename);
  let html = fs.readFileSync(filePath, 'utf8');

  // 1. Remove theme toggle and density toggle buttons
  html = html.replace(/<button id="theme-toggle-btn"[\s\S]*?<\/button>\s*/g, '');
  html = html.replace(/<button id="density-toggle-btn"[\s\S]*?<\/button>\s*/g, '');

  // 2. Replace brand-lockup in header (if still using SVG + brand-names)
  html = html.replace(
    /<a href="[^"]*" class="brand-lockup"[^>]*>[\s\S]*?<svg class="brand-emblem-svg"[\s\S]*?<\/svg>[\s\S]*?<div class="brand-names">[\s\S]*?<\/div>\s*<\/a>/g,
    `<a href="./index.html" class="brand-lockup" aria-label="Fine Tuning Home">\n        <img src="../assets/brand/fine-tuning-logo.png" alt="Fine Tuning Advertising Agency" class="brand-logo-img">\n      </a>`
  );

  // 3. Replace brand-title in drawer-header with logo
  html = html.replace(
    /<div class="drawer-header">\s*<span class="brand-title">FineTuning<\/span>/g,
    `<div class="drawer-header">\n        <img src="../assets/brand/fine-tuning-logo.png" alt="Fine Tuning" class="brand-logo-img" style="height: 32px;">`
  );

  // 4. Remove Acoustics link from nav and drawer
  html = html.replace(/<a href="[^"]*#acoustics"[^>]*>Acoustics?<\/a>\s*/gi, '');
  html = html.replace(/<li><a href="[^"]*#acoustics"[^>]*>[\s\S]*?<\/a><\/li>\s*/gi, '');

  // 5. Replace FAQ crude triangle with SVG
  html = html.replace(/<span class="faq-chevron" aria-hidden="true">▼<\/span>/g, faqChevronSvg);
  html = html.replace(/<span class="faq-chevron" aria-hidden="true">&#9660;<\/span>/g, faqChevronSvg);
  html = html.replace(/<span class="faq-chevron" aria-hidden="true">&#9650;<\/span>/g, faqChevronSvg);

  // 6. Replace WhatsApp button with emoji
  html = html.replace(
    /<span>💬\s*Open WhatsApp Live Desk \(\+880 1671-863685\)<\/span>/g,
    `${whatsappSvg}\n            <span>Open WhatsApp Live Desk (+880 1671-863685)</span>`
  );
  html = html.replace(
    /💬\s*WhatsApp Production Desk/g,
    `Open WhatsApp Live Desk (+880 1671-863685)`
  );

  // 7. Standardize footer on all pages (excluding system error pages 404/500/503/maintenance which don't have standard footers)
  const isSystemPage = ['404.html', '500.html', '503.html', 'maintenance.html'].includes(filename);
  if (!isSystemPage) {
    html = html.replace(/<!--.*?Footer[\s\S]*?<footer class="corporate-footer"[\s\S]*?<\/footer>/gi, standardizedFooter);
  } else {
    // For system pages, replace the brand lockup with logo img
    html = html.replace(
      /<span class="brand-title">FineTuning<\/span>/g,
      `<img src="../assets/brand/fine-tuning-logo.png" alt="Fine Tuning" class="brand-logo-img" style="height: 36px;">`
    );
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Updated ${filename}`);
});

console.log('All preview HTML pages successfully overhauled.');

