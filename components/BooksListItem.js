import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Colors } from "../constants/Colors";

const BooksListItem = (props) => {
    return (
        <View style={props.isVertical ? styles.BooksListItemVertical : styles.BooksListItem}>
            <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
                <View style={props.isVertical ? styles.imageContainerVertical : styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: props.imageUri,
                        }}
                    />
                </View>
            </TouchableOpacity>

            <View style={styles.bookInfos}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.author}>{props.author}</Text>
            </View>

            {props.hasProgress ? <View style={styles.progressBar}>
                <View style={styles.progressBarAdvancement}></View>
            </View> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    BooksListItem: {
        width: 120,
        height: 280,
        marginRight: 30,
    },
    BooksListItemVertical: {
        marginRight: 20,
        marginBottom: 50,
        width: 90,
        height: 180
    },
    imageContainer: {
        width: 120,
        height: 180,
        borderRadius: 5,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: "#000",
        shadowOpacity: 1,
        elevation: 8,
    },  
    imageContainerVertical: {
        width: 90,
        height: 140,
        borderRadius: 5,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: "#000",
        shadowOpacity: 1,
        elevation: 8,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    bookInfos: {
        marginTop: 5
    },
    title: {
        fontFamily: 'poppins-bold',
        fontSize: 12,
        textAlign: 'right'
    },
    author: {
        fontFamily: 'poppins-medium',
        fontSize: 12,
        textAlign: 'right',
        color: Colors.lightTheme.grey
    }, 
    progressBar: {
        width: '100%',
        height: 6,
        backgroundColor: '#e3e3e9',
        borderRadius: 6,
        marginTop: 5
    },
    progressBarAdvancement: {
        height: '100%',
        width: '80%',
        backgroundColor: Colors.lightTheme.secondaryColor,
        borderRadius: 6
    }
});

export default BooksListItem;
