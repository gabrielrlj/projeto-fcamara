import { RouteProp, useNavigation } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import { RootStackParamList, SponsorNavigatorParamList } from '../types';
import RegisterMaterials from './RegisterMaterials';

type DashboardNavigationProps = StackNavigationProp<RootStackParamList, 'AuthDefault'>;

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
      <SponsorStack.Screen
        name="StudentRegister"
        component={StudentRegister}
      />
      <SponsorStack.Screen
        name="StudentData"
        component={StudentData}
      />
    </SponsorStack.Navigator>
  );
}

type StudentDataNavigationProps = StackNavigationProp<SponsorNavigatorParamList, 'StudentData'>
type StudentDataRouteProp = RouteProp<SponsorNavigatorParamList, 'StudentData'>;

interface StudentDataProps {
  navigation: StudentDataNavigationProps;
  route: StudentDataRouteProp;
}

function StudentData({ navigation }: StudentDataProps) {
  function handleCancelButton() {
    // Clear all data and inputs, them
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text} >Listar Estudantes (Responsável)</Text>
      {/* <Button onPress={} text="Cadastrar materiais" /> */}
      <Button onPress={handleCancelButton} text="Voltar" />
    </View>
  );
}

type StudentRegisterNavigationProps = StackNavigationProp<SponsorNavigatorParamList, 'StudentRegister'>
type StudentRegisterRouteProp = RouteProp<SponsorNavigatorParamList, 'StudentRegister'>;

interface StudentRegisterProps {
  navigation: StudentRegisterNavigationProps;
  route: StudentRegisterRouteProp;
}

function StudentRegister({ navigation }: StudentRegisterProps) {
  function handleCancelButton() {
    // Clear all data and inputs, them
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text} >Cadastrar Estudante</Text>
      {/* <Button onPress={} text="Cadastrar materiais" /> */}
      <Button onPress={handleCancelButton} text="Cancelar" />
    </View>
  );
}

type SponsordNavigationProps = StackNavigationProp<SponsorNavigatorParamList, 'SponsorDashboard'>;
type SponsordRouteProp = RouteProp<SponsorNavigatorParamList, 'SponsorDashboard'>;

interface SponsorProps {
  navigation: SponsordNavigationProps;
  route: SponsordRouteProp;
}

function SponsorDashboard({ navigation }: SponsorProps) {
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