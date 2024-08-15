import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput,} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { COLORS, SIZES } from '../constants/themes';

const IntroScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Image
          source={require('../assets/images/Frame8.png')}
          style={styles.logo}
        />
        <Image
          source={require('../assets/images/Image.png')}
          style={styles.bannerImage}
        />
        <Text style={styles.title}>Discover Your Dream Job here</Text>
        <Text style={styles.subTitle}>Explore all the existing job roles based on your interest and study major</Text>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Homescreen')}>
        <Text style={styles.loginText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.$White,
    padding: SIZES.padding_20,
    alignItems: 'center',
  },
  logo: {
    height: 40,
    width: 140,
    marginVertical: 30,
  },
  bannerImage: {
    marginVertical: 20,
    height: 330,
    width: 305,
  },
  title: {
    fontSize: SIZES.sz_40_font,
    fontFamily: 'Poppins-SemiBold',
    paddingHorizontal: SIZES.padding_20,
    textAlign: 'center',
    color: COLORS.$blue_shade_2,
    marginTop: 40,
  },
  subTitle: {
    fontSize: SIZES.sz_18_font,
    paddingHorizontal: SIZES.padding_20,
    textAlign: 'center',
    color: COLORS.$black,
    fontFamily: 'Poppins-Medium',
    marginVertical: 20,
  },
  loginButton: {
    backgroundColor: COLORS.$blue_shade_2,
    borderRadius: 5,
    marginTop: 20,
  },
  loginText: {
    color: COLORS.$White,
    fontSize: SIZES.sz_20_font,
    fontFamily: 'Poppins-SemiBold',
    padding: SIZES.padding_10,
  },
});
