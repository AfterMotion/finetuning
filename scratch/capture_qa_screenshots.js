const { chromium } = require('playwright-core');
const path = require('path');
const fs = require('fs');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outDir = path.join(__dirname, '..', 'qa', 'overhaul_screenshots');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function runQA() {
  const browser = await chromium.launch({
    executablePath: CHROME_PATH,
    headless: true
  });
  
  // 1. Test Mobile (360px)
  const mobileContext = await browser.newContext({
    viewport: { width: 360, height: 800 },
    deviceScaleFactor: 2
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:8080/index.html', { waitUntil: 'networkidle' });

  // Check horizontal overflow
  const mobileOverflow = await mobilePage.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log('Mobile 360px horizontal overflow:', mobileOverflow);

  // Capture Header
  const headerEl = await mobilePage.$('header.main-header');
  if (headerEl) {
    await headerEl.screenshot({ path: path.join(outDir, 'mobile-header.png') });
    console.log('Captured mobile-header.png');
  }

  // Capture Hero Showcase Card
  const heroCard = await mobilePage.$('.hero-showcase-card');
  if (heroCard) {
    await heroCard.screenshot({ path: path.join(outDir, 'mobile-hero-showcase.png') });
    console.log('Captured mobile-hero-showcase.png');
  }

  // Capture Case Study Card
  const caseCard = await mobilePage.$('.case-card');
  if (caseCard) {
    await caseCard.screenshot({ path: path.join(outDir, 'mobile-case-card.png') });
    console.log('Captured mobile-case-card.png');
  }

  // Capture Staging Wizard
  const wizardCard = await mobilePage.$('.wizard-card');
  if (wizardCard) {
    await wizardCard.screenshot({ path: path.join(outDir, 'mobile-wizard.png') });
    console.log('Captured mobile-wizard.png');
  }

  // Capture FAQ Item
  const faqList = await mobilePage.$('.faq-list');
  if (faqList) {
    await faqList.screenshot({ path: path.join(outDir, 'mobile-faq.png') });
    console.log('Captured mobile-faq.png');
  }

  // Capture Footer
  const footerEl = await mobilePage.$('footer.corporate-footer');
  if (footerEl) {
    await footerEl.screenshot({ path: path.join(outDir, 'mobile-footer.png') });
    console.log('Captured mobile-footer.png');
  }

  // Full page mobile screenshot
  await mobilePage.screenshot({ path: path.join(outDir, 'mobile-fullpage-360.png'), fullPage: true });
  console.log('Captured mobile-fullpage-360.png');

  // 2. Test Desktop (1440px)
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2
  });
  const desktopPage = await desktopContext.newPage();
  await desktopPage.goto('http://localhost:8080/index.html', { waitUntil: 'networkidle' });

  const desktopOverflow = await desktopPage.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log('Desktop 1440px horizontal overflow:', desktopOverflow);

  // Capture Desktop Hero Section
  const desktopHero = await desktopPage.$('.hero-stage');
  if (desktopHero) {
    await desktopHero.screenshot({ path: path.join(outDir, 'desktop-hero.png') });
    console.log('Captured desktop-hero.png');
  }

  // Capture Desktop Wizard
  const desktopWizard = await desktopPage.$('.wizard-card');
  if (desktopWizard) {
    await desktopWizard.screenshot({ path: path.join(outDir, 'desktop-wizard.png') });
    console.log('Captured desktop-wizard.png');
  }

  // Capture Desktop Footer
  const desktopFooter = await desktopPage.$('footer.corporate-footer');
  if (desktopFooter) {
    await desktopFooter.screenshot({ path: path.join(outDir, 'desktop-footer.png') });
    console.log('Captured desktop-footer.png');
  }

  // Full page desktop screenshot
  await desktopPage.screenshot({ path: path.join(outDir, 'desktop-fullpage-1440.png'), fullPage: true });
  console.log('Captured desktop-fullpage-1440.png');

  await browser.close();
  console.log('All QA screenshots captured successfully.');
}

runQA().catch(err => {
  console.error('QA Error:', err);
  process.exit(1);
});
