import { Link } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container} >
      <Text style={styles.text} >Eae, que tal doar hoje?</Text>
      <Link to="/authDefault" >Sim, quero doar!</Link>
      
      <Text style={styles.text} >Ou vai querer uma ajudinha?</Text>
      <Link to="/auth" >Uma ajudinha é melhor hoje</Link>
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