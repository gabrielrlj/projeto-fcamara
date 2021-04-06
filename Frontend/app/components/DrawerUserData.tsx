import React from 'react'
import ConfirmationDonation from '../screens/ConfirmationDonation'
import {createDrawerNavigator} from '@react-navigation/drawer'
import { View, Text, StyleSheet } from 'react-native';
import DonorScreen from '../screens/DonorScreen'

const Drawer = createDrawerNavigator();

export default function DrawerUserData(){
    return(
        // <NavigationContainer>
            <Drawer.Navigator initialRouteName='Meus dados'>
                <Drawer.Screen name="Dados Cadastrais" component={DonorScreen} />
                {/* <Drawer.Screen name="Minhas doações" component={} /> */}
            </Drawer.Navigator>
        // </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    DrawerNavigator: {
       paddingVertical:20,
    }
});