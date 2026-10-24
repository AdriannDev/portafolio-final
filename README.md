# Adrian Dev;

Portafolio personal de ingeniería de software con enfoque backend. Presenta mi perfil, experiencia, formación y proyectos freelance mediante una interfaz inspirada en un periódico: papel marfil, tipografía editorial, recuadros, separadores y acentos coral.

Construido con **Astro, TypeScript y CSS**, con contenido tipado, imágenes optimizadas y animaciones SVG. Se genera como un sitio estático; no requiere una base de datos ni un servidor de aplicación.

## Contenido de la página

- **Inicio:** presentación profesional, retrato a color con transparencia, ubicación y accesos de contacto.
- **Proyectos:** tres trabajos freelance y un espacio identificado para un futuro proyecto personal. El listado independiente muestra los tres trabajos con destino disponible.
- **Experiencia y formación:** desarrollo independiente y estudios de Ingeniería de Software en la Universidad Tecnológica del Perú, desde 2021.
- **Herramientas y habilidades:** tecnologías de backend y frontend, herramientas de IA y habilidades interpersonales.
- **Contacto:** WhatsApp, correo, LinkedIn, GitHub, X y acceso al CV cuando se incorpore el archivo.
- **Detalles de proyectos:** proceso de desarrollo, mapa de arquitectura, componentes implementados y decisiones técnicas.

La marca inicial del diseño fue «Daily Post»; algunos identificadores internos conservan ese nombre. La cabecera y el pie muestran «Adrian Dev;».

## Proyectos documentados

