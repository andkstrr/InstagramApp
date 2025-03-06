import React from 'react'
import { UsersData } from '../utils/UsersData'
import { AppColor } from '../utils/AppColor'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

const Stories = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.storyContainer}>
      {/* Map Data dari UsersData */}
      {UsersData.map((item) => {
        return (
            <View key={item.id} style={{marginLeft: 10}}>
              <TouchableOpacity onPress={() => {navigation.navigate('Story', {item})}}>
                <View style={styles.storyImageContainer}>
                    <Image source={item.profile} style={styles.storyImageProfile}></Image>
                </View>
              </TouchableOpacity>
              <Text style={styles.storyUserName}>{item.name}</Text>
            </View>
        )
      })}
    </View>
  )
}

export default Stories

const styles = StyleSheet.create({
    storyContainer: {
        flexDirection: 'row', 
        marginTop: 10
    },
    storyImageContainer: {
        borderWidth: 3,
        borderRadius: 40,
        borderColor: '#e5009f',
        // borderColor: AppColor.GRADIENT,
        // borderColor: linear-gradient('to right',  '#f9ce34', '#ee2a7b', '#6228d7'),
        padding: 2
    },
    storyImageProfile: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    storyUserName: {
        color: 'black',
        fontSize: 12,
        marginTop: 5,
        textAlign: 'center'
    }
})