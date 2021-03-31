import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AuthStackTab from './components/AuthStack';
import { UserProvider } from './contexts/UserContexts';
import { linking } from './navegating/RouteConfig';
import DashboardNavigator from './screens/Dashboard';
import DonorNavigator from './screens/DonorScreen';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    
    <NavigationContainer linking={linking} >
        <UserProvider>
        <Stack.Navigator initialRouteName="AuthDefault">
          <Stack.Screen
            name="AuthDefault"
            component={AuthStackTab}
          />
          <Stack.Screen
            name="Dashboard"
            component={DashboardNavigator}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name="DonorDashboard"
            component={DonorNavigator}
            options={{ header: () => null}}
          />
        </Stack.Navigator>
    </UserProvider>
      </NavigationContainer>
      
    
  );
}
