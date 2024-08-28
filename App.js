import 'react-native-gesture-handler';
import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigations';
import {LikedCoursesProvider} from './src/Components/LikedCoursesContext';

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
      </NavigationContainer>
    </LikedCoursesProvider>
  );
};

export default App;