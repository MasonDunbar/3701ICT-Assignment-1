import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { buttonColor, borderColor, textColor } from "../constants/Color";

export const IconButtonText = ({
  name,
  label,
  fun = () => {
  },
}) => {
  return (
    <Pressable onPress={fun}>
      <View style={styles.container}>
        <Ionicons name={name} color="white" size={30}/>
        <Text style={styles.text}>{label}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 60,
    borderWidth: 2,
    borderColor: borderColor,
    borderRadius: 5,
    backgroundColor: buttonColor,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 10,
  },
  text: {
    color: textColor,
    fontSize: 15,
  },
});