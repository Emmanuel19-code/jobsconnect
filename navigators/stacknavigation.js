import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/home'
import LogIn from '../screens/login'
import Confirm from '../screens/confirm'
import SignUp from '../screens/SignUp'
import NextSignUp from '../screens/NextSignUp'

const stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <stack.Navigator>
        <stack.Screen name='home' component={Home} options={{ 
             headerShown:false
         }}/>
         <stack.Screen name='login' component={LogIn} options={{ 
             headerShown:false
          }}/>
          <stack.Screen name='confirm' component={Confirm} options={{ 
             headerShown:false
           }}/>
           <stack.Screen name='signup' component={SignUp} options={{ 
             headerShown:false
            }}/>
            <stack.Screen name='nextsignup' component={NextSignUp} options={{ 
                headerShown:false
             }}/>
    </stack.Navigator>
  )
}

export default StackNavigation