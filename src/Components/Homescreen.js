import React from 'react';
import {Text, View, ScrollView, StyleSheet, Image} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import Coursename from './Coursename';

const Homescreen = () => {
  // const navigation = useNavigation();
  const categories = [
    {
      id: '1',
      title: 'Data Science & Business Analytics',
      icon: '',
      backgroundColor: '#A3D8F4',
    },
    {
      id: '2',
      title: 'Software Development',
      icon: '',
      backgroundColor: '#D1C4E9',
    },
    {
      id: '3',
      title: 'Cyber Security',
      icon: '',
      backgroundColor: '#A5D6A7',
    },
    {
      id: '4',
      title: 'Project Management',
      icon: '',
      backgroundColor: '#FFCDD2',
    },
    {
      id: '5',
      title: 'AI & Machine Learning',
      icon: '',
      backgroundColor: '#B39DDB',
    },
    {
      id: '6',
      title: 'Digital Marketing',
      icon: '',
      backgroundColor: '#FFE082',
    },
    {
      id: '7',
      title: 'Cloud Computing',
      icon: '',
      backgroundColor: '#80CBC4',
    },
    {
      id: '8',
      title: 'Big Data',
      icon: '',
      backgroundColor: '#FFAB91',
    },
    {
      id: '9',
      title: 'DevOps',
      icon: '',
      backgroundColor: '#CE93D8',
    },
    {
      id: '10',
      title: 'Quality Management',
      icon: '',
      backgroundColor: '#B0BEC5',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.categoriesContainer}>
        <Text style={styles.categoriesText}>Top Categories</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {categories.map((category) => (
        <View
          key={category.id}
          style={[styles.categoryContainer, { backgroundColor: category.backgroundColor }]}
        >
          <Text style={styles.categoryTitle}>{category.title}</Text>
          {/* <Image source={category.icon} style={styles.categoryImage} /> */}
        </View>
      ))}
    </ScrollView>
      </View>
      <Coursename limit={4}/>
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  categoriesContainer: {
    // backgroundColor: 'red',
    marginTop: 15,
    marginLeft: 10,
    marginBottom: 10,
  },
  categoriesText: {
    fontSize: 20,
    paddingBottom: 12
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    padding: 10,
    marginRight: 10,
    width: 200,
  },
  categoryImage: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
});
