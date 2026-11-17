const { chromium } = require('playwright-core');

async function run() {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true
  });
  const page = await browser.newPage({ viewport: { width: 360, height: 800 } });
  await page.goto('http://localhost:8080/blog-grid.html', { waitUntil: 'networkidle' });
  await page.evaluate(() => {
    // 1. Give article class & update meta flex-wrap
    const featArticle = document.querySelector('section > .container > article');
    if (featArticle) {
      featArticle.classList.add('featured-whitepaper-card');
      const metaDiv = featArticle.querySelector('div[style*="display: flex"]');
      if (metaDiv) {
        metaDiv.style.flexWrap = 'wrap';
        metaDiv.style.gap = '10px';
      }
    }
  });
  await page.addStyleTag({
    content: `
      @media (max-width: 1024px) { .article-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      @media (max-width: 768px) { .article-grid { grid-template-columns: 1fr !important; } }
      @media (max-width: 640px) {
        .featured-whitepaper-card { padding: 24px 16px !important; }
      }
    `
  });
  const sw = await page.evaluate(() => document.documentElement.scrollWidth);
  const offenders = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('*'))
      .filter(el => el.getBoundingClientRect().right > 360)
      .map(el => ({ tag: el.tagName, class: el.className, right: el.getBoundingClientRect().right }));
  });
  console.log('scrollWidth after fix:', sw, 'offenders:', offenders.length);
  await browser.close();
}

run();
