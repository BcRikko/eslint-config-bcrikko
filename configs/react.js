/**
 * React関連ルール
*/
import react from '../rules/react.js'
import style from '../styles/reactStyle.js'

/**
 * ESLintのReact用ルールを設定する。
 * @type {import("eslint").Linter.FlatConfig[]}
 */
const reactConfig = [
  ...react,
  ...style,
]

export default reactConfig
