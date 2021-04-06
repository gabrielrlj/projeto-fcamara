import { RouteProp, useNavigation } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../components/Button';
import Student from '../components/Student';
import { UserContext } from '../contexts/UserContexts';
import { DonorDashboardParamList, RootStackParamList, DonorNavigatorParamList } from '../types';
import ConfirmationDonation from './ConfirmationDonation';
import ConfirmAddres from './ConfirmAddres';
import FinishDonation from './FinishDonation';
import Header from '../components/Header';
import HeaderBelow from '../components/HeaderBelow';
import SearchStudents from "../components/SearchStudents";
import DonationFinalized from './DonationFinalized';


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
            screenOptions={{
                headerStyle: {
                  backgroundColor: '#6A2565',
                  height: 80,
                  borderTopWidth:20,
                  borderTopColor:'#FFFF'
                },
                headerLeftContainerStyle: { marginTop: 20 },
                headerTintColor: '#FFFFFF',
                headerTitleStyle: {
                    color: '#FFF',
                    height: 50,
                    fontSize: 25,
                    fontFamily: 'roboto', 
                    textAlign:'center',
                    textAlignVertical:'center',
                    width:'100%',
                    // paddingTop:30,
                    // paddingLeft:-50,
                    marginLeft:-20,
                    marginTop:20
                },
              }}
        >
            <DonorStack.Screen
                name="DonorDashboard"
                component={DonorDashboard}
                options={{ header: () => null}}
            />
            <DonorStack.Screen
                name="ConfirmationDonation"
                component={ConfirmationDonation}
                options={{ title:'Lista Escolar'}}
            />
             <DonorStack.Screen
                name="ConfirmAddres"
                component={ConfirmAddres}
                options={{ title:'Finalizar Doação'}}
            />
             <DonorStack.Screen
                name="FinishDonation"
                component={FinishDonation}
                options={{ title:'Finalização Doação'}}
            />
            <DonorStack.Screen
                name="DonationFinalized"
                component={DonationFinalized}
                options={{ title:'Confirmação'}}
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
    
    // useEffect(() => {
    //     api.get('/doadores/depenpendes')
    //         .then(({data}) => {
    //             console.log(data);
    //             // quardar esse data numa variável
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         });
    // }, []);

    return (
      <View style={{flex: 1, overflow: 'visible', marginTop:25}}>
        <HeaderBelow/>
        <ScrollView style={styles.studentsContainer}>
            <Student />            
        </ScrollView>
      </View>
    );
  }

  const styles = StyleSheet.create({
      studentsContainer: {
          flexDirection: 'column',
          flex: 1
      }
  })
