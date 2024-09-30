import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { UsersContext } from "../contexts/UsersContextProvider";
import { Avatar } from "react-native-paper";

const UserDetails = () => {
  const { user } = useContext(UsersContext);
  return (
    <View
      style={{
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: "white",
        borderRadius: 16,
        padding: 16,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Avatar.Text
          size={60}
          label={user.name
            .match(/(\b\S)?/g)
            .join("")
            .toUpperCase()}
          style={{ backgroundColor: "#dedede" }}
        />
        <Text>{user.name}</Text>
      </View>
      <View>
        <Text style={styles.label}>E-mail:</Text>
        <Text style={styles.value}>{user.email}</Text>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>{user.phone}</Text>
        <Text style={styles.label}>WebSite:</Text>
        <Text style={styles.value}>{user.website}</Text>
        <Text style={styles.label}>Company:</Text>
        <Text style={styles.value}>{user.company.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
  },
  value: {
    fontSize: 16,
    marginLeft: 8,
    marginBottom: 16,
  },
});

export default UserDetails;
