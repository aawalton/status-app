import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import React, { ReactNode, useMemo } from 'react'

import { supabaseAnonKey, supabaseUrl } from '../../lib/supabase'
import { useSession } from './SupabaseContext'

function ApolloContext({ children }: { children: ReactNode }): JSX.Element {
  const session = useSession()

  const httpLink = useMemo(
    () =>
      createHttpLink({
        uri: `${supabaseUrl}/graphql/v1`,
      }),
    []
  )

  const authLink = useMemo(
    () =>
      setContext((_, { headers }: { headers: Record<string, unknown> }) => {
        return {
          headers: {
            ...headers,
            apikey: supabaseAnonKey,
            authorization: `Bearer ${session?.access_token as string}`,
          },
        }
      }),
    [session?.access_token]
  )

  const client = useMemo(
    () =>
      new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
      }),
    [authLink, httpLink]
  )

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloContext
