# Biblioteca Backend - NestJS + Prisma

Backend completamente reconstructo y limpio para la aplicación de gestión de biblioteca.

## Stack Tecnológico

- **Framework**: NestJS 10
- **ORM**: Prisma
- **Base de Datos**: PostgreSQL
- **Lenguaje**: TypeScript
- **Validación**: class-validator
- **Testing**: Jest

## Estructura del Proyecto

```
src/
├── books/              # Módulo de libros
│   ├── dto/           # Data Transfer Objects
│   ├── entities/      # Entidades
│   ├── books.controller.ts
│   ├── books.service.ts
│   └── books.module.ts
├── loans/             # Módulo de préstamos
│   ├── dto/
│   ├── entities/
│   ├── loans.controller.ts
│   ├── loans.service.ts
│   └── loans.module.ts
├── prisma/            # Configuración de Prisma
│   ├── prisma.service.ts
│   └── prisma.module.ts
├── app.module.ts      # Módulo principal
└── main.ts           # Punto de entrada
```

## Configuración Inicial

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar variables de entorno

Crea un archivo `.env` basado en `.env.example`:

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/biblioteca
NODE_ENV=development
PORT=3000
```

### 3. Ejecutar migraciones de Prisma

```bash
npx prisma migrate dev --name init
```

### 4. Generar cliente de Prisma

```bash
npm run prisma:generate
```

## Scripts Disponibles

```bash
# Desarrollo
npm run start:dev

# Producción
npm run build
npm run start:prod

# Testing
npm test
npm run test:watch
npm run test:cov

# Linting
npm run lint

# Prisma
npm run prisma:generate  # Generar cliente
npm run prisma:migrate   # Ejecutar migraciones
npm run prisma:deploy    # Desplegar migraciones (prod)
```

## Endpoints Disponibles

### Books
- `GET /books` - Obtener todos los libros
- `POST /books` - Crear nuevo libro
- `GET /books/:id` - Obtener libro por ID
- `PATCH /books/:id` - Actualizar libro
- `DELETE /books/:id` - Eliminar libro

### Loans
- `GET /loans` - Obtener todos los préstamos
- `POST /loans` - Crear nuevo préstamo
- `GET /loans/:id` - Obtener préstamo por ID
- `PATCH /loans/:id` - Actualizar préstamo
- `DELETE /loans/:id` - Eliminar préstamo

## Features Incluidos

✅ Validación automática de entrada con class-validator  
✅ Manejo global de pipes en main.ts  
✅ CORS habilitado  
✅ Prisma ORM con migraciones  
✅ Módulo global de Prisma para inyección de dependencias  
✅ TypeScript strict mode  
✅ Aliases de rutas (`@/`)  
✅ Estructura modular y escalable  

## Despliegue en Railway

1. Conecta tu repositorio de GitHub a Railway
2. Configura la variable de entorno `DATABASE_URL` con tu conexión PostgreSQL
3. Railway ejecutará automáticamente `npm run build`
4. El servidor estará disponible en el puerto asignado

## Licencia

UNLICENSED
