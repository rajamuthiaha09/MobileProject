import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View,} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {COLORS, SIZES} from '../constants/themes';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { faUser, faLaptopCode, faAward, faDownload,faDiamond, faStar, faStarHalfAlt,} from '@fortawesome/free-solid-svg-icons';
import { image } from '../constants';
import { WebView } from 'react-native-webview';

const Courseview = () => {
  const {params} = useRoute();
  const {title, rating, images,MName,learners,amount,preamount,lessonVideo,isFree,CourseOverView,skills, learn} = params || {};
  const titles = ['Description', 'Lessons', 'Reviews'];
  const [selectedTitle, setSelectedTitle] = useState('Description');
  const handleTitlePress = title => {
    setSelectedTitle(title);
  };

  const reviewDatas = [
    { id: '1', username: 'Selvakumar', reviewDate: '18-09-2024', comments: 'Excellent course. Very useful', starCount: '5', gender: 'Male' },
    { id: '2', username: 'Dhanushiya', reviewDate: '20-10-2022', comments: 'An excellent course. The tutor was v. knowledgeable', starCount: '4.5', gender: 'Female' },
    { id: '3', username: 'Varsha', reviewDate: '01-01-2020', comments: 'Well done. Good course. Excellent tutor', starCount: '3.5', gender: 'Female' },
    { id: '4', username: 'Jaya Murugan', reviewDate: '01-02-2020', comments: 'Well done. Good course. Excellent tutor', starCount: '4', gender: 'Male' },
    { id: '5', username: 'Ajith Kumar', reviewDate: '19-08-2015', comments: 'It is a top quality course. Keep going, we need this type of course to improve our studies. Excellent. Thank you!!', starCount: '4', gender: 'Male' },
    { id: '6', username: 'Hariprasath', reviewDate: '19-12-2019', comments: 'Good service but room for improvement.', starCount: '5', gender: 'Male' },
    { id: '7', username: 'Vinoth', reviewDate: '25-05-2023', comments: 'Good service but room for improvement.', starCount: '4', gender: 'Male' },
    { id: '8', username: 'Mohanraj', reviewDate: '22-05-2022', comments: 'Good service but room for improvement.', starCount: '2', gender: 'Male' },
    { id: '9', username: 'Girija', reviewDate: '09-05-2021', comments: 'Good service but room for improvement.', starCount: '1', gender: 'Female' },
    { id: '10', username: 'Jenifer', reviewDate: '02-02-2020', comments: 'Good service but room for improvement.', starCount: '4', gender: 'Female' },
  ];

  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  const parseDate = dateStr => {
    const [day, month, year] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day);
  };

  const formatDate = dateStr => {
    const date = parseDate(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    });
  };

  const sortedReviewDatas = reviewDatas.sort(
    (a, b) => parseDate(b.reviewDate) - parseDate(a.reviewDate),
  );

  return (
    <>
     <SafeAreaView style={styles.container}>
      <Image style={styles.imageLayout} source={images} />
      <View style={{backgroundColor: 'white',borderTopLeftRadius: 25,borderTopRightRadius: 25, paddingHorizontal: 15, top: '-12%',}}>
        <Text style={styles.CourseTitle}>{title}</Text>
        <View style={styles.coursEnrollListView}>
          <View style={{flexDirection: 'row'}}>
            {Array.from({length: fullStars}, (_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                size={15}
                color={COLORS.$yellow}
              />
            ))}
            {halfStar && (
              <FontAwesomeIcon
                icon={faStarHalfAlt}
                size={15}
                color={COLORS.$yellow}
              />
            )}
          </View>
          <Text style={styles.coursEnrollList}>-</Text>
          <Text style={styles.coursEnrollList}>{learners}</Text>
        </View>
        <View style={styles.rowContainer}>
          {titles.map((item, index) => (
            <Text
              key={index}
              style={[
                styles.titleDescription,
                selectedTitle === item && styles.selectedTitle,
              ]}
              onPress={() => handleTitlePress(item)}>
              {item}
            </Text>
          ))}
        </View>

        {selectedTitle === 'Description' && (
          <View>
            <Text style={styles.aboutContent}>About Course</Text>
            <View style={styles.contentRowView}>
              <FontAwesomeIcon icon={faUser} size={25} />
              <Text style={styles.descriptionContent}>{MName}</Text>
            </View>
            <View style={styles.contentRowView}>
              <FontAwesomeIcon icon={faLaptopCode} size={25} />
              <Text style={styles.descriptionContent}>
                14 hourse on-demand video
              </Text>
            </View>
            <View style={styles.contentRowView}>
              <FontAwesomeIcon icon={faDownload} size={25} />
              <Text style={styles.descriptionContent}>
                16 downloadable resources
              </Text>
            </View>
            <View style={styles.contentRowView}>
              <FontAwesomeIcon icon={faAward} size={25} />
              <Text style={styles.descriptionContent}>
                Certificate of completion
              </Text>
            </View>
            <View style={styles.separator} />
            <Text style={{fontSize: 18,color: COLORS.$black,fontWeight: 'bold'}}>What will I Learn?</Text>
            <Text style={styles.courseDescription}>
              {CourseOverView}
            </Text>
            <View style={styles.separator} />
            <View style={styles.skillsContainer}>
                <Text style={styles.titleText}>Skills You'll Gain</Text>
                {skills && skills.map((skill, index) => (
                  <View key={index} style={styles.skillItem}>
                    <FontAwesomeIcon icon={faDiamond} size={12} color={COLORS.$yellow} />
                    <Text style={styles.skillText}>{skill}</Text>
                  </View>
                ))}
                </View>

                <View style={styles.separator} />

                <Text style={styles.titleText}>Who Should Learn</Text>
                <View style={styles.learnContainer}>
                  {learn && learn.map((item, index) => (
                    <View key={index} style={styles.learnItem}>
                      <Text style={styles.learnItemText}>{item}</Text>
                    </View>
                  ))}
                </View>
          </View>
        )}
        {selectedTitle === 'Lessons' && (
          <>
            <View style={styles.videoContainer}>
              <WebView
                source={{uri: lessonVideo}}
                style={styles.webview}
                javaScriptEnabled={true}
                allowsFullscreenVideo={true}
              />
            </View>
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
                      review.gender === 'Male' ? image.userMen : image.userWomen
                    }
                    style={styles.userImage}
                  />
                  <View style={styles.reviewFlexContainer}>
                    <View>
                      <Text style={styles.reviewDates}>
                        {formatDate(review.reviewDate)}
                      </Text>
                      <Text style={styles.reviewUsername}>
                        {review.username}
                      </Text>
                    </View>
                    <View style={styles.starsContainer}>
                      {Array.from(
                        {length: parseInt(review.star)},
                        (_, index) => (
                          <FontAwesomeIcon
                            key={index}
                            icon={faStar}
                            size={20}
                            color={COLORS.$yellow}
                          />
                        ),
                      )}
                    </View>
                  </View>
                </View>
                <Text style={styles.reviewComments}>{review.comments}</Text>
                {index !== reviewDatas.length - 1 && (
                  <Text style={styles.lastLine}></Text>
                )}
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
    <View style={styles.contentRowViewInr}>
              <View>
                {isFree ? (
                  <Text style={styles.freeText}>Free</Text>
                ) : (
                  <View>
                    <Text style={styles.courseAmount}>{amount}</Text>
                    <Text style={styles.coursePreAmount}>{preamount}</Text>
                  </View>
                )}
              </View>
              <View>
                {isFree ? (
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Start Learning</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Buy Course</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
    </>
  );
};

export default Courseview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageLayout: {
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
    alignItems: 'center',
    gap: 10,
  },
  coursEnrollList: {
    fontSize: SIZES.sz_19_font,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  titleDescription: {
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
    color: 'black',
  },
  selectedTitle: {
    borderBottomColor: COLORS.$blue_shade_1,
    borderBottomWidth: 2,
    color: COLORS.$blue_shade_1,
    borderRadius: 10,
    fontWeight: 'bold',
  },
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
    backgroundColor: COLORS.$gray,
    opacity: 2,
    padding: 25
  },
  button: {
    backgroundColor: COLORS.$blue_shade_1,
    paddingVertical: 15,
    paddingHorizontal: '26%',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.$White,
    fontSize: SIZES.sz_20_font,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  contentContainer: {
    // marginBottom: 100
  },
  reviewContainer: {
    marginBottom: 20,
    // height: 100,
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
  starsContainer: {
    flexDirection: 'row',
  },
  reviewFlexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  ratingText: {
    fontSize: SIZES.sz_20_font,
    color: '#FFD700',
  },
  videoContainer: {
    width: '100%',
    height: 213,
    marginVertical: 20,
  },
  webview: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  freeText: {
    fontSize: 25,
    color: 'green',
  },
  separator: {
    height: 10,
    backgroundColor: 'red',
    marginHorizontal: -15,
    marginVertical: 10
    // paddingHorizontal: 20
  },
  titleText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  learnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  learnItem: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  learnItemText: {
    fontSize: 14,
    color: 'black',
  },
  skillsContainer: {
    marginTop: 10,
  },
  titleText: {
    fontSize: 18,
    color: COLORS.$black,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  skillItem: {
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center', // Vertically center the items
    marginBottom: 8, // Space between each skill item
  },
  skillText: {
    fontSize: 16, // Adjust text size
    color: COLORS.$black,
    marginLeft: 8, // Space between icon and text
  },
});
