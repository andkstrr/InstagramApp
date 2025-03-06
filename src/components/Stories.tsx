import React from 'react';
import { UsersData } from '../utils/UsersData';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';

const Stories = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.storyContainer}>
      <FlatList
        data={UsersData}
        keyExtractor={(item) => item.id.toString()} // Memastikan setiap item punya key unik
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{ marginLeft: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Story', { item })}>
              <View style={styles.storyImageContainer}>
                <Image source={item.profile} style={styles.storyImageProfile} />
              </View>
            </TouchableOpacity>
            <Text style={styles.storyUserName}>
              {item.username.length > 10 ? item.username.slice(0, 10) + '...' : item.username}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  storyContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  storyImageContainer: {
    borderWidth: 3,
    borderRadius: 40,
    borderColor: '#e5009f',
    padding: 2,
  },
  storyImageProfile: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  storyUserName: {
    color: 'black',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
    maxWidth: 75, // Membatasi lebar username agar tidak terlalu panjang
  },
});
