'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Button } from '@/components/ui/button'
import {
  GlowingCard,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/glowing-card'
import { Card } from '@/components/ui/card'
import { ModeToggle } from '@/components/theme-toggle'
import {
  Zap,
  Box,
  Palette,
  Component,
  Code2,
  Gauge,
  MousePointer,
  Terminal,
} from 'lucide-react'

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
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
          <fieldset className="flex gap-4 justify-center">
            <legend className="sr-only">Acciones principales</legend>
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
          </fieldset>
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
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <li>
              <GlowingCard>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-green-500" />
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
              </GlowingCard>
            </li>

            <li>
              <GlowingCard>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Box className="w-5 h-5 text-blue-500" />
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
              </GlowingCard>
            </li>

            <li>
              <GlowingCard>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="w-5 h-5 text-purple-500" />
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
              </GlowingCard>
            </li>

            <li>
              <GlowingCard>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Component className="w-5 h-5 text-orange-500" />
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
              </GlowingCard>
            </li>

            <li>
              <GlowingCard>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-red-500" />
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
              </GlowingCard>
            </li>

            <li>
              <GlowingCard>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gauge className="w-5 h-5 text-teal-500" />
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
              </GlowingCard>
            </li>
          </ul>
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
                <h3
                  id="controls-title"
                  className="font-semibold mb-2 flex items-center gap-2"
                >
                  <MousePointer className="w-5 h-5 text-blue-500" />
                  Controles 3D:
                </h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Haz clic y arrastra para rotar la cámara</li>
                  <li>• Usa la rueda del mouse para hacer zoom</li>
                  <li>• Haz clic en los cubos para interactuar</li>
                  <li>• Mantén presionado y arrastra para mover la vista</li>
                </ul>
              </div>
              <div
                className="bg-muted p-4 rounded-lg"
                role="region"
                aria-labelledby="commands-title"
              >
                <h3
                  id="commands-title"
                  className="font-semibold mb-2 flex items-center gap-2"
                >
                  <Terminal className="w-5 h-5 text-green-500" />
                  Comandos de Desarrollo:
                </h3>
                <ul className="text-sm space-y-1 text-muted-foreground font-mono">
                  <li>
                    •{' '}
                    <code className="bg-background px-2 py-1 rounded">
                      npm run dev
                    </code>{' '}
                    - Iniciar servidor de desarrollo
                  </li>
                  <li>
                    •{' '}
                    <code className="bg-background px-2 py-1 rounded">
                      npm run build
                    </code>{' '}
                    - Construir para producción
                  </li>
                  <li>
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
