import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {COLORS, SIZES} from '../constants/themes';
import { commonStyles } from '../constants';

const Signupscreen = () => {
  const navigation = useNavigation();
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    password: Yup.string().required('Password is required').min(6, 'Password should be at least 6 characters'),
    email: Yup.string().required('Email is required'),
    phonenumber: Yup.string().required('phonenumber is required'),
  });
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phonenumber: '',
      password: '',
      email: '',
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      Alert.alert('Registered Successfully!!');
    },
  });

  const getInputStyle = field => [
    styles.formInputContainer,
    formik.touched[field] && formik.errors[field] ? styles.inputError : null,
  ];
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Let's get</Text>
        <Text style={styles.headingText}>started</Text>
      </View>
      <View>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subTitle}>Create an account so you can explore all the Course</Text>
      </View>
      
      {/* form 1*/}
      <View>
        <View style={styles.formStyle}>
          <View style={{flex: 1, marginEnd: 5}}>
            <TextInput
              style={getInputStyle('firstName')}
              placeholder="First Name"
              placeholderTextColor={'gray'}
              cursorColor={'black'}
              selectionColor={'orange'}
              onChangeText={formik.handleChange('firstName')}
              onBlur={formik.handleBlur('firstName')}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <Text style={styles.errorText}>{formik.errors.firstName}</Text>
            ) : null}
          </View>
          <View style={{flex: 1, marginStart: 5}}>
            <TextInput
              style={getInputStyle('lastName')}
              placeholder="Last Name"
              placeholderTextColor={'gray'}
              cursorColor={'black'}
              selectionColor={'orange'}
              onChangeText={formik.handleChange('lastName')}
              onBlur={formik.handleBlur('lastName')}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <Text style={styles.errorText}>{formik.errors.lastName}</Text>
            ) : null}
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <TextInput
            style={styles.formInputContainer}
            placeholder="Email"
            placeholderTextColor={'gray'}
            cursorColor={'black'}
            selectionColor={'orange'}
            keyboardType="email-address"
            onChangeText={formik.handleChange('email')}
            onBlur={formik.handleBlur('email')}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <Text style={styles.errorText}>{formik.errors.email}</Text>
          ) : null}
        </View>
        <View style={{marginTop: 20}}>
          <TextInput
            style={getInputStyle('password')}
            placeholder="Password"
            placeholderTextColor={'gray'}
            cursorColor={'black'}
            selectionColor={'orange'}
            secureTextEntry
            onChangeText={formik.handleChange('password')}
            onBlur={formik.handleBlur('password')}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <Text style={styles.errorText}>{formik.errors.password}</Text>
          ) : null}
        </View>
        <View style={{marginTop: 20}}>
          <TextInput
            style={styles.formInputContainer}
            placeholder="Confirm Password"
            placeholderTextColor={'gray'}
            cursorColor={'black'}
            selectionColor={'orange'}
            secureTextEntry
          />
        </View>
        <View style={{marginTop: 20}}>
          <TextInput
            style={styles.formInputContainer}
            placeholder="Mobile"
            placeholderTextColor={'gray'}
            cursorColor={'black'}
            selectionColor={'orange'}
            keyboardType="phone-pad"
            onChangeText={formik.handleChange('phonenumber')}
            onBlur={formik.handleBlur('phonenumber')}
            value={formik.values.phonenumber}
          />
          {formik.touched.phonenumber && formik.errors.phonenumber ? (
            <Text style={styles.errorText}>{formik.errors.phonenumber}</Text>
          ) : null}
        </View>
      </View>
      <TouchableOpacity
        style={[
          styles.loginButton,
          formik.isValid ? styles.buttonEnabled : styles.buttonDisabled,
        ]}
        onPress={formik.handleSubmit}
        disabled={!formik.isValid}>
        <Text style={styles.loginText}>Sign up</Text>
      </TouchableOpacity>
      <Text style={styles.continueText}>or continue with</Text>
      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={require('../assets/images/Vector.png')}
          style={styles.googleImage}
        />
        <Text style={styles.googleText}>Google</Text>
      </TouchableOpacity>
      <View style={styles.footerContainer}>
        <Text style={styles.accountText}>Already have an account!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Loginscreen')}>
          <Text style={styles.signupText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signupscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.$White,
    padding: SIZES.padding_20,
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
    marginVertical: SIZES.margin_20,
  },
  headingText: {
    fontSize: SIZES.sz_32_font,
    color: COLORS.$primary,
    fontFamily: 'Poppins-SemiBold',
  },
  formContainer: {
    marginTop: SIZES.margin_20,
  },
  inputContainer: {
    ...commonStyles.flexAlignCenter,
    borderWidth: 1,
    borderColor: COLORS.$secondary,
    borderRadius: 100,
    paddingHorizontal: SIZES.padding_20,
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
    marginTop: SIZES.margin_20,
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
    marginVertical: SIZES.margin_20,
    fontSize: SIZES.sz_14_font,
    fontFamily: 'Poppins-Regular',
    color: COLORS.$primary,
  },
  title: {
    fontSize: SIZES.sz_40_font,
    fontFamily: 'Poppins-SemiBold',
    paddingHorizontal: SIZES.padding_20,
    textAlign: 'center',
    color: COLORS.$blue_shade_2,
  },
  subTitle: {
    fontSize: SIZES.sz_18_font,
    paddingHorizontal: SIZES.padding_20,
    textAlign: 'center',
    color: COLORS.$black,
    fontFamily: 'Poppins-Medium',
    marginVertical: SIZES.margin_20,
  },
  googleButton: {
    ...commonStyles.flexCenter,
    borderWidth: 2,
    borderColor: COLORS.$primary,
    borderRadius: 100,
    padding: SIZES.padding_10,
    gap: 10,
  },
  googleImage: {
    height: 20,
    width: 20,
  },
  googleText: {
    fontSize: SIZES.sz_12_font,
    fontFamily: 'Poppins-SemiBold',
  },
  footerContainer: {
    ...commonStyles.flexCenter,
    marginVertical: SIZES.margin_20,
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
  buttonEnabled: {
    backgroundColor: 'blue',
  },
  buttonDisabled: {
    backgroundColor: COLORS.$gray,
  },
  inputError: {
    borderColor: COLORS.$red,
  },
  errorText: {
    color: COLORS.$red,
    fontSize: SIZES.sz_12_font,
    marginBottom: 8,
  },

  formStyle: {
    flexDirection: 'row',
    marginTop: 50},
  formInputContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: COLORS.$primary,
    height: 50,
    maxHeight: 50,
    minHeight: 50,
    fontSize: SIZES.sz_16_font,
    borderRadius: 10,
    paddingHorizontal: SIZES.padding_20,
  },
});
