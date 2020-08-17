import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as searchActions from "../../store/actions/search";

import { Colors } from "../../constants/Colors";

import Header from "../../components/UI/Header";
import BookListItem from "../../components/BooksListItem";
import Button from "../../components/UI/Button";

const ResultScreen = (props) => {
    const results = useSelector((state) => state.search.searchResult);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchActions.search(props.route.params.query));
    }, [dispatch]);

    const bookClickHandler = (index) => {
        props.navigation.navigate('BookDetails', { bookId: index});
    }

    return (
        <ScrollView style={styles.result}>
            <Header title="Search Result" navigation={props.navigation} isNotMenu noHeaderRight />

            <View style={styles.content}>
                {results.map((result, index) => {
                    return (
                        <BookListItem
                            key={index}
                            title={result.volumeInfo.title}
                            author={result.volumeInfo.authors ? result.volumeInfo.authors[0] : 'No Author'}
                            imageUri={result.volumeInfo.imageLinks ? result.volumeInfo.imageLinks.thumbnail : null}
                            onPress={() => {
                                bookClickHandler(result.id)
                            }}
                            isVertical
                        />
                    );
                })}
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
});
export default ResultScreen;
