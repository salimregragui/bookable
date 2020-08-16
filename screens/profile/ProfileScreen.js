import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from "react-native";
import Header from "../../components/UI/Header";
import { Colors } from "../../constants/Colors";
import Button from "../../components/UI/Button";
import { Ionicons } from "@expo/vector-icons";
import BookListItem from "../../components/BooksListItem";

const ProfileScreen = (props) => {
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
        <ScrollView style={styles.bookDetails}>
            <Header title="Profile" navigation={props.navigation} noHeaderRight />

            <View style={styles.imageContainer}>
                <View style={styles.shadowImage}>
                    <Image style={styles.image} source={require("../../assets/32.jpg")} />
                </View>
                <View style={styles.profileInfos}>
                    <Text style={styles.name}>Salim Regragui</Text>
                    <Text style={styles.address}>Rabat, Morocco</Text>
                    <Text style={styles.since}>Member since 2018</Text>
                </View>
            </View>

            <View style={styles.technicalInfos}>
                <View style={styles.technicalInfo}>
                    <Text style={styles.technicalInfoName}>Books Read</Text>
                    <Text style={styles.technicalInfoContent}>214</Text>
                </View>
                <View style={styles.technicalInfo}>
                    <Text style={styles.technicalInfoName}>Books Reviewed</Text>
                    <Text style={styles.technicalInfoContent}>180</Text>
                </View>
                <View style={styles.technicalInfo}>
                    <Text style={styles.technicalInfoName}>Followers</Text>
                    <Text style={styles.technicalInfoContent}>1.20 k</Text>
                </View>
            </View>
            
            <View style={styles.profileData}>
                <Text style={styles.title}>Currently Reading</Text>
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

                <Text style={styles.title}>Favorite Books</Text>
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

                <Text style={styles.title}>Reviewed Books</Text>
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
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    bookDetails: {
        flex: 1,
    },
    imageContainer: {
        width: "100%",
        height: 120,
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 150,
    },
    shadowImage: {
        shadowOffset: { width: 10, height: 10 },
        shadowColor: "#000",
        shadowOpacity: 1,
        elevation: 8,
        backgroundColor: "#000",
        width: 120,
        height: 120,
        borderRadius: 150,
    },
    infosContainer: {
        margin: 20,
    },
    profileInfos: {
        marginLeft: 20,
    },
    name: {
        fontFamily: "poppins-bold",
        fontSize: 18,
        color: Colors.lightTheme.primaryColor,
        height: 28,
    },
    address: {
        fontFamily: "poppins-medium",
        fontSize: 14,
        color: Colors.lightTheme.grey,
        height: 22,
    },
    since: {
        fontFamily: "poppins-medium",
        fontSize: 14,
        color: Colors.lightTheme.secondaryColor,
    },
    technicalInfos: {
        width: "100%",
        height: 80,
        backgroundColor: Colors.lightTheme.secondaryColor,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 30
    },
    technicalInfo: {
        marginHorizontal: 20,
        alignItems: "center",
    },
    technicalInfoName: {
        fontFamily: "poppins-medium",
        fontSize: 12,
        color: 'white',
        marginTop: 6,
    },
    technicalInfoContent: {
        fontFamily: "poppins-bold",
        fontSize: 12,
        color: "white",
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
    profileData: {
        marginLeft: 20,
        marginTop: 30
    }
});

export default ProfileScreen;
