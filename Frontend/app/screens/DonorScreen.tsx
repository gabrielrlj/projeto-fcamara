import { RouteProp, useNavigation } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React, { useContext } from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
=======
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
>>>>>>> 043ff0e0de881c95eb8a7b126b89c8c7721bc670
import Button from '../components/Button';
import Student from '../components/Student';
import { UserContext } from '../contexts/UserContexts';
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
<<<<<<< HEAD
    const navigationHook = useNavigation<DashboardNavigationProps>();
    const { username } = useContext(UserContext);
=======
    const { username } = useContext(UserContext);
    const navigationHook = useNavigation<LoginNavigationProps>();
>>>>>>> 043ff0e0de881c95eb8a7b126b89c8c7721bc670

    function handleLogOutButton() {
        navigationHook.replace('AuthDefault');
    }

    function handleConfirmationDonation() {
        navigation.navigate('ConfirmationDonation');
    }

    return (
<<<<<<< HEAD
      <View style={{flex: 1, overflow: 'visible'}}>
        <Text>Página inicial {username}</Text>
        <ScrollView style={styles.studentsContainer}>
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
        </ScrollView>
        <Button text="Sair" onPress={handleLogOutButton} />
=======
      <View>
        <Text>Página inicial ({username})</Text>     
        <Button text="Doar" onPress={handleConfirmationDonation}/>
        {/* <TouchableOpacity onPress={handleLogOutButton} style={styles.buttom}>
            <Text style={styles.buttomText}>Sair </Text>
        </TouchableOpacity> */}
      
>>>>>>> 043ff0e0de881c95eb8a7b126b89c8c7721bc670
      </View>
    );
  }

<<<<<<< HEAD
  const styles = StyleSheet.create({
      studentsContainer: {
          flexDirection: 'column',
          flex: 1,
      }
  })
=======
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
>>>>>>> 043ff0e0de881c95eb8a7b126b89c8c7721bc670
