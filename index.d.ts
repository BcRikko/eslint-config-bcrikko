declare module 'eslint-config-bcrikko' {
  import { Linter } from 'eslint';

  const baseConfig: Linter.Config[];
  export default baseConfig;
}

declare module 'eslint-config-bcrikko/react' {
  import { Linter } from 'eslint';

  const reactConfig: Linter.Config[];
  export default reactConfig;
}
