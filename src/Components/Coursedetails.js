import { StyleSheet, Text, ScrollView, TouchableOpacity, View,} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants/themes';

const Coursedetails = () => {
  const DATA = [
    {
      id: '1',
      title: 'The Ultimate Guide To Strategic Marketing',
      src: require('../assets/images/cs7.png'),
      time: '2h 30m',
      amount: '$34.00',
      preamount: '$35.00',
    },
    {
      id: '2',
      title: 'Home Business:The Complete CPA Marketing Course',
      src: require('../assets/images/cs8.jpg'),
      time: '3h 30m',
      amount: '$35.00',
      preamount: '',
    },
    {
      id: '3',
      title: 'Digital Marketing: How to Generate Sales Leads',
      src: require('../assets/images/cs9.jpg'),
      time: '3h 00m',
      amount: '$29.00',
      preamount: '$30.00',
    },
    {
      id: '4',
      title: 'Copywriting - The Psychology Of Your Irresistible Offer',
      src: require('../assets/images/cs9.jpg'),
      time: '4h 30m',
      amount: '$33.00',
      preamount: '$34.00',
    },
    {
      id: '5',
      title: 'Write To gnite - Master The Art Of Sales Copy',
      src: require('../assets/images/cs9.jpg'),
      time: '5h 30m',
      amount: '$30.00',
      preamount: '',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {DATA.map(item => (
        <View style={styles.cardLayer}>
          <View key={item.id} style={styles.card}>
            <View>
              {/* <Image source={item.src} style={styles.image} /> */}
            </View>
            {/* <View style={styles.childContainer}> */}
              <View style={styles.headContainer}>
                <Text style={styles.title}>{item.title}</Text>
                {/* <Image source={require('../assets/images/icon.png')} /> */}
              </View>
              <View style={styles.priceDetails}>
                <View>
                  <Text style={styles.courseTime}>{item.time}</Text>
                </View>
                <View style={styles.amountDetails}>
                  <Text style={styles.coursePreAmount}>{item.preamount}</Text>
                  <Text style={styles.courseAmount}>{item.amount}</Text>
                </View>
              </View>
            {/* </View> */}
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Course Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Coursedetails;

const styles = StyleSheet.create({
  cardLayer: {
    borderBottomColor: COLORS.$grey_shade_1,
    borderBottomWidth: 1,
  },
  card: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: SIZES.sz_18_font,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  courseTime: {
    fontSize: SIZES.sz_20_font,
    color: 'gray',
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
    paddingTop: 6,
  },
  button: {
    backgroundColor: COLORS.$blue_shade_1,
    paddingVertical: 10,
    paddingHorizontal: 20,
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
});
