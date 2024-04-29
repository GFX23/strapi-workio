
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://127.0.0.1:1337/graphql",
   generates: {
     "app/_gql/types.ts": {
        plugins: ["typescript"],
      },
   },
};

export default config;
