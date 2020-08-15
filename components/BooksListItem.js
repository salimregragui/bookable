import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Colors } from "../constants/Colors";

const BooksListItem = (props) => {
    return (
        <View style={styles.BooksListItem}>
            <TouchableOpacity activeOpacity={0.8}>
                <Image
                    style={styles.image}
                    source={{
                        uri: props.imageUri,
                    }}
                />
            </TouchableOpacity>

            <View style={styles.BookInfos}>
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
        marginRight: 30,
        width: 120,
        height: 250,
 
    },
    image: {
        width: 120,
        height: 180,
        borderRadius: 5
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
        borderRadius: 6
    },
    progressBarAdvancement: {
        height: '100%',
        width: '80%',
        backgroundColor: Colors.lightTheme.secondaryColor,
        borderRadius: 6
    }
});

export default BooksListItem;
