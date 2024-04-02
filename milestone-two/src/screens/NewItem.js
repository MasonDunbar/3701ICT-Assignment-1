import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from "../components/IconButton";
import { TextInput } from 'react-native-web';

export default function NewItem ({navigation}) {
  const navGoBack = () => navigation.goBack()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Item</Text>
      <Text style={styles.label}>Title</Text>
      <TextInput placeholder="Add a Title for your task" style={styles.inputSmall}/>
      <Text style={styles.label}>Description</Text>
      <TextInput placeholder="Add a Description for your task" multiline={true} numberOfLines={5} style={styles.inputBig}/>
      <IconButton name="backspace-outline" label="Cancel" fun={navGoBack}/>
      <IconButton name="save-outline" label="Save"/>
    </View>
  );
}

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
