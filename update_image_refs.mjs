import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src');

function updateFileReferences(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Match image extensions inside string literals, hrefs, or src attributes
  // e.g. src="/logo.png" -> src="/logo.avif"
  // e.g. '/img/paquetes_recomendados/huaraz.png' -> '/img/paquetes_recomendados/huaraz.avif'
  const updatedContent = content.replace(/\.(png|jpg|jpeg|webp)(['"])/gi, '.avif$2');

  if (content !== updatedContent) {
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Updated references in: ${filePath}`);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.tsx', '.ts', '.astro', '.md', '.json'].includes(ext)) {
        updateFileReferences(fullPath);
      }
    }
  }
}

console.log('Starting reference updates...');
processDirectory(srcDir);
console.log('Reference updates completed.');
