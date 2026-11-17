const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const files = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const content = fs.readFileSync(path.join(rootDir, file), 'utf8');
  const matches = content.match(/style="[^"]*grid-template-columns:[^"]*"/g);
  if (matches) {
    console.log(`\nFile ${file} has inline grid styles:`);
    matches.forEach(m => console.log('  ', m));
  }
});

