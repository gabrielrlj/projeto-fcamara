import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import AuthBottomTab from './screens/AuthBottomTab';
import Dashboard from './screens/Dashboard';
import HomeScreen from './screens/HomeScreen';

const linkConfig = {
  screens: {
    Home: '',
    Auth: {
      path: 'auth',
      screens: {
        Login: 'login',
        Register: 'register',
      }
    },
    Dashboard: 'dashboard',
  }
};

const linking: LinkingOptions = {
  prefixes: ['/'],
  config: linkConfig,
}

const Stack = createStackNavigator();

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
