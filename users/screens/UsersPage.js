import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import Users from '../components/Users';
import Search from '../components/Search';
const UsersPage = () => {
    console.log("in users page");
    return (
        <>
        <Users></Users>
        </>
    );
}

const styles = StyleSheet.create({})

export default UsersPage;
