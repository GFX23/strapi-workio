
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://127.0.0.1:1337/graphql",
  documents: "app/**/*.tsx",
  generates: {
    "app/_gql/": {
      preset: "client",
      plugins: []
    },
  }
};

export default config;
