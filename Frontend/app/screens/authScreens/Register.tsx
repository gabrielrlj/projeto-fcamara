import React from 'react'
import Buttom from '../../components/Button';

import CustomInput from '../../components/CustomInput';
import CustomView from '../../components/CustomView';


export default function RegisterScreen() {
  return (
    <CustomView >
      <CustomInput placeholder="Usuário" />
      <CustomInput placeholder="Usuário" />
      <CustomInput placeholder="Senha" secureTextEntry={true} />
      <CustomInput placeholder="Confirme a senha" secureTextEntry={true} />

      <Buttom text="Cadastrar :)" />
    </CustomView>
  );
}