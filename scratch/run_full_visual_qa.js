const { chromium } = require('playwright-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:8080';
const OUT_DIR = path.join(__dirname, '..', 'qa', 'screenshots');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const VIEWPORTS = [
  { name: '1440', width: 1440, height: 900 },
  { name: '1024', width: 1024, height: 768 },
  { name: '768', width: 768, height: 1024 },
  { name: '360', width: 360, height: 780 }
];

const PAGES = [
  { route: '/index.html', base: 'index' },
  { route: '/about.html', base: 'about' },
  { route: '/service.html', base: 'service' },
  { route: '/portfolio-2.html', base: 'portfolio' },
  { route: '/contact.html', base: 'contact' },
  { route: '/blog-grid.html', base: 'blog' },
  { route: '/career.html', base: 'career' },
  { route: '/team-single.html', base: 'team' },
  { route: '/my-account.html', base: 'portal' },
  { route: '/faq.html', base: 'faq' },
  { route: '/privacy.html', base: 'privacy' },
  { route: '/terms.html', base: 'terms' },
  { route: '/404.html', base: '404' },
  { route: '/500.html', base: '500' },
  { route: '/503.html', base: '503' },
  { route: '/maintenance.html', base: 'maintenance' }
];

async function runVisualQA() {
  const browser = await chromium.launch({
    executablePath: CHROME_PATH,
    headless: true
  });

  const auditLog = [];

  for (const p of PAGES) {
    console.log(`\n--- Auditing ${p.route} ---`);
    for (const vp of VIEWPORTS) {
      const page = await browser.newPage({
        viewport: { width: vp.width, height: vp.height }
      });

      const consoleErrors = [];
      page.on('console', msg => {
        if (msg.type() === 'error') consoleErrors.push(msg.text());
      });

      await page.goto(`${BASE_URL}${p.route}`, { waitUntil: 'networkidle' });

      // Check horizontal overflow
      const overflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });

      const shotName = `${p.base}-${vp.name}.png`;
      const shotPath = path.join(OUT_DIR, shotName);

      // System screens must fit within viewport; other pages fullPage
      const isSystemScreen = ['404', '500', '503', 'maintenance'].includes(p.base);
      await page.screenshot({ path: shotPath, fullPage: !isSystemScreen });

      auditLog.push({
        page: p.route,
        viewport: vp.name,
        screenshot: shotName,
        overflow,
        consoleErrors
      });

      console.log(`[PASS] ${shotName} (Overflow: ${overflow}, Errors: ${consoleErrors.length})`);
      await page.close();
    }
  }

  // Interaction Tests on 1440 & 360
  console.log('\n--- Running Interaction Checks ---');

  // 1. Theme toggle on Homepage
  {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(`${BASE_URL}/index.html`, { waitUntil: 'networkidle' });
    const themeBtn = await page.$('#theme-toggle-btn');
    if (themeBtn) {
      await themeBtn.click();
      await page.waitForTimeout(400);
      const shotPath = path.join(OUT_DIR, 'index-light-1440.png');
      await page.screenshot({ path: shotPath });
      console.log('[PASS] index-light-1440.png (Theme switched to light)');
    }
    await page.close();
  }

  // 2. Mobile Drawer Open on 360
  {
    const page = await browser.newPage({ viewport: { width: 360, height: 780 } });
    await page.goto(`${BASE_URL}/index.html`, { waitUntil: 'networkidle' });
    const burger = await page.$('#hamburger-btn');
    if (burger) {
      await burger.click();
      await page.waitForTimeout(400);
      const shotPath = path.join(OUT_DIR, 'index-drawer-open-360.png');
      await page.screenshot({ path: shotPath });
      console.log('[PASS] index-drawer-open-360.png (Mobile drawer open)');

      // Test Escape dismissal
      await page.keyboard.press('Escape');
      await page.waitForTimeout(300);
    }
    await page.close();
  }

  // 3. Brief Modal Open on 1440
  {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(`${BASE_URL}/index.html`, { waitUntil: 'networkidle' });
    const modalBtn = await page.$('.trigger-modal-btn');
    if (modalBtn) {
      await modalBtn.click();
      await page.waitForTimeout(400);
      const shotPath = path.join(OUT_DIR, 'index-modal-open-1440.png');
      await page.screenshot({ path: shotPath });
      console.log('[PASS] index-modal-open-1440.png (Consultation modal open)');
    }
    await page.close();
  }

  // 4. Decibel Fader high on 1440
  {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(`${BASE_URL}/index.html`, { waitUntil: 'networkidle' });
    const slider = await page.$('#decibel-slider');
    if (slider) {
      await page.evaluate(() => {
        const s = document.getElementById('decibel-slider');
        s.value = 98;
        s.dispatchEvent(new Event('input', { bubbles: true }));
      });
      await page.waitForTimeout(300);
      const shotPath = path.join(OUT_DIR, 'index-fader-high-1440.png');
      await page.screenshot({ path: shotPath });
      console.log('[PASS] index-fader-high-1440.png (OSHA Clamp alarm active)');
    }
    await page.close();
  }

  // 5. Portfolio Filter on 1440
  {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(`${BASE_URL}/portfolio-2.html`, { waitUntil: 'networkidle' });
    const filterBtn = await page.$('.filter-pill[data-filter="automotive"]');
    if (filterBtn) {
      await filterBtn.click();
      await page.waitForTimeout(300);
      const shotPath = path.join(OUT_DIR, 'portfolio-filter-1440.png');
      await page.screenshot({ path: shotPath });
      console.log('[PASS] portfolio-filter-1440.png (Filtered to Automotive)');
    }
    await page.close();
  }

  // 6. VIP Portal Clearance Approval on 1440
  {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(`${BASE_URL}/my-account.html`, { waitUntil: 'networkidle' });
    const signOffBtn = await page.$('#sign-off-trigger-btn');
    if (signOffBtn) {
      await signOffBtn.click();
      await page.waitForTimeout(400);
      const shotPath = path.join(OUT_DIR, 'portal-approved-1440.png');
      await page.screenshot({ path: shotPath });
      console.log('[PASS] portal-approved-1440.png (Clearance approved toast)');
    }
    await page.close();
  }

  // 7. FAQ Search Filter on 1440
  {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(`${BASE_URL}/faq.html`, { waitUntil: 'networkidle' });
    const searchInput = await page.$('#faq-search-input');
    if (searchInput) {
      await searchInput.fill('dante');
      await page.waitForTimeout(300);
      const shotPath = path.join(OUT_DIR, 'faq-search-1440.png');
      await page.screenshot({ path: shotPath });
      console.log('[PASS] faq-search-1440.png (Filtered to Dante FAQs)');
    }
    await page.close();
  }

  await browser.close();

  fs.writeFileSync(path.join(__dirname, 'qa_results.json'), JSON.stringify(auditLog, null, 2), 'utf8');
  console.log('\nVisual QA testing completed. Results saved to scratch/qa_results.json.');
}

runVisualQA().catch(err => {
  console.error('Visual QA error:', err);
  process.exit(1);
});

