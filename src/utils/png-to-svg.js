import sharp from 'sharp';
import { trace } from 'potrace';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPng = path.join(__dirname, '../assets/logo_nursana_texto_oscuro.png');
const tempBmp = path.join(__dirname, 'logo_temp.bmp');
const outputSvg = path.join(__dirname, '../assets/logo_nursana_texto_vector.svg');

// 1. Convert PNG to BMP (potrace works best with BMP)
sharp(inputPng)
  .toFile(tempBmp)
  .then(() => {
    // 2. Vectorize BMP to SVG
    trace(tempBmp, { color: '#4a6657', background: 'transparent' }, (err, svg) => {
      if (err) throw err;
      fs.writeFileSync(outputSvg, svg);
      fs.unlinkSync(tempBmp); // Clean up temp file
      console.log('SVG vectorizado guardado en:', outputSvg);
    });
  })
  .catch(err => {
    console.error('Error:', err);
  });
