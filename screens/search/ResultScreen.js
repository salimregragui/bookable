import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView, ActivityIndicator, AsyncStorage } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as searchActions from "../../store/actions/search";

import { Colors } from "../../constants/Colors";

import Header from "../../components/UI/Header";
import BookListItem from "../../components/BooksListItem";
import Button from "../../components/UI/Button";

const ResultScreen = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [currentPagination, setCurrentPagination] = useState(0);

    const results = useSelector((state) => state.search.searchResult);

    const dispatch = useDispatch();

    useEffect(() => {
        async function getSearch() {
            if (props.route.params.query) {
                const userStats = await AsyncStorage.getItem("userStats");
                let userStatsTransformed = JSON.parse(userStats);
    
                if (userStatsTransformed) {
                    const newUserStats = { ...userStatsTransformed };
                    if (userStatsTransformed.recentSearches) {
                        newUserStats.recentSearches = [
                            ...newUserStats.recentSearches,
                            { 
                                id: props.route.params.query + '~' + Math.floor(Math.random()*90000) + 10000
                            },
                        ];
                    } else {
                        newUserStats.recentSearches = [{ id: props.route.params.query + '~' + Math.floor(Math.random()*90000) + 10000 }];
                    }
                    userStatsTransformed = newUserStats;
                } else {
                    userStatsTransformed = {
                        recentSearches: [
                            {
                                id: props.route.params.query + '~' + Math.floor(Math.random()*90000) + 10000,
                            },
                        ],
                    };
                }
    
                await AsyncStorage.setItem(
                    "userStats",
                    JSON.stringify(userStatsTransformed)
                );

                setIsLoading(true);
                dispatch(searchActions.search(props.route.params.query, 1, true));
                setIsLoading(false);
            }
        }

        getSearch();
    }, [dispatch, setIsLoading]);

    useEffect(() => {
        setIsLoading(true);
        dispatch(searchActions.search(props.route.params.query, currentPagination));
        setIsLoading(false);
    }, [dispatch, currentPagination, setIsLoading]);

    const bookClickHandler = (index) => {
        props.navigation.navigate("BookDetails", { bookId: index });
    };

    const paginationHandler = (type) => {
        dispatch(searchActions.paginationChange(type));

        if (type === "next") {
            setCurrentPagination(currentPagination + 10);
        } else {
            if (currentPagination === 0) {
                return;
            } else {
                setCurrentPagination(currentPagination - 10);
            }
        }
    };

    return (
        <ScrollView style={styles.result}>
            <Header
                title={`Search Result (${
                    currentPagination === 0 ? currentPagination + 1 : currentPagination + 1
                } - ${currentPagination + 10})`}
                navigation={props.navigation}
                isNotMenu
                noHeaderRight
            />

            <View style={styles.paginationButtons}>
                <Button
                    style={styles.pagination}
                    styleText={styles.paginationText}
                    onPress={() => {
                        paginationHandler("previous");
                    }}
                >
                    Previous
                </Button>

                <Button
                    style={styles.pagination}
                    styleText={styles.paginationText}
                    onPress={() => {
                        paginationHandler("next");
                    }}
                >
                    Next
                </Button>
            </View>

            <View style={styles.content}>
                {!isLoading ? (
                    results.map((result, index) => {
                        return (
                            <BookListItem
                                key={index}
                                title={result.volumeInfo.title}
                                author={
                                    result.volumeInfo.authors
                                        ? result.volumeInfo.authors[0]
                                        : "No Author"
                                }
                                imageUri={
                                    result.volumeInfo.imageLinks
                                        ? result.volumeInfo.imageLinks.thumbnail
                                        : null
                                }
                                onPress={() => {
                                    bookClickHandler(result.id);
                                }}
                                isVertical
                            />
                        );
                    })
                ) : (
                    <ActivityIndicator size="small" color="#b1b1b1" />
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    result: {
        flex: 1,
    },
    content: {
        flex: 1,
        marginLeft: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    paginationButtons: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginLeft: 30,
        justifyContent: "space-between",
        marginBottom: 10,
    },
    pagination: {
        width: 90,
        height: "auto",
        marginRight: 30,
        paddingVertical: 3,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: Colors.lightTheme.secondaryColor,
    },
    paginationText: {
        color: Colors.lightTheme.secondaryColor,
    },
});
export default ResultScreen;
