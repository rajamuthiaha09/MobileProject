//used inline styles
//home page at last

import { StyleSheet, Text, View, ScrollView,Image} from 'react-native'
import React from 'react'
import image from '../../constants/image';
import { COLORS, SIZES } from '../../constants/themes';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { commonStyles } from '../../constants';

const resoure =[
    { image: image.popularResourse2, title: '500+ Articles', description: 'for comprehensive learning experience', bgcolor: '#3498db'},
    { image: image.popularResourse1, title: '100+ Ebooks', description: 'specially curated for your learning needs', bgcolor: '#7dcea0'},
    { image: image.popularResourse, title: '200+ Webinars', description: 'organised by top industry experts for your needs', bgcolor: '#f1948a'},

];
const ResoursePage = () => {
  return (
    <>
    <View style={[styles.divider]}/>
    <View style={styles.container}>
      <Text style={commonStyles.commonHeaderText}>Popular Resourse</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
        {resoure.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={[styles.itemContainerInr,{backgroundColor: item.bgcolor}]}>
            <Text style={styles.resourseTitle}>{item.title}</Text>
            <Text style={[{color: COLORS.$White, fontSize: SIZES.sz_12_font, paddingTop: SIZES.padding_6}]}>{item.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      {/* <TouchableOpacity>
        <Text>sjfhisfiji</Text>
      </TouchableOpacity> */}
      {/* <Button style={styles.buttonClick} color={'red'}
        title="View All Resourse"
        // onPress={() => Alert.alert('Simple Button pressed')}
      /> */}
    </View></>
  )
}

export default ResoursePage

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.margin_20,
  },
  image: {
    width: 250,
    height: 240,
    resizeMode: 'cover',
    borderRadius: 20,
    marginRight: SIZES.margin_20,
    position: 'relative',
  },
  itemContainerInr: {
    top: -97,
    width: 250,
    borderRadius: 20,
    padding: SIZES.padding_20
  },
  resourseTitle: {
    color: COLORS.$White,
    fontSize: SIZES.sz_17_font,
    fontWeight: 'bold',
  },
  buttonClick: {
    marginBottom: SIZES.margin_20
  },
  divider: {
    height: 10,
    backgroundColor: COLORS.$White,
    marginBottom: 15
  }
})