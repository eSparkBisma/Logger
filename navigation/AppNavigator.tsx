import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NewLogScreen from '../screens/NewLogScreen';
import ViewLogsScreen from '../screens/ViewLogsScreen';
import CoffeeLogScreen from '../screens/CoffeeLogScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Coffee Log"
          component={CoffeeLogScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="New Logs"
          component={NewLogScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Logs."
          component={ViewLogsScreen}
          options={{
            headerShown: false,
            // title: 'Logs.',
            // headerTitleAlign: 'center',
            // headerTitleStyle: {
            //   fontWeight: '900',
            //   fontSize: 40,
            // },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
