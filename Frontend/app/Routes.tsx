import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AuthStackTab from './components/AuthStack';
import { linking } from './navegating/RouteConfig';
import DefaultLogin from './screens/authScreens/DefaultLogin';
import DashboardNavigator from './screens/Dashboard';
import DonorNavigator from './screens/DonorScreen';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer linking={linking} >
      <Stack.Navigator initialRouteName="AuthDefault">
        <Stack.Screen
          name="AuthDefault"
          component={AuthStackTab}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardNavigator}
          options={{ header: () => null}}
        />

        {/* aqui */}
        <Stack.Screen
          name="DonorDashboard"
          component={DonorNavigator}
          options={{ header: () => null}}
        />
        {/* //fim */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
