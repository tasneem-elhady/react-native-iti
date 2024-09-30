import React from 'react';
import { StyleSheet, View,Text } from 'react-native';

const Emptylist = ({text}) => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:18, textAlign:"center"}}>{text}!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        borderRadius:40,
        paddingHorizontal:24,
        paddingVertical:40,
        marginTop:8,
        // marginBottom:400
    }
})

export default Emptylist;
