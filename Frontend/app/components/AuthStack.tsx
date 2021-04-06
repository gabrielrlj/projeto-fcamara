import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DefaultLogin from '../screens/authScreens/DefaultLogin';
import RegisterDonor from '../screens/authScreens/RegisterDonor';
import SponsorRegister from '../screens/authScreens/SponsorRegister';
import { AuthTabParamList } from '../types';


const AuthStack = createStackNavigator<AuthTabParamList>();

export default function AuthStackTab() {
  return (
    <AuthStack.Navigator initialRouteName="DefaultLogin" 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6A2565',
          height: 80,
          borderTopWidth:20,
          borderTopColor:'#FFFF'
        },
        headerLeftContainerStyle: { marginTop: 20 },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
            color: '#FFF',
            height: 50,
            fontSize: 25,
            fontFamily: 'roboto', 
            textAlign:'center',
            textAlignVertical:'center',
            width:'100%',
            marginLeft:-20,
            marginTop:20
        },
      }}
    >
      <AuthStack.Screen
        name="DefaultLogin"
        component={DefaultLogin}
        options={{ header: () => null }}
      />
      <AuthStack.Screen
        name="RegisterDonor"
        component={RegisterDonor}
        options={{ title:'Cadastro'}}
      />
      <AuthStack.Screen
        name="SponsorRegister"
        component={SponsorRegister}
      />
    </AuthStack.Navigator>
  )
}