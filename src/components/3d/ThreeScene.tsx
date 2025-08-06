'use client'

import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
  Stats,
} from '@react-three/drei'
import { Suspense } from 'react'
import RotatingCube from './RotatingCube'
import {
  FloatingSphere,
  SpinningTorus,
  PulsatingOctahedron,
  AnimatedIcosahedron,
  OrbitingDodecahedron,
  DancingTetrahedron,
} from './GeometricShapes'
import {
  InteractiveRoundedBox,
  GlowingCylinder,
  OrbitingCone,
  PulsatingRing,
  WavyPlane,
  FloatingText3D,
  SceneEffects,
} from './DreiElements'
import {
  DistortedTorus,
  WobbleBox,
  TrailingGroup,
  DecalBox,
  ReflectiveSurface,
  GroundShadows,
  EnhancedLighting,
} from './AdvancedElements'

interface ThreeSceneProps {
  className?: string
}

export default function ThreeScene({ className }: ThreeSceneProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ antialias: true }}
        className="bg-gradient-to-br from-slate-900 to-slate-700"
      >
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />

        {/* Enhanced Lighting setup */}
        <EnhancedLighting />

        <Suspense fallback={null}>
          {/* Efectos de ambiente */}
          <SceneEffects />

          {/* Environment for reflections */}
          <Environment preset="city" />

          {/* Elementos geométricos básicos */}
          <FloatingSphere />
          <SpinningTorus />
          <PulsatingOctahedron />
          <AnimatedIcosahedron />
          <OrbitingDodecahedron />
          <DancingTetrahedron />

          {/* Elementos drei avanzados */}
          <InteractiveRoundedBox />
          <GlowingCylinder />
          <OrbitingCone />
          <PulsatingRing />
          <WavyPlane />
          <FloatingText3D />

          {/* Elementos avanzados con materiales especiales */}
          <DistortedTorus />
          <WobbleBox />
          <TrailingGroup />
          <DecalBox />

          {/* Cubos originales */}
          <RotatingCube position={[-1, -1, 2]} color="#ff6b6b" />
          <RotatingCube position={[1, -1, 2]} color="#4ecdc4" />

          {/* Superficie reflectante */}
          <ReflectiveSurface />

          {/* Sombras de contacto */}
          <GroundShadows />
        </Suspense>

        {/* Controls */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={20}
        />

        {/* Performance monitor */}
        <Stats />
      </Canvas>
    </div>
  )
}
