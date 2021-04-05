import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import {DonorNavigatorParamList} from '../types';
import {StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'
//import CustomInput from '../../components/CustomInput';

type DonationNavigationProps = StackNavigationProp<DonorNavigatorParamList, 'DonorDashboard'>;

export default function ConfirmAddres() {

  const navigationHook = useNavigation<DonationNavigationProps>();

  function goDonorScreen(){
    navigationHook.navigate("DonorDashboard");
  }

  return (
    <View style={styles.container} >
      <Text style={styles.text} >Não deixe de pagar o boleto para a sua doação ser efetiva!</Text>

      <Button text="Baixar Boleto" onPress={() => {}} />

      <Button text="Voltar a tela inicial" onPress={goDonorScreen} />
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
    color:'#6A2565',
  }
});