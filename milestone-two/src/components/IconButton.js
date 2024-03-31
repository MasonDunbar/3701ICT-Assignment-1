import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const navToNewItem = () => navigation.navigate('NewItem')
export const IconButton = ({
    name,
    label,
    fun = () => {
        console.log("Clicked");
    },
}) => {
    return (
        <Pressable onPress={fun}>
            <View>
                <Ionicons name={name} color="Black" size={60}/>
                <Text>{label}</Text>
            </View>
        </Pressable>
    );
};