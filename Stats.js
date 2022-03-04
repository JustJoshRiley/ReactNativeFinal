import React from "react";
import { StyleSheet, View, Text } from 'react-native';

import {metalBands} from './metal.js';

function Stat() {
    let count = 0
    let fans = 0
    let countries = []
    let active = 0
    let split = 0
    let genres = []
    for(const band in metalBands){
        count += 1
        
        if(countries.includes(metalBands[band].origin) === false) {
            countries.push(metalBands[band].origin)
        }
        const arr = metalBands[band].style.split(",")
        for(const el in arr) {
            if(genres.includes(arr[el]) === false) {
                genres.push(arr[el])
            }
        }
        if(metalBands[band].split === '-') {
            active += 1
        } else {
            split += 1
        }
        fans += metalBands[band].fans
    }
    let formattedString = ""
    const stringFans = "" + (fans * 1000)
    let loopCount = 0
    for(let i = stringFans.length -1; i >= 0; i -= 1) {
        if (loopCount % 3 === 0 && loopCount != 0) {
            formattedString = ',' + formattedString
        }
        formattedString = stringFans[i] + formattedString
        loopCount += 1
    }
    return (
        <View style={styles.container} >
            <Text style={styles.heading} >Metal 🤘</Text>
            <Text style={styles.label} >Count: <Text style={styles.value}>{count}</Text></Text>
            <Text style={styles.label}>Fans: <Text style={styles.value}>{formattedString}</Text></Text>
            <Text style={styles.label}>Countries: <Text style={styles.value}>{countries.length}</Text></Text>
            <Text style={styles.label}>Active: <Text style={styles.value}>{active}</Text></Text>
            <Text style={styles.label}>Split: <Text style={styles.value}>{split}</Text></Text>
            <Text style={styles.label}>Styles: <Text style={styles.value}>{genres.length}</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    color: "white"
    },
    heading : {
        color: "#fff",
        fontSize: 30,
        marginBottom: 10,
        fontWeight: "bold"
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color:"white"
    },
    value: {
        fontSize: 18,
        color:"white",
        fontWeight: 'normal'
    }

});

export default Stat;