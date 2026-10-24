# Qué falta por documentar en los proyectos

«Por documentar» se refiere a información del proceso que no puede deducirse únicamente del código. No significa que falte programar esa funcionalidad. Las fuentes ya permiten explicar tecnologías, componentes, archivos y conexiones.

Las fichas públicas mantienen una explicación breve del desarrollo. No muestran las notas internas de evidencia ni una galería del producto; la portada y el enlace a la web cubren esa función. Los siguientes datos sirven para completar el relato sin inventar cómo se trabajó.

## ANDEC Coberturas

| Fase pendiente | Información necesaria |
| --- | --- |
| Definición | Qué problema pidió resolver el cliente, a quién se dirigía la web y cuáles eran las prioridades iniciales. Confirmar qué parte del alcance definiste tú. |
| Diseño | Cómo definiste la navegación y las secciones: propuesta propia, referencia del cliente u otro punto de partida. Explicar una o dos decisiones sobre estructura, componentes reutilizables o consulta del catálogo. |

Una explicación corta del autor basta. No es obligatorio aportar un brief formal, bocetos, Figma ni capturas. Los componentes Astro, contenido MDX y endpoint PHP ya están descritos desde el código; falta relacionarlos con el contexto y las decisiones iniciales.

## EVOX

| Fase pendiente | Información necesaria |
| --- | --- |
| Definición | Cuáles eran los requisitos originales de catálogo, compra, entrega/recojo y pagos; qué personalizaciones se solicitaron y cuáles propusiste. Delimitar tu responsabilidad frente a la configuración de la plataforma. |
| Diseño | Cómo se plantearon las plantillas de Bricks y las piezas propias de producto, carrito y checkout. Explicar qué necesidad llevó a personalizar esas piezas y cómo se decidió qué resolver con WooCommerce o con los plugins propios. |

No se necesitan prototipos históricos si no se usaron. La separación de módulos propios y WooCommerce ya se apoya en el código. Falta la explicación del autor sobre el origen de los requisitos y las decisiones de composición; no volver a demostrar el resultado mediante pantallas.

## Tenso Lonas Perú

| Fase pendiente | Información necesaria |
| --- | --- |
| Integración | Confirmar si `/api/cotizar.php` es el endpoint utilizado en la web entregada y si Turnstile y SMTP forman parte de la integración efectiva o quedaron preparados en el código. Si hubo otra solución final, indicar cuál. |

El código ya muestra el formulario, POST/Fetch, validación en PHP, verificación anti-spam y envío SMTP. El pendiente distingue esa implementación de la configuración final utilizada. No se necesitan contraseñas, tokens, archivos privados ni una prueba pública de correo. El proveedor de alojamiento solo debe añadirse si se confirma y ayuda a entender dónde se ejecuta PHP.

## Cómo cerrar una fase

1. Incorporar la explicación confirmada en la descripción breve de la fase o en una decisión técnica cuando corresponda.
2. Actualizar el registro interno `evidence` y pasar `status` de `pending` a `verified` en el caso correspondiente.
3. Mantener una distinción clara entre implementación revisada y comportamiento productivo no comprobado.
4. Ejecutar `npm run validate`. Si ya no queda ninguna fase pendiente, revisar las expectativas de `noindex` del verificador y decidir la indexación de esa ficha.

Las variantes de aplicación web y API son ejemplos para futuros proyectos. Para convertirlas en casos reales harán falta sus módulos, contratos, reglas y conexiones efectivos; sus diagramas actuales no describen un trabajo adicional del portafolio.
