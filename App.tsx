import React from 'react'
import Login from './src/screen/auth/Login'
import StackNavigation from './src/navigator/StackNavigation'
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'gray'} translucent={false} />
      <StackNavigation />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  }
})