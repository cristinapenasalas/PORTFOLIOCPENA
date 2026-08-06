export type Lang = 'es' | 'en';

export type ProjectType = 'social' | 'web' | 'email' | 'branding';

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

export interface ProjectScreenshot {
  src: string;
  alt: { es: string; en: string };
}

export interface ProjectLink {
  label: { es: string; en: string };
  url: string;
}

export interface GrowthPoint {
  month: string;
  value: number;
}

export interface ProjectGrowth {
  heading: { es: string; en: string };
  caption: { es: string; en: string };
  points: GrowthPoint[];
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
  links?: ProjectLink[];
  screenshots?: ProjectScreenshot[];
  /** Screenshots are narrow scrolling captures (e.g. a phone screenshot of a
   * long email) rather than full-width page/app shots — render them at a
   * controlled size side by side instead of one stretched to full width. */
  compactGallery?: boolean;
  growth?: ProjectGrowth;
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
    links: [
      {
        label: { es: 'Instagram', en: 'Instagram' },
        url: 'https://www.instagram.com/landewyck_espana/',
      },
      {
        label: { es: 'LinkedIn', en: 'LinkedIn' },
        url: 'https://www.linkedin.com/company/landewyck-espana/',
      },
    ],
    screenshots: [
      {
        src: '/case-studies/redes-landewyck/instagram.jpg',
        alt: { es: 'Perfil de Instagram de Landewyck España', en: "Landewyck España's Instagram profile" },
      },
      {
        src: '/case-studies/redes-landewyck/linkedin.jpg',
        alt: { es: 'Página de LinkedIn de Landewyck Tabacos España', en: "Landewyck Tabacos España's LinkedIn page" },
      },
    ],
    growth: {
      heading: { es: 'Crecimiento en Instagram', en: 'Instagram growth' },
      caption: {
        es: 'Seguidores nuevos ganados, 100% orgánico (jul 2025 – jul 2026).',
        en: 'New followers gained, 100% organic (Jul 2025 – Jul 2026).',
      },
      points: [
        { month: '2025-07', value: 25 },
        { month: '2025-08', value: 325 },
        { month: '2025-09', value: 376 },
        { month: '2025-10', value: 395 },
        { month: '2025-11', value: 408 },
        { month: '2025-12', value: 417 },
        { month: '2026-01', value: 449 },
        { month: '2026-02', value: 716 },
        { month: '2026-03', value: 753 },
        { month: '2026-04', value: 1095 },
        { month: '2026-05', value: 1355 },
        { month: '2026-06', value: 1518 },
        { month: '2026-07', value: 1608 },
      ],
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
    links: [
      {
        label: { es: 'Visitar la web', en: 'Visit site' },
        url: 'https://tokepersonal.es/',
      },
    ],
    screenshots: [
      {
        src: '/case-studies/toke-personal/home.jpg',
        alt: { es: 'Página de inicio de Toke Personal', en: 'Toke Personal homepage' },
      },
      {
        src: '/case-studies/toke-personal/catalogo-filtros.jpg',
        alt: {
          es: 'Catálogo con filtros por color, talla, composición y género',
          en: 'Catalog with filters by color, size, composition, and gender',
        },
      },
      {
        src: '/case-studies/toke-personal/catalogo-productos.jpg',
        alt: { es: 'Listado de productos personalizables', en: 'Personalizable products listing' },
      },
      {
        src: '/case-studies/toke-personal/checkout.jpg',
        alt: { es: 'Proceso de compra y checkout', en: 'Checkout and purchase flow' },
      },
    ],
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
    compactGallery: true,
    screenshots: [
      {
        src: '/case-studies/email-landewyck/newsletter-julio-1.png',
        alt: {
          es: 'Newsletter de Club Landewyck de julio, mitad superior',
          en: 'Club Landewyck July newsletter, top half',
        },
      },
      {
        src: '/case-studies/email-landewyck/newsletter-julio-2.png',
        alt: {
          es: 'Newsletter de Club Landewyck de julio, mitad inferior',
          en: 'Club Landewyck July newsletter, bottom half',
        },
      },
      {
        src: '/case-studies/email-landewyck/newsletter-mais-adiante-1.png',
        alt: {
          es: 'Newsletter "Mais Adiante com Landewyck", mitad superior',
          en: '"Mais Adiante com Landewyck" loyalty newsletter, top half',
        },
      },
      {
        src: '/case-studies/email-landewyck/newsletter-mais-adiante-2.png',
        alt: {
          es: 'Newsletter "Mais Adiante com Landewyck", mitad inferior',
          en: '"Mais Adiante com Landewyck" loyalty newsletter, bottom half',
        },
      },
    ],
  },
  {
    slug: 'nima-beauty',
    type: 'branding',
    color: 'pink',
    title: { es: 'Nima Beauty', en: 'Nima Beauty' },
    category: { es: 'Branding', en: 'Branding' },
    tagline: {
      es: 'Una marca de cosmética vegana construida desde cero: identidad, e-commerce, redes y email en un solo proyecto.',
      en: 'A vegan beauty brand built from scratch: identity, e-commerce, social, and email in one project.',
    },
    problem: {
      es: 'Nima Beauty necesitaba construirse desde cero: sin identidad visual, sin presencia digital y sin catálogo de producto.',
      en: 'Nima Beauty needed to be built from the ground up: no visual identity, no digital presence, and no product catalogue.',
    },
    actions: {
      es: [
        'Definición de marca: naming, misión, público objetivo, tono de voz y propuesta de valor (clean beauty sin greenwashing).',
        'Sistema de identidad visual completo: logotipo, isotipo, paleta de color, tipografía y aplicaciones.',
        'Diseño de e-commerce: home y ficha de producto, con fotografía de producto.',
        'Kit de contenido para redes: grid de lanzamiento, posts con copy, guía de tono de voz.',
        'Campaña de email marketing: welcome series de 3 emails (bienvenida, educativo, conversión).',
      ],
      en: [
        'Brand definition: naming, mission, target audience, tone of voice, and value proposition (clean beauty without greenwashing).',
        'Full visual identity system: logo, icon mark, color palette, typography, and applications.',
        'E-commerce design: homepage and product page, with product photography.',
        'Social content kit: launch grid, posts with copy, tone-of-voice guide.',
        'Email marketing campaign: 3-email welcome series (welcome, educational, conversion).',
      ],
    },
    results: {
      es: {
        paragraph:
          'Marca construida de cero a cien: identidad visual completa, e-commerce funcional, presencia en redes con estrategia de contenido definida, y campaña de email activada — un proceso end-to-end que cubre todas las disciplinas de una marca moderna, desde el naming hasta la conversión.',
      },
      en: {
        paragraph:
          'A brand built from zero to a hundred: a complete visual identity, a functional e-commerce design, a social presence with a defined content strategy, and an activated email campaign — an end-to-end process covering every discipline of a modern brand, from naming to conversion.',
      },
    },
    screenshots: [
      {
        src: '/case-studies/nima-beauty/sistema-de-marca.png',
        alt: {
          es: 'Sistema de marca de Nima Beauty: logotipo, isotipo, paleta de color, tipografía y aplicaciones',
          en: "Nima Beauty's brand system: logo, icon mark, color palette, typography, and applications",
        },
      },
      {
        src: '/case-studies/nima-beauty/redes-grid.jpg',
        alt: {
          es: 'Grid de lanzamiento de Instagram de Nima Beauty, con los primeros 6 posts',
          en: "Nima Beauty's Instagram launch grid, with the first 6 posts",
        },
      },
    ],
  },
];

