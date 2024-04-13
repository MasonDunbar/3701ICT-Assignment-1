import { StyleSheet, Text, View, TextInput } from 'react-native';
import { IconButton } from "../components/IconButton";
import { useState } from 'react';
import Modal from 'react-native-modal';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Title } from "../components/Title";

export default function NewItem ({navigation}) {
  const navGoBack = () => navigation.goBack()
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isPopupVisible, setPopupVisible] = useState(false);
  
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const addItemButton = async () => {
    try {
      if (!title.trim() || !description.trim()){
        console.log("Empty")
        return;
      }
      await addNewItem({id: Math.random().toString(), title, description });

      setPopupVisible(true);
      setTitle("");
      setDescription("");
      //console.log("Input full");
    } catch (error) {
        //console.error("Error Adding item:", error);
    }
  };
  const addNewItem = async (newItem) => {
    try {
      const existingData = await AsyncStorage.getItem('taskData');
      let newData = [];
      if (existingData !== null) {
        newData = JSON.parse(existingData);
      }

      newData.push(newItem);
      await AsyncStorage.setItem('taskData', JSON.stringify(newData));
      navigation.emit('refreshTaskList');
    } catch (error) {
      //throw new Error('Error Adding item:', error);
    }
  }

  return (
    <View style={styles.container}>
      <Title text={"New To-do Item "}/>
      <View style={styles.itemBox}>
        <Text style={styles.label}>Title</Text>
        <TextInput placeholder="Add a Title for your task" value={title} onChangeText={setTitle} style={styles.inputSmall}/>
        <Text style={styles.label}>Description</Text>
        <TextInput placeholder="Add a Description for your task" multiline={true} numberOfLines={5} value={description} onChangeText={setDescription} style={styles.inputBig}/>
        <IconButton name="backspace-outline" label="Back" fun={navGoBack}/>
        <IconButton name="save-outline" label="Save" fun={addItemButton}/>
      </View>
        <Modal isVisible={isPopupVisible} onClose={() => setPopupVisible(false)}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'white', padding: 22 }}>
              <Text>Todo Added Successfully</Text>
              <IconButton name="close-outline" label="Close" fun={togglePopup} />
            </View>
          </View>
        </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  inputSmall: {
    height: '4%',
    width: '60%',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    margin: 10,
    backgroundColor: "green",
    color: "white",
  },
  inputBig: {
    height: '12%',
    width: '60%',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    margin: 10,
    backgroundColor: "green",
    color: "white",
  },
});
