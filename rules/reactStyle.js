import stylistic from '@stylistic/eslint-plugin'

/**
 * @stylisticのルールを設定する。
 * https://eslint.style/packages/default
 * @type {import("eslint").Linter.Config[]}
 */
const style = [
  {
    plugins: {
      '@stylistic': stylistic,
    },

    /**
     * @type {import("@stylistic/eslint-plugin").RuleOptions}
     */
    rules: {
    },
  },
]

export default style
