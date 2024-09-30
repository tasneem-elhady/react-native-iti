import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import Movies from "../components/Movies";
import { MoviesContext } from "../contexts/MoviesContextProvider";
import DeleteAll from "../components/deleteAll";

const FavouritesPage = () => {
  console.log("hi from favs");
  const {favs,getSearch} = useContext(MoviesContext);
  useEffect(()=>getSearch(""),[]);
  return (<>
    <Movies movies={favs} fav={true}></Movies>
    <DeleteAll></DeleteAll>
  </>
    
  );
};

const styles = StyleSheet.create({});

export default FavouritesPage;
