export const SEARCH = 'SEARCH';
import axios from 'axios';

export const search = (searchQuery) => {
    return dispatch => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`)
        .then(response => {
            const items = response.data.items.slice(0, 10);
            console.log(items);
            return items;
        })
        .then(slicedData => {
            dispatch({
                type: SEARCH,
                result: slicedData,
                query: searchQuery,
                pagination: 1
            })
        })
        .catch(error => console.log(error));
    }
}