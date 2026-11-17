const { chromium } = require('playwright-core');

async function run() {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true
  });
  const page = await browser.newPage({ viewport: { width: 360, height: 800 } });
  await page.goto('http://localhost:8080/blog-grid.html', { waitUntil: 'networkidle' });
  await page.addStyleTag({
    content: `
      @media (max-width: 1024px) { .article-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      @media (max-width: 768px) { .article-grid { grid-template-columns: 1fr !important; } }
    `
  });
  const res = await page.evaluate(() => {
    const container = document.querySelector('section > .container:has(.article-grid)');
    if (!container) return 'container not found';
    return Array.from(container.querySelectorAll('*')).map(el => {
      const r = el.getBoundingClientRect();
      return {
        tag: el.tagName,
        className: el.className,
        right: r.right,
        width: r.width,
        scrollWidth: el.scrollWidth,
        text: el.textContent ? el.textContent.substring(0, 30).trim() : ''
      };
    }).filter(e => e.right > 340 || e.scrollWidth > 328);
  });
  console.log('Offenders or wide elements:');
  console.log(res);
  await browser.close();
}

run();
