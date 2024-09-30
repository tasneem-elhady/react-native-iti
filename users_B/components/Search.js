import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { UsersContext } from '../contexts/UsersContextProvider';

const Search = () => {
    
    const {getSearch} = useContext(UsersContext);
    return (
        <TextInput
        right={<TextInput.Icon icon="magnify" />}
        style={styles.search}
        // underlineColor="transparent"
        placeholder='Search'
        underlineStyle={{ height:0}}
        onChangeText={(text)=>{getSearch(text)}}
        ></TextInput>
    );
}

const styles = StyleSheet.create({
    search:{borderRadius:40,backgroundColor:'#dedede',borderTopRightRadius:40,borderTopLeftRadius:40}
})

export default Search;
