import type { ImageMetadata } from 'astro';
import profilePhoto from '../assets/foto-perfil-sin-fondo.png';
import andecPreview from '../assets/projects/andec.webp';
import evoxPreview from '../assets/projects/evox.webp';
import tensoPreview from '../assets/projects/tenso.webp';
import type { ProjectTemplate } from '../types/project-details';

export interface PortfolioImage {
  /** Import an image from src/assets; Astro will optimize it at build time. */
  src: ImageMetadata;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  kind: 'freelance' | 'personal';
  template?: ProjectTemplate;
  category: string;
  date?: string;
  summary: string;
  technologies: string[];
  image?: PortfolioImage;
  siteUrl?: string;
  demoUrl?: string;
  /** Set only after the corresponding /proyectos/<slug>/ page exists. */
  detailsUrl?: string;
}

export interface ToolGroup {
  numeral: string;
  title: string;
  items: string[];
  pendingSlots: number;
}

// Replace the undefined values with your real information. No sample URL is live.
export const profile: {
  name?: string;
  role: string;
  location: string;
  introduction: string;
  supportingText: string;
  email?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  xUrl?: string;
  whatsappUrl?: string;
  cvUrl?: string;
  portrait?: PortfolioImage;
} = {
  name: undefined,
  role: 'Ingeniero de software',
  location: 'Lima, Perú',
  introduction:
    'Desarrollador Backend Junior con sólidas bases en Java, POO y Spring Boot. Experiencia práctica construyendo APIs REST y gestionando bases de datos relacionales (SQL).',
  supportingText:
    'Integro herramientas avanzadas de IA como Claude Code y OpenAI Codex en mi flujo de trabajo para acelerar el desarrollo, optimizar testing y garantizar código limpio y mantenible.',
  email: 'adrian.march23@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/adriansoftdev/',
  githubUrl: 'https://github.com/AdriannDev',
  xUrl: 'https://x.com/AdriDevSoft',
  whatsappUrl: 'https://wa.me/51937422519',
  cvUrl: undefined,
  portrait: { src: profilePhoto, alt: 'Retrato del autor del portafolio' },
};

export const publication = {
  title: 'Adrian Dev',
  edition: 'Edición digital · Portafolio personal',
  date: '20 octubre del 2026',
  dateISO: '2026-10-20',
  volume: 'Vol. 1.0',
  projectsUrl: '/proyectos/',
};

// Stacks checked against the local project sources and their public websites.
export const projects: Project[] = [
  {
    id: 'andec-coberturas',
    template: 'static',
    detailsUrl: '/proyectos/andec-coberturas/',
    title: 'ANDEC Coberturas',
    kind: 'freelance',
    category: 'Freelance · Web corporativa',
    summary:
      'Web corporativa para una empresa de coberturas industriales. Presenta sus servicios, catálogo de productos y obras realizadas, con formulario de cotización y contacto por WhatsApp.',
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'MDX'],
    image: { src: andecPreview, alt: 'Portada de ANDEC Coberturas, con sus servicios de coberturas industriales' },
    siteUrl: 'https://andeccoberturas.com/',
  },
  {
    id: 'evox',
    template: 'ecommerce',
    detailsUrl: '/proyectos/evox/',
    title: 'EVOX',
    kind: 'freelance',
    category: 'Freelance · Ecommerce',
    summary:
      'Ecommerce de mobiliario de oficina, sillas ergonómicas y equipos de proyección. Incluye catálogo por categorías, carrito y proceso de compra con funcionalidades personalizadas.',
    technologies: ['WordPress', 'WooCommerce', 'Bricks', 'PHP', 'JavaScript', 'CSS'],
    image: { src: evoxPreview, alt: 'Portada del ecommerce EVOX, especializado en mobiliario de oficina' },
    siteUrl: 'https://evox.com.pe/',
  },
  {
    id: 'tenso-lonas-peru',
    template: 'static',
    detailsUrl: '/proyectos/tenso-lonas-peru/',
    title: 'Tenso Lonas Perú',
    kind: 'freelance',
    category: 'Freelance · Web corporativa',
    summary:
      'Sitio corporativo para una empresa de toldos, carpas y coberturas de lona a medida. Reúne sus servicios y proyectos realizados, con solicitudes de cotización y contacto directo.',
    technologies: ['Astro', 'TypeScript', 'Tailwind CSS', 'PHP'],
    image: { src: tensoPreview, alt: 'Portada de Tenso Lonas Perú con una cobertura instalada sobre un patio deportivo' },
    siteUrl: 'https://tensolonasperu.com/',
  },
  {
    id: 'proyecto-04',
    title: 'Proyecto personal',
    kind: 'personal',
    category: 'Proyecto personal',
    summary:
      'Descripción pendiente. Aquí se presentarán el objetivo del proyecto, su desarrollo y el aporte técnico.',
    technologies: [],
  },
];

/** Completed projects with a public destination; omit the unfinished personal placeholder. */
export const publishedProjects = projects.filter(project => project.siteUrl || project.demoUrl || project.detailsUrl);

export const experience = {
  title: 'Desarrollador independiente',
  period: '2025 — Actualidad',
  entries: [
    'Desarrollé webs corporativas a medida para un cliente del rubro industrial.',
    'Desarrollé un ecommerce para una tienda que vende mobiliario de oficina y proyección.',
    'Desarrollo de proyectos personales centrados en la programación backend y frontend.',
  ],
};

export const education = {
  program: 'Ingeniería de Software',
  institution: 'Universidad Tecnológica del Perú',
  period: '2021 — Actualidad',
  status: 'En curso',
};

// Technologies and skills supplied by the portfolio author.
// Empty groups keep their position until you add the definitive list.
export const toolGroups: ToolGroup[] = [
  { numeral: 'I.', title: 'Herramientas principales', items: ['Java', 'Spring Boot', 'SQL', 'APIs REST', 'POO', 'Astro', 'Tailwind CSS', 'TypeScript', 'JavaScript', 'WordPress', 'WooCommerce', 'SEO'], pendingSlots: 5 },
  { numeral: 'II.', title: 'Arquitectura', items: [], pendingSlots: 5 },
  { numeral: 'III.', title: 'Inteligencia artificial', items: ['Claude Code', 'OpenAI Codex'], pendingSlots: 3 },
  { numeral: 'IV.', title: 'Cloud & Operaciones', items: [], pendingSlots: 3 },
];

export const softSkills: string[] = [
  'Trabajo en equipo',
  'Aprendizaje continuo',
  'Comunicación efectiva',
  'Adaptabilidad',
  'Resolución de problemas',
];
