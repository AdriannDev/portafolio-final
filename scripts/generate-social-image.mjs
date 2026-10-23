import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const socialImage = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#e9e4da"/>
  <rect x="28" y="28" width="1144" height="574" rx="18" fill="#f5f0e6" stroke="#8b8478"/>
  <g fill="#252320" font-family="Georgia, serif">
    <text x="76" y="88" font-size="17">EDICIÓN DIGITAL · PORTAFOLIO PERSONAL</text>
    <text x="1124" y="88" text-anchor="end" font-size="17">VOL. 1</text>
    <path d="M76 109h1048M76 309h1048m-1048 5h1048M76 520h1048" stroke="#252320"/>
    <text x="600" y="267" text-anchor="middle" font-size="142" font-weight="bold" letter-spacing="-9">Daily Post<tspan fill="#c55c45">.</tspan></text>
    <text x="76" y="387" font-size="43">Ingeniería de software.</text>
    <text x="76" y="446" font-size="43" fill="#a44432">Con enfoque backend.</text>
    <text x="76" y="560" font-size="19">JAVA · SPRING BOOT · APIs REST · SQL</text>
    <text x="1124" y="560" text-anchor="end" font-size="19">Lima, Perú</text>
  </g>
  <g stroke="#c55c45" stroke-width="8" stroke-linecap="round">
    ${Array.from({ length: 12 }, (_, i) => `<path d="M1000 354v29" transform="rotate(${i * 30} 1000 407)"/>`).join('')}
  </g>
</svg>`;

await mkdir(new URL('../public/', import.meta.url), { recursive: true });
await sharp(Buffer.from(socialImage)).png().toFile(fileURLToPath(new URL('../public/og-image.png', import.meta.url)));
console.log('Generated public/og-image.png (1200 × 630).');
