import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import AccountScreen from '../account/AccountScreen'
import Auth from '../account/Auth'
import AchievementScreen from '../achievements/AchievementScreen'
import { useSession } from './SupabaseContext'
import { RootStackParamList } from './types'

const Stack = createNativeStackNavigator<RootStackParamList>()

const linking = {
  prefixes: ['https://statuspage.ai'],
  config: {
    screens: {
      Achievements: 'achievements',
      Account: 'account',
    },
  },
}

function NavigationContext(): JSX.Element {
  const session = useSession()

  if (!session || !session.user) return <Auth />
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Achievements">
        <Stack.Screen
          name="Achievements"
          component={AchievementScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationContext
