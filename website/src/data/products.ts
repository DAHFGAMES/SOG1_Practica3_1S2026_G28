export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  category: string;
  icon: string;
  features: string[];
  benefits: string[];
}

export const products: Product[] = [
  {
    id: 'quetzal-erp-lite',
    name: 'QuetzalERP Lite',
    tagline: 'Gestión empresarial simplificada',
    description:
      'Módulo ERP ligero y preconstruido para pequeñas y medianas empresas. Incluye gestión de inventario, facturación básica y reportes financieros listos para integrar en cualquier plataforma web.',
    price: 249.99,
    category: 'ERP',
    icon: 'database',
    features: [
      'Gestión de inventario en tiempo real',
      'Facturación electrónica automatizada',
      'Dashboard de reportes financieros',
      'API REST lista para integración',
      'Exportación a Excel y PDF',
    ],
    benefits: [
      'Reduce el tiempo de gestión administrativa en un 60%',
      'Sin necesidad de infraestructura propia',
      'Implementación en menos de 24 horas',
      'Soporte técnico por 6 meses incluido',
    ],
  },
  {
    id: 'webforge-kit',
    name: 'WebForge Kit',
    tagline: 'Componentes web profesionales',
    description:
      'Colección premium de componentes y plantillas web preconstruidos con React. Incluye sistema de diseño completo, formularios avanzados, tablas dinámicas y dashboards interactivos listos para producción.',
    price: 179.99,
    category: 'Desarrollo Web',
    icon: 'code',
    features: [
      '50+ componentes React reutilizables',
      'Sistema de diseño con temas personalizables',
      'Formularios con validación avanzada',
      'Tablas con ordenamiento y filtrado',
      'Plantillas de landing pages y dashboards',
    ],
    benefits: [
      'Acelera el desarrollo web hasta 3x más rápido',
      'Código limpio y documentado',
      'Compatible con los frameworks más populares',
      'Actualizaciones gratuitas por 1 año',
    ],
  },
  {
    id: 'applaunch-sdk',
    name: 'AppLaunch SDK',
    tagline: 'Tu app móvil en tiempo récord',
    description:
      'Kit de desarrollo móvil multiplataforma con módulos preconstruidos para autenticación, notificaciones push, pagos in-app y analytics. Compatible con React Native e incluye plantillas de UI modernas.',
    price: 329.99,
    category: 'Apps Móviles',
    icon: 'smartphone',
    features: [
      'Módulo de autenticación (OAuth, biométrico)',
      'Sistema de notificaciones push',
      'Integración de pagos in-app',
      'Analytics y tracking de usuarios',
      'UI Kit con 30+ pantallas prediseñadas',
    ],
    benefits: [
      'Lanza tu app móvil en semanas, no meses',
      'Multiplataforma: iOS y Android con un solo código',
      'Reduce costos de desarrollo en un 40%',
      'Documentación completa y ejemplos funcionales',
    ],
  },
];
