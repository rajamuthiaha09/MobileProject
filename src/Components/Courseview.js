import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View,} from 'react-native';
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
    { username: 'Selvakumar', reviewDate: '18-09-2024', comments: 'Excellent course. Very useful' , star: '', gender: 'Male',},
    { username: 'Dhanushiya', reviewDate: '20-10-2022', comments: 'An excellent course. The tutor was v. knowledgeable' , star: '', gender: 'Female',},
    { username: 'Varsha', reviewDate: '01-01-2020', comments: 'Well done. Good course. Excellent tutor' , star: '', gender: 'Female',},
    { username: 'Ajith Kumar', reviewDate: '19-08-2015', comments: 'It is a top quality course. Keep going, we need this type of course to improve our studies. Excellent. Thank you!!' , star: '', gender: 'Male',},
    { username: 'Hariprasath', reviewDate: '19-12-2019', comments: 'Good service but room for improvement.' , star: '', gender: 'Male',},
    { username: 'Vinoth', reviewDate: '25-05-2023', comments: 'Good service but room for improvement.' , star: '', gender: 'Male',},
    { username: 'Mohanraj', reviewDate: '22-05-2022', comments: 'Good service but room for improvement.' , star: '', gender: 'Male',},
    { username: 'Girija', reviewDate: '09-05-2021', comments: 'Good service but room for improvement.' , star: '', gender: 'Female',},
    { username: 'Jenifer', reviewDate: '02-02-2020', comments: 'Good service but room for improvement.' , star: '', gender: 'Female',},
  ];

  const parseDate = dateStr => {
    const [day, month, year] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day);
  };

  const formatDate = dateStr => {
    const date = parseDate(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit',});
  };

  const sortedReviewDatas = reviewDatas.sort(
    (a, b) => parseDate(b.reviewDate) - parseDate(a.reviewDate),
  );

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.imageLayout} source={image.courseImageView}
      />
      <Text style={styles.CourseTitle}>{title}</Text>
      <View style={styles.coursEnrollListView}>
        <Text style={[styles.coursEnrollList, {paddingRight: SIZES.padding_10}]}>
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
            The Ultimate Guide To Strategic Marketing is an essential resource for anyone looking to master the art and science of marketing
            strategy. This comprehensive guide delves into the core principles of strategic marketing, offering insights into market analysis,
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
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}>
          {reviewDatas.map((review, index) => (
            <View key={index} style={styles.reviewContainer}>
              <View style={styles.reviewInrContainer}>
                <Image
                  source={
                    review.gender === 'Male'
                      ? image.userMen
                      : image.userWomen
                  }
                  style={styles.userImage}
                />
                <View style={styles.detailsContainer}>
                  <Text style={styles.reviewDates}>
                    {formatDate(review.reviewDate)}
                  </Text>
                  <Text style={styles.reviewUsername}>{review.username}</Text>
                </View>
                {/* <View style={styles.preamountContainer}>
                  <Text style={styles.coursePreAmount}>{preamount}</Text>
                </View> */}
              </View>
              <Text style={styles.reviewComments}>{review.comments}</Text>
              <Text style={styles.lastLine}></Text>
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
    margin: 20,
  },
  imageLayout: {
    borderRadius: 10,
    width: '100%',
    height: '30%',
  },
  CourseTitle: {
    fontSize: SIZES.sz_24_font,
    fontWeight: 'bold',
    color: COLORS.$black,
    paddingTop: SIZES.padding_20,
    paddingBottom: SIZES.padding_10,
  },
  coursEnrollListView: {
    flexDirection: 'row',
  },
  coursEnrollList: {
    fontSize: SIZES.sz_19_font,
  },

  //tab styles
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  titleDescription: {
    textTransform: 'uppercase',
    fontSize: SIZES.sz_18_font,
  },

  // description style
  aboutContent: {
    fontSize: SIZES.sz_20_font,
    color: COLORS.$black,
    fontWeight: 'bold',
    paddingBottom: SIZES.padding_10,
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
    fontSize: SIZES.sz_21_font,
  },
  courseDescription: {
    fontSize: SIZES.sz_20_font,
  },
  courseAmount: {
    fontSize: SIZES.sz_30_font,
    fontWeight: 'bold',
    color: COLORS.$green,
  },
  coursePreAmount: {
    fontSize: SIZES.sz_20_font,
    textDecorationLine: 'line-through',
    color: COLORS.$gray,
    paddingTop: SIZES.padding_6,
  },
  contentRowViewInr: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  button: {
    backgroundColor: COLORS.$blue_shade_1,
    paddingVertical: SIZES.padding_25,
    paddingHorizontal: '20%',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.$White,
    fontSize: SIZES.sz_20_font,
    fontWeight: 'bold',
  },


  //review content styles
  contentContainer: {
  },
  reviewContainer: {
    marginBottom: 20,
  },
  lastLine: {
    borderBottomWidth: 1,
  },
  reviewInrContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  userImage: {
    width: '17.2%',
    height: 80,
  },
  detailsContainer: {
    marginTop: 10,
  },
  reviewDates: {
    fontSize: SIZES.sz_16_font,
    paddingBottom: SIZES.padding_3,
  },
  reviewUsername: {
    color: COLORS.$black,
    fontWeight: 'bold',
    fontSize: SIZES.sz_20_font,
    paddingBottom: SIZES.padding_10,
  },
  reviewComments: {
    marginTop: -10,
    fontSize: SIZES.sz_18_font,
    paddingLeft: '20%',
  },
  preamountContainer: {
    marginTop: 5,
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
  },
  // coursePreAmount: {
  //   fontWeight: 'bold',
  //   color: 'green',
  // },
});
