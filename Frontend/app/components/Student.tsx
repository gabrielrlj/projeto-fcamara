import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, StyleSheet } from "react-native";
import { DonorDashboardParamList } from '../types';
import Button from "./Button";
import {StackNavigationProp } from '@react-navigation/stack';

interface StudentProps {
  id: number;
  name: string;
  items: Array<String>
}
type DonorNavigationProps = StackNavigationProp<DonorDashboardParamList, 'ConfirmationDonation'>;

export default function Student() {
  const navigationHook = useNavigation<DonorNavigationProps>();
  
  function goDonation(){
    navigationHook.navigate('ConfirmationDonation');
  }

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text>Nome do Aluno</Text>
        <View style={styles.itemsList}>
          <Text>* Borracha</Text>
          <Text>* Lápis</Text>
          <Text>* Giz de Cera</Text>
        </View>
      </View>

      <Button text="Doar" onPress={goDonation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 100,
    borderColor: "#ccc",
    borderWidth: 1, 
  },
  subContainer: {
    flexDirection: "column",
  },
  itemsList: {
    flex: 1,
    minHeight: 25,
    flexDirection: 'row',
    marginLeft: 15,
  }
});