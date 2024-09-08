# Proyecto de Cotizaciones de Seguros

Este proyecto consiste en una aplicación que permite realizar cotizaciones de seguros, desarrollada con **React** y otras bibliotecas para ofrecer una experiencia de usuario fluida y eficiente. A continuación, detallamos las herramientas y dependencias utilizadas, y los pasos necesarios para configurar el proyecto.

## Tecnologías Utilizadas

### Frontend
- **React**: Elegido por su rendimiento y flexibilidad para construir interfaces de usuario interactivas.
- **React Router DOM**: Utilizado para gestionar la navegación entre diferentes vistas de la aplicación de manera eficiente.
- **Axios**: Para manejar las solicitudes HTTP y facilitar la comunicación con las API externas.
- **JS-Cookie**: Implementado para manejar las cookies de manera sencilla en el navegador, permitiendo almacenar tokens de autenticación.

### Desarrollo y Herramientas
- **Vite**: Elegido por su rápida velocidad de desarrollo y soporte nativo para TypeScript.
- **TypeScript**: Aporta seguridad en el desarrollo, mejorando la experiencia al detectar errores en tiempo de compilación.
- **ESLint**: Ayuda a mantener un código limpio y consistente, facilitando la identificación de errores comunes.
- **Prettier**: Formateador de código para asegurar la consistencia en el estilo del código entre los miembros del equipo.
- **Husky**: Utilizado para gestionar pre-commits, asegurando que el código esté formateado y siga las reglas de linting antes de hacer un commit.
- **Sass**: Utilizado para la gestión avanzada de estilos en la aplicación.
- **Commitlint y Lint-staged**: Ayudan a mantener un historial de commits limpio y estructurado siguiendo convenciones estándar.

## Estructura del Proyecto

El proyecto está organizado en componentes, vistas y rutas. Los formularios para cotizar seguros están construidos en React, con manejo de estado local para la captura de datos. La autenticación se maneja con cookies para sesiones seguras.

## Instalación y Configuración

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/Kevintc0495/reto-rimac.git
   cd reto
   ```
2. **Levantar el proyecto en modo desarrollo:**:
   ```bash
   npm run dev
   ```
3. **Compilar el proyecto para producción:**:
   ```bash
   npm run build
   ```

## Consideraciones Importantes

- **Requisitos**: Asegúrate de tener Node `>=18.0.0` instalado en tu máquina.
- **Husky**: Antes de hacer cualquier commit, Husky ejecutará `lint-staged` para formatear el código y verificar que todo esté correcto.
- **Commitlint**: Se ha configurado para que todos los mensajes de commit sigan una convención estándar.
- **TypeScript**: Si se encuentra algún problema de tipado, asegúrate de revisar los archivos `.ts` y `.tsx`.
- **Azure Deployment**: Se ha añadido un archivo `web.config` para facilitar el despliegue en Azure. Este archivo configura el servidor de manera óptima para ejecutar la aplicación en dicho entorno.
