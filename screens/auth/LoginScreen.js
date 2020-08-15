import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { Colors } from "../../constants/Colors";

import * as authActions from '../../store/actions/auth';

const LoginScreen = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const emailChangeHandler = (text) => {
        setEmail(text);
    }

    const passwordChangeHandler = (text) => {
        setPassword(text);
    }

    const formHandler = () => {
        dispatch(authActions.login(email, password));
    }

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
                    placeholder="Email Address"
                    placeholderTextColor={Colors.lightTheme.grey}
                    value={email}
                    onChangeText={emailChangeHandler}
                    autoCapitalize='none'
                />
                <Input
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor={Colors.lightTheme.grey}
                    value={password}
                    onChangeText={passwordChangeHandler}
                    autoCapitalize='none'
                />

                <Button onPress={formHandler} >
                    Login
                </Button>

                <Button
                    style={styles.forgotPass}
                    styleText={styles.forgotPassText}
                    onPress={() => {
                        console.log("pass !");
                    }}
                >
                    Forgot your password ?
                </Button>

                <Button
                    style={styles.signUp}
                    styleText={styles.signUpText}
                    onPress={() => {
                        props.navigation.replace('SignUp');
                    }}
                >
                    Sign Up
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
    forgotPass: {
        backgroundColor: "white",
        marginVertical: 0,
        height: 40,
    },
    forgotPassText: {
        color: Colors.lightTheme.secondaryColor,
    },
    signUp: {
        marginTop: 80,
        backgroundColor: "white",
        borderRadius: 5,
        borderColor: Colors.lightTheme.secondaryColor,
        borderWidth: 2,
    },
    signUpText: {
        color: Colors.lightTheme.secondaryColor,
    },
});

export default LoginScreen;
