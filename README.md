# eslint-config-bcrikko

私が個人的に使っているESLint/Stylisticのルールプリセット。


## Installation

```sh
$ npm i -D git+https://github.com/BcRikko/eslint-config-bcrikko
```

## Usage

```js
// eslint.config.js
import base from '@bcrikko/eslint-config-bcrikko'
import react from '@bcrikko/eslint-config-bcrikko/react'

/**
 * @type {import("eslint").Linter.FlatConfig[]}
 */
const config = [
  ...base,
  ...react,
  {
    files: [],
    ignores: [],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Overwrite rule
      '@typescript-eslint/no-var-requires': 'off',
    }
  }
]
```


## Development

```
./
 |- configs
 |   |- index.js  // Base rules
 |   |- react.js  // for React
 |- rules         // eslint rules
 |   |- javascript.js
 |   |- typescript.js
 |   |- react.js
 |   |- plugins.js
 |- styles        // stylistic rules
     |- jsStyle.js
     |- tsStyle.js
     |- reactStyle.js
```
