import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import _import from 'eslint-plugin-import'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: _import
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      indent: ['error', 2, {
        SwitchCase: 1,
      }],

      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      'jsx-quotes': ['error', 'prefer-double'],

      'no-multiple-empty-lines': ['error', {
        max: 2,
        maxEOF: 1,
        maxBOF: 0,
      }],

      semi: ['error', 'never'],

      'comma-dangle': ['error', {
        functions: 'never',
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
      }],

      'max-len': ['error', {
        code: 90,
      }],

      'import/newline-after-import': ['error', {
        count: 2,
      }],

      'eol-last': ['error', 'always'],

      'max-lines': ['warn', {
        max: 95,
        skipBlankLines: true,
        skipComments: true,
      }],

      'no-trailing-spaces': ['warn'],
      'no-multi-spaces': ['warn'],

      'comma-spacing': ['warn', { before: false, after: true }],
    },
  },
)
