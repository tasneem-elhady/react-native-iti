import React from "react";
import { StyleSheet, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MoviesPage from "../screens/MoviesPage";
import Favourites from "../screens/Favourites";

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  console.log("indrawer");
  return (
    <Drawer.Navigator initialRouteName={routes.home}>
      <Drawer.Screen name={routes.home} component={MoviesPage} />
      <Drawer.Screen name={routes.fav} component={Favourites} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({});

export default DrawerNavigation;
