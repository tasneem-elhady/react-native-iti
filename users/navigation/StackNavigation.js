import React from 'react';
import { StyleSheet, View } from 'react-native';
import Routes from '../utils/routes';
import { createStackNavigator } from '@react-navigation/stack';
import UsersPage from '../screens/UsersPage';
import UserDetails from '../screens/UserDetails';
const stack=createStackNavigator()
const StackNavigation = () => {
    console.log("in navigator");
    return (
        <stack.Navigator >
            <stack.Screen  name={Routes.home} component={UsersPage} options={{header:()=>null}} ></stack.Screen>
            <stack.Screen  name={Routes.user} component={UserDetails} options={{headerTitle:"User Details"}} ></stack.Screen>
        </stack.Navigator>
          
    );
}

const styles = StyleSheet.create({})

export default StackNavigation;
