//common header - coursedetails,supportscreen,profileeditform,profileeditpage,wishlistpage
//different types of styles
//style={StyleSheet.compose(styles.profileHeaderInr, { padding: 20, gap: 10 })} OR style={[styles.profileHeaderInr, { padding: 20, flexDirection: 'row', gap: 10 }]}

import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,SafeAreaView,} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft,faUserCircle,faBell,faMagnifyingGlass,faArrowLeft,faFilter} from '@fortawesome/free-solid-svg-icons';
import {COLORS, SIZES} from '../../constants/themes';
import {useNavigation} from '@react-navigation/native';
import { commonStyles } from '../../constants';

const CommonHeader = ({sectionHeaderTitle,headerTitleStyle,showBackIcon,showHeader,showProfileHeader,showCourseFilterHeader,onFilterPress,onSearchPress}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      {showHeader && (
        <View style={styles.headerContainer}>
          {showBackIcon && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesomeIcon
                icon={faAngleLeft}
                size={25}
                color={COLORS.$White}
              />
            </TouchableOpacity>
          )}
          <Text style={[styles.containerTitle, headerTitleStyle]}>
            {sectionHeaderTitle}
          </Text>
        </View>
      )}
      {showProfileHeader && (
        <View style={[styles.profileHeader, styles.headerContainer]}>
          <View style={styles.profileHeaderInr}>
            <FontAwesomeIcon
              icon={faUserCircle}
              size={25}
              color={COLORS.$White}
            />
            <Text style={[{fontSize: 19, color: COLORS.$White}]}>
              Hi, Rajaha Muthiaha!
            </Text>
          </View>
          <View style={[styles.profileHeaderInr, {gap: 20}]}>
            <TouchableOpacity onPress={() => navigation.navigate('Coursename')}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size={18}
                color={COLORS.$White}
              />
            </TouchableOpacity>
            <FontAwesomeIcon icon={faBell} size={18} color={COLORS.$White} />
          </View>
        </View>
      )}
      {showCourseFilterHeader && (
        <View style={[styles.profileHeader, styles.headerContainer]}>
          <View style={styles.profileHeaderInr}>
          <TouchableOpacity onPress={() => navigation.navigate('Homescreen')}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              size={25}
              color={COLORS.$White}
            />
            </TouchableOpacity>
            <Text style={[{fontSize: 19, color: COLORS.$White}]}>
              {sectionHeaderTitle}
            </Text>
          </View>
          <View style={[styles.profileHeaderInr, {gap: 20}]}>
          <TouchableOpacity onPress={onSearchPress}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size={18}
                color={COLORS.$White}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onFilterPress}>
              <FontAwesomeIcon icon={faFilter} size={18} color={COLORS.$White} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingVertical: SIZES.padding_15,
    paddingHorizontal: SIZES.padding_20,
    backgroundColor: COLORS.$blue_shade_1,
  },
  containerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: SIZES.sz_21_font,
    color: COLORS.$White,
  },
  profileHeader: {
    justifyContent: 'space-between',
  },
  profileHeaderInr: {
    ...commonStyles.flexAlignCenter,
    gap: 10,
  },
});
