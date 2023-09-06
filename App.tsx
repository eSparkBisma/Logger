import {Appearance, useColorScheme} from 'react-native';
import React from 'react';
import {
  Appbar,
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  Button,
  Text,
} from 'react-native-paper';
import {lightTheme, darkTheme} from './theme/theme';
import AppNavigator from './navigation/AppNavigator';
import {enableScreens} from 'react-native-screens';

const App = () => {
  const colorScheme = useColorScheme();

  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
};

export default App;
