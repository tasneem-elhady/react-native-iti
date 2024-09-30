import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { MoviesContext } from "../contexts/MoviesContextProvider";

const KeyValuePair = ({ keyy, value }) => {
  console.log(keyy);
  const {favs}= useContext(MoviesContext);
  return (
    <View style={styles.Container}>
      <View >
        <Text style={styles.title}>{keyy}:</Text>
      </View>
      <View >
        <Text style={styles.desc}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    // color: "green",
    fontWeight:"600"
  },
  Container: {
    marginBottom:12,
  },
  desc: {
    color:"grey",
    fontWeight:"500"
  },
});

export default KeyValuePair;
