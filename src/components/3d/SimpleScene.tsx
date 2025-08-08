'use client'

import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
  Sparkles,
  Stars,
  MeshReflectorMaterial,
  ContactShadows,
} from '@react-three/drei'
import { Suspense } from 'react'
import RotatingCube from './RotatingCube'
import {
  FloatingSphere,
  SpinningTorus,
  PulsatingOctahedron,
  AnimatedIcosahedron,
  DancingTetrahedron,
} from './GeometricShapes'
import {
  InteractiveRoundedBox,
  GlowingCylinder,
  OrbitingCone,
  PulsatingRing,
} from './DreiElements'
import { DistortedTorus, WobbleBox } from './AdvancedElements'

interface SimpleSceneProps {
  className?: string
}

const SimpleScene = ({ className }: SimpleSceneProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ antialias: true }}
        className="bg-gradient-to-br from-slate-900 to-slate-700"
      >
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />

        {/* Luces básicas */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <pointLight position={[-5, 5, 5]} intensity={0.3} color="#4f46e5" />

        <Suspense fallback={null}>
          <Environment preset="city" />

          {/* Efectos de ambiente */}
          <Stars
            radius={100}
            depth={50}
            count={3000}
            factor={4}
            saturation={0}
            fade={true}
            speed={1}
          />

          <Sparkles
            count={30}
            scale={[8, 8, 8]}
            size={1}
            speed={0.3}
            opacity={0.6}
            color="#ffffff"
          />

          {/* Cubos básicos distribuidos en las esquinas */}
          <RotatingCube position={[-6, -1, -6]} color="#ff6b6b" />
          <RotatingCube position={[6, -1, -6]} color="#4ecdc4" />
          <RotatingCube position={[-6, -1, 6]} color="#45b7d1" />
          <RotatingCube position={[6, -1, 6]} color="#96ceb4" />

          {/* Elementos geométricos básicos */}
          <FloatingSphere />
          <SpinningTorus />
          <PulsatingOctahedron />
          <AnimatedIcosahedron />
          <DancingTetrahedron />

          {/* Elementos drei que funcionan bien */}
          <InteractiveRoundedBox />
          <GlowingCylinder />
          <OrbitingCone />
          <PulsatingRing />

          {/* Elementos avanzados con materiales especiales */}
          <DistortedTorus />
          <WobbleBox />

          {/* Base reflectante como suelo */}
          <mesh
            ref={mesh => {
              if (mesh) {
                mesh.rotation.x = -Math.PI / 2
              }
            }}
            position={[0, -4, 0]}
          >
            <planeGeometry args={[20, 20]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={80}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#151515"
              metalness={0.5}
            />
          </mesh>

          {/* Sombras de contacto para mayor realismo */}
          <ContactShadows
            position={[0, -3.9, 0]}
            opacity={0.4}
            scale={18}
            blur={2}
            far={4}
            resolution={256}
            color="#000000"
          />
        </Suspense>

        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={15}
        />
      </Canvas>
    </div>
  )
}

export default SimpleScene
