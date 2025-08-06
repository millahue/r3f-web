'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import {
  Sphere,
  Torus,
  Octahedron,
  Icosahedron,
  Dodecahedron,
  Tetrahedron,
} from '@react-three/drei'
import type { Mesh, MeshStandardMaterial } from 'three'

// Esfera flotante con material holográfico
export const FloatingSphere = () => {
  const meshRef = useRef<Mesh>(null)

  useFrame(state => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={[-4, 0, 0]}>
      <Sphere args={[0.8, 32, 32]}>
        <meshStandardMaterial
          color="#4f46e5"
          metalness={0.8}
          roughness={0.2}
          wireframe={false}
          transparent
          opacity={0.8}
        />
      </Sphere>
    </mesh>
  )
}

// Torus giratorio con efectos de color
export const SpinningTorus = () => {
  const meshRef = useRef<Mesh>(null)

  useFrame(state => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.02
      meshRef.current.rotation.z += 0.01
      // Color que cambia con el tiempo
      const material = meshRef.current.material as MeshStandardMaterial
      if (material && 'color' in material) {
        const time = state.clock.elapsedTime
        material.color.setHSL((time * 0.1) % 1, 0.7, 0.6)
      }
    }
  })

  return (
    <mesh ref={meshRef} position={[4, 1, -3]}>
      <Torus args={[1, 0.4, 16, 32]}>
        <meshStandardMaterial color="#10b981" metalness={0.5} roughness={0.3} />
      </Torus>
    </mesh>
  )
}

// Octahedron pulsante
export const PulsatingOctahedron = () => {
  const meshRef = useRef<Mesh>(null)

  useFrame(state => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.3
      meshRef.current.scale.setScalar(scale)
      meshRef.current.rotation.y += 0.015
    }
  })

  return (
    <mesh ref={meshRef} position={[0, -2, 4]}>
      <Octahedron args={[1]}>
        <meshStandardMaterial
          color="#f59e0b"
          metalness={0.6}
          roughness={0.4}
          emissive="#f59e0b"
          emissiveIntensity={0.1}
        />
      </Octahedron>
    </mesh>
  )
}

// Icosahedron con animación compleja
export const AnimatedIcosahedron = () => {
  const meshRef = useRef<Mesh>(null)

  useFrame(state => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.5
      meshRef.current.rotation.y += 0.008
      meshRef.current.position.x = Math.cos(state.clock.elapsedTime * 0.8) * 1.5
      meshRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.8) * 1.5
    }
  })

  return (
    <mesh ref={meshRef} position={[-5, 1, -4]}>
      <Icosahedron args={[0.7]}>
        <meshStandardMaterial
          color="#8b5cf6"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.9}
        />
      </Icosahedron>
    </mesh>
  )
}

// Dodecahedron orbitante
export const OrbitingDodecahedron = () => {
  const meshRef = useRef<Mesh>(null)

  useFrame(state => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      meshRef.current.position.x = Math.cos(time * 0.7) * 3
      meshRef.current.position.y = Math.sin(time * 0.3) * 1
      meshRef.current.position.z = Math.sin(time * 0.7) * 3
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.02
    }
  })

  return (
    <mesh ref={meshRef}>
      <Dodecahedron args={[0.6]}>
        <meshStandardMaterial
          color="#ef4444"
          metalness={0.7}
          roughness={0.2}
          wireframe={Math.sin(Date.now() * 0.001) > 0.5}
        />
      </Dodecahedron>
    </mesh>
  )
}

// Tetrahedron danzante
export const DancingTetrahedron = () => {
  const meshRef = useRef<Mesh>(null)

  useFrame(state => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      meshRef.current.position.y = Math.sin(time * 2) * 0.8 + 1
      meshRef.current.rotation.x = time * 0.5
      meshRef.current.rotation.y = time * 0.3
      meshRef.current.rotation.z = time * 0.7
    }
  })

  return (
    <mesh ref={meshRef} position={[7, 0, 3]}>
      <Tetrahedron args={[1]}>
        <meshStandardMaterial
          color="#06b6d4"
          metalness={0.4}
          roughness={0.6}
          emissive="#06b6d4"
          emissiveIntensity={0.05}
        />
      </Tetrahedron>
    </mesh>
  )
}
