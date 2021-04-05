import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform, 
    Image
} from 'react-native';
import SearchStudents from './SearchStudents';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HeaderBelow() {
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Icon 
                name='bars'
                size={38}
                color='#FFF'
                />
                <Text style={styles.title}>Lista de Alunos</Text>
            </View>    
            <View>
                <SearchStudents/>    
            </View>         
        </View>
    
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 5,
        borderBottomWidth: 1,
        backgroundColor: '#6A2565',
        borderColor: '#6A2565',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:10,
        marginTop:5,
        marginStart:4
    },
    title: {
        color: '#FFF',
        height: 40,
        fontSize: 28,
        fontFamily: 'roboto',
        paddingLeft:37
    },
    image: {
        height: 20,
        width: 20
    }
}
)

