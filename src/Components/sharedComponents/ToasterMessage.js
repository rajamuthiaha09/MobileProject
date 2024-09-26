import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const toastConfig = {
    success: ({ text1 }) => (
      <View style={styles.toastContainer}>
        <FontAwesomeIcon icon={faCheckCircle} size={20} color="green" />
        <Text style={styles.toastText}>{text1}</Text>
      </View>
    ),
  };

const ToasterMessage = () => {
  return (
    <View>
      <Text>ToasterMessage</Text>
    </View>
  )
}

export default toastConfig;

const styles = StyleSheet.create({
    toastContainer: {
        // height: 60,
        width: '50%',
        backgroundColor: '#B5EBCC',
        borderRadius: 15,
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      toastText: {
        color: 'black',
        marginLeft: 10,
        fontSize: 18,
      },
})