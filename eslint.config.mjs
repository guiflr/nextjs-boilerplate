import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({  
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended
})

const eslintConfig = [
  ...compat.config({
    ignorePatterns: ['src/types/**'],
    extends: ['eslint:recommended', 'next', 'prettier'],
    rules: {
      'no-undef': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explit-module-boundary-types': 'off'
    },
  })
]

export default eslintConfig
