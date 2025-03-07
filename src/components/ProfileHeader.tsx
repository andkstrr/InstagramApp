import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';

const ProfileHeader = () => {
  const [open, setOpen] = useState(false);
  const handleModal = () => {
    setOpen(!open);
  };
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
          <TouchableOpacity onPress={handleModal}>
            <Image
              source={require('../assets/icon/Menu.png')}
              style={{width: 22, height: 20, tintColor: 'black'}}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* MODAL */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={() => {
          setOpen(!open);
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              backgroundColor: '#ffffff',
              height: 400, // Ubah tinggi modal agar tidak full screen
              borderTopEndRadius: 25,
              borderTopStartRadius: 25,
              width: '100%',
              alignSelf: 'center',
              paddingBottom: 20, // Beri ruang di bawah
            }}>
            <TouchableOpacity onPress={handleModal}>
              <View style={{alignItems: 'center', paddingVertical: 10}}>
                <View
                  style={{
                    width: 40,
                    height: 4,
                    backgroundColor: '#ccc',
                    borderRadius: 2,
                  }}
                />
              </View>
            </TouchableOpacity>
            <View style={{paddingHorizontal: 20}}>
              {[
                'Setting and privacy',
                'Your activity',
                'Archive',
                'Saved',
                'SuperVision',
                'Meta Verified', // Perbaiki typo "Meta Varified"
                'Close Friends',
                'Favourites',
              ].map((item, index) => (
                <TouchableOpacity key={index} style={{borderBottomWidth: 1}}>
                  <Text style={{fontSize: 18, paddingVertical: 15}}>
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 15,
    paddingHorizontal: 20,
    height: 55,
  },
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  username: {
    fontSize: 20,
    fontWeight: 700,
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
