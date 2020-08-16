import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/Colors";

const TitleBar = (props) => {
    return (
        <View style={styles.titleBar}>
            <Text style={styles.titleText}>{props.title}</Text>
            {props.hasRight ? (
                <TouchableOpacity activeOpacity={0.4} onPress={props.rightClick}>
                    <Text style={styles.rightText}>{props.rightText}</Text>
                </TouchableOpacity>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    titleBar: {
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },
    titleText: {
        fontFamily: "poppins-bold",
        color: Colors.lightTheme.primaryColor,
        fontSize: 18,
    },
    rightText: {
        fontFamily: "poppins-medium",
        color: Colors.lightTheme.secondaryColor,
        fontSize: 14,
        marginRight: 20,
    },
});

export default TitleBar;
