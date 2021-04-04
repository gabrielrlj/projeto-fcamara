import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { DonorDashboardParamList } from '../types';
import {StackNavigationProp } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';

interface StudentProps {
  id: number;
  name: string;
  items: Array<String>
}

type DonorNavigationProps = StackNavigationProp<DonorDashboardParamList, 'ConfirmationDonation'>;



export default function Student() {
  const navigationHook = useNavigation<DonorNavigationProps>();


  const [listStudents, setListStudents] = useState([
    {name: 'Ana Clara Maciel', school:'Escola Municipal Recanto', id: 1,items : { item1 : 'Caderno' , item2 : 'mochila' } },
    {name: 'Breno Garcia', school:'Escola Estadual Vicentino', id: 2, items : { item1 : 'Estojo' , item2 : 'Caderno' }},
    {name: 'Daniela Abrantes', school:'Escola Estadual Solar', id: 3, items : { item1 : 'Caderno' , item2 : 'Mochila' }},
    {name: 'Evelin Santos', school:'Escola Estadual Eloy Pereira', id: 4, items : { item1 : 'Canetas' , item2 : 'Mochila'}},
    {name: 'Lucas Medeiros', school:'Escola Estadual Gaivota', id: 5, items : { item1 : 'Canetas' , item2 : 'Mochila'}},
    {name: 'Sofia Carneiro', school:'Escola Municipal Zinha Prates', id: 6, items : { item1 : 'Canetas' , item2 : 'Mochila'}},
    {name: 'Maria Eduarda', school:'Escola Estadual Clóvis Salgado', id: 7, items : { item1 : 'Canetas' , item2 : 'Mochila'}},
  ])


   
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [school, setSchool] = useState(null);
  
  function goDonation(){

    navigationHook.navigate('ConfirmationDonation');
  }

  return (
    <View style={styles.container}>
      <ScrollView>
          {listStudents.map(item => (

              <View style={styles.containerList} key={item.id}>

                  <Text style={styles.textName}>{item.name}</Text>
                      <View style={styles.containerButton}>
                          <Text style={styles.textSchool}>{item.school}</Text>


                          <TouchableOpacity onPress={goDonation} style={styles.buttom}>
                            <Text style={styles.buttomText}>DOAR</Text>
                          </TouchableOpacity>

                      </View>
              </View>
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    fontFamily: 'roboto',
    backgroundColor:'#F6F3EC'
  },
  containerList:{
    flex:1,
    flexDirection:'column',
    paddingTop:10,
    paddingHorizontal:17,
    justifyContent:'space-between',
    borderTopWidth:0.5,
    borderTopColor:'#DCDCDC'
  },
  containerButton: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:30   
  },
  itemsList: {
    flex: 1,
    minHeight: 25,
    flexDirection: 'row', 
    fontFamily: 'roboto',
  },
  buttom: {
    marginTop: 8,
    padding: 5,
    backgroundColor: '#0166FC',
    borderRadius: 2,
    width: 100,
    alignContent:'flex-end'
  },
  buttomText: {
    fontSize: 13,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'roboto',
  },
  textName:{
    fontWeight: 'bold',
    marginBottom:-10
  },
  textSchool: {
    color:'#969FAA',
    marginTop:18
  }
});