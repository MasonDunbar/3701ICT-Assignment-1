import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from "../components/IconButton";
import { TextInput } from 'react-native';
import { useState } from 'react';
import Modal from 'react-native-modal';

export default function NewItem ({navigation}) {
  const navGoBack = () => navigation.goBack()
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  const [isPopupVisible, setPopupVisible] = useState(false);
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const addItemButton = () => {
    if (!title.trim() || !description.trim()){
      console.log("Empty")
      return;
    }
    togglePopup();
    setTitle("");
    setDescription("");
    console.log("Input full")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Item</Text>
      <Text style={styles.label}>Title</Text>
      <TextInput 
        placeholder="Add a Title for your task" 
        value={title}
        onChangeText={setTitle}
        style={styles.inputSmall}
      />
      <Text style={styles.label}>Description</Text>
      <TextInput 
        placeholder="Add a Description for your task" 
        multiline={true} 
        numberOfLines={5} 
        value={description}
        onChangeText={setDescription}
        style={styles.inputBig}
        />
      <IconButton name="backspace-outline" label="Cancel" fun={navGoBack}/>
      <IconButton name="save-outline" label="Save" fun={addItemButton}/>
      <Modal isVisible={isPopupVisible}>
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
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 60,
    top: 40,
    position: 'absolute',
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
