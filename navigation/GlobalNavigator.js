import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";

import LoginScreen from "../screens/auth/LoginScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import CategoriesSelectionScreen from "../screens/auth/CategoriesSelectionScreen";

import LoadingScreen from "../screens/LoadingScreen";

import HomeScreen from "../screens/HomeScreen";
import BookDetailsScreen from "../screens/BookDetailsScreen";

import ProfileScreen from "../screens/profile/ProfileScreen";
import FavoritesScreen from "../screens/profile/FavoritesScreen";
import CurrentlyReadingScreen from "../screens/profile/CurrentlyReadingScreen";

import SearchScreen from '../screens/search/SearchScreen';

const AuthNavigatorStack = createStackNavigator();
const HomeNavigatorStack = createStackNavigator();
const ProfileNavigatorStack = createStackNavigator();
const SearchNavigatorStack = createStackNavigator();
const EnglobeStack = createStackNavigator();
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
            <HomeNavigatorStack.Screen name="BookDetails" component={BookDetailsScreen} />
        </HomeNavigatorStack.Navigator>
    );
}

function ProfileNavigator() {
    return (
        <ProfileNavigatorStack.Navigator
            initialRouteName="Profile"
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
            mode="card"
        >
            <ProfileNavigatorStack.Screen name="Profile" component={ProfileScreen} />
            <ProfileNavigatorStack.Screen name="Favorites" component={FavoritesScreen} />
            <ProfileNavigatorStack.Screen
                name="CurrentlyReading"
                component={CurrentlyReadingScreen}
            />
            <ProfileNavigatorStack.Screen name="BookDetails" component={BookDetailsScreen} />
        </ProfileNavigatorStack.Navigator>
    );
}

function SearchNavigator() {
    return (
        <SearchNavigatorStack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
            mode="card"
        >
            <SearchNavigatorStack.Screen name="Search" component={SearchScreen} />
            <SearchNavigatorStack.Screen name="BookDetails" component={BookDetailsScreen} />
        </SearchNavigatorStack.Navigator>
    );
}

function EnglobeNavigator() {
    return (
        <EnglobeStack.Navigator
            initialRouteName="HomeNavigator"
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
            mode="card"
        >
            <EnglobeStack.Screen name="HomeNavigator" component={HomeNavigator} />
            <EnglobeStack.Screen name="ProfileNavigator" component={ProfileNavigator} />
        </EnglobeStack.Navigator>
    );
}

function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="Englobe">
            <Drawer.Screen name="Englobe" component={EnglobeNavigator} />
            <Drawer.Screen name="Search" component={SearchNavigator} />
        </Drawer.Navigator>
    );
}

export default function GlobalNavigator() {
    return (
        <NavigationContainer theme={MyTheme}>
            <MainNavigatorStack.Navigator
                initialRouteName="Loading"
                screenOptions={{
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
                mode="card"
            >
                <MainNavigatorStack.Screen name="Loading" component={LoadingScreen} />
                <MainNavigatorStack.Screen name="Auth" component={AuthNavigator} />
                <MainNavigatorStack.Screen name="Drawer" component={DrawerNavigator} />
            </MainNavigatorStack.Navigator>
        </NavigationContainer>
    );
}
