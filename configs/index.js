/**
 * JavaScript/TypeScript共通ルール
 */
import globals from 'globals'
import base from '../rules/base.js'
import baseStyle from '../rules/baseStyle.js'
import plugins from '../rules/plugins.js'
import typescript from '../rules/typescript.js'
import typescriptStyle from '../rules/typescriptStyle.js'

/**
 * ESLintの基本ルールを設定する。
 * @type {import("eslint").Linter.Config[]}
 */
const baseConfig = [
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
  ...base,
  ...baseStyle,
  ...typescript,
  ...typescriptStyle,
  ...plugins,
]

export default baseConfig
