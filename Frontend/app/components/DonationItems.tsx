import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function DonationItems() {
    return (

        <View style={styles.container}>
            <View style={{ flex: 1, backgroundColor: "#696969" }}>
                <View style={styles.containerText}>
                    <Text style={styles.textName}>Ana Clara Maciel</Text>
                    <Text style={styles.textSchool}>Escola Municipal Recanto</Text>
                </View>
            </View>
            <View style={{ flex: 2, backgroundColor: "#545454" }} >
                <View style={styles.containerText}>
                    <Text style={styles.textName}>Material Escolar</Text>
                </View>
            </View>
            <View style={{ flex: 0.006, backgroundColor: "#CDCDCD" }} />
            <View style={styles.containerButton} >
                <TouchableOpacity onPress={() => {}} style={styles.buttom}>
                    <Text style={styles.buttomText}>FINALIZAR DOAÇÃO</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    containerText: {
        alignItems: 'flex-start',
        padding: 40,
        fontSize: 90
    },
    textName: {
        fontSize: 20,
        color: 'white',
    },
    textSchool: {
        fontSize: 15,
        color: 'white'
    }, 
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#50c878',
        borderRadius: 10,
        width: '30%',
      },
      buttomText: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'center'
      },
      containerButton: {
        flex: 0.7, 
        backgroundColor: "#545454",
        alignItems: 'flex-end',
        padding:20
      }
});