import React, { useContext } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import MovieCard from "./MovieCard";
import { MoviesContext } from "../contexts/MoviesContextProvider";
import Search from "./Search";
import { Header } from "@react-navigation/stack";
import { IconButton } from "react-native-paper";
import DeleteAll from "./deleteAll";
import Emptylist from "./emptylist";
const Movies = ({ movies, fav }) => {
  const { search } = useContext(MoviesContext);

  let filteredArr = movies;
  if (search.length > 0) {
    console.log(search);
    filteredArr = movies.filter((u) =>
      u.title.toLowerCase().includes(search.toLowerCase())
    );
  }
  // console.warn("in movies: " + filteredArr);
  return (
    <FlatList
      style={styles.container}
      data={filteredArr}
      ListHeaderComponent={<Search></Search>}
      stickyHeaderIndices={[0]}
      renderItem={({ item }) => <MovieCard movie={item}></MovieCard>}
      ListEmptyComponent={
        fav ? (
          <Emptylist
            text={"you haven't addad movies to favourites yet"}
          ></Emptylist>
        ) : (
          <Emptylist text={"no Results found"}></Emptylist>
        )
      }
      ListFooterComponent={<View style={{ height: 30 }}></View>}
    ></FlatList>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 16,
    backgroundColor: "#dedede",
  },
});
export default Movies;
