# Documentación y pendientes de los proyectos

El contexto de ANDEC y EVOX se completó con la explicación directa del autor. Las decisiones iniciales y el prototipado se describen desde ese relato; las tecnologías, módulos, archivos y conexiones se apoyan en las fuentes de los proyectos. Son dos fuentes complementarias: el código no permite reconstruir por sí solo las conversaciones con el cliente.

| Proyecto | Estado de las fases |
| --- | --- |
| ANDEC Coberturas | Definición, diseño, construcción e integración documentadas |
| EVOX | Definición, diseño, construcción e integración documentadas |
| Tenso Lonas Perú | Definición, diseño y construcción documentadas; integración por confirmar |

«Por documentar» se refiere a esa confirmación del proceso, no a una funcionalidad necesariamente pendiente de programar. Las fichas no muestran las anotaciones internas de evidencia ni galerías de producto.

## ANDEC Coberturas

### Contexto confirmado por el autor

- El negocio no tenía página web. Buscaba presentar sus servicios digitalmente y atraer potenciales clientes y solicitudes comerciales.
- Los servicios con mayor demanda se priorizaron en la estructura y el contenido, siguiendo las prioridades del cliente.
- El catálogo de productos se incorporó después al alcance: productos con mayor rotación y precios aproximados para orientar las consultas.
- La propuesta visual fue propia, con libertad para evaluar referencias y utilizar las webs que proporcionaba el cliente. Se prepararon prototipos UI y mockups para revisar la estructura antes del desarrollo; no se atribuye una herramienta específica.
- Astro y Tailwind se eligieron con una intención orientada al SEO y a la construcción del sitio. Los archivos Markdown/MDX facilitan incorporar proyectos sin añadir un CMS; las fuentes utilizan MDX.
- El formulario se implementó con PHP para aprovechar el alojamiento disponible en Hostinger.

### Cómo se presenta en la ficha

La portada refleja la primera presencia web, el rol de propuesta UI, prototipado y desarrollo, y el alcance corporativo. Las fases de definición y diseño están verificadas mediante el relato del autor. Tres decisiones explican generación con Astro, contenido MDX sin CMS y endpoint PHP, vinculadas a los nodos del mapa.

La captación de clientes y el enfoque SEO se presentan como objetivos. No se atribuyen aumentos de leads, posiciones en buscadores ni resultados medidos.

## EVOX

### Contexto confirmado por el autor

- El proyecto modernizó una tienda existente con WordPress y un tema antiguo de WooCommerce. Se buscaban una presentación más ordenada, facilidad para encontrar productos, rapidez y menos fricción al comprar.
- Entre los requisitos estaban imágenes de producto cuadradas, consulta rápida de entrega/recojo y compra sin registro obligatorio. La validación mediante un código enviado al correo también formaba parte de las necesidades planteadas.
- El cliente aportó referencias visuales y funcionales. Se presentó un primer prototipo, se solicitaron cambios y se preparó una segunda iteración antes del desarrollo.
- EVOX Core agrupa funcionalidades a medida. Shop the Look responde a la petición de presentar escenas con puntos interactivos que identifican productos y permiten consultarlos.

### Distinción comprobada en el código

El módulo `evox-core/includes/account-auth.php`, su cliente `assets/account-auth.js` y la plantilla `templates/form-login.php` implementan acceso por código para cuentas. Usan envío con `wp_mail()`, creación de clientes mediante WooCommerce y autenticación y sesiones de WordPress.

Ese módulo es independiente de carrito, checkout y pagos. La ficha no presenta el código de correo como un paso obligatorio de compra ni afirma que se haya comprobado el envío de códigos en producción. El mapa añade el módulo de cuenta y su conexión con los datos de usuarios dentro del entorno WordPress/PHP.

Las fases iniciales están documentadas con el relato del autor. Los módulos y decisiones distinguen las personalizaciones de EVOX de productos, carrito, stock y pedidos aportados por WooCommerce. Rapidez y reducción de pasos se describen como objetivos; no se presentan métricas de mejora.

## Tenso Lonas Perú

| Fase pendiente | Información necesaria |
| --- | --- |
| Integración | Confirmar si `/api/cotizar.php` es el endpoint utilizado en la web entregada y si Turnstile y SMTP forman parte de la integración efectiva o quedaron preparados en el código. Si hubo otra solución final, indicar cuál. |

El código ya muestra el formulario, POST/Fetch, validación en PHP, verificación anti-spam y envío SMTP. El pendiente distingue esa implementación de la configuración final utilizada. No se necesitan contraseñas, tokens, archivos privados ni una prueba pública de correo. El proveedor de alojamiento solo debe añadirse si se confirma y ayuda a entender dónde se ejecuta PHP.

## Cómo cerrar una fase pendiente

1. Incorporar la explicación confirmada en la descripción breve de la fase o en una decisión técnica cuando corresponda.
2. Actualizar el registro interno `evidence` y pasar `status` de `pending` a `verified` en el caso correspondiente.
3. Mantener separados el contexto confirmado por el autor, la implementación revisada y el comportamiento productivo no comprobado.
4. Ejecutar `npm run validate` y actualizar las expectativas de indexación del verificador si la ficha deja de ser un borrador.

Los templates continúan con `noindex`, aunque reutilicen un caso documentado. Las fichas reales de ANDEC y EVOX ya no llevan esa restricción por fases pendientes; Tenso conserva sus metadatos de borrador.

Las variantes de aplicación web y API siguen siendo ejemplos para futuros proyectos. Para convertirlas en casos reales harán falta sus módulos, contratos, reglas y conexiones efectivos; sus diagramas actuales no describen un trabajo adicional del portafolio.
