import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";

import LoginScreen from "../screens/auth/LoginScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import CategoriesSelectionScreen from "../screens/auth/CategoriesSelectionScreen";

import HomeScreen from "../screens/HomeScreen";

const AuthNavigatorStack = createStackNavigator();
const HomeNavigatorStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MainNavigatorStack = createStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "white",
    },
};

function AuthNavigator() {
    return (
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
    );
}

function HomeNavigator() {
    return (
        <HomeNavigatorStack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
            mode="card"
        >
            <HomeNavigatorStack.Screen name="Home" component={HomeScreen} />
        </HomeNavigatorStack.Navigator>
    );
}

function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="HomeNavigator">
            <Drawer.Screen name="HomeNavigator" component={HomeNavigator} />
        </Drawer.Navigator>
    );
}

export default function GlobalNavigator() {
    return (
        <NavigationContainer theme={MyTheme}>
            <MainNavigatorStack.Navigator
                initialRouteName="Drawer"
                screenOptions={{
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
                mode="card"
            >
                <MainNavigatorStack.Screen name="Auth" component={AuthNavigator} />
                <MainNavigatorStack.Screen name="Drawer" component={DrawerNavigator} />
            </MainNavigatorStack.Navigator>
        </NavigationContainer>
    );
}
