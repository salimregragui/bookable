export const SEARCH = 'SEARCH';
export const PAGINATION_CHANGE = 'PAGINATION_CHANGE';
export const GET_RECENT_SEARCHES = 'GET_RECENT_SEARCHES';

import axios from 'axios';
import { AsyncStorage } from 'react-native';

export const search = (searchQuery, pagination = 1, withGetSearches = false) => {
    return dispatch => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=10&startIndex=${pagination}&country=US`)
        .then(async response => {
            dispatch({
                type: SEARCH,
                result: response.data.items,
                query: searchQuery,
                pagination: 0
            })
            
            if (withGetSearches) {
                console.log('get recent searches');
                const recentSearches = await AsyncStorage.getItem('userStats');
                const recentSearchesTransformed = JSON.parse(recentSearches);

                if (recentSearchesTransformed) {
                    if (recentSearchesTransformed.recentSearches) {
                        dispatch({
                            type: GET_RECENT_SEARCHES,
                            recentSearches: recentSearchesTransformed.recentSearches
                        })
                    } else {
                        dispatch({
                            type: GET_RECENT_SEARCHES,
                            recentSearches: []
                        })
                    }
                }
            }
        })
        .catch(error => console.log(error.response));
    }
}

export const paginationChange = (direction) => {
    return {
        type: PAGINATION_CHANGE,
        direction: direction
    }
}

export const getRecentSearches = () => {
    return async dispatch => {
        const recentSearches = await AsyncStorage.getItem('userStats');
        const recentSearchesTransformed = JSON.parse(recentSearches);

        console.log('new recentSearches');
        console.log(recentSearchesTransformed);

        console.log(recentSearchesTransformed);
        if (recentSearchesTransformed) {
            if (recentSearchesTransformed.recentSearches) {
                console.log('changed recent : ');
                console.log(recentSearchesTransformed.recentSearches)
                dispatch({
                    type: GET_RECENT_SEARCHES,
                    recentSearches: recentSearchesTransformed.recentSearches
                })
            } else {
                console.log('changed recent : to null');
                dispatch({
                    type: GET_RECENT_SEARCHES,
                    recentSearches: []
                })
            }
        }
    }
}