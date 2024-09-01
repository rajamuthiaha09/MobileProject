import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS, SIZES} from '../constants/themes';
import image from '../constants/image';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faDiamond} from '@fortawesome/free-solid-svg-icons';
import { commonStyles } from '../constants';

const IntroScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={image.logo} style={styles.logoImg} />
        <View style={[{marginLeft: -30}]}>
          <View style={styles.logoTextContainer}>
            <Text style={styles.biggerText}>Courselog</Text>
            {/* <Text style={styles.smallerText}>ourselog</Text> */}
          </View>
          <View style={styles.sloganContainer}>
            {['Aware', 'Aspire', 'Achieve'].map((text, index) => (
              <React.Fragment key={index}>
                <Text>{text}</Text>
                {index < 2 && (<FontAwesomeIcon icon={faDiamond} color={COLORS.$blue_shade_1} /> )}
              </React.Fragment>
            ))}
          </View>
        </View>
      </View>
      
      <Image source={image.infoImage} style={styles.bannerImage} />
      <Text style={styles.title}>Enjoy 1000+ hrs of learning for free</Text>
      <Text style={styles.subTitle}>
        Knowledge is the new currency, therefore invest in yourself and unlock
        your potential to achieve success now.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button} activeOpacity={0.5}
          onPress={() => navigation.navigate('MainTabs', { screen: 'Homescreen' })}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button} activeOpacity={0.5}
          onPress={() => navigation.navigate('Loginscreen')}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.$White,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SIZES.padding_20,
  },
  headerContainer: {
    ...commonStyles.flexCenter,
    marginBottom: SIZES.margin_30,
  },
  logoImg: {
    height: 100,
    width: 170,
  },
  logoTextContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  biggerText: {
    fontSize: SIZES.sz_34_font,
    fontWeight: 'bold',
  },
  bannerImage: {
    marginVertical: SIZES.margin_20,
    height: 330,
    width: 305,
  },
  sloganContainer: {
    ...commonStyles.flexCenter,
    gap: 10,
    marginTop: SIZES.margin_10,
  },
  title: {
    fontSize: 26,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    color: COLORS.$blue_shade_1,
    marginTop: SIZES.margin_40,
  },
  subTitle: {
    fontSize: SIZES.sz_18_font,
    textAlign: 'center',
    color: COLORS.$black,
    fontFamily: 'Poppins-Medium',
    marginVertical: SIZES.margin_20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    backgroundColor: COLORS.$blue_shade_1,
    borderRadius: 5,
    paddingHorizontal: SIZES.padding_30,
    paddingVertical: SIZES.padding_10,
    marginTop: SIZES.margin_20,
  },
  buttonText: {
    color: COLORS.$White,
    fontSize: SIZES.sz_20_font,
    fontFamily: 'Poppins-SemiBold',
  },
});
