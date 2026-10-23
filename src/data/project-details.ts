import { andecModules, webAppModules, backendModules } from './project-modules';
import { evoxCaseStudy } from './evox-case-study';
import { tensoCaseStudy } from './tenso-case-study';
import andecPreview from '../assets/projects/andec.webp';
import andecMobile from '../assets/projects/andec-mobile.webp';
import andecQuote from '../assets/projects/andec-cotizacion.webp';
import type { ProjectCaseStudy, ProjectTemplate } from '../types/project-details';

export const templateLabels: Record<ProjectTemplate, string> = {
  static: 'Sitio web',
  ecommerce: 'Ecommerce',
  'web-app': 'Aplicación con backend',
  backend: 'API / Backend',
};

/**
 * ANDEC, EVOX and Tenso Lonas Perú are source-backed references. Application and API entries
 * remain illustrative examples, not additional portfolio projects.
 */
export const templateStudies: ProjectCaseStudy[] = [
  {
    slug: 'estatica',
    projectId: 'andec-coberturas',
    template: 'static',
    mode: 'reference',
    title: 'ANDEC Coberturas',
    subtitle: 'andeccoberturas.com',
    objective: 'Presentar servicios y productos de coberturas industriales y facilitar las solicitudes de cotización.',
    role: 'Desarrollo freelance',
    scope: 'Web corporativa, contenido editorial y formulario de cotización.',
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'MDX', 'PHP'],
    notice: 'Arquitectura y componentes documentados a partir del código del proyecto y de sus pantallas publicadas.',
    image: {
      src: andecPreview,
      alt: 'Portada de ANDEC Coberturas con sus servicios de coberturas industriales',
    },
    siteUrl: 'https://andeccoberturas.com/',
    gallery: [
      { src: andecQuote, alt: 'Formulario de cotización de ANDEC', caption: 'Pantalla del formulario publicado; se capturó sin enviar datos.', layout: 'wide' },
      { src: andecMobile, alt: 'Portada de ANDEC en móvil', caption: 'Vista real a 390 px. Esta captura no sustituye una auditoría responsive completa.', layout: 'mobile' },
    ],
    process: [
      {
        title: 'Definición',
        caption: 'El sitio reúne servicios, productos y proyectos. Falta incorporar el brief inicial del cliente.',
        evidence: 'Requerimientos iniciales pendientes',
        status: 'pending',
        artifact: ['Servicios', 'Productos', 'Proyectos'],
      },
      {
        title: 'Diseño',
        caption: 'La navegación actual es visible; los bocetos y la validación del diseño todavía no están documentados.',
        evidence: 'Prototipos originales por incorporar',
        status: 'pending',
        artifact: ['Inicio', 'Servicios', 'Contacto'],
      },
      {
        title: 'Construcción',
        caption: 'Astro genera las páginas con contenido MDX; un endpoint PHP recibe las solicitudes de cotización.',
        evidence: 'Configuración y componentes revisados',
        status: 'verified',
        artifact: ['Contenido MDX', 'Build estático', 'Formulario POST'],
      },
      {
        title: 'Integración',
        caption: 'El formulario conecta las páginas generadas con el endpoint PHP y contempla una respuesta alternativa sin JavaScript.',
        evidence: 'Componente y endpoint revisados',
        status: 'verified',
        artifact: ['Formulario Astro', 'Endpoint PHP', 'JSON o redirección'],
      },
    ],
    architecture: {
      title: 'Contenido estático con un formulario propio',
      caption: 'Mapa contrastado con las fuentes locales. Hostinger aloja los archivos generados y el endpoint PHP; Astro no se ejecuta al visitar la web.',
      groups: [{ id: 'hostinger', label: 'Alojamiento · Hostinger' }],
      nodes: [
        { id: 'content', label: 'Contenido', role: 'Servicios, productos y proyectos', technology: 'MDX · TypeScript', kind: 'custom', column: 0, row: 0 },
        { id: 'build', label: 'Generación', role: 'Compilar páginas y estilos', technology: 'Astro · Tailwind CSS', kind: 'platform', column: 1, row: 0 },
        { id: 'pages', label: 'Sitio publicado', role: 'Servir archivos estáticos', technology: 'HTML · CSS · JavaScript', kind: 'custom', column: 2, row: 0, group: 'hostinger' },
        { id: 'form', label: 'Cotización', role: 'Validar y tramitar el envío', technology: 'PHP · /api/enviar.php', kind: 'custom', column: 2, row: 1, group: 'hostinger' },
        { id: 'browser', label: 'Visitante', role: 'Consultar y enviar una solicitud', technology: 'Navegador web', kind: 'external', column: 1, row: 1 },
        { id: 'whatsapp', label: 'WhatsApp', role: 'Abrir una conversación', technology: 'Enlace wa.me', kind: 'external', column: 0, row: 1 },
        { id: 'email', label: 'Correo', role: 'Recibir la solicitud', technology: 'Envío PHP mail()', kind: 'external', column: 2, row: 2 },
      ],
      edges: [
        { from: 'content', to: 'build', label: 'Contenido y datos' },
        { from: 'build', to: 'pages', label: 'HTML · CSS · JS' },
        { from: 'browser', to: 'pages', label: 'HTTPS · páginas', bidirectional: true },
        { from: 'browser', to: 'form', label: 'POST · resultado', bidirectional: true },
        { from: 'form', to: 'email', label: 'Solicitud por correo' },
        { from: 'browser', to: 'whatsapp', label: 'Abrir conversación' },
      ],
    },
    modules: andecModules,
    decisions: [],
  },
  evoxCaseStudy,
  {
    slug: 'aplicacion-web',
    template: 'web-app',
    mode: 'example',
    title: 'Aplicación web · Interfaz y backend',
    subtitle: 'Plantilla ilustrativa · No es un proyecto del portafolio',
    objective: 'Mostrar cómo se organiza la interfaz y cómo se conecta con las capas del backend.',
    role: 'Ejemplo de rol · Desarrollo de interfaz y API',
    scope: 'Ejemplo de alcance · Crear y consultar tareas desde una aplicación web.',
    technologies: ['TypeScript', 'Java', 'Spring Boot', 'PostgreSQL'],
    notice: 'Ejemplo didáctico de una aplicación de tareas. No representa una aplicación publicada, un cliente ni una arquitectura implementada por el autor.',
    process: [
      { title: 'Definición', caption: 'Delimitar la interfaz, el contrato de la API y la responsabilidad de cada capa.', evidence: 'Ejemplo de alcance · Interfaz y API', status: 'example', artifact: ['Componentes', 'Contrato HTTP', 'Reglas de dominio'] },
      { title: 'Diseño', caption: 'Separar la composición visual, el estado del cliente y el acceso al servidor.', evidence: 'Ejemplo de organización · Interfaz', status: 'example', artifact: ['Formulario', 'Listado', 'Cliente HTTP'] },
      { title: 'Construcción', caption: 'Relacionar cada paso visible con la API, el servicio y la persistencia.', evidence: 'Ejemplo de evidencia · Pantalla y capas', status: 'example', artifact: ['Interfaz', 'Servicio', 'Datos'] },
      { title: 'Integración', caption: 'Relacionar los componentes de la interfaz con el contrato HTTP y las capas del servidor.', evidence: 'Ejemplo de integración · Cliente y API', status: 'example', artifact: ['Cliente HTTP', 'Contrato REST', 'Acceso a datos'] },
    ],
    architecture: {
      title: 'La interfaz inicia; el backend resuelve',
      caption: 'Arquitectura ilustrativa de una aplicación de tareas. El contenedor agrupa las capas que se ejecutan en el backend.',
      groups: [{ id: 'app-server', label: 'Servidor de aplicación · Ejemplo' }],
      nodes: [
        { id: 'ui', label: 'Interfaz web', role: 'Capturar acciones y mostrar estados', technology: 'HTML · CSS · TypeScript', kind: 'custom', column: 0, row: 0 },
        { id: 'api', label: 'TareaController', role: 'Exponer el contrato HTTP', technology: 'Spring Boot · REST', kind: 'custom', column: 1, row: 0, group: 'app-server' },
        { id: 'service', label: 'TareaService', role: 'Aplicar las reglas de tareas', technology: 'Java · Service', kind: 'custom', column: 1, row: 1, group: 'app-server' },
        { id: 'repository', label: 'TareaRepository', role: 'Consultar y guardar tareas', technology: 'Spring Data JPA', kind: 'custom', column: 1, row: 2, group: 'app-server' },
        { id: 'database', label: 'Base de datos', role: 'Conservar el estado de las tareas', technology: 'PostgreSQL', kind: 'platform', column: 2, row: 2 },
      ],
      edges: [
        { from: 'ui', to: 'api', label: 'HTTP · JSON', bidirectional: true },
        { from: 'api', to: 'service', label: 'Operación de negocio', bidirectional: true },
        { from: 'service', to: 'repository', label: 'Guardar o consultar', bidirectional: true },
        { from: 'repository', to: 'database', label: 'SQL · registros', bidirectional: true },
      ],
    },
    modules: webAppModules,
    decisions: [
      { need: 'Ejemplo · Evitar que la validación dependa solo del navegador.', choice: 'Validar también en el backend.', effect: 'La regla se conserva ante distintos consumidores de la API.', target: 'API HTTP' },
      { need: 'Ejemplo · Mantener las reglas separadas de la presentación.', choice: 'Ubicar la operación en un servicio.', effect: 'La interfaz representa el estado; el servicio decide la operación.', target: 'Servicio' },
    ],
  },
  {
    slug: 'backend',
    template: 'backend',
    mode: 'example',
    title: 'API · Arquitectura por capas',
    subtitle: 'Plantilla ilustrativa · No es un proyecto del portafolio',
    objective: 'Explicar cómo se organiza un backend y cómo conecta sus capas con la persistencia y la caché.',
    role: 'Ejemplo de rol · Desarrollo backend',
    scope: 'Ejemplo de alcance · API de tareas, servicio, repositorio, base de datos y caché.',
    technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'Redis', 'REST'],
    notice: 'Arquitectura ilustrativa por capas con persistencia y caché. Las clases, los archivos y las conexiones son un ejemplo para futuros proyectos.',
    process: [
      { title: 'Definición', caption: 'Resumir qué operación necesita el consumidor y qué condiciones debe cumplir.', evidence: 'Ejemplo de evidencia · Caso de uso', status: 'example', artifact: ['Entrada', 'Regla', 'Resultado'] },
      { title: 'Diseño', caption: 'Definir el contrato HTTP y separar las responsabilidades de las clases.', evidence: 'Ejemplo de diseño · Capas', status: 'example', artifact: ['Controlador', 'Servicio', 'Repositorio'] },
      { title: 'Construcción', caption: 'Seguir la operación por controlador, servicio, repositorio y base de datos.', evidence: 'Ejemplo de evidencia · Recorrido por capas', status: 'example', artifact: ['Controller', 'Service', 'Repository'] },
      { title: 'Integración', caption: 'Conectar las capas de aplicación con la base de datos y la caché del ejemplo.', evidence: 'Ejemplo de integración · Infraestructura', status: 'example', artifact: ['Repositorio', 'PostgreSQL', 'Redis'] },
    ],
    architecture: {
      title: 'Capas de aplicación, persistencia y caché',
      caption: 'Ejemplo de arquitectura: el servidor ejecuta controlador, servicio y repositorio. PostgreSQL conserva los datos; Redis complementa las consultas con caché.',
      groups: [{ id: 'api-server', label: 'Servidor de la API · Ejemplo' }],
      nodes: [
        { id: 'consumer', label: 'Consumidor', role: 'Enviar una operación HTTP', technology: 'Cliente HTTP', kind: 'external', column: 0, row: 0 },
        { id: 'controller', label: 'TareaController', role: 'Exponer el contrato HTTP', technology: 'Spring Boot · REST', kind: 'custom', column: 1, row: 0, group: 'api-server' },
        { id: 'service', label: 'TareaService', role: 'Coordinar reglas, datos y caché', technology: 'Java · Service', kind: 'custom', column: 1, row: 1, group: 'api-server' },
        { id: 'repository', label: 'TareaRepository', role: 'Encapsular el acceso a datos', technology: 'Spring Data JPA', kind: 'custom', column: 1, row: 2, group: 'api-server' },
        { id: 'database', label: 'Base de datos', role: 'Guardar las tareas', technology: 'PostgreSQL', kind: 'platform', column: 2, row: 2 },
        { id: 'cache', label: 'Caché de consultas', role: 'Conservar lecturas reutilizables', technology: 'Redis · Spring Cache', kind: 'platform', column: 2, row: 1 },
      ],
      edges: [
        { from: 'consumer', to: 'controller', label: 'HTTP · JSON', bidirectional: true },
        { from: 'controller', to: 'service', label: 'Crear tarea · resultado', bidirectional: true },
        { from: 'service', to: 'repository', label: 'Guardar entidad', bidirectional: true },
        { from: 'repository', to: 'database', label: 'SQL · registro', bidirectional: true },
        { from: 'service', to: 'cache', label: 'Leer · actualizar caché', bidirectional: true },
      ],
    },
    modules: backendModules,
    decisions: [
      { need: 'Ejemplo · Mantener el transporte separado de las reglas.', choice: 'Distinguir controlador, servicio y repositorio.', effect: 'Cada clase tiene una responsabilidad y una dependencia identificables.', target: 'TareaService' },
      { need: 'Ejemplo · Reutilizar las lecturas que admitan caché.', choice: 'Conectar Redis al servicio sin sustituir la persistencia relacional.', effect: 'El mapa distingue la base de datos de la caché y muestra quién accede a cada una.', target: 'Caché de consultas' },
    ],
  },
];

/** Real cases may share a template without becoming another template variant. */
export const caseStudies: ProjectCaseStudy[] = [...templateStudies, tensoCaseStudy];
