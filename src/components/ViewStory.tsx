import React, { useEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import { 
    StyleSheet, 
    View, 
    Text, 
    Image, 
    Dimensions, 
    TextInput, 
    TouchableOpacity, 
    Animated } from 'react-native'

// ambil id sesuai story yang di click
const ViewStory = ({route}) => {
  const selectedItem = route.params.item // ambil data story sesuai id
  const navigation = useNavigation()
  const currentTime = new Date()
  const currentHour = currentTime.getHours()
  const storyTime = currentHour - selectedItem.story.time
  const screenHeight = Dimensions.get('window').height // untuk mendapatkan tinggi layar
  const screenWidth = Dimensions.get('window').width // untuk mendapatkan lebar layar

  // animasi progress bar timeout
  const progressAnim = useRef(new Animated.Value(0)).current

  // timeout akses story
  useEffect(() => {
    // animasi progress bar timeout (3s)
    Animated.timing(progressAnim, {
        toValue: screenWidth, // animasi bergerak ke kanan
        duration: 5000,
        useNativeDriver: false,
    }).start()

    // timeout menutup story
    const timeout = setTimeout(() => {
      navigation.goBack()
    }, 5000)

    return () => {
        clearTimeout(timeout)
        progressAnim.setValue(screenWidth)
      };
  }, [navigation]) // dependency

  return (
    <View style={{flex: 1, backgroundColor: '#0f0f0f'}}>
        {/* PROGRESS BAR */}
        <View style={styles.progressBarContainer}>
            <Animated.View
            style={[
                styles.progressBar,
                { width: progressAnim }, 
            ]}
            />
        </View>
        
        {/* HEADER STORY */}
        <View style={styles.storyHeader}>
            <Image source={selectedItem.profile} style={styles.storyProfileUser} />
            <Text style={styles.username}>{selectedItem.name}</Text>
            <Text style={styles.storyTime}>{storyTime} hr</Text>
        </View>

        {/* CONTENT STORY */}
        <View style={styles.storyContent}>
            <Image 
                source={selectedItem.story.image} 
                style=
                {{
                    height: screenHeight - 90, 
                    width: screenWidth, 
                    resizeMode: 'cover',
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20,
                }} 
            />

            {/* REPLY */}
            <View style={styles.storyMessage}>
                <TextInput 
                    placeholder='Reply Story' 
                    placeholderTextColor="#aaa"
                    style={styles.input}
                />
                <TouchableOpacity>
                    <Image
                        style={{tintColor: 'white', marginLeft: 5}}
                        source={require('../assets/Like.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={{tintColor: 'white', marginLeft: 15}}
                        source={require('../assets/DirectMessage.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default ViewStory

const styles = StyleSheet.create({
    progressBarContainer: {
        height: 4,
        width: '100%',
        backgroundColor: '#333',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10, 
    },
    progressBar: {
        height: '100%',
        backgroundColor: 'gray', // Warna garis yang berkurang
    },
    storyHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
        gap: 10,
        paddingTop: 10,
        paddingLeft: 10
    },
    storyProfileUser: {
        height: 35,
        width: 35,
        borderRadius: 20
    },
    username: {
        color: 'white',
        fontSize: 14,
        fontWeight: 700
    },
    storyTime: {
        color: 'white',
        fontSize: 12,
        fontWeight: 600
    },
    storyContent: {
        position: 'absolute',
    },
    storyMessage: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: 'white',
        width: 300,
        paddingHorizontal: 15,
        color: 'white',
        borderRadius: 30,
        marginHorizontal: 5
    }
})