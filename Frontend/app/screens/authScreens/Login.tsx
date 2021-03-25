import { useNavigation } from '@react-navigation/core';
import React from 'react';

import Button from '../../components/Button';
import CustomInput from '../../components/CustomInput';
import CustomView from '../../components/CustomView';

export default function LoginScreen() {
  const navigation = useNavigation();

  function handleLoginButtonClick() {
    // call API login...
    // if success then
    navigation.navigate('Dashboard');
  }

  return (
    <CustomView >
      <CustomInput placeholder="Usuário" />
      <CustomInput placeholder="Senha" secureTextEntry={true} />

      <Button text="Entrar!" onPress={handleLoginButtonClick} />
    </CustomView>
  )
}