| Proyecto | Tipo | Tecnologías del proyecto |
| --- | --- | --- |
| [ANDEC Coberturas](https://andeccoberturas.com/) | Web corporativa | Astro, TypeScript, Tailwind CSS, MDX y PHP |
| [EVOX](https://evox.com.pe/) | Ecommerce | WordPress, WooCommerce, Bricks, PHP, JavaScript y CSS |
| [Tenso Lonas Perú](https://tensolonasperu.com/) | Web corporativa | Astro, TypeScript, Tailwind CSS, Markdown y PHP |

Las fichas distinguen el desarrollo propio de las funciones de cada plataforma. Las variantes de aplicación web y API son ejemplos ilustrativos para futuros casos; no representan trabajos adicionales. Las tecnologías de esta tabla pertenecen a los proyectos presentados: para ejecutar **este portafolio** basta con Node.js.

## Ejecutar localmente

Requisitos: **Node.js 22.22 o superior** y npm. El entorno de referencia y la integración continua utilizan Node.js 24, indicado en `.nvmrc`.

```sh
npm ci
npm run dev
```

Abre la dirección que imprima Astro, normalmente `http://127.0.0.1:4321/`. Si el puerto está ocupado, se utilizará otro. No se necesitan variables de entorno ni credenciales para compilar el portafolio.

| Comando | Uso |
| --- | --- |
| `npm run dev` | Servidor de desarrollo local |
| `npm run check` | Diagnóstico de Astro y TypeScript |
| `npm run build` | Generar el sitio estático en `dist/` |
| `npm run verify:details` | Verificar rutas, enlaces internos, estructura y metadatos sobre `dist/` |
| `npm run validate` | Ejecutar diagnóstico, compilación y verificación en ese orden |
| `npm run preview` | Revisar la compilación localmente |
| `npm run assets` | Regenerar `public/og-image.png` con Sharp |

## Rutas

| Ruta | Contenido |
| --- | --- |
| `/` | Portada y secciones principales |
| `/proyectos/` | Listado de proyectos |
| `/proyectos/andec-coberturas/` | Detalles de ANDEC |
| `/proyectos/evox/` | Detalles de EVOX |
| `/proyectos/tenso-lonas-peru/` | Detalles de Tenso Lonas Perú |
| `/plantillas/` | Catálogo de las cuatro variantes editoriales |
| `/plantillas/estatica/` | Referencia de sitio web: ANDEC |
| `/plantillas/ecommerce/` | Referencia de ecommerce: EVOX |
| `/plantillas/aplicacion-web/` | Ejemplo de aplicación con backend |
| `/plantillas/backend/` | Ejemplo de API y servicios de datos |
| `/404.html` | Página de error para el alojamiento estático |

## Proceso de desarrollo

1. **Definición visual:** partir de los mockups del periódico y mantener su composición, jerarquía y orden de lectura.
2. **Sistema editorial:** trasladar el diseño a variables CSS, fuentes locales, paneles reutilizables y distribuciones adaptables a móvil, tablet y escritorio.
3. **Contenido y componentes:** separar los datos de la presentación, compartir tarjetas entre inicio y listado, y habilitar acciones solo cuando existe su destino.
4. **Movimiento progresivo:** construir las ilustraciones con SVG y CSS; añadir pausa global, detección de visibilidad y respeto por el movimiento reducido.
5. **Casos de proyectos:** crear cuatro variantes con una estructura común y documentar ANDEC, EVOX y Tenso a partir de sus fuentes y pantallas publicadas. Los mapas separan componentes propios, plataformas y servicios externos.
6. **Revisión:** comprobar composición responsive, teclado, enlaces, estructura de las fichas y compilación. La [validación](VALIDATION.md) distingue comprobaciones ejecutadas de pendientes.

Los detalles priorizan el proceso, los diagramas de arquitectura, las responsabilidades de los módulos y sus archivos de código. Cada proyecto conserva una única imagen en el hero; el producto completo se explora mediante su enlace. No se incluyen galerías de pantallas ni visores. Las tarjetas mantienen el doblez decorativo y un enlace horizontal legible a «Más detalles».

## Organización y mantenimiento

```text
src/
  assets/                 Retrato y capturas optimizados durante el build
  components/             Cabecera, tarjetas, botones e ilustraciones
    project-details/      Proceso, mapas SVG, módulos y figuras
  data/                   Perfil, proyectos y casos técnicos
  layouts/                Documento HTML y metadatos compartidos
  pages/                  Rutas estáticas y generación de fichas
  scripts/                Movimiento y navegación progresiva
  styles/                 Sistema editorial y estilos de fichas
  types/                  Contratos de los detalles de proyectos
public/                   Favicon, textura, imagen social y licencias
scripts/                  Generación de imagen social y verificación del build
docs/                     Documentación de desarrollo y mantenimiento
```

- [Arquitectura](docs/architecture.md): generación estática, componentes, datos y JavaScript del navegador.
- [Guía de contenido](docs/content-guide.md): editar el perfil, añadir proyectos y preparar diagramas y evidencias.
- [Pendientes de documentación](docs/project-documentation.md): información concreta que falta confirmar en cada fase marcada «Por documentar».
- [Desarrollo y diseño](docs/development.md): decisiones, animaciones, accesibilidad y revisión manual.
- [GitHub y publicación](docs/github-and-deployment.md): repositorio, commits, CI y configuración del alojamiento.
- [Validación actual](VALIDATION.md): alcance y resultados de las comprobaciones.
- [Recursos de terceros](THIRD_PARTY_NOTICES.md): fuentes, iconos, marcas y capturas.

## Estado y próximos contenidos

El CV, el proyecto personal y los grupos definitivos de Arquitectura y Cloud & Operaciones siguen pendientes. Las tres fichas reales conservan fases pendientes de evidencia y, junto con los templates, usan `noindex, follow`. Los enlaces de contacto y las webs freelance están configurados.

Antes de publicar, debe definirse el dominio en `astro.config.mjs`. El proyecto está preparado para servir desde la raíz de un dominio; un despliegue bajo una subcarpeta requiere adaptar las rutas. La configuración de GitHub Actions valida el código y no publica el sitio.

Este repositorio no declara una licencia general de reutilización. Las fuentes e iconos conservan sus licencias específicas; las marcas, fotografías y capturas mantienen sus derechos correspondientes. Consulta los [avisos de terceros](THIRD_PARTY_NOTICES.md).
