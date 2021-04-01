import { RouteProp, useNavigation } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { DonorDashboardParamList, RootStackParamList, DonorNavigatorParamList } from '../types';
import { UserContext } from '../contexts/UserContexts';
import DonationItems from '../components/DonationItems';

type DashboardNavigationProps = StackNavigationProp<RootStackParamList, 'AuthDefault'>;
type DonorNavigationProps = StackNavigationProp<DonorNavigatorParamList, 'DonorDashboard'>;
type DonordRouteProp = RouteProp<DonorDashboardParamList, 'DonorNavigator'>;

interface DonorProps {
    navigation: DonorNavigationProps;
    route: DonordRouteProp;
}

export default function ConfirmationDonation({ navigation, route }: DonorProps) {

  const { username } = useContext(UserContext);
  const navigationHook = useNavigation<DashboardNavigationProps>();

  function handleLogOutButton() {
      navigationHook.replace('AuthDefault');
  }

    return (
       <DonationItems/>
    );
  }