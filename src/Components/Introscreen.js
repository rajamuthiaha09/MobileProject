import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

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
        <Text style={styles.subTitle}>
          Explore all the existing job roles based on your interest and study
          major
        </Text>
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
    backgroundColor: '#FFFFFF',
    padding: 20,
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
    fontSize: 40,
    fontFamily: 'Poppins-SemiBold',
    paddingHorizontal: 20,
    textAlign: 'center',
    color: '#1F41BB',
    marginTop: 40,
  },
  subTitle: {
    fontSize: 18,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: '#000',
    fontFamily: 'Poppins-Medium',
    marginVertical: 20,
  },
  loginButton: {
    backgroundColor: '#1F41BB',
    borderRadius: 5,
    marginTop: 20,
    // width: 20,
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    // textAlign: 'center',
    padding: 10,
  },
});
