import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";

import LoginScreen from "../screens/auth/LoginScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import CategoriesSelectionScreen from "../screens/auth/CategoriesSelectionScreen";

const AuthNavigatorStack = createStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "white",
    },
};

export default function GlobalNavigator() {
    return (
        <NavigationContainer theme={MyTheme}>
            <AuthNavigatorStack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
                mode="card"
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
