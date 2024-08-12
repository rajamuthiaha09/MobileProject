import 'react-native-gesture-handler';
import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homescreen from './src/Components/Homescreen';
import Loginscreen from './src/Components/Loginscreen';
import Signupscreen from './src/Components/Signupscreen';
import Contentpage from './src/Components/Coursename';
import Coursedetails from './src/Components/Coursedetails';
import Coursename from './src/Components/Coursename';
import profileEditPage from './src/Components/ProfileEditPage';
import ProfileEditPage from './src/Components/ProfileEditPage';
import PrivacyPolicy from './src/Components/PrivacyPolicy';
import {Image} from 'react-native';
import StackNavigation from './src/navigations';

const MyTheme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.color,
    background: '#fff',
  }
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation/>
      {/* <Stack.Navigator screenOptions={{headerShown: false,}}>
          <Stack.Screen name={"Homescreen"} component={Homescreen} />
          <Stack.Screen name={"Loginscreen"} component={Loginscreen} />
          <Stack.Screen name={"Signupscreen"} component={Signupscreen} />
          <Stack.Screen name={"Coursename"} component={Coursename} />
          <Stack.Screen name={"Coursedetails"} component={Coursedetails} />
          <Stack.Screen name={"ProfileEditPage"} component={ProfileEditPage} />
          <Stack.Screen name={"PrivacyPolicy"} component={PrivacyPolicy} />
          <Stack.Screen name={"Home"} component={Tabnavigation} />
        </Stack.Navigator> */}
      {/* <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: { backgroundColor: 'white', height: 70, margin: 20, borderRadius:15},
          tabBarActiveTintColor: 'blue',
          // tabBarInactiveTintColor: '#e6ddcc',
          headerShown: false,
          tabBarLabelStyle: {fontSize: 20,padding:5},
        }}>
        <Tab.Screen
          name={'Home'}
          component={Homescreen}
          options={{
            title: 'Home',
            tabBarIcon: ({focused}) => (
              <Image
                source={require('./src/assets/images/home.png')}
                style={{height: 30, width: 30, tintColor: focused ? 'red':'green'}}
              />
            ),
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
          }}
        />
        <Tab.Screen name={'Signup'} component={Signupscreen} 
        options={{
          title: 'Signup',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('./src/assets/images/user.png')}
              style={{height: 30, width: 30}}
            />
          ),
        }}/>
      </Tab.Navigator> */}
    </NavigationContainer>
  );
};

//   const Tabnavigation = () => {
//     return(
// <Tab.Navigator initialRouteName="Home">
//         <Tab.Screen name={"Home"} component={Homescreen} options={{title: 'Home', tabBarIcon: ({focused})=>(<Image source={require('./src/assets/images/home.png')} style={{height: 30, width: 30}}/>),
//         }}
//         />
//         <Tab.Screen name={"Signup"} component={Signupscreen} />
//       </Tab.Navigator>
//     );
//   };

export default App;

//   const styles = StyleSheet.create({});
