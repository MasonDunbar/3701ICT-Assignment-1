import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from "../components/IconButton";
import { TaskList } from "../components/TaskList";
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ navigation }) {
  const navToNewItem = () => navigation.navigate('NewItem')
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
    console.log("Home - Load Data - useEffect");
  }, []);

  const loadData = async () => {
    try {
      const savedData = await AsyncStorage.getItem('taskData');
      if (savedData !== null) {
        setData(JSON.parse(savedData));
      }
      console.log("Home - Load Data");
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const handleDataChange = async (newData) => {
    try {
      setData(newData);
      await AsyncStorage.setItem('taskData', JSON.stringify(newData));
      console.log("Home - Update Data");
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };



  return (
    <View style={styles.container}>
      <Text style={styles.title}>My To-do List</Text>
      <View style={styles.itemBox}>
        <TaskList data={data} onDataChange={handleDataChange}/>
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
