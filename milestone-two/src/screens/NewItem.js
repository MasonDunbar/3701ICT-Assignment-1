import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from "../components/IconButton";
import { TextInput } from 'react-native-web';

export default function NewItem () {
  return (
    <View style={styles.container}>
      <Text>New Item</Text>
      <Text>Title</Text>
      <TextInput placeholder="Add a Title for your task" style={styles.input}/>
      <Text>Description</Text>
      <TextInput placeholder="Add a Title for your task" style={styles.input}/>
      <IconButton name="backspace-outline" label="Cancel"/>
      <IconButton name="save-outline" label="Save"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 5,
    margin: 10,
  },
});
