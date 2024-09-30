import {Text, SectionList, StyleSheet, FlatList, View} from "react-native";
import { Avatar } from 'react-native-paper';
import Box from "./components/Box"
export default function App() {
  const sections=[
    {
      id:"0",
      title:"A",
      data:[
        {id:"0",text:"Ahmed"},
        {id:"1",text:"Alaa"},
        {id:"2",text:"Assem"},
      ]
      },
      {
      id:"1",
      title:"B",
      data:[
        {id:"3",text:"Banan"},        
      ]
    },{
      id:"2",
      title:"D",
      data:[
        {id:"4",text:"Doaa"},
      ]
    }
    ]
  
  const COLORS=[
        {colorName:'Base03',hexCode:'#002b36'},
        {colorName:'Base02',hexCode:'#073642'},
        {colorName:'Base01',hexCode:'#586e75'},
        {colorName:'Base00',hexCode:'#657b83'},
        {colorName:'Base0',hexCode:'#839496'},
        {colorName:'Base1',hexCode:'#93a1a1'},
        {colorName:'Base2',hexCode:'#eee8d5'},
        {colorName:'Base3',hexCode:'#fdf6e3'},
        {colorName:'Yellow',hexCode:'#b58900'},
        {colorName:'Orange',hexCode:'#cb4b16'},
        {colorName:'Red',hexCode:'#dc322f'},
        {colorName:'Magenta',hexCode:'#d33682'},
        {colorName:'Cyan',hexCode:'#2aa198'},
        {colorName:'Green',hexCode:'#859900'}
    ]
    // return (
    //   <SectionList sections={sections} style = {styles.container}
    //   renderSectionHeader = {({section:{title}})=> <Text style={styles.headerStyle}>{title}</Text>}
    //   renderItem={({item})=>
    //   <View style={{flexDirection:"row",gap:8}}>
    //   <Avatar.Icon size={40} icon="account-circle-outline" color="white" />
    //   <Text style={styles.itemStyle}>{item.text}</Text></View>}
    //   ></SectionList>
    //  );
   
    return (
      <FlatList data={COLORS} style = {styles.container}
      renderItem={({item:{colorName,hexCode}})=><Box colorName={colorName} hexCode={hexCode}></Box>}
      keyExtractor={({hexCode})=>hexCode}
      ListHeaderComponent={<Text style={styles.txt}>Here are some boxes of different colors</Text>}
      ListEmptyComponent={<Text>No Data</Text>}
        ></FlatList>
  
    );
}
const styles = StyleSheet.create(
  {    
    container:{marginHorizontal:16, marginVertical:30},
    txt: { fontWeight: "bold", fontSize: 18, marginVertical: 10},
    headerStyle:{backgroundColor:"#dedede" ,padding:10  ,fontWeight:"bold" ,fontSize:20, marginBottom:8,borderRadius:2},
    itemStyle:{padding:10, marginBottom:8, width:300}
  })
