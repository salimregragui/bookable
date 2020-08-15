import React from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import Button from "./Button";
import { Colors } from "../../constants/Colors";
import { Ionicons } from '@expo/vector-icons';

const Header = (props) => {
    return (
        <View style={styles.Header}>
            <View style={styles.headerLeftStyle}>
                <Button
                    style={styles.headerLeft}
                    onPress={() => {
                        props.navigation.toggleDrawer();
                    }}
                ><Ionicons name="md-menu" size={36} color={Colors.lightTheme.secondaryColor} /></Button>
                <Text style={styles.title}>{props.title}</Text>
            </View>

            <View style={styles.image}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                    <ImageBackground style={styles.imageBackground} imageStyle={{borderRadius:50}} source={require('../../assets/32.jpg')}  />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Header: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 40,
        marginRight: 20
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        borderRadius: 40
    },
    headerLeft:{
        width: 36,
        height: 36,
        marginLeft: 20,
        backgroundColor: 'white'
    },
    title: {
        fontFamily: 'poppins-bold',
        fontSize: 16,
        color: Colors.lightTheme.secondaryColor,
        marginTop: 5,
        marginLeft: 20
    },
    headerLeftStyle: {
        flexDirection: 'row',
        width: '80%',
        height: '100%',
        alignItems: 'center'
    }
});

export default Header;