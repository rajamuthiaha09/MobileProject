import 'react-native-gesture-handler';
import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigations';

const MyTheme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.color,
    background: '#fff',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <StackNavigation/>
    </NavigationContainer>
  );
};

export default App;