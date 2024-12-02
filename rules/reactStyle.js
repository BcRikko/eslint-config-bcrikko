import stylisticJsx from '@stylistic/eslint-plugin-jsx'

/**
 * @stylisticのルールを設定する。
 * https://eslint.style/packages/jsx
 * @type {import("eslint").Linter.Config[]}
 */
const style = [
  {
    plugins: {
      '@stylistic/jsx': stylisticJsx,
    },

    /**
     * @type {import("@stylistic/eslint-plugin-jsx").RuleOptions}
     */
    rules: {
    },
  },
]

export default style
