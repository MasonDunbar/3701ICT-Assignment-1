import { View, Text, StyleSheet, FlatList} from 'react-native';

export const TaskList = ({ data }) => {
  
    const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemtext}>{item.title}</Text>
    </View>
  );
  return (
    <FlatList 
      data={data}
      renderItem={renderItem}
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