import {
  doc,
  addDoc,
  collection,
  deleteDoc,
  setDoc,
  getDocs,
} from "@firebase/firestore";
import React from "react";
import { StyleSheet, View } from "react-native";
// import { doc, addDoc, setDoc, collection } from "@firebase/firestore";

import { db } from "./fireBaseConfig";

export const getMovies = async () => {
  await fetch(
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
  )
    .then((res) => res.json())
    .then((res) => res.results);
};
export const addItemToFireBase = async (movie) => {
  try {
    await setDoc(doc(db, "favouriteMovies", String(movie.id)), movie);
    console.log("added successfully");
  } catch (error) {
    console.log(error);
  }
};
export const deleteItemfromFireBase = async (movie) => {
  try {
    await deleteDoc(doc(db, "favouriteMovies", String(movie.id)));
    console.log("removed successfully");
  } catch (error) {
    console.log(error);
  }
};
export const deleteAllItemsFromFireBase = async (favs) => {
  try {
    await favs.map((m) => deleteItemfromFireBase(m));
    console.log("removed all successfully");
  } catch (error) {
    console.log(error);
  }
};
