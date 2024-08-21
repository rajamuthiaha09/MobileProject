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
import Courseview from '../Components/Courseview';
import WishlistPage from '../Components/Tabs/WishlistPage';
import ProfileEditForm from '../Components/forms/ProfileEditForm';
import SupportScreen from '../Components/SupportScreen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faUserCircle,
  faBookOpen,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import MyCourse from '../Components/MyCourse';
import SearchCourseScreen from '../Components/SearchCourseScreen';

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
      <Stack.Screen name={'WishlistScreen'} component={WishlistPage} />
      <Stack.Screen name={'ProfileEditForm'} component={ProfileEditForm} />
      <Stack.Screen name={'HelpScreen'} component={SupportScreen} />
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
        name={'Homescreen'}
        component={Homescreen}
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={faHome}
              size={30}
              color={focused ? 'black' : 'gray'}
            />
          ),
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        }}
      />
      <Tab.Screen
        name={'SearchCourseScreen'}
        component={SearchCourseScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={faSearch}
              size={30}
              color={focused ? 'black' : 'gray'}
            />
          ),
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        }}
      />
      <Tab.Screen
        name={'MyCourse'}
        component={MyCourse}
        options={{
          title: 'My Course',
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={faBookOpen}
              size={30}
              color={focused ? 'black' : 'gray'}
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
          title: 'Profile',
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={faUserCircle}
              size={30}
              color={focused ? 'black' : 'gray'}
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
