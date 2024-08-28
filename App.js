import 'react-native-gesture-handler';
import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigations';
import { COLORS } from './src/constants/themes';

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
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  );
};

export default App;