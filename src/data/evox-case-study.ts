import { evoxModules } from './project-modules';
import evoxPreview from '../assets/projects/evox.webp';
import type { ProjectCaseStudy } from '../types/project-details';

/**
 * Source-backed reference: Plugins/evox-core/ and Plugins/shop-the-look/.
 * Payment and shipping settings are configurable; their production values,
 * the hosting provider and the database engine have not been established.
 */
export const evoxCaseStudy: ProjectCaseStudy = {
  slug: 'ecommerce',
  projectId: 'evox',
  template: 'ecommerce',
  mode: 'reference',
  title: 'EVOX · Ecommerce',
  subtitle: 'evox.com.pe',
  objective: 'Modernizar la tienda, ordenar el catálogo y facilitar la búsqueda y la compra sin registro obligatorio.',
  role: 'Freelance · Prototipado, interfaz y funcionalidades a medida',
  scope: 'Rediseño sobre WooCommerce, plugins propios, entrega por UBIGEO, pago QR y acceso a cuentas por correo.',
  technologies: ['WordPress', 'WooCommerce', 'Bricks', 'PHP', 'JavaScript', 'CSS', 'CMB2'],
  notice: 'Contexto y proceso confirmados por el autor. Los módulos revisados distinguen el desarrollo propio de WordPress, WooCommerce y Bricks.',
  image: {
    src: evoxPreview,
    alt: 'Portada de EVOX con su catálogo de mobiliario y productos de ergonomía',
  },
  siteUrl: 'https://evox.com.pe/',
  process: [
    {
      title: 'Definición',
      caption: 'El rediseño partió de WordPress y un tema antiguo de WooCommerce, con requisitos de compra sin registro y consulta rápida de entrega o recojo.',
      evidence: 'Relato del autor: modernización de una tienda existente, catálogo fácil de consultar, imágenes cuadradas y menor fricción de compra como objetivos.',
      status: 'verified',
      artifact: ['Catálogo y búsqueda', 'Imágenes cuadradas', 'Entrega o recojo'],
    },
    {
      title: 'Diseño',
      caption: 'Las referencias del cliente guiaron los prototipos; una primera revisión dio lugar a una segunda iteración antes del desarrollo.',
      evidence: 'Relato del autor: referencias visuales y funcionales, presentación inicial, cambios solicitados y segunda iteración de diseño.',
      status: 'verified',
      artifact: ['Referencias del cliente', 'Primera revisión', 'Segunda iteración'],
    },
    {
      title: 'Construcción',
      caption: 'EVOX Core reúne las personalizaciones; Shop the Look vincula productos de WooCommerce a puntos interactivos sobre escenas.',
      evidence: 'Plugins y hooks revisados',
      status: 'verified',
      artifact: ['EVOX Core', 'Shop the Look', 'APIs de WooCommerce'],
    },
    {
      title: 'Integración',
      caption: 'Los módulos se conectan mediante hooks de WordPress y WooCommerce, con datos dinámicos para las plantillas de Bricks.',
      evidence: 'Registro de módulos y extensiones revisado',
      status: 'verified',
      artifact: ['Hooks de WooCommerce', 'Tags de Bricks', 'APIs de carrito y pedidos'],
    },
  ],
  architecture: {
    title: 'WooCommerce como motor; plugins propios como extensión',
    groups: [{ id: 'wordpress-runtime', label: 'Servidor de tienda · WordPress / PHP' }],
    nodes: [
      { id: 'customer', label: 'Comprador', role: 'Explorar y realizar la compra', technology: 'Navegador · JavaScript', kind: 'external', column: 0, row: 0 },
      { id: 'storefront', label: 'Interfaz de tienda', role: 'Componer páginas y plantillas', technology: 'WordPress · Bricks', kind: 'platform', column: 1, row: 0, group: 'wordpress-runtime' },
      { id: 'woocommerce', label: 'Motor comercial', role: 'Productos, carrito y pedidos', technology: 'WooCommerce', kind: 'platform', column: 2, row: 0, group: 'wordpress-runtime' },
      { id: 'custom', label: 'Plugins propios', role: 'Componentes, entrega y QR', technology: 'EVOX Core · Shop the Look', kind: 'custom', column: 1, row: 1, group: 'wordpress-runtime' },
      { id: 'account', label: 'Acceso por correo', role: 'Validar códigos y abrir sesión', technology: 'PHP · WordPress', kind: 'custom', column: 2, row: 1, group: 'wordpress-runtime' },
      { id: 'database', label: 'Datos de la tienda', role: 'Conservar contenido, pedidos y usuarios', technology: 'Persistencia WordPress / WC', kind: 'platform', column: 2, row: 2, group: 'wordpress-runtime' },
    ],
    edges: [
      { from: 'customer', to: 'storefront', label: 'HTTPS · interfaz', bidirectional: true },
      { from: 'customer', to: 'custom', label: 'AJAX · JSON', bidirectional: true },
      { from: 'storefront', to: 'woocommerce', label: 'Productos · compra', bidirectional: true },
      { from: 'custom', to: 'storefront', label: 'Tags · componentes' },
      { from: 'custom', to: 'woocommerce', label: 'Hooks · APIs WC', bidirectional: true },
      { from: 'custom', to: 'account', label: 'Módulo de cuenta' },
      { from: 'account', to: 'database', label: 'Usuario · sesión WP', bidirectional: true },
      { from: 'woocommerce', to: 'database', label: 'Leer · guardar', bidirectional: true },
    ],
  },
  modules: evoxModules,
  decisions: [
    {
      need: 'Adaptar la tienda a la compra y consulta de entregas planteadas por el cliente.',
      choice: 'Centralizar los componentes y extensiones a medida en EVOX Core.',
      effect: 'Producto, carrito, entrega, pago y acceso a cuentas tienen archivos y puntos de integración identificables.',
      target: 'Plugins propios',
    },
    {
      need: 'Personalizar la experiencia sin duplicar el carrito ni los pedidos.',
      choice: 'Usar WC()->cart, fragments, hooks y las APIs de WooCommerce.',
      effect: 'La interfaz propia opera sobre la sesión y los objetos comerciales de la plataforma.',
      target: 'Motor comercial',
    },
    {
      need: 'Presentar los productos dentro de escenas, como solicitó el cliente.',
      choice: 'Crear Shop the Look con hotspots enlazados a productos de WooCommerce.',
      effect: 'Los puntos interactivos de cada escena permiten consultar los productos asociados.',
      target: 'Plugins propios',
    },
  ],
};
