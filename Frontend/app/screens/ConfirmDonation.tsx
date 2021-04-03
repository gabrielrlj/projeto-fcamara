import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import CustomInput from '../../components/CustomInput';

export default function ConfirmAddres() {

  return (
    <View style={styles.container} >
      <Text style={styles.text} >Não deixe de pagar o boleto para a sua doação ser efetiva!</Text>

      <Button text="Baixar Boleto" onPress={() => {}} />

      <Button text="Confirmar Doação" onPress={() => {}} />
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