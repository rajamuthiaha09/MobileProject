// profile edit form

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  Alert,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {COLORS, SIZES} from '../../constants/themes';
import {CommonHeader} from '../sharedComponents';
import image from '../../constants/image';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera, faImage, faTrash} from '@fortawesome/free-solid-svg-icons';

const ProfileEditForm = ({ route, navigation }) => {
  const { routeName, routeEmail } = route.params;
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string()
      .matches(/^\+\d{1,2}\s?\d{10}$/, 'Invalid phone number')
      .required('Phone number is required'),
    location: Yup.string().required('Location is required'),
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleGalleryOpen = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
    setModalVisible(false);
  };
  const handleCameraOpen = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        console.log(imageUri);
      }
    });
    setModalVisible(false);
  };
  const handleRemoveImage = () => {
    setModalVisible(false);
    Alert.alert('Remove Image', 'Are you sure you want to remove the image?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Remove',
        onPress: () => setSelectedImage(null),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <CommonHeader
        showBackIcon={true}
        sectionHeaderTitle="Edit Profile"
        headerTitleStyle={styles.headerView}
      />
      <View style={styles.profileHeaderView}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatarCircle}>
          <Image source={selectedImage == null ? image.profileImageMale : { uri: selectedImage }} style={[ styles.avatar,selectedImage !== null && { width: 180, height: 180 }]}/>
          </View>
          <TouchableOpacity style={styles.editIconContainer} onPress={() => setModalVisible(true)}>
            <FontAwesomeIcon icon={faCamera} size={25} color={COLORS.$black} />
          </TouchableOpacity>
        </View>
      </View>
      <Formik
        initialValues={{name: routeName || '', email: routeEmail || '', phoneNumber: '', location: ''}}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log(values);
          navigation.goBack();
          navigation.navigate('ProfileEditPage', {
            updatedName: values.name,
            updatedEmail: values.email,
          });
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.ProfileEditFormContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                placeholder="Name"
              />
              {errors.name && touched.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}
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
              {errors.email && touched.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
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
              {errors.phoneNumber && touched.phoneNumber && (
                <Text style={styles.errorText}>{errors.phoneNumber}</Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('location')}
                onBlur={handleBlur('location')}
                value={values.location}
                placeholder="Location"
              />
              {errors.location && touched.location && (
                <Text style={styles.errorText}>{errors.location}</Text>
              )}
            </View>
            <TouchableOpacity onPress={handleSubmit} style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      {/* </View> */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <TouchableOpacity
          style={styles.modalContainer}
          onPress={() => setModalVisible(false)}>
          <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleCameraOpen}>
              <FontAwesomeIcon
                icon={faCamera}
                size={25}
                color={COLORS.$black}
              />
              <Text style={styles.modalButtonText}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleGalleryOpen}>
              <FontAwesomeIcon icon={faImage} size={25} color={COLORS.$black} />
              <Text style={styles.modalButtonText}>Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={selectedImage ? handleRemoveImage : null}
              disabled={!selectedImage}>
              <FontAwesomeIcon
                icon={faTrash}
                size={25}
                style={!selectedImage && styles.displayBlur}
              />
              <Text
                style={[
                  styles.modalButtonText,
                  !selectedImage && styles.displayBlur,
                ]}>
                Remove
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default ProfileEditForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  ProfileEditFormContainer: {
    marginTop: SIZES.margin_30,
    width: '100%',
  },
  inputContainer: {
    marginBottom: SIZES.margin_20,
  },
  input: {
    borderColor: COLORS.$lightGray,
    borderRadius: 10,
    padding: SIZES.padding_15,
    fontSize: SIZES.sz_18_font,
    backgroundColor: COLORS.$pink_shade_1,
  },
  errorText: {
    fontSize: SIZES.sz_14_font,
    color: 'red',
  },
  saveButton: {
    backgroundColor: COLORS.$black,
    padding: SIZES.padding_15,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: COLORS.$White,
    fontSize: SIZES.sz_20_font,
    fontWeight: 'bold',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: COLORS.$White,
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  modalButton: {
    flexDirection: 'column',
    borderRadius: 15,
    gap: 5,
    alignItems: 'center',
    width: 85,
    height: 70,
    backgroundColor: COLORS.$gray,
    padding: 10,
  },
  modalButtonText: {fontSize: 18},
  displayBlur: {
    opacity: 0.5,
  },
  profileHeaderView: {
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
  },
  avatarCircle: {
    width : 200, 
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: COLORS.$darkGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 210,
    height: 250,
    borderRadius: 90,
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 15,
      right: 10,
    backgroundColor: COLORS.$White,
    borderRadius: 25,
    padding: SIZES.padding_10,
    elevation: 5,
  },
});
