import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity,} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS, SIZES} from '../../constants/themes';

const ProfileEditPage = () => {
  const navigation = useNavigation();
  const DATA = [
    {id: '1', listname: 'Wishlist', screen: 'WishlistScreen'},
    {id: '2', listname: 'Coupons', screen: 'CouponsScreen'},
    {id: '3', listname: 'Wallet', screen: 'WalletScreen'},
    {id: '4', listname: 'Help & Support', screen: 'HelpScreen'},
    {id: '5', listname: 'Privacy Policy', screen: 'PrivacyPolicy'},
    {id: '6', listname: 'Sign out', screen: 'Homescreen'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.profileHeaderView}>
        <Text style={styles.profileHeader}>My Profile</Text>
        <Text style={styles.profileUser}>Rajaha Muthiaha</Text>
        <Text style={styles.profileUserEmail}>rajahamuthiaha@thoughtbees.com</Text>
      </View>
      <ScrollView contentContainerStyle={styles.menuList}>
        {DATA.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.item}
            onPress={() => navigation.navigate(item.screen)}>
            <Text style={styles.titleHeading}>{item.listname}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ProfileEditPage;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.$White,
  },
  profileHeaderView: {
    alignItems: 'center',
  },
  profileHeader: {
    fontSize: SIZES.sz_22_font,
  },
  profileUser: {
    fontSize: SIZES.sz_28_font,
    fontWeight: 'bold',
  },
  profileUserEmail: {
    fontSize: SIZES.sz_25_font,
  },
  item: {
    padding: SIZES.padding_20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: COLORS.$pink_shade_1,
    borderRadius: 10,
  },
  titleHeading: {
    fontSize: SIZES.sz_22_font,
    color: COLORS.$black,
  },
});
