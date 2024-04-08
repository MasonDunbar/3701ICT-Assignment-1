import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const IconButton = ({
    name,
    label,
    fun = () => {
        console.log("Clicked");
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
        width: 180,
        height: 60,
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 5,
        backgroundColor: "blue",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: 30,
    },
    text: {
        color: "white",
        marginLeft: 10,
        fontSize: 16,
    },
})