import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
import {DonorNavigatorParamList} from '../types';
import {StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'
//import CustomInput from '../../components/CustomInput';
import HeaderFinishDonation from '../components/HeaderFinishDonation'
 
type DonationNavigationProps = StackNavigationProp<DonorNavigatorParamList, 'DonorDashboard'>;

export default function ConfirmAddres() {

  const navigationHook = useNavigation<DonationNavigationProps>();

  function goDonationFinalized(){
    navigationHook.navigate("DonationFinalized");
  }

  return (
    <View style={styles.container} >
      <HeaderFinishDonation/>
      <View style={styles.subContainer}>
       <Text style={styles.text} >Não deixe de pagar o boleto para a sua doação ser efetivada!</Text>

        <TouchableOpacity onPress={goDonationFinalized} style={styles.buttomBankSlip}>
          <Text style={styles.buttomTextBankSlip}>Baixar boleto</Text>
        </TouchableOpacity>


      </View>
        
      
        <TouchableOpacity onPress={goDonationFinalized} style={styles.buttomFinish}>
          <Text style={styles.buttomTextFinish}>Concluir doação</Text>
        </TouchableOpacity>
      


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width:'85%',
    marginTop:-30
  },
  text: {
    fontSize: 22,
    fontWeight:'bold',
    color:'#6A2565',
    fontFamily:'roboto',
    textAlign:'center',
  },
  buttomBankSlip: {
    marginTop: 35,
    padding: 10,
    backgroundColor: '#6A2565',
    borderRadius: 8,
    width: '60%',
    },
    buttomTextBankSlip: {
        fontSize: 25,
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'roboto'
    },
    containerButtonBankSlip: {
        backgroundColor: "#F6F3EC",
        alignItems: 'center',
        padding: 5
    },
    buttomFinish: {
      marginTop: 40,
      padding: 17,
      marginBottom:35,
      backgroundColor: '#0166FC',
      borderRadius: 8,
      width: '90%',
      },
      buttomTextFinish: {
          fontSize: 25,
          color: '#fff',
          textAlign: 'center',
          fontFamily: 'roboto'
      },
      containerButtonFinish: {
          backgroundColor: "#F6F3EC",
          alignItems: 'center',
          padding: 5
      }
});