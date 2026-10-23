import tensoPreview from '../assets/projects/tenso.webp';
import tensoGallery from '../assets/projects/tenso-galeria.webp';
import tensoMobile from '../assets/projects/tenso-movil.webp';
import type { ProjectCaseStudy } from '../types/project-details';

/** Based on the local Tenso Lonas Perú source, not an inferred technology stack. */
export const tensoCaseStudy: ProjectCaseStudy = {
  slug: 'tenso-lonas-peru',
  projectId: 'tenso-lonas-peru',
  template: 'static',
  mode: 'reference',
  title: 'Tenso Lonas Perú',
  subtitle: 'tensolonasperu.com',
  objective: 'Presentar servicios y obras de coberturas a medida, con contenido técnico y canales de cotización para clientes industriales.',
  role: 'Desarrollo freelance · Frontend y formulario de cotización',
  scope: 'Web corporativa, páginas generadas desde contenido tipado, galerías y un endpoint PHP de contacto.',
  technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'Markdown', 'PHP'],
  notice: 'Arquitectura y componentes contrastados con las fuentes del proyecto. La configuración activa del alojamiento y la entrega del correo no se han comprobado para esta ficha.',
  image: { src: tensoPreview, alt: 'Portada de Tenso Lonas Perú con su presentación de coberturas industriales' },
  siteUrl: 'https://tensolonasperu.com/',
  gallery: [
    { src: tensoGallery, alt: 'Galería publicada de una obra en la web de Tenso Lonas Perú', caption: 'El componente de galería combina una imagen principal y miniaturas a partir del contenido de la obra.', layout: 'wide' },
    { src: tensoMobile, alt: 'Portada móvil del sitio de Tenso Lonas Perú', caption: 'Vista publicada a 390 px: navegación compacta y presentación de servicios.', layout: 'mobile' },
  ],
  process: [
    {
      title: 'Definición',
      caption: 'El contenido se organiza por servicios, proyectos y solicitudes de cotización, con una estructura corporativa B2B.',
      evidence: 'Colecciones, páginas y alcance presentes en el código',
      status: 'verified',
      artifact: ['Servicios', 'Proyectos realizados', 'Cotización'],
    },
    {
      title: 'Diseño',
      caption: 'Una referencia HTML y secciones reutilizables organizan la portada, las fichas y los bloques de contacto.',
      evidence: 'Prototipo HTML local y composición de páginas',
      status: 'verified',
      artifact: ['Hero y servicios', 'Galerías', 'Formulario compacto o completo'],
    },
    {
      title: 'Construcción',
      caption: 'Astro genera las páginas desde Markdown tipado; los componentes comparten estilos, imágenes y datos del sitio.',
      evidence: 'Configuración, esquemas y componentes revisados',
      status: 'verified',
      artifact: ['Colecciones Markdown', 'Rutas por slug', 'Astro + Tailwind CSS'],
    },
    {
      title: 'Integración',
      caption: 'El formulario conecta con PHP, Turnstile y SMTP. La configuración productiva de estos servicios queda por confirmar.',
      evidence: 'Integración presente en el código · Configuración pendiente',
      status: 'pending',
      artifact: ['POST a PHP', 'Turnstile', 'Correo SMTP'],
    },
  ],
  architecture: {
    title: 'Páginas generadas y cotización mediante PHP',
    caption: 'Astro se ejecuta al compilar, no al visitar la página. El código prepara un endpoint PHP con Turnstile y SMTP; el mapa no atribuye un proveedor de alojamiento activo.',
    groups: [{ id: 'web-runtime', label: 'Entorno web con soporte PHP' }],
    nodes: [
      { id: 'content', label: 'Contenido tipado', role: 'Definir servicios y proyectos', technology: 'Markdown · Zod', kind: 'custom', column: 0, row: 0 },
      { id: 'build', label: 'Generación del sitio', role: 'Compilar páginas y recursos', technology: 'Astro · Tailwind CSS', kind: 'platform', column: 1, row: 0 },
      { id: 'pages', label: 'Interfaz publicada', role: 'Servir páginas y componentes', technology: 'HTML · CSS · JavaScript', kind: 'custom', column: 2, row: 0, group: 'web-runtime' },
      { id: 'browser', label: 'Visitante', role: 'Consultar y solicitar una cotización', technology: 'Navegador web', kind: 'external', column: 1, row: 1 },
      { id: 'form', label: 'Endpoint de cotización', role: 'Validar y tramitar solicitudes', technology: 'PHP · /api/cotizar.php', kind: 'custom', column: 2, row: 1, group: 'web-runtime' },
      { id: 'whatsapp', label: 'WhatsApp', role: 'Abrir el contacto directo', technology: 'Enlace wa.me', kind: 'external', column: 0, row: 1 },
      { id: 'turnstile', label: 'Cloudflare Turnstile', role: 'Verificar la respuesta anti-spam', technology: 'HTTPS · siteverify', kind: 'external', column: 1, row: 2 },
      { id: 'smtp', label: 'Servicio de correo', role: 'Entregar la solicitud al negocio', technology: 'SMTP', kind: 'external', column: 2, row: 2 },
    ],
    edges: [
      { from: 'content', to: 'build', label: 'Datos y esquemas' },
      { from: 'build', to: 'pages', label: 'HTML · CSS · JS' },
      { from: 'browser', to: 'pages', label: 'HTTPS · páginas', bidirectional: true },
      { from: 'browser', to: 'form', label: 'POST · respuesta', bidirectional: true },
      { from: 'browser', to: 'whatsapp', label: 'Abrir conversación' },
      { from: 'form', to: 'turnstile', label: 'Token · verificación', bidirectional: true },
      { from: 'form', to: 'smtp', label: 'Solicitud por correo' },
    ],
  },
  modules: [
    {
      name: 'Layout y secciones', kind: 'custom',
      responsibility: 'Una base compartida compone la navegación, el hero y las secciones de servicios y proyectos.',
      technologies: ['Astro', 'Tailwind CSS'],
      sources: ['src/layouts/Base.astro', 'src/components/sections/HeroCarousel.astro', 'src/components/sections/ServiceGrid.astro'],
      connections: ['Páginas del sitio', 'Colección de servicios'],
    },
    {
      name: 'Contenido y rutas', kind: 'custom',
      responsibility: 'Los esquemas tipan las fichas Markdown; las rutas por slug generan páginas y resuelven los servicios asociados a cada obra.',
      technologies: ['Markdown', 'TypeScript', 'Zod', 'Astro Content'],
      sources: ['src/content.config.ts', 'src/pages/servicios/[slug].astro', 'src/pages/proyectos/[slug].astro'],
      connections: ['Contenido editorial', 'Plantillas de servicio y proyecto'],
    },
    {
      name: 'Galería y recursos visuales', kind: 'custom',
      responsibility: 'El componente combina fotos optimizadas, miniaturas y vídeos que cargan su reproductor al solicitarlo.',
      technologies: ['Astro Images', 'JavaScript'],
      sources: ['src/components/sections/ProjectGallery.astro', 'src/lib/youtube.ts'],
      connections: ['Imágenes de las obras', 'Vídeos de YouTube'],
    },
    {
      name: 'Formulario reutilizable', kind: 'custom',
      responsibility: 'La misma pieza ofrece variantes compacta y completa. JavaScript añade estados de envío sin eliminar el POST nativo.',
      technologies: ['Astro', 'JavaScript', 'Fetch'],
      sources: ['src/components/sections/QuoteForm.astro'],
      connections: ['Servicios preseleccionados', 'Endpoint PHP', 'Contacto por WhatsApp'],
    },
    {
      name: 'Cotización y correo', kind: 'custom',
      responsibility: 'PHP comprueba los campos, limita envíos y verifica Turnstile antes de tramitar la solicitud por SMTP.',
      technologies: ['PHP', 'Turnstile', 'SMTP'],
      sources: ['public/api/cotizar.php'],
      connections: ['Formulario', 'Cloudflare siteverify', 'Servidor de correo configurado'],
    },
    {
      name: 'SEO de las páginas', kind: 'custom',
      responsibility: 'Componentes compartidos generan metadatos, canónicos y datos estructurados; el sitemap se construye junto con el sitio.',
      technologies: ['Astro', 'JSON-LD', 'Sitemap'],
      sources: ['src/components/seo/SEO.astro', 'src/lib/schema.ts', 'astro.config.mjs'],
      connections: ['Datos del sitio', 'Contenido de cada ficha'],
    },
  ],
  decisions: [
    {
      need: 'Mantener fichas de servicios y proyectos consistentes.',
      choice: 'Separar el contenido Markdown de las plantillas y definir esquemas con Zod.',
      effect: 'Las páginas comparten estructura y resuelven referencias entre servicios y obras sin duplicar contenido.',
      target: 'Contenido tipado',
    },
    {
      need: 'Añadir una experiencia de envío sin depender únicamente de JavaScript.',
      choice: 'Conservar action y method en el formulario y mejorar el envío mediante Fetch.',
      effect: 'El endpoint contempla JSON para el cliente y redirecciones para el POST nativo.',
      target: 'Endpoint de cotización',
    },
    {
      need: 'Incluir galerías y vídeos dentro de las fichas.',
      choice: 'Procesar imágenes con Astro y crear el reproductor de vídeo al pulsar la vista previa.',
      effect: 'Los recursos grandes y el reproductor se solicitan cuando se necesitan.',
      target: 'Interfaz publicada',
    },
  ],
};
