import { RouteProp } from '@react-navigation/core';
import { Link } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from "react-native";
import Button from '../components/Button';
import { DashboardParamList, RootStackParamList } from '../types';
import RegisterDonor from './authScreens/RegisterDonor';
import SponsorNavigator from './SponsorScreen';
import DonorNavigator from './DonorScreen';

type DashboardNavigationProps = StackNavigationProp<RootStackParamList, 'Dashboard'>;
type DashboardRouteProp = RouteProp<RootStackParamList, 'Dashboard'>;

interface DashboardProps {
  navigation: DashboardNavigationProps;
  route: DashboardRouteProp;
}

const DashboardStack = createStackNavigator<DashboardParamList>();

export default function DashboardNavigator({ navigation, route }: DashboardProps) {
  // const currentScreen = route.params?.currentScreen;

  // When entry into the page clean the navigation history
  useEffect(() => {
    navigation.reset({
      index: 0,
      routes: [route],
    });
  }, []);

  // const { isLogged, otherParams } = routes.params;
  // if (!isLogged) {
  // return null; // Return something or just redirect to 'Home maybe Login'
  // }

  return (
    <DashboardStack.Navigator
      initialRouteName={'DonorNavigator'} // Expect the user type to set the default dashboard
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