import React from 'react'
import { UsersData } from '../utils/UsersData'
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'

const Post = () => {
  const screenHeight = Dimensions.get('window').height // untuk mendapatkan tinggi layar
  const screenWidth = Dimensions.get('window').width // untuk mendapatkan lebar layar
  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/') // pecah format 
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]
    return `${parseInt(day)} ${monthNames[parseInt(month) - 1]}`
  }


  return (
    <View>
       {UsersData.map(item => {
        return (
            <View style={{marginTop: 25}}>
                <View style={styles.profileAccount}>
                    <Image 
                        source={item.profile}
                        style={styles.imageProfile}
                    />
                    <Text style={styles.username}>{item.username}</Text>
                </View>
                <View>
                    <Image 
                        source={item.post.image} 
                        style={{width: screenWidth , height: screenHeight * 0.6}}
                    />
                </View>
                <View style={styles.activitiesIcon}>
                    <TouchableOpacity>
                        <Image 
                            source={require('../assets/Like.png')} 
                            style={{height: 24, width: 28}} 
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image 
                            source={require('../assets/Comment.png')} 
                            style={{height: 24, width: 24}} 
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image 
                            source={require('../assets/DirectMessage.png')} 
                            style={{height: 24, width: 28}} 
                        />
                    </TouchableOpacity>
                </View>
                <Text 
                    style={styles.like}>
                    {item.post.like} likes
                </Text>
                <View
                    style={styles.caption}>
                    <Text style={styles.account}>
                        {item.username}{' '}
                    </Text>
                    <Text>{item.post.caption}</Text>
                </View>
                <Text
                    style={styles.date}>
                    {formatDate(item.post.date)}
                </Text>
            </View>
        )
       })}
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
    profileAccount: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 8
    },
    imageProfile: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    username: {
        fontSize: 14,
        paddingLeft: 12,
        fontWeight: 600
    },
    activitiesIcon: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        gap: 10
    },
    like: {
        marginLeft: 20,
        marginTop: 10,
        fontSize: 14,
        fontWeight: '600',
    },
    caption: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    account: {
        fontSize: 15, 
        fontWeight: '600'
    },
    date: {
        paddingHorizontal: 20,
        marginTop: 10,
        color: 'gray',
        fontSize: 12
    }
})