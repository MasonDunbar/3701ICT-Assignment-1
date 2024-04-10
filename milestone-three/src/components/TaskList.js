import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import {useState} from 'react';
import { IconButton } from "../components/IconButton";

export const TaskList = ({ data, onDataChange }) => {
    const [expandedItems, setExpandedItems] = useState({});
    const [completedItems, setCompletedItems] = useState({});

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
    const deleteItem = (itemId) => {
        const newData = data.filter(item => item.id !== itemId);
        onDataChange(newData);
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