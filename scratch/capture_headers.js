const { chromium } = require('playwright-core');
const fs = require('fs');
const path = require('path');

const artifactDir = 'C:\\Users\\Asus\\.gemini\\antigravity\\brain\\a48db4db-7e3c-4e42-b815-422b078a5c2e';

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true
  });
  
  for (const width of [1440, 1200, 1024, 768, 360]) {
    const page = await browser.newPage({ viewport: { width, height: 800 } });
    await page.goto('http://localhost:8080/index.html', { waitUntil: 'networkidle' });
    const clipHeight = width <= 768 ? 90 : 130;
    const buf = await page.screenshot({ clip: { x: 0, y: 0, width, height: clipHeight } });
    fs.writeFileSync(path.join(artifactDir, `header-fixed-${width}.png`), buf);
    await page.close();
  }
  await browser.close();
  console.log('Captured all responsive header screenshots.');
})();

