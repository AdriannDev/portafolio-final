const root = document.documentElement;
const preferenceKey = 'daily-post:motion-paused';
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const toggle = document.querySelector<HTMLButtonElement>('[data-motion-toggle]');
const toggleLabel = document.querySelector<HTMLElement>('[data-motion-label]');
let paused = false;

try { paused = localStorage.getItem(preferenceKey) === 'true'; } catch { /* Storage is optional. */ }

function syncMotion() {
  const reduced = reducedMotion.matches;
  root.dataset.motionState = reduced ? 'reduced' : paused ? 'paused' : document.hidden ? 'hidden' : 'running';
  if (toggle) {
    toggle.hidden = false;
    toggle.disabled = reduced;
    toggle.setAttribute('aria-pressed', String(paused || reduced));
    toggle.title = reduced ? 'Se respeta la preferencia de movimiento reducido de tu dispositivo.' : '';
  }
  if (toggleLabel) toggleLabel.textContent = reduced ? 'Movimiento reducido' : paused ? 'Reanudar animaciones' : 'Pausar animaciones';
}

toggle?.addEventListener('click', () => {
  paused = !paused;
  try { localStorage.setItem(preferenceKey, String(paused)); } catch { /* Keep the in-memory preference. */ }
  syncMotion();
});
reducedMotion.addEventListener('change', syncMotion);
document.addEventListener('visibilitychange', syncMotion);
window.addEventListener('storage', event => {
  if (event.key === preferenceKey || event.key === null) {
    paused = event.newValue === 'true';
    syncMotion();
  }
});

const motionElements = document.querySelectorAll<HTMLElement>('[data-motion]');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      const element = entry.target as HTMLElement;
      element.dataset.inView = String(entry.isIntersecting);
      if (entry.isIntersecting) element.dataset.seen = 'true';
    }
  }, { threshold: 0.1 });
  motionElements.forEach(element => observer.observe(element));
} else {
  motionElements.forEach(element => { element.dataset.inView = 'true'; element.dataset.seen = 'true'; });
}
syncMotion();

const navigationLinks = [...document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]')];
const sections = [...document.querySelectorAll<HTMLElement>('[data-nav-section]')];
const masthead = document.querySelector<HTMLElement>('[data-sticky-header]');
const mainNavigation = masthead?.querySelector<HTMLElement>('.main-nav');
let navigationHeight = 0;
let navigationFrame = 0;
let stickyHeaderTop = 0;

function setActiveSection(id: string) {
  for (const link of navigationLinks) {
    if (link.dataset.navLink === id) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}

function updateNavigation() {
  navigationFrame = 0;
  if (masthead && mainNavigation) {
    const headerTop = masthead.getBoundingClientRect().top;
    masthead.dataset.stuck = String(window.scrollY > 0 && headerTop <= stickyHeaderTop + 1);
  }
  if (!sections.length) return;
  const navigationTop = mainNavigation?.getBoundingClientRect().top ?? 0;
  let current = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= navigationHeight + Math.max(0, navigationTop) + 32) current = section;
  }
  // The final section can be shorter than the viewport.
  if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
    current = sections[sections.length - 1];
  }
  setActiveSection(current.dataset.navSection || current.id);
}

function requestNavigationUpdate() {
  if (!navigationFrame) navigationFrame = requestAnimationFrame(updateNavigation);
}

function sizeStickyHeader() {
  if (!masthead || !mainNavigation) return;
  // Only the navigation stays on screen; the large newspaper title scrolls away.
  const titleHeight = mainNavigation.getBoundingClientRect().top - masthead.getBoundingClientRect().top;
  navigationHeight = mainNavigation.getBoundingClientRect().height;
  masthead.style.setProperty('--masthead-sticky-top', `${-titleHeight}px`);
  root.style.setProperty('--nav-clearance', `${navigationHeight + 20}px`);
  masthead.dataset.stickyReady = 'true';
  stickyHeaderTop = parseFloat(getComputedStyle(masthead).top);
  requestNavigationUpdate();
}

if (masthead && mainNavigation) {
  sizeStickyHeader();
  if ('ResizeObserver' in window) {
    const headerObserver = new ResizeObserver(sizeStickyHeader);
    headerObserver.observe(masthead);
    headerObserver.observe(mainNavigation);
  }
  document.fonts.ready.then(sizeStickyHeader);
  window.addEventListener('resize', sizeStickyHeader, { passive: true });
  window.addEventListener('scroll', requestNavigationUpdate, { passive: true });
  window.addEventListener('pageshow', requestNavigationUpdate);
}
navigationLinks.forEach(link => link.addEventListener('click', () => {
  if (link.dataset.navLink) setActiveSection(link.dataset.navLink);
}));
