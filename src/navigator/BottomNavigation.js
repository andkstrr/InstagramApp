import React from 'react'
import { View, Text } from 'react-native'
import Reel from '../screen/dashboard/Reel'
import Search from '../screen/dashboard/Search'
import AddPost from '../screen/dashboard/AddPost'
import Dashboard from '../screen/dashboard/Dashboard'
import UserProfile from '../screen/dashboard/UserProfile'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={Dashboard} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Add" component={AddPost} />
        <Tab.Screen name="Reel" component={Reel} />
        <Tab.Screen name="Profile" component={UserProfile} />
    </Tab.Navigator>
  )
}

export default BottomNavigation

// name = href
// component = halaman yang dituju