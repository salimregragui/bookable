import { CONFIG } from "../../constants/Config";
import axios from "axios";

export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";

export const login = (email, password) => {
    return (dispatch) => {
        axios.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${CONFIG.key}`,
            JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true,
            }),
            {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )
        .then (response => {
            console.log(response);

            dispatch({
                type: LOGIN,
                userData: {
                    email: email,
                    token: token,
                    username: username,
                    userId: userId,
                },
            });
        })
        .catch(error => {
            console.log(error.response.data.error.errors[0].message);
        });
    };
};
