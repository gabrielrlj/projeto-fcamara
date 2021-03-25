import { isLoaded } from 'expo-font';
import React from 'react';
import { StyleSheet, Text, View } from "react-native";

export default function Dashboard() {
  // const { isLogged, otherParams } = routes.params;
  // if (!isLogged) {
    // return null; // Return something or just redirect to 'Home maybe Login'
  // } else {
    return (
      <View style={styles.container} >
        <Text style={styles.text} >Página inicial</Text>
      </View>
    );
  // }
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