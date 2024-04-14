import { View, Text, StyleSheet } from "react-native";

export const Title = ({ text }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: 'center',
    fontSize: 44,
    fontWeight: 'bold',
    marginBottom: 20,
    top: 40,
  },
});