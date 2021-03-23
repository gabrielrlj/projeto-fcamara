import * as React from 'react';
import { StyleSheet } from 'react-native';

import InputText from '../components/Input';
import { Text, View } from '../components/Themed';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vamos doar hoje,</Text>
      <Text style={styles.title}>ou uma ajudinha é melhor?</Text>

      <InputText placeholder="Usuário" />
      <InputText placeholder="Senha" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
