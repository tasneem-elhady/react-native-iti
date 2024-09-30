import React, { useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Avatar, IconButton } from "react-native-paper";
import { UsersContext } from "../contexts/UsersContextProvider";
import { useNavigation } from "@react-navigation/native";
import Routes from "../utils/routes";
const User = ({ user }) => {

  const { navigate } = useNavigation();
  const { getId } = useContext(UsersContext);
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("pressed");
        getId(user.id);
        navigate(Routes.user);
      }}
    >
      <View style={styles.user_card}>
        <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
          <Avatar.Icon
            size={50}
            icon="account"
            style={{ backgroundColor: "white" }}
          />
          <View>
            <Text style={{ fontSize: 20 }}>{user.name}</Text>
            <Text>{user.email}</Text>
          </View>
        </View>
        <IconButton
          icon={"heart-outline"}
          onPress={() => console.log("pressed")}
        ></IconButton>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  user_card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
    height: 100,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 20,
  },
});

export default User;
