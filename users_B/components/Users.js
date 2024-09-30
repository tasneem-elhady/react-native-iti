import React, { useContext } from 'react';
import { StyleSheet, View, Text, FlatList} from 'react-native';
import UsersContextProvider, { UsersContext } from '../contexts/UsersContextProvider';
import { IconButton } from 'react-native-paper';
import User from './User';
import Search from './Search';

const Users = () => {
    const {users,search} = useContext(UsersContext);
    let filteredArr = users;
    if(search.length>0)
    {
        console.log(search);
        filteredArr = users.filter((u)=>u.name.includes(search))}
    console.log("in users: "+filteredArr);
        return (            
            <FlatList 
            style={styles.container}
            data={filteredArr}
            // ListHeaderComponent={<Search></Search>}
            renderItem={({item})=><User user={item}></User>}
            ></FlatList>            
        );
    }
 

const styles = StyleSheet.create({
    container:{
        // marginBottom:36,
        paddingHorizontal:16,
        backgroundColor:"#dedede"
    }
})

export default Users;
