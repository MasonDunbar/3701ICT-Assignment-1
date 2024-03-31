import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default  function Home({ navigation }) {
    const navToNewItem = () => navigation.navigate('NewItem')
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
            <Text style={styles.button} onPress={navToNewItem}>Add New To-do Item</Text>
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
    marginBottom: 60,
    top: 40,
    position: 'absolute',
  },
  itemBox: {
    width: '80%',
    height: '70%',
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    borderWidth: 1,
    minHeight: '10%',
    backgroundColor: 'green',
    padding: 10,
    marginBottom: 5,
    color: 'white',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 15,
    borderRadius: 25,
    textAlign: 'center',
    overflow: 'hidden',
    color: 'white',
  },
});
