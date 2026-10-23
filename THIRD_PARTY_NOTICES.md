# Recursos de terceros

Este documento identifica los recursos incluidos y sus referencias. El repositorio no declara una licencia general para todo su contenido.

## Tipografías

Las fuentes se distribuyen localmente a través de los paquetes Fontsource y utilizan SIL Open Font License 1.1. Se incluyen los textos completos para acompañar los archivos servidos:

| Fuente | Paquete | Licencia |
| --- | --- | --- |
| Playfair Display | `@fontsource-variable/playfair-display` | [OFL y avisos originales](public/licenses/playfair-display-OFL.txt) |
| Source Serif 4 | `@fontsource-variable/source-serif-4` | [OFL y avisos originales](public/licenses/source-serif-4-OFL.txt) |

## Iconos e ilustraciones de marcas

- Los iconos de LinkedIn, GitHub y X proceden de [Bootstrap Icons](https://github.com/twbs/icons). Se conserva su [licencia MIT](public/licenses/bootstrap-icons.txt).
- La silueta de WhatsApp se incorporó como vector desde [Simple Icons](https://github.com/simple-icons/simple-icons/blob/develop/icons/whatsapp.svg); la referencia de origen se conserva en `Icon.astro`.
- El símbolo de Claude se basa en el contorno de su [sitio oficial](https://claude.com/).
- La ilustración animada de Octocat es una adaptación vectorial con capas, basada en el [Octocat original](https://octodex.github.com/original/).
- `JavaMark.astro` representa la taza y el vapor asociados con Java mediante trazos SVG preparados para esta página.

Las marcas pertenecen a sus respectivos titulares. La identificación de una fuente visual no convierte sus marcas en recursos con licencia general de este repositorio ni implica afiliación.

## Fotografías y capturas

El retrato corresponde al autor del portafolio. Se utiliza su versión con transparencia; el archivo original permanece local y no se distribuye en Git.

Las capturas de ANDEC Coberturas, EVOX y Tenso Lonas Perú documentan los proyectos presentados. Los logotipos, fotografías, productos y demás contenidos visibles mantienen sus derechos correspondientes; no se ofrecen como un paquete reutilizable de imágenes.

## Dependencias

Astro, TypeScript, Sharp y las demás dependencias conservan sus licencias en sus paquetes. `package-lock.json` registra las versiones resueltas. No se incluyen `node_modules/` ni fuentes privadas de los proyectos de clientes.
