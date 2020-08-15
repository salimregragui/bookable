import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
    View,
    Text
} from "react-native";
import { Colors } from "../../constants/Colors";

const Button = (props) => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <TouchableCmp activeOpacity={0.8}>
            <View style={{...styles.button, ...props.style}}>
                <Text style={{...styles.text, ...props.styleText}}>{props.children}</Text>
            </View>
        </TouchableCmp>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.lightTheme.secondaryColor,
        borderRadius: 5,
        marginVertical: 15
    },
    text: {
        fontFamily: 'poppins-medium',
        fontSize: 14,
        color: 'white'
    }
});

export default Button;
