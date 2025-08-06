'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ModeToggle } from '@/components/theme-toggle'

// Dynamic import to avoid SSR issues with Three.js
const ThreeScene = dynamic(() => import('@/components/3d/SimpleScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-gradient-to-br from-slate-900 to-slate-700 rounded-lg flex items-center justify-center">
      <div className="text-white">Loading 3D Scene...</div>
    </div>
  ),
})

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header con Theme Toggle */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              R3F Web
            </h2>
          </div>
          <nav className="flex items-center space-x-2">
            <ModeToggle />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="container mx-auto px-4 py-16"
        aria-labelledby="hero-title"
      >
        <div className="text-center mb-12">
          <h1
            id="hero-title"
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            Next.js + React Three Fiber
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Un proyecto moderno con Next.js 15, React 19, R3F, Tailwind CSS v4 y
            Shadcn/ui. Explora el futuro del desarrollo web con 3D interactivo.
          </p>
          <div
            className="flex gap-4 justify-center"
            role="group"
            aria-label="Acciones principales"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600"
              aria-describedby="comenzar-desc"
            >
              Comenzar
            </Button>
            <span id="comenzar-desc" className="sr-only">
              Iniciar con el proyecto R3F
            </span>
            <Button variant="outline" size="lg" aria-describedby="docs-desc">
              Ver Documentación
            </Button>
            <span id="docs-desc" className="sr-only">
              Acceder a la documentación completa del proyecto
            </span>
          </div>
        </div>

        {/* 3D Scene */}
        <div
          className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl mb-16"
          role="img"
          aria-label="Escena 3D interactiva con objetos animados de React Three Fiber"
        >
          <Suspense
            fallback={
              <div
                className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center"
                role="status"
                aria-live="polite"
              >
                <div className="text-white text-lg">
                  <span className="sr-only">Estado: </span>
                  Cargando escena 3D...
                </div>
              </div>
            }
          >
            <ThreeScene />
          </Suspense>
        </div>

        {/* Features Grid */}
        <section aria-labelledby="features-title">
          <h2 id="features-title" className="sr-only">
            Características principales del proyecto
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            role="list"
          >
            <Card className="hover:shadow-lg transition-shadow" role="listitem">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 bg-green-500 rounded-full"
                    aria-hidden="true"
                  ></span>
                  Next.js 15
                </CardTitle>
                <CardDescription>
                  App Router, Server Components, y Turbopack para máximo
                  rendimiento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  La última versión de Next.js con todas las características
                  modernas.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow" role="listitem">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 bg-blue-500 rounded-full"
                    aria-hidden="true"
                  ></span>
                  React Three Fiber
                </CardTitle>
                <CardDescription>
                  Renderizado 3D declarativo con React y Three.js
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Componentes 3D interactivos con la potencia de Three.js.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow" role="listitem">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 bg-purple-500 rounded-full"
                    aria-hidden="true"
                  ></span>
                  Tailwind CSS v4
                </CardTitle>
                <CardDescription>
                  Utility-first CSS con las últimas características
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Estilos modernos con soporte para gradientes P3 y más.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow" role="listitem">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 bg-orange-500 rounded-full"
                    aria-hidden="true"
                  ></span>
                  Shadcn/ui
                </CardTitle>
                <CardDescription>
                  Componentes hermosos y accesibles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  UI components modernos con diseño consistente.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow" role="listitem">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 bg-red-500 rounded-full"
                    aria-hidden="true"
                  ></span>
                  TypeScript
                </CardTitle>
                <CardDescription>
                  Desarrollo type-safe y productivo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Tipado estático para mejor desarrollo y mantenimiento.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow" role="listitem">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 bg-teal-500 rounded-full"
                    aria-hidden="true"
                  ></span>
                  Optimizado
                </CardTitle>
                <CardDescription>
                  Rendimiento y experiencia de usuario excepcionales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Bundle optimizado y carga rápida en producción.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Instructions */}
        <section aria-labelledby="instructions-title">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle id="instructions-title">
                Instrucciones de Uso
              </CardTitle>
              <CardDescription>
                Cómo comenzar a desarrollar con esta configuración
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div
                className="bg-muted p-4 rounded-lg"
                role="region"
                aria-labelledby="controls-title"
              >
                <h3 id="controls-title" className="font-semibold mb-2">
                  🎮 Controles 3D:
                </h3>
                <ul
                  className="text-sm space-y-1 text-muted-foreground"
                  role="list"
                >
                  <li role="listitem">
                    • Haz clic y arrastra para rotar la cámara
                  </li>
                  <li role="listitem">
                    • Usa la rueda del mouse para hacer zoom
                  </li>
                  <li role="listitem">
                    • Haz clic en los cubos para interactuar
                  </li>
                  <li role="listitem">
                    • Mantén presionado y arrastra para mover la vista
                  </li>
                </ul>
              </div>
              <div
                className="bg-muted p-4 rounded-lg"
                role="region"
                aria-labelledby="commands-title"
              >
                <h3 id="commands-title" className="font-semibold mb-2">
                  🚀 Comandos de Desarrollo:
                </h3>
                <ul
                  className="text-sm space-y-1 text-muted-foreground font-mono"
                  role="list"
                >
                  <li role="listitem">
                    •{' '}
                    <code className="bg-background px-2 py-1 rounded">
                      npm run dev
                    </code>{' '}
                    - Iniciar servidor de desarrollo
                  </li>
                  <li role="listitem">
                    •{' '}
                    <code className="bg-background px-2 py-1 rounded">
                      npm run build
                    </code>{' '}
                    - Construir para producción
                  </li>
                  <li role="listitem">
                    •{' '}
                    <code className="bg-background px-2 py-1 rounded">
                      npx shadcn@latest add [component]
                    </code>{' '}
                    - Añadir componentes UI
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      </section>
    </div>
  )
}

export default Home
