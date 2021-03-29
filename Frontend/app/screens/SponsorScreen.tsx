import { RouteProp, useNavigation } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import { DashboardParamList, RootStackParamList, SponsorNavigatorParamList } from '../types';
import RegisterMaterials from './RegisterMaterials';

type DashboardNavigationProps = StackNavigationProp<RootStackParamList, 'AuthDefault'>;
type SponsordNavigationProps = StackNavigationProp<SponsorNavigatorParamList, 'SponsorDashboard'>;
type SponsordRouteProp = RouteProp<DashboardParamList, 'SponsorNavigator'>;

interface SponsorProps {
  navigation: SponsordNavigationProps;
  route: SponsordRouteProp;
}

const SponsorStack = createStackNavigator<SponsorNavigatorParamList>();

export default function SponsorNavigator() {
  return (
    <SponsorStack.Navigator
      initialRouteName="SponsorDashboard"
    >
      <SponsorStack.Screen
        name="SponsorDashboard"
        component={SponsorDashboard}
      />

      <SponsorStack.Screen
        name="RegisterMaterials"
        component={RegisterMaterials}
      />
    </SponsorStack.Navigator>
  );
}

function SponsorDashboard({ navigation }: SponsorProps ) {
  const navigationHook = useNavigation<DashboardNavigationProps>();

  function handleRegisterMaterialsButton() {
    navigation.navigate('RegisterMaterials');
  }

  function handleLogOutButton() {
    navigationHook.replace('AuthDefault');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text} >Página inicial (Responsável)</Text>
      <Button onPress={handleRegisterMaterialsButton} text="Cadastrar materiais" />
      <Button onPress={handleLogOutButton} text="Sair" />
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