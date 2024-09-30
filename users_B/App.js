import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import UsersContextProvider from "./contexts/UsersContextProvider";
import Users from "./components/Users";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigation/StackNavigation";
import BottomTabNavigation from "./navigation/BottomTabNavigation";

export default function App() {
  return (
    <UsersContextProvider>
      <NavigationContainer>
        {/* <BottomTabNavigation></BottomTabNavigation> */}
        <StackNavigation></StackNavigation>
      </NavigationContainer>
    </UsersContextProvider>
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
