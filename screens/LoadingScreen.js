import React, { useEffect } from "react";
import { StyleSheet, Text, View, AsyncStorage, ActivityIndicator } from "react-native";
import { useDispatch } from "react-redux";
import axios from "axios";
import { CONFIG } from "../constants/Config";

const LoadingScreen = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const tryLogin = async () => {
            const userData = await AsyncStorage.getItem("userData");

            if (!userData) {
                console.log("loading auth");
                props.navigation.replace("Auth");
                return;
            }

            const transformedData = JSON.parse(userData);
            const { token, userId, refreshToken, expiration } = transformedData;
            const expirationDate = new Date(expiration);

            console.log(expirationDate);

            if (expirationDate <= new Date() || !token || !userId || !refreshToken) {
                axios
                    .post(
                        `https://securetoken.googleapis.com/v1/token?key=${CONFIG.key}`,
                        JSON.stringify({
                            grant_type: "refresh_token",
                            refresh_token: refreshToken,
                        }),
                        {
                            headers: {
                                "Content-Type": "application / x-www-form-urlencoded",
                            },
                        }
                    )
                    .then((res) => {
                        console.log(res.data);
                        console.log("loading refresh");

                        AsyncStorage.setItem(
                            "userData",
                            JSON.stringify({
                                token: res.data.id_token,
                                userId: res.data.user_id,
                                refreshToken: res.data.refresh_token,
                                expiration: new Date(
                                    new Date().getTime() + +res.data.expires_in * 1000
                                ).toISOString(),
                            })
                        );

                        props.navigation.replace("Drawer");
                    })
                    .catch((error) => console.log(error.response));
                return;
            }

            console.log("loading normal");
            props.navigation.replace("Drawer");
        };

        tryLogin();
    }, [dispatch]);

    return (
        <View style={styles.loading}>
            <ActivityIndicator size="large" color="#b1b1b1" />
        </View>
    );
};

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
export default LoadingScreen;
