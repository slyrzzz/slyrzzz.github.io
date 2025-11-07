export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  stack: string[];
  slug: string;
  featured: boolean;
  category: string;
  liveUrl: string;
  githubUrl?: string;
  year: string;
  client?: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    text: string;
    author: string;
    position: string;
    company: string;
  };
}

export const projects: Project[] = [
  {
    id: "skillpty",
    title: "Skillpty",
    description: "Marketplace revolucionario que conecta freelancers y empleadores en Panamá, facilitando tanto trabajos online como presenciales. Una plataforma integral que transforma la manera en que se contrata talento independiente en el país.",
    shortDescription: "Marketplace de freelancers en Panamá para trabajos online y presenciales",
    image: "/images/projects/skillpty-preview.svg",
    stack: ["WordPress", "WooCommerce", "PHP", "MySQL", "JavaScript", "CSS3", "Responsive Design"],
    slug: "skillpty",
    featured: true,
    category: "Marketplace",
    liveUrl: "/projects/skillpty/",
    year: "2024",
    client: "Skillpty Team",
    challenge: "Crear un marketplace que uniera a freelancers y empleadores en Panamá, con funcionalidades específicas para el mercado local, incluyendo trabajos presenciales y sistema de pagos integrado.",
    solution: "Desarrollé una plataforma completa usando WordPress como CMS, con WooCommerce para el sistema de pagos, perfiles detallados para freelancers, sistema de búsqueda avanzada, y características específicas para el mercado panameño.",
    results: [
      "Interfaz intuitiva que facilita la conexión entre freelancers y empleadores",
      "Sistema de perfiles completo con portafolios integrados",
      "Búsqueda avanzada por categorías, ubicación y tipo de trabajo",
      "Integración de pagos segura y confiable",
      "Diseño responsivo optimizado para móviles"
    ],
    testimonial: {
      text: "El marketplace que Justin desarrolló superó nuestras expectativas. La plataforma es intuitiva, rápida y perfectamente adaptada al mercado panameño.",
      author: "María González",
      position: "CEO",
      company: "Skillpty"
    }
  },
  {
    id: "guder",
    title: "Guder.pro",
    description: "Plataforma gaming especializada en torneos competitivos de videojuegos. Sistema completo de gestión de competencias, rankings de jugadores, y comunidad gaming integrada que revoluciona la escena competitiva digital.",
    shortDescription: "Plataforma gaming para torneos competitivos y rankings de jugadores",
    image: "/images/projects/guder-preview.svg",
    stack: ["WordPress", "Custom PHP", "MySQL", "JavaScript", "Bootstrap", "Gaming APIs"],
    slug: "guder",
    featured: true,
    category: "Gaming Platform",
    liveUrl: "/projects/guder/",
    year: "2024",
    client: "Guder Gaming",
    challenge: "Desarrollar una plataforma gaming que manejara torneos complejos, sistemas de ranking, perfiles de jugadores, y una experiencia de usuario atractiva para la comunidad gaming.",
    solution: "Creé una plataforma robusta con sistema de torneos automatizado, rankings dinámicos, perfiles de jugadores con estadísticas detalladas, y una interfaz gaming moderna que captura la esencia competitiva.",
    results: [
      "Sistema de torneos completamente automatizado",
      "Rankings dinámicos y estadísticas en tiempo real",
      "Perfiles de jugadores con historiales completos",
      "Diseño gaming inmersivo y responsive",
      "Comunidad activa y engagement alto"
    ]
  },
  {
    id: "vallasgo",
    title: "VallasGO",
    description: "Solución innovadora para la industria publicitaria que digitaliza la gestión de vallas publicitarias, optimizando campañas, ubicaciones estratégicas y métricas de rendimiento en tiempo real.",
    shortDescription: "Plataforma digital para gestión de vallas publicitarias",
    image: "/images/projects/vallasgo-preview.svg",
    stack: ["WordPress", "PHP", "MySQL", "JavaScript", "Maps API", "Analytics"],
    slug: "vallasgo",
    featured: false,
    category: "Business Solution",
    liveUrl: "/projects/vallasgo/",
    year: "2024",
    client: "VallasGO",
    challenge: "Modernizar la industria de vallas publicitarias con una plataforma que permita gestión digital, ubicaciones estratégicas y métricas de rendimiento.",
    solution: "Desarrollé una plataforma integral que digitaliza completamente el proceso de vallas publicitarias, desde la selección de ubicaciones hasta el tracking de métricas, con integración de mapas y analytics.",
    results: [
      "Digitalización completa del proceso de vallas",
      "Integración con mapas para ubicaciones estratégicas",
      "Dashboard de métricas y analytics",
      "Sistema de gestión de campañas",
      "Interfaz intuitiva para clientes y administradores"
    ]
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};