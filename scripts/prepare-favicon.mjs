import fs from "node:fs/promises";
import sharp from "sharp";

const source = process.argv[2] || "src/assets/axion-symbol.webp";
if (process.argv[2]) {
  await sharp(source)
    .trim({ threshold: 10 })
    .webp({ lossless: true })
    .toFile("src/assets/axion-symbol.webp");
}

async function icon(size) {
  const padding = Math.max(2, Math.round(size * 0.09));
  const artwork = await sharp("src/assets/axion-symbol.webp")
    .resize(size - padding * 2, size - padding * 2, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .extend({
      top: padding,
      bottom: padding,
      left: padding,
      right: padding,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
  return artwork;
}

await fs.writeFile("public/favicon.png", await icon(192));
await fs.writeFile("public/apple-touch-icon.png", await icon(180));

const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(icon));
const header = Buffer.alloc(6 + 16 * sizes.length);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
images.forEach((image, index) => {
  const entry = 6 + index * 16;
  header.writeUInt8(sizes[index], entry);
  header.writeUInt8(sizes[index], entry + 1);
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(image.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += image.length;
});
await fs.writeFile("public/favicon.ico", Buffer.concat([header, ...images]));
console.log("Favicons da Axion gerados para navegador e celular.");
