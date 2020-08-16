import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Header from "../../components/UI/Header";
import { Colors } from "../../constants/Colors";
import BookListItem from "../../components/BooksListItem";
import Input from "../../components/UI/Input";

const FavoritesScreen = (props) => {
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
    const [doctoredData, setDoctoredData] = useState(data);

    const searchChangeHandler = (text) => {
        setSearch(text);

        if (text.trim() !== '') {
            const newData = data.filter(book => {
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
        <FlatList
            numColumns = {3}
            ListHeaderComponent={
                <>
                    <Header
                        title="Favorite Books"
                        navigation={props.navigation}
                        noHeaderRight
                        isNotMenu
                    />
                    <View style={styles.searchBarContainer}>
                        <Input
                            placeholder="Search In Your Favorites"
                            placeholderTextColor={Colors.lightTheme.grey}
                            value={search}
                            onChangeText={searchChangeHandler}
                            autoCapitalize='none'
                            withIcon
                            iconName='ios-search'
                        />
                    </View>
                </>
            }
            style={styles.bookList}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={doctoredData}
            columnWrapperStyle={styles.row}
            renderItem={(itemData) => (
                <View style={styles.bookItemStyle}>
                    <BookListItem
                        title={itemData.item.title}
                        author={itemData.item.author}
                        imageUri={itemData.item.imageUri}
                        progress={itemData.item.progress}
                        hasProgress
                        isVertical
                        onPress={() => {
                            bookListItemClickHandler(itemData.index);
                        }}
                    />
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    searchBarContainer: {
        width: "90%",
        marginLeft: 20,
        marginBottom: 10
    },
    flatListContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    bookItemStyle: {
        marginLeft: 20
    },
    row: {
        width: '100%',
        justifyContent: "space-around"
      }
});

export default FavoritesScreen;
