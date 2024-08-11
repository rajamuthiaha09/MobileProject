import {
  Image,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Foundation';

const Coursedetails = () => {
  const navigation = useNavigation();
  const DATA = [
    { id: '1', title: 'The Ultimate Guide To Strategic Marketing', src: require('../assets/images/cs7.png'), time: '5h 30m', amount: '$35.00', preamount: '$32.00', },
    { id: '2', title: 'Home Business:The Complete CPA Marketing Course', src: require('../assets/images/cs8.jpg'), time: '5h 30m', amount: '$35.00', preamount: '', },
    { id: '3', title: 'Digital Marketing: How to Generate Sales Leads', src: require('../assets/images/cs9.jpg'), time: '5h 30m', amount: '$35.00', preamount: '$32.00', },
    { id: '4', title: 'Copywriting - The Psychology Of Your Irresistible Offer', src: require('../assets/images/cs9.jpg'), time: '5h 30m', amount: '$35.00', preamount: '$32.00', },
    { id: '5', title: 'Write To gnite - Master The Art Of Sales Copy', src: require('../assets/images/cs9.jpg'), time: '5h 30m', amount: '$35.00', preamount: '', },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {DATA.map(item => (
        <View style={styles.cardLayer}> 
        {/* <Icon
                    name="asterisk"
                    color={'red'}
                    size={90}
                    style={{ marginHorizontal: 10 }}
                  /> */}
        <View key={item.id} style={styles.card}>
          <View>{/* <Image source={item.src} style={styles.image} /> */}</View>
          <View style={styles.childContainer}>
            <View style={styles.amountprixe2}>
              <Text style={styles.title}>{item.title}</Text>
              <Image source={require('../assets/images/icon.png')} />
            </View>
            <View style={styles.amountprixe}>
              <View>
                <Text style={styles.time}>{item.time}</Text>
              </View>
              <View style={styles.amountprixe1}>
                <Text style={styles.preamount}>{item.preamount}</Text>
                <Text style={styles.amount}>{item.amount}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert(`Button pressed for ${item.title}`)}>
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
  container: {
    // padding: 20,
  },
  cardLayer:{
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    padding:0,
  },
  card: {
    // backgroundColor: 'white',
    // borderRadius: 8,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    marginBottom: 20,
    paddingHorizontal: 20,
    // padding: 15,
    // elevation: 3, // For Android shadow
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  time: {
    fontSize: 20,
    color: 'gray',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  amount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
  },
  preamount: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: 'gray',
    paddingTop: 6,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  childContainer: {
    flexDirection: 'column',
  },
  amountprixe: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // gap: 10,
    marginBottom: 10,
  },
  amountprixe1: {
    flexDirection: 'row',
    gap: 10,
  },
  amountprixe2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    // gap: 10,
  },
  viewimage: {
    // paddingTop: 20,
  },
});
