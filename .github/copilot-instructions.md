# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview

This is a modern React project built with the latest technologies:

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React version
- **React Three Fiber v9** - React renderer for Three.js
- **Tailwind CSS v4** - Utility-first CSS framework
- **Shadcn/ui** - Beautiful, accessible UI components
- **TypeScript** - Type-safe JavaScript
- **Turbopack** - Fast bundler for development

## Code Style Guidelines

- Use TypeScript for all new files
- Follow React hooks best practices
- Use Tailwind CSS for styling
- Prefer function components over class components
- Use modern React patterns (Suspense, Server Components when appropriate)
- Keep Three.js components in separate files for better organization

## React Three Fiber Specific

- Always wrap 3D components in `<Canvas>` from `@react-three/fiber`
- Use `useFrame` for animations and continuous updates
- Leverage `@react-three/drei` helpers for common 3D patterns
- Keep 3D logic separate from UI logic
- Use `useRef` for direct mesh manipulation
- Implement proper cleanup for event listeners and animations

## Component Structure

- UI components go in `src/components/ui/` (Shadcn/ui components)
- 3D components go in `src/components/3d/`
- Page components use Next.js App Router in `src/app/`
- Utility functions in `src/lib/`
- Types in `src/types/` or co-located with components

## Performance Considerations

- Use React.memo for expensive 3D components
- Implement proper loading states for 3D assets
- Use Suspense boundaries for 3D scenes
- Optimize textures and geometries
- Consider using instanced rendering for multiple similar objects
