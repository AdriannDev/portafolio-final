# GitHub y publicación

## Estado del repositorio

El proyecto se prepara en la rama `main`. Como la carpeta no tenía historial de Git, los commits iniciales representan una instantánea del desarrollo existente, su documentación y la automatización de comprobaciones. No reconstruyen fechas o etapas anteriores.

Los commits utilizan la identidad del autor configurada en Git. No se añaden trailers de coautoría. El repositorio remoto y el despliegue se configuran cuando se elijan el nombre y el destino.

## Archivos incluidos y locales

Se versionan fuentes, imágenes utilizadas, recursos públicos, licencias, configuración, scripts y `package-lock.json`. El lockfile permite instalar las versiones resueltas con `npm ci`.

`.gitignore` excluye dependencias, salida de producción, cachés, archivos de entorno, claves, configuración local y evidencias de `artifacts/`. También conserva fuera del repositorio el JPEG original del retrato y `build_manual.py`, un script local ajeno al portafolio. No se eliminan del equipo ni son necesarios para compilar.

El retrato transparente y los datos de contacto sí forman parte del sitio público. Antes de añadir nuevos archivos, comprueba que sean contenido destinado a publicarse. No incluyas credenciales SMTP, claves de Turnstile ni código privado de los clientes: los casos solo necesitan su descripción técnica y evidencias autorizadas.

## Subir el código

Crea un repositorio vacío en GitHub, sin inicializar otro README, licencia o `.gitignore`. Después, sustituye `URL_DEL_REPOSITORIO` por su dirección HTTPS o SSH:

```sh
git status
git log --oneline
git remote add origin URL_DEL_REPOSITORIO
git push -u origin main
```

Si ya existe `origin`, revisa `git remote -v` antes de modificarlo. El acceso se realiza con la autenticación habitual de Git; nunca escribas un token dentro de la URL versionada. Estos comandos describen el envío posterior: preparar el repositorio local no lo publica por sí solo.

Para cambios siguientes, revisa el diff y añade rutas concretas:

```sh
npm run validate
git diff --check
git diff
git add src/data/portfolio.ts
git commit -m "content: actualiza el perfil profesional"
git push
```

## Integración continua

`.github/workflows/ci.yml` ejecuta en pushes y pull requests hacia `main`:

1. Obtener las fuentes y configurar Node.js 24 desde `.nvmrc`.
2. Instalar con `npm ci` usando el lockfile.
3. Ejecutar `npm run validate`: diagnóstico Astro/TypeScript, build y verificación del HTML generado.

El workflow tiene permiso de lectura de contenido, acciones fijadas por SHA y no requiere secretos propios. No contiene pasos de publicación. Las ejecuciones en GitHub solo podrán confirmarse después de subir el repositorio. Referencias: [checkout](https://github.com/actions/checkout) y [setup-node](https://github.com/actions/setup-node).

## Publicar el sitio estático

La salida es `dist/`. Un alojamiento que compile desde Git necesita instalación de dependencias, comando `npm run build` y directorio de publicación `dist`. También puede subirse una compilación local completa. No se necesita un proceso Node.js en producción. Consulta la [guía de despliegue de Astro](https://docs.astro.build/en/guides/deploy/).

Antes del primer despliegue:

- Definir `site` en `astro.config.mjs` con el dominio real para canonical y metadatos sociales absolutos.
- Revisar el CV pendiente, las evidencias de los casos y los datos de contacto que se deseen publicar.
- Revisar `public/og-image.png` y su generador: todavía conservan la marca original «Daily Post».
- Configurar el alojamiento para servir los `index.html` de las rutas y `404.html` cuando corresponda.
- Ejecutar `npm run validate`, probar `npm run preview` y revisar enlaces desde las rutas de detalles.

### Dominio raíz y subcarpetas

La implementación actual usa enlaces y recursos desde `/`. Puede servirse desde la raíz de un dominio. Una URL de GitHub Pages del tipo `usuario.github.io/repositorio/` necesita adaptar todos esos destinos a una base común; configurar solo `base` en Astro no corrige los enlaces escritos desde la raíz.

Subir el código a GitHub y publicar en GitHub Pages son pasos distintos. No se incluye un workflow de Pages ni se ha configurado un dominio de producción.
