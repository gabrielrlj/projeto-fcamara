import React from 'react'
import { StyleSheet, Text, View } from "react-native";


export default function LoginScreen() {
  return (
    <View style={styles.container} >
      <Text style={styles.text} >Login</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
  }
})