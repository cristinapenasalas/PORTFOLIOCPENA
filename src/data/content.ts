export type Lang = 'es' | 'en';

export type ProjectType = 'social' | 'web' | 'email';

export interface Service {
  type: ProjectType | 'ai';
  color: 'pink' | 'blue' | 'amber';
  title: { es: string; en: string };
  description: { es: string; en: string };
  audience: { es: string; en: string };
}

export const services: Service[] = [
  {
    type: 'social',
    color: 'pink',
    title: { es: 'Gestión de redes sociales', en: 'Social media management' },
    description: {
      es: 'Estrategia, creación de contenido (reels, TikTok, carruseles), edición de foto y vídeo, community management.',
      en: 'Strategy, content creation (reels, TikTok, carousels), photo and video editing, community management.',
    },
    audience: {
      es: 'Para marcas que quieren una presencia constante y con personalidad en redes.',
      en: 'For brands that want a consistent, personality-driven presence on social media.',
    },
  },
  {
    type: 'web',
    color: 'blue',
    title: { es: 'Diseño y desarrollo web', en: 'Web design & development' },
    description: {
      es: 'Creación de páginas web adaptadas a cada marca.',
      en: 'Websites designed and built around each brand.',
    },
    audience: {
      es: 'Para negocios o personas que necesitan una web profesional, a medida y sin complicaciones.',
      en: 'For businesses or individuals who need a professional, custom website without the hassle.',
    },
  },
  {
    type: 'email',
    color: 'amber',
    title: { es: 'Email marketing', en: 'Email marketing' },
    description: {
      es: 'Campañas y automatizaciones con Mailchimp y HubSpot.',
      en: 'Campaigns and automations with Mailchimp and HubSpot.',
    },
    audience: {
      es: 'Comunicación directa que fideliza y convierte, pensada para negocios que quieren mantener el contacto con sus clientes de forma automática y efectiva.',
      en: 'Direct communication that builds loyalty and converts — for businesses that want to stay in touch with their customers automatically and effectively.',
    },
  },
  {
    type: 'ai',
    color: 'pink',
    title: { es: 'Inteligencia artificial aplicada al marketing', en: 'AI applied to marketing' },
    description: {
      es: 'Generación de imágenes y vídeos, agentes de IA para optimizar procesos.',
      en: 'Image and video generation, AI agents that streamline processes.',
    },
    audience: {
      es: 'Contenido y procesos más rápidos, sin perder calidad.',
      en: 'Faster content and processes, without losing quality.',
    },
  },
];

export interface ProjectResult {
  metrics?: { value: string; label: string }[];
  paragraph?: string;
}

export interface Project {
  slug: string;
  type: ProjectType;
  color: 'pink' | 'blue' | 'amber';
  title: { es: string; en: string };
  category: { es: string; en: string };
  tagline: { es: string; en: string };
  problem: { es: string; en: string };
  actions: { es: string[]; en: string[] };
  results: { es: ProjectResult; en: ProjectResult };
}

export const projects: Project[] = [
  {
    slug: 'redes-landewyck',
    type: 'social',
    color: 'pink',
    title: { es: 'Comunidad desde cero', en: 'Community from zero' },
    category: { es: 'Redes sociales', en: 'Social media' },
    tagline: {
      es: 'De ~500 seguidores en LinkedIn a una comunidad orgánica en un sector con comunicación muy restringida.',
      en: 'From ~500 LinkedIn followers to an organic community in a heavily regulated industry.',
    },
    problem: {
      es: 'El proyecto comenzó con presencia únicamente en LinkedIn (~500 seguidores). Al tratarse de una empresa del sector tabacalero, el principal reto no era solo hacer crecer la comunidad, sino hacerlo dentro de un marco legal estricto que impide nombrar productos o marcas, lo que limita enormemente qué se puede comunicar.',
      en: "The project started with a presence limited to LinkedIn (~500 followers). Since the company operates in the tobacco sector, the main challenge wasn't just growing the community — it was doing so within a strict legal framework that prohibits naming products or brands, which severely limits what can be communicated.",
    },
    actions: {
      es: [
        'Definí el público objetivo antes de abrir ningún canal nuevo.',
        'Diseñé una sección en la web corporativa donde los usuarios pueden registrarse para recibir información de la empresa por email: un canal propio y controlado que no depende de la legislación de redes.',
        'Abrí Instagram y Facebook en 2025, publicando contenido permitido: información del sector, eventos de la empresa, y promoción del programa de fidelización ("Club Landewyck") como vía indirecta para mantener el vínculo con el público sin nombrar marcas.',
      ],
      en: [
        'Defined the target audience before opening any new channel.',
        'Designed a section on the corporate website where users can sign up to receive company information by email — an owned, controlled channel independent of social media regulation.',
        'Launched Instagram and Facebook in 2025, publishing permitted content: industry news, company events, and promotion of the loyalty program ("Club Landewyck") as an indirect way to maintain the connection with the audience without naming brands.',
      ],
    },
    results: {
      es: {
        metrics: [
          { value: '2.000+', label: 'seguidores orgánicos en Instagram (1.200 en el primer año), sin inversión publicitaria' },
          { value: '1.015', label: 'seguidores en LinkedIn' },
          { value: '100%', label: 'comunidad construida de forma orgánica, en un sector con comunicación de marca muy restringida' },
        ],
      },
      en: {
        metrics: [
          { value: '2,000+', label: 'organic Instagram followers (1,200 in the first year), with no paid advertising' },
          { value: '1,015', label: 'LinkedIn followers' },
          { value: '100%', label: 'community built organically, in an industry with heavily restricted brand communication' },
        ],
      },
    },
  },
  {
    slug: 'web-toke-personal',
    type: 'web',
    color: 'blue',
    title: { es: 'Toke Personal', en: 'Toke Personal' },
    category: { es: 'Diseño y desarrollo web', en: 'Web design & development' },
    tagline: {
      es: 'Rediseño de una tienda online pensado para la venta y para que el equipo la gestione solo.',
      en: 'Online store redesign built for conversion — and for the team to manage on their own.',
    },
    problem: {
      es: 'Toke Personal, una tienda de artículos personalizados, tenía una web antigua y desactualizada. Su estructura desordenada dificultaba la experiencia de compra: los clientes no encontraban de forma intuitiva los productos que buscaban.',
      en: "Toke Personal, a personalized products store, had an outdated website. Its disorganized structure made for a difficult shopping experience — customers couldn't intuitively find the products they were looking for.",
    },
    actions: {
      es: [
        'Rediseñé la web priorizando el orden y la intuición en la navegación, pensando en el recorrido real del cliente hasta la compra.',
        'La construí de forma que el propio equipo de Toke Personal pudiera actualizarla de manera autónoma, sin depender de conocimientos técnicos.',
      ],
      en: [
        "Redesigned the site prioritizing order and intuitive navigation, built around the customer's real path to purchase.",
        'Built it so the Toke Personal team could update it themselves, with no need for technical knowledge.',
      ],
    },
    results: {
      es: {
        paragraph:
          'Una web más ordenada e intuitiva que mejora la experiencia de compra, y que el cliente puede mantener y actualizar por sí mismo.',
      },
      en: {
        paragraph:
          "A more organized, intuitive site that improves the shopping experience — one the client can maintain and update on their own.",
      },
    },
  },
  {
    slug: 'email-landewyck',
    type: 'email',
    color: 'amber',
    title: { es: 'Newsletters con datos propios', en: 'Newsletters, owned audience' },
    category: { es: 'Email marketing', en: 'Email marketing' },
    tagline: {
      es: 'Un canal propio que creció de ~2.800 a ~4.400 contactos con aperturas del 22-29%.',
      en: 'An owned channel that grew from ~2,800 to ~4,400 contacts with 22-29% open rates.',
    },
    problem: {
      es: 'La empresa necesitaba un canal directo y propio para informar a su base de contactos sobre productos, novedades y noticias del sector, especialmente relevante dado el marco legal restrictivo del sector, que limita la comunicación en redes sociales.',
      en: 'The company needed a direct, owned channel to inform its contact base about products, updates, and industry news — especially relevant given the sector\'s restrictive legal framework, which limits communication on social media.',
    },
    actions: {
      es: [
        'Diseñé de principio a fin las campañas de email marketing: segmentación de la base de datos, automatización de envíos y creación del contenido, usando Mailchimp y HubSpot.',
        'La base inicial de ~2.800 contactos en 2023 partía de contactos internos conseguidos gracias al equipo comercial.',
      ],
      en: [
        'Designed the email marketing campaigns end to end: database segmentation, send automation, and content creation, using Mailchimp and HubSpot.',
        'The initial base of ~2,800 contacts in 2023 came from internal contacts secured through the sales team.',
      ],
    },
    results: {
      es: {
        metrics: [
          { value: '22–29%', label: 'índices de apertura, consistentemente por encima de la media del sector' },
          { value: '~4.400', label: 'contactos en la base de suscriptores (desde ~2.800 en 2023)' },
          { value: '3+ años', label: 'de campañas activas y comunicación recurrente' },
        ],
      },
      en: {
        metrics: [
          { value: '22–29%', label: 'open rates, consistently above the industry average' },
          { value: '~4,400', label: 'subscribers in the base (up from ~2,800 in 2023)' },
          { value: '3+ years', label: 'of active, recurring campaigns' },
        ],
      },
    },
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
    work: {
      eyebrow: 'Proyectos',
      heading: 'Estudios de caso.',
      support: 'Comunicación digital y desarrollo web, de principio a fin: el problema, lo que hice, y el resultado.',
      filterAll: 'Todos',
      viewCase: 'Ver caso',
    },
    caseStudy: {
      back: 'Proyectos',
      problem: 'El problema',
      actions: 'Qué hice',
      result: 'El resultado',
      next: 'Siguiente proyecto',
    },
    services: {
      eyebrow: 'Servicios',
      heading: 'Cómo puedo ayudarte.',
      support: 'Cuatro formas de trabajar juntas, según lo que tu marca necesite ahora mismo.',
      viewWork: 'Ver proyectos',
    },
    about: {
      eyebrow: 'Sobre mí',
      heading: 'De la estrategia al código.',
      paragraphs: [
        'Con más de 5 años de experiencia en marketing digital, diseño y desarrollo web, y gestión de redes sociales, ayudo a marcas a construir una presencia digital coherente y efectiva. He trabajado tanto con pequeñas marcas y empresas locales como con multinacionales, adaptando cada proyecto a las necesidades y el tamaño del cliente.',
        'Combino la estrategia de comunicación con la ejecución técnica y creativa: gestión de redes sociales (reels, TikTok, carruseles, edición de foto y vídeo, community management), email marketing (Mailchimp, HubSpot), creación de páginas web y el uso de inteligencia artificial para generar imágenes, vídeos y agentes que optimizan procesos. Esa visión de 360º me permite ofrecer soluciones completas, desde una campaña en redes hasta la web que la sostiene.',
      ],
      highlights: [
        { value: '5+', label: 'años de experiencia' },
        { value: '360º', label: 'estrategia + ejecución' },
        { value: 'Local → global', label: 'de pequeñas marcas a multinacionales' },
      ],
      skillsHeading: 'Con qué trabajo',
      skillGroups: [
        {
          title: 'Redes sociales',
          items: ['Reels y TikTok', 'Carruseles', 'Edición de foto y vídeo', 'Community management'],
        },
        {
          title: 'Email marketing',
          items: ['Mailchimp', 'HubSpot', 'Segmentación', 'Automatización'],
        },
        {
          title: 'Diseño y desarrollo web',
          items: ['Diseño UX', 'Desarrollo a medida', 'Autonomía para el cliente'],
        },
        {
          title: 'IA aplicada al marketing',
          items: ['Generación de imágenes', 'Generación de vídeo', 'Agentes de automatización'],
        },
      ],
    },
    cta: {
      heading: '¿Hablamos de tu proyecto?',
      support: 'Cuéntame qué necesitas y vemos cómo puedo ayudarte a comunicarlo mejor.',
      button: 'Escríbeme',
    },
    contact: {
      eyebrow: 'Contacto',
      heading: 'Hablemos de tu proyecto.',
      support:
        'Cuéntame qué necesitas y te respondo lo antes posible. También puedes escribirme o llamarme directamente.',
      directHeading: 'Contacto directo',
      formHeading: 'Envíame un mensaje',
      form: {
        name: 'Nombre',
        namePlaceholder: 'Tu nombre',
        email: 'Email',
        emailPlaceholder: 'tu@email.com',
        message: 'Cuéntame tu proyecto',
        messagePlaceholder: '¿En qué puedo ayudarte?',
        submit: 'Enviar mensaje',
      },
      labels: {
        email: 'Email',
        phone: 'Teléfono',
        linkedin: 'LinkedIn',
      },
    },
    notFound: {
      eyebrow: '404',
      heading: 'Esta página no existe.',
      support: 'Puede que el enlace esté roto o que la página se haya movido.',
      cta: 'Volver al inicio',
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
    work: {
      eyebrow: 'Work',
      heading: 'Case studies.',
      support: 'Digital communication and web development, start to finish: the problem, what I did, and the result.',
      filterAll: 'All',
      viewCase: 'View case',
    },
    caseStudy: {
      back: 'Work',
      problem: 'The problem',
      actions: 'What I did',
      result: 'The result',
      next: 'Next project',
    },
    services: {
      eyebrow: 'Services',
      heading: 'How I can help.',
      support: 'Four ways to work together, depending on what your brand needs right now.',
      viewWork: 'View work',
    },
    about: {
      eyebrow: 'About',
      heading: 'From strategy to code.',
      paragraphs: [
        "With more than 5 years of experience in digital marketing, design and web development, and social media management, I help brands build a coherent, effective digital presence. I've worked with small local brands and businesses as well as multinational companies, adapting each project to the client's needs and scale.",
        "I combine communication strategy with technical and creative execution: social media management (reels, TikTok, carousels, photo and video editing, community management), email marketing (Mailchimp, HubSpot), website design and development, and the use of artificial intelligence to generate images, video, and agents that streamline processes. That 360° view lets me offer complete solutions — from a social campaign to the website that supports it.",
      ],
      highlights: [
        { value: '5+', label: 'years of experience' },
        { value: '360°', label: 'strategy + execution' },
        { value: 'Local → global', label: 'from small brands to multinationals' },
      ],
      skillsHeading: 'What I work with',
      skillGroups: [
        {
          title: 'Social media',
          items: ['Reels & TikTok', 'Carousels', 'Photo & video editing', 'Community management'],
        },
        {
          title: 'Email marketing',
          items: ['Mailchimp', 'HubSpot', 'Segmentation', 'Automation'],
        },
        {
          title: 'Web design & development',
          items: ['UX design', 'Custom development', 'Client self-sufficiency'],
        },
        {
          title: 'AI applied to marketing',
          items: ['Image generation', 'Video generation', 'Automation agents'],
        },
      ],
    },
    cta: {
      heading: "Let's talk about your project",
      support: "Tell me what you need and let's see how I can help you communicate it better.",
      button: 'Get in touch',
    },
    contact: {
      eyebrow: 'Contact',
      heading: "Let's talk about your project.",
      support:
        "Tell me what you need and I'll get back to you as soon as possible. You can also email or call me directly.",
      directHeading: 'Direct contact',
      formHeading: 'Send me a message',
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'you@email.com',
        message: 'Tell me about your project',
        messagePlaceholder: 'How can I help?',
        submit: 'Send message',
      },
      labels: {
        email: 'Email',
        phone: 'Phone',
        linkedin: 'LinkedIn',
      },
    },
    notFound: {
      eyebrow: '404',
      heading: "This page doesn't exist.",
      support: 'The link might be broken, or the page may have moved.',
      cta: 'Back to home',
    },
    footer: {
      rights: 'All rights reserved.',
      email: 'cristina.pena3108@gmail.com',
      linkedin: 'LinkedIn',
    },
  },
} as const;
