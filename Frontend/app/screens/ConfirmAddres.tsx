import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import CustomInput from '../../components/CustomInput';

export default function ConfirmAddres() {

  return (
    <View style={styles.container} >
      <Text style={styles.text} >Uma doação será entregue via transportadora</Text>
<Text style={styles.text} >Informe o endereço onde pegaremos sua encomenda</Text>
      <CustomInput placeholder="CEP" />
      <CustomInput placeholder="Bairro" />
      <CustomInput placeholder="Rua" />
      <CustomInput placeholder="Número" />

      <Button text="Avançar" onPress={() => {}} />
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