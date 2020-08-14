import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";

import LoginScreen from "../screens/auth/LoginScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import CategoriesSelectionScreen from "../screens/auth/CategoriesSelectionScreen";

const AuthNavigatorStack = createStackNavigator();

export default function GlobalNavigator() {
    return (
        <NavigationContainer>
            <AuthNavigatorStack.Navigator
                initialRouteName="Login"
                screenOptions={{ headerShown: false }}
            >
                <AuthNavigatorStack.Screen name="Login" component={LoginScreen} />
                <AuthNavigatorStack.Screen name="SignUp" component={SignUpScreen} />
                <AuthNavigatorStack.Screen
                    name="CategoriesSelection"
                    component={CategoriesSelectionScreen}
                />
            </AuthNavigatorStack.Navigator>
        </NavigationContainer>
    );
}
