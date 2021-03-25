import { RouteProp } from '@react-navigation/core';
import { Link } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from "react-native";
import Button from '../components/Button';
import { DashboardParamList, RootStackParamList, SponsorDashboardParamList } from '../types';

type DashboardNavigationProps = StackNavigationProp<RootStackParamList, 'Dashboard'>;
type DashboardRouteProp = RouteProp<RootStackParamList, 'Dashboard'>;

interface DashboardProps {
  navigation: DashboardNavigationProps;
  route: DashboardRouteProp;
}

const DashboardStack = createStackNavigator<DashboardParamList>();

export default function DashboardNavigator({ navigation, route }: DashboardProps) {
  // When entry into the page clean the navigation history
  useEffect(() => {
    navigation.reset({
      index: 0,
      routes: [route]
    })
  }, []);

  function handleLogoutButton() {
    navigation.replace('Home');
  }

  // const { isLogged, otherParams } = routes.params;
  // if (!isLogged) {
  // return null; // Return something or just redirect to 'Home maybe Login'
  // } else {
  return (
    <DashboardStack.Navigator
      initialRouteName="SponsorDashboard"
    >
      <DashboardStack.Screen
        name="SponsorDashboard"
        component={SponsorDashboard}
        options={{headerStyle: {
          height: 90,
        }}}
      />
      <DashboardStack.Screen
        name="DonorDashboard"
        component={DonorDashboard}
      />
    </DashboardStack.Navigator>
  );
  // }
}

function SponsorDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Página inicial (Responsável)</Text>
      <Link to="/" >Cadastrar materiais</Link>
    </View>
  );
}

function DonorDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Página inicial (Doador)</Text>
      <Link to="/" >Cadastrar materiais</Link>
    </View>
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