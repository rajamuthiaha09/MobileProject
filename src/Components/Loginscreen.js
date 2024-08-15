import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image, TextInput,KeyboardAvoidingView, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { COLORS, SIZES } from '../constants/themes';

const Loginscreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validationForm = () => {
    let errors = {};
    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "password is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = () => {
    if(validationForm()) {
      console.log("submitted",username, password);
      setUsername("");
      setPassword("");
      setErrors({});
    }

  };
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
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              placeholderTextColor={'#AEB5BB'}
              onChangeText={setUsername}
            />
          </View>
          {errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
              placeholderTextColor={'#AEB5BB'}
              secureTextEntry
              onChangeText={setPassword}
            />
          </View>
          {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
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
    backgroundColor: COLORS.$White,
    padding: SIZES.padding_20,
  },
  backButton: {
    height: 40,
    width: 40,
    backgroundColor: COLORS.$gray,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginVertical: 20,
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
  headingText: {
    fontSize: SIZES.sz_32_font,
    color: COLORS.$primary,
    fontFamily: 'Poppins-SemiBold',
  },
  formContainer: {
    marginTop: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#AEB5BB',
    borderRadius: 100,
    paddingHorizontal: SIZES.padding_20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: SIZES.padding_2,
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: SIZES.padding_10,
    fontFamily: 'Poppins-Light',
  },
  forgotPasswordText: {
    textAlign: 'right',
    color: COLORS.$primary,
    fontFamily: 'Poppins-SemiBold',
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: COLORS.$blue_shade_2,
    borderRadius: 100,
    marginTop: 20,
  },
  loginText: {
    color: COLORS.$White,
    fontSize: SIZES.sz_20_font,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    padding: SIZES.padding_10,
  },
  continueText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: SIZES.sz_14_font,
    fontFamily: 'Poppins-Regular',
    color: COLORS.$primary,
  },
  googleButton: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: COLORS.$primary,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SIZES.padding_10,
    gap: 10,
  },
  googleImage: {
    height: 20,
    width: 20,
  },
  googleText: {
    fontSize: SIZES.sz_20_font,
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
    color: COLORS.$primary,
    fontFamily: 'Poppins-Regular',
  },
  signupText: {
    color: COLORS.$primary,
    fontFamily: 'Poppins-Bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  }
});
