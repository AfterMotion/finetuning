const { chromium } = require('playwright-core');

async function run() {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true
  });
  const page = await browser.newPage({ viewport: { width: 360, height: 800 } });
  await page.goto('http://localhost:8080/team-single.html', { waitUntil: 'networkidle' });
  await page.addStyleTag({
    content: `
      .director-profile-grid { grid-template-columns: minmax(0, 1fr) !important; }
      .director-sidebar-card, .director-main-content { min-width: 0 !important; }
      @media (max-width: 640px) {
        .director-sidebar-card { padding: 24px 16px !important; }
        .summits-duo-grid { grid-template-columns: 1fr !important; }
        .gear-spec-grid { grid-template-columns: 1fr !important; }
      }
    `
  });
  const sw = await page.evaluate(() => document.documentElement.scrollWidth);
  const items = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('*'))
      .filter(el => el.getBoundingClientRect().right > 360)
      .map(el => ({ tag: el.tagName, class: el.className, right: el.getBoundingClientRect().right }));
  });
  console.log('scrollWidth after style:', sw, 'offenders:', items.length);
  await browser.close();
}

run();

