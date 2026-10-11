import sharp from "sharp";

// npm run assets -- "C:/caminho/Logo.png" para atualizar a marca.
const logoPath = process.argv[2];
if (logoPath) {
  const logo = await sharp(logoPath).webp({ lossless: true }).toFile("src/assets/axion-logo.webp");
  console.log(`Logo Axion: ${Math.round(logo.size / 1024)} KB (WebP sem perdas)`);
}
await sharp("public/social-cover.svg").png().toFile("public/social-cover.png");
console.log("Imagem de compartilhamento atualizada.");
