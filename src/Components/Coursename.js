import React, { useState } from 'react';
import {View,Text,Image,FlatList,StyleSheet,TouchableOpacity,} from 'react-native';
import image from '../constants/image';
import {COLORS, SIZES} from '../constants/themes';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar,faChevronRight,faTag,faHeart,} from '@fortawesome/free-solid-svg-icons';
import {commonStyles} from '../constants';

const Coursename = ({limit, isRedirected}) => {
  const navigation = useNavigation();

  const [likedCourses, setLikedCourses] = useState({});

  const toggleLike = (courseId) => {
    setLikedCourses(prevLikedCourses => ({
      ...prevLikedCourses,
      [courseId]: !prevLikedCourses[courseId]
    }));
  };
  
  const courses = [
    { id: '1', title: 'Power BI for Beginners', rating: 4.6, learners: '201K Learners', image: image.courseName7, isFree: true, actAmount: '$25.00', discount: '$20.00', offer: '50% OFF FOR 4 DAYS', test: '10 mock tests and exercises',},
    { id: '2', title: 'Introduction to MS Excel', rating: 4.6, learners: '285K Learners', image: image.courseName, isFree: false, actAmount: '$25.00', discount: '$20.00', offer: '50% OFF FOR 4 DAYS', test: '10 mock tests and exercises',},
    { id: '3', title: 'PMP Basics', rating: 4.6, learners: '59K Learners', image: image.courseName5, isFree: true, actAmount: '$25.00', discount: '$20.00', offer: '50% OFF FOR 4 DAYS', test: '10 mock tests and exercises',},
    { id: '4', title: 'Introduction to SQL', rating: 4.6, learners: '179K Learners', image: image.courseName6, isFree: true, actAmount: '$25.00', discount: '$20.00', offer: '50% OFF FOR 4 DAYS', test: '10 mock tests and exercises',},
    { id: '5', title: 'Python for Beginners', rating: 4.5, learners: '299K Learners', image: image.courseName1, isFree: true, actAmount: '$25.00', discount: '$20.00', offer: '50% OFF FOR 4 DAYS', test: '10 mock tests and exercises',},
    { id: '6', title: 'Introduction to Cryptocurrency', rating: 4.7, learners: '110K Learners', image: image.courseName, isFree: true, actAmount: '$25.00', discount: '$20.00', offer: '50% OFF FOR 4 DAYS', test: '10 mock tests and exercises',},
    { id: '7', title: 'CI/CD for Beginners', rating: 4.6, learners: '93K Learners', image: image.courseName, isFree: true, actAmount: '$25.00', discount: '$20.00', offer: '50% OFF FOR 4 DAYS', test: '10 mock tests and exercises',},
    { id: '8', title: 'UI/UX Basics', rating: 4.6, learners: '125K Learners', image: image.courseName4, isFree: true, actAmount: '$25.00', discount: '$20.00', offer: '50% OFF FOR 4 DAYS', test: '10 mock tests and exercises',},
    { id: '9', title: 'React Native for Beginners', rating: 4.7, learners: '83K Learners', image: image.courseName, isFree: true, actAmount: '$25.00', discount: '$20.00', offer: '50% OFF FOR 4 DAYS', test: '10 mock tests and exercises',},
    { id: '10', title: 'Introduction to Java', rating: 4.5, learners: '215K Learners', image: image.courseName3, isFree: true, actAmount: '$25.00', discount: '$20.00', offer: '50% OFF FOR 4 DAYS', test: '10 mock tests and exercises',},
    { id: '11', title: 'Angular for Beginners', rating: 4.6, learners: '98K Learners', image: image.courseName2, isFree: true, actAmount: '$25.00', discount: '$20.00', offer: '50% OFF FOR 4 DAYS', test: '10 mock tests and exercises',},
    { id: '12', title: 'AWS for Beginners', rating: 4.7, learners: '165K Learners', image: image.courseName, isFree: true, actAmount: '$25.00', discount: '$20.00', offer: '50% OFF FOR 4 DAYS', test: '10 mock tests and exercises',},
    { id: '13', title: 'Social Media Marketing for Beginners', rating: 4.5, learners: '88K Learners', image: image.courseName, isFree: true, actAmount: '$25.00', discount: '$20.00', offer: '50% OFF FOR 4 DAYS', test: '10 mock tests and exercises',},
    { id: '14', title: 'Digital Marketing Essentials', rating: 4.6, learners: '122K Learners', image: image.courseName, isFree: true, actAmount: '$25.00', discount: '$20.00', offer: '50% OFF FOR 4 DAYS', test: '10 mock tests and exercises',},
  ];

  const viewWishlist = () => {
    const likedCourseView = courses.filter(item => likedCourses[item.id]);
    navigation.navigate('WishlistScreen', { likedCourseView });
  };

  const displayedCourses = limit ? courses.slice(0, limit) : courses;
  return (
    <View style={styles.container}>
      <View style={commonStyles.flexJustifySpace}>
        <Text style={commonStyles.commonHeaderText}>
          Courses students are learning
        </Text>
        {limit && (
          <TouchableOpacity onPress={() => navigation.navigate('Coursename')}>
            <View style={styles.seeViewContainer}>
              <Text style={styles.seeAll}>SEE ALL</Text>
              <FontAwesomeIcon icon={faChevronRight} size={15} color="#007BFF"/>
            </View>
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={displayedCourses}
        renderItem={({item}) => (
          <View>
            {isRedirected ? (
              <View style={styles.courseContainer}>
                <View style={styles.courseInfo}>
                  <Text style={styles.courseTitle}>{item.title}</Text>
                  <View style={styles.courseRating}>
                    <FontAwesomeIcon icon={faStar} size={18} color="#FFD700" />
                    <Text style={styles.courseRatingText}>{item.rating}</Text>
                    <Text style={styles.courseLearners}>{item.learners}</Text>
                  </View>
                  <View style={styles.courseViewTypeContainer}>
                    <Text style={styles.courseViewType}>Video Lessons</Text>
                  </View>
                </View>
                <View style={styles.imageContainer}>
                  <Image source={item.image} style={styles.courseImage} />
                  <View
                    style={[styles.tagContainer,item.isFree ? styles.freeTag : styles.paidTag,]}>
                    <Text style={styles.tagText}>
                      {item.isFree ? 'FREE' : 'PAID'}
                    </Text>
                  </View>
                </View>
              </View>
            ) : (
              <View style={styles.courseContainer}>
                <View style={styles.imageContainer}>
                  <Image source={item.image} style={[styles.courseImage, {height: 160, width: 160}]}/>
                  <View
                    style={[ styles.tagContainer,item.isFree ? styles.freeTag : styles.paidTag,]}>
                    <Text style={styles.tagText}>
                      {item.isFree ? 'FREE' : 'PAID'}
                    </Text>
                  </View>
                </View>
                <View
                  style={[styles.courseInfo,{paddingTop: 10, paddingLeft: 15},]}>
                  <Text style={styles.courseTitle}>{item.title}</Text>
                  <View style={styles.courseRating}>
                    <FontAwesomeIcon icon={faStar} size={18} color="#FFD700" />
                    <Text style={styles.courseRatingText}>{item.rating}</Text>
                    <Text style={styles.courseLearners}>{item.learners}</Text>
                  </View>
                  <Text style={[{fontSize: 15, marginTop: 4}]}>
                    {item.test}
                  </Text>
                  <View style={[{flexDirection: 'row', marginTop: 4}]}>
                    <FontAwesomeIcon icon={faTag} size={15} color="#FFD700" />
                    <Text style={[{color: '#FFD700'}]}>{item.offer}</Text>
                  </View>
                  <View style={[{flexDirection: 'row', gap: 5, marginTop: 4}]}>
                    <Text style={[{fontSize: 19,color: COLORS.$black,fontWeight: 'bold',}]}>
                      {item.discount}
                    </Text>
                    <Text style={[{fontSize: 19, textDecorationLine: 'line-through'},]}>
                      {item.actAmount}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity onPress={() => toggleLike(item.id)}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    size={25}
                    color={likedCourses[item.id] ? 'red' : 'black'}
                    style={styles.iconBorder}
                  />
                  <FontAwesomeIcon
                    icon={faHeart}
                    size={18}
                    color={likedCourses[item.id] ? 'red' : 'white'}
                    style={styles.iconFill}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListFooterComponent={
          !isRedirected ? (
            <TouchableOpacity style={styles.wishlistButton} activeOpacity={0.5} onPress={viewWishlist}>
              <Text style={styles.buttonText}>View Wishlist</Text>
            </TouchableOpacity>
          ) : null
        }
      />
    </View>
  );
};

export default Coursename;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  seeAll: {
    color: '#007BFF',
    fontSize: 14,
  },
  courseContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    paddingTop: 10,
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
    ...commonStyles.flexAlignCenter,
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
  freeTag: {
    position: 'absolute',
    top: '90%',
    right: 29,
    backgroundColor: '#4CAF50',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  paidTag: {
    position: 'absolute',
    top: '90%',
    right: 29,
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    backgroundColor: '#FFD700',
  },
  freeTagText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  separator: {
    height: 15,
  },
  freeTagContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  courseViewTypeContainer: {
    marginTop: 10,
    width: 100,
    backgroundColor: COLORS.$gray,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  courseViewType: {
    fontSize: 13,
    color: '#777',
  },
  seeViewContainer: {
    ...commonStyles.flexAlignCenter,
    gap: 5,
  },
  iconFill: {
    position: 'absolute',
    left: '14%',
    top: 3,
  },
  wishlistButton: {
    bottom: 50,
    backgroundColor: COLORS.$blue_shade_1,
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.$White,
    fontSize: SIZES.sz_18_font,
  },
});