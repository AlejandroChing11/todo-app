# React ToDo App

CRUD de tareas en react.

## Pasos Para ejecutar el proyecto en local.

1. Clonar el proyecto.
2. Ejecutar el comando para instalar todas las librerias

```
yarn install
```

3. Crear archivo `.env` y colocar la url de la API como variable de entorno
4. Ejecutar el proyecto

```
yarn dev
```

# Estructura de carpetas:

-src

--components

--core

       --api

       --context

       --interfaces

--pages

      --Login

      --Home

- _components_: Contiene Todos aquellos componentes que se usan más de una sola vez y son reutilizables o muy extensos.
- _cores_: Almacena toda la logica importante tal como servicios, contexto e interfaces para ejercer el tipado extricto.
- _pages_: Contiene 2 directorios, cada uno con un archivo index.tsx para evitar problemas de importación. Cada directorio representa una página específica de la aplicación.
