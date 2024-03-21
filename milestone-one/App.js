import { StatusBar } from 'expo-status-bar';
import { cloneElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My To-do List</Text>
      <View style={styles.itemBox}>
        <Text style={styles.item}>Clean my Car</Text>
        <Text style={styles.item}>Buy a Gift for Mother</Text>
        <Text style={styles.item}>Get a Haircut</Text>
        <Text style={styles.item}>Buy Groceries</Text>
        <Text style={styles.item}>Pay my Bills</Text>
      </View>
      <Text style={styles.button}>Add New To-do Item</Text>
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
    marginBottom: 40,
    top: 10,
    position: 'absolute',
  },
  itemBox: {
    width: '100%',
    height: '80%',
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    borderWidth: 1,
    minHeight: '15%',
    backgroundColor: 'green',
    padding: 10,
    marginBottom: 5,
    color: 'white',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 25,
    textAlign: 'center',
    overflow: 'hidden',
    color: 'white',
  },
});
