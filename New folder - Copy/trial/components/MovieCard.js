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
import routes from "../utils/routes";

const deviceWidth = Dimensions.get("window").width;

const MovieCard = ({ movie }) => {
  const { navigate } = useNavigation();
  const { removeFromFavs, addToFavs, getId, favs } = useContext(MoviesContext);
  // const [favorite, setFavourite] = useState(false);

  // console.log("movie card: "+movie.title+" : "+favorite);

  return (
    // <Text>m</Text>
    <TouchableOpacity
      onPress={() => {
        console.log("pressed");
        getId(movie.id);
        navigate(routes.details);
      }}
    >
      <View style={styles.root}>
        <View style={{ height: 480 }}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            }}
            borderRadius={20}
            width={deviceWidth - 32}
            height={480}
          />
        </View>
        <View style={styles.name_fav}>
          <Text style={styles.movieName}>{movie.title}</Text>
          <IconButton
            icon={
              favs.find((m) => m.id === movie.id) ? "heart" : "heart-outline"
            }
            iconColor={favs.find((m) => m.id === movie.id) ? "red" : "grey"}
            onPress={() => {
              if (!favs.find((m) => m.id === movie.id)) addToFavs(movie);
              else removeFromFavs(movie);
            }}
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
    height: 530,
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
