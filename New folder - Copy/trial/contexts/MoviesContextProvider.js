import React, { createContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  addItemToFireBase,
  deleteAllItemsFromFireBase,
  deleteItemfromFireBase,
} from "../helpers/helperFunctions";
import { collection, getDocs, query } from "@firebase/firestore";
import { db } from "../helpers/fireBaseConfig";

export const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
  console.log("in context");
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState("");
  const [favs, setFavs] = useState([]);
  const [loadingFavs, setLoadingFavs] = useState(true);
  const getSearch = (search) => {
    console.log(search + " in context");
    setSearch(search);
  };
  const getId = (Id) => {
    console.log("id: " + Id);
    setMovie(movies.find((u) => u.id === Id));
  };
  const addToFavs = (movie) => {
    // if (!favs.includes(movie))
    console.log("adding");
    setFavs([...favs, movie]);
    addItemToFireBase(movie);
    // console.warn("add to favs");
  };
  const removeFromFavs = (movie) => {
    let filtered = favs.filter((m) => m.id !== movie.id);
    // if (!favs.includes(movie))
    deleteItemfromFireBase(movie);
    setFavs(filtered || []);
    console.warn(filtered);
  };
  const deleteAll = () => {
    deleteAllItemsFromFireBase(favs);
    setFavs([]);
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoadingFavs(true);
      try {
        const q = query(collection(db, "favouriteMovies"));
        const querySnapshot = await getDocs(q);
        const arr = [];
        querySnapshot.forEach((doc) => {
          arr.push(doc.data());
        });
        setFavs(arr);
      } catch (error) {
        console.error("Error fetching favs:", error);
      } finally {
        setLoadingFavs(false);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
    )
      .then((res) => res.json())
      .then((res) => setMovies(res.results));
  }, []);
  return (
    <MoviesContext.Provider
      value={{
        movies,
        favs,
        getId,
        getSearch,
        addToFavs,
        search,
        movie,
        removeFromFavs,
        loadingFavs,
        deleteAll,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

const styles = StyleSheet.create({});

export default MoviesContextProvider;
