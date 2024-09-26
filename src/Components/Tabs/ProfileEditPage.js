import React, {useState,useEffect} from 'react';
import {View,Text,TouchableOpacity,ScrollView,Modal,Alert,Image,StyleSheet,TouchableWithoutFeedback,} from 'react-native';
import {COLORS, SIZES} from '../../constants/themes';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPen, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import image from '../../constants/image';
import {CommonHeader} from '../sharedComponents';
import {commonStyles} from '../../constants';

const ProfileEditPage = ({route, navigation}) => {
  const [userName, setUserName] = useState('Rajaha Muthiaha');
  const [userEmail, setUserEmail] = useState('rajahamuthiaha@thoughtbees.com');
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (route.params?.updatedName) {
      setUserName(route.params.updatedName);
    }
    if (route.params?.updatedEmail) {
      setUserEmail(route.params.updatedEmail);
    }
  }, [route.params]);

  const DATA = [
    {id: '1', listname: 'Wishlist', screen: 'WishlistScreen'},
    {id: '2', listname: 'Coupons', screen: 'CouponsScreen'},
    {id: '3', listname: 'Wallet', screen: 'WalletScreen'},
    {id: '4', listname: 'Help & Support', screen: 'HelpScreen'},
    {id: '5', listname: 'Privacy Policy', screen: 'PrivacyPolicy'},
    {id: '6', listname: 'Sign out', screen: 'signoutscreen'},
  ];

  const couponsData = [
    { id: '1', courseName: 'Mobile Application Development', actCode: 'START', percentage: '20',},
    { id: '2', courseName: 'UI/UX Design', actCode: 'DFR56987', percentage: '20',},
    { id: '3', courseName: 'Java from Scratch to Expert', actCode: 'JAVA', percentage: '20',},
    { id: '4', courseName: 'Instagram Marketing', actCode: '23569856', percentage: '20',},
    { id: '5', courseName: 'Angular from Scratch to Expert', actCode: 'act54[]', percentage: '20',},
    { id: '6', courseName: 'ReactJS from Scratch to Expert', actCode: 'CTRL+wer', percentage: '20',},
    { id: '7', courseName: 'React from Scratch to Expert', actCode: 'CTRL+wewr', percentage: '20',},
    { id: '8', courseName: 'ReactJS from Scratch to Expert', actCode: 'CTRL+ki', percentage: '20',},
  ];

  const handlePress = (action, actCode, screen) => {
    if (action === 'showAlert') {
      Alert.alert('Activation Code', `Activation Code: ${actCode}`, [
        {
          text: 'OK',
          onPress: () => setIsModalVisible(false),
        },
      ]);
    } else if (action === 'navigate') {
      if (screen === 'CouponsScreen') {
        setIsModalVisible(true);
      } else if (screen === 'signoutscreen') {
        // Sign out logic, then navigate to IntroScreen
        navigation.reset({
          index: 0,
          routes: [{ name: 'IntroScreen' }],
        });
      } else {
        navigation.navigate(screen);
      }
    }
  };
  
  return (
    <View style={styles.container}>
      <CommonHeader showBackIcon={false} showHeader={true} sectionHeaderTitle="My Profile"/>
      <View style={styles.profileHeaderView}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatarCircle}>
            <Image source={image.profileImageMale} style={styles.avatar} />
          </View>
          <TouchableOpacity style={styles.editIconContainer} 
              onPress={() =>
                navigation.navigate('ProfileEditForm', {
                  routeName: userName,
                  routeEmail: userEmail,
                })
              }>
            <FontAwesomeIcon icon={faPen} size={20} color={COLORS.$black} />
          </TouchableOpacity>
        </View>
        <Text style={styles.profileUserName}>{userName}</Text>
        <Text style={styles.profileUserEmail}>{userEmail}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {DATA.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.dataitem}
            onPress={() => handlePress('navigate', null, item.screen)}>
            <Text style={styles.titleHeading}>{item.listname}</Text>
            <FontAwesomeIcon icon={faChevronRight} size={23} color={COLORS.$black}/>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsModalVisible(false)}>
        <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
          <View style={styles.couponsContainerOtr}>
            <View style={styles.couponsContainerInr}>
              <ScrollView contentContainerStyle={styles.menuList} showsVerticalScrollIndicator={false}>
                {couponsData.map(item => (
                  <TouchableOpacity
                    onPress={() => handlePress('showAlert', item.actCode)}
                    key={item.id}
                    style={styles.couponContentContainer}>
                    <View style={styles.cupContInr}>
                      <View>
                        <Text style={styles.percentageText}>{item.percentage}</Text>
                      </View>
                      <View style={styles.inrContainer}>
                        <Text style={styles.titleHeading}>%</Text>
                        <Text style={styles.titleHeading}>off</Text>
                      </View>
                      <View style={styles.verticalLine}></View>
                      <View>
                        <Text style={styles.courseNameText}>{item.courseName}</Text>
                        <Text style={styles.actCodetext}>Activation Code : {item.actCode}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
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
    backgroundColor: COLORS.$White,
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
    marginTop: 10,
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
  profileUserName: {
    fontSize: SIZES.sz_28_font,
    fontWeight: 'bold',
    color: COLORS.$black,
    marginTop: SIZES.margin_12,
  },
  profileUserEmail: {
    fontSize: SIZES.sz_25_font,
    color: COLORS.$black,
    paddingTop: SIZES.padding_10,
  },
  dataitem: {
    ...commonStyles.flexContainer,
    alignItems: 'center',
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
  arrow: {
    fontSize: SIZES.sz_18_font,
    color: COLORS.$black,
  },
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
    ...commonStyles.flexAlignCenter,
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
