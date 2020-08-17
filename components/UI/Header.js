import React from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import Button from "./Button";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const Header = (props) => {
    let headerLeft = (
        <Button
            style={styles.headerLeft}
            onPress={() => {
                props.navigation.toggleDrawer();
            }}
        >
            <Ionicons name="md-menu" size={36} color={Colors.lightTheme.secondaryColor} />
        </Button>
    );

    if (props.isNotMenu) {
        headerLeft = (
            <Button
                style={styles.headerLeft}
                onPress={() => {
                    props.navigation.goBack();
                }}
            >
                <Ionicons
                    name="ios-arrow-round-back"
                    size={36}
                    color={Colors.lightTheme.secondaryColor}
                />
            </Button>
        );
    }
    return (
        <View style={{...styles.Header, marginTop: props.marginTop ? props.marginTop : 30}}>
            <View style={styles.headerLeftStyle}>
                {headerLeft}
                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
            </View>

            <View style={styles.image}>
                {props.noHeaderRight ? null : (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => {
                            props.navigation.navigate("ProfileNavigator", {
                                screen: "Profile",
                                initial: true,
                            });
                        }}
                    >
                        <ImageBackground
                            style={styles.imageBackground}
                            imageStyle={{ borderRadius: 50 }}
                            source={require("../../assets/32.jpg")}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Header: {
        width: "100%",
        height: 80,
        flexDirection: "row",
        marginTop: 30,
        justifyContent: "space-between",
        alignItems: "center",
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 40,
        marginRight: 20,
    },
    imageBackground: {
        width: "100%",
        height: "100%",
        borderRadius: 40,
    },
    headerLeft: {
        width: 36,
        height: 36,
        marginLeft: 20,
        backgroundColor: "white",
    },
    title: {
        fontFamily: "poppins-bold",
        fontSize: 16,
        color: Colors.lightTheme.secondaryColor,
        marginTop: 5,
        marginLeft: 20,
    },
    headerLeftStyle: {
        flexDirection: "row",
        width: "60%",
        height: "100%",
        alignItems: "center",
    },
});

export default Header;
