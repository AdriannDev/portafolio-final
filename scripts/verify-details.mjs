import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { resolve, join } from 'node:path';

const output = resolve('dist');
const cases = ['/plantillas/estatica/', '/plantillas/ecommerce/', '/plantillas/aplicacion-web/', '/plantillas/backend/', '/proyectos/andec-coberturas/', '/proyectos/evox/', '/proyectos/tenso-lonas-peru/'];
const routes = ['/', '/proyectos/', '/plantillas/', ...cases];
const readRoute = path => readFile(join(output, path, 'index.html'), 'utf8');
const pageCache = new Map();
const getPage = async path => {
  if (!pageCache.has(path)) pageCache.set(path, await readRoute(path));
  return pageCache.get(path);
};

for (const route of routes) {
  const html = await getPage(route);
  if (route.startsWith('/plantillas/') || cases.includes(route)) assert.match(html, /<meta name="robots" content="noindex, follow"/u, `${route}: previews and draft cases must not be indexed`);
  assert.equal((html.match(/<h1(?:\s|>)/gu) ?? []).length, 1, `${route}: one primary heading`);
  const ids = [...html.matchAll(/\sid="([^"]+)"/gu)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, `${route}: duplicate HTML/SVG IDs`);
  assert(!/visual-viewer|data-expand-visual|data-visual-source|<dialog/iu.test(html), `${route}: no visual enlargement controls or modal`);
  assert(!/Web estática|Sitio web estático/iu.test(html), `${route}: no unnecessary static-site heading`);
  assert.match(html, /class="masthead__punctuation"[^>]*>;<\/span>/u, `${route}: shared semicolon wordmark`);
  if (cases.includes(route)) {
    assert.match(html, /id="proceso"/u);
    assert.match(html, /id="arquitectura"/u);
    assert.match(html, /id="implementacion"/u);
    assert(!/id="funcionamiento"|id="validacion"|Funcionamiento clave|Validación y resultado/u.test(html), `${route}: details focus on development`);
  }
  for (const match of html.matchAll(/<a\s[^>]*href="([^"]+)"[^>]*>/gu)) {
    const href = match[1].replaceAll('&amp;', '&');
    assert.notEqual(href, '#', `${route}: empty destination`);
    if (href.startsWith('https://')) {
      assert.match(match[0], /rel="noopener noreferrer"/u, `${route}: external link protection`);
    }
    if (!(href.startsWith('/') || href.startsWith('#')) || href.startsWith('//')) continue;
    const url = new URL(href, `https://local.test${route}`);
    const destination = await getPage(url.pathname);
    if (url.hash) assert(destination.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `${route}: broken anchor ${href}`);
  }
  console.log(`✓ ${route}: navigation, IDs, static visuals and metadata`);
}
const homepage = await getPage('/');
assert(!/project-card__number|FIG\. 0[1-4]/u.test(homepage), 'Homepage project cards have no numbering');
assert.match(homepage, /href="\/proyectos\/andec-coberturas\/"/u, 'ANDEC card links to the implemented case');
assert.match(homepage, /href="\/proyectos\/evox\/"/u, 'EVOX card links to the implemented case');
assert.match(homepage, /href="\/proyectos\/tenso-lonas-peru\/"/u, 'Tenso card links to its implemented case');
assert.match(homepage, /href="\/proyectos\/"[^>]*>.*?Ver todos los proyectos/su, 'Homepage links to the complete project listing');
const listing = await getPage('/proyectos/');
assert(!listing.includes('project-card__number'), 'Project listing cards have no numbering');
assert.equal((listing.match(/class="project-card"/gu) ?? []).length, 3, 'Listing includes the three completed projects');
assert(!listing.includes('Proyecto personal'), 'Unfinished placeholder is not a completed project');
assert.match(listing, /href="\/proyectos\/tenso-lonas-peru\/"/u, 'Listing links to Tenso details');
const tenso = await getPage('/proyectos/tenso-lonas-peru/');
assert.match(tenso, /Markdown/u);
assert.match(tenso, /Turnstile/u);
assert.match(tenso, /SMTP/u);
assert.match(tenso, /api\/cotizar.php/u);
const templates = await getPage('/plantillas/');
assert.equal((templates.match(/class="template-index__card"/gu) ?? []).length, 4, 'Real projects do not add duplicate template variants');
for (const route of ['/plantillas/ecommerce/', '/proyectos/evox/']) {
  const html = await getPage(route);
  assert(!html.includes('Ejemplo de plantilla'), 'EVOX is a real case');
  assert.match(html, /href="https:\/\/evox.com.pe\/"/u, 'EVOX links to its public site');
  assert.match(html, /Implementación y componentes/u);
  assert.match(html, /Desarrollo propio/u);
  assert.match(html, /Base tecnológica/u);
  assert.match(html, /WooCommerce/u);
  assert.match(html, /UBIGEO/u);
}
const backend = await getPage('/plantillas/backend/');
assert.match(backend, /TareaService/u);
assert.match(backend, /Redis/u);
assert.match(backend, /Servidor de la API/u);
for (const route of ['/plantillas/aplicacion-web/', '/plantillas/backend/']) {
  const html = await getPage(route);
  assert.match(html, /Ejemplo de plantilla/u, `${route}: illustrative content label`);
  assert(!/href="https?:\/\//u.test(html), `${route}: examples must not invent live destinations`);
}
await stat(join(output, 'licenses/bootstrap-icons.txt'));
console.log('✓ Three real cases, four template variants and shared wordmark are consistent.');
