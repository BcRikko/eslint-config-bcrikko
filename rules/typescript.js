import typescript from 'typescript-eslint'

/**
 * TypeScriptのルールを設定する。
 * https://typescript-eslint.io/rules/
 * @type {import("eslint").Linter.Config[]}
 */
const typescriptConfig = [
  // TypeScriptのコーディング規約を定める。
  // https://github.com/typescript-eslint/typescript-eslint
  ...typescript.configs.recommended,
  {
    rules: {
      // メンバ変数/メソッドの順序を強制する。
      // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/member-ordering.md
      '@typescript-eslint/member-ordering': 'error',
      // 未使用の変数を許可しない。ただし、変数名がアンダースコアで始まる場合は除外する。
      // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unused-vars.md
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      // 引数、戻り値の型の省略を許可しない。
      // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
      '@typescript-eslint/explicit-module-boundary-types': ['error'],
    },
  },
]

export default typescriptConfig
