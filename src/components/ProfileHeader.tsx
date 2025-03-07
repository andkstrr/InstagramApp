import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

const ProfileHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.profileHeader}>
        <Text style={styles.username}>andkstrr_</Text>
        <View style={styles.icon}>
           <TouchableOpacity style={{marginRight: 15}}>
              <Image 
                source={require('../assets/footer/addPost.png')} 
                style={{width: 25, height: 25}}
               />
           </TouchableOpacity>
           <TouchableOpacity>
              <Image 
                source={require('../assets/icon/Menu.png')} 
                style={{width: 22, height: 20, tintColor: 'black'}}
               />
           </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProfileHeader

const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: 15,
        paddingHorizontal: 20,
        height: 55
    },
    profileHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    username: {
        fontSize: 20,
        fontWeight: 700,
    },
    icon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
})