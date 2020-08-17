import React, { useState, useRef } from "react";
import { StyleSheet, View, FlatList, ScrollView, TouchableOpacity, Text } from "react-native";
import { useSelector } from "react-redux";
import { Modalize } from "react-native-modalize";
import { AntDesign } from "@expo/vector-icons";

import { Colors } from "../../constants/Colors";

import Header from "../../components/UI/Header";
import BookListItem from "../../components/BooksListItem";
import Input from "../../components/UI/Input";
import TitleBar from "../../components/UI/TitleBar";
import Button from "../../components/UI/Button";

const FilterItem = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.4} onPress={props.onPress}>
            <View style={props.active ? styles.filterItemActive : styles.filterItem}>
                <Text style={props.active ? styles.filterItemActiveText : styles.filterItemText}>
                    {props.name}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const SearchItem = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.4} onPress={props.onPress}>
            <View style={styles.searchItem}>
                <TouchableOpacity activeOpacity={0.4} onPress={props.onDelete}>
                    <View style={styles.delete}>
                        <AntDesign
                            name="minuscircleo"
                            size={24}
                            color={Colors.lightTheme.secondaryColor}
                        />
                    </View>
                </TouchableOpacity>
                <Text style={styles.searchItemText}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    );
};

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

    const dataSearch = [
        {
            id: "Harry Potter",
        },
        {
            id: "Lord Of The Ring",
        },
        {
            id: "It Stephen King",
        },
        {
            id: "Cooking Book",
        },
        {
            id: "Game Of Thrones",
        },
        {
            id: "Design",
        },
        {
            id: "UX",
        },
    ];

    const [search, setSearch] = useState("");
    const [recentSearches, setRecentSearches] = useState(dataSearch);
    const [searchTimeOut, setSearchTimeOut] = useState();
    const [filters, setFilters] = useState([
        {
            id: "Author",
            selected: false,
        },
        {
            id: "Title",
            selected: false,
        },
        {
            id: "ISBN",
            selected: false,
        },
        {
            id: "Publisher",
            selected: false,
        },
        {
            id: "Category",
            selected: false,
        },
        {
            id: "LCCN",
            selected: false,
        },
        {
            id: "OCLN",
            selected: false,
        },
    ]);

    const searchChangeHandler = (text) => {
        setSearch(text);

        if (searchTimeOut) {
            clearTimeout(searchTimeOut);
        }

        if (text.trim() !== "") {
            setSearchTimeOut(
                setTimeout(() => {
                    setSearchTimeOut(null);
                    props.navigation.navigate("Result", {
                        query: text.trim(),
                    });
                    console.log(text + "Search");
                }, 1000)
            );
        }
    };

    const bookListItemClickHandler = (id) => {
        props.navigation.navigate("BookDetails", {
            bookInfos: { ...doctoredData[id] },
        });
    };

    const handleFilterChange = (id) => {
        let newFilters = [...filters];
        let filterToChange = newFilters[id];
        filterToChange.selected = !filterToChange.selected;

        setFilters(newFilters);
    };

    const selectAllFiltersHandler = () => {
        let newFilters = [...filters];
        newFilters = newFilters.map((filter) => {
            return {
                id: filter.id,
                selected: true,
            };
        });

        setFilters(newFilters);
    };

    const clearAllFiltersHandler = () => {
        let newFilters = [...filters];
        newFilters = newFilters.map((filter) => {
            return {
                id: filter.id,
                selected: false,
            };
        });

        setFilters(newFilters);
    };

    const deleteRecentSearchHandler = (id) => {
        let newSearches = [...recentSearches];
        newSearches.splice(id, 1);

        setRecentSearches(newSearches);
    };

    const modalizeRef = useRef(Modalize);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    let recentSearchesContent = (
        <View>
            <TitleBar
                title="Your Recent Searches"
                hasRight
                rightText="See All"
                rightClick={() => {
                    props.navigation.navigate("Recent");
                }}
            />
            <View style={styles.recentSearchesContainer}>
                {recentSearches.map((search, index) => {
                    return (
                        <SearchItem
                            key={search.id}
                            name={search.id}
                            onPress={() => {}}
                            onDelete={() => {
                                console.log(index);
                                deleteRecentSearchHandler(index);
                            }}
                        />
                    );
                })}
            </View>
        </View>
    );

    if (recentSearches.length === 0) {
        recentSearchesContent = null;
    }

    return (
        <View style={styles.searchContainer}>
            <Modalize ref={modalizeRef} adjustToContentHeight>
                <View style={styles.filterModal}>
                    <Text style={styles.filterTitle}>Filters</Text>
                    <Text style={styles.filterSubTitle}>
                        Click on an item to filter by it. You can have multiple filters on your
                        searches.
                    </Text>

                    <View style={styles.actionButtons}>
                        <Button
                            style={styles.actionButton}
                            styleText={styles.actionButtonText}
                            onPress={clearAllFiltersHandler}
                        >
                            Clear All
                        </Button>
                        <Button
                            style={styles.actionButton}
                            styleText={styles.actionButtonText}
                            onPress={selectAllFiltersHandler}
                        >
                            Select All
                        </Button>
                    </View>

                    <View style={styles.filtersContainer}>
                        {filters.map((filter, index) => {
                            return (
                                <FilterItem
                                    key={filter.id}
                                    name={filter.id}
                                    active={filter.selected}
                                    onPress={() => {
                                        handleFilterChange(index);
                                    }}
                                />
                            );
                        })}
                    </View>
                </View>
            </Modalize>

            <ScrollView style={styles.search}>
                <Header title="Search" navigation={props.navigation} marginTop={5}/>
                <View style={styles.searchBarContainer}>
                    <Input
                        placeholder="Search Here..."
                        placeholderTextColor={Colors.lightTheme.grey}
                        value={search}
                        onChangeText={searchChangeHandler}
                        autoCapitalize="none"
                        withIcon
                        iconName="ios-search"
                        style={styles.inputStyle}
                    />

                    <Button style={styles.filters} onPress={onOpen}>
                        <AntDesign
                            name="filter"
                            size={24}
                            color={Colors.lightTheme.secondaryColor}
                        />
                    </Button>
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

                    {recentSearchesContent}

                    <TitleBar
                        title="Last Community Searches"
                        hasRight
                        rightText="More"
                        rightClick={() => {
                            props.navigation.navigate("LastCommunity");
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
        </View>
    );
};

const styles = StyleSheet.create({
    search: {
        flex: 1,
    },
    searchBarContainer: {
        width: "90%",
        marginLeft: 20,
        flexDirection: "row",
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
        marginTop: 20,
    },
    filters: {
        width: 50,
        height: 50,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: Colors.lightTheme.secondaryColor,
        marginLeft: 6,
    },
    inputStyle: {
        width: "85%",
    },
    filterModal: {
        margin: 20,
    },
    filterTitle: {
        fontFamily: "poppins-bold",
        color: Colors.lightTheme.primaryColor,
        fontSize: 16,
    },
    filterSubTitle: {
        fontFamily: "poppins-medium",
        color: Colors.lightTheme.grey,
        fontSize: 12,
    },
    filterItem: {
        borderWidth: 1,
        borderColor: Colors.lightTheme.secondaryColor,
        borderRadius: 5,
        marginRight: 10,
        marginBottom: 15,
        width: 110,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    filterItemText: {
        fontFamily: "poppins-medium",
        color: Colors.lightTheme.secondaryColor,
        marginTop: 5,
    },
    filterItemActive: {
        borderWidth: 1,
        borderColor: Colors.lightTheme.secondaryColor,
        backgroundColor: Colors.lightTheme.secondaryColor,
        borderRadius: 5,
        marginRight: 10,
        marginBottom: 15,
        width: 110,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    filterItemActiveText: {
        fontFamily: "poppins-medium",
        color: "white",
        marginTop: 5,
    },
    filtersContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    actionButtons: {
        flexDirection: "row",
        marginBottom: 10,
    },
    actionButton: {
        width: "auto",
        height: "auto",
        backgroundColor: "white",
        marginRight: 20,
    },
    actionButtonText: {
        color: Colors.lightTheme.primaryColor,
    },
    searchItem: {
        borderWidth: 1,
        borderColor: Colors.lightTheme.secondaryColor,
        borderRadius: 5,
        marginRight: 10,
        marginBottom: 15,
        width: "auto",
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingHorizontal: 10,
    },
    searchItemText: {
        fontFamily: "poppins-medium",
        color: Colors.lightTheme.secondaryColor,
        marginTop: 5,
    },
    recentSearchesContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    delete: {
        marginRight: 10,
    },
    searchContainer: {
        flex: 1,
        marginTop: 25
    }
});

export default SearchScreen;
