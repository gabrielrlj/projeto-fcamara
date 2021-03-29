import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import { SponsorNavigatorParamList } from '../types';

type RegisterMaterialsNavigator = StackNavigationProp<SponsorNavigatorParamList, 'RegisterMaterials'>;

export default function RegisterMaterials() {
  const navigation = useNavigation<RegisterMaterialsNavigator>();

  function handleCancelButton() {
    // Clean the inputs and data collected
    navigation.goBack();
  }

  return (
    <View style={styles.container} >
      <Text style={styles.text} >Página cadastrar materiais</Text>
      <Button text="Voltar" onPress={handleCancelButton} />
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