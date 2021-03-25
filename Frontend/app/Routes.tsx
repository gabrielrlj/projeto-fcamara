import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { linking } from './navegating/RouteConfig';

import AuthBottomTab from './screens/AuthBottomTab';
import Dashboard from './screens/Dashboard';
import HomeScreen from './screens/HomeScreen';

import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer linking={linking} >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Auth" component={AuthBottomTab} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerLeft: () => null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
