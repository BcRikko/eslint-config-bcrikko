import stylisticJs from '@stylistic/eslint-plugin-js'
import stylisticPlus from '@stylistic/eslint-plugin-plus'

/**
 * @stylisticのルールを設定する。
 * https://eslint.style/packages/js
 * @type {import("eslint").Linter.Config[]}
 */
const style = [
  {
    plugins: {
      '@stylistic/js': stylisticJs,
      '@stylistic/plus': stylisticPlus,
    },

    /**
     * @type {import("@stylistic/eslint-plugin-js").RuleOptions}
     */
    rules: {
      // インデントを統一する。
      // https://eslint.style/rules/js/indent
      '@stylistic/js/indent': [
        'error',
        2,
      ],
      // 改行コードを LF（\n）に統一する。
      // https://eslint.style/rules/js/linebreak-style
      '@stylistic/js/linebreak-style': [
        'error',
        'unix',
      ],
      // シングルクォート（'）を使用する。
      // https://eslint.style/rules/js/quotes
      '@stylistic/js/quotes': [
        'error',
        'single',
      ],
      // セミコロン（;）を許可しない。
      // https://eslint.style/rules/js/semi
      '@stylistic/js/semi': [
        'error',
        'never',
      ],
      // 改行開業を含む場合は末尾にカンマを強制する。
      // https://eslint.style/rules/js/comma-dangle
      '@stylistic/js/comma-dangle': [
        'error',
        'always-multiline',
      ],
      // {} 内にスペースを強制する。
      // https://eslint.style/rules/js/object-curly-spacing
      '@stylistic/js/object-curly-spacing': [
        'error',
        'always',
      ],
      // {} の前にスペースを強制する。
      // https://eslint.style/rules/js/space-before-blocks
      '@stylistic/js/space-before-blocks': 'error',
      // 関数の () の前にスペースを制御する。
      // https://eslint.style/rules/js/space-before-function-paren
      '@stylistic/js/space-before-function-paren': [
        'error',
        {
          anonymous: 'never',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
      // ()内のスペースを禁止する。
      // https://eslint.style/rules/js/space-in-parens
      '@stylistic/js/space-in-parens': [
        'error',
        'never',
      ],
      // 演算子の前後にスペースを強制する。
      // https://eslint.style/rules/js/space-infix-ops
      '@stylistic/js/space-infix-ops': 'error',
      // 末尾のスペースを禁止する。
      // https://eslint.style/rules/js/no-trailing-spaces
      '@stylistic/js/no-trailing-spaces': 'error',
      // JSXのクオートはダブルクオートを強制する。
      // https://eslint.style/rules/js/jsx-quotes
      '@stylistic/js/jsx-quotes': [
        'error',
        'prefer-double',
      ],
      // 三項演算子のスタイルを強制する。
      // https://eslint.style/rules/js/multiline-ternary
      '@stylistic/js/multiline-ternary': [
        'error',
        'always-multiline',
      ],
      // 改行するときに演算子を先頭につける。
      // https://eslint.style/rules/js/operator-linebreak
      '@stylistic/js/operator-linebreak': [
        'error',
        'before',
      ],
      // いらないスペースを禁止する。
      // https://eslint.style/rules/default/no-multi-spaces
      '@stylistic/js/no-multi-spaces': [
        'error',
        {
          // コメント前のスペースは無視する。(デフォルト: false)
          'ignoreEOLComments': true,
        },
      ],
      // 1行の文字数を制限する。
      // https://eslint.style/rules/js/max-len
      '@stylistic/js/max-len': [
        'warn',
        {
          code: 120,
          tabWidth: 2,
          ignoreUrls: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true,
          ignoreTrailingComments: true,
        },
      ],
    },
  },
]

export default style
