import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import Button from '../../components/Button';

import CustomInput from '../../components/CustomInput';
import CustomView from '../../components/CustomView';
import { AuthTabParamList } from '../../types';

type RegisterNavigationProps = StackNavigationProp<AuthTabParamList, 'Register'>;

export default function RegisterScreen() {
  const navigation = useNavigation<RegisterNavigationProps>();

  function handleRegisterButtonClick() {
    // call API register...
    // if success then
    navigation.navigate('Login');
  }

  return (
    <CustomView >
      <CustomInput placeholder="Usuário" />
      <CustomInput placeholder="Email" />
      <CustomInput placeholder="Senha" secureTextEntry={true} />
      <CustomInput placeholder="Confirme a senha" secureTextEntry={true} />

      <Button text="Cadastrar :)" onPress={handleRegisterButtonClick} />
    </CustomView>
  );
}