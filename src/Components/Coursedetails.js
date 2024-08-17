import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Pressable,
} from 'react-native';
import {COLORS, SIZES} from '../constants/themes';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faClock, faHeart} from '@fortawesome/free-solid-svg-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Coursedetails = ({navigation}) => {
  const [likedItems, setLikedItems] = useState({});
  const DATA = [
    {
      id: '1',
      title: 'The Ultimate Guide To Strategic Marketing',
      src: require('../assets/images/cs7.png'),
      time: '2h 30m',
      amount: '$34.00',
      preamount: '$35.00',
      student: '2719',
      ratings: '149',
      tutorname: 'Jack Smith',
      starating: '4.5',
    },
    {
      id: '2',
      title: 'Home Business:The Complete CPA Marketing Course',
      src: require('../assets/images/cs8.jpg'),
      time: '3h 30m',
      amount: '$35.00',
      preamount: '',
      student: '1',
      ratings: '2',
      tutorname: '3',
      starating: '3.5',
    },
    {
      id: '3',
      title: 'Digital Marketing: How to Generate Sales Leads',
      src: require('../assets/images/cs9.jpg'),
      time: '3h 00m',
      amount: '$29.00',
      preamount: '$30.00',
      student: '1',
      ratings: '2',
      tutorname: '3',
      starating: '5',
    },
    {
      id: '4',
      title: 'Copywriting - The Psychology Of Your Irresistible Offer',
      src: require('../assets/images/cs9.jpg'),
      time: '4h 30m',
      amount: '$33.00',
      preamount: '$34.00',
      student: '1',
      ratings: '2',
      tutorname: '3',
      starating: '3',
    },
    {
      id: '5',
      title: 'Write To gnite - Master The Art Of Sales Copy',
      src: require('../assets/images/cs9.jpg'),
      time: '5h 30m',
      amount: '$30.00',
      preamount: '',
      student: '1',
      ratings: '2',
      tutorname: '3',
      starating: '4',
    },
  ];

  const toggleLike = (id) => {
    setLikedItems(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handlePress = item => {
    navigation.navigate('Courseview', {...item});
  };

  const viewWishlist = () => {
    const likedCourses = DATA.filter(item => likedItems[item.id]);
    navigation.navigate('WishlistScreen', { likedCourses });
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
      {DATA.map(item => (
        <View style={styles.cardLayer}>
          <View key={item.id} style={styles.card}>
            <View style={styles.headContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Pressable onPress={() => toggleLike(item.id)}>
                <FontAwesomeIcon
                  icon={faHeart}
                  size={30}
                  color={likedItems[item.id] ? 'red' : COLORS.$black}
                />
              </Pressable>
            </View>
            <View style={styles.priceDetails}>
              <View style={styles.timimgContainer}>
                <FontAwesomeIcon
                  icon={faClock}
                  size={20}
                  color={COLORS.$gray}
                />
                <Text style={styles.courseTime}>{item.time}</Text>
              </View>
              <View style={styles.amountDetails}>
                <Text style={styles.coursePreAmount}>{item.preamount}</Text>
                <Text style={styles.courseAmount}>{item.amount}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePress(item)}>
              <Text style={styles.buttonText}>View Course Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
    <TouchableOpacity style={styles.button} onPress={viewWishlist}>
              <Text style={styles.buttonText}>View Wishlist</Text>
            </TouchableOpacity>
    </SafeAreaView>
    
    
  );
};

export default Coursedetails;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  cardLayer: {
    borderBottomColor: COLORS.$grey_shade_1,
    borderBottomWidth: 1,
  },
  card: {
    marginBottom: 20,
    paddingHorizontal: SIZES.padding_20,
  },
  title: {
    fontSize: SIZES.sz_18_font,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  courseTime: {
    fontSize: SIZES.sz_20_font,
    color: COLORS.$gray,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  courseAmount: {
    fontSize: SIZES.sz_22_font,
    fontWeight: 'bold',
    color: COLORS.$green,
  },
  coursePreAmount: {
    fontSize: SIZES.sz_16_font,
    textDecorationLine: 'line-through',
    color: 'gray',
    paddingTop: SIZES.padding_6,
  },
  button: {
    backgroundColor: COLORS.$blue_shade_1,
    paddingVertical: SIZES.padding_10,
    paddingHorizontal: SIZES.padding_20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.$White,
    fontSize: SIZES.sz_16_font,
  },
  priceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  amountDetails: {
    flexDirection: 'row',
    gap: 10,
  },
  timimgContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  headContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
