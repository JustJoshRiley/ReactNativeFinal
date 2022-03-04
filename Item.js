import React from "react";
import { StyleSheet, View, Text } from 'react-native';

function Item(props) {
    const {name, fans, origin, formed, split} = props

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

    function isSplit() {
        if(split != '-') {
            return styles.split
        }
        return styles.notSplit
    }
    


    return (
        <View style={styles.container} >
            <View style={styles.row1} >
                <Text style={isSplit()}>{name}</Text>
                <Text style={styles.origin}>{origin}</Text>
            </View>
            <View style={styles.row1}>
                <Text style={styles.formed}>{formed}</Text>
                <Text style={styles.fans}>{formattedString}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    width:350,
    height: 60,
    backgroundColor: 'transparent',
    borderTopColor: "grey",
    color:"white",
    justifyContent: "space-between",
    borderTopWidth: 2,
    padding: 2,
    },
    row1: {
        display:"flex",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bandName : {
        fontSize: 18,
        fontWeight: "700"
    },
    origin : {
        fontSize: 18,
        color: "#999"
    },
    split : {
        textDecorationLine:"line-through",
        color: "#666",
        fontSize: 20,
        fontWeight: "700",
    },
    notSplit: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "700",
    },
    formed : {
        color:"white"
    },
    fans : {
        color: "white",
        fontSize:12,
    }
});

export default Item;