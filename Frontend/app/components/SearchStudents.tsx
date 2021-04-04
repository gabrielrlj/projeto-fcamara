import React, { Component, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform, 
} from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function SearchStudents() {
    const [textSearch, setTextSearch] = useState("");

    const handleChangeSearch = (e: string) => {
        setTextSearch(e);
    }

    return (

    <View style={styles.container}>
        <Searchbar
        placeholder="Filtre sua doação"
        onChangeText={e => {
            handleChangeSearch(e);
         }}
        value={textSearch}
        onIconPress={() => {}}
        />
    </View> 
          
      
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        marginLeft:4,
        marginRight:4
    },
})

