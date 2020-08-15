import { LOGIN } from "../actions/auth";

const initialState = {
    token: null,
    userId: null,
    userData: null
}

export default (state = initialState, action) => {
    switch (action.type){
        case LOGIN:
            return {
                ...state
            }
        default:
            return state;
    }
}