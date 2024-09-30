import React from 'react';
import { StyleSheet, View ,Text } from 'react-native';

const Box = ({colorName, hexCode}) => {
    return (
        <View style={[styles.box,{backgroundColor:hexCode}]}>
        <Text style={styles.text}> {colorName} {hexCode}</Text>
       </View>
    );
}

const styles = StyleSheet.create({
    box: {
        marginBottom: 12,
        borderRadius: 4,
      },
      text: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        padding: 10,
        textAlign: "center",
      },
})

export default Box;
