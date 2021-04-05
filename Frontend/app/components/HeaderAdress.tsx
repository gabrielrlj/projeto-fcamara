import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform
} from 'react-native';

export default function HeaderAdress() {
    var titleHeader = "Confirmação de Endereço";
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Text style={styles.title}>{titleHeader}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 1,
        borderBottomWidth: 1,
        backgroundColor: '#6A2565',
        borderColor: '#6A2565',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        color: '#FFF',
        height: 50,
        fontSize: 25,
        paddingTop:5,
        fontFamily: 'roboto'
    },
}
)

