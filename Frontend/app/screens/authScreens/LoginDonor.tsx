import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'
import { RootStackDonor } from '../../types';
import RegisterDonor from './RegisterDonor';


type DonorNavigationProps = StackNavigationProp<RootStackDonor, 'AuthDonor'>;
type DonorRouteProp = RouteProp<RootStackDonor, 'AuthDonor'>;

interface LoginDonorProps {
    navigation: DonorNavigationProps;
    route: DonorRouteProp;
}

export default function LoginDonor({ navigation, route }: LoginDonorProps) {


    // useEffect(() => {
    //     navigation.reset({
    //       index: 0,
    //       routes: [route],
    //     });
    //   }, []);

    const Stack = createStackNavigator<RootStackDonor>()

    return (
        <Stack.Navigator initialRouteName={'LoginDonor'}>
            <Stack.Screen name="LoginDonor" component={AuthRouteDonor} options={{ header: () => null }} />
            <Stack.Screen name="RegisterDonor" component={RegisterDonor} options={{ header: () => null }} />
        </Stack.Navigator>
    )

    function RegisterDonorScreen() {
        return (
            navigation.navigate('RegisterDonor')
        )
    }


    function AuthRouteDonor() {
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

                <TouchableOpacity onPress={() => { }} style={styles.buttom}>
                    <Text style={styles.buttomText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={RegisterDonorScreen} style={styles.buttom}>
                    <Text style={styles.buttomText}>Cadastre-se como doador</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={styles.buttom}>
                    <Text style={styles.buttomText}>Cadastre-se como beneficiado</Text>
                </TouchableOpacity>
            </View>
        )
    }
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