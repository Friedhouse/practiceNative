import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNav from './src/navigators/AppNav';


//STARTING POINT OF YOUR APP -> notice we are passing in our STACK NAVIGATOR
//NavigationContainer is responsible for bringing our parent most navigator to your device i.e. HomeScreeStack
function App() {
  return (
    <NavigationContainer>
      <AppNav />
    </NavigationContainer>
  )
}

export default App
