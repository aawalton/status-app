// eslint-disable-next-line import/no-extraneous-dependencies
import { CodegenConfig } from '@graphql-codegen/cli'

import { supabaseAnonKey } from './lib/supabase'

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://horcasnctsmodefampep.supabase.co/graphql/v1': {
        headers: {
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`,
        },
      },
    },
  ],
  documents: 'areas/**/*',
  generates: {
    'generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        nonOptionalTypename: true,
        scalars: {
          Datetime: 'string',
          UUID: 'string',
        },
      },
    },
  },
}

export default config
