import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ProfileEditPage = () => {
  const navigation = useNavigation();
  const DATA = [
    { id: '1', listname: 'Wishlist', screen: 'WishlistScreen' },
    { id: '2', listname: 'Coupons', screen: 'CouponsScreen' },
    { id: '3', listname: 'Wallet', screen: 'WalletScreen' },
    { id: '4', listname: 'Help & Support', screen: 'HelpScreen' },
    { id: '5', listname: 'Privacy Policy', screen: 'PrivacyPolicy' },
    { id: '6', listname: 'Sign out', screen: 'SignOutScreen' },
  ];
  // const renderItem = ({ item }) => (
  //   <View style={styles.item}>
  //     <Text style={styles.title}>{item.listname}</Text>
  //   </View>
  // );
  return (
    <View style={styles.container}>
      <Text style={styles.profileHeader}>My Profile</Text>
      <Text style={styles.profileUser}>Rajaha Muthiaha</Text>
      <Text style={styles.profileUserEmail}>rajahamuthiaha@gmail.com</Text>
      {/* <FlatList
      data={DATA}
      renderItem={({data}) => 
<View> // flex-direction: row
    <Image
      src={data.image}
    />
    <Text>data.label</Text> // flex:1
     <Image
      src={rightarrow}
    />
</View>
}
      keyExtractor={item => item.id}
    /> */}
      <ScrollView contentContainerStyle={styles.container1}>
      {DATA.map(item => (
        <TouchableOpacity
          key={item.id}
          style={styles.item}
          onPress={() => navigation.navigate(item.screen)}
        >
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
    backgroundColor: 'white',
  },
  container1: {
    flexGrow: 1,
    justifyContent: 'center',
    // backgroundColor: 'green',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#FFF7FC',
    borderRadius: 10,
  },
  titleHeading: {
    fontSize: 16,
    color: 'black',
    // color: '#FFF7FC',
    // color: '#EBF4FE',
  },
});
