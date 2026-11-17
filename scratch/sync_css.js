const fs = require('fs');
let css = fs.readFileSync('preview/styles.css', 'utf8');
css = css.replace('@import url("../tokens/tokens.css");', '@import url("./tokens.css");');
css = css.replace('@import url("../tokens/themes.css");', '@import url("./theme.css");');
fs.writeFileSync('preview-static/css/site.css', css, 'utf8');
console.log('preview-static/css/site.css updated successfully.');

