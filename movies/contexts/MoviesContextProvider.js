import React, { createContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import axios from "axios";

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  // const [id, setUser] = useState("");
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState("");

  const getSearch = (search) => {
    console.log(search + " in context");
    setSearch(search);
  };
  const getId = (Id) => {
    console.log(Id);
    setMovie(movies.find((u) => u.id === Id));
  };
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
      )
      .then((res) => setMovies(res.data.reults));
  }, []);
  console.log("providing: " + movies);
  return (
    <MoviesContext.Provider value={{ movies, getId, getSearch, search, movie }}>
      {children}
    </MoviesContext.Provider>
  );
};

const styles = StyleSheet.create({});

export default MoviesContextProvider;
