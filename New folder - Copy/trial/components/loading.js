import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;

const Loading = () => {
  return (
    <View>
      <View
        style={{
          marginTop: 150,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/2040698.png")}
          // borderRadius={20}
          resizeMode="center"
          //   backgroundColor="green"
          width={100}
          height={500}
        />
      </View>
      <Text style={{ fontSize: 20, textAlign: "center", color: "grey" }}>
        Loading Data .......
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 40,
    paddingHorizontal: 24,
    paddingVertical: 40,
    marginTop: 180,
    // marginBottom:400
  },
});

export default Loading;
