import { NativeBaseProvider, extendTheme } from 'native-base'
import React, { ReactNode } from 'react'

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
}

// extend the theme
const theme = extendTheme({ config })
type MyThemeType = typeof theme
declare module 'native-base' {
  type ICustomTheme = MyThemeType
}

function NativeBaseContext({ children }: { children: ReactNode }): JSX.Element {
  return <NativeBaseProvider>{children}</NativeBaseProvider>
}

export default NativeBaseContext