export interface Testimonial {
  name: string;
  role: { es: string; en: string };
  quote: { es: string; en: string };
}

export const testimonials: Testimonial[] = [
  {
    name: 'María G.',
    role: { es: 'Tienda de ropa online', en: 'Online clothing store' },
    quote: {
      es: 'Trabajar contigo fue una de las mejores decisiones para mi negocio. Renovaste nuestra presencia en redes sociales y en pocas semanas empezamos a recibir más consultas y ventas. Siempre estuviste pendiente de cada detalle y de proponer nuevas ideas. ¡Totalmente recomendado!',
      en: "Working with you was one of the best decisions for my business. You revamped our social media presence, and within a few weeks we started getting more inquiries and sales. You were always on top of every detail and full of new ideas. Highly recommended!",
    },
  },
  {
    name: 'Carlos R.',
    role: { es: 'Empresa de servicios', en: 'Service company' },
    quote: {
      es: 'Necesitábamos una página web profesional que transmitiera confianza, y el resultado superó nuestras expectativas. El diseño es moderno, rápido y fácil de navegar. Además, la comunicación durante todo el proyecto fue excelente.',
      en: 'We needed a professional website that conveyed trust, and the result exceeded our expectations. The design is modern, fast, and easy to navigate. Communication throughout the project was excellent too.',
    },
  },
  {
    name: 'Andrea P.',
    role: { es: 'Emprendedora', en: 'Entrepreneur' },
    quote: {
      es: 'Gracias a la estrategia de marketing digital que desarrollaste, aumentamos considerablemente el alcance de nuestras publicaciones y conseguimos nuevos clientes. Se nota el conocimiento y la dedicación en cada paso del proceso.',
      en: "Thanks to the digital marketing strategy you developed, we significantly increased the reach of our posts and gained new clients. You can tell there's real knowledge and dedication behind every step of the process.",
    },
  },
  {
    name: 'Luis M.',
    role: { es: 'Restaurante', en: 'Restaurant' },
    quote: {
      es: 'Nuestra presencia en redes sociales cambió por completo. Las publicaciones tienen una imagen profesional y ahora interactuamos mucho más con nuestros clientes. Hemos recibido comentarios muy positivos desde que empezamos a trabajar juntos.',
      en: "Our social media presence changed completely. Posts now have a professional look, and we interact with our customers much more. We've received very positive feedback since we started working together.",
    },
  },
  {
    name: 'Sofía T.',
    role: { es: 'Centro de bienestar', en: 'Wellness center' },
    quote: {
      es: 'Buscábamos alguien que entendiera nuestra marca y nos ayudara a destacar en internet. El diseño de la web y la gestión de nuestras campañas digitales fueron impecables. Muy profesional, creativo y siempre dispuesto a aportar soluciones.',
      en: 'We were looking for someone who understood our brand and could help us stand out online. The website design and the management of our digital campaigns were flawless. Very professional, creative, and always ready to offer solutions.',
    },
  },
];

