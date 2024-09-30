import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import routes from "../utils/routes";
import BottomTabNavigation from "./BottomTabNavigation";
import DetailsPage from "../screens/detailsPage";
import { MoviesContext } from "../contexts/MoviesContextProvider";

const stack = createStackNavigator();
const StackNavigation = () => {
  // console.log("in stack");
  const { movie } = useContext(MoviesContext);

  return (
    <stack.Navigator>
      <stack.Screen
        name={routes.root}
        component={BottomTabNavigation}
        options={{ header: () => null }}
      ></stack.Screen>
      <stack.Screen
        name={routes.details}
        component={DetailsPage}
        options={{
          title: movie.title,
        }}
      ></stack.Screen>
    </stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default StackNavigation;
