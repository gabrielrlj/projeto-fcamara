import { useNavigation } from '@react-navigation/core';
import React from 'react'
import Buttom from '../../components/Button';

import CustomInput from '../../components/CustomInput';
import CustomView from '../../components/CustomView';

export default function RegisterScreen() {
  const navigation = useNavigation();

  function handleRegisterButtomClick() {
    // call API register...
    // if success then
    navigation.navigate('Login');
  }

  return (
    <CustomView >
      <CustomInput placeholder="Usuário" />
      <CustomInput placeholder="Usuário" />
      <CustomInput placeholder="Senha" secureTextEntry={true} />
      <CustomInput placeholder="Confirme a senha" secureTextEntry={true} />

      <Buttom text="Cadastrar :)" onPress={handleRegisterButtomClick} />
    </CustomView>
  );
}