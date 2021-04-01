import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import Button from "./Button";

interface StudentProps {
  id: number;
  name: string;
  items: Array<String>
}

export default function Student() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text>Nome do Aluno</Text>
        <View style={styles.itemsList}>
          <Text>* Borracha</Text>
          <Text>* Lápis</Text>
          <Text>* Giz de Cera</Text>
        </View>
      </View>

      <Button text="Doar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 100,
    borderColor: "#ccc",
    borderWidth: 1, 
  },
  subContainer: {
    flexDirection: "column",
  },
  itemsList: {
    flex: 1,
    minHeight: 25,
    flexDirection: 'row',
    marginLeft: 15,
  }
});