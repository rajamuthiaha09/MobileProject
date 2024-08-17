import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Pressable,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faClock, faHeart} from '@fortawesome/free-solid-svg-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../../constants/themes';

const WishlistPage = ({route}) => {
  const {likedCourses} = route.params;
  return (
    // <SafeAreaView>
    //     <Text>Wishlist List</Text>
    //   <ScrollView contentContainerStyle={styles.container}>
    //     <View style={styles.cardLayer}>
    //       {likedCourses.length > 0 ? (
    //         likedCourses.map((course, index) => (
    //           <View key={index} style={styles.card}>
    //             <View style={styles.headContainer}>
    //             <Text style={styles.title}>{course.title}</Text>
    //             <FontAwesomeIcon
    //               icon={faHeart}
    //               size={30}
    //               color={'red'}
    //             />
    //             </View>
    //             {/* <Text style={styles.title}>{course.title}</Text> */}
    //             <Text>{course.time}</Text>
    //             <Text>{course.amount}</Text>
    //           </View>
    //         ))
    //       ) : (
    //         <Text>No items in the wishlist</Text>
    //       )}
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        {likedCourses.length > 0 ? (
          likedCourses.map((course, index) => (
            <View style={styles.cardLayer}>
              <View key={index} style={styles.card}>
                <View style={styles.headContainer}>
                  <Text style={styles.title}>{course.title}</Text>

                  <FontAwesomeIcon icon={faHeart} size={30} color={'red'} />
                </View>
                <View style={styles.priceDetails}>
                  <View style={styles.timimgContainer}>
                    <FontAwesomeIcon
                      icon={faClock}
                      size={20}
                      color={COLORS.$gray}
                    />
                    <Text style={styles.courseTime}>{course.time}</Text>
                  </View>
                  <View style={styles.amountDetails}>
                    <Text style={styles.coursePreAmount}>
                      {course.preamount}
                    </Text>
                    <Text style={styles.courseAmount}>{course.amount}</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handlePress(course)}>
                  <Text style={styles.buttonText}>View Course Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text>No items in the wishlist</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default WishlistPage;

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
