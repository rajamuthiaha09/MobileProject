import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ProfileEditPage = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.profileHeader}>My Profile</Text>
      <Text style={styles.profileUser}>Rajaha Muthiaha</Text>
      <Text style={styles.profileUserEmail}>rajahamuthiaha@gmail.com</Text>
    </View>

  );
};

export default ProfileEditPage;

const styles = StyleSheet.create({

});
