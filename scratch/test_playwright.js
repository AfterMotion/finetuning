const { chromium } = require('playwright-core');

async function test() {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:8080/index.html');
  const title = await page.title();
  console.log('Page Title:', title);
  await browser.close();
}

test().catch(console.error);

