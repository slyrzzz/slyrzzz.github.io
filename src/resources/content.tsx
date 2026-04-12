import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Justin",
  lastName: "Romaña",
  name: `Justin Romaña`,
  role: "Senior Web Developer & Tech Consultant",
  avatar: "/images/profile2.png",
  email: "jr@jromana.com",
  location: "America/Panama", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Español", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Trabajemos juntos</>,
  description: <>Iniciemos una conversación sobre tu próximo proyecto.</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jarcpty/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/50761416952",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/opengraph.png",
  label: "Home",
  title: "Justin Romaña | Soluciones Digitales 🚀",
  description: `Desarrollador web especializado en transformar ideas en plataformas de alto rendimiento que no solo funcionan, sino que venden.`,
  headline: <>Código que impulsa resultados de negocio</>,
  featured: {
    display: true,
    title: (
      <Row gap="8" vertical="center" paddingX="4">
        <style>
          {`
            @keyframes dot-blink {
              0% { opacity: 1; transform: scale(1); }
              50% { opacity: 0.5; transform: scale(0.9); }
              100% { opacity: 1; transform: scale(1); }
            }
          `}
        </style>
        <div
          style={{
            width: "8px",
            height: "8px",
            backgroundColor: "#22c55e",
            borderRadius: "50%",
            animation: "dot-blink 1.5s infinite ease-in-out"
          }}
        />
        <Text marginRight="4" onBackground="neutral-strong">
          Disponible para nuevos proyectos
        </Text>
      </Row>
    ),
    href: "#trabajemos-juntos",
  },
  subline: (
    <>
      Soy Justin, desarrollador web especializado en transformar ideas en plataformas de <Text as="span" size="xl" weight="strong">alto rendimiento que no solo funcionan, sino que venden</Text>
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Sobre mí",
  title: `Conóceme – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introducción",
    description: (
      <>
        Desarrollador web experto en sitios a medida, landing pages y plataformas complejas tipo marketplace. Implemento sistemas de bases de datos robustos y soluciones digitales eficaces para todo tipo de clientes y negocios.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiencia laboral",
    experiences: [
      {
        company: "Freelance",
        timeframe: "2023 - Presente",
        role: "Senior Full Stack Developer / Project Lead",
        achievements: [
          <>
            Lidero el ciclo completo de desarrollo de productos digitales, desde la arquitectura de base de datos hasta el despliegue en producción, combinando visión comercial con un stack moderno (Next.js, TypeScript, Go, SQL).
          </>,
          <>
            <strong>E-commerce & Marketplaces de Alto Rendimiento:</strong> Desarrollo de plataformas integrales como Ónice y Nowink (Next.js + Saleor) que optimizan conversión y la gestión de inventarios. Arquitectura y despliegue de SkillPTY, marketplace diseñado para conectar oferta y demanda con una experiencia fluida y segura.
          </>,
          <>
            <strong>Plataformas Especializadas y Sistemas de Datos:</strong> Desarrollo de Guder.pro, plataforma compleja para torneos con backend robusto y actualizaciones en tiempo real. Optimización de Panacheck.app enfocándome en bases de datos de alta velocidad para respuesta inmediata en consultas masivas.
          </>,
          <>
            <strong>Identidad Corporativa y Presencia Digital:</strong> Diseño y desarrollo de sitios para empresas y figuras públicas, como Trilogystudio.net y el portafolio de Mario Spinali, priorizando rendimiento, UI/UX impecable y posicionamiento SEO.
          </>,
          <>
            <strong>Soluciones a Medida:</strong> Creación de landing pages de alto impacto para campañas de marketing y sistemas internos personalizados que automatizan procesos críticos para pequeños y medianos negocios.
          </>
        ],
        images: [],
      },
      {
        company: "Loltec",
        timeframe: "2020 - Presente",
        role: "Senior Technology Consultant",
        achievements: [
          <>
            Especialista en soluciones de hardware y asesoría tecnológica estratégica.
          </>,
          <>
            <strong>Asesoría Pro:</strong> Configuración de estaciones de trabajo y servidores de alto rendimiento para perfiles técnicos.
          </>,
          <>
            <strong>Gestión:</strong> Levantamiento de requerimientos complejos y traducción de necesidades de negocio a soluciones técnicas.
          </>,
          <>
            <strong>Infraestructura:</strong> Dominio experto en componentes de hardware, optimización de sistemas y soporte técnico avanzado.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Estudios",
    institutions: [
      {
        name: "Universidad Latina de Panamá",
        description: <>Estudié Ingeniería en sistemas & Publicidad y Mercadeo.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Habilidades técnicas",
    skills: [
      {
        title: "Desarrollo Frontend",
        description: (
          <>Implementación de interfaces de usuario interactivas, responsivas y de alto rendimiento.</>
        ),
        tags: [
          { name: "TypeScript", icon: "document" },
          { name: "Next.js", icon: "nextjs" },
          { name: "React", icon: "rocket" },
          { name: "Tailwind CSS", icon: "figma" },
        ],
        images: [],
      },
      {
        title: "Backend y Bases de Datos",
        description: (
          <>Diseño de arquitecturas escalables, bases de datos robustas e integración sólida de APIs.</>
        ),
        tags: [
          { name: "SQL", icon: "supabase" },
          { name: "Go", icon: "rocket" },
          { name: "Integración de APIs", icon: "globe" },
          { name: "JavaScript", icon: "javascript" },
        ],
        images: [],
      },
      {
        title: "DevOps y Herramientas",
        description: (
          <>Despliegue continuo, virtualización y gestión ágil de infraestructuras de desarrollo.</>
        ),
        tags: [
          { name: "Vercel", icon: "nextjs" },
          { name: "Docker", icon: "rocket" },
          { name: "Ubuntu", icon: "document" },
          { name: "GitHub", icon: "github" },
        ],
        images: [],
      },
      {
        title: "Estrategia y Gestión",
        description: (
          <>Coordinación efectiva de recursos y posicionamiento para que tu negocio llegue más lejos.</>
        ),
        tags: [
          { name: "Gestión de Stakeholders", icon: "person" },
          { name: "SEO", icon: "globe" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Proyectos",
  title: `Proyectos – ${person.name}`,
  description: `Transformando visiones de negocio en experiencias digitales eficientes y escalables.`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
