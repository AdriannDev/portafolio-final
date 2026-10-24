import type { ImplementationModule } from '../types/project-details';

// ANDEC and EVOX modules refer to files inspected in their local project sources.
export const andecModules: ImplementationModule[] = [
  {
    name: 'Composición de páginas', kind: 'custom',
    responsibility: 'Una base compartida y componentes Astro construyen la portada, las tarjetas y los bloques de contenido.',
    technologies: ['Astro', 'Tailwind CSS'],
    sources: ['src/layouts/Base.astro', 'src/components/Hero.astro', 'src/components/TarjetaServicio.astro'],
    connections: ['Páginas Astro', 'Contenido de servicios'],
  },
  {
    name: 'Contenido tipado', kind: 'custom',
    responsibility: 'Colecciones MDX con esquemas definen servicios, productos y proyectos; las páginas consumen esos datos al compilar.',
    technologies: ['MDX', 'TypeScript', 'Astro Content', 'Zod'],
    sources: ['src/content.config.ts', 'src/content/servicios/', 'src/content/proyectos/'],
    connections: ['Generación con Astro', 'Tarjetas y páginas de detalle'],
  },
  {
    name: 'Catálogo interactivo', kind: 'custom',
    responsibility: 'Un script filtra y ordena las tarjetas del catálogo en el navegador, sin añadir un framework de interfaz.',
    technologies: ['TypeScript', 'DOM'],
    sources: ['src/scripts/catalogo.ts'],
    connections: ['Tarjetas del catálogo', 'Filtros por línea'],
  },
  {
    name: 'Formulario y endpoint', kind: 'custom',
    responsibility: 'El componente del formulario envía los datos al endpoint PHP, que valida y tramita la solicitud por correo.',
    technologies: ['Astro', 'JavaScript', 'PHP'],
    sources: ['src/components/Formulario.astro', 'public/api/enviar.php'],
    connections: ['POST desde el navegador', 'Servicio de correo del alojamiento'],
  },
];

export const evoxModules: ImplementationModule[] = [
  {
    name: 'Producto y escenas', kind: 'custom',
    responsibility: 'Los componentes de producto y los datos dinámicos se integran con Shop the Look: escenas con hotspots que permiten consultar los productos asociados.',
    technologies: ['PHP', 'JavaScript', 'Bricks'],
    sources: ['evox-core/includes/product-page.php', 'evox-core/includes/dynamic-tags.php', 'shop-the-look/evox-shop-the-look.php'],
    connections: ['Plantillas Bricks', 'Productos de WooCommerce'],
  },
  {
    name: 'Carrito lateral', kind: 'custom',
    responsibility: 'El carrito propio actualiza cantidades y presentación mediante AJAX y fragments, usando la sesión comercial de WooCommerce.',
    technologies: ['PHP', 'JavaScript', 'AJAX'],
    sources: ['evox-core/includes/mini-cart.php', 'evox-core/includes/cart-page.php'],
    connections: ['WC()->cart', 'Stock y totales de WooCommerce'],
  },
  {
    name: 'Entrega por UBIGEO', kind: 'custom',
    responsibility: 'Campos de destino, consulta de cobertura y cálculo de tarifas se integran en el checkout mediante un método de envío propio.',
    technologies: ['PHP', 'JavaScript', 'UBIGEO'],
    sources: ['evox-core/includes/checkout.php', 'evox-core/includes/shipping-locator.php'],
    connections: ['WC_Shipping_Method', 'Dataset UBIGEO local', 'Checkout de WooCommerce'],
  },
  {
    name: 'Método QR y comprobantes', kind: 'custom',
    responsibility: 'Una extensión de pago registra el pedido en espera y permite adjuntar un comprobante. Su revisión sigue siendo manual.',
    technologies: ['PHP', 'WooCommerce API'],
    sources: ['evox-core/includes/payment-qr.php', 'evox-core/includes/order-pay.php'],
    connections: ['WC_Payment_Gateway', 'Pedido de WooCommerce', 'Revisión del operador'],
  },
  {
    name: 'Acceso por código de correo', kind: 'custom',
    responsibility: 'Genera y verifica códigos para acceder a cuentas mediante usuarios y sesiones de WordPress. Este acceso es independiente del checkout.',
    technologies: ['PHP', 'JavaScript', 'WordPress'],
    sources: ['evox-core/includes/account-auth.php', 'evox-core/assets/account-auth.js', 'evox-core/templates/form-login.php'],
    connections: ['Usuarios y sesiones de WordPress', 'Clientes de WooCommerce', 'wp_mail()'],
  },
  {
    name: 'Motor comercial', kind: 'platform',
    responsibility: 'WooCommerce aporta productos, variantes, precios, stock, sesión, totales y pedidos. Los módulos propios extienden sus APIs.',
    technologies: ['WooCommerce'],
    connections: ['Plugins EVOX', 'Persistencia de la tienda'],
  },
  {
    name: 'Contenido y composición', kind: 'platform',
    responsibility: 'WordPress gestiona contenidos y plugins; Bricks compone las páginas y CMB2 aporta campos y opciones de administración.',
    technologies: ['WordPress', 'Bricks', 'CMB2'],
    connections: ['Plantillas de tienda', 'Componentes y campos de EVOX Core'],
  },
];

