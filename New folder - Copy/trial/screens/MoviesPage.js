import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import Movies from "../components/Movies";
import { MoviesContext } from "../contexts/MoviesContextProvider";
import Loading from "../components/loading";

const MoviesPage = () => {
  console.log("in movies page");
  const {getSearch ,loadingFavs, movies } = useContext(MoviesContext);
  useEffect(()=>getSearch(""),[]);
  return loadingFavs ? <Loading></Loading> : <Movies movies={movies}></Movies>;
};

const styles = StyleSheet.create({});

export default MoviesPage;
