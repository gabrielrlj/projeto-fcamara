import React from 'react';

import Buttom from '../../components/Button';
import CustomInput from '../../components/CustomInput';
import CustomView from '../../components/CustomView';

export default function LoginScreen() {
  return (
    <CustomView >
      <CustomInput placeholder="Usuário" />
      <CustomInput placeholder="Senha" secureTextEntry={true} />

      <Buttom text="Entrar!" />
    </CustomView>
  )
}