export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  price?: string;
  popular?: boolean;
}

export const services: Service[] = [
  {
    id: "portfolio",
    icon: "🎨",
    title: "Portafolio Personal",
    description: "Tu carta de presentación digital que convierte visitantes en oportunidades. Diseño moderno, optimizado para conversión y rendimiento ultrarrápido.",
    features: [
      "Diseño moderno y personalizado",
      "Optimización SEO completa",
      "Velocidad de carga ultrarrápida",
      "Responsive design perfecto",
      "Formulario de contacto integrado",
      "Google Analytics configurado",
      "Hosting y dominio incluido (1 año)"
    ],
    price: "$800"
  },
  {
    id: "business",
    icon: "🏢",
    title: "Sitio Web de Negocio",
    description: "Presencia online profesional que genera confianza y convierte visitantes en clientes. Motor de venta digital para hacer crecer tu negocio.",
    features: [
      "Estrategia de conversión integrada",
      "Diseño centrado en el usuario",
      "Optimización para buscadores",
      "Integración con redes sociales",
      "Sistema de testimonios",
      "Blog profesional incluido",
      "Capacitación para gestión de contenido",
      "Soporte técnico 3 meses"
    ],
    price: "$1,500",
    popular: true
  },
  {
    id: "ecommerce",
    icon: "🛒",
    title: "Tienda Online",
    description: "Plataforma de comercio electrónico completa que maximiza ventas. Sistema de pagos integrado, gestión de inventario y experiencia de compra optimizada.",
    features: [
      "Catálogo de productos ilimitado",
      "Carrito de compras optimizado",
      "Múltiples métodos de pago",
      "Gestión de inventario automática",
      "Panel de administración completo",
      "Email marketing automatizado",
      "Analytics de ventas detallado",
      "Certificado SSL incluido",
      "Soporte técnico 6 meses"
    ],
    price: "$2,500"
  },
  {
    id: "webapp",
    icon: "⚡",
    title: "Aplicación Web",
    description: "Soluciones web personalizadas para necesidades específicas. Desde sistemas de gestión hasta plataformas complejas, tecnología de vanguardia.",
    features: [
      "Desarrollo a medida",
      "Tecnologías modernas (React, Vue, Astro)",
      "Base de datos optimizada",
      "API REST integrada",
      "Dashboard administrativo",
      "Autenticación de usuarios",
      "Escalabilidad garantizada",
      "Documentación técnica completa",
      "Soporte y mantenimiento incluido"
    ],
    price: "$3,500"
  },
  {
    id: "redesign",
    icon: "🔄",
    title: "Rediseño Web",
    description: "Transformación completa de tu sitio web existente. Mejoramos diseño, velocidad, SEO y conversión manteniendo tu contenido valioso.",
    features: [
      "Auditoría completa del sitio actual",
      "Migración segura de contenido",
      "Mejora de velocidad de carga",
      "Optimización SEO avanzada",
      "Diseño responsive moderno",
      "Mejora de experiencia de usuario",
      "Redirecciones 301 configuradas",
      "Testing de funcionalidad completo"
    ],
    price: "$1,200"
  },
  {
    id: "maintenance",
    icon: "🛠️",
    title: "Mantenimiento Web",
    description: "Mantén tu sitio web seguro, actualizado y funcionando perfectamente. Actualizaciones, backups, monitoreo y soporte técnico continuo.",
    features: [
      "Actualizaciones de seguridad",
      "Backups automáticos diarios",
      "Monitoreo de uptime 24/7",
      "Optimización de velocidad",
      "Soporte técnico prioritario",
      "Reportes mensuales detallados",
      "Cambios menores incluidos",
      "Certificado SSL renovación"
    ],
    price: "$150/mes"
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getPopularServices = (): Service[] => {
  return services.filter(service => service.popular);
};

export const getMainServices = (): Service[] => {
  return services.slice(0, 4); // Primeros 4 servicios para la página principal
};