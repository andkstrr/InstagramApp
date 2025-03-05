import React from 'react'
import {View, Text} from 'react-native'
import Login from '../screen/auth/Login'
import SignUp from '../screen/auth/SignUp'
import Header from '../components/Header'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Header} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation
