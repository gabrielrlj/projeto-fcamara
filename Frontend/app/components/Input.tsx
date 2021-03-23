import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Input } from './Themed';

interface InputTextProps {
  placeholder: string;
}

export default function InputText({ placeholder }: InputTextProps) {
  return (
    <Input
      placeholder={placeholder}
      style={styles.input}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    width: 275,
    height: 55,
    paddingLeft: 15,
    fontSize: 20,
    margin: 12,
  },
})