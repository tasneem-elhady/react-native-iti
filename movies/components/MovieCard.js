import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { IconButton } from "react-native-paper";
import { MoviesContext } from "../contexts/MoviesContextProvider";
import { useNavigation } from "@react-navigation/native";
const deviceWidth = Dimensions.get("window").width;

const { navigate } = useNavigation();
const { getId } = useContext(MoviesContext);

const MovieCard = ({ movie }) => {
  const [favorite, setFavourite] = useState();
  // useEffect(() => {
  //   setFavourite(fav);
  // });
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("pressed");
        getId(user.id);
        navigate(Routes.user);
      }}
    >
      <View style={styles.root}>
        <View style={{ height: 180 }}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            }}
            borderRadius={20}
            width={deviceWidth - 32}
            height={180}
          />
        </View>
        <View style={styles.name_fav}>
          <Text style={styles.movieName}>{movie.title}</Text>
          <IconButton
            icon={favorite ? "heart" : "heart-outline"}
            onPress={() => console.log("add to favourite")}
          ></IconButton>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    // marginHorizontal:16,
    marginVertical: 8,
    height: 240,
    paddingBottom: 16,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    borderRadius: 20,
    backgroundColor: "white",
  },
  movieName: {
    // color: "black",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  name_fav: {
    flexDirection: "row",
    width: deviceWidth - 64,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default MovieCard;
