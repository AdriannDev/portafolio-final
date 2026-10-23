import { evoxModules } from './project-modules';
import evoxPreview from '../assets/projects/evox.webp';
import evoxProduct from '../assets/projects/evox-producto.webp';
import evoxShipping from '../assets/projects/evox-envio.webp';
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
  objective: 'Comprar mobiliario y productos de ergonomía, con una experiencia de catálogo, carrito y entrega adaptada al negocio.',
  role: 'Desarrollo freelance · Interfaz y funcionalidades a medida',
  scope: 'Tienda sobre WooCommerce, componentes propios, entrega por UBIGEO y flujo de comprobantes de pago.',
  technologies: ['WordPress', 'WooCommerce', 'Bricks', 'PHP', 'JavaScript', 'CSS', 'CMB2'],
  notice: 'Arquitectura y módulos contrastados con los plugins del proyecto. Se diferencia el desarrollo propio de las funciones aportadas por WooCommerce, WordPress y Bricks.',
  image: {
    src: evoxPreview,
    alt: 'Portada de EVOX con su catálogo de mobiliario y productos de ergonomía',
  },
  siteUrl: 'https://evox.com.pe/',
  gallery: [
    {
      src: evoxProduct,
      alt: 'Ficha de producto publicada en EVOX con galería, información y opciones de compra',
      caption: 'Ficha real del producto: la presentación combina Bricks, datos de WooCommerce y componentes de EVOX Core.',
      layout: 'wide',
    },
    {
      src: evoxShipping,
      alt: 'Consulta de envío de EVOX con selección de departamento, provincia y distrito',
      caption: 'Consulta de envío publicada. EVOX Core utiliza UBIGEO para consultar cobertura y tarifas; la captura no envía un pedido.',
      layout: 'wide',
    },
  ],
  process: [
    {
      title: 'Definición',
      caption: 'El alcance implementado reúne catálogo, compra y entrega en Perú. El brief original está por incorporar.',
      evidence: 'Alcance visible en los módulos',
      status: 'pending',
      artifact: ['Productos y variantes', 'Carrito', 'Entrega y recojo'],
    },
    {
      title: 'Diseño',
      caption: 'Bricks compone las vistas; los componentes propios conectan producto, carrito y checkout. Faltan los prototipos originales.',
      evidence: 'Interfaz publicada · Prototipos pendientes',
      status: 'pending',
      artifact: ['Ficha de producto', 'Carrito lateral', 'Checkout'],
    },
    {
      title: 'Construcción',
      caption: 'EVOX Core concentra los módulos a medida; Shop the Look relaciona escenas y productos de WooCommerce.',
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
    caption: 'Bricks presenta la tienda. EVOX Core y Shop the Look añaden componentes, hooks y endpoints AJAX; productos, carrito y pedidos siguen usando WooCommerce.',
    groups: [{ id: 'wordpress-runtime', label: 'Servidor de tienda · WordPress / PHP' }],
    nodes: [
      { id: 'customer', label: 'Comprador', role: 'Explorar y realizar la compra', technology: 'Navegador · JavaScript', kind: 'external', column: 0, row: 0 },
      { id: 'storefront', label: 'Interfaz de tienda', role: 'Componer páginas y plantillas', technology: 'WordPress · Bricks', kind: 'platform', column: 1, row: 0, group: 'wordpress-runtime' },
      { id: 'woocommerce', label: 'Motor comercial', role: 'Productos, carrito y pedidos', technology: 'WooCommerce', kind: 'platform', column: 2, row: 0, group: 'wordpress-runtime' },
      { id: 'custom', label: 'Plugins propios', role: 'Componentes, entrega y QR', technology: 'EVOX Core · Shop the Look', kind: 'custom', column: 1, row: 1, group: 'wordpress-runtime' },
      { id: 'database', label: 'Datos de la tienda', role: 'Conservar contenido y pedidos', technology: 'Persistencia WordPress / WC', kind: 'platform', column: 2, row: 1, group: 'wordpress-runtime' },
    ],
    edges: [
      { from: 'customer', to: 'storefront', label: 'HTTPS · interfaz', bidirectional: true },
      { from: 'customer', to: 'custom', label: 'AJAX · JSON', bidirectional: true },
      { from: 'storefront', to: 'woocommerce', label: 'Productos · compra', bidirectional: true },
      { from: 'custom', to: 'storefront', label: 'Tags · componentes' },
      { from: 'custom', to: 'woocommerce', label: 'Hooks · APIs WC', bidirectional: true },
      { from: 'woocommerce', to: 'database', label: 'Leer · guardar', bidirectional: true },
    ],
  },
  modules: evoxModules,
  decisions: [
    {
      need: 'Reunir las funcionalidades específicas de la tienda.',
      choice: 'Organizarlas en módulos de EVOX Core con estilos compartidos.',
      effect: 'Producto, carrito, entrega y pago tienen archivos y puntos de integración identificables.',
      target: 'Plugins propios',
    },
    {
      need: 'Personalizar la experiencia sin duplicar el carrito ni los pedidos.',
      choice: 'Usar WC()->cart, fragments, hooks y las APIs de WooCommerce.',
      effect: 'La interfaz propia opera sobre la sesión y los objetos comerciales de la plataforma.',
      target: 'Motor comercial',
    },
    {
      need: 'Incorporar cobertura y tarifas por destino al importe de compra.',
      choice: 'Registrar un WC_Shipping_Method que consulta el dataset UBIGEO local.',
      effect: 'La tarifa calculada forma parte del checkout; las zonas sin cobertura no ofrecen ese envío.',
      target: 'Plugins propios · Envíos',
    },
  ],
};
