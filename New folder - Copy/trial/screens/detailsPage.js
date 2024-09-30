import React, { useContext } from "react";
import { StyleSheet, View, Image, de, Dimensions } from "react-native";
import { FAB, Text } from "react-native-paper";
import { MoviesContext } from "../contexts/MoviesContextProvider";
import KeyValuePair from "../components/keyValuePair";
import { average } from "@firebase/firestore";
const deviceWidth = Dimensions.get("window").width;
const DetailsPage = () => {
  const { favs, movie, addToFavs, removeFromFavs } = useContext(MoviesContext);
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            gap: 16,
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <View style={{ height: 300 }}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
              }}
              borderRadius={20}
              width={180}
              height={300}
            />
          </View>
          <View>
            <KeyValuePair
              keyy={"Release Date"}
              value={movie.release_date}
            ></KeyValuePair>
            <KeyValuePair
              keyy={"Language"}
              value={movie.original_language}
            ></KeyValuePair>
            <KeyValuePair
              keyy={"Rate"}
              value={movie.vote_average + "/10"}
            ></KeyValuePair>
          </View>
        </View>

        <KeyValuePair keyy={"plot"} value={movie.overview}></KeyValuePair>
      </View>
      <FAB
        icon={favs.find((m) => m.id === movie.id) ? "heart" : "heart-outline"}
        color={favs.find((m) => m.id === movie.id) ? "red" : "grey"}
        onPress={() => {
          if (favs.find((m) => m.id === movie.id)) removeFromFavs(movie);
          else addToFavs(movie);
        }}
        // icon="heart-outline"
        // color="red"
        style={styles.fab}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginHorizontal: 16,
    borderRadius: 40,
    marginVertical: 8,
    padding: 16,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "white",
    color: "black",
  },
});

export default DetailsPage;
