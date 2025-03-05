import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import Login from './src/screen/auth/Login'
import SignUp from './src/screen/auth/SignUp'
import InputBox from './src/components/InputBox'
import Button from './src/components/Button'

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'}  />
      <Login />
      {/* <SignUp /> */}
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