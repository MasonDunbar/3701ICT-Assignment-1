import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { IconButton } from "../components/IconButton";
import { IconButtonText } from "../components/IconButtonText";
import { itemBackgroundColor, textColor } from '../constants/Color';

export const TaskList = ({ data, onDataChange }) => {
  const [expandedItems, setExpandedItems] = useState({});
  const [completedItems, setCompletedItems] = useState({});

  useEffect(() => {
    loadData();
  }, [data]);

  const loadData = async () => {
    try {
      const savedData = await AsyncStorage.getItem('taskData');
      if (savedData !== null) {
        const parsedData = JSON.parse(savedData);
        const initalCompletedItems = {};
        parsedData.forEach(item => {
          if (item.completed) {
            initalCompletedItems[item.id] = true;
          }
        });
        setCompletedItems(initalCompletedItems);
        setData(parsedData);
      } 
    } catch (error) {
      console.log("Tasklist - Error Loading Data", error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.header}>
        <Text style={styles.itemtext}>{item.title}</Text>
        <IconButton name="expand" fun={() => toggleExpand(item.id)}/>
      </View>
      {expandedItems[item.id] && (
        <View>
          <Text style={styles.itemDescription}>{item.description}</Text>
          <View style={styles.buttonContainer}>
            <IconButtonText name="trash-outline" label="Delete" fun={() => deleteItem(item.id)}/>
            {!completedItems[item.id] && (
              <IconButtonText name="checkmark-circle-outline" label="Tick Complete" fun={() => toggleComplete(item.id)}/>
            )}
          </View>
        </View>
      )}
    </View>
  );

  const toggleExpand = (itemId) => {
    setExpandedItems(prevState => ({
      ...prevState,
      [itemId]: !prevState[itemId]
    }));
  };

  const toggleComplete = async (itemId) => {
    try {
      const updatedCompletedItems = { ...completedItems };
      updatedCompletedItems[itemId] = !updatedCompletedItems[itemId];
      setCompletedItems(updatedCompletedItems);

      const newData = data.map(item =>
        item.id === itemId ? {...item, completed: !completedItems[itemId]} : item
      );
      await AsyncStorage.setItem('taskData', JSON.stringify(newData));
        onDataChange(newData);
    } catch (error) {
      console.error("Error With Saving Complete", error)
    }
  };

  const deleteItem = async (itemId) => {
    try { 
      const newData = data.filter(item => item.id !== itemId);
      await AsyncStorage.setItem('taskData', JSON.stringify(newData));
      onDataChange(newData);
    } catch (error){
      console.error("Error Deleting item:", error);
    }
  };
  
  return (
    <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id.toString()}/>
  );
};

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    minHeight: '10%',
    backgroundColor: itemBackgroundColor,
    padding: 10,
    marginBottom: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  itemtext: {
    fontSize: 36,
    color: textColor,
  },
  itemDescription: {
    fontSize: 20,
    color: textColor,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});