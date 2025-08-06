# 🎯 Proyecto R3F Web | Next.js 15 + React Three Fiber

## ✨ Descripción

Un proyecto moderno y completo que demuestra el poder del desarrollo web 3D con **las últimas tecnologías**. Combina Next.js 15, React 19, React Three Fiber, Tailwind CSS v4 y Shadcn/ui con **optimización SEO completa** y **accesibilidad WCAG 2.1**.

## 🚀 Tecnologías Utilizadas

### Core Framework
- **Next.js 15** - App Router, Server Components, Turbopack
- **React 19** - Última versión con compatibilidad total
- **TypeScript** - Tipado estático completo

### 3D & Animaciones
- **React Three Fiber v9** - Declarative 3D rendering
- **@react-three/drei** - Helpers y utilidades 3D avanzadas
- **@react-three/postprocessing** - Efectos post-procesado
- **@react-spring/three** - Animaciones spring fluidas

### UI & Styling
- **Tailwind CSS v4** - Utility-first CSS con características modernas
- **Shadcn/ui** - Componentes hermosos y accesibles
- **Stone Color Scheme** - Paleta de colores profesional

### Desarrollo & Calidad
- **ESLint** - Linting de código
- **Prettier** - Formateo automático
- **VS Code Extensions** - Configuración optimizada

## 🌟 Características Implementadas

### 🎮 Experiencia 3D Avanzada
- **Escena 3D interactiva** con controles OrbitControls
- **Objetos animados** con Float, Trail y MeshDistortMaterial
- **Efectos visuales** con @react-three/postprocessing
- **Stats de rendimiento** en tiempo real
- **Carga optimizada** con dynamic imports y Suspense

### 🔍 SEO Optimización Completa
- **Open Graph Tags** - Facebook, LinkedIn sharing
- **Twitter Cards** - Twitter sharing optimizado  
- **JSON-LD Structured Data** - Schema.org markup
- **Sitemap XML** automático
- **Robots.txt** configurado
- **Meta tags avanzados** con keywords, authors, etc.
- **Canonical URLs** y alternates
- **PWA Manifest** completo

### ♿ Accesibilidad WCAG 2.1
- **Skip links** para navegación por teclado
- **ARIA labels** y landmarks semánticos
- **Screen reader support** completo
- **Focus management** optimizado
- **Live regions** para anuncios dinámicos
- **Semantic HTML** estructura correcta
- **Color contrast** optimizado
- **Keyboard navigation** completa

### ⚡ Optimización de Rendimiento
- **Turbopack** bundler ultrarrápido
- **Server Components** renderizado optimizado
- **Dynamic imports** para componentes 3D
- **Font optimization** con display: swap
- **Image optimization** automática
- **Bundle splitting** inteligente

## 📁 Estructura del Proyecto

```
r3f-web/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Layout raíz con SEO completo
│   │   ├── page.tsx         # Página principal con accesibilidad
│   │   ├── sitemap.ts       # Sitemap XML automático
│   │   └── globals.css      # Estilos globales
│   └── components/
│       ├── 3d/
│       │   ├── ThreeScene.tsx     # Escena 3D principal
│       │   ├── RotatingCube.tsx   # Cubo animado básico
│       │   └── EnhancedSphere.tsx # Esfera con efectos drei
│       └── ui/              # Componentes Shadcn/ui
├── public/
│   ├── robots.txt          # SEO robots
│   └── manifest.json       # PWA manifest
├── .vscode/
│   └── tasks.json          # Tareas VS Code
└── README.md               # Esta documentación
```

## 🛠️ Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- VS Code (recomendado)

### Pasos de Instalación

1. **Clonar y entrar al directorio**
   ```bash
   git clone <repo-url>
   cd r3f-web
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en navegador**
   - Local: http://localhost:3001
   - Red: http://[tu-ip]:3001

## 📜 Scripts Disponibles

```bash
# Desarrollo con Turbopack
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm run start

# Linting
npm run lint

# Formatear código (si configurado)
npm run format
```

## 🎮 Controles 3D

- **Rotar**: Click + arrastrar
- **Zoom**: Rueda del mouse
- **Pan**: Shift + click + arrastrar
- **Interacción**: Click en objetos 3D

## 🧩 Componentes 3D Principales

### ThreeScene.tsx
- Canvas principal con configuración optimizada
- Iluminación ambiental y direccional
- OrbitControls con límites configurados
- Stats de rendimiento (FPS, memoria)

### RotatingCube.tsx
- Cubo básico con rotación automática
- Material estándar con colores gradiente
- Animación suave con useFrame

### EnhancedSphere.tsx
- Esfera con efectos drei avanzados
- Float animation para movimiento orgánico
- Trail para rastro visual
- MeshDistortMaterial con distorsión procedural

## 📱 PWA Support

El proyecto incluye soporte completo para PWA:
- **Manifest** configurado
- **Service Worker** ready
- **Iconos** para todas las plataformas
- **Splash screens** optimizados

## 🔧 Configuración VS Code

### Extensiones Recomendadas
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Importer
- Auto Rename Tag
- Prettier - Code formatter
- ESLint

### Tareas Incluidas
- **Build**: `Ctrl+Shift+P` → "Tasks: Run Task" → "build"
- **Dev**: Inicio automático del servidor de desarrollo

## 🌐 Deployment

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Subir carpeta .next/
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🧪 Testing

### Accesibilidad
- **axe-core** para auditorías automáticas
- **Screen reader testing** con NVDA/JAWS
- **Keyboard navigation** testing

### SEO
- **Lighthouse** auditoría completa
- **Google Search Console** validation  
- **Social Media Debuggers** (Facebook, Twitter)

### Performance
- **Core Web Vitals** monitoring
- **Bundle Analyzer** para optimización
- **3D Performance** con Stats.js

## 📊 Métricas de Rendimiento

### Core Web Vitals Típicos
- **LCP**: < 1.5s
- **FID**: < 100ms  
- **CLS**: < 0.1
- **TTI**: < 2s

### Bundle Size
- **Total JS**: ~112 KB (gzipped)
- **Main bundle**: ~54 KB
- **3D libraries**: ~43 KB

## 🔄 Roadmap

### Próximas Características
- [ ] **i18n** - Internacionalización completa
- [ ] **Dark/Light Mode** - Tema dinámico
- [ ] **More 3D Scenes** - Galería de ejemplos
- [ ] **Performance Analytics** - Métricas en tiempo real
- [ ] **AR/VR Support** - WebXR integration
- [ ] **CMS Integration** - Content management
- [ ] **Testing Suite** - Unit & E2E tests

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más información.

## 🙏 Agradecimientos

- **Next.js Team** - Framework increíble
- **React Three Fiber** - 3D declarativo fantástico  
- **Shadcn** - Componentes UI hermosos
- **Tailwind CSS** - Utility-first CSS
- **Vercel** - Deployment platform

## 📞 Contacto

- **GitHub**: [tu-username]
- **Twitter**: [@tu-handle]
- **Email**: tu-email@ejemplo.com

---

**⚡ Desarrollado con Next.js 15 + React Three Fiber | SEO & A11y Optimized**
