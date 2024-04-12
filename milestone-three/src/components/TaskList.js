import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IconButton } from "../components/IconButton";

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
            setData(JSON.parse(savedData));
           } 
            
        } catch (error) {
            console.log("Tasklist - Error Loading Data", error);
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.itemtext}>{item.title}</Text>
            <IconButton name="expand" fun={() => toggleExpand(item.id)}/>
            {expandedItems[item.id] && (
                <View>
                    <Text style={styles.itemtext}>{item.description}</Text>
                    <IconButton name="add-circle-outline" label="Delete" fun={() => deleteItem(item.id)}/>
                    {!completedItems[item.id] && (
                        <IconButton name="add-circle-outline" label="Tick Complete" fun={() => toggleComplete(item.id)}/>
                    )}
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

    const toggleComplete = (itemId) => {
        setCompletedItems(prevState => ({
            ...prevState,
            [itemId]: true
        }));
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
        <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        />
    );
};

const styles = StyleSheet.create({
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
});