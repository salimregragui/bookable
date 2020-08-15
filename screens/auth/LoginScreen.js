import React from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";

import Input from "../../components/UI/Input";
import Button from '../../components/UI/Button';
import { Colors } from "../../constants/Colors";

const LoginScreen = (props) => {
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Login</Text>
                <Text style={styles.subtitle}>Enter your registration information</Text>
            </View>

            <View style={styles.infosContainer}>
                <Text style={styles.infos}>
                    Login in gives you access to a lot more functionalities. We do not collect your
                    data or give you targeted ads.
                </Text>
            </View>

            <View style={styles.inputsContainer}>
                <Input
                    keyboardType="email-address"
                    placeholder="Email Adress"
                    placeholderTextColor={Colors.lightTheme.grey}
                />
                <Input
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor={Colors.lightTheme.grey}
                />
                
                <Button>
                    Login
                </Button>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 30,
    },
    titleContainer: {
        marginTop: 20,
    },
    title: {
        color: Colors.lightTheme.primaryColor,
        fontFamily: "poppins-bold",
        fontSize: 24,
        height: 40,
    },
    subtitle: {
        color: Colors.lightTheme.grey,
        fontFamily: "poppins",
        fontSize: 14,
    },
    infosContainer: {
        marginTop: 40,
        marginBottom: 40,
    },
    infos: {
        fontFamily: "poppins",
        color: Colors.lightTheme.grey,
    },
});

export default LoginScreen;
