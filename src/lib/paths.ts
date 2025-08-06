/**
 * Utility function to handle basePath for GitHub Pages deployment
 */
export const withBasePath = (path: string): string => {
  const basePath = process.env.NODE_ENV === 'production' ? '/r3f-web' : ''

  // Si la ruta ya incluye el basePath, no lo agregues de nuevo
  if (basePath && path.startsWith(basePath)) {
    return path
  }

  // Si la ruta es relativa o no empieza con /, úsala tal como está
  if (!path.startsWith('/')) {
    return path
  }

  return `${basePath}${path}`
}

/**
 * Hook para obtener el basePath actual
 */
export const useBasePath = (): string => {
  return process.env.NODE_ENV === 'production' ? '/r3f-web' : ''
}
