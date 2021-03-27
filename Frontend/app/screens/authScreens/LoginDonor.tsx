import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Text, TouchableOpacity, TextInput, Image} from 'react-native'
import {RouteProp} from '@react-navigation/native'
import {createStackNavigator,StackNavigationProp} from '@react-navigation/stack'
//import { useNavigation } from '@react-navigation/core';
import IconLogin from '../../assets/images/iconLogin.png'
import { LoginDonorParamList,RootLoginDonor } from '../../types';



type LoginDonorNavigationProps = StackNavigationProp<RootLoginDonor, 'AuthLoginDonor'>;
type LoginDonorRouteProp = RouteProp<RootLoginDonor, 'AuthLoginDonor'>;

interface LoginDonorProps {
  navigation: LoginDonorNavigationProps;
  route: LoginDonorRouteProp;
}

export default function LoginDonor({ navigation, route }: LoginDonorProps){


    // useEffect(() => {
    //     navigation.reset({
    //       index: 0,
    //       routes: [route],
    //     });
    //   }, []);

    const Stack=createStackNavigator<LoginDonorParamList>()

    return(
        <Stack.Navigator>
            <Stack.Screen   name="LoginDonor" component={AuthRouteDonor} options={{header:()=>null}}/>    
        </Stack.Navigator>
    )

}

    function AuthRouteDonor(){
    // const é constante 
    // handleChange recebe e que recebe o valor setado de Email com o valor de e
    const handleChangeEmail = e => {
            setEmail(e);
        }
    const handleChangePassword = e => {
            setPassword(e);
    }
    // hook - constante criada nome email e setEmail function que define valor de email. Usestate é o estado atual
    // state se inicia com null
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <View style={styles.container}>
            <Image source={IconLogin} style={styles.image}/> 
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

            <TouchableOpacity onPress={() => {}} style={styles.buttom}> 
               <Text style={styles.buttomText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.buttom}> 
               <Text style={styles.buttomText}>Cadastre-se</Text>
            </TouchableOpacity>
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
        backgroundColor:'#4b0082',
        borderRadius:10
    },
    buttomText:{
        fontSize:20,
        color:'#fff'
    },
    input:{
        marginTop:20,
        width:'90%',
        backgroundColor:'#EEE',
        height:40,
        borderWidth:1,
        borderColor:'#333',
        borderRadius:10
    },
    image:{
        width:250,
        height:250,
        borderRadius:0
    }
})
    
