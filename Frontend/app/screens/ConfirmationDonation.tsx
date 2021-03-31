import { RouteProp, useNavigation } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { DonorDashboardParamList, RootStackParamList, DonorNavigatorParamList } from '../types';

type DashboardNavigationProps = StackNavigationProp<RootStackParamList, 'AuthDefault'>;
type DonorNavigationProps = StackNavigationProp<DonorNavigatorParamList, 'DonorDashboard'>;
type DonordRouteProp = RouteProp<DonorDashboardParamList, 'DonorNavigator'>;

interface DonorProps {
    navigation: DonorNavigationProps;
    route: DonordRouteProp;
}

export default function ConfirmationDonation({ navigation, route }: DonorProps) {
    return (
      <View>
        <Text>Página Confirmação da doação</Text>     
      </View>
    );
  }