import React, { createContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import axios from "axios"

export const UsersContext = createContext() ;

const UsersContextProvider = ({children}) => {
    const [users,setUsers] = useState([]);
    // const [id, setUser] = useState("");
    const [search, setSearch] = useState("");
    const [user, setUser] = useState("");

    const getSearch = (search)=>{
        console.log(search+" in context");
        setSearch(search);
    }
    const getId = (Id)=>{
        console.log(Id);
        setUser(users.find((u)=>u.id === Id));
    }
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=> setUsers(res.data))
    },[])
    console.log("providing: "+users);
    return (
        <UsersContext.Provider value={{users,getId,getSearch,search,user}}>{children}</UsersContext.Provider>
    );
}

const styles = StyleSheet.create({})

export default UsersContextProvider;
