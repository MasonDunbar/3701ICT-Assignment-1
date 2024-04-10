import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from "../components/IconButton";
import { TaskList } from "../components/TaskList";
import { useState } from 'react';

export default  function Home({ navigation }) {
  const navToNewItem = () => navigation.navigate('NewItem')
  
  const [data, setData] = useState([
    { id: '1', title: 'Clean my Car', description: 'Description for Task'},
    { id: '2', title: 'Get a Haircut', description: 'Description for Task'},
    { id: '3', title: 'Buy Groceries', description: 'Description for Task'},
    { id: '4', title: 'Pay my Bills', description: 'Description for Task'},        
  ]);

  const updatedData = (newData) => {
    setData(newData);
  }



  return (
    <View style={styles.container}>
      <Text style={styles.title}>My To-do List</Text>
      <View style={styles.itemBox}>
        <TaskList data={data} onDataChange={updatedData}/>
      </View>
      <IconButton name="add-circle-outline" label="Add New To-Do" fun={navToNewItem}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title:{
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 60,
    top: 40,
    position: 'absolute',
  },
  itemBox: {
    width: '80%',
    height: '70%',
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginTop: 60,
    marginBottom: 10,
  },
  item: {
    borderWidth: 1,
    minHeight: '10%',
    backgroundColor: 'green',
    padding: 10,
    marginBottom: 5,
  },
  itemtext: {
    fontSize: 16,
    color: "white",
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 15,
    borderRadius: 25,
    textAlign: 'center',
    overflow: 'hidden',
    color: 'white',
  },
});
