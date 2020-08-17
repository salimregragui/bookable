import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator } from "react-native";
import axios from "axios";
import Header from "../components/UI/Header";
import { Colors } from "../constants/Colors";
import Button from "../components/UI/Button";
import { Ionicons } from "@expo/vector-icons";

const BookDetailsScreen = (props) => {
    const [bookInfos, setBookInfos] = useState();

    useEffect(() => {
        if (props.route.params.bookId) {
            axios
                .get(`https://www.googleapis.com/books/v1/volumes/${props.route.params.bookId}`)
                .then((response) => {
                    setBookInfos(response.data);
                    console.log(response.data);
                })
                .catch((error) => console.log(error));
            console.log("Heeey !");
        } else {
            setBookInfos(props.route.params.bookInfos);
        }
    }, []);

    if (!bookInfos) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator color="#b1b1b1" size="large" />
            </View>
        );
    }

    return (
        <ScrollView style={styles.bookDetails}>
            <Header
                title={bookInfos.volumeInfo.title}
                navigation={props.navigation}
                isNotMenu
                marginTop={5}
            />

            <View style={styles.imageContainer}>
                <View style={styles.shadowImage}>
                    <Image
                        style={styles.image}
                        source={
                            bookInfos.volumeInfo.imageLinks
                                ? { uri: bookInfos.volumeInfo.imageLinks.thumbnail }
                                : require("../assets/book-cover.png")
                        }
                    />
                </View>
            </View>

            <View style={styles.infosContainer}>
                <Text style={styles.title}>{bookInfos.volumeInfo.title}</Text>
                <Text style={styles.author}>
                    {bookInfos.volumeInfo.authors ? bookInfos.volumeInfo.authors[0] : "No Author"}
                </Text>
            </View>

            <View style={styles.technicalInfos}>
                <View style={styles.technicalInfo}>
                    <Text style={styles.technicalInfoName}>Rating</Text>
                    <Text style={styles.technicalInfoContent}>4.1</Text>
                </View>
                <View style={styles.technicalInfo}>
                    <Text style={styles.technicalInfoName}>Number Of Pages</Text>
                    <Text style={styles.technicalInfoContent}>
                        {bookInfos.volumeInfo.pageCount}
                    </Text>
                </View>
                <View style={styles.technicalInfo}>
                    <Text style={styles.technicalInfoName}>Readers</Text>
                    <Text style={styles.technicalInfoContent}>1287</Text>
                </View>
            </View>
            <View style={styles.bookDescription}>
                <Text style={styles.bookDescriptionText}>{bookInfos.volumeInfo.description}</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <Button
                    style={styles.shareButton}
                    styleText={styles.shareButtonText}
                    onPress={() => {}}
                    withIcon={<Ionicons name="md-share" size={16} color="white" />}
                >
                    Share
                </Button>

                <Button
                    style={styles.addButton}
                    styleText={styles.addButtonText}
                    onPress={() => {}}
                >
                    ADD TO FUTURE READS
                </Button>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    bookDetails: {
        flex: 1,
        marginTop: 25,
    },
    imageContainer: {
        width: "100%",
        height: 220,
        justifyContent: "center",
        flexDirection: "row",
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 5,
    },
    shadowImage: {
        shadowOffset: { width: 10, height: 10 },
        shadowColor: "#000",
        shadowOpacity: 1,
        elevation: 8,
        backgroundColor: "#000",
        width: 140,
        height: 220,
        borderRadius: 5,
    },
    infosContainer: {
        margin: 20,
    },
    title: {
        fontFamily: "poppins-bold",
        fontSize: 18,
        color: Colors.lightTheme.primaryColor,
    },
    author: {
        fontFamily: "poppins-medium",
        fontSize: 14,
        color: Colors.lightTheme.grey,
    },
    technicalInfos: {
        width: "90%",
        height: 80,
        backgroundColor: "#e3e3e9",
        borderRadius: 5,
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    technicalInfo: {
        marginHorizontal: 20,
        alignItems: "center",
    },
    technicalInfoName: {
        fontFamily: "poppins-medium",
        fontSize: 12,
        color: Colors.lightTheme.primaryColor,
        marginTop: 6,
    },
    technicalInfoContent: {
        fontFamily: "poppins-bold",
        fontSize: 12,
        color: "white",
    },
    bookDescription: {
        width: "90%",
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 50,
    },
    bookDescriptionText: {
        fontFamily: "poppins",
        fontSize: 14,
        color: Colors.lightTheme.grey,
    },
    buttonsContainer: {
        flexDirection: "row",
        width: "90%",
        marginLeft: 20,
        justifyContent: "space-between",
        marginBottom: 20,
    },
    shareButton: {
        width: "auto",
        paddingHorizontal: 10,
        backgroundColor: Colors.lightTheme.primaryColor,
    },
    shareButtonText: {
        fontFamily: "poppins-bold",
        fontSize: 12,
    },
    addButton: {
        width: "auto",
        paddingHorizontal: 10,
    },
    addButtonText: {
        fontFamily: "poppins-bold",
        fontSize: 12,
    },
});

export default BookDetailsScreen;
