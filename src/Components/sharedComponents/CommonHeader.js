//common header - coursedetails,supportscreen,profileeditform,profileeditpage,wishlistpage

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import {SIZES} from '../../constants/themes';
import {useNavigation} from '@react-navigation/native';

const CommonHeader = ({ sectionHeaderTitle,headerTitleStyle,showIcon = true,}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        {showIcon && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faAngleLeft} size={30} color="black" />
          </TouchableOpacity>
        )}
        <Text style={[styles.containerTitle, headerTitleStyle]}>
          {sectionHeaderTitle}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
  containerTitle: {
    flex: 1,
    paddingLeft: '35%',
    fontSize: SIZES.sz_25_font,
    fontWeight: 'bold',
  },
});
