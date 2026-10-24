# Adrian Dev;

Portafolio personal de ingeniería de software con enfoque backend. Un espacio para presentar mi perfil, experiencia y proyectos, y explicar las decisiones y el trabajo técnico que hay detrás de cada solución.

El diseño está inspirado en un periódico vintage: papel marfil, tipografía editorial, recuadros, separadores y acentos coral. La marca **Adrian Dev;** conecta esa identidad con el desarrollo de software.

El portafolio está construido con **Astro, TypeScript y CSS**, contenido tipado, imágenes optimizadas y animaciones SVG. Se genera como un sitio estático, con JavaScript para mejorar la navegación y controlar el movimiento.

## Contenido del portafolio

- **Presentación:** perfil profesional, especialización backend, retrato y ubicación.
- **Proyectos:** una selección de trabajos y una página independiente para explorar los proyectos disponibles.
- **Experiencia y formación:** desarrollo independiente y estudios de Ingeniería de Software en la Universidad Tecnológica del Perú.
- **Herramientas y habilidades:** tecnologías de backend y frontend, herramientas de apoyo y habilidades interpersonales.
- **Contacto:** correo, WhatsApp, LinkedIn, GitHub, X y acceso al CV cuando esté disponible.
- **Detalles técnicos:** proceso de desarrollo, arquitectura y conexiones, módulos implementados y decisiones técnicas.

Las fichas se centran en **cómo se desarrolló cada proyecto**. Incluyen una imagen de portada y el enlace al sitio publicado para explorar el resultado completo.

## Proyectos

| Proyecto | Solución | Tecnologías principales |
| --- | --- | --- |
| [ANDEC Coberturas](https://andeccoberturas.com/) | Primera presencia web del negocio, servicios, catálogo y solicitudes de cotización | Astro, TypeScript, Tailwind CSS, MDX y PHP |
| [EVOX](https://evox.com.pe/) | Modernización de un ecommerce con componentes y plugins propios para catálogo, compra y entrega | WordPress, WooCommerce, Bricks, PHP, JavaScript y CSS |
| [Tenso Lonas Perú](https://tensolonasperu.com/) | Web de servicios y proyectos con contenido tipado, enfoque SEO y formulario de cotización | Astro, TypeScript, Tailwind CSS, Markdown y PHP |

En cada ficha se diferencia el desarrollo propio de las funciones aportadas por las plataformas e integraciones. El espacio reservado al proyecto personal se identifica como pendiente.

## Proceso de desarrollo

1. **Definición visual.** Se partió de mockups con estructura de periódico, manteniendo su composición, jerarquía y orden de lectura.
2. **Sistema editorial.** Se definieron colores, fuentes locales, espaciado, profundidad y componentes reutilizables, con adaptación a móvil, tablet y escritorio.
3. **Contenido y componentes.** El perfil, las tarjetas y los casos técnicos se separaron de la presentación mediante datos e interfaces TypeScript. Inicio y listado comparten las mismas tarjetas.
4. **Interacción y animación.** Se implementaron ilustraciones SVG y transiciones CSS: personajes, símbolo giratorio, trazado de Java, Octocat y doblez de papel. Un control permite pausar el movimiento y se respeta la preferencia de movimiento reducido.
5. **Documentación de proyectos.** Se prepararon cuatro variantes para sitios web, ecommerce, aplicaciones con backend y APIs. ANDEC, EVOX y Tenso presentan casos reales; las variantes de aplicación y API son ejemplos identificados para futuros trabajos.
6. **Revisión.** Se comprobaron la presentación responsive, navegación por teclado, enlaces, estructura de las fichas y compilación de producción. GitHub Actions ejecuta las comprobaciones del proyecto.

## Criterios de implementación

- **Identidad consistente:** cabecera, navegación, tarjetas y fichas comparten el lenguaje editorial.
- **Contenido honesto:** los objetivos se distinguen de los resultados medidos y los ejemplos no se presentan como trabajos realizados.
- **Arquitectura visual:** diagramas SVG muestran componentes, tecnologías, responsabilidades y conexiones.
- **Movimiento progresivo:** las animaciones decorativas se pausan fuera de pantalla y al ocultar la pestaña; la información permanece disponible sin JavaScript.
- **Accesibilidad:** estructura semántica, foco visible, textos alternativos y estados claros para los accesos pendientes.
- **Carga estática:** páginas e imágenes se preparan durante la compilación; el portafolio no necesita una base de datos ni un servidor de aplicación.
