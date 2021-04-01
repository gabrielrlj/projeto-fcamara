import { RouteProp, useNavigation } from '@react-navigation/core';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../components/Button';
import Student from '../components/Student';
import { UserContext } from '../contexts/UserContexts';
import { DonorDashboardParamList, RootStackParamList, DonorNavigatorParamList } from '../types';

type DashboardNavigationProps = StackNavigationProp<RootStackParamList, 'AuthDefault'>;
type DonorNavigationProps = StackNavigationProp<DonorNavigatorParamList, 'DonorDashboard'>;
type DonordRouteProp = RouteProp<DonorDashboardParamList, 'DonorNavigator'>;

interface DonorProps {
    navigation: DonorNavigationProps;
    route: DonordRouteProp;
}

const DonorStack = createStackNavigator<DonorNavigatorParamList>();

export default function DonorNavigator() {
    return (
        <DonorStack.Navigator
            initialRouteName="DonorDashboard"
        >
            <DonorStack.Screen
                name="DonorDashboard"
                component={DonorDashboard}
            />
        </DonorStack.Navigator>
    );
}


function DonorDashboard({ navigation }: DonorProps ) {
    const navigationHook = useNavigation<DashboardNavigationProps>();
    const { username } = useContext(UserContext);

    function handleLogOutButton() {
        // Logout logic then
        navigationHook.replace('AuthDefault');
    }

    return (
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
      </View>
    );
  }

  const styles = StyleSheet.create({
      studentsContainer: {
          flexDirection: 'column',
          flex: 1,
      }
  })