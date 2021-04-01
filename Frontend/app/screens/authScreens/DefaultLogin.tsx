import { StackNavigationProp } from '@react-navigation/stack'
import React, { useState, useContext } from 'react'
import { RouteProp, useNavigation } from '@react-navigation/native'
import { AuthTabParamList, RootStackParamList } from '../../types';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, Alert } from 'react-native'
// import IconLogin from '../../assets/images/elo-escolar-1.png'
import { Checkbox } from 'react-native-paper';
import { UserContext } from '../../contexts/UserContexts';

type RootNavigationProps = StackNavigationProp<RootStackParamList, 'AuthDefault'>;
type AuthNavigationProps = StackNavigationProp<AuthTabParamList, 'DefaultLogin'>;
type AuthRouteProp = RouteProp<AuthTabParamList, 'DefaultLogin'>;


interface LoginProps {
  navigation: AuthNavigationProps;
  route: AuthRouteProp;
}

export default function DefaultLogin({ navigation, route }: LoginProps) {
  const { login } = useContext(UserContext);
  const navigationHook = useNavigation<RootNavigationProps>();

  // hook - constante criada nome email e setEmail function que define valor de email. Usestate é o estado atual
  // state se inicia com null
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [checkedDonor, setCheckedDonor] = useState(false);
  const [checkedSponsor, setCheckedSponsor] = useState(false);

  function registerDonorScreen() {
    navigation.navigate('RegisterDonor');
  }

  async function handleLoginButtonClick() {
    
    //Verifica se marcou como usuário Doador ou responsavel pelo aluno
    if (checkedSponsor) {
      const hadSuccess = await login(email, password, 'sponsor');
      if (hadSuccess) {
        // navigationHook.navigate('Dashboard');
      }

    } else if (checkedDonor) {
      const hadSuccess = await login(email, password, 'donor');
      if (hadSuccess) {
        navigationHook.navigate('DonorDashboard');
      }
    } else {
      Alert.alert(
        "Atenção",
        "Por favor marque uma das opções de login\nSou Doador ou Beneficiado",
      );
      // alert('É preciso selecionar uma das opções: ');
    }
  }

  function handleSponsorRegister() {
    navigation.navigate('SponsorRegister');
  }

  // const é constante 
  // handleChange recebe e que recebe o valor setado de Email com o valor de e
  const handleChangeEmail = (e: string) => {
    setEmail(e);
  }
  const handleChangePassword = (e: string) => {
    setPassword(e);
  }

  return (
    <View style={styles.container}>
      {/* <Image source={IconLogin} style={styles.image} /> */}
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
      <View style={styles.checkBoxContainer}>
        <View style={styles.checkBox}>
          <Checkbox
            status={checkedDonor ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedDonor(!checkedDonor);
              setCheckedSponsor(false);
            }}
          />
          <Text style={styles.text}> Sou Doador!</Text>
        </View>
        <View style={styles.checkBox}>
          <Checkbox
            status={checkedSponsor ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedSponsor(!checkedSponsor);
              setCheckedDonor(false);
            }}
          />
          <Text style={styles.text}> Sou beneficiado!</Text>
        </View>
      </View>

      <TouchableOpacity onPress={handleLoginButtonClick} style={styles.buttom}>
        <Text style={styles.buttomText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={registerDonorScreen} style={styles.buttom}>
        <Text style={styles.buttomText}>Cadastre-se como doador</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSponsorRegister} style={styles.buttom}>
        <Text style={styles.buttomText}>Cadastre-se como beneficiado</Text>
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
    backgroundColor: '#f8f8ff',
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
  checkBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  checkBoxContainer: {
    width: '90%',
    alignItems: 'flex-start'
  },
  text: {
    padding: 8,
    paddingLeft: 3
  }
})