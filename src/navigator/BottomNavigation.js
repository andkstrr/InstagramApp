import React from 'react'
import {View, Text, Image} from 'react-native'
import Reel from '../screen/dashboard/Reel'
import Search from '../screen/dashboard/Search'
import AddPost from '../screen/dashboard/AddPost'
import Dashboard from '../screen/dashboard/Dashboard'
import UserProfile from '../screen/dashboard/UserProfile'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{height: 24, width: 24}}
              source={
                focused
                  ? require('../assets/footer/sHomeButton.png')
                  : require('../assets/footer/homeButton.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{height: 24, width: 24}}
              source={
                focused
                  ? require('../assets/footer/sSearch.png')
                  : require('../assets/footer/search.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={AddPost}
        options={{
          tabBarIcon: () => (
            <Image
              style={{height: 24, width: 24}}
              source={require('../assets/footer/addPost.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reel}
        options={{
          tabBarIcon: () => (
            <Image
              style={{height: 24, width: 24}}
              source={require('../assets/footer/reel.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          tabBarIcon: () => (
            <Image
              style={{height: 24, width: 24}}
              source={require('../assets/footer/user.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomNavigation