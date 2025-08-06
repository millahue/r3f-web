'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import {
  MeshDistortMaterial,
  MeshWobbleMaterial,
  ContactShadows,
  MeshReflectorMaterial,
} from '@react-three/drei'
import type { Mesh, Group } from 'three'

// Torus con material distorsionado
export function DistortedTorus() {
  const meshRef = useRef<Mesh>(null)

  useFrame(state => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <mesh ref={meshRef} position={[6, 0, -7]}>
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <MeshDistortMaterial
        color="#8b5cf6"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0}
      />
    </mesh>
  )
}

// Box con material wobble
export function WobbleBox() {
  const meshRef = useRef<Mesh>(null)

  useFrame(state => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={[-6, 1, 5]} castShadow receiveShadow>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <MeshWobbleMaterial
        color="#10b981"
        attach="material"
        factor={1}
        speed={2}
        roughness={0.1}
        metalness={0.8}
      />
    </mesh>
  )
}

// Grupo con trail effect - Simplificado
export function TrailingGroup() {
  const groupRef = useRef<Group>(null)

  useFrame(state => {
    if (groupRef.current) {
      groupRef.current.position.x = Math.sin(state.clock.elapsedTime * 1.5) * 3
      groupRef.current.position.y =
        Math.cos(state.clock.elapsedTime * 1.2) * 1.5
      groupRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.8) * 2
    }
  })

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial
          color="#ff6b6b"
          emissive="#ff6b6b"
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  )
}

// Box con decoraciones - Simplificado
export function DecalBox() {
  const meshRef = useRef<Mesh>(null)

  useFrame(state => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <mesh ref={meshRef} position={[1, 0, 6]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#34d399" metalness={0.6} roughness={0.4} />
    </mesh>
  )
}

// Espejo reflectante en el suelo
export function ReflectiveSurface() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]} receiveShadow>
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
        color="#050505"
        metalness={0.5}
      />
    </mesh>
  )
}

// Sombras de contacto para mejor realismo
export function GroundShadows() {
  return (
    <ContactShadows
      position={[0, -4.5, 0]}
      opacity={0.4}
      scale={20}
      blur={2}
      far={4}
      resolution={256}
      color="#000000"
    />
  )
}

// Configuración de luces mejorada
export function EnhancedLighting() {
  return (
    <>
      {/* Luz principal */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Luces de relleno */}
      <pointLight position={[-5, 5, 5]} intensity={0.3} color="#4f46e5" />

      <pointLight position={[5, 5, -5]} intensity={0.3} color="#06b6d4" />

      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        color="#f59e0b"
        castShadow
      />

      {/* Luz ambiental suave */}
      <ambientLight intensity={0.2} color="#ffffff" />
    </>
  )
}
