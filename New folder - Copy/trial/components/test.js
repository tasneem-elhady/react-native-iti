import React from 'react';
import { StyleSheet, View,Text,StatusBar } from 'react-native';

const Test = () => {
    return (
        <View style={styles.container}>
            <Text>Test!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Test;
