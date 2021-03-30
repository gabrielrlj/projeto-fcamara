import { RouteProp, useNavigation } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import { DonorDashboardParamList, RootStackParamList, DonorNavigatorParamList } from '../types';

type DashboardNavigationProps = StackNavigationProp<RootStackParamList, 'AuthDefault'>;
type DonorNavigationProps = StackNavigationProp<DonorNavigatorParamList, 'DonorDashboard'>;
type DonordRouteProp = RouteProp<DonorDashboardParamList, 'DonorNavigator'>;

interface DonorProps {
    navigation: DonorNavigationProps;
    route: DonordRouteProp;
}

const DonorStack = createStackNavigator<DonorNavigatorParamList>();

export default function DonorNavigator() {
    return (
        <DonorStack.Navigator
            initialRouteName="DonorDashboard"
        >
            <DonorStack.Screen
                name="DonorDashboard"
                component={DonorDashboard}
            />
        </DonorStack.Navigator>
    );
}


function DonorDashboard({ navigation }: DonorProps ) {
    const navigationHook = useNavigation<DashboardNavigationProps>();

    function handleLogOutButton() {
        // Logout logic then
        navigationHook.replace('AuthDefault');
    }

    return (
      <View>
        <Text>Página inicial (Doador)</Text>
        <Button text="Sair" onPress={handleLogOutButton} />
      </View>
    );
  }