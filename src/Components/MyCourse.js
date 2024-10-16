import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CommonHeader} from './sharedComponents';
import {COLORS, SIZES} from '../constants';
import MapView, { Marker } from 'react-native-maps';

const MyCourse = () => {
  return (
    <SafeAreaView style={[{backgroundColor: COLORS.$White, flex: 1}]}>
      <CommonHeader
        showBackIcon={false} showHeader={true}
        sectionHeaderTitle="My Course"
        headerTitleStyle={[{color: COLORS.$White}]}
      />
      <View style={[{alignItems: 'center'}]}>
        <Image source={require('../assets/images/image.png')} style={styles.imageLayout}/>
        <Text style={styles.headerTitle}>No Course</Text>
        <Text style={styles.headerSubTitle}>Looks like you have enrolled for any course yet.</Text>
      </View>
      <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title={"My Marker"}
          description={"Some description"}
        />
      </MapView>
    </View>
    </SafeAreaView>
  );
};

export default MyCourse;

const styles = StyleSheet.create({
  headerTitle: {
    color: COLORS.$black,
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingTop: 10,
  },
  headerSubTitle: {
    color: COLORS.$black,
    fontSize: SIZES.sz_16_font,
    textAlign: 'center',
    paddingTop: 10,
  },
  imageLayout: {
    // paddingTop: 60,
    marginTop: 30,
    width: 190,
    height: 200,
    opacity: 1,
  },
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
