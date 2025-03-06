import React from 'react'
import Header from '../../components/Header'
import Stories from '../../components/Stories'
import { StyleSheet, Text, View } from 'react-native'

const Dashboard = () => {
  return (
    <View>
      <Header />
      <Stories />
      <View style={{justifyContent: 'flex-end', flex: 1}}>
        
      </View>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})