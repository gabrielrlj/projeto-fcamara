import React from 'react'
import { StyleSheet, TextInputProps } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

interface CustomInputProps extends TextInputProps {}

export default function CustomInput({...rest}: CustomInputProps) {
  return (
    <TextInput {...rest} style={styles.text} />
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
  }
})