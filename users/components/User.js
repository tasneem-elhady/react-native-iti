import React, { useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import { UsersContext } from '../contexts/UsersContextProvider';
import { useNavigation } from '@react-navigation/native';
import Routes from '../utils/routes';
const User = ({user}) => {
    const {navigate}=useNavigation();
    const {getId} = useContext(UsersContext);
    // console.log("user");
    return (
        <TouchableOpacity 
        onPress={()=> {
            console.log("pressed");            
            getId(user.id);
            navigate(Routes.user);
            }}
        style = {styles.user_card}>
            {/* <View style={styles.user_card}> */}
                <Text>{user.name}</Text> 
                <IconButton 
                icon={"chevron-right"}
                // onPress={()=>console.log("pressed")}
                ></IconButton>
            {/* </View> */}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    user_card:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:20
    }
})

export default User;
