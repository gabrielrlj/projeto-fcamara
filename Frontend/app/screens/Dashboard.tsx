import { isLoaded } from 'expo-font';
import React, { useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from "react-native";
import Button from '../components/Button';

interface DashboardProps {
  navigation: any;
}

export default function Dashboard({ navigation }: DashboardProps) {
  useEffect(() => {
    navigation.addListener('beforeRemove', (e: any) => {
      e.preventDefault();
    });
  }, []);

  function handleLogoutButton() {
    // navigation.replace('Home');
    Alert.alert(
      'Alerta!',
      'Ainda não está configurado o botão desculpe-nos >_<',
      [
        { text: 'Okay, eu desculpo!', style: 'cancel', onPress: () => { } },
      ]
    )
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