import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from "react-native";
import Button from '../components/Button';
import { RootStackParamList } from '../types';

type DashboardNavigationProps = StackNavigationProp<RootStackParamList, 'Dashboard'>;
type DashboardRouteProp = RouteProp<RootStackParamList, 'Dashboard'>;

interface DashboardProps {
  navigation: DashboardNavigationProps;
  route: DashboardRouteProp;
}

export default function Dashboard({ navigation, route }: DashboardProps) {
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
    <View style={styles.container} >
      <Text style={styles.text} >Página inicial</Text>
      <Button text="Sair :(" onPress={handleLogoutButton} />
    </View>
  );
  // }
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
})