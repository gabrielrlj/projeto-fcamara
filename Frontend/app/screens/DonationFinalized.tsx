import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
import {DonorNavigatorParamList} from '../types';
import {StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'
//import CustomInput from '../../components/CustomInput';
import HeaderDonationFinalized from '../components/HeaderDonationFinalized';

type DonationNavigationProps = StackNavigationProp<DonorNavigatorParamList, 'DonorDashboard'>;

export default function ConfirmAddres() {

  const navigationHook = useNavigation<DonationNavigationProps>();

  function goHome(){
    navigationHook.navigate("DonorDashboard");
  }

  return (
    <View style={styles.container} >
        {/* <HeaderDonationFinalized/> */}
        <View style={styles.containerText} >
        <Text style={styles.textCongratulations} >Parabéns!</Text>

      
            <Text style={styles.textDonationRegister} >Sua doação foi registrada com sucesso</Text>
        </View>

        {/* <View style={styles.containerButton} > */}
            <TouchableOpacity onPress={goHome} style={styles.buttom}>
                <Text style={styles.buttomText}>Fazer outra doação</Text>
            </TouchableOpacity>
         {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerText: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:-50,
    width:'80%'
  },
  textCongratulations: {
    fontSize: 45,
    fontWeight: '700',
    color:'#6A2565',
    textAlign:'center',
    paddingTop:120, 
    fontFamily:'roboto'
  },
  textDonationRegister: {
    fontSize: 25,
    fontWeight: 'bold',
    color:'#6A2565',
    textAlign:'center',
    paddingTop:35,
    alignItems:'center',
    fontFamily:'roboto'
  },
  buttom: {
    marginTop: 120,
    marginBottom:35,
    padding: 20,
    backgroundColor: '#0166FC',
    borderRadius: 10,
    width:'90%'
    },
    buttomText: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'roboto'
    }
});