import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './src/Components/Homescreen';
import Loginscreen from './src/Components/Loginscreen';
import Signupscreen from './src/Components/Signupscreen';
import Contentpage from './src/Components/Coursename';
import Coursedetails from './src/Components/Coursedetails';
import Coursename from './src/Components/Coursename';
import profileEditPage from './src/Components/ProfileEditPage';
import ProfileEditPage from './src/Components/ProfileEditPage';

const Stack = createStackNavigator();

const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false,}}>
          <Stack.Screen name={"Homescreen"} component={Homescreen} />
          <Stack.Screen name={"Loginscreen"} component={Loginscreen} />
          <Stack.Screen name={"Signupscreen"} component={Signupscreen} />
          <Stack.Screen name={"Coursename"} component={Coursename} />
          <Stack.Screen name={"Coursedetails"} component={Coursedetails} />
          <Stack.Screen name={"ProfileEditPage"} component={ProfileEditPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default App;
  
//   const styles = StyleSheet.create({});