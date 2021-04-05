import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {DonorNavigatorParamList} from '../types';
import {HeaderTitle, StackNavigationProp } from '@react-navigation/stack';
//import { RouteProp } from '@react-navigation/core';
import {useNavigation } from '@react-navigation/native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import HeaderAdress from '../components/HeaderAdress';

//import CustomInput from '../../components/CustomInput';


type DonationNavigationProps = StackNavigationProp<DonorNavigatorParamList, 'DonorDashboard'>;

export default function ConfirmAddres() {


const navigationHook = useNavigation<DonationNavigationProps>();
function goFinishDonation(){
navigationHook.navigate('FinishDonation');
}

return (
<View style={styles.container} >
<HeaderAdress/>

<Text style={styles.text} >Sua doação será entregue via transportadora</Text>
<Text style={styles.text} >Informe o endereço onde pegaremos sua encomenda</Text>
<TextInput style={styles.input} placeholder="CEP" />
<TextInput style={styles.input} placeholder="Bairro" />
<TextInput style={styles.input} placeholder="Rua" />
<TextInput style={styles.input} placeholder="Número" />


<TouchableOpacity onPress={goFinishDonation} style={styles.buttom}>
<Text style={styles.buttomText}>Confirmar</Text>
</TouchableOpacity>

</View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: 40,
  backgroundColor: '#F6F3EC',
  

},
text: {
paddingTop: 1,

fontSize: 25,
color:'#6A2565',
textAlign:'center',
paddingLeft: 5,
fontWeight: 'bold',
},
buttom: {

marginTop: 25,
padding: 10,
backgroundColor: '#0166FC',
borderRadius: 10,
height:55,
width: 300,
},

buttomText: {
fontSize: 28,
color: '#fff',
textAlign: 'center',
fontFamily:'roboto'
}, 

input: {
marginTop: 10,
width: '90%',
backgroundColor: '#DAE1E8',
height: 50,
borderWidth: 1,
borderColor: '#333',
borderRadius: 10,
paddingLeft: 10
}

})