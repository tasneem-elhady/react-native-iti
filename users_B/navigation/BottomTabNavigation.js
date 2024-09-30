import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, View, Text} from "react-native";
import Routes from "../utils/routes";
import UsersPage from "../screens/UsersPage";
import Favourites from "../screens/Favourites";
import { Icon } from "react-native-paper";
import { Header } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  console.log("in tab navigator");
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === Routes.home) {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === Routes.favs) {
            iconName = focused ? "heart" : "heart-outline";
          }

          // You can return any component that you like here!
          return <Icon source={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name={Routes.home}
        component={UsersPage}
        options={{
          header: (props) => <View style={{ paddingTop: 30, justifyContent:"center",alignItems:"center",height:80}}>{<Text style={{fontSize:30}}>Users</Text>}</View>,
        }}
      ></Tab.Screen>
      <Tab.Screen name={Routes.favs} component={Favourites}
      options={{
          header: (props) => <View style={{ paddingTop: 30, justifyContent:"center",alignItems:"center",height:80}}>{<Text style={{fontSize:30}}>Favourites</Text>}</View>,
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default BottomTabNavigation;
