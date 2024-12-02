import stylisticTs from '@stylistic/eslint-plugin-ts'

/**
 * @stylisticのルールを設定する。
 * https://eslint.style/packages/ts
 * @type {import("eslint").Linter.Config[]}
 */
const style = [
  {
    plugins: {
      '@stylistic/ts': stylisticTs,
    },

    /**
     * @type {import("@stylistic/eslint-plugin-ts").RuleOptions}
     */
    rules: {},
  },
]

export default style
