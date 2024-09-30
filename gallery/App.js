import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TouchableOpacity, ScrollView, Image, StyleSheet, Text, View, Button } from 'react-native';
// import {v4 as uuid} from "uuid"
export default function App() {
  const Images = [
  require('./assets/1.jpeg'),
  require('./assets/2.jpeg'),
  require('./assets/3.jpeg'),
  require('./assets/4.jpeg'),
  require('./assets/5.jpeg'),
  require('./assets/6.jpeg'),
  require('./assets/7.jpeg'),
  require('./assets/8.jpeg'),
  require('./assets/9.jpeg'),
  require('./assets/10.jpeg'),
  require('./assets/11.jpeg'),
  require('./assets/12.jpeg')
];  
const [focused,setFocused] = useState(false);
const [index,setIndex] = useState(0);

if(!focused)
  return (
    <ScrollView style={styles.contentContainer }> 
      <View style={styles.container}>
      {Images.map((image)=>(
        <TouchableOpacity key={Math.random()} onPress={()=>{console.log(image);setIndex(image); setFocused(true); }}>
          <Image source={image} style={styles.image}/>
        </TouchableOpacity>
        // console.log(image);
            
        ))
        }    
      </View>
    </ScrollView> 
  );
  else
  return <>
    <ScrollView contentOffset={{x :(index-1)*393}} horizontal pagingEnabled style={styles.imagePageContainer }> 
      <View style={styles.imageContainer}>
      {Images.map((image)=>(
            <Image key={Math.random()} source={image}style={styles.imagePage}/>
        ))}    
      </View>
    </ScrollView>
    <Button title = "Back" onPress={()=>setFocused(false)}></Button>
      </>
}

const styles = StyleSheet.create({
  container: {
    marginTop:56,
    marginBottom:16,
    backgroundColor: '#fff',
    // alignItems: 'center', 
    flexDirection: 'row',
    flexWrap:"wrap",
    justifyContent: 'space-between', 
    gap: 15
 },
  contentContainer:{
    // paddingVertical: 56,
    
    flex:1,
    paddingHorizontal: 12,
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    // justifyContent: "space-between",
  },
  image: {
    width: 175, // Adjust width as needed
    height: 150, // Adjust height as needed
  },
  imageContainer: {
    backgroundColor: '#fff',
    // alignItems: 'center', 
    flexDirection: 'row',
    flexWrap:"wrap",
    justifyContent: 'space-between', 
    // gap: 15
  },
  imagePageContainer: {
    flex:1,
    paddingVertical: 50,
    flexWrap: 'wrap',
    backgroundColor: '#fff',
  },
  imagePage: {
    margin:21.5,
    width: 350, // Adjust width as needed
    height: 700, // Adjust height as needed
  },
});
