import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';

const Search = () => {
    const [text, setText] = React.useState("");

  return (
    <TextInput
      style={styles.field}  
      label="Search"
      value={text}
      onChangeText={text => setText(text)}
    />
  );
}

const styles = StyleSheet.create({
    field:{
        backgroundColor:'white'
    }
})

export default Search;
