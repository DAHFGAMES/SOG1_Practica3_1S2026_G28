# Informe Ejecutivo
## Plataforma E-Commerce de Software Empaquetado — QuetzalDev
### Versión 1.0 | Marzo 2026 | Confidencial — Solo para Junta Directiva

---

> **Resumen de alto nivel:** QuetzalDev lanza un canal de ventas digital para comercializar tres productos de software empaquetado (SafeCase, LegalFlow y HomeHub), aprovechando el conocimiento técnico interno y reduciendo la dependencia exclusiva de proyectos a la medida. El modelo e-commerce de producto estándar abre una fuente de ingresos recurrentes, escalable y de bajo costo marginal.

---

## Tabla de Contenidos

1. [Introducción](#1-introducción)
2. [Objetivos del Informe](#2-objetivos-del-informe)
3. [Alcance del Proyecto](#3-alcance-del-proyecto)
4. [Productos de Software](#4-productos-de-software)
5. [Investigación de Competidores](#5-investigación-de-competidores)
6. [Análisis de Entorno Estratégico](#6-análisis-de-entorno-estratégico)
7. [Arquitectura de Información y Desarrollo Web](#7-arquitectura-de-información-y-desarrollo-web)
8. [Mapeo del Ecosistema TIC — Metodología M3](#8-mapeo-del-ecosistema-tic--metodología-m3)
9. [Planificación Ágil](#9-planificación-ágil)
10. [Conclusiones](#10-conclusiones)

---

## 1. Introducción

### 1.1 Contexto del Problema

La industria global del software experimenta un crecimiento sostenido que supera el 11 % anual, impulsado por la transformación digital de las empresas, la masificación de dispositivos IoT y la adopción generalizada de soluciones en la nube. En Guatemala y la región centroamericana, este fenómeno se traduce en una demanda creciente de soluciones de software funcionales, asequibles y de implementación rápida, particularmente en segmentos como la gestión de recursos humanos, la administración legal y la automatización del hogar.

**QuetzalDev** — empresa especializada en servicios de ERP, Desarrollo Web y Apps Móviles — posee el capital intelectual, los procesos y los activos de código suficientes para atender esta demanda. Sin embargo, hasta la fecha opera bajo un modelo exclusivo de proyectos a la medida, lo cual limita su escalabilidad, genera ingresos intermitentes y no capitaliza el conocimiento acumulado en sus desarrollos anteriores.

### 1.2 La Solución Propuesta

Este informe presenta la propuesta de diseño, análisis e implementación de una **plataforma de comercio electrónico propia** destinada a comercializar tres productos de software empaquetado derivados de los servicios base de QuetzalDev. La plataforma ofrece:

- Un canal de venta disponible **24/7**, accesible desde cualquier dispositivo.
- Un proceso de compra estructurado: catálogo → carrito → checkout → recibo.
- Tres productos listos para operar en menos de **24 horas** tras la compra.
- Un modelo de ingresos **predecible y escalable** sin incremento lineal de costos operativos.

La propuesta no reemplaza el modelo de proyectos a la medida; lo complementa con una línea de productos estándar de alto valor y bajo costo de distribución.

---

## 2. Objetivos del Informe

### 2.1 Objetivo General (Metodología SMART)

> **Diseñar y presentar, al cierre del primer trimestre de 2026, una plataforma de e-commerce funcional para QuetzalDev que ofrezca tres productos de software empaquetado — SafeCase (Q249.99), LegalFlow (Q179.99) y HomeHub (Q329.99) —, respaldada por un análisis estratégico completo (VUCA, PEST, Porter, FODA/TOWS, SOAR) y una planificación ágil en dos sprints, con el propósito de abrir un nuevo canal de ingresos recurrentes que genere al menos 15 ventas digitales en el primer mes de operación.**

Este objetivo es:
- **Específico:** Define producto, precio y canal con precisión.
- **Medible:** Meta cuantificable de 15 ventas en el primer mes.
- **Alcanzable:** La infraestructura técnica (React + Vite + TypeScript) ya fue desarrollada.
- **Relevante:** Responde directamente a la brecha de escalabilidad identificada.
- **Temporal:** Enmarcado en el primer trimestre 2026.

### 2.2 Objetivos Específicos

1. **Analítico:** Realizar un diagnóstico estratégico del entorno competitivo de QuetzalDev mediante los marcos VUCA, Diamante de Porter, PEST, 5 Fuerzas de Porter, FODA, TOWS y SOAR, con el fin de identificar las ventajas competitivas sostenibles de la empresa para el lanzamiento de productos empaquetados.

2. **De Plataforma:** Documentar la arquitectura de información, el flujo de usuario y las decisiones técnicas de la plataforma e-commerce desarrollada en React 18 + TypeScript + Vite, garantizando que el carrito, checkout y recibo de compra operen correctamente para los tres productos listados.

3. **De Planificación:** Estructurar la hoja de ruta del proyecto en dos sprints ágiles con tareas claras, criterios de aceptación y responsables definidos, para asegurar una entrega ordenada y verificable de todos los entregables del proyecto.

---

## 3. Alcance del Proyecto

### 3.1 Incluido en esta Propuesta

| Área | Entregables |
|---|---|
| **Análisis estratégico** | VUCA, Diamante de Porter, PEST, 5 Fuerzas, FODA, TOWS, SOAR |
| **Investigación de mercado** | Tabla de 10 competidores con insight principal |
| **Definición de producto** | Fichas completas de SafeCase, LegalFlow y HomeHub |
| **Plataforma web** | SPA (React + TypeScript + Vite) con 6 vistas funcionales |
| **Flujo de compra** | Catálogo → Carrito → Checkout → Recibo → Bienvenida |
| **Mapeo TIC (M3)** | Medios, Mensajes y Mecanismos del ecosistema digital |
| **Planificación ágil** | Sprint 1 (Análisis + Diseño) y Sprint 2 (Desarrollo + Entrega) |
| **Documentación** | Presente Informe Ejecutivo en formato Markdown |

### 3.2 Fuera del Alcance (Esta Versión)

- Integración con pasarela de pagos real (Stripe, Visanet, BAM).
- Panel de administración con autenticación y gestión de inventario.
- Notificaciones por email (SendGrid / Mailgun).
- Versión nativa mobile (Android/iOS) de la plataforma de ventas.
- Módulo de analytics y reportes de ventas en tiempo real.

Estos ítems se consideran candidatos para una **Fase 2** posterior al lanzamiento.

---

## 4. Productos de Software

QuetzalDev deriva sus tres productos empaquetados directamente de sus líneas de servicio establecidas: ERP, Desarrollo Web y Apps Móviles. Cada producto nace de un módulo real desarrollado para un cliente previo, generalizado y empaquetado para comercialización masiva.

---

### 4.1 SafeCase — *Entornos laborales libres de acoso*

| Atributo | Detalle |
|---|---|
| **Nombre comercial** | SafeCase |
| **Categoría** | Recursos Humanos |
| **Servicio base** | ERP (módulo de Gestión de RRHH) |
| **Precio** | **Q 249.99** (pago único, licencia por empresa) |
| **Tagline** | "Entornos laborales libres de acoso" |

**Descripción:**
SafeCase es un sistema ERP especializado en la gestión, prevención y resolución del acoso laboral dentro de las organizaciones. Permite a los departamentos de Recursos Humanos registrar denuncias de forma anónima, gestionar investigaciones internas con trazabilidad completa y generar reportes de cumplimiento normativo, garantizando en todo momento la confidencialidad del denunciante y el seguimiento transparente del caso.

**Funcionalidades:**

1. **Módulo de denuncias anónimas y confidenciales** — canal seguro para que cualquier colaborador reporte una situación sin exponer su identidad.
2. **Gestión de casos e investigaciones internas** — flujo de trabajo estructurado con estados (recibida, en investigación, resuelta, archivada) y asignación de responsables.
3. **Dashboard de seguimiento para RRHH** — panel visual con indicadores de casos activos, tiempo promedio de resolución y distribución por departamento.
4. **Notificaciones automáticas a responsables** — alertas en tiempo real al abrir, actualizar o cerrar un caso, minimizando retrasos.
5. **Reportes de cumplimiento y estadísticas** — exportación de informes en PDF/Excel para presentar ante auditorías internas o entes reguladores.

**Beneficios Estratégicos:**

1. Reduce el **riesgo legal** ante denuncias de acoso al tiempo mediante protocolos documentados y auditables.
2. Garantiza la **confidencialidad total** del denunciante, fomentando una cultura de confianza organizacional.
3. Facilita el **cumplimiento de normativas laborales** vigentes (Ley de Trabajo, reglamentos internos).
4. Mejora el **clima organizacional a largo plazo**, impactando positivamente la retención de talento.

---

### 4.2 LegalFlow — *Administra tu bufete con precisión*

| Atributo | Detalle |
|---|---|
| **Nombre comercial** | LegalFlow |
| **Categoría** | Gestión Legal |
| **Servicio base** | ERP + Desarrollo Web (módulo de gestión de bufetes) |
| **Precio** | **Q 179.99** (pago único, licencia por bufete) |
| **Tagline** | "Administra tu bufete con precisión" |

**Descripción:**
LegalFlow es una plataforma integral de gestión para bufetes de abogados de todos los tamaños. Centraliza en un solo sistema la gestión de clientes, abogados, expedientes, audiencias, cobros y saldos, eliminando el uso de hojas de cálculo, agendas físicas y sistemas dispersos. Cada acción queda registrada con un historial completo, garantizando trazabilidad y precisión en cada etapa del proceso legal.

**Funcionalidades:**

1. **Gestión de clientes y expedientes legales** — registro completo del cliente, caso, partes involucradas y documentos asociados.
2. **Asignación de abogados por caso** — distribución de carga de trabajo con visibilidad de la agenda de cada profesional.
3. **Control de audiencias y vencimientos** — calendario centralizado con alertas preventivas ante plazos próximos a vencer.
4. **Facturación y seguimiento de saldos** — emisión de notas de cobro, control de pagos realizados y saldos pendientes por cliente.
5. **Historial completo de cada caso** — línea de tiempo auditada de todas las actuaciones, comentarios y movimientos del expediente.

**Beneficios Estratégicos:**

1. **Elimina la pérdida de información** entre casos al centralizar toda la operación en un único repositorio.
2. Permite una **facturación precisa y sin retrasos**, mejorando el flujo de caja del bufete.
3. Proporciona una **agenda centralizada** visible para todo el equipo, reduciendo conflictos de horario.
4. Ofrece **acceso rápido al estado** de cualquier expediente en cualquier momento, ideal para clientes exigentes.

---

### 4.3 HomeHub — *Tu hogar inteligente en una sola app*

| Atributo | Detalle |
|---|---|
| **Nombre comercial** | HomeHub |
| **Categoría** | Smart Home |
| **Servicio base** | Apps Móviles (desarrollo de aplicaciones IoT) |
| **Precio** | **Q 329.99** (pago único, licencia personal/familiar) |
| **Tagline** | "Tu hogar inteligente en una sola app" |

**Descripción:**
HomeHub es una aplicación móvil que unifica el control de todos los dispositivos inteligentes del hogar en una interfaz única e intuitiva. Permite automatizar rutinas diarias, monitorear el consumo energético en tiempo real y mantener la seguridad del hogar activa desde cualquier lugar del mundo. Compatible con los principales ecosistemas del mercado (Alexa, Google Home y Apple HomeKit), HomeHub elimina la necesidad de múltiples aplicaciones paralelas para gestionar un hogar conectado.

**Funcionalidades:**

1. **Control centralizado de dispositivos IoT** — interfaz unificada para luces, termostatos, enchufes inteligentes, cerraduras y más.
2. **Automatización de rutinas y escenas** — programación de secuencias automáticas basadas en horarios, sensores o comandos de voz.
3. **Monitoreo de consumo energético en tiempo real** — gráficas de uso por dispositivo, con históricos diarios, semanales y mensuales.
4. **Cámaras y sistema de seguridad integrado** — acceso al feed de cámaras IP, detección de movimiento y alertas push.
5. **Compatibilidad con Alexa, Google Home y Apple HomeKit** — integración nativa con los tres ecosistemas líderes del mercado.

**Beneficios Estratégicos:**

1. Genera un **ahorro de hasta el 30 % en consumo energético** gracias a la automatización inteligente de dispositivos.
2. Ofrece **control total del hogar desde cualquier lugar**, con conectividad en tiempo real.
3. La **automatización de rutinas** simplifica el día a día, reduciendo la fricción en tareas repetitivas.
4. Un **solo app para todos los dispositivos** elimina la fragmentación y la complejidad de la gestión multi-plataforma.

---

## 5. Investigación de Competidores

El mercado de venta de software empaquetado, módulos ERP y aplicaciones de nicho cuenta con actores tanto globales como regionales. Se analizaron diez competidores clasificados por su relevancia y proximidad al portafolio de QuetzalDev.

### 5.1 Tabla Comparativa de Competidores

| # | Empresa / Producto | Mercado objetivo | Tipo de oferta | Precio referencia | Diferenciador clave |
|---|---|---|---|---|---|
| 1 | **Envato Market (CodeCanyon)** | Global | Marketplace de plugins, scripts y módulos | USD 14 – 249 | Catálogo masivo (+55,000 ítems), comunidad activa de compradores |
| 2 | **Gumroad** | Global / Indie Devs | Venta directa de software, cursos y assets | Variable (creador define precio) | Comisión baja, ideal para productos digitales únicos |
| 3 | **AppSumo** | PyMEs / Startups | SaaS en oferta única (lifetime deals) | USD 49 – 299 one-time | Alta exposición de marca para nuevos SaaS |
| 4 | **Odoo Community / Apps Store** | Empresas LATAM | Módulos ERP modulares en nube | USD 0 – 120/mes por módulo | Ecosistema de módulos ERP robusto y flexible |
| 5 | **Bitrix24 (versión regional)** | PyMEs Centroamérica | Suite CRM + ERP en nube | Plan gratuito / USD 49+ | Conocimiento regional, soporte en español |
| 6 | **LexisCom Guatemala** | Bufetes locales | Software de gestión legal regional | Q 800 – 2,500/año | Foco local, integración con leyes guatemaltecas |
| 7 | **ContaPyme** | PyMEs Colombia/LATAM | Contabilidad y facturación electrónica | USD 30/mes | Adaptado a normativas tributarias latinoamericanas |
| 8 | **Tuya Smart Platform** | Fabricantes / Usuarios Smart Home | Plataforma IoT whitelabel | USD 0 (para fabricantes) / USD 10/app | Ecosistema IoT masivo, bases instaladas enormes |
| 9 | **CasaVivaApp (ficticio)** | Mercado centroamericano | App de control domótico regional | Q 150/año suscripción | Precio bajo, modelo suscripción, soporte en español |
| 10 | **NoiseGuard HR (ficticio)** | Recursos Humanos LATAM | Módulo de denuncias laborales SaaS | USD 20/mes por empresa | Foco exclusivo en compliance laboral, integrable con HR existente |

### 5.2 Insight Principal

> **QuetzalDev compite en un mercado polarizado:** en el extremo global, plataformas como CodeCanyon y Gumroad ofrecen volumen y alcance, pero carecen de soporte regional, personalización y conocimiento del marco legal guatemalteco. En el extremo local, los pocos actores existentes (LexisCom, CasaVivaApp) tienen precios más altos o modelos de suscripción recurrente que incrementan el costo total. **La oportunidad diferenciadora de QuetzalDev reside en el punto medio: productos empaquetados a precios accesibles (Q179–Q329), desarrollados con estándares internacionales, con soporte incluido durante 6 meses y entregados en menos de 24 horas**. Ningún competidor identificado combina simultáneamente estos cuatro atributos en el mercado guatemalteco.

---

## 6. Análisis de Entorno Estratégico

### 6.1 Análisis VUCA

El acrónimo VUCA (Volatilidad, Incertidumbre, Complejidad, Ambigüedad) permite caracterizar el entorno dinámico en el que QuetzalDev lanza su canal e-commerce.

| Dimensión | Manifestación en el mercado de QuetzalDev | Respuesta estratégica |
|---|---|---|
| **Volatilidad** | Los frameworks de desarrollo frontend (React, Next.js, Vue) y los ecosistemas IoT (Matter, Thread) evolucionan cada 6–12 meses, amenazando la vigencia tecnológica de HomeHub y LegalFlow. | Mantener ciclos de actualización de producto semestrales y documentar el código para facilitar migraciones rápidas. |
| **Incertidumbre** | La demanda de software de compliance laboral (SafeCase) depende de cambios regulatorios impredecibles en legislación laboral guatemalteca; la adopción de smart home en Guatemala aún es emergente. | Diseñar SafeCase con adaptabilidad regulatoria modular; lanzar HomeHub con versión trial para validar adopción antes de escalar. |
| **Complejidad** | Las tres líneas de producto (RRHH, Legal, IoT) operan en ecosistemas tecnológicos y de negocio completamente diferentes, exigiendo conocimiento multidisciplinario y soporte técnico especializado para cada una. | Crear equipos de soporte especializados por producto; documentar roadmaps independientes por línea. |
| **Ambigüedad** | Los compradores potenciales (empresas medianas, bufetes, hogares modernos) tienen perfiles de madurez digital muy dispares; no existe claridad sobre qué canal digital convierte mejor en Guatemala. | Usar el e-commerce como canal de validación de mercado; medir tasas de conversión por producto para tomar decisiones basadas en datos. |

---

### 6.2 Diamante de Porter

El Diamante de Porter analiza las ventajas competitivas nacionales/regionales que favorecen o limitan a QuetzalDev.

| Vértice | Análisis |
|---|---|
| **Condiciones de los factores** | Guatemala cuenta con una creciente base de profesionales en TI formados en universidades como USAC y URL. El costo de mano de obra técnica es competitivo vs. EEUU o México, permitiendo a QuetzalDev desarrollar productos de calidad a menor costo. Debilidad: infraestructura de conectividad fuera de la capital aún limita la adopción de productos cloud/IoT. |
| **Condiciones de la demanda** | Las PyMEs guatemaltecas y centroamericanas enfrentan presión por digitalizarse post-COVID. Los bufetes de abogados, en particular, son un segmento no digitalizado con alta disposición a pagar por soluciones prácticas. El segmento smart home es emergente pero con crecimiento acelerado en niveles socioeconómicos A/B. |
| **Industrias relacionadas y de apoyo** | Cloudflare, AWS y Azure tienen presencia regional, reduciendo costos de hosting. Ecosistemas como Google Home y Amazon Alexa ya están en el mercado guatemalteco, facilitando la adopción de HomeHub. La industria de telecomunicaciones (Tigo, Claro) impulsa la conectividad necesaria para productos IoT. |
| **Estrategia, estructura y rivalidad** | La competencia local directa en software empaquetado es escasa y fragmentada. La rivalidad principal viene de actores globales (CodeCanyon, Odoo) que no ofrecen soporte local. Esto crea un nicho defendible para QuetzalDev si actúa rápido y consolida su reputación regional antes de que actores globales inviertan en localización. |

---

### 6.3 Análisis PEST

| Factor | Variables clave | Impacto para QuetzalDev |
|---|---|---|
| **Político** | Regulación de protección de datos (Ley de Acceso a la Información Pública); posibles reformas al Código de Trabajo que amplíen obligaciones de compliance; incentivos fiscales para empresas tecnológicas (Ley de Competitividad). | SafeCase se beneficia directamente de mayor regulación laboral. Riesgo regulatorio moderado en materia de protección de datos de los denunciantes; mitigable con cifrado en reposo y tránsito. |
| **Económico** | Inflación en Guatemala del 4.2 % (2025); tipo de cambio Q7.75/USD relativamente estable; crecimiento del PIB TIC estimado en 8 % anual. Los precios de Q179–Q329 representan menos del 2 % del salario mensual de un profesional guatemalteco. | Los precios están en el rango asequible para el mercado objetivo. La estabilidad cambiaria reduce el riesgo de erosión de margen en insumos tecnológicos cotizados en USD. |
| **Social** | Aumento del trabajo remoto e híbrido post-COVID; mayor demanda de soluciones de bienestar laboral; creciente adopción de smartphones y hogares conectados en zonas urbanas; digitalización de procesos legales impulsada por el OJ. | Las tres verticales (RRHH, Legal, Smart Home) se alinean con tendencias sociales verificables. La conciencia sobre acoso laboral ha crecido, generando demanda natural para SafeCase. |
| **Tecnológico** | Expansión de redes 5G en Guatemala; proliferación de dispositivos IoT compatibles con Matter; crecimiento de React y TypeScript como estándares de desarrollo frontend; IA generativa como herramienta de aceleración del desarrollo. | La arquitectura técnica de QuetzalDev (React + TypeScript) es moderna y de larga vida útil. La compatibilidad de HomeHub con los tres ecosistemas IoT principales lo posiciona bien ante la convergencia del estándar Matter. |

---

### 6.4 Las 5 Fuerzas de Porter

#### Fuerza 1: Rivalidad entre competidores existentes — **Media-Alta**
El mercado de software empaquetado local es fragmentado y poco maduro, con pocos actores bien establecidos. Sin embargo, la presencia de marketplaces globales (CodeCanyon, Gumroad) con catálogos de miles de productos introduce una presión de precio permanente. La rivalidad aumenta si actores regionales como ContaPyme o Bitrix24 deciden expandirse al mercado guatemalteco con campañas agresivas.

#### Fuerza 2: Amenaza de nuevos entrantes — **Alta**
Las barreras de entrada al mercado de software empaquetado son bajas: cualquier desarrollador con un repositorio de GitHub puede crear una tienda en Gumroad en menos de una hora. Sin embargo, la barrera real para QuetzalDev es la **diferenciación por soporte local**, **conocimiento regulatorio guatemalteco** y **integración con ecosistemas enterprise**, siendo estos atributos difíciles de replicar para un entrante nuevo sin experiencia regional.

#### Fuerza 3: Poder negociador de los proveedores — **Bajo**
Los insumos tecnológicos clave (hosting AWS/GCP, dominios, librerías open source, frameworks JavaScript) son commodities con múltiples alternativas y precios muy competitivos. No existe un proveedor que pueda imponer condiciones a QuetzalDev. La dependencia de plataformas IoT (Alexa, Google Home) para HomeHub introduce un riesgo de cambio de API moderado, mitigable con capas de abstracción en el código.

#### Fuerza 4: Poder negociador de los clientes — **Media**
Las empresas medianas y bufetes que adquieren SafeCase y LegalFlow generalmente comparan pocas opciones antes de decidir. El precio unitario bajo (Q179–Q329) reduce la presión de negociación individual. Sin embargo, si un cliente es una empresa grande con múltiples licencias, puede exigir descuentos o personalizaciones, que están fuera del alcance estándar del producto empaquetado.

#### Fuerza 5: Amenaza de productos sustitutos — **Media**
Los sustitutos principales son: (a) hojas de cálculo Excel/Google Sheets para la gestión de casos legales, (b) WhatsApp y correo electrónico para la gestión de denuncias laborales, y (c) apps individuales de cada fabricante (Philips Hue, LIFX, Nest) para el control de dispositivos. El riesgo de sustitución disminuye a medida que el cliente percibe el **costo de oportunidad y el riesgo operativo** de seguir con soluciones informales.

---

### 6.5 Análisis SWOT / FODA

| | **Fortalezas (F)** | **Debilidades (D)** |
|---|---|---|
| **Internas** | F1. Equipo técnico con experiencia en ERP, Web y Mobile.<br>F2. Código propio, sin licencias de terceros a pagar.<br>F3. Tres productos con verticales diferenciadas (RRHH, Legal, IoT).<br>F4. Plataforma e-commerce propia con UX neumórfica diferenciada.<br>F5. Soporte técnico incluido durante 6 meses como propuesta de valor clara.<br>F6. Precios muy competitivos para el mercado guatemalteco (Q179–Q329). | D1. Marca QuetzalDev sin reconocimiento masivo en el mercado local.<br>D2. Producto en versión 1.0 sin validación real de usuarios.<br>D3. Sin pasarela de pago real integrada en fase actual.<br>D4. Equipo pequeño limita la capacidad de atender un volumen alto de soporte.<br>D5. Dependencia de dispositivos de terceros para el funcionamiento pleno de HomeHub. |
| **Externas** | **Oportunidades (O)** | **Amenazas (A)** |
| | O1. Demanda creciente de soluciones de compliance laboral en Guatemala.<br>O2. Digitalización acelerada de bufetes de abogados post-pandemia.<br>O3. Expansión del mercado smart home en sectores urbanos A/B.<br>O4. Escasa competencia local especializada en software empaquetado.<br>O5. Posibilidad de alianzas con distribuidores, consultoras RRHH y cámaras empresariales.<br>O6. Subsidios y programas de digitalización PyME promovidos por MINECO/AGEXPORT. | A1. Entrada de actores globales (Odoo, HubSpot, SAP) con campañas regionalizadas.<br>A2. Inestabilidad de ecosistemas IoT (cambios de API de Alexa/Google Home).<br>A3. Desconfianza cultural del mercado guatemalteco ante compras en línea de software.<br>A4. Ciclos de vida tecnológico cortos que requieren actualizaciones frecuentes.<br>A5. Posible cambio regulatorio que exija certificaciones adicionales para SafeCase. |

---

### 6.6 Análisis TOWS / CAME

Las estrategias TOWS cruzan los cuadrantes del FODA para generar iniciativas accionables.

#### Estrategias FO — Ofensivas (Explotar Fortalezas + Capitalizar Oportunidades)

| Estrategia | Descripción |
|---|---|
| **FO1 — Lanzamiento de campaña dirigida a bufetes** | Combinar F1+F2 con O2: Desarrollar una campaña de marketing digital B2B dirigida específicamente a bufetes de abogados guatemaltecos para LegalFlow, presentando testimonios técnicos y demos funcionales. |
| **FO2 — Alianza con consultoras de RRHH** | Combinar F5+F3 con O1+O5: Ofrecer SafeCase a través de consultoras de RRHH y cámaras empresariales bajo un modelo de reventa con comisión, ampliando el canal de distribución sin incrementar costos fijos. |
| **FO3 — Posicionamiento como solución smart home regional** | Combinar F4+F6 con O3+O4: Posicionar HomeHub como la única app smart home con soporte en español guatemalteco, precio accesible y atención local, diferenciándose de apps internacionales impersonales. |

#### Estrategias FA — Defensivas (Usar Fortalezas para Mitigar Amenazas)

| Estrategia | Descripción |
|---|---|
| **FA1 — Construcción de moat regulatorio en SafeCase** | Combinar F1+F2 con A5: Documentar SafeCase bajo el marco del Código de Trabajo guatemalteco y emitir un whitepaper de cumplimiento, creando una barrera de credibilidad difícil de replicar por competidores globales genéricos. |
| **FA2 — Capa de abstracción IoT en HomeHub** | Combinar F1+F2 con A2: Diseñar la arquitectura de HomeHub con una capa de integración abstracta que desacople el producto de las APIs específicas de Alexa/Google, reduciendo el riesgo ante cambios de proveedores. |

#### Estrategias DO — Reorientación (Superar Debilidades usando Oportunidades)

| Estrategia | Descripción |
|---|---|
| **DO1 — Programa piloto con 5 clientes beta** | Combinar D2 con O1+O2: Lanzar programa de acceso anticipado con 5 empresas/bufetes seleccionados a precio simbólico, a cambio de testimonios oficiales y retroalimentación de producto. |
| **DO2 — Integración con pasarela de pago local** | Combinar D3 con O6: Integrar Visanet/Transactel o BAM en línea como primera pasarela de pago, aprovechando el ecosistema financiero local y eliminando la fricción de compra para clientes guatemaltecos. |

#### Estrategias DA — Supervivencia (Reducir Debilidades y Amenazas simultáneamente)

| Estrategia | Descripción |
|---|---|
| **DA1 — Plan de comunicación de marca QuetzalDev** | Combinar D1 con A3: Invertir en contenido educativo (LinkedIn, YouTube) que posicione a QuetzalDev como referente técnico en Guatemala antes del lanzamiento, construyendo confianza digital de forma anticipada. |
| **DA2 — Política de actualizaciones gratuitas por 1 año** | Combinar D5+D2 con A4: Incluir actualizaciones de compatibilidad gratuitas durante los 12 meses posteriores a la compra, como garantía ante la obsolescencia tecnológica, diferenciándose de la competencia global. |

---

### 6.7 Análisis SOAR

El marco SOAR orienta la estrategia desde una perspectiva apreciativa y orientada al futuro.

| Dimensión | Contenido |
|---|---|
| **Strengths (Fortalezas)** | Equipo técnico full-stack con dominio de ERP + Mobile + Web; tres productos con verticales claramente diferenciadas; plataforma propia con UX premium; precios por debajo de la competencia con soporte incluido; cero dependencia de licencias externas. |
| **Opportunities (Oportunidades)** | Mercado latinoamericano de software empaquetado en expansión; digitalización de PyMEs y bufetes sin soluciones regionales adecuadas; crecimiento del segmento smart home en Guatemala; posibilidad de escalar a LATAM desde la base guatemalteca. |
| **Aspirations (Aspiraciones)** | Convertirse en la referencia #1 de software empaquetado para PyMEs y profesionales en Guatemala en los próximos 24 meses; lanzar una versión SaaS con modelo de suscripción mensual de SafeCase y LegalFlow al año 2; expandir HomeHub al mercado de pequeños hoteles boutique y apartamentos en renta en año 3. |
| **Results (Resultados Medibles)** | (1) Lograr 15 ventas digitales en el primer mes post-lanzamiento. (2) Alcanzar un NPS ≥ 70 en el primer trimestre. (3) Reducir el tiempo de soporte promedio a < 4 horas por ticket. (4) Generar ingresos por producto de al menos Q 15,000 en los primeros 3 meses. (5) Conseguir 3 reseñas públicas verificadas por producto antes del mes 2. |

---

## 7. Arquitectura de Información y Desarrollo Web

### 7.1 Decisiones Técnicas

La plataforma fue construida como una **Single Page Application (SPA)** utilizando el siguiente stack tecnológico:

| Capa | Tecnología | Justificación |
|---|---|---|
| Framework UI | React 18 + TypeScript | Tipado estático, componentización robusta, ecosistema maduro |
| Build Tool | Vite 5 | HMR ultrarrápido, builds optimizados para producción |
| Enrutamiento | React Router (HashRouter) | Navegación sin servidor backend requerido |
| Estado global | Context API (CartContext) | Suficiente para el alcance actual; evita overhead de Redux |
| Estilos | CSS Modules por componente | Estilos encapsulados, neumorfismo consistente en toda la UI |
| Persistencia | localStorage | Recibo de compra y estado del carrito entre sesiones |

### 7.2 Mapa de Rutas de la Aplicación

```
/ (HashRouter)
├── /                      → HomePage          [HeroSection]
├── /catalogo              → CatalogPage       [ProductGrid + ProductCard]
├── /carrito               → CartPage          [CartList + ResumenOrden]
├── /checkout              → CheckoutPage      [CheckoutForm + ResumenOrden]
├── /recibo                → ReceiptPage       [ReciboCompleto + CTAs]
└── /bienvenida/:productId → ProductWelcomePage [DetalleProducto + CTAs]
```

### 7.3 Descripción Funcional por Vista

#### 7.3.1 Landing Page — `/`
**Propósito:** Generar interés inicial y dirigir al catálogo.
- **HeroSection** presenta la propuesta de valor central: "Software listo para impulsar tu negocio".
- Sección "¿Por qué QuetzalDev?" con tarjetas de beneficios: *Listo para usar*, *Soporte incluido*, *Alto rendimiento*.
- Preview de los tres productos con precio y tagline.
- Estadísticas de confianza: 3 productos premium, implementación en 24h, 100 % código documentado, 6 meses soporte.
- CTA final: "Explorar todos los productos" → `/catalogo`.

#### 7.3.2 Catálogo — `/catalogo`
**Propósito:** Mostrar todos los productos disponibles y facilitar la decisión de compra.
- Encabezado: "Catálogo de Productos — Explora nuestra línea de software preconstruido…"
- `ProductGrid` renderiza una `ProductCard` por cada producto del array `products.ts`.
- Cada `ProductCard` muestra: ícono de categoría, nombre, tagline, precio, badge de categoría y botón "Agregar al carrito".
- Diseño responsivo con columnas adaptativas según viewport.

#### 7.3.3 Carrito de Compras — `/carrito`
**Propósito:** Revisar la selección antes de proceder al pago.
- `CartList` lista los artículos con `QuantitySelector` para ajustar unidades y botón de eliminación individual.
- Panel de resumen lateral: desglose por producto (nombre × cantidad = subtotal) y **Total en Quetzales**.
- Acciones: "Proceder al checkout" → `/checkout` y "Vaciar carrito".
- Estado vacío con mensaje orientativo y CTA para ir al catálogo.

#### 7.3.4 Checkout — `/checkout`
**Propósito:** Recopilar datos de facturación y método de pago.
- Formulario de datos del comprador: nombre completo, email, teléfono (formato `1234-5678`), empresa (opcional), NIT (requerido, formato `1234567-8`), dirección (opcional).
- Selector de método de pago con sub-formulario dinámico:
  - **Tarjeta:** número `####-####-####-####`, vencimiento `MM/YY`, CVV.
  - **Transferencia:** nombre del banco y número de cuenta.
  - **PayPal:** correo electrónico registrado.
- Panel de orden lateral con el detalle completo y **Total a pagar**.
- Al enviar, genera orden `QD-{base36 timestamp}`, almacena en `localStorage['lastReceipt']`, vacía carrito y redirige a `/recibo`.

#### 7.3.5 Recibo de Compra — `/recibo`
**Propósito:** Confirmar la operación y entregar comprobante imprimible.
- Encabezado de éxito: "¡Compra exitosa! — Tu orden ha sido procesada correctamente."
- Número de orden `QD-XXXXXXXX` como identificador de referencia.
- Datos de facturación completos: nombre, email, NIT, método de pago, empresa y dirección (si aplica).
- Tabla de productos adquiridos: Producto · Precio unitario · Cantidad · Subtotal.
- **Total pagado** con separador visual prominente.
- CTAs post-compra: "Ir a SafeCase / LegalFlow / HomeHub" → `/bienvenida/:productId` para cada ítem comprado.
- Botón "Imprimir recibo" (`window.print()`) y "Volver al inicio".
- Pie de documento: "QuetzalDev — Servicios de software profesional".

#### 7.3.6 Página de Bienvenida al Producto — `/bienvenida/:productId`
**Propósito:** Onboarding post-compra y demostración de funcionalidades.
- "Bienvenido a [SafeCase / LegalFlow / HomeHub]" personalizado por parámetro de ruta.
- Tagline y descripción completa del producto adquirido.
- Sección "Lo que puedes hacer" — lista completa de features del producto.
- Sección "Por qué vale la pena" — beneficios estratégicos del producto.
- Nota contextual: *"En un entorno real, aquí iniciarías sesión y accederías al panel de [Producto]."*
- CTAs: "Volver al inicio" y "Ver más productos".

### 7.4 Árbol de Componentes (Atomic Design)

```
MainLayout (Template)
├── Navbar (Organism)
│   ├── NavLink (Molecule) × n
│   └── NeuBadge (Atom) — contador carrito
├── [Página activa / Route outlet]
│   ├── HeroSection (Organism)
│   ├── ProductGrid (Organism)
│   │   └── ProductCard (Molecule)
│   │       ├── NeuCard (Atom)
│   │       ├── NeuBadge (Atom)
│   │       └── NeuButton (Atom)
│   ├── CartList (Organism)
│   │   └── CartItemCard (Molecule)
│   │       └── QuantitySelector (Molecule)
│   │           └── NeuIconBox (Atom)
│   ├── CheckoutForm (Organism)
│   │   └── NeuInput (Atom) × n
│   └── [ReceiptPage / ProductWelcomePage — standalone]
└── Footer (Organism)
```

---

## 8. Mapeo del Ecosistema TIC — Metodología M3

La **Metodología M3** modela el ecosistema digital de un proyecto a través de tres dimensiones: **Medios**, **Mensajes** y **Mecanismos**. A continuación se documentan las instrucciones detalladas para construir este mapa en una herramienta como **marketplan.io**, y se describe cada mecanismo clave.

### 8.1 Instrucciones para Construir el Mapa M3 en marketplan.io

**Paso 1 — Crear el proyecto**
1. Ingresar a [marketplan.io](https://marketplan.io) y crear un nuevo proyecto llamado `QuetzalDev E-Commerce — Ecosistema TIC`.
2. Seleccionar la plantilla **"Customer Journey"** o **"Funnel"** como lienzo base.
3. Definir el color del proyecto: verde esmeralda (hex `#00B894`) para representar la identidad visual de QuetzalDev.

**Paso 2 — Definir los MEDIOS (columna izquierda del canvas)**

Crear un bloque de tipo **"Traffic Source"** por cada medio. Los medios son los canales de contacto con el usuario:

| ID | Medio | Tipo de bloque |
|---|---|---|
| M-01 | Sitio web QuetzalDev (e-commerce propio) | Owned Media |
| M-02 | Google Search Ads (campañas por producto) | Paid Media |
| M-03 | LinkedIn Ads (B2B — bufetes y empresas) | Paid Media |
| M-04 | Facebook/Instagram Ads (B2C — smart home) | Paid Media |
| M-05 | Contenido orgánico en LinkedIn | Earned Media |
| M-06 | Referidos de clientes actuales de QuetzalDev | Earned Media |
| M-07 | Email marketing (base de datos CRM) | Owned Media |
| M-08 | WhatsApp Business API (soporte y nurturing) | Owned Media |

**Paso 3 — Definir los MENSAJES (columna central del canvas)**

Para cada etapa del funnel (Awareness → Consideration → Decision → Retention), crear bloques de tipo **"Content"** con el mensaje correspondiente:

| Etapa | Mensaje principal | Formato |
|---|---|---|
| **Awareness** | "¿Sabías que el 60% de los conflictos laborales podría prevenirse con el sistema correcto?" | Post LinkedIn / Ad Facebook |
| **Awareness** | "Automatiza tu bufete. LegalFlow centraliza clientes, casos y cobros en un solo lugar." | Google Ad — búsqueda |
| **Consideration** | "3 productos de software. 1 solo pago. Soporte incluido por 6 meses." | Landing Page Hero |
| **Consideration** | Demo funcional de SafeCase, LegalFlow y HomeHub en la página de producto | Video tour / GIF |
| **Decision** | "Compra hoy desde Q179.99 — descarga en menos de 24 horas." | Botón CTA en ProductCard |
| **Decision** | "Tu empresa ya configurada. Sin complejidades ni infraestructura propia." | Recibo + bienvenida |
| **Retention** | "Actualización gratuita disponible para tu producto — Descarga aquí." | Email post-compra |
| **Retention** | "¿Necesitas más? Conoce nuestros servicios de ERP a la medida." | WhatsApp nurturing |

**Paso 4 — Definir los MECANISMOS (columna derecha — acciones y automatizaciones)**

Crear bloques de tipo **"Action"** o **"Automation"** para cada mecanismo. Conectar con flechas los Medios con los Mensajes correspondientes y los Mensajes con los Mecanismos que los activan.

**Paso 5 — Añadir métricas KPI**

En cada bloque de mecanismo, agregar la métrica objetivo en el campo de notas del bloque (Ej.: "Conversión checkout meta: 3.5 %"). marketplan.io permite visualizar estos KPIs en el canvas como etiquetas numéricas.

**Paso 6 — Exportar**

Exportar el mapa como PNG de alta resolución o PDF para incluirlo en la presentación ejecutiva.

---

### 8.2 Descripción Detallada de los Mecanismos

Los mecanismos son las **acciones técnicas, automatizaciones y procesos** que activan los mensajes a través de los medios, convirtiéndolos en resultados medibles.

#### Mecanismo 1 — Motor de E-Commerce (SPA React + Vite)
**Descripción:** La plataforma web desarrollada en React 18 + TypeScript + Vite actúa como el mecanismo central de captura y conversión. Opera como una SPA con enrutamiento HashRouter, permitiendo navegación sin recargas de página y una experiencia fluida desde el catálogo hasta el recibo.
**Función en el ecosistema:** Convierte el tráfico entrante (desde anuncios o búsqueda orgánica) en compradores mediante un flujo de 4 pasos: catálogo → carrito → checkout → recibo.
**KPI asociado:** Tasa de conversión catálogo → checkout meta 5 %; abandono de carrito < 30 %.

#### Mecanismo 2 — Sistema de Carrito con Contexto Global (CartContext)
**Descripción:** `CartContext.tsx` gestiona el estado global del carrito de compras mediante React Context API. Persiste el carrito en la sesión del usuario y proporciona funciones de agregar, eliminar y vaciar artículos accesibles desde cualquier componente de la aplicación.
**Función en el ecosistema:** Retiene la intención de compra del usuario mientras navega entre páginas, reduciendo la fricción en la conversión.
**KPI asociado:** Promedio de ítems por carrito meta ≥ 1.5 productos.

#### Mecanismo 3 — Formulario de Checkout con Validación (CheckoutForm)
**Descripción:** `CheckoutForm.tsx` implementa validación de campos en tiempo real: formato de teléfono guatemalteco `1234-5678`, NIT `1234567-8`, número de tarjeta `####-####-####-####` y email válido. Bloquea el envío hasta que todos los campos requeridos sean correctos, reduciendo errores y rechazos.
**Función en el ecosistema:** Actúa como el punto de conversión definitivo; captura los datos de facturación necesarios y genera el número de orden único `QD-{base36}`.
**KPI asociado:** Tasa de error en formulario < 10 % de los submissions.

#### Mecanismo 4 — Generador de Recibo y Persistencia en localStorage
**Descripción:** Al confirmar el checkout, el sistema genera un objeto `receipt` con número de orden, datos de cliente, método de pago y detalle de productos. Lo almacena en `localStorage['lastReceipt']` para recuperarlo en `/recibo` sin backend. Incluye CTA personalizado por producto adquirido hacia la página de bienvenida.
**Función en el ecosistema:** Cierra el ciclo de compra de forma satisfactoria, entrega el comprobante y hace el onboarding al producto inmediato.
**KPI asociado:** 100 % de compras con recibo generado correctamente; tasa de clic a `/bienvenida` post-compra meta 60 %.

#### Mecanismo 5 — Página de Bienvenida al Producto (ProductWelcomePage)
**Descripción:** Vista dinámica parametrizada por `productId` que actúa como el primer punto de onboarding post-compra. Muestra features, beneficios y una nota explicativa sobre cómo accedería al panel real en producción. Funciona como un "puente" entre la compra simulada y la entrega real del producto.
**Función en el ecosistema:** Aumenta la percepción de valor inmediato post-compra y reduce la probabilidad de solicitudes de reembolso.
**KPI asociado:** Tiempo promedio en página de bienvenida meta ≥ 90 segundos.

#### Mecanismo 6 — Automatización de Email post-compra (Fase 2)
**Descripción:** Tras la confirmación de orden, se activa un workflow en Mailchimp/SendGrid que envía: (1) email de bienvenida con instrucciones de acceso, (2) email de seguimiento a los 3 días con tips de uso, (3) email a los 30 días solicitando una reseña del producto.
**Función en el ecosistema:** Maximiza el valor del ciclo de vida del cliente (LTV), recoge retroalimentación para mejoras de producto y genera testimonios sociales que alimentan el funnel de awareness.
**KPI asociado:** Tasa de apertura de emails meta ≥ 40 %; tasa de reseñas generadas ≥ 20 %.

#### Mecanismo 7 — CRM y Segmentación de Leads (Fase 2)
**Descripción:** Los datos del formulario de checkout (empresa, NIT, email) se sincronizan con un CRM (HubSpot Free o Zoho CRM) para construir perfiles de cliente, identificar oportunidades de upsell hacia proyectos a la medida de QuetzalDev.
**Función en el ecosistema:** Transforma compradores de productos empaquetados en prospectos calificados para los servicios ERP y desarrollo a medida, cerrando el ciclo del ecosistema de negocio completo de QuetzalDev.
**KPI asociado:** Tasa de conversión de comprador de producto empaquetado a cliente de servicio a medida meta 5 % en 6 meses.

---

## 9. Planificación Ágil

La ejecución del proyecto se organizó en **dos sprints Scrum** diferenciados con claridad: el primero concentrado en investigación, definición estratégica y diseño conceptual; el segundo enfocado en implementación funcional del sitio, documentación de resultados y cierre del informe ejecutivo. Esta división responde a las evidencias observadas en los tableros de trabajo compartidos por el equipo.

---

### 9.1 Sprint 1 — Investigación, Definición del Producto y Diseño Estratégico

**Objetivo del Sprint:** Construir la base conceptual del proyecto antes del desarrollo, definiendo el alcance, los productos, el análisis competitivo, los marcos estratégicos y la estructura inicial del e-commerce.

#### Temas Correctos Trabajados en el Sprint 1

Según las evidencias del tablero, este sprint estuvo orientado a actividades de análisis y estructuración, no a desarrollo de páginas del sitio. Los temas reales fueron los siguientes:

**Organización inicial del proyecto**

- Revisar enunciado de la práctica.
- Definir roles del equipo.
- Definir alcance del proyecto.

**Investigación de mercado y competencia**

- Investigar 10 competidores de software similar.
- Analizar características de los competidores.
- Identificar ventajas competitivas.
- Extraer insight principal del mercado.

**Definición de la oferta de productos**

- Idear producto 1 basado en ERP.
- Idear producto 2 basado en desarrollo web.
- Idear producto 3 basado en apps móviles.
- Redactar descripción de los productos.
- Definir precios estimados.
- Definir beneficios de cada producto.
- Definir funciones principales de cada producto.

**Arquitectura y planteamiento del e-commerce**

- Definir estructura del e-commerce.
- Diseñar arquitectura de información del sitio.
- Diseñar estructura de páginas.
- Diseñar flujo de compra.

**Mapeo TIC y ecosistema digital**

- Investigar metodología M3.
- Crear mapa TICs preliminar.
- Definir mecanismos TICs.
- Identificar canales digitales.

**Análisis estratégico del proyecto**

- Aplicar framework VUCA.
- Aplicar framework PEST.
- Aplicar Five Forces.
- Realizar análisis SWOT.
- Generar estrategia con TOWS.
- Elaborar propuesta con SOAR.

#### Resultado Esperado del Sprint 1

Al cierre del Sprint 1, el equipo debía contar con una definición clara del negocio digital de QuetzalDev: productos propuestos, justificación estratégica, visión del mercado, arquitectura preliminar del sitio y mapa TIC inicial. En otras palabras, este sprint construyó el **qué** y el **por qué** del proyecto.

#### Dinámica Scrum Observada en el Sprint 1

- **Backlog:** Se registraron inicialmente tareas de levantamiento conceptual y análisis, como competidores, alcance, productos y frameworks estratégicos.
- **En Progreso:** El tablero muestra tareas activas de investigación M3, análisis de competidores, arquitectura de información, definición del e-commerce, funciones de producto y aplicación de VUCA/Five Forces/SOAR.
- **Control de Calidad:** Varias tareas de definición de productos pasaron por revisión, como los productos basados en ERP, desarrollo web y apps móviles, además de precios, beneficios e insight del mercado.
- **Listo:** Quedaron completadas primero las tareas base de entendimiento del proyecto: revisión del enunciado, definición de alcance y definición de roles del equipo.

---

### 9.2 Sprint 2 — Desarrollo del Sitio, Documentación y Cierre Ejecutivo

**Objetivo del Sprint:** Implementar la plataforma e-commerce, validar su funcionamiento, documentar la solución desarrollada y consolidar los entregables finales del proyecto.

#### Temas Correctos Trabajados en el Sprint 2

Con base en los tableros mostrados, el segundo sprint ya no estuvo centrado en ideación ni análisis primario, sino en construcción del sitio, simulación de compra, documentación técnica y generación del informe final.

**Planificación técnica del desarrollo**

- Definir estructura final del sitio.
- Priorizar tareas de desarrollo.
- Configurar estructura de navegación.

**Construcción de la plataforma web**

- Crear página principal.
- Crear página de catálogo de productos.
- Crear páginas individuales de productos.
- Agregar producto 1 al sitio.
- Agregar producto 2 al sitio.
- Agregar producto 3 al sitio.
- Implementar carrito de compras.
- Implementar simulación de compra.

**Validación funcional**

- Verificar que el sitio cargue correctamente.

**Documentación del proyecto**

- Documentar arquitectura del sitio.
- Documentar mapa TICs.
- Documentar análisis de frameworks.
- Documentar investigación de competidores.
- Documentar resultados del proyecto.
- Redactar introducción del informe ejecutivo.
- Generar informe ejecutivo en PDF.

#### Resultado Esperado del Sprint 2

Al cierre del Sprint 2, el equipo debía tener una versión navegable del e-commerce de QuetzalDev, con catálogo, páginas de producto, flujo de compra simulado y documentación consolidada para su presentación formal. Este sprint produjo el **cómo** y el **resultado visible** del proyecto.

#### Dinámica Scrum Observada en el Sprint 2

- **Backlog:** El tablero inició con tareas de construcción del sitio, como crear páginas, agregar productos y definir la estructura final del portal.
- **En Progreso:** En las capturas se observa trabajo activo en la generación del informe ejecutivo y en actividades vinculadas al cierre del proyecto.
- **Control de Calidad:** Varias tareas pasaron a revisión, incluyendo catálogo, páginas individuales, incorporación de productos, arquitectura del sitio e introducción del informe ejecutivo.
- **Listo:** El tablero refleja como completadas tareas clave tales como agregar productos al sitio, verificar carga correcta, documentar resultados, implementar la simulación de compra, documentar mapa TICs y cerrar el análisis de frameworks.

#### Cierre Metodológico de los Sprints

La evidencia de los tableros confirma una secuencia lógica y metodológicamente correcta:

1. **Sprint 1:** comprensión del problema, definición estratégica, ideación de productos y diseño de la solución.
2. **Sprint 2:** materialización técnica del e-commerce, validación del flujo de compra y consolidación documental.

Esta estructura es coherente con una ejecución ágil de un proyecto académico-tecnológico, porque evita desarrollar sin análisis previo y permite que la implementación se apoye en decisiones estratégicas ya validadas en el sprint inicial.

---

## 10. Conclusiones

### 10.1 Justificación Estratégica del Proyecto

El análisis presentado en este informe demuestra con evidencia multidimensional que la plataforma e-commerce de QuetzalDev no es un experimento tecnológico, sino una **oportunidad de negocio estratégicamente sólida y temporalmente urgente**. Los siete marcos analíticos aplicados (VUCA, Diamante de Porter, PEST, 5 Fuerzas, FODA, TOWS y SOAR) convergen en la misma conclusión: QuetzalDev posee las capacidades técnicas, el conocimiento sectorial y la propuesta de valor necesarios para capturar un segmento de mercado actualmente desatendido en Guatemala y Centroamérica.

### 10.2 Síntesis de los Hallazgos Clave

1. **El mercado está listo pero sin soluciones regionales adecuadas.** Los competidores globales (CodeCanyon, Odoo, Gumroad) ofrecen volumen pero carecen de soporte local, conocimiento regulatorio guatemalteco y precios accesibles combinados. La ventana de oportunidad para posicionarse como referente local es estrecha.

2. **Los tres productos son viables de forma independiente.** SafeCase atiende la creciente demanda de compliance laboral, LegalFlow digitaliza una industria legal rezagada, y HomeHub captura el segmento smart home en pleno crecimiento. Juntos, diversifican el riesgo y amplían el mercado direccionable total.

3. **La inversión ya fue realizada.** La plataforma e-commerce está desarrollada en React 18 + TypeScript + Vite con una UX neumórfica diferenciada. El costo marginal de lanzar es mínimo: integrar una pasarela de pago real y activar campañas digitales son los únicos pasos pendientes para la versión comercial.

4. **El modelo escala sin costos proporcionales.** A diferencia de los proyectos a la medida, cada venta adicional de SafeCase, LegalFlow o HomeHub no requiere horas adicionales de desarrollo. El costo marginal por producto vendido tiende a cero, lo que genera márgenes crecientes conforme aumenta el volumen.

5. **La planificación ágil garantiza entrega ordenada y verificable.** Los dos sprints estructurados con criterios de aceptación claros, Definition of Done y procesos Scrum definidos reducen el riesgo de desviación del proyecto y permiten validar entregables en puntos de control definidos antes del lanzamiento.

### 10.3 Llamado a la Acción para la Junta Directiva

**Se solicita a la Junta Directiva la aprobación formal de los siguientes recursos:**

| Recurso | Propósito | Clasificación |
|---|---|---|
| Integración de pasarela de pago local (Visanet/BAM) | Habilitar transacciones reales en la plataforma | Crítico — Fase de lanzamiento |
| Presupuesto de marketing digital Q 3,000/mes | Campañas Google Ads + LinkedIn Ads | Necesario — Primer trimestre |
| 1 recurso de soporte técnico part-time | Atender tickets de los 3 productos | Necesario — Desde el lanzamiento |
| Dominio y hosting de producción | Publicar la plataforma en internet | Crítico — Pre-lanzamiento |

La aprobación de estos recursos permitirá a QuetzalDev pasar de una plataforma de demostración académica a un **canal de ingresos digital operativo en menos de 30 días**. La combinación de productos diferenciados, precios accesibles, soporte incluido y una plataforma técnicamente sólida representa una propuesta de valor que ningún competidor local puede igualar hoy.

> **La pregunta no es si QuetzalDev debe apostar por el software empaquetado. La pregunta es cuánto mercado estará dispuesto a ceder si no actúa ahora.**

---

*Documento elaborado por el Equipo de Desarrollo QuetzalDev — Práctica 3, Primer Semestre 2026, Grupo 28.*
*Versión 1.0 — Confidencial — Solo para uso interno de la Junta Directiva.*
