/**
 * React関連ルール
*/
import react from '../rules/react.js'
import style from '../rules/reactStyle.js'

/**
 * ESLintのReact用ルールを設定する。
 * @type {import("eslint").Linter.Config[]}
 */
const reactConfig = [
  ...react,
  ...style,
]

export default reactConfig
