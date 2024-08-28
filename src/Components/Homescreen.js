import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import Coursename from './Coursename';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faPeopleGroup,
  faBullhorn,
  faCircleCheck,
  faChevronRight,
  faTools,
  faChartBar,
  faCloud,
  faRobot,
  faLock,
  faCode,
  faDatabase,
  faAward,
} from '@fortawesome/free-solid-svg-icons';
import image from '../constants/image';
import {COLORS, SIZES} from '../constants/themes';
import { CommonHeader } from './sharedComponents';
import ResoursePage from './sharedComponents/ResoursePage';
import { commonStyles } from '../constants';

const Homescreen = () => {
  const categories = [
    {
      id: '1',
      title: 'Data Science & Business Analytics',
      icon: faDatabase,
      backgroundColor: 'rgba(163, 216, 244, 0.7)',
    },
    {
      id: '2',
      title: 'Software Development',
      icon: faCode,
      backgroundColor: 'rgba(209, 196, 233, 0.7)',
    },
    {
      id: '3',
      title: 'Cyber Security',
      icon: faLock,
      backgroundColor: 'rgba(165, 214, 167, 0.7)',
    },
    {
      id: '4',
      title: 'Project Management',
      icon: faPeopleGroup,
      backgroundColor: 'rgba(255, 205, 210, 0.7)',
    },
    {
      id: '5',
      title: 'AI & Machine Learning',
      icon: faRobot,
      backgroundColor: 'rgba(179, 157, 219, 0.7)',
    },
    {
      id: '6',
      title: 'Digital Marketing',
      icon: faBullhorn,
      backgroundColor: 'rgba(255, 224, 130, 0.7)',
    },
    {
      id: '7',
      title: 'Cloud Computing',
      icon: faCloud,
      backgroundColor: 'rgba(128, 203, 196, 0.7)',
    },
    {
      id: '8',
      title: 'Big Data',
      icon: faChartBar,
      backgroundColor: 'rgba(255, 171, 145, 0.7)',
    },
    {
      id: '9',
      title: 'DevOps',
      icon: faTools,
      backgroundColor: 'rgba(206, 147, 216, 0.7)',
    },
    {
      id: '10',
      title: 'Quality Management',
      icon: faCircleCheck,
      backgroundColor: 'rgba(176, 190, 197, 0.7)',
    },
  ];

  const programs = [
    {
      id: '1',
      title: 'Post Graduate Programs',
      description:
        "Learn from global experts and get certified by the world's leading universities…",
      image: image.certificateImage,
    },
    {
      id: '2',
      title: "Master's Programs",
      description:
        'Achieve your career goals with industry-recognized learning paths',
      image: image.certificateImage1,
    },
    {
      id: '3',
      title: 'Certification Courses',
      description:
        'Get certified by global certification bodies and deepen your expertise',
      image: image.certificateImage2,
    },
  ];

  const ProgramCard = ({title, description, image}) => {
    return (
      <View style={styles.card}>
        <Image source={image} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <View style={styles.headerOtr}>
            <Text style={styles.cardTitle}>{title}</Text>
            <TouchableOpacity style={styles.editIconContainer}>
              <FontAwesomeIcon
                icon={faChevronRight}
                size={13}
                color={COLORS.$White}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
      </View>
    );
  };

  const renderHeader = () => (
    <>
      <View style={styles.categoriesContainer}>
        <Text style={commonStyles.commonHeaderText}>Top Categories</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categories.map(category => (
            <View
              key={category.id}
              style={[
                styles.categoryContainer,
                {backgroundColor: category.backgroundColor},
              ]}>
              <Text style={styles.categoryTitle}>{category.title}</Text>
              <FontAwesomeIcon
                icon={category.icon}
                size={30}
                color={category.backgroundColor.replace('0.7', '1.0')}
              />
            </View>
          ))}
        </ScrollView>
      </View>
      <Coursename limit={4} isRedirected={true} />
      <View style={styles.otrcontainer}>
        <View style={styles.header}>
          <View style={styles.awardHeader}>
            <FontAwesomeIcon icon={faAward} size={25} color="#FFD700" />
            <Text style={commonStyles.commonHeaderText}>Get Certified Get Ahead</Text>
          </View>
          <Text style={styles.subHeaderText}>
            Fast-track your career with World's #1 Online Bootcamp
          </Text>
        </View>
      </View>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader showProfileHeader={true} showHeader={false}></CommonHeader>
      <FlatList
        data={programs}
        renderItem={({item}) => (
          <ProgramCard
            title={item.title}
            description={item.description}
            image={item.image}
          />
        )}
        keyExtractor={item => item.id}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<ResoursePage></ResoursePage>}
      />
    </SafeAreaView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  categoriesContainer: {
    marginTop: 15,
    marginLeft: 20,
    marginBottom: 19,
  },
  categoryContainer: {
    ...commonStyles.flexContainer,
    borderRadius: 12,
    paddingVertical: 13,
    paddingHorizontal: 15,
    marginRight: 12,
    width: 210,
  },
  categoryTitle: {
    fontSize: 17,
    color: '#333',
    width: '85%',
  },
  // ---------------------------------------------------------------------
  otrcontainer: {
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#555',
  },
  card: {
    borderRadius: 10,
    marginTop: -20,
    marginHorizontal: 20,
  },
  cardImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 20,
    position: 'relative',
  },
  cardContent: {
    padding: 15,
    backgroundColor: '#FFF',
    width: '88%',
    marginHorizontal: 28,
    alignItems: 'center',
    borderRadius: 15,
    top: -50,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    alignItems: 'center',
    color: '#777',
    marginBottom: 15,
  },
  learnMoreButton: {
    alignSelf: 'flex-end',
  },
  learnMoreText: {
    color: '#007BFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  editIconContainer: {
    right: -65,
    top: -5,
    backgroundColor: '#007BFF',
    borderRadius: 25,
    padding: 5,
  },
  headerOtr: {
    ...commonStyles.flexContainer,
  },
  awardHeader: {
    flexDirection: 'row',
    gap: 5
  },
});
