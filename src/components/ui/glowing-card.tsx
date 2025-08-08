'use client'

import { GlowingEffect } from '@/components/ui/glowing-effect'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface GlowingCardProps {
  children?: React.ReactNode
  className?: string
  glowOptions?: {
    blur?: number
    proximity?: number
    spread?: number
    variant?: 'default' | 'white'
    disabled?: boolean
  }
}

const GlowingCard = ({
  children,
  className,
  glowOptions = {},
}: GlowingCardProps) => {
  return (
    <Card
      className={cn(
        'relative overflow-hidden hover:shadow-lg transition-shadow',
        className
      )}
    >
      <GlowingEffect
        proximity={50}
        spread={60}
        disabled={false}
        {...glowOptions}
      />
      {children}
    </Card>
  )
}

// Re-exportamos los componentes originales para mantener compatibilidad
export { GlowingCard, CardContent, CardDescription, CardHeader, CardTitle }