export const content = {
  es: {
    seo: {
      home: {
        title: 'Cristina Peña — Comunicación digital & desarrollo web',
        description:
          'Ayudo a marcas y negocios a comunicar mejor en digital: redes sociales, email marketing, webs e IA aplicada al marketing.',
      },
      about: {
        title: 'Sobre mí — Cristina Peña',
        description:
          'Más de 5 años de experiencia en marketing digital, diseño y desarrollo web, y gestión de redes sociales, trabajando con marcas locales y multinacionales.',
      },
      work: {
        title: 'Proyectos — Cristina Peña',
        description:
          'Estudios de caso de redes sociales, diseño web y email marketing: el problema, qué hice, y el resultado, con métricas reales.',
      },
      services: {
        title: 'Servicios — Cristina Peña',
        description:
          'Gestión de redes sociales, diseño y desarrollo web, email marketing e inteligencia artificial aplicada al marketing, adaptado a lo que tu marca necesite.',
      },
      contact: {
        title: 'Contacto — Cristina Peña',
        description:
          'Escríbeme a cristina.pena3108@gmail.com, llama al +34 675 666 728 o rellena el formulario para hablar de tu proyecto.',
      },
      privacy: {
        title: 'Aviso de privacidad — Cristina Peña',
        description: 'Información sobre el tratamiento de tus datos cuando me contactas a través de este sitio web.',
      },
      notFound: {
        title: 'Página no encontrada — Cristina Peña',
        description: 'La página que buscas no existe o se ha movido.',
      },
    },
    skipLink: 'Saltar al contenido',
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      work: 'Proyectos',
      services: 'Servicios',
      contact: 'Contacto',
    },
    a11y: {
      homeLink: 'Cristina Peña — inicio',
      mainNav: 'Principal',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
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
    testimonials: {
      eyebrow: 'Reseñas',
      heading: 'Lo que dicen mis clientes.',
    },
    work: {
      eyebrow: 'Proyectos',
      heading: 'Estudios de caso.',
      support: 'Comunicación digital y desarrollo web, de principio a fin: el problema, lo que hice, y el resultado.',
      filterAll: 'Todos',
      filterLabel: 'Filtrar por categoría',
      listHeading: 'Todos los proyectos',
      viewCase: 'Ver caso',
    },
    caseStudy: {
      back: 'Proyectos',
      problem: 'El problema',
      actions: 'Qué hice',
      result: 'El resultado',
      next: 'Siguiente proyecto',
      gallery: 'Capturas del resultado',
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
      photoAlt: 'Retrato de Cristina Peña',
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
        consentBefore: 'Al enviar este formulario, tus datos se usarán solo para responder a tu consulta. Más información en el ',
        consentLinkLabel: 'aviso de privacidad',
        consentAfter: '.',
      },
      labels: {
        email: 'Email',
        phone: 'Teléfono',
        linkedin: 'LinkedIn',
      },
    },
    privacy: {
      eyebrow: 'Privacidad',
      heading: 'Aviso de privacidad.',
      updated: 'Última actualización: julio de 2026',
      intro:
        'Este aviso explica qué ocurre con tus datos cuando me escribes a través del formulario de contacto, por email o por teléfono.',
      sections: [
        {
          heading: 'Responsable',
          paragraphs: ['Cristina Peña. Contacto: cristina.pena3108@gmail.com.'],
        },
        {
          heading: 'Finalidad',
          paragraphs: [
            'Gestionar y responder a las consultas que me envíes a través del formulario de contacto, email o teléfono.',
          ],
        },
        {
          heading: 'Legitimación',
          paragraphs: ['El consentimiento que me das al enviarme voluntariamente tus datos.'],
        },
        {
          heading: 'Cómo funciona el formulario de contacto',
          paragraphs: [
            'El formulario no envía tus datos a ningún servidor ni base de datos: al pulsar "Enviar mensaje" se abre tu propio cliente de correo con un email prerrellenado para que lo envíes tú directamente a mi dirección. Solo recibo lo que decidas enviarme, igual que con cualquier otro email.',
          ],
        },
        {
          heading: 'Destinatarios',
          paragraphs: ['No cedo tus datos a terceros.'],
        },
        {
          heading: 'Conservación',
          paragraphs: [
            'Conservo los datos mientras sea necesario para atender tu consulta o mantener la relación profesional, y los elimino cuando dejen de serlo.',
          ],
        },
        {
          heading: 'Tus derechos',
          paragraphs: [
            'Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a cristina.pena3108@gmail.com.',
          ],
        },
        {
          heading: 'Cookies y analítica',
          paragraphs: ['Esta web no utiliza cookies de seguimiento ni herramientas de analítica de terceros.'],
        },
      ],
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
      privacy: 'Aviso de privacidad',
    },
  },
  en: {
    seo: {
      home: {
        title: 'Cristina Peña — Digital communication & web development',
        description:
          'I help brands and businesses communicate better online: social media, email marketing, websites, and AI applied to marketing.',
      },
      about: {
        title: 'About — Cristina Peña',
        description:
          "5+ years of experience in digital marketing, design and web development, and social media management, working with local brands and multinationals.",
      },
      work: {
        title: 'Work — Cristina Peña',
        description:
          'Case studies in social media, web design, and email marketing: the problem, what I did, and the result, with real metrics.',
      },
      services: {
        title: 'Services — Cristina Peña',
        description:
          'Social media management, web design & development, email marketing, and AI applied to marketing, tailored to what your brand needs.',
      },
      contact: {
        title: 'Contact — Cristina Peña',
        description:
          'Email cristina.pena3108@gmail.com, call +34 675 666 728, or fill out the form to talk about your project.',
      },
      privacy: {
        title: 'Privacy notice — Cristina Peña',
        description: 'Information about how your data is handled when you contact me through this website.',
      },
      notFound: {
        title: 'Page not found — Cristina Peña',
        description: "The page you're looking for doesn't exist or has moved.",
      },
    },
    skipLink: 'Skip to content',
    nav: {
      home: 'Home',
      about: 'About',
      work: 'Work',
      services: 'Services',
      contact: 'Contact',
    },
    a11y: {
      homeLink: 'Cristina Peña — home',
      mainNav: 'Main',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
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
    testimonials: {
      eyebrow: 'Reviews',
      heading: 'What my clients say.',
    },
    work: {
      eyebrow: 'Work',
      heading: 'Case studies.',
      support: 'Digital communication and web development, start to finish: the problem, what I did, and the result.',
      filterAll: 'All',
      filterLabel: 'Filter by category',
      listHeading: 'All projects',
      viewCase: 'View case',
    },
    caseStudy: {
      back: 'Work',
      problem: 'The problem',
      actions: 'What I did',
      result: 'The result',
      next: 'Next project',
      gallery: 'Screenshots of the result',
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
      photoAlt: 'Portrait of Cristina Peña',
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
        consentBefore: "By sending this form, your data will only be used to reply to your message. More information in the ",
        consentLinkLabel: 'privacy notice',
        consentAfter: '.',
      },
      labels: {
        email: 'Email',
        phone: 'Phone',
        linkedin: 'LinkedIn',
      },
    },
    privacy: {
      eyebrow: 'Privacy',
      heading: 'Privacy notice.',
      updated: 'Last updated: July 2026',
      intro:
        "This notice explains what happens to your data when you write to me through the contact form, by email, or by phone.",
      sections: [
        {
          heading: 'Data controller',
          paragraphs: ['Cristina Peña. Contact: cristina.pena3108@gmail.com.'],
        },
        {
          heading: 'Purpose',
          paragraphs: [
            'To manage and respond to enquiries you send me through the contact form, email, or phone.',
          ],
        },
        {
          heading: 'Legal basis',
          paragraphs: ['The consent you give by voluntarily sending me your data.'],
        },
        {
          heading: 'How the contact form works',
          paragraphs: [
            'The form does not send your data to any server or database: clicking "Send message" opens your own email client with a pre-filled email for you to send directly to my address. I only receive what you choose to send me, just like with any other email.',
          ],
        },
        {
          heading: 'Recipients',
          paragraphs: ["I don't share your data with third parties."],
        },
        {
          heading: 'Retention',
          paragraphs: [
            'I keep your data for as long as needed to handle your enquiry or maintain our professional relationship, and delete it once it is no longer needed.',
          ],
        },
        {
          heading: 'Your rights',
          paragraphs: [
            'You can exercise your rights of access, rectification, erasure, objection, restriction, and portability by writing to cristina.pena3108@gmail.com.',
          ],
        },
        {
          heading: 'Cookies & analytics',
          paragraphs: ['This website does not use tracking cookies or third-party analytics tools.'],
        },
      ],
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
      privacy: 'Privacy notice',
      linkedin: 'LinkedIn',
    },
  },
} as const;
