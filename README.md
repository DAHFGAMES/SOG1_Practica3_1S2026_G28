# QuetzalDev — Práctica 3 de SOG1

Tienda de demostración desarrollada por el grupo 28 para Sistemas Organizacionales y Gerenciales 1, primer semestre de 2026. Frontend con React 19, TypeScript, Vite 7 y React Router; componentes organizados mediante Atomic Design.

Incluye catálogo, carrito, checkout, comprobante y una página de bienvenida por producto. Los sprints y las capturas documentan el recorrido.

El carrito vive en memoria; el último recibo se guarda en el navegador mediante `localStorage`. El flujo de compra es una simulación: no procesa pagos reales ni dispone de un backend de autenticación o pedidos.

## Ejecutar desde un clon

Requiere Node.js 22.12 o posterior compatible con Vite 7 y npm. Desde la raíz:

```bash
cd website
npm ci
npm run dev
```

Abrir la dirección local que indique Vite. Para compilar y revisar el código:

```bash
npm run build
npm run lint
npm run preview
```

`preview` sirve la compilación de `dist/`; no es un servidor de producción. Se conserva el lockfile para instalar las dependencias resueltas por el proyecto.

## Evidencias y publicación

[Recorrido con capturas](images/website/websiteFlow.md) · [Sprint 1](scrum/Sprint1/Sprint.md) · [Sprint 2](scrum/Sprint2/Sprint.md)

[Sitio en GitHub Pages](https://dahfgames.github.io/SOG1_Practica3_1S2026_G28/). Su publicación depende del workflow existente y de la configuración de Pages del propietario; la URL no implica disponibilidad permanente.

Trabajo colaborativo del grupo 28. Los cambios propuestos mediante PR quedan sujetos a revisión del propietario.
