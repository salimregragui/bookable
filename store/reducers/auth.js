import { LOGIN, SIGNUP } from "../actions/auth";

const initialState = {
    token: null,
    userId: null,
    userData: null
}

export default (state = initialState, action) => {
    switch (action.type){
        case SIGNUP:
            return {
                ...state,
                token: action.userData.token,
                userId: action.userData.userId,
                userData: {
                    ...state.userData,
                    username: action.userData.username,
                    email: action.userData.email
                }
            }
        case LOGIN:
            return {
                ...state,
                token: action.userData.token,
                userId: action.userData.userId,
                userData: {
                    ...state.userData,
                    username: action.userData.username,
                    email: action.userData.email
                }
            }
        default:
            return state;
    }
}