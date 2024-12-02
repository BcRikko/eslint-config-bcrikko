import js from '@eslint/js'

/**
 * ESLintのルールを設定する。
 * https://eslint.org/docs/latest/rules/
 * @type {import("eslint").Linter.Config[]}
 */
const config = [
  // https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js
  js.configs.recommended,
  {
    rules: {
      // アロー関数の {} を省略を許可する。
      // https://eslint.org/docs/latest/rules/arrow-body-style
      'arrow-body-style': [
        'error',
        'as-needed',
      ],
      // オブジェクトの参照をドット表記にする。
      // https://eslint.org/docs/latest/rules/dot-notation
      'dot-notation': 'error',
      // デバッグ用のコードを発見するため、consoleの使用を制限する。
      // https://eslint.org/docs/latest/rules/no-console
      'no-console': [
        'warn',
        { allow: ['assert'] },
      ],
    },
  },
]

export default config
