import { Keyboard, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput, IconButton } from 'react-native-paper';
import { useState } from 'react';

const TaskInput=(props)=>{
    const [text, setText] = useState("");
    const [textError,setTextError] = useState("")
    const handleChangeTask=(txt)=>{
        setText(txt);
        console.log(text);
    }
    const validate=()=>{
        console.log("validating: "+text);
        if (text.length <3){
            setTextError("Task name of atleast 3 letters is Required")
            return false;
        }
          else {
            setTextError("")
            return true;
          }
    }
            return <><View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center",alignContent:"center"}}>
                <TextInput style={{width:300}}
                mode='outlined'
                label="Task"
                value={text}
                onChangeText={handleChangeTask}
                // onPressOut={()=>Keyboard.dismiss()}
            />
            <IconButton
                style={{marginTop:10}}
                icon="plus"
                mode='outlined'
                // iconColor={MD3Colors.error50}
                size={30}
                onPress={() => {
                    Keyboard.dismiss();
                    console.log('Pressed');
                    if(validate())
                        props.add(text);
                }}
            />
            </View>
            
        <Text style={{color:"red"}}>{textError}</Text>
    </>
}
export default TaskInput;