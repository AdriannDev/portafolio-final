# Guía de contenido

## Perfil y portada

Edita `src/data/portfolio.ts`. Los datos personales son contenido público incluido en el HTML; no coloques credenciales en este archivo.

| Dato | Dónde se utiliza |
| --- | --- |
| `profile` | Presentación, ubicación, retrato, correo, WhatsApp, redes y CV |
| `publication` | Nombre editorial, fecha editable, volumen y listado de proyectos |
| `projects` | Tarjetas de inicio y, mediante `publishedProjects`, listado independiente |
| `experience` y `education` | Experiencia independiente y formación |
| `toolGroups` y `softSkills` | Tecnologías y habilidades |

Si `profile.name` no está definido, se usa la marca editorial en los metadatos. La fecha de `publication` es un dato editorial, no se actualiza con el reloj del visitante. Los grupos vacíos muestran su estado por completar; añade únicamente herramientas y experiencia que correspondan al perfil.

Para activar el CV, coloca el PDF en `public/` y establece `profile.cvUrl`, por ejemplo `/cv-adrian.pdf`. Los dos accesos lo utilizarán; mientras falte, muestran «CV pendiente». El botón «Escríbeme» utiliza `whatsappUrl`. Usa direcciones HTTPS completas para redes y WhatsApp.

## Retrato y capturas

Importa las imágenes desde `src/assets/` y acompáñalas de texto alternativo:

```ts
import captura from '../assets/projects/mi-proyecto.webp';

const imagen = {
  src: captura,
  alt: 'Pantalla principal con el catálogo de servicios',
};
```

Asigna esta estructura a `profile.portrait`, `project.image` o `study.image`. Las fichas muestran únicamente la imagen del hero; no añadas galerías de pantallas. Los diagramas y módulos explican el desarrollo.

El retrato utilizado es `foto-perfil-sin-fondo.png`. Conserva su canal alfa al sustituirlo para mantener la integración con el papel. El JPEG original se conserva localmente, está excluido de Git y no es necesario para compilar. No vincules documentación o contenido público a `artifacts/`, que tampoco forma parte del repositorio.

## Añadir una tarjeta

Añade un elemento tipado como `Project` a `projects`:

```ts
{
  id: 'mi-proyecto',
  title: 'Nombre del proyecto',
  kind: 'personal',
  template: 'backend',
  category: 'Proyecto personal',
  summary: 'Objetivo y aporte técnico en una explicación breve.',
  technologies: ['Java', 'Spring Boot'],
  // Incorpora imagen y destinos cuando estén disponibles.
}
```

`kind` describe la autoría (`freelance` o `personal`); `template` describe la solución (`static`, `ecommerce`, `web-app` o `backend`). No son equivalentes.

- En tarjetas `freelance`, `siteUrl` habilita «Visitar página»; en tarjetas `personal`, `demoUrl` habilita «Ver demo».
- `detailsUrl` habilita «Más detalles» y debe apuntar a una ficha generada.
- `date` es opcional. Una web con `siteUrl` y sin fecha muestra «En línea».
- No asignes `#` o URLs ficticias a acciones pendientes.

El listado incluye elementos con al menos uno de esos destinos. Si cambia el número de proyectos o el inventario de rutas, actualiza las expectativas explícitas de `scripts/verify-details.mjs`.

## Añadir o completar una ficha

Utiliza `ProjectCaseStudy` de `src/types/project-details.ts`. Para un nuevo caso conviene crear un archivo en `src/data/`, importarlo y añadirlo a `caseStudies` en `project-details.ts`. No lo añadas a `templateStudies` salvo que deba sustituir una de las cuatro referencias del catálogo.

1. Define un `projectId` único que coincida con la tarjeta y su URL `/proyectos/<projectId>/`.
2. Usa `mode: 'reference'` para trabajo real. Reserva `'example'` para contenido ilustrativo.
3. Completa título, objetivo, rol, alcance y tecnologías. `notice` se muestra solo en los ejemplos ilustrativos.
4. Prepara las cuatro fases de `process`. Usa `verified`, `pending` o `example` según lo documentado; `artifact` admite piezas breves del desarrollo. `evidence` es una anotación interna y no aparece en la página.
5. Describe `architecture`, `modules` y, cuando aporten información, `decisions`.
6. Añade la imagen de portada y destinos reales. Las acciones de página, demo, documentación y repositorio solo aparecen cuando su URL está definida.
7. Compila y verifica la ruta, sus enlaces y el mapa en los tres anchos de referencia.

No marques una fase como verificada solo para eliminar `noindex`. Los templates siempre llevan `noindex`; las referencias con fases pendientes también. El verificador distingue ANDEC y EVOX documentados de Tenso en preparación. Al completar otro caso, actualiza esas expectativas de metadatos. Consulta [el estado por proyecto](project-documentation.md): no se exige Figma, capturas adicionales ni un brief formal si el proceso se puede describir con precisión.

## Nodos y conexiones

Mantén entre cuatro y ocho nodos principales. Cada nodo indica nombre, responsabilidad, tecnología, tipo y posición; `group` es opcional:

```ts
{
  id: 'servicio', label: 'Servicio de tareas',
  role: 'Aplicar reglas de negocio', technology: 'Java',
  kind: 'custom', column: 1, row: 0, group: 'servidor',
}
```

Las conexiones usan IDs existentes: `{ from: 'servicio', to: 'repositorio', label: 'Consulta' }`. `bidirectional: true` representa intercambio en ambos sentidos. Los grupos se declaran como `{ id: 'servidor', label: 'Servidor de la API' }`.

Separa generación del sitio y ejecución en producción. Incluye Redis, SMTP, proveedores o integraciones solo si están comprobados o identificados como ejemplo. Comprueba las etiquetas en la composición vertical móvil.

## Módulos y decisiones

Cada módulo explica una responsabilidad, tecnologías, conexiones y `kind: 'custom' | 'platform'`. `sources` admite rutas de archivos como evidencia; se muestran como texto, no como enlaces a repositorios privados.

En EVOX, WooCommerce aporta productos, carrito, sesión y pedidos. Los plugins propios amplían la presentación, entrega y método QR; no se atribuye el motor de ecommerce al desarrollo propio. En las webs corporativas se distingue el sitio generado de los endpoints PHP externos a este portafolio.

Cada decisión relaciona `need`, `choice`, `effect` y `target`. La referencia `target` se muestra como texto y no genera un enlace al mapa. Evita repetir el mismo párrafo en el mapa, la tarjeta y el pie de figura. No añadas métricas, herramientas de diseño o resultados que no tengan evidencia.
