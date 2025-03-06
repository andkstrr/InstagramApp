import React from 'react'
import Post from '../../components/Post'
import Header from '../../components/Header'
import Stories from '../../components/Stories'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const Dashboard = () => {
  return (
    <ScrollView>
      <View>
        <Header />
        <Stories />
        <Post />
      </View>
    </ScrollView>
  )
}

export default Dashboard

const styles = StyleSheet.create({})