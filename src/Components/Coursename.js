// import React from 'react';
// import { Image, StyleSheet, Text, FlatList, View, TouchableOpacity, }from 'react-native';
// import {useNavigation} from '@react-navigation/native';

// const Coursename = () => {
//   const navigation = useNavigation();
//   const DATA = [
//     { id: '1', src: require('../assets/images/course5.png'), style: 'imageClass1' },
//     { id: '2', src: require('../assets/images/course1.png'), style: 'imageClass2' },
//     { id: '3', src: require('../assets/images/course3.png'), style: 'imageClass1' },
//     { id: '4', src: require('../assets/images/course6.png'), style: 'imageClass2' },
//     { id: '5', src: require('../assets/images/course4.png'), style: 'imageClass1' },
//     { id: '6', src: require('../assets/images/course2.png'), style: 'imageClass2' },
//   ];

//   const firstHalf = DATA.slice(0, 3);
//   const secondHalf = DATA.slice(3);

//   const handlePress = () => {
//     navigation.navigate('Coursedetails');
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity onPress={handlePress}>
//       <Image source={item.src} style={styles[item.style]} />
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.textcontainer}>
//         <Text style={styles.textHeader}>Categories</Text>
//       </View>
//       <View style={styles.flatListContainer}>
//         <FlatList
//           data={firstHalf}
//           renderItem={renderItem}
//           keyExtractor={item => item.id}
//           contentContainerStyle={styles.imageContainer}
//         />
//         <FlatList
//           data={secondHalf}
//           renderItem={renderItem}
//           keyExtractor={item => item.id}
//           contentContainerStyle={styles.imageContainer}
//         />
//       </View>
//     </View>
//   );
// };

// export default Coursename;

// const styles = StyleSheet.create({
//   imageClass1: {
//     width: 225,
//     height: 330,
//     borderRadius: 15,
//     marginBottom: 10,
//   },
//   imageClass2: {
//     width: 225,
//     height: 285,
//     borderRadius: 15,
//     marginBottom: 10,
//   },
//   container: {
//     margin: 17,
//   },
//   textcontainer: {
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   textHeader: {
//     fontSize: 25,
//     fontWeight: 'light',
//     color: 'gray',
//   },
//   flatListContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   imageContainer: {
//     alignItems: 'center',
//   },
// });

import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import image from '../constants/image';
import {COLORS, SIZES} from '../constants/themes';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar, faChevronRight} from '@fortawesome/free-solid-svg-icons';

const Coursename = ({limit}) => {
  const navigation = useNavigation();
  const courses = [
    {
      id: '1',
      title: 'Power BI for Beginners',
      rating: 4.6,
      learners: '201K Learners',
      image: image.courseName7,
      isFree: true,
    },
    {
      id: '2',
      title: 'Introduction to MS Excel',
      rating: 4.6,
      learners: '285K Learners',
      image: image.courseName,
      isFree: true,
    },
    {
      id: '3',
      title: 'PMP Basics',
      rating: 4.6,
      learners: '59K Learners',
      image: image.courseName5,
      isFree: true,
    },
    {
      id: '4',
      title: 'Introduction to SQL',
      rating: 4.6,
      learners: '179K Learners',
      image: image.courseName6,
      isFree: true,
    },
    {
      id: '5',
      title: 'Python for Beginners',
      rating: 4.5,
      learners: '299K Learners',
      image: image.courseName1,
      isFree: true,
    },
    {
      id: '6',
      title: 'Introduction to Cryptocurrency',
      rating: 4.7,
      learners: '110K Learners',
      image: image.courseName,
      isFree: true,
    },
    {
      id: '7',
      title: 'CI/CD for Beginners',
      rating: 4.6,
      learners: '93K Learners',
      image: image.courseName,
      isFree: true,
    },
    {
      id: '8',
      title: 'UI/UX Basics',
      rating: 4.6,
      learners: '125K Learners',
      image: image.courseName4,
      isFree: true,
    },
    {
      id: '9',
      title: 'React Native for Beginners',
      rating: 4.7,
      learners: '83K Learners',
      image: image.courseName,
      isFree: true,
    },
    {
      id: '10',
      title: 'Introduction to Java',
      rating: 4.5,
      learners: '215K Learners',
      image: image.courseName3,
      isFree: true,
    },
    {
      id: '11',
      title: 'Angular for Beginners',
      rating: 4.6,
      learners: '98K Learners',
      image: image.courseName2,
      isFree: true,
    },
    {
      id: '12',
      title: 'AWS for Beginners',
      rating: 4.7,
      learners: '165K Learners',
      image: image.courseName,
      isFree: true,
    },
    {
      id: '13',
      title: 'Social Media Marketing for Beginners',
      rating: 4.5,
      learners: '88K Learners',
      image: image.courseName,
      isFree: true,
    },
    {
      id: '14',
      title: 'Digital Marketing Essentials',
      rating: 4.6,
      learners: '122K Learners',
      image: image.courseName,
      isFree: true,
    },
  ];
  const displayedCourses = limit ? courses.slice(0, limit) : courses;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Courses students are learning</Text>
        {limit && (
          <TouchableOpacity onPress={() => navigation.navigate('Coursename')}>
            <View style={styles.seeViewContainer}>
              <Text style={styles.seeAll}>SEE ALL</Text>
              <FontAwesomeIcon
                icon={faChevronRight}
                size={15}
                color="#007BFF"
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={displayedCourses}
        renderItem={({item}) => (
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
              {item.isFree && (
                <View style={styles.freeTag}>
                  <Text style={styles.freeTagText}>FREE</Text>
                </View>
              )}
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default Coursename;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    // backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
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
    // alignItems: 'center',
    // height: '50%',
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 5,
    // shadowRadius: 4,
    // elevation: 3,
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
    // backgroundColor: 'red',
    paddingTop: 13,
    // justifyContent: 'center',
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
  freeTag: {
    position: 'absolute',
    top: '90%',
    right: 29,
    backgroundColor: '#4CAF50',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  freeTagText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  separator: {
    height: 10,
  },
  freeTagContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  courseViewTypeContainer: {
    // position: 'absolute',
    // top: '90%',
    // right: 29,
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
    // marginTop: 4,
    // width: 100,
    // backgroundColor: 'red',
  },
  seeViewContainer: {
    flexDirection: 'row', // Align items in a row
    alignItems: 'center', 
    gap: 5, // Vertically align the text and icon
  },
});
