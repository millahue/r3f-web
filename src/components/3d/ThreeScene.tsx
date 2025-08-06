"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
  Stats,
} from "@react-three/drei";
import { Suspense } from "react";
import RotatingCube from "./RotatingCube";

interface ThreeSceneProps {
  className?: string;
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
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />

        {/* Lighting setup */}
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

        <Suspense fallback={null}>
          {/* Environment for reflections */}
          <Environment preset="city" />

          {/* 3D Objects */}
          <RotatingCube position={[-2, 0, 0]} color="#ff6b6b" />
          <RotatingCube position={[2, 0, 0]} color="#4ecdc4" />
          <RotatingCube position={[0, 2, 0]} color="#45b7d1" />

          {/* Ground plane */}
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -2, 0]}
            receiveShadow
          >
            <planeGeometry args={[20, 20]} />
            <meshStandardMaterial color="#2a2a2a" />
          </mesh>
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
  );
}
