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
]

export default eslintConfig
