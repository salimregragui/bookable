import { CONFIG } from "../../constants/Config";
import axios from "axios";

export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";

export const signUp = (email, password, username) => {
    return (dispatch) => {
        axios
            .post(
                `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${CONFIG.key}`,
                JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true,
                }),
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((response) => {
                console.log(response.data);
                axios.post(
                    `${CONFIG.firebase}/users/${response.data.localId}.json?auth=${response.data.idToken}`,
                    JSON.stringify({
                        username: username,
                        numberOfBooks: 0,
                    }),
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then(addUser => {
                    console.log('--------------------------------------------------------------');
                    console.log(addUser.data);
                    dispatch({
                        type: SIGNUP,
                        userData: {
                            token: response.data.idToken,
                            userId: response.data.localId,
                            username: username,
                            email: response.data.email
                        }
                    })
                })
                .catch(error => {
                    console.log(error);
                });
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
};

export const login = (email, password) => {
    return (dispatch) => {
        axios
            .post(
                `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${CONFIG.key}`,
                JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true,
                }),
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((res) => {
                console.log(res.data);
                axios.get(`${CONFIG.firebase}/users/${res.data.localId}.json?auth=${res.data.idToken}`)
                .then(response => {
                    const userInfos = response.data[Object.keys(response.data)[0]];
                    console.log(userInfos);

                    dispatch({
                        type: LOGIN,
                        userData: {
                            email: res.data.email,
                            token: res.data.idToken,
                            userId: res.data.localId,
                            username: userInfos.username
                        },
                    });
                })
                .catch(error => console.log(error));
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
