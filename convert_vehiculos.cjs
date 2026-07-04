const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public/img/vehiculos');

fs.readdir(dir, (err, files) => {
  if (err) throw err;
  
  const jpegs = files.filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg'));
  
  jpegs.forEach(file => {
    const inputPath = path.join(dir, file);
    const outputPath = path.join(dir, file.replace(/\.jpeg$/, '.avif').replace(/\.jpg$/, '.avif'));
    
    sharp(inputPath)
      .avif({ quality: 80 })
      .toFile(outputPath)
      .then(() => {
        console.log(`Converted ${file} to AVIF`);
        // Optionally delete the original
        fs.unlinkSync(inputPath);
        console.log(`Deleted original ${file}`);
      })
      .catch(err => {
        console.error(`Error processing ${file}:`, err);
      });
  });
});
