# Validación del portafolio

Este registro describe la versión actual y separa las comprobaciones automáticas de las revisiones visuales anteriores. Última revisión: **23 de octubre de 2026**.

## Fichas centradas en desarrollo · 23 de octubre

- Retiradas las galerías de los tres casos y sus variantes de plantilla. Cada ficha real muestra una sola imagen en el hero; implementación conserva módulos, responsabilidades, tecnologías, archivos y conexiones.
- Eliminadas las etiquetas de evidencia disponible, los pies de auditoría y los avisos de revisión en los casos reales. Las fases pendientes conservan «Por documentar»; su información necesaria se explica en [pendientes por proyecto](docs/project-documentation.md).
- Los mapas ya no incluyen títulos SVG que disparen tooltips ni pies con explicaciones de comprobación de fuentes. Conservan nombre y descripción accesibles mediante ARIA y `<desc>`.
- `npm run validate`: diagnóstico de 39 archivos sin errores, advertencias ni sugerencias; build de 11 páginas y 25 variantes de imagen; diez rutas verificadas correctamente.
- Revisión en navegador de siete fichas a 360, 768 y 1440 px: 21 vistas sin desbordamiento horizontal ni imágenes rotas, sin galerías ni textos de evidencia disponible. Los mapas mantienen sus descripciones accesibles y no contienen títulos nativos de hover.
- Comprobada la navegación a las anclas de proceso y arquitectura. La pestaña de revisión no registró errores de consola.
- Registros y capturas locales: `artifacts/project-details-development-review.json`, `project-process-clean.png` y `project-architecture-clean.png`. Los cambios aún no se han publicado en GitHub.

## Comprobación reproducible

```sh
npm ci
npm run validate
```

`validate` ejecuta `astro check`, `astro build` y `scripts/verify-details.mjs`, en ese orden. El verificador lee la salida recién generada en `dist/`.

| Comprobación | Alcance |
| --- | --- |
| Astro / TypeScript | Diagnóstico de componentes y contratos de contenido |
| Build | Generación de 11 páginas HTML, incluida `404.html` |
| Verificación de detalles | Diez rutas navegables: inicio, listado, catálogo, cuatro templates y tres fichas |
| Estructura | Un `h1` por página, IDs únicos, secciones de desarrollo y marca con punto y coma |
| Navegación | Destinos internos y anclas existentes; enlaces externos con `noopener noreferrer` |
| Casos y templates | Tres casos reales, cuatro variantes, ejemplos identificados y `noindex` en vistas/borradores |
| Interfaz generada | Sin controles de ampliación, secciones retiradas ni numeración de las tarjetas |

### Preparación inicial de GitHub · 22 de octubre

Se ejecutó la cadena sobre una exportación limpia de las fuentes preparadas para Git, fuera del directorio de trabajo y sin depender de sus archivos locales excluidos. Entorno: Windows, Node.js 24.19.0 y npm 11.17.0. Los siguientes resultados corresponden a esa versión, anterior a la retirada de galerías:

- `npm ci`: instalación correcta; la auditoría de npm informó cero vulnerabilidades en esa ejecución.
- `npm run check`: 38 archivos, cero errores, advertencias y sugerencias.
- `npm run build`: 11 páginas y 43 imágenes optimizadas, sin errores.
- `npm run verify:details`: diez rutas correctas y comprobaciones de estructura superadas.
- Documentación: 16 enlaces locales comprobados en ocho documentos; workflow YAML analizado y acciones fijadas por SHA.
- Preparación de Git: revisión de exclusiones y patrones de credenciales, sin coincidencias detectadas en los archivos preparados.

Los resultados de las siguientes ejecuciones se consultan en la terminal y, después de subir el repositorio, en GitHub Actions. La CI remota todavía no se ha ejecutado; esta prueba local no sustituye su primera ejecución en Linux.

## Revisiones visuales y de interacción realizadas

Durante el desarrollo se revisaron inicio, listado y cuatro variantes a **360, 768 y 1440 px** mediante emulación. La incorporación de Tenso volvió a revisar inicio y su ficha a esos tres anchos. Se comprobaron ausencia de desbordamiento lateral e imágenes rotas, legibilidad de «Más detalles», composición vertical de diagramas y separación del punto y coma.

También se revisaron acceso por teclado desde las tarjetas a las fichas, anclas internas, foco visible, estados pendientes, pliegue y controles de movimiento. Los registros y capturas de esas sesiones se conservan localmente en `artifacts/`; no son dependencias del proyecto ni enlaces públicos del repositorio.

Los cambios de documentación y CI no modifican la composición visual. No se atribuye a esta entrega una nueva auditoría visual completa.

## Límites y pendientes

- Falta comprobar la interacción en un teléfono físico: tacto, áreas seguras y barra del navegador.
- La pausa al ocultar la pestaña está implementada; el navegador integrado no ocultó el documento durante la prueba previa y queda por confirmar ese evento en un navegador convencional.
- La descarga del CV se verificará cuando se incorpore el PDF. El acceso permanece identificado como pendiente.
- No se ejecutaron envíos de formularios, mensajes de WhatsApp, compras, pagos ni entregas SMTP en los sitios de clientes.
- No se documentan puntuaciones de Lighthouse ni una certificación de accesibilidad. Cualquier métrica futura debe indicar fecha, URL y condiciones de prueba.
- Las fases pendientes de evidencia en los casos reales mantienen sus metadatos de borrador. La validación del portafolio no confirma la infraestructura productiva de esos proyectos.

## Revisión antes de publicar

Revisar dominio y metadatos sociales, contenidos pendientes, destinos externos y comportamiento en un dispositivo físico. Para reproducir el procedimiento de trabajo y las comprobaciones manuales, consulta [desarrollo](docs/development.md); para configurar el alojamiento, consulta [GitHub y publicación](docs/github-and-deployment.md).
