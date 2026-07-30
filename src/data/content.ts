export type Lang = 'es' | 'en';

export interface FeaturedProject {
  slug: string;
  title: { es: string; en: string };
  category: { es: string; en: string };
  tagline: { es: string; en: string };
  color: 'pink' | 'blue' | 'amber';
}

export const featuredProjects: FeaturedProject[] = [
  {
    slug: 'redes-landewyck',
    title: { es: 'Comunidad desde cero', en: 'Community from zero' },
    category: { es: 'Redes sociales', en: 'Social media' },
    tagline: {
      es: 'De ~500 seguidores en LinkedIn a una comunidad orgánica en un sector con comunicación muy restringida.',
      en: 'From ~500 LinkedIn followers to an organic community in a heavily regulated industry.',
    },
    color: 'pink',
  },
  {
    slug: 'web-toke-personal',
    title: { es: 'Toke Personal', en: 'Toke Personal' },
    category: { es: 'Diseño y desarrollo web', en: 'Web design & development' },
    tagline: {
      es: 'Rediseño de una tienda online pensado para la venta y para que el equipo la gestione solo.',
      en: 'Online store redesign built for conversion — and for the team to manage on their own.',
    },
    color: 'blue',
  },
  {
    slug: 'email-landewyck',
    title: { es: 'Newsletters con datos propios', en: 'Newsletters, owned audience' },
    category: { es: 'Email marketing', en: 'Email marketing' },
    tagline: {
      es: 'Un canal propio que creció de ~2.800 a ~4.400 contactos con aperturas del 22-29%.',
      en: 'An owned channel that grew from ~2,800 to ~4,400 contacts with 22-29% open rates.',
    },
    color: 'amber',
  },
];

export const content = {
  es: {
    meta: {
      title: 'Cristina Peña — Comunicación digital & desarrollo web',
    },
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      work: 'Proyectos',
      services: 'Servicios',
      contact: 'Contacto',
    },
    themeToggle: { toLight: 'Modo claro', toDark: 'Modo oscuro' },
    langToggle: 'EN',
    hero: {
      eyebrow: 'Cristina Peña',
      headline: 'Especialista en comunicación digital y desarrollo web con 5+ años de experiencia.',
      support:
        'Ayudo a marcas y negocios a comunicar mejor en digital: redes sociales, email marketing, webs e IA aplicada al marketing.',
      scrollCue: 'Proyectos destacados',
    },
    featured: {
      heading: 'Proyectos destacados',
      viewCase: 'Ver caso',
      viewAll: 'Ver todos los proyectos',
    },
    cta: {
      heading: '¿Hablamos de tu proyecto?',
      support: 'Cuéntame qué necesitas y vemos cómo puedo ayudarte a comunicarlo mejor.',
      button: 'Escríbeme',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      email: 'cristina.pena3108@gmail.com',
      linkedin: 'LinkedIn',
    },
  },
  en: {
    meta: {
      title: 'Cristina Peña — Digital communication & web development',
    },
    nav: {
      home: 'Home',
      about: 'About',
      work: 'Work',
      services: 'Services',
      contact: 'Contact',
    },
    themeToggle: { toLight: 'Light mode', toDark: 'Dark mode' },
    langToggle: 'ES',
    hero: {
      eyebrow: 'Cristina Peña',
      headline: 'Digital communication & web development specialist with 5+ years of experience.',
      support:
        'I help brands and businesses communicate better online: social media, email marketing, websites, and AI applied to marketing.',
      scrollCue: 'Featured work',
    },
    featured: {
      heading: 'Featured work',
      viewCase: 'View case',
      viewAll: 'View all work',
    },
    cta: {
      heading: "Let's talk about your project",
      support: "Tell me what you need and let's see how I can help you communicate it better.",
      button: 'Get in touch',
    },
    footer: {
      rights: 'All rights reserved.',
      email: 'cristina.pena3108@gmail.com',
      linkedin: 'LinkedIn',
    },
  },
} as const;
