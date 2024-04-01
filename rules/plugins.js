import pluginImport from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'

/**
 * ESLintのPlugins関連のルールを設定する
 * @type {import("eslint").Linter.FlatConfig[]}
 */
const pluginConfig = [
  {
    // imort文の記述を制限する。
    // https://github.com/import-js/eslint-plugin-import
    plugins: {
      import: pluginImport,
    },
    languageOptions: {
      // NOTE: Parse errors in imported module './xxx/xxx.js': The keyword 'import' is reserved などのエラー対応
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      // NOTE: Workaround: https://github.com/import-js/eslint-plugin-import/issues/2556#issuecomment-1419518561
      'import/parsers': {
        espree: [
          '.js',
          '.cjs',
          '.mjs',
          '.jsx',
        ],
      },
      'import/resolver': {
        // NOTE: eslint-import-resolver-typescript がないと Resolve error: typescript with invalid interface loaded as resolver というエラーが出る
        typescript: true,
        node: true,
      },
    },
    rules: {
      ...pluginImport.configs.recommended.rules,
      // import文の間にimport文以外のステートメントを禁止する。
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
      'import/first': 'error',
      // import文の順序を制限する。
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
      'import/order': [
        'warn',
        {
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'never',
          pathGroups: [
            {
              pattern: '~/**',
              group: 'parent',
            },
            {
              pattern: 'react',
              group: 'parent',
              position: 'before',
            },
          ],
        },
      ],
      // 匿名のexport defaultを禁止する。
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md
      'import/no-anonymous-default-export': 'error',
      // import文の記述を制限する。
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
      'import/no-unresolved': 'off',
      // Webpackの import * from 'loader!module' のような構文を禁止する。
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md
      'import/no-webpack-loader-syntax': 'error',
      // importするモジュールの名前の指定を制限する。
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md
      'import/named': 'off',
    },
  },
  {
    // JSX要素のアクセシビリティルールのチェックを行う。
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#readme
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    rules: jsxA11y.configs.recommended.rules,
  },
]

export default pluginConfig