// Illustrative structures for future cases, not claims about completed projects.
export const webAppModules: ImplementationModule[] = [
  {
    name: 'Interfaz y estado', kind: 'custom',
    responsibility: 'Componentes de formulario y listado, con una capa de acceso HTTP separada de la presentación.',
    technologies: ['TypeScript', 'HTML', 'CSS'],
    sources: ['ui/components/', 'ui/services/tareas-api.ts'],
    connections: ['API HTTP', 'Estado de la interfaz'],
  },
  {
    name: 'Controlador HTTP', kind: 'custom',
    responsibility: 'Recibe el contrato de entrada y traduce las respuestas del backend para el cliente web.',
    technologies: ['Java', 'Spring Boot', 'REST'],
    sources: ['controller/TareaController.java'],
    connections: ['Interfaz web', 'TareaService'],
  },
  {
    name: 'Servicio de aplicación', kind: 'custom',
    responsibility: 'Concentra las reglas de negocio y coordina el acceso a los datos, sin depender de los componentes visuales.',
    technologies: ['Java', 'Spring Service'],
    sources: ['service/TareaService.java'],
    connections: ['Controlador HTTP', 'TareaRepository'],
  },
  {
    name: 'Acceso a datos', kind: 'custom',
    responsibility: 'El repositorio mantiene el acceso a las entidades separado del transporte y de la lógica de negocio.',
    technologies: ['Spring Data JPA', 'PostgreSQL'],
    sources: ['repository/TareaRepository.java', 'model/Tarea.java'],
    connections: ['TareaService', 'Base de datos'],
  },
];

export const backendModules: ImplementationModule[] = [
  {
    name: 'TareaController', kind: 'custom',
    responsibility: 'Define los endpoints y el contrato HTTP; delega las reglas al servicio de aplicación.',
    technologies: ['Java', 'Spring Boot', 'REST'],
    sources: ['controller/TareaController.java', 'dto/TareaRequest.java'],
    connections: ['Consumidor HTTP', 'TareaService'],
  },
  {
    name: 'TareaService', kind: 'custom',
    responsibility: 'Coordina las reglas del dominio, la persistencia y la caché de las consultas que lo necesitan.',
    technologies: ['Java', 'Spring Service', 'Spring Cache'],
    sources: ['service/TareaService.java'],
    connections: ['TareaController', 'TareaRepository', 'Redis'],
  },
  {
    name: 'TareaRepository', kind: 'custom',
    responsibility: 'Encapsula el acceso a las entidades mediante JPA; el servicio no realiza consultas SQL directamente.',
    technologies: ['Spring Data JPA'],
    sources: ['repository/TareaRepository.java', 'model/Tarea.java'],
    connections: ['TareaService', 'PostgreSQL'],
  },
  {
    name: 'Persistencia', kind: 'platform',
    responsibility: 'La base relacional conserva las entidades. La aplicación accede a ella a través del repositorio.',
    technologies: ['PostgreSQL'],
    connections: ['TareaRepository'],
  },
  {
    name: 'Caché de consultas', kind: 'platform',
    responsibility: 'Redis representa una caché de lectura en esta arquitectura de ejemplo. No sustituye la base de datos.',
    technologies: ['Redis', 'Spring Cache'],
    connections: ['TareaService'],
  },
];
