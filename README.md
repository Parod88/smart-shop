# 📱 Phone Catalog App

Este proyecto es una aplicación desarrollada con **Vite** y **Preact**, que muestra un catálogo de teléfonos, permite ver detalles y añadir productos al carrito con almacenamiento local.

## 🚀 Requisitos

- [Node.js v22.x](https://nodejs.org/) (es posible que no funcione correctamente con versiones anteriores)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## 🛠 Instalación

1. Clona el repositorio:

```bash

git clone https://github.com/Parod88/smart-shop.git  (https)
git clone git@github.com:Parod88/smart-shop.git       (ssh)


- Instala las dependencias:
cd smart-shop
npm install

- 📦 Scripts disponibles
Iniciar servidor de desarrollo:
npm run start

Abre http://localhost:5173 en tu navegador para ver la app.


Construir para producción:
npm run build
Los archivos estáticos se generarán en la carpeta dist/.


Lint del proyecto:
npm run lint
Ejecuta ESLint sobre todos los archivos .js y .jsx.


Test (no configurado actualmente):
npm run test


📁 Estructura del proyecto (resumen)
src/
│
├── components/        → Componentes reutilizables (ProductItem, Layout, etc.)
├── context/           → Contextos globales (CartContext)
├── pages/             → Páginas principales (Home, ProductDetails)
├── router/            → Configuración axios
├── services/          → Comunicación con la API
├── utils/             → Utilidades como caché

📋 Notas
Este proyecto utiliza almacenamiento en localStorage para gestionar el carrito y cachear datos de productos.

El filtrado y las rutas están optimizadas para una SPA rápida y responsive.

🧪 Futuras mejoras
Añadir tests unitarios de los componentes.
Implementar paginación o lazy loading.

🧑‍💻 Autor
Desarrollado por [Pablo Rodríguez].

```
