# Contributing to R3F Web

¡Gracias por tu interés en contribuir a este proyecto! Este documento proporciona directrices para contribuir.

## Configuración del Entorno de Desarrollo

1. Fork el repositorio
2. Clona tu fork:
   ```bash
   git clone https://github.com/tu-usuario/r3f-web.git
   ```
3. Instala dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Flujo de Trabajo

1. Crea una rama para tu feature:

   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

2. Realiza tus cambios siguiendo las convenciones

3. Ejecuta las pruebas de calidad:

   ```bash
   npm run lint
   npm run format:check
   npm run test
   ```

4. Commit usando conventional commits:

   ```bash
   npm run commit
   ```

5. Push y crea un Pull Request

## Conventional Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/) para commits semánticos:

- `feat:` para nuevas características
- `fix:` para correcciones de bugs
- `docs:` para cambios en documentación
- `style:` para cambios de formato
- `refactor:` para refactoring de código
- `test:` para añadir o modificar tests
- `chore:` para tareas de mantenimiento

Ejemplos:

```bash
feat(3d): añadir nueva geometría de dodecaedro
fix(ui): corregir problema con efectos de brillo
docs: actualizar README con nuevas instrucciones
```

## Code Review

- Todos los PRs pasan por AI code review automático
- Se ejecutan checks de calidad y seguridad
- Se requiere al menos una aprobación manual

## Estructura del Proyecto

```
src/
├── app/                 # Next.js App Router
├── components/
│   ├── 3d/             # Componentes 3D de R3F
│   └── ui/             # Componentes de UI
├── lib/                # Utilidades y helpers
└── types/              # Definiciones de tipos
```

## Estándares de Código

- TypeScript para todo el código
- Prettier para formato automático
- ESLint para linting
- Componentes funcionales con hooks
- Documentación JSDoc para funciones complejas

¡Gracias por contribuir!
