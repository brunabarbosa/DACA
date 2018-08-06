import axios from 'axios';

import { GET_ERRORS, SET_CURRENT_USER } from './types'

// Register User
export const registerUser = (userData, history) => dispatch => {
    axios.post('/users', userData)
        .then(res => history.push('/login'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            }) 
        );
};

// Login - Get User Token
export const loginUser = (userData, history) => dispatch => {
    axios.post('/users/login', userData)
        .then(res => {
            history.push('/dashboard');
        }).catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Set logged in user
export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
};