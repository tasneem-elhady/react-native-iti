import { StyleSheet, Text, View, SafeAreaView, Platform, ScrollView } from 'react-native';
import Task from './components/TaskCard';
import TaskInput from './components/TaskInput';
import { useState } from 'react';

export default function App() {
  const[tasks,setTasks] = useState([])
  // console.log("type: "+typeof(tasks));
  const AddTask = (task)=>{setTasks([...tasks,{id:Math.random(),name:task,done:false}]);};
  const taskDone = (task)=>{
    tasks.map((m)=>{
      if(m.id===task)
          {m.done = !m.done;
            console.log("changed");
          }
        });
  setTasks([...tasks]);
  console.log("after done"+tasks)
};
  const deleteTask = (task)=>{
    const filteredTasks=tasks.filter((m)=>(m.id !==task));
        
    // console.log(tasks);
    setTasks([...filteredTasks]);
    // console.log(tasks);
  };
  return (
    <SafeAreaView style={styles.container}>
      <TaskInput add={AddTask}></TaskInput>
      <ScrollView >
        {tasks.map((t) => (
      <Task key={t.id} task={t} done={taskDone} delete={deleteTask} />
    ))}
      </ScrollView>
      
      
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:Platform.OS==="android"?30:0,
    // marginTop:56,
    marginHorizontal:16,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
