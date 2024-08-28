import React from 'react';
import {StyleSheet, Text, ScrollView, View, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar, faTag, faHeart} from '@fortawesome/free-solid-svg-icons';
import { COLORS } from '../../constants';
import { CommonHeader } from '../sharedComponents';

const WishlistPage = ({navigation, route}) => {
  const {likedCourseView = []} = route.params || {};

  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader showHeader={true} showBackIcon={true} sectionHeaderTitle="Wishlist" navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {likedCourseView.length > 0 ? (
          likedCourseView.map((item, index) => (
            <View key={item.id} style={styles.courseContainer}>
              <View style={styles.imageContainer}>
                <Image source={item.image} style={[styles.courseImage, {height: 160, width: 160}]}/>
                <View style={[styles.tagContainer, item.isFree ? styles.freeTag : styles.paidTag]}>
                  <Text style={styles.tagText}>
                    {item.isFree ? 'FREE' : 'PAID'}
                  </Text>
                </View>
              </View>
              <View style={[styles.courseInfo,{paddingTop: 10, paddingLeft: 15},]}>
                <Text style={styles.courseTitle}>{item.title}</Text>
                <View style={styles.courseRating}>
                  <FontAwesomeIcon icon={faStar} size={18} color="#FFD700"/>
                  <Text style={styles.courseRatingText}>{item.rating}</Text>
                  <Text style={styles.courseLearners}>{item.learners}</Text>
                </View>
                <Text style={styles.courseTest}>{item.test}</Text>
                <View style={styles.offerContainer}>
                  <FontAwesomeIcon icon={faTag} size={15} color="#FFD700"/>
                  <Text style={styles.offerText}>{item.offer}</Text>
                </View>
                <View style={styles.priceContainer}>
                  <Text style={styles.discountText}>{item.discount}</Text>
                  <Text style={styles.originalPrice}>{item.actAmount}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.likeButton}>
                <FontAwesomeIcon icon={faHeart} size={25} color='red'/>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <View style={styles.emptyTextContainer}>
            <Text style={styles.emptyText}>No items in the wishlist</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default WishlistPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
  },
  courseContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: 10,
  },
  imageContainer: {
    position: 'relative',
  },
  courseImage: {
    width: 110,
    height: 110,
    borderRadius: 20,
  },
  courseInfo: {
    flex: 1,
    paddingTop: 13,
  },
  courseTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#333',
  },
  courseRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  courseRatingText: {
    marginLeft: 4,
    fontSize: 17,
    color: '#555',
  },
  courseLearners: {
    marginLeft: 10,
    fontSize: 16,
    color: '#777',
  },
  courseTest: {
    fontSize: 15,
    marginTop: 4,
  },
  offerContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  offerText: {
    color: '#FFD700',
  },
  priceContainer: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 4,
  },
  discountText: {
    fontSize: 19,
    color: COLORS.$black,
    fontWeight: 'bold',
  },
  originalPrice: {
    fontSize: 19,
    textDecorationLine: 'line-through',
  },
  likeButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: 200,
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
  },
  tagContainer: {
    position: 'absolute',
    top: '90%',
    right: 29,
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  freeTag: {
    backgroundColor: '#4CAF50',
  },
  paidTag: {
    backgroundColor: '#FFD700',
  },
  tagText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
