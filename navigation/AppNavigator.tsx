import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NewLogScreen from '../screens/NewLogScreen';
import ViewLogsScreen from '../screens/ViewLogsScreen';
import CoffeeLogScreen from '../screens/CoffeeLogScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenNavigationProp} from './type';

const Stack = createNativeStackNavigator<ScreenNavigationProp>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ViewLogsScreen"
          component={ViewLogsScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NewLogScreen"
          component={NewLogScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="CoffeeLogScreen"
          component={CoffeeLogScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
