import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Title } from "../components/Title";
import { IconButtonText } from "../components/IconButtonText";
import { TaskList } from "../components/TaskList";
import { backgroundColor, itemContainerBackgroundColor, borderColor} from '../constants/Color';

export default function Home({ navigation }) {
  const navToNewItem = () => navigation.navigate('NewItem')
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
    const updateNewItem = navigation.addListener('focus', () => {
      loadData();
    });
    return updateNewItem;
  }, [navigation]);

  const loadData = async () => {
    try {
      const savedData = await AsyncStorage.getItem('taskData');
      if (savedData !== null) {
        setData(JSON.parse(savedData));
      }
    } catch (error) {
      console.log('Home - Error loading data:', error);
    }
  };

  const handleDataChange = async (newData) => {
    try {
      setData(newData);
      await AsyncStorage.setItem('taskData', JSON.stringify(newData));
    } catch (error) {
      console.log('Home - Error updating data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Title text={"My To-do List"}/>
      <View style={styles.itemBox}>
        <TaskList data={data} onDataChange={handleDataChange}/>
      </View>
      <IconButtonText name="add-circle-outline" label="Add New To-Do" fun={navToNewItem}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  itemBox: {
    backgroundColor: itemContainerBackgroundColor,
    width: '95%',
    height: '75%',
    borderColor: borderColor,
    borderWidth: 5,
    borderRadius: 10,
    padding: 10,
    marginTop: 60,
    marginBottom: 10,
  },
});
