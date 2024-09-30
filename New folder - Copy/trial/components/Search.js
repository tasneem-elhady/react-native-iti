import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import { MoviesContext } from "../contexts/MoviesContextProvider";

const Search = () => {
  const { getSearch } = useContext(MoviesContext);
  return (
    <TextInput
      right={<TextInput.Icon icon="magnify" />}
      style={styles.search}
      // underlineColor="transparent"
      placeholder="Search"
      underlineStyle={{ height: 0 }}
      onChangeText={(text) => {
        getSearch(text);
      }}
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  search: {
    borderRadius: 40,
    backgroundColor: "white",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
});

export default Search;
