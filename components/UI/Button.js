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
        <TouchableCmp activeOpacity={0.8} onPress={props.onPress}>
            <View style={{...styles.button, ...props.style}}>
                {props.withIcon ? <Text style={styles.iconStyle}>{props.withIcon}</Text> : null}
                <Text style={{...styles.text, ...props.styleText, marginTop: props.withIcon ? 3 : 0}}>{props.children}</Text>
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
        marginVertical: 15,
        flexDirection: 'row',
    },
    text: {
        fontFamily: 'poppins-medium',
        fontSize: 14,
        color: 'white',
    },
    iconStyle: {
        marginRight: 10
    }
});

export default Button;
