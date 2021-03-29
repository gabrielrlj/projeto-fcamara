import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../../types';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'

type AuthNavigationProps = StackNavigationProp<RootStackParamList, 'Auth'>;
type AuthRouteProp = RouteProp<RootStackParamList, 'Auth'>;


interface RegisterDonorProps {
    navigation: AuthNavigationProps;
    route: AuthRouteProp;
  }
  

export default function RegisterDonor({ navigation, route }: RegisterDonorProps) {

    // const é constante 
    // handleChange recebe e que recebe o valor setado de Email com o valor de e
    const handleChangeEmail = e => {
        setEmail(e);
      }
      const handleChangePassword = e => {
        setPassword(e);
      }
      const handleChangeConfirmPassword = e => {
        setConfirmPassword(e);
      }

      // hook - constante criada nome email e setEmail function que define valor de email. Usestate é o estado atual
      // state se inicia com null
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [confirmPassword, setConfirmPassword] = useState("");

      function goLogin(){
        navigation.navigate('Dashboard', {currentScreen: 'DefaultLogin'});
      }

        return (
            <View style={styles.container}>
                <TextInput placeholder='E-mail' style={styles.input}
                autoFocus={true} keyboardType='email-address'
                value={email}
                //toda vez que mudar o texto chama a função handleChangeEmail e muda o valor da variável com o valor digitado
                onChangeText={e => {
                    handleChangeEmail(e);
                }}>
                </TextInput>
                <TextInput placeholder='Senha' style={styles.input}
                autoFocus={true} secureTextEntry={true}
                value={password}
                onChangeText={e => {
                    handleChangePassword(e);
                }}>
                </TextInput>
                <TextInput placeholder='Confirme a senha' style={styles.input}
                autoFocus={true} secureTextEntry={true}
                value={confirmPassword}
                onChangeText={e => {
                    handleChangeConfirmPassword(e);
                }}>
                </TextInput>

                <TouchableOpacity onPress={goLogin} style={styles.buttom}>
                <Text style={styles.buttomText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 40,
      fontWeight: 'bold',
      backgroundColor: '#f8f8ff'
    },
    buttom: {
      marginTop: 30,
      padding: 10,
      backgroundColor: 'gray',
      borderRadius: 10,
      width: '90%',
    },
    buttomText: {
      fontSize: 20,
      color: '#fff',
      textAlign: 'center'
    },
    input: {
      marginTop: 20,
      width: '90%',
      backgroundColor: '#EEE',
      height: 40,
      borderWidth: 1,
      borderColor: '#333',
      borderRadius: 10,
      paddingLeft: 10
    },
    image: {
      width: 250,
      height: 250,
      borderRadius: 0
    },
  
  })