const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

// Настройки сжатия
const jpegOptions = {
  quality: 85,
  mozjpeg: true,
};

const pngOptions = {
  quality: 85,
  compressionLevel: 9,
};

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const stats = fs.statSync(filePath);
  const originalSize = stats.size;

  if (!imageExtensions.includes(ext)) {
    return { skipped: true, file: path.basename(filePath) };
  }

  // Пропускаем SVG и уже оптимизированные файлы
  if (ext === '.svg' || ext === '.ico') {
    return { skipped: true, file: path.basename(filePath) };
  }

  try {
    let image = sharp(filePath);
    const metadata = await image.metadata();
    
    let optimized;
    
    if (ext === '.jpg' || ext === '.jpeg') {
      optimized = await image.jpeg(jpegOptions).toBuffer();
    } else if (ext === '.png') {
      optimized = await image.png(pngOptions).toBuffer();
    } else {
      return { skipped: true, file: path.basename(filePath) };
    }

    const newSize = optimized.length;
    const savings = originalSize - newSize;
    const percentSaved = ((savings / originalSize) * 100).toFixed(1);

    // Записываем оптимизированное изображение только если оно меньше
    if (newSize < originalSize) {
      fs.writeFileSync(filePath, optimized);
      return {
        optimized: true,
        file: path.basename(filePath),
        originalSize,
        newSize,
        savings,
        percentSaved,
      };
    }

    return {
      optimized: false,
      file: path.basename(filePath),
      originalSize,
      newSize,
      savings: 0,
      percentSaved: 0,
    };
  } catch (error) {
    console.error(`Error optimizing ${filePath}:`, error.message);
    return { error: true, file: path.basename(filePath), message: error.message };
  }
}

async function optimizeImages() {
  const files = fs.readdirSync(publicDir);
  const imageFiles = files
    .filter(file => imageExtensions.includes(path.extname(file).toLowerCase()))
    .map(file => path.join(publicDir, file));

  console.log(`\n🖼️  Найдено ${imageFiles.length} изображений для оптимизации...\n`);

  const results = [];
  for (const filePath of imageFiles) {
    const result = await optimizeImage(filePath);
    results.push(result);

    if (result.optimized) {
      console.log(`✅ ${result.file}: ${(result.originalSize / 1024).toFixed(1)}KB → ${(result.newSize / 1024).toFixed(1)}KB (${result.percentSaved}% меньше)`);
    } else if (result.skipped) {
      console.log(`⏭️  ${result.file}: пропущено`);
    } else if (result.error) {
      console.log(`❌ ${result.file}: ошибка - ${result.message}`);
    } else {
      console.log(`ℹ️  ${result.file}: уже оптимизировано`);
    }
  }

  const optimizedCount = results.filter(r => r.optimized).length;
  const totalSavings = results
    .filter(r => r.optimized)
    .reduce((sum, r) => sum + r.savings, 0);

  console.log(`\n✨ Готово! Оптимизировано ${optimizedCount} изображений, сэкономлено ${(totalSavings / 1024).toFixed(1)}KB\n`);
}

optimizeImages().catch(console.error);
