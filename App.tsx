import React from 'react'

import ApolloContext from './areas/contexts/ApolloContext'
import NativeBaseContext from './areas/contexts/NativeBaseContext'
import NavigationContext from './areas/contexts/NavigationContext'
import SupabaseContext from './areas/contexts/SupabaseContext'

export default function App(): JSX.Element {
  return (
    <SupabaseContext>
      <ApolloContext>
        <NativeBaseContext>
          <NavigationContext />
        </NativeBaseContext>
      </ApolloContext>
    </SupabaseContext>
  )
}
