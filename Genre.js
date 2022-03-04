import React from "react";
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import {metalBands} from './metal.js';

function Genre(props) {
    const {name} = props
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:350,
        height: 50,
        backgroundColor: 'transparent',
        borderTopColor: "grey",
        color:"white",
        justifyContent: "space-between",
        borderTopWidth: 2,
        padding: 2,
        display:"flex",
        justifyContent:'center',
        alignItems: "flex-start"
    },
    text:{
        color:"white",
        fontSize: 25,
        fontWeight: 'bold',
    }
});

export default Genre;