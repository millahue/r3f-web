import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...compat.extends('prettier'),
  ...compat.plugins('prettier'),
  {
    rules: {
      // Prettier formatting rules
      'prettier/prettier': 'error',

      // Modern JavaScript best practices
      'prefer-const': 'error',
      'no-var': 'error',
      'prefer-template': 'error',
      'object-shorthand': 'error',

      // TypeScript specific - más relajado
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],

      // React best practices - deshabilitado para menos strictness
      'react/function-component-definition': 'off',
      'func-style': 'off',
      'prefer-arrow-callback': 'off',
    },
  },
  // Configuración específica para archivos 3D
  {
    files: ['src/components/3d/**/*.tsx', 'src/components/3d/**/*.ts'],
    rules: {
      // Deshabilitar reglas problemáticas para R3F
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-types': 'off',
      'react/no-unknown-property': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
    },
  },
]

export default eslintConfig
