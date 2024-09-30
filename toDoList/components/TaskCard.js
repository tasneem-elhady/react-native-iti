import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { useEffect, useState } from 'react';

const Task=(props)=>{
    const [done, setDone] = useState();
    const [id, setId] = useState();
    useEffect(()=>{
        console.log("setting done");
        setDone(props.task.done);
        setId(props.task.id);
        console.log("now"+done);
    })
    const styles = StyleSheet.create({
        root: {
          marginVertical:8,
        //   marginHorizontal:16,
        //   flexDirection: 'row',
        //   width: 351,
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius:16,

        //   flexShrink: 0,
          backgroundColor:"#EDEDED",
        //   borderWidth: 0,
        //   borderStyle: 'solid',
        //   borderColor: "#EDEDED"  
        },
        frame12: {
            flexDirection: 'row',
            // justifyContent: 'space-evenly',
            alignItems: 'center',
            gap:56,
                        // flexGrow: 1,
            // flexShrink: 0,
            // flexBasis: 0,
          },
          task: {
            color: "#00000",
            // fontFamily: 'Inter',
            fontSize: 20,
            // fontStyle: 'normal',
            fontWeight: '400',
            // textDecorationLine: 'line-through',
          },
          doneTask: {
            color: "#00000",
            // fontFamily: 'Inter',
            fontSize: 20,
            // fontStyle: 'normal',
            fontWeight: '400',
            textDecorationLine: 'line-through',
          },
    });
    return   <View style={styles.root}>
                <View style={styles.frame12}>
                    <Text style={(done)?styles.doneTask:styles.task}>{props.task.name}</Text>
                    
                    <TouchableOpacity style = {{flexDirection:"row", justifyContent:"center", alignItems:"center"}} 
                    onPress={() => {
                        console.log(props.done);
                        props.done(id);
                        console.log(done);
                        // setDone(!done);
                    }}>
                        <Checkbox status = {done ? 'checked' : 'unchecked'}
                    />
                        <Text style={styles.task}>Done</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => {
                        console.log("delete");
                        props.delete(id)
                    }}>
                        <Text style={styles.task}>Delete</Text>
                    </TouchableOpacity>
                </View>
             </View>
}
export default Task;