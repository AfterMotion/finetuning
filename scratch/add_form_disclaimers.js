const fs = require('fs');
const path = require('path');

const previewStaticDir = path.join(__dirname, '..', 'preview-static');
const files = fs.readdirSync(previewStaticDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(previewStaticDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Modal form disclaimer
  if (content.includes('</form>') && content.includes('id="modal-form"')) {
    content = content.replace(
      '</form>\n    </div>\n  </div>',
      '  <p class="form-demo-disclaimer" style="font-family: var(--font-mono); font-size: 0.6875rem; color: var(--color-teal-400); margin-top: 12px; text-align: center;">[DEMO ONLY: Simulated client-side submission &bull; No backend required]</p>\n      </form>\n    </div>\n  </div>'
    );
  }

  // Contact form disclaimer
  if (file === 'contact.html') {
    content = content.replace(
      '              <button type="submit" class="btn-amber-primary" style="width: 100%; justify-content: center; padding: 14px;">\n                <span>Dispatch Staging Specification</span>\n              </button>\n            </form>',
      '              <button type="submit" class="btn-amber-primary" style="width: 100%; justify-content: center; padding: 14px;">\n                <span>Dispatch Staging Specification</span>\n              </button>\n              <p class="form-demo-disclaimer" style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--color-teal-400); margin-top: 12px; text-align: center;">[DEMO ONLY: Client-side validation active &bull; Mock data logged locally &bull; Direct FOH Hotline: +880 1671-863685]</p>\n            </form>'
    );
  }

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Form disclaimers added successfully.');

