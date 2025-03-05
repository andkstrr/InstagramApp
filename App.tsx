import React from 'react'
import Login from './src/screen/auth/Login'
import StackNavigation from './src/navigator/StackNavigation'
import { StyleSheet, Text, View, StatusBar } from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'}  />
      <StackNavigation />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
  }
})