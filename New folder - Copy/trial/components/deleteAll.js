import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { FAB, IconButton } from "react-native-paper";
import { Alert } from "react-native";
import { deleteAllItemsFromFireBase } from "../helpers/helperFunctions";
import { MoviesContext } from "../contexts/MoviesContextProvider";
const DeleteAll = () => {
  const { favs, deleteAll } = useContext(MoviesContext);
  return (
    // <IconButton
    //   icon="trash-can-outline"
    //   onPress={() => console.log("delete all")}
    //   size={50}
    //   style={styles.button}
    // ></IconButton>
    <FAB
      icon="trash-can"
      color="black"
      style={styles.fab}
      onPress={() => {
        console.log("Pressed");
        Alert.alert(
          "Delete All",
          "Are you Sure you want to clear all your favourite movies",
          [
            {
              text: "OK",
              onPress: () => {
                console.log("OK Pressed");
                deleteAll();
              },
            },
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
          ]
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "white",
    color: "black",
  },
});

export default DeleteAll;
