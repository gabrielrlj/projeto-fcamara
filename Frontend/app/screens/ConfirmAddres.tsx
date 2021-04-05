import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import {DonorNavigatorParamList} from '../types';
import {StackNavigationProp } from '@react-navigation/stack';
//import { RouteProp } from '@react-navigation/core';
import {useNavigation } from '@react-navigation/native'

//import CustomInput from '../../components/CustomInput';


type DonationNavigationProps = StackNavigationProp<DonorNavigatorParamList, 'DonorDashboard'>;

export default function ConfirmAddres() {


  const navigationHook = useNavigation<DonationNavigationProps>();
  function goFinishDonation(){
      navigationHook.navigate('FinishDonation');
  }

  return (
    <View style={styles.container} >
      <Text style={styles.text} >Uma doação será entregue via transportadora</Text>
<Text style={styles.text} >Informe o endereço onde pegaremos sua encomenda</Text>
      {/* <CustomInput placeholder="CEP" />
      <CustomInput placeholder="Bairro" />
      <CustomInput placeholder="Rua" />
      <CustomInput placeholder="N�mero" /> */}

      <Button text="Avançar" onPress={goFinishDonation} />
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