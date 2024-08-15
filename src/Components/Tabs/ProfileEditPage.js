import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS, SIZES} from '../../constants/themes';

const ProfileEditPage = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [modalContent, setModalContent] = useState(null);

  const DATA = [
    {id: '1', listname: 'Wishlist', screen: 'WishlistScreen'},
    {id: '2', listname: 'Coupons', screen: 'CouponsScreen'},
    {id: '3', listname: 'Wallet', screen: 'WalletScreen'},
    {id: '4', listname: 'Help & Support', screen: 'HelpScreen'},
    {id: '5', listname: 'Privacy Policy', screen: 'PrivacyPolicy'},
    {id: '6', listname: 'Sign out', screen: 'Homescreen'},
  ];

  const couponsData = [
    {
      id: '1',
      courseName: 'Mobile Application Development',
      actCode: 'START',
      percentage: '20',
    },
    {
      id: '2',
      courseName: 'UI/UX Design',
      actCode: 'DFR56987',
      percentage: '20',
    },
    {
      id: '3',
      courseName: 'Java from Scratch to Expert',
      actCode: 'JAVA',
      percentage: '20',
    },
    {
      id: '4',
      courseName: 'Instagram Marketing',
      actCode: '23569856',
      percentage: '20',
    },
    {
      id: '5',
      courseName: 'Angular from Scratch to Expert',
      actCode: 'act54[]',
      percentage: '20',
    },
    {
      id: '6',
      courseName: 'ReactJS from Scratch to Expert',
      actCode: 'CTRL+',
      percentage: '20',
    },
    {
      id: '7',
      courseName: 'ReactJS from Scratch to Expert',
      actCode: 'CTRL+',
      percentage: '20',
    },
    {
      id: '8',
      courseName: 'ReactJS from Scratch to Expert',
      actCode: 'CTRL+',
      percentage: '20',
    },
  ];

  const handlePress = screen => {
    if (screen === 'CouponsScreen') {
      // setModalContent('Here is your Coupons content'); // Set the content you want to show in the modal
      setIsModalVisible(true);
    } else {
      navigation.navigate(screen);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeaderView}>
        <Text style={styles.profileHeader}>My Profile</Text>
        <Text style={styles.profileUser}>Rajaha Muthiaha</Text>
        <Text style={styles.profileUserEmail}>
          rajahamuthiaha@thoughtbees.com
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.menuList}>
        {DATA.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.item}
            onPress={() => handlePress(item.screen)}>
            <Text style={styles.titleHeading}>{item.listname}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Modal
        visible={isModalVisible} //true or false
        transparent={true} // true or false
        animationType="fade" // none or slide
        onRequestClose={() => setIsModalVisible(false)}>
        <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
          <View style={styles.couponsContainerOtr}>
            <View style={styles.couponsContainerInr}>
              <ScrollView
                contentContainerStyle={styles.menuList}
                showsVerticalScrollIndicator={false}>
                {couponsData.map(item => (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.couponContentContainer}>
                    <View style={styles.cupContInr}>
                      <View>
                        <Text style={styles.percentageText}>
                          {item.percentage}
                        </Text>
                      </View>
                      <View style={styles.inrContainer}>
                        <Text style={styles.titleHeading}>%</Text>
                        <Text style={styles.titleHeading}>off</Text>
                      </View>
                      <View style={styles.verticalLine}></View>
                      <View>
                        <Text style={styles.courseNameText}>
                          {item.courseName}
                        </Text>
                        <Text style={styles.actCodetext}>
                          Activation Code : {item.actCode}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              {/* <Button title="Close" onPress={() => setIsModalVisible(false)} /> */}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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

  //model styles
  couponsContainerOtr: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  couponsContainerInr: {
    width: '90%',
    height: '70%',
    paddingVertical: SIZES.padding_20,
    backgroundColor: COLORS.$White,
    borderRadius: 10,
    alignItems: 'center',
  },
  couponContentContainer: {
    padding: SIZES.padding_20,
    marginBottom: 15,
    backgroundColor: COLORS.$pink_shade_1,
    borderRadius: 10,
  },
  cupContInr: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  percentageText: {
    fontSize: SIZES.sz_30_font,
    fontWeight: 'bold',
  },
  actCodetext: {
    fontSize: SIZES.sz_16_font,
  },
  courseNameText: {
    fontSize: SIZES.sz_19_font,
    color: COLORS.$black,
  },
  inrContainer: {
    alignItems: 'center',
  },
  verticalLine: {
    width: 1,
    height: '70%',
    backgroundColor: COLORS.$black,
    marginHorizontal: 5,
  },
});
