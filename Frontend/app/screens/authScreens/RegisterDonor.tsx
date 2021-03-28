import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Text, TouchableOpacity, TextInput, Image} from 'react-native'
import {RouteProp} from '@react-navigation/native'
import {createStackNavigator,StackNavigationProp} from '@react-navigation/stack'
//import { useNavigation } from '@react-navigation/core';
import { RootStackDonor } from '../../types';



type RegisterDonorNavigationProps = StackNavigationProp<RootStackDonor, 'AuthDonor'>;
type RegisterDonorRouteProp = RouteProp<RootStackDonor, 'AuthDonor'>;

interface RegisterDonorProps {
  navigation: RegisterDonorNavigationProps;
  route: RegisterDonorRouteProp;
}

function RegisterDonor({ navigation, route }: RegisterDonorProps){


    // useEffect(() => {
    //     navigation.reset({
    //       index: 0,
    //       routes: [route],
    //     });
    //   }, []);

    return RegisterRouteDonor;

}

export default function RegisterRouteDonor(){

    return(
        <View style={styles.container}>
               <Text> Registro Doador</Text>
        </View>
    )
        }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        fontSize:40,
        fontWeight:'bold',
        backgroundColor: '#f8f8ff'
    },
    buttom:{
        marginTop:30,
        padding:10,
        backgroundColor:'gray',
        borderRadius:10,
        width:'90%',
    },
    buttomText:{
        fontSize:20,
        color:'#fff',
        textAlign:'center'
    },
    input:{
        marginTop:20,
        width:'90%',
        backgroundColor:'#EEE',
        height:40,
        borderWidth:1,
        borderColor:'#333',
        borderRadius:10,
        paddingLeft:10
    },
    image:{
        width:250,
        height:250,
        borderRadius:0
    }
})
    
