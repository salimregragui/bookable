import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const Input = (props) => {
    let inputToReturn = <TextInput {...props} style={{ ...styles.input, ...props.style }} />;

    if (props.withIcon) {
        inputToReturn = (
            <View style={{ ...styles.search, ...props.style }}>
                <Text style={styles.searchIcon}>
                    <Ionicons name={props.iconName} size={24} color={Colors.lightTheme.grey} />
                </Text>
                <TextInput {...props} style={{ ...styles.inputIcon, ...props.style }} />
            </View>
        );
    }

    return inputToReturn;
};

const styles = StyleSheet.create({
    input: {
        width: "100%",
        height: 50,
        borderColor: Colors.lightTheme.grey,
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 15,
        paddingHorizontal: 15,
        color: Colors.lightTheme.grey,
        fontFamily: "poppins",
        paddingTop: 3,
    },
    inputIcon: {
        color: Colors.lightTheme.grey,
        fontFamily: "poppins",
        flex: 1,
        paddingTop: 15,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: "#fff"
    },
    search: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        width: "100%",
        height: 50,
        borderColor: Colors.lightTheme.grey,
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 15,
        overflow: "hidden",
    },
    searchIcon: {
        padding: 15,
    },
});

export default Input;
