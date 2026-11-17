const { chromium } = require('playwright-core');

async function checkOverflow(route, width) {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true
  });
  const page = await browser.newPage({ viewport: { width, height: 800 } });
  await page.goto(`http://localhost:8080${route}`, { waitUntil: 'networkidle' });

  const offendingElements = await page.evaluate((w) => {
    const list = [];
    document.querySelectorAll('*').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.right > w + 1) {
        list.push({
          tag: el.tagName,
          id: el.id,
          className: el.className,
          right: Math.round(rect.right),
          width: Math.round(rect.width),
          textSnippet: el.textContent ? el.textContent.substring(0, 40).trim() : ''
        });
      }
    });
    return list;
  }, width);

  console.log(`\nOffending elements on ${route} at ${width}px:`);
  offendingElements.slice(0, 10).forEach(e => {
    console.log(`- <${e.tag} id="${e.id}" class="${e.className}"> width: ${e.width}px, right: ${e.right}px (text: "${e.textSnippet}")`);
  });

  await browser.close();
}

async function main() {
  await checkOverflow('/contact.html', 1024);
  await checkOverflow('/index.html', 360);
}

main().catch(console.error);

