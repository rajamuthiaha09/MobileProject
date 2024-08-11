import React from 'react';
import { Image, StyleSheet, Text, FlatList, View, }from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Coursename = () => {
  const navigation = useNavigation();
  const DATA = [
    { id: '1', src: require('../assets/images/course5.png'), style: 'imageClass1' },
    { id: '2', src: require('../assets/images/course1.png'), style: 'imageClass2' },
    { id: '3', src: require('../assets/images/course3.png'), style: 'imageClass1' },
    { id: '4', src: require('../assets/images/course6.png'), style: 'imageClass2' },
    { id: '5', src: require('../assets/images/course4.png'), style: 'imageClass1' },
    { id: '6', src: require('../assets/images/course2.png'), style: 'imageClass2' },
  ];
  
  const firstHalf = DATA.slice(0, 3);
  const secondHalf = DATA.slice(3);
  
  const renderItem = ({ item }) => (
    <Image source={item.src} style={styles[item.style]} />
  );

  
  return (
    <View style={styles.container}>
      <View style={styles.textcontainer}>
        <Text style={styles.textHeader}>Categories</Text>
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          data={firstHalf}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.imageContainer}
        />
        <FlatList
          data={secondHalf}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.imageContainer}
        />
      </View>
    </View>
  );


  // const transformedData = [
  //   { id: '1', images: DATA.slice(0, 3) },  // First column
  //   { id: '2', images: DATA.slice(3) },     // Second column
  // ];

  // const renderItem = ({ item }) => {
  //   return (
  //     <View style={styles.imageContainer}>
  //       <Image source={item.src} style={styles[item.style]} />
  //     </View>
  //   );
  // };

  // const renderColumn = ({ item }) => {
  //   return (
  //     <View style={styles.row}>
  //       <FlatList
  //         data={item.images}
  //         renderItem={renderItem}
  //         keyExtractor={image => image.id}
  //         numColumns={1}
  //         contentContainerStyle={{ flex: 1 }}
  //       />
  //     </View>
  //   );
  // };

  // return (
  //   <FlatList
  //     data={transformedData}
  //     renderItem={renderColumn}
  //     keyExtractor={item => item.id}
  //     horizontal
  //     showsHorizontalScrollIndicator={false}
  //   />
  // );
};

export default Coursename;

const styles = StyleSheet.create({
  imageClass1: {
    width: 225,
    height: 330,
    borderRadius: 15,
    marginBottom: 10,
  },
  imageClass2: {
    width: 225,
    height: 285,
    borderRadius: 15,
    marginBottom: 10,
  },
  container: {
    margin: 17,
  },
  textcontainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 25,
    fontWeight: 'light',
    color: 'gray',
  },
  flatListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    alignItems: 'center',
  },
});
