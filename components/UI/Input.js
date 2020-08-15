import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { Colors } from '../../constants/Colors';

const Input = (props) => {
    return <TextInput {...props} style={{...styles.input, ...props.style}} />;
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 50,
        borderColor: Colors.lightTheme.grey,
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 15,
        paddingHorizontal: 15,
        color: Colors.lightTheme.grey
    }
});

export default Input

