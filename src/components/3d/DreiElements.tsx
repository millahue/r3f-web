'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import {
  RoundedBox,
  Cylinder,
  Cone,
  Ring,
  Center,
  Float,
  Sparkles,
  Stars,
} from '@react-three/drei'
import { Mesh, Vector3 } from 'three'

// RoundedBox interactivo
export function InteractiveRoundedBox() {
  const meshRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useFrame(state => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      meshRef.current.rotation.y += hovered ? 0.02 : 0.005
      const scale = clicked ? 1.2 : hovered ? 1.1 : 1
      meshRef.current.scale.lerp(new Vector3(scale, scale, scale), 0.1)
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={[-1, 2, -5]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setClicked(!clicked)}
    >
      <RoundedBox args={[1, 1, 1]} radius={0.1} smoothness={4}>
        <meshStandardMaterial
          color={clicked ? '#ff6b6b' : hovered ? '#4ecdc4' : '#45b7d1'}
          metalness={0.6}
          roughness={0.3}
        />
      </RoundedBox>
    </mesh>
  )
}

// Cilindro rotatorio con efectos
export function GlowingCylinder() {
  const meshRef = useRef<Mesh>(null)

  useFrame(state => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[2, 1, 5]}>
        <Cylinder args={[0.5, 0.8, 2, 8]}>
          <meshStandardMaterial
            color="#9b59b6"
            emissive="#9b59b6"
            emissiveIntensity={0.2}
            metalness={0.8}
            roughness={0.2}
          />
        </Cylinder>
        <Sparkles
          count={20}
          scale={[2, 3, 2]}
          size={2}
          speed={0.5}
          color="#e74c3c"
        />
      </mesh>
    </Float>
  )
}

// Cono con animación orbital
export function OrbitingCone() {
  const meshRef = useRef<Mesh>(null)

  useFrame(state => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      meshRef.current.position.x = Math.cos(time * 0.8) * 2.5
      meshRef.current.position.z = Math.sin(time * 0.8) * 2.5
      meshRef.current.rotation.z = time * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={[-7, -1, 0]}>
      <Cone args={[0.6, 1.5, 6]}>
        <meshStandardMaterial
          color="#2ecc71"
          metalness={0.5}
          roughness={0.4}
          wireframe={Math.sin(Date.now() * 0.002) > 0}
        />
      </Cone>
    </mesh>
  )
}

// Ring pulsante con efectos
export function PulsatingRing() {
  const meshRef = useRef<Mesh>(null)

  useFrame(state => {
    if (meshRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.2
      meshRef.current.scale.setScalar(pulse)
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.02
    }
  })

  return (
    <mesh ref={meshRef} position={[5, 2.5, -1]}>
      <Ring args={[0.5, 1, 16]}>
        <meshStandardMaterial
          color="#f39c12"
          side={2} // DoubleSide
          transparent
          opacity={0.8}
          emissive="#f39c12"
          emissiveIntensity={0.1}
        />
      </Ring>
    </mesh>
  )
}

// Plano ondulado
export function WavyPlane() {
  const meshRef = useRef<Mesh>(null)

  useFrame(state => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      meshRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 2) * 0.2 - 3
    }
  })

  return (
    <mesh ref={meshRef} position={[-3, -3, 2]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[4, 4, 20, 20]} />
      <meshStandardMaterial
        color="#3498db"
        transparent
        opacity={0.7}
        wireframe={true}
      />
    </mesh>
  )
}

// Texto 3D flotante
export function FloatingText3D() {
  const textRef = useRef<Mesh>(null)

  useFrame(state => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
      textRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 1.2) * 0.5 + 2
    }
  })

  return (
    <Center>
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
        <mesh ref={textRef} position={[0, 3, 0]}>
          <boxGeometry args={[1, 0.5, 0.1]} />
          <meshStandardMaterial
            color="#e74c3c"
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
      </Float>
    </Center>
  )
}

// Ambiente con efectos
export function SceneEffects() {
  return (
    <>
      {/* Estrellas de fondo */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade={true}
        speed={1}
      />

      {/* Sparkles globales */}
      <Sparkles
        count={50}
        scale={[10, 10, 10]}
        size={1}
        speed={0.3}
        opacity={0.6}
        color="#ffffff"
      />
    </>
  )
}
