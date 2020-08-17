import { SEARCH } from "../actions/search";

const initialState = {
    searchResult: [],
    recentSearches: [],
    pagination: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH:
            return {
                searchResult: [...action.result],
                recentSearches: [...state.recentSearches, action.query],
                pagination: action.pagination
            }
        default:
            return state;
    }
}