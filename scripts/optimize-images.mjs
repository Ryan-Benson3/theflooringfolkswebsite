import sharp from 'sharp';
import { readdir, stat, writeFile } from 'fs/promises';
import { join } from 'path';

const PORTFOLIO_DIR = './public/images/portfolio';
const MAX_WIDTH = 1920;
const QUALITY = 80;

async function optimizeImages() {
  const files = await readdir(PORTFOLIO_DIR);
  const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));

  console.log(`Found ${imageFiles.length} images to optimize.\n`);

  let totalBefore = 0;
  let totalAfter = 0;
  let optimized = 0;
  let skipped = 0;

  for (const file of imageFiles) {
    const filePath = join(PORTFOLIO_DIR, file);
    const beforeStat = await stat(filePath);
    totalBefore += beforeStat.size;

    try {
      // Try with failOnError:false and sequentialRead for corrupt JPEGs
      const pipeline = sharp(filePath, { failOnError: false, sequentialRead: true });
      const metadata = await pipeline.metadata();
      
      // Only resize if larger than MAX_WIDTH
      let transform = sharp(filePath, { failOnError: false, sequentialRead: true });
      if (metadata.width && metadata.width > MAX_WIDTH) {
        transform = transform.resize(MAX_WIDTH, MAX_WIDTH, { fit: 'inside', withoutEnlargement: true });
      }
      
      const buffer = await transform
        .jpeg({ quality: QUALITY, mozjpeg: true })
        .toBuffer();

      await writeFile(filePath, buffer);

      const afterSize = buffer.length;
      totalAfter += afterSize;
      optimized++;

      const savedMB = ((beforeStat.size - afterSize) / 1024 / 1024).toFixed(1);
      const afterKB = (afterSize / 1024).toFixed(0);
      const dims = metadata.width && metadata.height ? `${metadata.width}x${metadata.height}` : 'unknown';
      console.log(`  ✓ ${file}: ${(beforeStat.size / 1024 / 1024).toFixed(1)}MB → ${afterKB}KB [${dims}] (saved ${savedMB}MB)`);
    } catch (err) {
      console.log(`  ✗ ${file}: SKIPPED (${err.message?.substring(0, 80)})`);
      totalAfter += beforeStat.size;
      skipped++;
    }
  }

  console.log(`\n--- Summary ---`);
  console.log(`Total images: ${imageFiles.length}`);
  console.log(`Optimized:    ${optimized}`);
  console.log(`Skipped:      ${skipped}`);
  console.log(`Before:       ${(totalBefore / 1024 / 1024).toFixed(1)}MB`);
  console.log(`After:        ${(totalAfter / 1024 / 1024).toFixed(1)}MB`);
  console.log(`Saved:        ${((totalBefore - totalAfter) / 1024 / 1024).toFixed(1)}MB (${((1 - totalAfter / totalBefore) * 100).toFixed(0)}%)`);
}

optimizeImages().catch(console.error);
