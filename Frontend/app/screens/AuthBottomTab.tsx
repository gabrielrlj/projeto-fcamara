import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import LoginScreen from './authScreens/Login';
import RegisterScreen from './authScreens/Register';

const BottomTab = createBottomTabNavigator();

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

export default function AuthScreen() {
  return (
    <BottomTab.Navigator
      initialRouteName="Login"
    >
      <BottomTab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color="#000" />,
        }}
      />
      <BottomTab.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color="#000" />,
        }}
      />
    </BottomTab.Navigator>
  )
}