import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.join(process.cwd(), 'public');

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
        const dirName = path.dirname(fullPath);
        const baseName = path.basename(file, ext);
        const avifPath = path.join(dirName, `${baseName}.avif`);
        
        // Skip if already exists
        if (fs.existsSync(avifPath)) {
          console.log(`Skipping (already exists): ${avifPath}`);
          continue;
        }

        try {
          await sharp(fullPath)
            .avif({ quality: 80, effort: 4 })
            .toFile(avifPath);
          console.log(`Converted: ${fullPath} -> ${avifPath}`);
        } catch (error) {
          console.error(`Error converting ${fullPath}:`, error);
        }
      }
    }
  }
}

async function main() {
  console.log('Starting image conversion...');
  await processDirectory(publicDir);
  console.log('Image conversion completed.');
}

main().catch(console.error);
