import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from '../components/Header';
import {DonorNavigatorParamList} from '../types';
import {StackNavigationProp } from '@react-navigation/stack';
//import { RouteProp } from '@react-navigation/core';
import { RouteProp, useNavigation } from '@react-navigation/native'
import {RadioButton} from 'react-native-paper';


type DonationNavigationProps = StackNavigationProp<DonorNavigatorParamList, 'DonorDashboard'>;
type DonationRouteProp = RouteProp<DonorNavigatorParamList, 'DonorDashboard'>;

interface DonorDashboardProps {
  navigation: DonationNavigationProps;
  route: DonationRouteProp;
}

export default function DonationItems() {

    const [checkedNotebook, setCheckedNotebook] = useState(false);
    const [checkedBag, setCheckedBag] = useState(false);
    const [checkedBook, setCheckedBook] = useState(false);

    const navigationHook = useNavigation<DonationNavigationProps>();
    function finishDonation(){
        //alert("Doação Realizada");
        navigationHook.navigate('ConfirmAddres');
    }

    return (

        <View style={styles.container}>
            <View>
                <Header />
            </View>
            <View style={{ backgroundColor: "#F6F3EC" }} >
                <View style={styles.radioButtonContainer}>
                    <View style={styles.radioButton}>
                        <RadioButton
                         value="1"
                            status={checkedNotebook ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setCheckedNotebook(!checkedNotebook);
                            }}
                        />
                        <Text style={styles.textType}>Caderno</Text>
                    </View>
                    <View style={styles.radioButton}>
                        <RadioButton
                            value="2"
                            status={checkedBag ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setCheckedBag(!checkedBag);
                            }}
                        />
                        <Text style={styles.textType}>Mochila</Text>
                    </View>
                    <View style={styles.radioButton}>
                        <RadioButton
                            value="2"
                            status={checkedBook ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setCheckedBook(!checkedBag);
                            }}
                        />
                        <Text style={styles.textType}>Livro</Text>
                    </View>
                </View>
                <View style={styles.containerButton} >
                    <TouchableOpacity onPress={finishDonation} style={styles.buttom}>
                        <Text style={styles.buttomText}>Finalizar Doação</Text>
                    </TouchableOpacity>
                </View>
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
        marginTop: 200,
        padding: 10,
        backgroundColor: '#0166FC',
        borderRadius: 10,
        width: '100%',
    },
    buttomText: {
        fontSize: 25,
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'roboto'
    },
    containerButton: {
        backgroundColor: "#F6F3EC",
        alignItems: 'center',
        padding: 20
    },


    radioButton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        fontFamily: 'roboto'
      },
      radioButtonContainer: {
        width: '90%',
        alignItems: 'flex-start',
        paddingLeft:25,
        marginTop:90
      },
      textType: {
        padding: 8,
        paddingLeft: 3, 
        fontFamily: 'roboto',
        color:'#47525E',
        fontWeight:'bold',
        fontSize:16
      },
      text: {
        padding: 5,
        paddingLeft: 3, 
        fontFamily: 'roboto',
        color:'#969FAA',
        fontSize:15
      }
});