import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Screens/Splash';
import Home from './Screens/Home';
import Login from './Screens/Login';
const Stack = createStackNavigator()


const AppNavigator = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator>
     <Stack.Screen options={{headerShown:false}} name='Splash' component={Splash}>
     </Stack.Screen>
     <Stack.Screen options={{headerShown:false}} name='Home' component={Home}>
     </Stack.Screen>
     <Stack.Screen options={{headerShown:false}} name='Login' component={Login}>
     </Stack.Screen>

     

     </Stack.Navigator>
      
    </NavigationContainer>
  )
}

export default AppNavigator