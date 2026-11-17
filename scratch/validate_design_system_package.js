const fs = require('fs');
const path = require('path');

// 1. WCAG Contrast Calculation Helpers
function luminance(hex) {
  const rgb = hex.replace('#', '').match(/.{2}/g).map(x => parseInt(x, 16) / 255);
  const a = rgb.map(v => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

function contrast(hex1, hex2) {
  const lum1 = luminance(hex1);
  const lum2 = luminance(hex2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

const audit = {
  tokenEquivalence: false,
  missingTokenRefs: [],
  lightDarkCompleteness: { darkCount: 0, lightCount: 0, missingInLight: [] },
  contrastAudits: [],
  qaSummary: null
};

// Check Token File Equivalence
const rootTokensCss = fs.readFileSync(path.join(__dirname, '..', 'tokens', 'tokens.css'), 'utf8');
const pkgTokensCss = fs.readFileSync(path.join(__dirname, '..', 'packages', 'fine-tuning-design-system', 'tokens', 'tokens.css'), 'utf8');
const rootThemesCss = fs.readFileSync(path.join(__dirname, '..', 'tokens', 'themes.css'), 'utf8');
const pkgThemesCss = fs.readFileSync(path.join(__dirname, '..', 'packages', 'fine-tuning-design-system', 'tokens', 'themes.css'), 'utf8');

audit.tokenEquivalence = (rootTokensCss === pkgTokensCss && rootThemesCss === pkgThemesCss);

// Extract Defined Primitives
const primitiveDefs = new Set();
const primMatches = rootTokensCss.matchAll(/--[a-z0-9-]+(?=:)/g);
for (const m of primMatches) {
  primitiveDefs.add(m[0]);
}

// Extract Semantic Themes
const darkSection = rootThemesCss.split('[data-theme="light"]')[0];
const lightSection = rootThemesCss.split('[data-theme="light"]')[1]?.split('.density-comfortable')[0] || '';

const darkVars = new Set();
const lightVars = new Set();

for (const m of darkSection.matchAll(/--[a-z0-9-]+(?=:)/g)) {
  darkVars.add(m[0]);
}
for (const m of lightSection.matchAll(/--[a-z0-9-]+(?=:)/g)) {
  lightVars.add(m[0]);
}

audit.lightDarkCompleteness.darkCount = darkVars.size;
audit.lightDarkCompleteness.lightCount = lightVars.size;

// Check for missing references in rootThemesCss
const varUsage = rootThemesCss.matchAll(/var\((--[a-z0-9-]+)\)/g);
for (const u of varUsage) {
  const varName = u[1];
  if (!primitiveDefs.has(varName) && !darkVars.has(varName)) {
    audit.missingTokenRefs.push(varName);
  }
}

// Contrast Verifications
const amber = '#F09320';
const obsidian = '#070D18';
const white = '#FFFFFF';
const tealRaw = '#4694B1';
const teal700 = '#2B5E70';
const teal800 = '#1C4453';
const slate900 = '#0F172A';
const slate50 = '#F8FAFC';

audit.contrastAudits = [
  {
    pair: 'Primary Button: Solar Amber (#F09320) + Midnight Obsidian (#070D18)',
    ratio: contrast(amber, obsidian).toFixed(2),
    standard: 'WCAG AAA (>= 7:1)',
    pass: contrast(amber, obsidian) >= 7.0,
    note: 'Invariant 1 strictly enforced'
  },
  {
    pair: 'Forbidden Button: Solar Amber (#F09320) + White (#FFFFFF)',
    ratio: contrast(amber, white).toFixed(2),
    standard: 'Fails WCAG AA (< 4.5:1)',
    pass: contrast(amber, white) < 4.5,
    note: 'Forbidden by Invariant 1'
  },
  {
    pair: 'Light Mode Subtitle: Nordic Teal 700 (#2B5E70) + White (#FFFFFF)',
    ratio: contrast(teal700, white).toFixed(2),
    standard: 'WCAG AAA (>= 7:1)',
    pass: contrast(teal700, white) >= 7.0,
    note: 'Invariant 2 compliant replacement for #4694B1'
  },
  {
    pair: 'Dark Mode Headline: Slate 50 (#F8FAFC) + Obsidian (#070D18)',
    ratio: contrast(slate50, obsidian).toFixed(2),
    standard: 'WCAG AAA (>= 7:1)',
    pass: contrast(slate50, obsidian) >= 7.0,
    note: 'Flawless readability'
  },
  {
    pair: 'Light Mode Headline: Slate 900 (#0F172A) + White (#FFFFFF)',
    ratio: contrast(slate900, white).toFixed(2),
    standard: 'WCAG AAA (>= 7:1)',
    pass: contrast(slate900, white) >= 7.0,
    note: 'High-contrast editorial'
  }
];

// Read QA results from scratch/qa_results.json
if (fs.existsSync(path.join(__dirname, 'qa_results.json'))) {
  const qa = JSON.parse(fs.readFileSync(path.join(__dirname, 'qa_results.json'), 'utf8'));
  const overflows = qa.filter(q => q.overflow);
  const errors = qa.filter(q => q.consoleErrors && q.consoleErrors.length > 0);
  audit.qaSummary = {
    totalAudits: qa.length,
    overflows: overflows.length,
    errors: errors.length
  };
}

console.log(JSON.stringify(audit, null, 2));

