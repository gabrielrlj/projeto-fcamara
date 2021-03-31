import { RouteProp } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react';
import { Alert, StyleSheet } from "react-native";
import Button from '../components/Button';
import { DashboardParamList, RootStackParamList } from '../types';
import SponsorNavigator from './SponsorScreen';
import { UserContext } from '../contexts/UserContexts';

type DashboardNavigationProps = StackNavigationProp<RootStackParamList, 'Dashboard'>;
type DashboardRouteProp = RouteProp<RootStackParamList, 'Dashboard'>;

interface DashboardProps {
  navigation: DashboardNavigationProps;
  route: DashboardRouteProp;
}

const DashboardStack = createStackNavigator<DashboardParamList>();

export default function DashboardNavigator({ navigation, route }: DashboardProps) {
  const { isLogged, userType } = useContext(UserContext);
  // const currentScreen = route.params?.currentScreen;

  // When entry into the page clean the navigation history
  useEffect(() => {
    navigation.reset({
      index: 0,
      routes: [route],
    });
  }, []);

  // const { isLogged, otherParams } = routes.params;
  if (!isLogged) {
    Alert.alert(
      "Opss!",
      "Parece que você não pode está aqui hein :D\n\t\tQue tal logar antes hehe",
    )
    navigation.replace('AuthDefault') // Return something or just redirect to 'Home maybe Login'
  }

  return (
    <DashboardStack.Navigator
      initialRouteName={userType === 'sponsor' ? 'SponsorNavigator' : 'DonorNavigator'} // Expect the user type to set the default dashboard
    >
      <DashboardStack.Screen
        name="SponsorNavigator"
        component={SponsorNavigator}
      />
      {/* <DashboardStack.Screen
        name="DonorNavigator"
        component={DonorNavigator}
      /> */}
    </DashboardStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
  }
});