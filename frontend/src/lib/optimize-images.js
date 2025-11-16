// scripts/optimize-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const teamImagesDir = './public/img/team';
const outputDir = './public/img/team/optimized';

// Crear directorio si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Optimizar imágenes
fs.readdirSync(teamImagesDir).forEach(file => {
  if (file.match(/\.(jpg|jpeg|png)$/i)) {
    // Crear versión WebP
    sharp(path.join(teamImagesDir, file))
      .webp({ quality: 80 })
      .resize(800, 800, { fit: 'cover' })
      .toFile(path.join(outputDir, file.replace(/\.[^.]+$/, '.webp')));
    
    // Crear versión JPEG optimizada
    sharp(path.join(teamImagesDir, file))
      .jpeg({ quality: 85, progressive: true })
      .resize(800, 800, { fit: 'cover' })
      .toFile(path.join(outputDir, file));
  }
});