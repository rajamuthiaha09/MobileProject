import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { COLORS } from '../constants/themes';

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
      // country: '',
      // notificationsEnabled: false,
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      Alert.alert('Registered Successfully!!');
    },
  });
 
  const getInputStyle = (field) => [
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
        <Text style={styles.subTitle}>
          Create an account so you can explore all the existing jobs
        </Text>
      </View>
      {/* form  1*/}
      {/* <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
            placeholderTextColor={'#AEB5BB'}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your password"
            placeholderTextColor={'#AEB5BB'}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your phone no"
            placeholderTextColor={'#AEB5BB'}
            keyboardType="phone-pad"
          />
        </View>
        <TouchableOpacity style={styles.loginButton}>
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
      </View> */}

      {/* form 2 */}
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
      <TouchableOpacity style={[styles.loginButton, formik.isValid ? styles.buttonEnabled : styles.buttonDisabled]}
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
  title: {
    fontSize: 40,
    fontFamily: 'Poppins-SemiBold',
    paddingHorizontal: 20,
    textAlign: 'center',
    color: '#1F41BB',
    // marginTop: 20,
  },
  subTitle: {
    fontSize: 18,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: '#000',
    fontFamily: 'Poppins-Medium',
    marginVertical: 20,
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
  buttonEnabled: {
    backgroundColor:'blue',
  },
  buttonDisabled: {
    backgroundColor: COLORS.$gray,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 8,
  },
  // form2 styles
  formStyle:{flexDirection: 'row', marginTop: 50},
  formInputContainer:{
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#45484A',
    height: 50,
    maxHeight: 50,
    minHeight: 50,
    fontSize: 16,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
});
