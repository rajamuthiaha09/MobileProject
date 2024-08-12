import {createStackNavigator} from '@react-navigation/stack';
import IntroScreen from '../Components/Introscreen';

const Stack = createStackNavigator();

const StackNavigation = () =>{
    return(
        <Stack.Navigator  screenOptions={{headerShown: false}}>
            <Stack.Screen  name={"IntroScreen"} component={IntroScreen}></Stack.Screen>
        </Stack.Navigator>
    );
};

export default StackNavigation;