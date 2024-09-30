import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import MovieCard from "./components/MovieCard";
import { useEffect, useState } from "react";
import MoviesPage from "./screens/MoviesPage";

export default function App() {
  return (
    <Text>hiiiiiiiiiiiiiiiiiiii</Text>
    // <MoviesContextProvider>
    //   {/* <NavigationContainer>
    //     <StackNavigation></StackNavigation>
    //   </NavigationContainer> */}
    // </MoviesContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#dedede",
  },
});
