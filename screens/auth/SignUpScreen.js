import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { Colors } from "../../constants/Colors";

const SignUpScreen = (props) => {
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Sign Up</Text>
                <Text style={styles.subtitle}>Enter your registration information</Text>
            </View>

            <View style={styles.infosContainer}>
                <Text style={styles.infos}>
                    By joining us you accept the terms of our app. And you engage to follow all the
                    rules. Otherwise your account will be suspended.
                </Text>
            </View>

            <View style={styles.inputsContainer}>
                <Input
                    placeholder="Full Name or Username"
                    placeholderTextColor={Colors.lightTheme.grey}
                />

                <Input
                    keyboardType="email-address"
                    placeholder="Email Address"
                    placeholderTextColor={Colors.lightTheme.grey}
                />
                <Input
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor={Colors.lightTheme.grey}
                />

                <Input
                    secureTextEntry
                    placeholder="Confirm Password"
                    placeholderTextColor={Colors.lightTheme.grey}
                />

                <Button
                    onPress={() => {
                        console.log("hey !");
                    }}
                >
                    Sign Up
                </Button>

                <Button
                    style={styles.signUp}
                    styleText={styles.signUpText}
                    onPress={() => {
                        props.navigation.replace("Login");
                    }}
                >
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
    signUp: {
        marginTop: 60,
        backgroundColor: "white",
        borderRadius: 5,
        borderColor: Colors.lightTheme.secondaryColor,
        borderWidth: 2,
    },
    signUpText: {
        color: Colors.lightTheme.secondaryColor,
    },
});

export default SignUpScreen;
