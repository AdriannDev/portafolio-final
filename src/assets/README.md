# Imágenes del portafolio

Coloca aquí tu retrato y las capturas reales de proyectos. Importa cada archivo en
`src/data/portfolio.ts` y asígnalo con su texto alternativo:

```ts
import retrato from '../assets/retrato.webp';

// En profile:
portrait: { src: retrato, alt: 'Retrato de tu nombre' },
```

La misma estructura se usa en `project.image`. Astro genera las variantes WebP,
las dimensiones y el `srcset`. Los SVG decorativos son componentes independientes.

El retrato actual es `foto-perfil-sin-fondo.png`: conserva transparencia y color.
El JPEG original permanece local y está excluido de Git; no es necesario para
compilar. Las capturas de proyectos están en `projects/`.

Consulta la [guía de contenido](../../docs/content-guide.md) y los
[avisos de recursos](../../THIRD_PARTY_NOTICES.md) antes de añadir imágenes.
