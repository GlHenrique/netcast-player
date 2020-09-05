import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import Routes from './src/routes';
import theme from './src/theme';

const App = () => (
  <>
    <StatusBar
      barStyle="light-content"
      backgroundColor={theme.colors.primary}
    />
    <Routes />
  </>
);

export default App;
