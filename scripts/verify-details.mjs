import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { resolve, join } from 'node:path';

const output = resolve('dist');
const cases = ['/plantillas/estatica/', '/plantillas/ecommerce/', '/plantillas/aplicacion-web/', '/plantillas/backend/', '/proyectos/andec-coberturas/', '/proyectos/evox/', '/proyectos/tenso-lonas-peru/'];
const routes = ['/', '/proyectos/', '/plantillas/', ...cases];
const publishedCases = new Set(['/proyectos/andec-coberturas/', '/proyectos/evox/']);
const readRoute = path => readFile(join(output, path, 'index.html'), 'utf8');
const pageCache = new Map();
const getPage = async path => {
  if (!pageCache.has(path)) pageCache.set(path, await readRoute(path));
  return pageCache.get(path);
};

for (const route of routes) {
  const html = await getPage(route);
  assert(!html.includes('Ubicar en el mapa'), `${route}: no decision-to-map controls`);
  if (publishedCases.has(route)) assert.doesNotMatch(html, /<meta name="robots" content="[^"]*noindex/u, `${route}: documented cases may be indexed`);
  else if (route.startsWith('/plantillas/') || cases.includes(route)) assert.match(html, /<meta name="robots" content="noindex, follow"/u, `${route}: previews and draft cases must not be indexed`);
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
    assert(!/Pantallas implementadas|case-gallery|case-implementation-gallery|Evidencia disponible|process-stage__source/u.test(html), `${route}: no product galleries or evidence footers`);
    assert(!/Contenido estático con un formulario propio|Mapa contrastado con las fuentes locales|Hostinger aloja los archivos generados/u.test(html), `${route}: no architecture audit copy`);
    const illustrative = route === '/plantillas/aplicacion-web/' || route === '/plantillas/backend/';
    assert.equal((html.match(/<img(?:\s|>)/gu) ?? []).length, illustrative ? 0 : 1, `${route}: keep only the hero project image`);
    const architectureViews = [...html.matchAll(/<svg\b(?=[^>]*class="architecture-map__)[^>]*>[\s\S]*?<\/svg>/gu)].map(match => match[0]);
    assert.equal(architectureViews.length, 2, `${route}: desktop and mobile maps`);
    for (const svg of architectureViews) {
      assert(!/<title\b|\stitle=/u.test(svg), `${route}: no native map tooltip`);
      assert.match(svg, /aria-label="[^"]+"/u, `${route}: map keeps an accessible name`);
      const descriptionId = svg.match(/aria-describedby="([^"]+)"/u)?.[1];
      assert(descriptionId && svg.includes(`id="${descriptionId}"`), `${route}: accessible map description exists`);
    }
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
assert.equal((tenso.match(/class="process-status"/gu) ?? []).length, 1, 'Tenso retains its pending integration phase');
for (const route of ['/proyectos/andec-coberturas/', '/plantillas/estatica/', '/proyectos/evox/', '/plantillas/ecommerce/']) {
  const html = await getPage(route);
  assert(!html.includes('Por documentar'), `${route}: author-confirmed definition and design have no pending labels`);
  assert.match(html, /id="decisiones"/u, `${route}: technical decisions are present`);
}
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
  assert.match(html, /Shop the Look/u);
  assert.match(html, /Acceso por código de correo/u);
  assert.match(html, /account-auth\.php/u);
  assert.match(html, /independiente del checkout/u, 'Account authentication is distinct from checkout');
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
console.log('✓ ANDEC and EVOX documented; Tenso integration pending; four template variants consistent.');
