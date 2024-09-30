import React from 'react';
import { StyleSheet, View } from 'react-native';
import Details from '../screens/Details';
import DrawerNavigation from './DrawerNavigation';

const StackNavigation = () => {
    console.log("innavigator")
    return (
        <stack.Navigator>
        <stack.Screen
          name={Routes.root}
          component={DrawerNavigation}
          options={{ header: () => null }}
        ></stack.Screen>
        <stack.Screen
          name={routes.details}
          component={Details}
          options={{ headerTitle: "Movie Details" }}
        ></stack.Screen>
      </stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default StackNavigation;
