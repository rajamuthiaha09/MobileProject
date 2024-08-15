import {createStackNavigator} from '@react-navigation/stack';
import IntroScreen from '../Components/Introscreen';
import Homescreen from '../Components/Homescreen';
import Loginscreen from '../Components/Loginscreen';
import Signupscreen from '../Components/Signupscreen';
import Coursename from '../Components/Coursename';
import Coursedetails from '../Components/Coursedetails';
import ProfileEditPage from '../Components/Tabs/ProfileEditPage';
import PrivacyPolicy from '../Components/PrivacyPolicy';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import Courseview from '../Components/Courseview';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'IntroScreen'} component={IntroScreen} />
      <Stack.Screen name={'Loginscreen'} component={Loginscreen} />
      <Stack.Screen name={'Signupscreen'} component={Signupscreen} />
      <Stack.Screen name={'Coursename'} component={Coursename} />
      <Stack.Screen name={'Coursedetails'} component={Coursedetails} />
      <Stack.Screen name={'Courseview'} component={Courseview} />
      <Stack.Screen name={'PrivacyPolicy'} component={PrivacyPolicy} />
      <Stack.Screen name={'Homescreen'} component={TabNavigation} />
    </Stack.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Homescreen"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'white',
          height: 70,
        },
        tabBarActiveTintColor: 'blue',
        headerShown: false,
        tabBarLabelStyle: {fontSize: 20, padding: 5},
      }}>
      <Tab.Screen
        name={'Coursename'}
        component={Coursename}
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/home.png')}
              style={{
                height: 30,
                width: 30,
                tintColor: focused ? 'red' : 'gray',
              }}
            />
          ),
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        }}
      />
      <Tab.Screen
        name={'ProfileEditPage'}
        component={ProfileEditPage}
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/wishlist.png')}
              style={{
                height: 30,
                width: 30,
                tintColor: focused ? 'red' : 'gray',
              }}
            />
          ),
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        }}
      />
      <Tab.Screen
        name={'Signup'}
        component={Signupscreen}
        options={{
          title: 'Signup',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/user.png')}
              style={{
                height: 30,
                width: 30,
                tintColor: focused ? 'red' : 'gray',
              }}
            />
          ),
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        }}
      />
    </Tab.Navigator>
  );
};

export default StackNavigation;
