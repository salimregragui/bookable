import React from "react";
import { ScrollView, StyleSheet, Text, View, FlatList } from "react-native";

import Header from "../components/UI/Header";
import { Colors } from "../constants/Colors";
import BookListItem from "../components/BooksListItem";

const HomeScreen = (props) => {
    const data = [
        {
            id: "a19f16r",
            title: "Harry Potter an...",
            author: "J.K. Rowling",
            imageUri:
                "https://res.cloudinary.com/bookbub/image/upload/t_ci_ar_6:9_scaled,f_auto,q_auto,dpr_2,c_scale,w_405/v1553632916/pro_pbid_13746.jpg",
            progress: 80,
        },
        {
            id: "a184",
            title: "Misery",
            author: "Stephen King",
            imageUri:
                "https://images.squarespace-cdn.com/content/v1/50c10ff1e4b0c562855be559/1514490683590-K1RWU8LJJESNGKTZKX0P/ke17ZwdGBToddI8pDm48kCdWaphBi1RHqv-BHcXG04x7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmW5SZw0zY0wEgct1jJcv4nNWqKgbwnRBg75gpDeBBYNvrvajGjNn3NJQPtLnDmAuM/StephenKing_Misery_LazMarquez.jpg?format=1500w",
            progress: 50,
        },
        {
            id: "x955",
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            imageUri: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg",
            progress: 50,
        },
        {
            id: "e54",
            title: "Lancelot",
            author: "Giles Kristian",
            imageUri: "https://images-na.ssl-images-amazon.com/images/I/8158NOT1hOL.jpg",
            progress: 90,
        },
        {
            id: "frefer",
            title: "The Heroes of...",
            author: "Rick Riordan",
            imageUri:
                "https://images-na.ssl-images-amazon.com/images/I/51G8+AKWGWL._SX338_BO1,204,203,200_.jpg",
            progress: 5,
        },
    ];

    const bookListItemClickHandler = (id) => {
        props.navigation.navigate('BookDetails', {
            'bookInfos': {...data[id]}
        });
    }


    return (
        <ScrollView style={styles.home}>
            <Header title="Home" navigation={props.navigation} />

            <View style={styles.homeContent}>
                <Text style={styles.title}>Continue Reading</Text>
                <View style={styles.flatListContainer}>
                    <FlatList
                        style={styles.bookList}
                        showsHorizontalScrollIndicator={false}
                        data={data}
                        renderItem={(itemData) => (
                            <BookListItem
                                title={itemData.item.title}
                                author={itemData.item.author}
                                imageUri={itemData.item.imageUri}
                                progress={itemData.item.progress}
                                hasProgress
                                onPress={() => {bookListItemClickHandler(itemData.index)}}
                            />
                        )}
                        horizontal={true}
                    />
                </View>

                <Text style={styles.title}>Trending Books</Text>
                <View style={styles.flatListContainer}>
                    <FlatList
                        style={styles.bookList}
                        showsHorizontalScrollIndicator={false}
                        data={data}
                        renderItem={(itemData) => (
                            <BookListItem
                                title={itemData.item.title}
                                author={itemData.item.author}
                                imageUri={itemData.item.imageUri}
                                onPress={() => {bookListItemClickHandler(itemData.index)}}
                            />
                        )}
                        horizontal={true}
                    />
                </View>

                <Text style={styles.title}>Best Of Fantasy</Text>
                <View style={styles.flatListContainer}>
                    <FlatList
                        style={styles.bookList}
                        showsHorizontalScrollIndicator={false}
                        data={data}
                        renderItem={(itemData) => (
                            <BookListItem
                                title={itemData.item.title}
                                author={itemData.item.author}
                                imageUri={itemData.item.imageUri}
                                onPress={() => {}}
                                onPress={() => {bookListItemClickHandler(itemData.index)}}
                            />
                        )}
                        horizontal={true}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    home: {
        flex: 1,
    },
    homeContent: {
        flex: 1,
        marginLeft: 20,
        marginTop: 10,
    },
    title: {
        fontFamily: "poppins-bold",
        color: Colors.lightTheme.primaryColor,
        fontSize: 18,
    },
    bookList: {
        marginTop: 5,
    },
    flatListContainer: {
        height: 250,
        marginBottom: 30,
    },
});
export default HomeScreen;
