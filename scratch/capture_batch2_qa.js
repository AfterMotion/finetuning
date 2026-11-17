const { chromium } = require('playwright-core');
const path = require('path');
const fs = require('fs');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\Asus\\.gemini\\antigravity\\brain\\a48db4db-7e3c-4e42-b815-422b078a5c2e';
const qaDir = path.join(__dirname, '..', 'qa', 'batch2_qa');
if (!fs.existsSync(qaDir)) fs.mkdirSync(qaDir, { recursive: true });

async function capture() {
  console.log('Launching Chrome...');
  const browser = await chromium.launch({
    executablePath: CHROME_PATH,
    headless: true
  });

  // 1. Mobile (360x780)
  const mobileContext = await browser.newContext({
    viewport: { width: 360, height: 780 },
    deviceScaleFactor: 2
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:8080/preview/index.html', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(500);

  // 1A. Top header (verify NO utility ribbon)
  const headerBuf = await mobilePage.screenshot({ clip: { x: 0, y: 0, width: 360, height: 350 } });
  fs.writeFileSync(path.join(qaDir, 'mobile-header-no-ribbon.png'), headerBuf);
  fs.writeFileSync(path.join(artifactDir, 'batch2-mobile-header.png'), headerBuf);
  console.log('Captured mobile-header-no-ribbon.png');

  // 1B. Open Drawer
  await mobilePage.click('#hamburger-btn');
  await mobilePage.waitForTimeout(400);
  const drawerBuf = await mobilePage.screenshot();
  fs.writeFileSync(path.join(qaDir, 'mobile-drawer-open.png'), drawerBuf);
  fs.writeFileSync(path.join(artifactDir, 'batch2-mobile-drawer.png'), drawerBuf);
  console.log('Captured mobile-drawer-open.png');

  // Close drawer
  await mobilePage.click('#drawer-close-btn');
  await mobilePage.waitForTimeout(300);

  // 1C. Marquee without emojis
  const marqueeEl = await mobilePage.$('.marquee-band');
  if (marqueeEl) {
    const marqueeBuf = await marqueeEl.screenshot();
    fs.writeFileSync(path.join(qaDir, 'mobile-marquee-no-emojis.png'), marqueeBuf);
    fs.writeFileSync(path.join(artifactDir, 'batch2-mobile-marquee.png'), marqueeBuf);
    console.log('Captured mobile-marquee-no-emojis.png');
  }

  // 1D. Case study card (verify high-contrast specs)
  const caseCard = await mobilePage.$('.case-card');
  if (caseCard) {
    await caseCard.scrollIntoViewIfNeeded();
    await mobilePage.waitForTimeout(300);
    const caseBuf = await caseCard.screenshot();
    fs.writeFileSync(path.join(qaDir, 'mobile-case-specs.png'), caseBuf);
    fs.writeFileSync(path.join(artifactDir, 'batch2-case-specs.png'), caseBuf);
    console.log('Captured mobile-case-specs.png');

    // 1E. Click to open Lightbox!
    await mobilePage.click('.case-media-box');
    await mobilePage.waitForTimeout(400);
    const lightboxBuf = await mobilePage.screenshot();
    fs.writeFileSync(path.join(qaDir, 'mobile-lightbox-open.png'), lightboxBuf);
    fs.writeFileSync(path.join(artifactDir, 'batch2-lightbox-open.png'), lightboxBuf);
    console.log('Captured mobile-lightbox-open.png');

    // Close lightbox
    await mobilePage.click('#lightbox-close-btn');
    await mobilePage.waitForTimeout(300);
  }

  // 1F. Wizard estimator without stepper & clean selects
  const wizardCard = await mobilePage.$('.wizard-card');
  if (wizardCard) {
    await wizardCard.scrollIntoViewIfNeeded();
    await mobilePage.waitForTimeout(300);
    const wizardBuf = await wizardCard.screenshot();
    fs.writeFileSync(path.join(qaDir, 'mobile-wizard-no-stepper.png'), wizardBuf);
    fs.writeFileSync(path.join(artifactDir, 'batch2-wizard-clean.png'), wizardBuf);
    console.log('Captured mobile-wizard-no-stepper.png');

    // Open consultation modal
    await mobilePage.click('.wizard-card .trigger-modal-btn');
    await mobilePage.waitForTimeout(400);
    const modalBuf = await mobilePage.screenshot();
    fs.writeFileSync(path.join(qaDir, 'mobile-modal-clean-select.png'), modalBuf);
    fs.writeFileSync(path.join(artifactDir, 'batch2-modal-clean.png'), modalBuf);
    console.log('Captured mobile-modal-clean-select.png');

    // Close modal
    await mobilePage.click('#modal-close-btn');
    await mobilePage.waitForTimeout(300);
  }

  // 1G. Pre-footer contact strip on mobile (WhatsApp button clean single-line)
  const contactSection = await mobilePage.$('#contact');
  if (contactSection) {
    await contactSection.scrollIntoViewIfNeeded();
    await mobilePage.waitForTimeout(300);
    const contactBuf = await contactSection.screenshot();
    fs.writeFileSync(path.join(qaDir, 'mobile-contact-section.png'), contactBuf);
    fs.writeFileSync(path.join(artifactDir, 'batch2-mobile-contact.png'), contactBuf);
    console.log('Captured mobile-contact-section.png');
  }

  await mobileContext.close();

  // 2. Desktop (1440x900)
  const deskContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1
  });
  const deskPage = await deskContext.newPage();
  await deskPage.goto('http://localhost:8080/preview/index.html', { waitUntil: 'networkidle' });
  await deskPage.waitForTimeout(500);

  // 2A. Contact section (verify centered buttons)
  const deskContact = await deskPage.$('#contact');
  if (deskContact) {
    await deskContact.scrollIntoViewIfNeeded();
    await deskPage.waitForTimeout(300);
    const deskContactBuf = await deskContact.screenshot();
    fs.writeFileSync(path.join(qaDir, 'desktop-contact-centered.png'), deskContactBuf);
    fs.writeFileSync(path.join(artifactDir, 'batch2-desktop-contact-centered.png'), deskContactBuf);
    console.log('Captured desktop-contact-centered.png');
  }

  // 2B. Desktop Wizard
  const deskWizard = await deskPage.$('.wizard-card');
  if (deskWizard) {
    await deskWizard.scrollIntoViewIfNeeded();
    await deskPage.waitForTimeout(300);
    const deskWizardBuf = await deskWizard.screenshot();
    fs.writeFileSync(path.join(qaDir, 'desktop-wizard-clean.png'), deskWizardBuf);
    fs.writeFileSync(path.join(artifactDir, 'batch2-desktop-wizard.png'), deskWizardBuf);
    console.log('Captured desktop-wizard-clean.png');
  }

  await deskContext.close();
  await browser.close();
  console.log('All QA captures complete.');
}

capture().catch(console.error);

