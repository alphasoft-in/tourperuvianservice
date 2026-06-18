import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public');
let deletedCount = 0;

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
        const dirName = path.dirname(fullPath);
        const baseName = path.basename(file, ext);
        const avifPath = path.join(dirName, `${baseName}.avif`);
        
        // Only delete the original if the AVIF version exists
        if (fs.existsSync(avifPath)) {
          try {
            fs.unlinkSync(fullPath);
            console.log(`Deleted original: ${fullPath}`);
            deletedCount++;
          } catch (err) {
            console.error(`Failed to delete ${fullPath}:`, err);
          }
        } else {
          console.log(`Kept original (no AVIF found): ${fullPath}`);
        }
      }
    }
  }
}

console.log('Starting cleanup of original images...');
processDirectory(publicDir);
console.log(`Cleanup completed. Deleted ${deletedCount} files.`);
