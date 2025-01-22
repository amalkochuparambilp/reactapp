import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export default function createTodo() {
    const [text, setText] = React.useState("");

    return(
        <View style={style.container}>
            <Text style={style.headerText}>Add ur Todo</Text>
            <TextInput
             label="Enter todo"
             value={text}
             onChangeText={(text) => setText(text)}
             mode="outlined"
             placeholder="Enter your todo"
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 20,
    },
});