import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';

import Button from '../../components/Button';
import CustomInput from '../../components/CustomInput';
import CustomView from '../../components/CustomView';
import { RootStackParamList } from '../../types';

type AuthNavigationProps = StackNavigationProp<RootStackParamList, 'Auth'>;

export default function LoginScreen() {
  const navigation = useNavigation<AuthNavigationProps>();

  function handleLoginButtonClick() {
    // call API login...
    // if success then
    navigation.navigate('Dashboard', {currentScreen: 'SponsorDashboard'});
  }

  return (
    <CustomView >
      <CustomInput placeholder="Usuário" />
      <CustomInput placeholder="Senha" secureTextEntry={true} />

      <Button text="Entrar!" onPress={handleLoginButtonClick} />
    </CustomView>
  )
}