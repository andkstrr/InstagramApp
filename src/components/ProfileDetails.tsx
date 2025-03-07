import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const ProfileDetails = () => {
  return (
    <View style={styles.detailsContainer}>
      <View style={styles.profileDetails}>
        <Image 
            source={require('../assets/data/andkstrr.jpg')}
            style={styles.profileImage}
        />
        <View style={styles.detailsComponents}>
            <Text style={styles.value}>1</Text>
            <Text style={styles.type}>Post</Text>
        </View>
        <View style={styles.detailsComponents}>
            <Text style={styles.value}>1.652</Text>
            <Text style={styles.type}>Followers</Text>
        </View>
        <View style={styles.detailsComponents}>
            <Text style={styles.value}>835</Text>
            <Text style={styles.type}>Following</Text>
        </View>
      </View>
      <Text style={styles.name}>Andika Satrio Nurcahyo</Text>
      <Text style={styles.bio}>[ فَاسْتَبِقُوا الْخَيْرَاتِ ]</Text>
      <View style={{flexDirection: 'row', gap: 10, marginTop: 15}}>
        <TouchableOpacity>
          <Text
            style={{
              backgroundColor: '#E1E1E1',
              width: 150,
              paddingVertical: 5,
              borderRadius: 5,
              textAlign: 'center',
              color: 'black',
            }}>
            Edit Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              backgroundColor: '#E1E1E1',
              width: 150,
              paddingVertical: 5,
              borderRadius: 5,
              textAlign: 'center',
              color: 'black',
            }}>
            Share Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={{width: 45, height: 29, backgroundColor: '#E1E1E1', paddingVertical: 5, borderRadius: 5}}>
                <Image
                    source={require('../assets/AddMember.png')}
                    style={{width: 18, height: 18, alignSelf: 'center'}}
                />
            </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProfileDetails

const styles = StyleSheet.create({
    detailsContainer: {
        paddingHorizontal: 15
    },
    profileDetails: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 10
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 50
    },
    detailsComponents: {
        width: 73,
        alignItems: 'center'
    },
    value: {
        fontSize: 20,
        fontWeight: 500
    },
    type: {
        fontSize: 14
    },
    name: {
        fontSize: 14,
        fontWeight: 600,
        marginTop: 10
    },
    bio: {
        fontSize: 13,
        fontWeight: 500,
        marginTop: 2
    }
})