
# Aplicación de Registro de Incidentes

Aplicación para registrar y visualizar incidentes operacionales. Consta de un backend desarrollado en NestJS y un frontend en React.

---

## Requisitos

- Docker
- Docker Compose

---


## Ejecución con Docker Compose

1. Clonar el repositorio y acceder a la carpeta raí­z:
   ```bash
   git clone git@github.com:AlanBritoW/Incidents.git
   cd incidents
   ```

2. Construir y levantar los contenedores:
   ```bash
   docker-compose up --build
   ```

3. Acceder a las aplicaciones:
   - Frontend: http://localhost:5173
   - Backend (Swagger - documentación API): http://localhost:3000/api

---


## Formato de los incidentes

```json
{
  "id": "uuid",
  "date": "YYYY-MM-DD",
  "description": "string",
  "team_id": "string",
  "status": "abierto | en_progreso | cerrado"
}
```

---

## Tecnologí­as utilizadas

- Backend: NestJS, TypeORM, SQLite, Swagger, Docker
- Frontend: React, Axios, Bootstrap/Tailwind, Docker
- Orquestación: Docker Compose

---

## Notas adicionales

- La base de datos SQLite reside dentro del contenedor backend.
- Swagger está habilitado para la documentación y pruebas de la API en `/api`.
