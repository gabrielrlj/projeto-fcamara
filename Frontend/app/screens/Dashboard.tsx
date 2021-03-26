import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { Link } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from "react-native";
import Button from '../components/Button';
import { DashboardParamList, RootStackParamList, SponsorDashboardParamList } from '../types';
import RegisterMaterials from './RegisterMaterials';

type DashboardNavigationProps = StackNavigationProp<RootStackParamList, 'Dashboard'>;
type DashboardRouteProp = RouteProp<RootStackParamList, 'Dashboard'>;

interface DashboardProps {
  navigation: DashboardNavigationProps;
  route: DashboardRouteProp;
}

const DashboardStack = createStackNavigator<DashboardParamList>();

export default function DashboardNavigator({ navigation, route }: DashboardProps) {
  const currentScreen = route.params?.currentScreen;

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

  // if the current screen is not passed return to Home screen

  return (
    <DashboardStack.Navigator
      initialRouteName={currentScreen || 'SponsorDashboard'}
    >
      <DashboardStack.Screen
        name="SponsorDashboard"
        component={SponsorDashboard}
        
      />
      <DashboardStack.Screen
        name="DonorDashboard"
        component={DonorDashboard}
      />
      <DashboardStack.Screen
        name="RegisterMaterials"
        component={RegisterMaterials}
      />
    </DashboardStack.Navigator>
  );
}

type SponsordNavigationProps = StackNavigationProp<DashboardParamList, 'SponsorDashboard'>;
type SponsordRouteProp = RouteProp<DashboardParamList, 'SponsorDashboard'>;

interface SponsorProps {
  navigation: SponsordNavigationProps;
  route: SponsordRouteProp;
}

function SponsorDashboard({ navigation }: SponsorProps ) {
  const navigationHook = useNavigation<DashboardNavigationProps>();

  function handleRegisterMaterialsButton() {
    navigation.navigate('RegisterMaterials');
  }

  function handleLogOutButton() {
    navigationHook.replace('Home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text} >Página inicial (Responsável)</Text>
      <Button onPress={handleRegisterMaterialsButton} text="Cadastrar materiais" />
      <Button onPress={handleLogOutButton} text="Sair" />
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