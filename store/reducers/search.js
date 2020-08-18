import { SEARCH, PAGINATION_CHANGE, GET_RECENT_SEARCHES } from "../actions/search";

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
                pagination: action.pagination
            }
        case PAGINATION_CHANGE:
            let newPagination = action.direction === 'next' ? state.pagination + 1 : state.pagination - 1;

            if (newPagination < 0) {
                newPagination = 0;
            }

            return {
                ...state,
                pagination: newPagination
            }
        case GET_RECENT_SEARCHES:
            return {
                ...state,
                recentSearches: [...action.recentSearches]
            }
        default:
            return state;
    }
}