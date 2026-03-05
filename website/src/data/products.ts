export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  category: string;
  icon: string;
  image: string;
  features: string[];
  benefits: string[];
}

export const products: Product[] = [
  {
    id: 'safecase',
    name: 'SafeCase',
    tagline: 'Entornos laborales libres de acoso',
    description:
      'Sistema ERP especializado en la gestión y prevención del acoso laboral dentro de las empresas. Permite registrar denuncias, gestionar investigaciones internas y garantizar un ambiente de trabajo seguro y confidencial.',
    price: 249.99,
    category: 'Recursos Humanos',
    icon: 'shield',
    image: '/assets/SafeCase.png',
    features: [
      'Módulo de denuncias anónimas y confidenciales',
      'Gestión de casos e investigaciones internas',
      'Dashboard de seguimiento para RRHH',
      'Notificaciones automáticas a responsables',
      'Reportes de cumplimiento y estadísticas',
    ],
    benefits: [
      'Reduce el riesgo legal ante denuncias de acoso',
      'Garantiza confidencialidad total del denunciante',
      'Cumplimiento de normativas laborales vigentes',
      'Mejora el clima organizacional a largo plazo',
    ],
  },
  {
    id: 'legalflow',
    name: 'LegalFlow',
    tagline: 'Administra tu bufete con precisión',
    description:
      'Plataforma integral para la gestión de bufetes de abogados. Centraliza clientes, abogados, expedientes, audiencias, cobros y saldos en un solo sistema, optimizando cada etapa del flujo legal.',
    price: 179.99,
    category: 'Gestión Legal',
    icon: 'briefcase',
    image: '/assets/LegalFlow.png',
    features: [
      'Gestión de clientes y expedientes legales',
      'Asignación de abogados por caso',
      'Control de audiencias y vencimientos',
      'Facturación y seguimiento de saldos',
      'Historial completo de cada caso',
    ],
    benefits: [
      'Elimina pérdidas de información entre casos',
      'Facturación precisa y sin retrasos',
      'Agenda centralizada para todo el equipo legal',
      'Acceso rápido al estado de cada expediente',
    ],
  },
  {
    id: 'homehub',
    name: 'HomeHub',
    tagline: 'Tu hogar inteligente en una sola app',
    description:
      'Aplicación móvil que centraliza el control de todos los dispositivos inteligentes del hogar. Automatiza rutinas, monitorea el consumo energético y mantén tu hogar seguro desde cualquier lugar.',
    price: 329.99,
    category: 'Smart Home',
    icon: 'smartphone',
    image: '/assets/HomeHub.png',
    features: [
      'Control centralizado de dispositivos IoT',
      'Automatización de rutinas y escenas',
      'Monitoreo de consumo energético en tiempo real',
      'Cámaras y sistema de seguridad integrado',
      'Compatible con Alexa, Google Home y Apple HomeKit',
    ],
    benefits: [
      'Ahorra hasta 30% en consumo energético',
      'Control total del hogar desde cualquier lugar',
      'Automatización que simplifica tu día a día',
      'Un solo app para todos tus dispositivos',
    ],
  },
];
