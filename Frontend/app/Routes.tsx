import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { linking } from './navegating/RouteConfig';

import AuthBottomTab from './components/AuthBottomTab';
import DashboardNavigator from './screens/Dashboard';
import HomeScreen from './screens/HomeScreen';
import LoginDonor from './screens/authScreens/LoginDonor';


import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer linking={linking} >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Auth" component={AuthBottomTab} />
        <Stack.Screen name="AuthLoginDonor" component={LoginDonor} options={{header:()=>null}} />
        <Stack.Screen
          name="Dashboard"
          component={DashboardNavigator}
          options={{ header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
