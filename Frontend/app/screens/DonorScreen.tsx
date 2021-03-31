import { RouteProp, useNavigation } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
import { DonorDashboardParamList, RootStackParamList, DonorNavigatorParamList } from '../types';
import ConfirmationDonation from './ConfirmationDonation';
import { UserContext } from '../contexts/UserContexts';

type LoginNavigationProps = StackNavigationProp<RootStackParamList, 'AuthDefault'>;
type DonorNavigationProps = StackNavigationProp<DonorDashboardParamList, 'DonorNavigator'>;
type DonordRouteProp = RouteProp<DonorDashboardParamList, 'DonorNavigator'>;

const DonorStack = createStackNavigator<DonorNavigatorParamList>();

interface DonorProps {
    navigation: DonorNavigationProps;
    route: DonordRouteProp;
}

export default function DonorNavigator() {
    return (
        <DonorStack.Navigator
            initialRouteName="DonorDashboard"
        >
            <DonorStack.Screen
                name="DonorDashboard"
                component={DonorDashboard}
            />
            <DonorStack.Screen
                name="ConfirmationDonation"
                component={ConfirmationDonation}
            />
        </DonorStack.Navigator>
    );
}

function DonorDashboard({ navigation }: DonorProps ) {
    const { username } = useContext(UserContext);
    const navigationHook = useNavigation<LoginNavigationProps>();

    function handleLogOutButton() {
        navigationHook.replace('AuthDefault');
    }

    function handleConfirmationDonation() {
        navigation.navigate('ConfirmationDonation');
    }

    return (
      <View>
        <Text>Página inicial ({username})</Text>     
        <Button text="Doar" onPress={handleConfirmationDonation}/>
        {/* <TouchableOpacity onPress={handleLogOutButton} style={styles.buttom}>
            <Text style={styles.buttomText}>Sair </Text>
        </TouchableOpacity> */}
      
      </View>
    );
  }

const styles = StyleSheet.create({
    buttom: {
    marginTop: 30,
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 10,
    width: '90%',
    },
    buttomText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center'
    }
})