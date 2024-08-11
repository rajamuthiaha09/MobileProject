import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Homescreen = () => {
  const navigation = useNavigation();
  return (
    // <View>
    // <Text>Homescreen</Text>
    // <TouchableOpacity onPress={() => navigation.navigate("Loginscreen")}>
    //     <Text>Button Navigartion</Text>
    // </TouchableOpacity>
    // </View>

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
      Explore all the existing job roles based on your interest and study major
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Loginscreen')}
          style={[styles.loginButton, {backgroundColor: '#AEB5BB'}]}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signupscreen')} style={[styles.loginButton]}>
          <Text style={styles.signupButtonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Coursename')} style={[styles.loginButton,styles.buttonContainer]}>
          <Text style={styles.signupButtonText}>Sign-up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileEditPage')} style={[styles.loginButton,styles.buttonContainer]}>
          <Text style={styles.signupButtonText}>Sign-up</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
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
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#45484A',
    width: '80%',
    height: 60,
    borderRadius: 100,
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius: 98,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  signupButtonText: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
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
});
