import { RouteProp } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList, DonorDashboardParamList} from '../types';
import DonorNavigator from './DonorScreen';

type DashboardNavigationProps = StackNavigationProp<RootStackParamList, 'DonorDashboard'>;
type DashboardRouteProp = RouteProp<RootStackParamList, 'DonorDashboard'>;

interface DashboardProps {
  navigation: DashboardNavigationProps;
  route: DashboardRouteProp;
}

const DashboardStack = createStackNavigator<DonorDashboardParamList>();

export default function DashboardNavigator({ navigation, route }: DashboardProps) {
  // const currentScreen = route.params?.currentScreen;

  // Limpa histórico navegação
  useEffect(() => {
    navigation.reset({
      index: 0,
      routes: [route],
    });
  }, []);

  return (
    <DashboardStack.Navigator
      initialRouteName={'DonorNavigator'} 
    >
      <DashboardStack.Screen
        name="DonorNavigator"
        component={DonorNavigator} 
      />
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