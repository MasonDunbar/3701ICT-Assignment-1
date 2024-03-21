import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My To-do List</Text>
      <Text style={styles.item}>Item 1</Text>
      <Text style={styles.item}>Item 2</Text>
      <Text style={styles.item}>Item 3</Text>
      <Text style={styles.button}>Add New To-do Item</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
