import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';

export default function RegisterMaterials() {
  const navigation = useNavigation();

  function handleCancelButton() {
    // Clean the inputs and data collected
    navigation.goBack();
  }

  return (
    <View style={styles.container} >
      <Text style={styles.text} >Cadastrar materiais</Text>
      <Button text="Cancelar" onPress={handleCancelButton} />
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