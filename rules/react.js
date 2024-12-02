import reactHooksPlugin from 'eslint-plugin-react-hooks'
import reactPlugin from 'eslint-plugin-react'

/**
 * React関連のルールを設定する。
 * @type {import("eslint").Linter.Config[]}
 */
const reactConfig = [
  // Reactでのコーディング規約を定める。
  // https://github.com/jsx-eslint/eslint-plugin-react
  reactPlugin.configs.flat.recommended,
  // React Hooksのルールを定める。
  // https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
  {
    plugins: {
      'react-hooks': reactHooksPlugin,
    },
    rules: reactHooksPlugin.configs.recommended.rules,
  },
  {
    rules: {
      // propTypesの使用を禁止する。
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
      'react/forbid-foreign-prop-types': 'error',
      // ユーザー定義コンポーネントはPascalCaseを強制する。
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
      'react/jsx-pascal-case': 'error',
      // リテラルだけで十分なときはJSXを使わない。
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
      'react/jsx-curly-brace-presence': 'error',
      // NOTE: jsx-users-react と react-in-jsx-scope はReact17以降では不要なためOffにする（https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md#when-not-to-use-it）
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      // よくあるタイムミスをチェックする。
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md
      'react/no-typos': 'error',
      // スタイルプロパティの値がオブジェクトであることを強制する。
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
      'react/style-prop-object': 'warn',
    },
  },
]

export default reactConfig
