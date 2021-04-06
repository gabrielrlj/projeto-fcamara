import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DefaultLogin from '../screens/authScreens/DefaultLogin';
import RegisterDonor from '../screens/authScreens/RegisterDonor';
import SponsorRegister from '../screens/authScreens/SponsorRegister';
import { AuthTabParamList } from '../types';


const AuthStack = createStackNavigator<AuthTabParamList>();

export default function AuthStackTab() {
  return (
    <AuthStack.Navigator initialRouteName="DefaultLogin" >
      <AuthStack.Screen
        name="DefaultLogin"
        component={DefaultLogin}
      />
      <AuthStack.Screen
        name="RegisterDonor"
        component={RegisterDonor}
      />
      <AuthStack.Screen
        name="SponsorRegister"
        component={SponsorRegister}
      />
    </AuthStack.Navigator>
  )
}