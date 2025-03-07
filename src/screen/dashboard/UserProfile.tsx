import React from 'react'
import ProfileHeader from '../../components/ProfileHeader'
import ProfileDetails from '../../components/ProfileDetails'
import ProfilePost from '../../components/ProfilePost'
import { StyleSheet, Text, View } from 'react-native'

const UserProfile = () => {
  return (
    <View style={{flex: 1}}>
      <ProfileHeader />
      <ProfileDetails />
      <ProfilePost />
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({})