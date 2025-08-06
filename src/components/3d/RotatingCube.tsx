'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'

interface RotatingCubeProps {
  position?: [number, number, number]
  color?: string
}

const RotatingCube = ({
  position = [0, 0, 0],
  color = '#ff6b6b',
}: RotatingCubeProps) => {
  const meshRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  // Animate the cube rotation
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={clicked ? 1.5 : hovered ? 1.2 : 1}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={hovered ? '#4ecdc4' : color}
        roughness={0.3}
        metalness={0.1}
      />
    </mesh>
  )
}

export default RotatingCube
