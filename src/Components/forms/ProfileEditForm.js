import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { COLORS, SIZES } from '../../constants/themes';
import { CommonHeader } from '../sharedComponents';
import image from '../../constants/image';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera } from '@fortawesome/free-solid-svg-icons';

const ProfileEditForm = ({ navigation }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string().matches(/^\+\d{1,2}\s?\d{10}$/, 'Invalid phone number').required('Phone number is required'),
    location: Yup.string().required('Location is required'),
  });

  return (
    <View style={styles.container}>
      <CommonHeader
        showIcon={true}
        sectionHeaderTitle="Edit Profile"
        headerTitleStyle={styles.headerView}
      />
      <View style={styles.profileHeaderView}>
        <View style={styles.avatarContainer}>
        <Image source={image.profileImageMale} style={styles.avatar} />
          <TouchableOpacity style={styles.editIconContainer}>
          <FontAwesomeIcon icon={faCamera } size={25} color={COLORS.$black} />
          </TouchableOpacity>
        </View>
        <Formik
          initialValues={{ name: '', email: '', phoneNumber: '', location: '' }}
          validationSchema={validationSchema}
          onSubmit={values => {
            console.log(values);
            // Handle form submission, possibly save changes and navigate back
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={styles.ProfileEditFormContainer}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  placeholder="Name"
                />
                {errors.name && touched.name && <Text style={styles.errorText}>{errors.name}</Text>}
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholder="Email"
                  keyboardType="email-address"
                />
                {errors.email && touched.email && <Text style={styles.errorText}>{errors.email}</Text>}
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('phoneNumber')}
                  onBlur={handleBlur('phoneNumber')}
                  value={values.phoneNumber}
                  placeholder="Phone number"
                  keyboardType="phone-pad"
                />
                {errors.phoneNumber && touched.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber}</Text>}
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('location')}
                  onBlur={handleBlur('location')}
                  value={values.location}
                  placeholder="Location"
                />
                {errors.location && touched.location && <Text style={styles.errorText}>{errors.location}</Text>}
              </View>
              <TouchableOpacity onPress={handleSubmit} style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Save Changes</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default ProfileEditForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.$White,
    // paddingHorizontal: 20,
  },
//   ProfileEditFormContainer: {
//     marginHorizontal: 20,
//   },
  profileHeaderView: {
    alignItems: 'center',
    marginBottom: SIZES.margin_20,
  },
  headerView: {
    paddingLeft: '32%',
  },
  avatarContainer: {
    position: 'relative',
    width: 200,
    height: 200,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red'
    // marginBottom: SIZES.margin_15,
  },
  avatar: {
    width: '150%',
    height: '150%',
    borderRadius: 50,
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: COLORS.$White,
    borderRadius: 25,
    padding: 10,
    elevation: 5,
  },
  cameraIcon: {
    fontSize: 25,
  },
  ProfileEditFormContainer: {
    marginTop: 30,
    width: '100%',
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderColor: COLORS.$lightGray,
    // borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    fontSize: SIZES.sz_18_font,
    backgroundColor: COLORS.$pink_shade_1,
  },
  errorText: {
    fontSize: SIZES.sz_14_font,
    color: 'red',
  },
  saveButton: {
    backgroundColor: COLORS.$black,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: COLORS.$White,
    fontSize: SIZES.sz_20_font,
    fontWeight: 'bold',
  },
});
