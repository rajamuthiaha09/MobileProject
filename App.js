import 'react-native-gesture-handler';
import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigations';
import {LikedCoursesProvider} from './src/Components/LikedCoursesContext';
import Toast from 'react-native-toast-message';
import toastConfig from './src/Components/sharedComponents/ToasterMessage';

// const MyTheme = {
//   ...DefaultTheme,
//   color: {
//     ...DefaultTheme.colors,
//     background: COLORS.$White,
//   },
// };

const App = () => {
  return (
    // <NavigationContainer theme={MyTheme}>
    <LikedCoursesProvider>
      <NavigationContainer>
        <StackNavigation />
        <Toast config={toastConfig} />
      </NavigationContainer>
    </LikedCoursesProvider>
  );
};

export default App;