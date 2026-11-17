const fs = require('fs');
const path = require('path');

const previewDir = path.join(__dirname, '..', 'preview');

const svgHeaderLockup = `<svg class="brand-emblem-svg" viewBox="0 0 2400 1758" fill="none" aria-hidden="true">
          <path fill="#4694B1" d="M 41 358 L 30 600 L 68 836 L 143 1038 L 272 1247 L 418 1404 L 608 1543 L 810 1637 L 1049 1694 L 1278 1701 L 1502 1664 L 1719 1582 L 1910 1463 L 2080 1304 L 2209 1126 L 2306 917 L 2357 713 L 2370 484 L 2347 296 L 2298 128 L 2191 342 L 2207 607 L 2153 866 L 2049 1078 L 1897 1262 L 1679 1421 L 1416 1519 L 1130 1540 L 861 1484 L 695 1407 L 544 1300 L 421 1175 L 318 1025 L 246 866 L 201 686 L 190 494 L 208 342 L 101 128 Z" fill-rule="evenodd"/>
          <path fill="#F09320" d="M 1347 795 L 1848 794 L 1941 607 L 1375 608 Z M 458 607 L 551 794 L 1052 795 L 1023 607 Z M 1432 241 L 2124 241 L 2217 53 L 1461 53 Z M 978 53 L 1200 1495 L 1421 53 Z M 182 53 L 275 241 L 967 241 L 938 53 Z" fill-rule="evenodd"/>
        </svg>
        <div class="brand-names">
          <span class="brand-title">Fine Tuning</span>
          <span class="brand-sub">Experiential Advertising</span>
        </div>`;

const svgDrawerLockup = `<svg class="brand-emblem-svg" viewBox="0 0 2400 1758" fill="none" aria-hidden="true" style="width: 32px; height: 24px;">
            <path fill="#4694B1" d="M 41 358 L 30 600 L 68 836 L 143 1038 L 272 1247 L 418 1404 L 608 1543 L 810 1637 L 1049 1694 L 1278 1701 L 1502 1664 L 1719 1582 L 1910 1463 L 2080 1304 L 2209 1126 L 2306 917 L 2357 713 L 2370 484 L 2347 296 L 2298 128 L 2191 342 L 2207 607 L 2153 866 L 2049 1078 L 1897 1262 L 1679 1421 L 1416 1519 L 1130 1540 L 861 1484 L 695 1407 L 544 1300 L 421 1175 L 318 1025 L 246 866 L 201 686 L 190 494 L 208 342 L 101 128 Z" fill-rule="evenodd"/>
            <path fill="#F09320" d="M 1347 795 L 1848 794 L 1941 607 L 1375 608 Z M 458 607 L 551 794 L 1052 795 L 1023 607 Z M 1432 241 L 2124 241 L 2217 53 L 1461 53 Z M 978 53 L 1200 1495 L 1421 53 Z M 182 53 L 275 241 L 967 241 L 938 53 Z" fill-rule="evenodd"/>
          </svg>
          <div class="brand-names">
            <span class="brand-title" style="font-size: 1.125rem;">Fine Tuning</span>
            <span class="brand-sub" style="font-size: 0.5625rem;">Experiential Advertising</span>
          </div>`;

const svgFooterLockup = `<svg class="brand-emblem-svg" viewBox="0 0 2400 1758" fill="none" aria-hidden="true" style="width: 34px; height: 26px;">
              <path fill="#4694B1" d="M 41 358 L 30 600 L 68 836 L 143 1038 L 272 1247 L 418 1404 L 608 1543 L 810 1637 L 1049 1694 L 1278 1701 L 1502 1664 L 1719 1582 L 1910 1463 L 2080 1304 L 2209 1126 L 2306 917 L 2357 713 L 2370 484 L 2347 296 L 2298 128 L 2191 342 L 2207 607 L 2153 866 L 2049 1078 L 1897 1262 L 1679 1421 L 1416 1519 L 1130 1540 L 861 1484 L 695 1407 L 544 1300 L 421 1175 L 318 1025 L 246 866 L 201 686 L 190 494 L 208 342 L 101 128 Z" fill-rule="evenodd"/>
              <path fill="#F09320" d="M 1347 795 L 1848 794 L 1941 607 L 1375 608 Z M 458 607 L 551 794 L 1052 795 L 1023 607 Z M 1432 241 L 2124 241 L 2217 53 L 1461 53 Z M 978 53 L 1200 1495 L 1421 53 Z M 182 53 L 275 241 L 967 241 L 938 53 Z" fill-rule="evenodd"/>
            </svg>
            <div class="brand-names">
              <span class="brand-title" style="font-size: 1.25rem;">Fine Tuning</span>
              <span class="brand-sub" style="font-size: 0.625rem;">Experiential Advertising</span>
            </div>`;

const files = fs.readdirSync(previewDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(previewDir, file);
  let html = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // 1. In Drawer header: replace <img ... fine-tuning-logo.png ...> with SVG lockup
  const drawerHeaderRegex = /<div class="drawer-header">\s*<img src="\.\.\/assets\/brand\/fine-tuning-logo\.png"[^>]*>\s*<button id="drawer-close-btn"/g;
  if (drawerHeaderRegex.test(html)) {
    html = html.replace(drawerHeaderRegex, `<div class="drawer-header">\n        <a href="./index.html" class="brand-lockup" aria-label="Fine Tuning Home">\n          ${svgDrawerLockup}\n        </a>\n        <button id="drawer-close-btn"`);
    changed = true;
  }

  // 2. In Main Header or System Screens: replace <img src="../assets/brand/fine-tuning-logo.png" ... class="brand-logo-img">
  const headerImgRegex = /<img src="\.\.\/assets\/brand\/fine-tuning-logo\.png"[^>]*class="brand-logo-img"[^>]*>/g;
  if (headerImgRegex.test(html)) {
    // If inside footer
    html = html.replace(/<a href="\.\/index\.html" class="brand-lockup" style="margin-bottom: 16px; text-decoration: none;" aria-label="Fine Tuning Home">\s*<img src="\.\.\/assets\/brand\/fine-tuning-logo\.png"[^>]*>\s*<\/a>/g,
      `<a href="./index.html" class="brand-lockup" style="margin-bottom: 16px; text-decoration: none;" aria-label="Fine Tuning Home">\n            ${svgFooterLockup}\n          </a>`);

    // Remaining in header or system screen
    html = html.replace(/<img src="\.\.\/assets\/brand\/fine-tuning-logo\.png"[^>]*class="brand-logo-img"[^>]*>/g, svgHeaderLockup);
    changed = true;
  }

  // 3. Update WhatsApp button classes & non-breaking spaces
  if (html.includes('Open WhatsApp Live Desk')) {
    html = html.replace(/Open WhatsApp Live Desk \(\+880 1671-863685\)/g, 'WhatsApp Live Desk (+880&nbsp;1671-863685)');
    html = html.replace(/class="btn-secondary-outline"/g, 'class="btn-secondary-outline btn-whatsapp-strip"');
    changed = true;
  }

  // 4. Update pre-footer CTA alignment
  if (html.includes('style="margin-top: 40px; display: flex; flex-wrap: wrap; gap: 16px; align-items: center;"')) {
    html = html.replace('style="margin-top: 40px; display: flex; flex-wrap: wrap; gap: 16px; align-items: center;"', 'class="contact-actions-center"');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`Updated ${file}`);
  }
});

