import { StyleSheet, Text, View } from "react-native";
import MoviesContextProvider from "./contexts/MoviesContextProvider";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigation/StackNavigation";
import { getMovies } from "./helpers/helperFunctions";

export default function App() {
  // console.log("fetch: " + getMovies());
  console.log("start");
  return (
    <MoviesContextProvider>
      <NavigationContainer>
        <StackNavigation></StackNavigation>
      </NavigationContainer>
    </MoviesContextProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
