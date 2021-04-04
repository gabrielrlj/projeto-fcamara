import { RouteProp, useNavigation } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../components/Button';
import Student from '../components/Student';
import { UserContext } from '../contexts/UserContexts';
import { DonorDashboardParamList, RootStackParamList, DonorNavigatorParamList } from '../types';
import ConfirmationDonation from './ConfirmationDonation';
import Header from '../components/Header';
import HeaderBelow from '../components/HeaderBelow';
import SearchStudents from "../components/SearchStudents";


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
    const {userId} = useContext(UserContext)
    const { username } = useContext(UserContext);
    const navigationHook = useNavigation<LoginNavigationProps>();

    function handleLogOutButton() {
        navigationHook.replace('AuthDefault');
    }

    function handleConfirmationDonation() {
        navigation.navigate('ConfirmationDonation');
    }

    return (
      <View style={{flex: 1, overflow: 'visible'}}>
        {/* <Header/> */}
        <HeaderBelow/>

        {/* <Text>{username}</Text> */}
        <ScrollView style={styles.studentsContainer}>
            <Student />
            {/* <Student />
            <Student />
            <Student />
            <Student />
            <Student /> */}
        </ScrollView>
      </View>
    );
  }

  const styles = StyleSheet.create({
      studentsContainer: {
          flexDirection: 'column',
          flex: 1,
      }
  })
