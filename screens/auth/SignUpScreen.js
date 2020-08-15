import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { Colors } from "../../constants/Colors";

import * as authActions from '../../store/actions/auth';

const SignUpScreen = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();

    const usernameChangeHandler = (text) => {
        setUsername(text);
    }

    const emailChangeHandler = (text) => {
        setEmail(text);
    }

    const passwordChangeHandler = (text) => {
        setPassword(text);
    }

    const confirmPasswordChangeHandler = (text) => {
        setConfirmPassword(text);
    }

    const formSubmitHandler = () => {
        dispatch(authActions.signUp(email, password, username));
    }

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
                    value={username}
                    onChangeText={usernameChangeHandler}
                    autoCapitalize='none'
                />

                <Input
                    keyboardType="email-address"
                    placeholder="Email Address"
                    placeholderTextColor={Colors.lightTheme.grey}
                    value={email}
                    onChangeText={emailChangeHandler}
                    keyboardType="email-address"
                    autoCapitalize='none'
                />
                <Input
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor={Colors.lightTheme.grey}
                    value={password}
                    onChangeText={passwordChangeHandler}
                    secureTextEntry
                    autoCapitalize='none'
                />

                <Input
                    secureTextEntry
                    placeholder="Confirm Password"
                    placeholderTextColor={Colors.lightTheme.grey}
                    value={confirmPassword}
                    onChangeText={confirmPasswordChangeHandler}
                    secureTextEntry
                    autoCapitalize='none'
                />

                <Button
                    onPress={formSubmitHandler}
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
