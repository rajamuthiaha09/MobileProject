import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {COLORS, SIZES} from '../constants/themes';
import {TouchableOpacity} from 'react-native-gesture-handler';
import image from '../constants/image';

const Courseview = () => {
  const {params} = useRoute();
  const {title, amount, preamount, tutorname, ratings, student} = params;
  const titles = ['Description', 'Lessons', 'Instructor', 'Reviews'];
  const [selectedTitle, setSelectedTitle] = useState('Description');
  const handleTitlePress = title => {
    setSelectedTitle(title);
  };

  const reviewDatas = [
    {
      username: 'Selvakumar',
      reviewDate: 'March 3, 2022',
      comments: 'Very responsive and helpful.',
      star: '',
      gender: 'Male',
    },
    {
      username: 'Dhanushiya',
      reviewDate: 'March 3, 2022',
      comments: 'Good service but room for improvement.',
      star: '',
      gender: 'Female',
    },
    {
      username: 'Varsha',
      reviewDate: 'March 3, 2022',
      comments: 'Good service but room for improvement.',
      star: '',
      gender: 'Female',
    },
    {
      username: 'Ajith Kumar',
      reviewDate: 'March 3, 2022',
      comments: 'Good service but room for improvement.',
      star: '',
      gender: 'Male',
    },
    {
      username: 'Hariprasath',
      reviewDate: 'March 3, 2022',
      comments: 'Good service but room for improvement.',
      star: '',
      gender: 'Male',
    },
    {
      username: 'Vinoth',
      reviewDate: 'March 3, 2022',
      comments: 'Good service but room for improvement.',
      star: '',
      gender: 'Male',
    },
    {
      username: 'Mohanraj',
      reviewDate: 'March 3, 2022',
      comments: 'Good service but room for improvement.',
      star: '',
      gender: 'Male',
    },
    {
      username: 'Girija',
      reviewDate: 'March 3, 2022',
      comments: 'Good service but room for improvement.',
      star: '',
      gender: 'Female',
    },
    {
      username: 'Jenifer',
      reviewDate: 'March 3, 2022',
      comments: 'Good service but room for improvement.',
      star: '',
      gender: 'Female',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.imageLayout}
        source={require('../assets/images/courseview.png')}
      />
      <Text style={styles.CourseTitle}>{title}</Text>
      <View style={styles.coursEnrollListView}>
        <Text style={[styles.coursEnrollList, {paddingRight: 10}]}>
          ({ratings} ratings)
        </Text>
        <Text style={styles.coursEnrollList}>{student} students</Text>
      </View>
      <View style={styles.rowContainer}>
        {titles.map((item, index) => (
          <Text
            key={index}
            style={styles.titleDescription}
            onPress={() => handleTitlePress(item)}>
            {item}
          </Text>
        ))}
      </View>

      {selectedTitle === 'Description' && (
        <View>
          <Text style={styles.aboutContent}>About Course</Text>
          <View style={styles.contentRowView}>
            <Image style={styles.imgView} source={image.user} />
            <Text style={styles.descriptionContent}>{tutorname}</Text>
          </View>
          <View style={styles.contentRowView}>
            <Image style={styles.imgView} source={image.videoplay} />
            <Text style={styles.descriptionContent}>
              14 hourse on-demand video
            </Text>
          </View>
          <View style={styles.contentRowView}>
            <Image style={styles.imgView} source={image.download} />
            <Text style={styles.descriptionContent}>
              16 downloadable resources
            </Text>
          </View>
          <View style={styles.contentRowView}>
            <Image style={styles.imgView} source={image.certificate} />
            <Text style={styles.descriptionContent}>
              Certificate of completion
            </Text>
          </View>
          <Text style={styles.courseDescription}>
            The Ultimate Guide To Strategic Marketing is an essential resource
            for anyone looking to master the art and science of marketing
            strategy. This comprehensive guide delves into the core principles
            of strategic marketing, offering insights into market analysis,
            target audience identification, and effective positioning
          </Text>
          <View style={styles.contentRowViewInr}>
            <View>
              <Text style={styles.courseAmount}>{amount}</Text>
              <Text style={styles.coursePreAmount}>{preamount}</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Buy Course</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {selectedTitle === 'Lessons' && (
        <>
          <Text style={styles.content}>Lesson 1</Text>
          <Text style={styles.content}>Lesson 2</Text>
          <Text style={styles.content}>Lesson 3</Text>
        </>
      )}
      {selectedTitle === 'Instructor' && (
        <>
          <Text style={styles.content}>Lesson 1</Text>
          <Text style={styles.content}>Lesson 2</Text>
          <Text style={styles.content}>Lesson 3</Text>
        </>
      )}
      {selectedTitle === 'Reviews' && (
        <ScrollView style={styles.container}>
          {reviewDatas.map((review, index) => (
            <View key={index} style={styles.reviewContainer}>
              <View styles={styles.reviewCard}>
                <View><Image
                  source={
                    review.gender === 'Male'
                      ? require('../assets/images/men.png')
                      : require('../assets/images/women.png')
                  }
                  style={styles.image}
                /></View>
                <View>
                    <Text style={styles.title}>{review.reviewDate}</Text>
                {/* <Text style={styles.name}>{review.username}</Text> */}
                </View>
                
                
              </View>

              {/* <Text style={styles.communication}>{review.comments}</Text> */}
            </View>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Courseview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    margin: 20,
  },
  imageLayout: {
    borderRadius: 10,
    width: '100%',
    height: '30%',
    // paddingBottom: 20,
    // imageLayout
    // imageLayout: 'cover',
  },
  CourseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.$black,
    paddingTop: 20,
    paddingBottom: 10,
  },
  coursEnrollListView: {
    flexDirection: 'row',
  },
  coursEnrollList: {
    fontSize: 19,
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 30, // Optional: adds vertical spacing
  },
  titleDescription: {
    textTransform: 'uppercase',
    fontSize: 18,
  },

  aboutContent: {
    fontSize: 20,
    color: COLORS.$black,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  contentRowView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 10,
  },
  imgView: {
    width: 30,
    height: 30,
  },
  descriptionContent: {
    fontSize: 21,
  },
  courseDescription: {
    fontSize: 20,
  },

  courseAmount: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.$green,
  },
  coursePreAmount: {
    fontSize: 20,
    textDecorationLine: 'line-through',
    color: 'gray',
    paddingTop: 6,
  },

  contentRowViewInr: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  button: {
    backgroundColor: COLORS.$blue_shade_1,
    paddingVertical: 25,
    paddingHorizontal: '20%',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.$White,
    fontSize: 20,
    fontWeight: 'bold',
  },
  reviewCard: {
    flexDirection: 'row',
  },
});
