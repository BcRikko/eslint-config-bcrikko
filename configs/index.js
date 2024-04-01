/**
 * JavaScript/TypeScript共通ルール
 */
import globals from 'globals'
import js from '../rules/javascript.js'
import plugins from '../rules/plugins.js'
import ts from '../rules/typescript.js'
import jsStyle from '../styles/jsStyle.js'
import tsStyle from '../styles/tsStyle.js'

/**
 * ESLintの基本ルールを設定する。
 * @type {import("eslint").Linter.FlatConfig[]}
 */
const baseConfig = [
  {
    files: ['**/*.{js,ts,mjs,mts,cjs,cts,jsx,tsx}'],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,

        },
      },
    },
    files: [
      '**/*.js',
      '**/*.ts',
      '**/*.jsx',
      '**/*.tsx',
    ],
  },
  ...js,
  ...jsStyle,
  ...ts,
  ...tsStyle,
  ...plugins,
]

export default baseConfig
