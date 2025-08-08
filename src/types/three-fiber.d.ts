// Extend React Three Fiber types
import { extend } from '@react-three/fiber'
import * as THREE from 'three'

// Extend to support all Three.js elements
extend(THREE)

// This makes TypeScript happy with R3F components
declare global {
  namespace JSX {
    interface IntrinsicElements {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [key: string]: any
    }
  }
}

export {}
