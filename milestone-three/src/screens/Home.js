import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from "../components/IconButton";

export default  function Home({ navigation }) {
    const navToNewItem = () => navigation.navigate('NewItem')
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My To-do List</Text>
                <View style={styles.itemBox}>
                    <View style={styles.item}>
                      <Text style={styles.itemtext}>Clean my Car</Text>
                    </View>
                    <View style={styles.item}>
                      <Text style={styles.itemtext}>Buy a Gift for Mother</Text>
                    </View>
                    <View style={styles.item}>
                      <Text style={styles.itemtext}>Get a Haircut</Text>
                    </View>
                    <View style={styles.item}>
                      <Text style={styles.itemtext}>Buy Groceries</Text>
                    </View>
                    <View style={styles.item}>
                      <Text style={styles.itemtext}>Pay my Bills</Text>
                    </View>
            </View>
            <IconButton name="add-circle-outline" label="Add New To-Do" fun={navToNewItem}/>
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
    marginTop: 60,
    marginBottom: 10,
  },
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
