# Desarrollo, diseño e interacción

El objetivo es presentar el perfil y explicar el desarrollo de cada proyecto mediante una lectura editorial visual. La composición parte de los mockups del periódico y se adapta a pantallas pequeñas manteniendo el orden de las secciones.

## Decisiones de implementación

| Decisión | Motivo y aplicación |
| --- | --- |
| Astro estático | El contenido se prepara al compilar; la navegación no necesita una aplicación cliente completa |
| TypeScript estricto | Contratos compartidos entre datos, tarjetas, casos y diagramas |
| CSS y SVG | Ilustraciones y transiciones controlables sin dependencias de animación |
| Datos separados | Actualizar el perfil o un proyecto sin duplicar la estructura visual |
| Desarrollo como contenido | Mapas, responsabilidades y archivos; una sola imagen de producto en el hero |
| Evidencias identificadas | Diferenciar trabajos reales, fases pendientes y ejemplos de arquitectura |

El portafolio utiliza CSS propio. Tailwind CSS, WordPress y WooCommerce aparecen como habilidades y tecnologías de otros proyectos, no como herramientas de construcción de esta web.

Las fichas no incluyen galerías de pantallas, etiquetas de evidencia disponible ni pies de auditoría. Los mapas no generan tooltips nativos, pero conservan su nombre y descripción accesibles. Los pendientes documentales se mantienen separados de las funcionalidades implementadas: véase [pendientes por proyecto](project-documentation.md).

## Sistema editorial

Las variables de `src/styles/global.css` centralizan papel `#F5F0E6`, tinta `#252320`, coral `#C55C45`, tipografía, medidas y movimiento. Playfair Display se utiliza para títulos y Source Serif 4 para lectura. `--panel-shadow` y `--small-shadow` controlan la profundidad de los recuadros.

La cabecera conserva fija la navegación mientras el título sale de pantalla. `--page-gutter` permite que su fondo coincida con el ancho del periódico. La altura de las anclas se ajusta a la navegación visible. El punto y coma de la marca tiene separación y escala propias en cabecera y pie.

Las tarjetas comparten estructura y enlaces en inicio y listado. «Más detalles» aparece horizontal y separado del pliegue; la decoración no condiciona el acceso ni contiene la única etiqueta del enlace.

## Movimiento

| Elemento | Comportamiento |
| --- | --- |
| Personaje del hero | Recorrido horizontal de 12 segundos en su franja |
| Personaje de experiencia | Mirada y parpadeo en un ciclo de 6 segundos |
| Símbolo de Claude | Giro continuo de 24 segundos |
| Java | Trazado inicial de 1,6 segundos y vapor de 3 segundos |
| Octocat sobre el CV | Mirada frente/laterales de 14 segundos y parpadeo de 7 segundos |
| Doblez de tarjetas | Dos caras y bisagra diagonal, transición de 720 ms |
| Tarjetas y etiquetas | Elevación discreta y cambios de tinta con transiciones breves |

Las ilustraciones decorativas se pausan fuera de pantalla, con la pestaña oculta o por el control global. La preferencia de movimiento reducido prevalece. En táctil, el doblez tiene un estado estático; no requiere hover para acceder a los enlaces. Octocat reserva su espacio y no captura clics ni foco.

Para añadir una ilustración animada, aplica `data-motion`, utiliza los estados existentes del CSS y comprueba la pose completa sin JavaScript. Evita añadir otro controlador de pausa o almacenamiento paralelo.

## Accesibilidad y composición

- HTML en español, un encabezado principal por página y enlace «Saltar al contenido».
- Navegación por enlaces reales, foco visible y estado de sección activa.
- Imágenes con dimensiones y texto alternativo; decoraciones excluidas del árbol accesible.
- Botones pendientes deshabilitados y sin destinos ficticios.
- Leyendas y bordes en los diagramas para no depender únicamente del color.
- Bloques y tarjetas apilados en móvil; navegación distribuida cuando falta espacio.

Estas medidas forman parte de la implementación. No equivalen a una certificación de accesibilidad.

## Flujo de trabajo

1. Ejecutar `npm ci` tras clonar o cambiar el lockfile, y `npm run dev` para trabajar.
2. Editar datos, componentes o estilos en su ubicación compartida.
3. Revisar la página afectada a 360, 768 y 1440 px; comprobar teclado, textos largos, anclas y estados pendientes.
4. Para cambios de movimiento, comprobar pausa, movimiento reducido, entrada/salida rápida de hover y ausencia de JavaScript.
5. Ejecutar `npm run validate` y revisar la salida con `npm run preview`.
6. Revisar `git diff --check`, actualizar documentación cuando cambie el comportamiento y crear un commit con alcance concreto.

El verificador trabaja sobre `dist/`; debe ejecutarse después de compilar. Sus comprobaciones son de estructura y navegación, no mediciones visuales ni pruebas de compra de los proyectos externos. Consulta [VALIDATION.md](../VALIDATION.md) para resultados y límites.
