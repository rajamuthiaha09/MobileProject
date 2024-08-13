import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image, TextInput,KeyboardAvoidingView, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import Ionicons from "react-native-vector-icons/Ionicons";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const Loginscreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    // <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}> This is uesed for adject the mobile screen whaen i type anything
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.headingText}>Hey,</Text>
          <Text style={styles.headingText}>Welcome</Text>
          <Text style={styles.headingText}>Back</Text>
        </View>
        <View>
          <Text style={styles.title}>Login here</Text>
          <Text style={styles.subTitle}>Welcome back you’ve been missed!</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            {/* <Ionicons name={'mail-outline'} size={30} color={'#AEB5BB'} /> */}
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email"
              placeholderTextColor={'#AEB5BB'}
              keyboardType="email-address"
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.inputContainer}>
            {/* <SimpleLineIcons name={'lock'} size={30} color={'#AEB5BB'} /> */}
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
              placeholderTextColor={'#AEB5BB'}
              secureTextEntry
              onChangeText={setPassword}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <View
            style={{
              marginVertical: 50,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{flex: 0.5, height: 2, backgroundColor: 'red'}} />
            <Text style={{flex: 1, textAlign: 'center'}}>Or continue with</Text>
            <View style={{flex: 0.5, height: 2, backgroundColor: 'red'}} />
          </View>
          {/* <Text style={styles.continueText}>or continue with</Text> */}
          <TouchableOpacity style={styles.googleButton}>
            <Image
              source={require('../assets/images/Vector.png')}
              style={styles.googleImage}
            />
            <Text style={styles.googleText}>Google</Text>
          </TouchableOpacity>
          <View style={styles.footerContainer}>
            <Text style={styles.accountText}>Don’t have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Signupscreen')}>
              <Text style={styles.signupText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    // </KeyboardAvoidingView>
  );
};

export default Loginscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  backButton: {
    height: 40,
    width: 40,
    backgroundColor: 'gray',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginVertical: 20,
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
  headingText: {
    fontSize: 32,
    color: '#45484A',
    fontFamily: 'Poppins-SemiBold',
  },
  formContainer: {
    marginTop: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#AEB5BB',
    borderRadius: 100,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: 'Poppins-Light',
  },
  forgotPasswordText: {
    textAlign: 'right',
    color: '#45484A',
    fontFamily: 'Poppins-SemiBold',
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: '#1F41BB',
    borderRadius: 100,
    marginTop: 20,
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    padding: 10,
  },
  continueText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#45484A',
  },
  googleButton: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#45484A',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    gap: 10,
  },
  googleImage: {
    height: 20,
    width: 20,
  },
  googleText: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    gap: 5,
  },
  accountText: {
    color: '#45484A',
    fontFamily: 'Poppins-Regular',
  },
  signupText: {
    color: '#45484A',
    fontFamily: 'Poppins-Bold',
  },
});
