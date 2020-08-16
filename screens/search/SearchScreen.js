import React, { useState } from "react";
import { StyleSheet, View, FlatList, ScrollView } from "react-native";
import Header from "../../components/UI/Header";
import { Colors } from "../../constants/Colors";
import BookListItem from "../../components/BooksListItem";
import Input from "../../components/UI/Input";
import TitleBar from "../../components/UI/TitleBar";

const SearchScreen = (props) => {
    const data = [
        {
            id: "a19f16r",
            title: "Harry Potte...",
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
            title: "The Heroes...",
            author: "Rick Riordan",
            imageUri:
                "https://images-na.ssl-images-amazon.com/images/I/51G8+AKWGWL._SX338_BO1,204,203,200_.jpg",
            progress: 5,
        },
    ];

    const [search, setSearch] = useState("");

    const searchChangeHandler = (text) => {
        setSearch(text);

        if (text.trim() !== "") {
            const newData = data.filter((book) => {
                return book.title.toLowerCase().includes(text.toLowerCase().trim());
            });

            setDoctoredData(newData);
        } else {
            setDoctoredData(data);
        }
    };

    const bookListItemClickHandler = (id) => {
        props.navigation.navigate("BookDetails", {
            bookInfos: { ...doctoredData[id] },
        });
    };

    return (
        <ScrollView style={styles.search}>
            <Header title="Search" navigation={props.navigation} />
            <View style={styles.searchBarContainer}>
                <Input
                    placeholder="Search Here..."
                    placeholderTextColor={Colors.lightTheme.grey}
                    value={search}
                    onChangeText={searchChangeHandler}
                    autoCapitalize="none"
                    withIcon
                    iconName="ios-search"
                />
            </View>

            <View style={styles.content}>
                <TitleBar
                    title="Popular Searches"
                    hasRight
                    rightText="All"
                    rightClick={() => {
                        props.navigation.navigate("CurrentlyReading");
                    }}
                />
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
                                onPress={() => {
                                    bookListItemClickHandler(itemData.index);
                                }}
                            />
                        )}
                        horizontal={true}
                    />
                </View>

                <TitleBar
                    title="Last Community Searches"
                    hasRight
                    rightText="More"
                    rightClick={() => {
                        props.navigation.navigate("CurrentlyReading");
                    }}
                />
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
                                onPress={() => {
                                    bookListItemClickHandler(itemData.index);
                                }}
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
    search: {
        flex: 1,
    },
    searchBarContainer: {
        width: "90%",
        marginLeft: 20,
    },
    flatListContainer: {
        height: 250,
        marginBottom: 30,
    },
    bookItemStyle: {
        marginLeft: 20,
    },
    content: {
        marginLeft: 20,
        marginTop: 20
    }
});

export default SearchScreen;
