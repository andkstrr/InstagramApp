import React from 'react'
import Login from '../screen/auth/Login'
import SignUp from '../screen/auth/SignUp'
import ViewStory from '../components/ViewStory'
import BottomNavigation from './BottomNavigation'
import Dashboard from '../screen/dashboard/Dashboard'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Dashboard} />
        <Stack.Screen name="Story" component={ViewStory} />
        <Stack.Screen name="Dashboard" component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation

// name = href
// component = halaman yang dituju
