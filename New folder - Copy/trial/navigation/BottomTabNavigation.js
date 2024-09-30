import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Routes from "../utils/routes";
import { Icon } from "react-native-paper";
import routes from "../utils/routes";
import Test from "../components/test";
import MoviesPage from "../screens/MoviesPage";
import FavouritesPage from "../screens/FavouritesPage";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  // console.log("in tab navigator");
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // tabBarStyle: { position: "absolute" },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === routes.home) {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === routes.fav) {
            iconName = focused ? "heart" : "heart-outline";
          }

          // You can return any component that you like here!
          return <Icon source={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name={Routes.home}
        component={MoviesPage}
        options={{
          header: () => null,
          unmountOnBlur: true,
          // (props) => (
          //   <View style={styles.header}>
          //     {<Text style={{ fontSize: 30 }}>Movies</Text>}
          //   </View>
          // ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name={routes.fav}
        component={FavouritesPage}
        options={{
          header: () => null,
          unmountOnBlur: true,
          // (props) => (
          //   <View style={styles.header}>
          //     {<Text style={{ fontSize: 30 }}>Favourites</Text>}
          //   </View>
          // ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
});

export default BottomTabNavigation;
