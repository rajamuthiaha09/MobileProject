import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,FlatList,
  TouchableOpacity,
  View,
  Pressable,ActivityIndicator 
} from 'react-native';
import {COLORS, SIZES} from '../constants/themes';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faClock, faHeart} from '@fortawesome/free-solid-svg-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonHeader } from './sharedComponents';
import { Dimensions } from 'react-native';

const ITEMS_PER_PAGE = 5;

const Coursedetails = ({navigation}) => {
  const [likedItems, setLikedItems] = useState({});
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE); // Start with 6 items
  const [loading, setLoading] = useState(false); // Loading state
  const DATA = [
    {
      id: '1',
      title: 'The Ultimate Guide To Strategic Marketing',
      // src: require('../assets/images/cs7.png'),
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
      // src: require('../assets/images/cs8.jpg'),
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
      // src: require('../assets/images/cs9.jpg'),
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
      // src: require('../assets/images/cs9.jpg'),
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
      // src: require('../assets/images/cs9.jpg'),
      time: '5h 30m',
      amount: '$30.00',
      preamount: '',
      student: '1',
      ratings: '2',
      tutorname: '3',
      starating: '4',
    },
    {
      id: '6',
      title: 'The Ultimate Guide To Strategic Marketing',
      // src: require('../assets/images/cs7.png'),
      time: '2h 30m',
      amount: '$34.00',
      preamount: '$35.00',
      student: '2719',
      ratings: '149',
      tutorname: 'Jack Smith',
      starating: '4.5',
    },{
      id: '7',
      title: 'The Ultimate Guide To Strategic Marketing',
      // src: require('../assets/images/cs7.png'),
      time: '2h 30m',
      amount: '$34.00',
      preamount: '$35.00',
      student: '2719',
      ratings: '149',
      tutorname: 'Jack Smith',
      starating: '4.5',
    },{
      id: '8',
      title: 'The Ultimate Guide To Strategic Marketing',
      // src: require('../assets/images/cs7.png'),
      time: '2h 30m',
      amount: '$34.00',
      preamount: '$35.00',
      student: '2719',
      ratings: '149',
      tutorname: 'Jack Smith',
      starating: '4.5',
    },{
      id: '9',
      title: 'The Ultimate Guide To Strategic Marketing',
      // src: require('../assets/images/cs7.png'),
      time: '2h 30m',
      amount: '$34.00',
      preamount: '$35.00',
      student: '2719',
      ratings: '149',
      tutorname: 'Jack Smith',
      starating: '4.5',
    },{
      id: '10',
      title: 'The Ultimate Guide To Strategic Marketing',
      // src: require('../assets/images/cs7.png'),
      time: '2h 30m',
      amount: '$34.00',
      preamount: '$35.00',
      student: '2719',
      ratings: '149',
      tutorname: 'Jack Smith',
      starating: '4.5',
    },{
      id: '11',
      title: 'The Ultimate Guide To Strategic Marketing',
      // src: require('../assets/images/cs7.png'),
      time: '2h 30m',
      amount: '$34.00',
      preamount: '$35.00',
      student: '2719',
      ratings: '149',
      tutorname: 'Jack Smith',
      starating: '4.5',
    },{
      id: '12',
      title: 'The Ultimate Guide To Strategic Marketing',
      // src: require('../assets/images/cs7.png'),
      time: '2h 30m',
      amount: '$34.00',
      preamount: '$35.00',
      student: '2719',
      ratings: '149',
      tutorname: 'Jack Smith',
      starating: '4.5',
    },{
      id: '13',
      title: 'The Ultimate Guide To Strategic Marketing',
      // src: require('../assets/images/cs7.png'),
      time: '2h 30m',
      amount: '$34.00',
      preamount: '$35.00',
      student: '2719',
      ratings: '149',
      tutorname: 'Jack Smith',
      starating: '4.5',
    },{
      id: '14',
      title: 'The Ultimate Guide To Strategic Marketing',
      // src: require('../assets/images/cs7.png'),
      time: '2h 30m',
      amount: '$34.00',
      preamount: '$35.00',
      student: '2719',
      ratings: '149',
      tutorname: 'Jack Smith',
      starating: '4.5',
    },{
      id: '15',
      title: 'The Ultimate Guide To Strategic Marketing',
      // src: require('../assets/images/cs7.png'),
      time: '2h 30m',
      amount: '$34.00',
      preamount: '$35.00',
      student: '2719',
      ratings: '149',
      tutorname: 'Jack Smith',
      starating: '4.5',
    },{
      id: '16',
      title: 'The Ultimate Guide To Strategic Marketing',
      // src: require('../assets/images/cs7.png'),
      time: '2h 30m',
      amount: '$34.00',
      preamount: '$35.00',
      student: '2719',
      ratings: '149',
      tutorname: 'Jack Smith',
      starating: '4.5',
    },{
      id: '17',
      title: 'The Ultimate Guide To Strategic Marketing',
      // src: require('../assets/images/cs7.png'),
      time: '2h 30m',
      amount: '$34.00',
      preamount: '$35.00',
      student: '2719',
      ratings: '149',
      tutorname: 'Jack Smith',
      starating: '4.5',
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

  const { width, height } = Dimensions.get('window');


  const loadMoreItems = () => {
    if (visibleItems < DATA.length) {
      setLoading(true);
      setTimeout(() => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + ITEMS_PER_PAGE);
        setLoading(false);
      }, 1000);
    }
  };

  const renderFooter = () => {
    if (loading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    } else if (visibleItems >= DATA.length) {
      return <Text style={styles.noMoreText}>No more list available</Text>;
    } else {
      return (
        <View style={styles.loardmoreButton}>
                  <TouchableOpacity style={styles.buttonView} onPress={loadMoreItems}>
          <Text style={styles.buttonText}>Load More</Text>
        </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader sectionHeaderTitle = "Course List" headerTitleStyle={styles.textHeader} navigation={navigation}/>
      {/* <ScrollView contentContainerStyle={styles.container}>
      {DATA.map((item, index) => (
        <View key={item.id} style={[
          styles.cardLayer,
          index === DATA.length - 1 && styles.lastCardLayer, 
        ]}>
          <View style={styles.card}>
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
    </ScrollView> */}
    <FlatList
        data={DATA.slice(0, visibleItems)} // Display only visible items
        renderItem={({ item, index }) => (
          <View key={item.id} style={[styles.cardLayer, index === visibleItems - 1 && styles.lastCardLayer]}>
            <View style={styles.card}>
              <View style={styles.headContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => toggleLike(item.id)}>
                  <FontAwesomeIcon icon={faHeart} size={30} color={likedItems[item.id] ? 'red' : COLORS.$black} />
                </TouchableOpacity>
              </View>
              <View style={styles.priceDetails}>
                <View style={styles.timimgContainer}>
                  <FontAwesomeIcon icon={faClock} size={20} color={COLORS.$gray} />
                  <Text style={styles.courseTime}>{item.time}</Text>
                </View>
                <View style={styles.amountDetails}>
                  <Text style={styles.coursePreAmount}>{item.preamount}</Text>
                  <Text style={styles.courseAmount}>{item.amount}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.button} onPress={() => handlePress(item)}>
                <Text style={styles.buttonText}>View Course Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContentContainer}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={renderFooter} // Add footer component
      />
    <TouchableOpacity style={styles.wishlistButton} onPress={viewWishlist}>
              <Text style={styles.buttonText}>View Wishlist</Text>
            </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Coursedetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContentContainer: {
    paddingBottom: 100, // Add padding to prevent content being cut off by the static button
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
  buttonView:{
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 20,
    right: 20,
    backgroundColor: COLORS.$blue_shade_2,
    borderRadius: 5,
    marginTop: 20,
    // paddingHorizontal: 30,
    paddingVertical: 10
  },
  loardmoreButton: {
  marginHorizontal: '30%',
  },
  wishlistButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: COLORS.$primary,
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: COLORS.$White,
    fontSize: SIZES.sz_18_font,
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
  lastCardLayer: {
    borderBottomWidth: 0, 
  },
  textHeader: {
    paddingLeft: '31%',
  }
});
