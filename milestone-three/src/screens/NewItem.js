import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';
import Modal from 'react-native-modal';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Title } from "../components/Title";
import { IconButtonText } from "../components/IconButtonText";
import { backgroundColor, itemContainerBackgroundColor, borderColor, labelColor, itemBackgroundColor, textColor} from '../constants/Color';

export default function NewItem ({navigation}) {
  const navGoBack = () => navigation.goBack();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isPopupVisible, setPopupVisible] = useState(false);
  
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const addItemButton = async () => {
    try {
      if (!title.trim() || !description.trim()){
        console.log("Title and Description Empty");
        return;
      }
      await addNewItem({id: Math.random().toString(), title, description });
      setPopupVisible(true);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.log("Error with Add item button:", error);
    }
  };

  const addNewItem = async (newItem) => {
    try {
      const existingData = await AsyncStorage.getItem('taskData');
      let newData = [];
      if (existingData !== null) {
        newData = JSON.parse(existingData);
      };
      newData.push(newItem);
      await AsyncStorage.setItem('taskData', JSON.stringify(newData));
      navigation.emit('refreshTaskList');
    } catch (error) {
      console.log("Error Adding item:", error);
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
      </View>
      <View style={styles.buttonContainer}>  
        <IconButtonText name="backspace-outline" label="Back" fun={navGoBack}/>
        <IconButtonText name="save-outline" label="Save" fun={addItemButton}/>
      </View>    
      <Modal isVisible={isPopupVisible} onClose={() => setPopupVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text>Todo Added Successfully</Text>
            <IconButtonText name="close-outline" label="Close" fun={togglePopup} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

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
  label: {
    color: labelColor,
    fontSize: 26,
    fontWeight: 'bold',
    alignContent: "center",
    marginTop: 10,
  },
  inputSmall: {
    height: '10%',
    width: '95%',
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    margin: 10,
    backgroundColor: itemBackgroundColor,
    color: textColor,
  },
  inputBig: {
    height: '35%',
    width: '95%',
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    margin: 10,
    backgroundColor: itemBackgroundColor,
    color: textColor,
  },
  modalContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  modal: {
    backgroundColor: itemContainerBackgroundColor, 
    padding: 22,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
