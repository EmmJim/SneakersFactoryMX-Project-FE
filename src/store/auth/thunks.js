import axios from 'axios';
import { setToken } from './authSlice';

export const login = (user = {}) => {
    return async(dispatch, getState) => {

        const {data} = await axios.post(`http://localhost:4000/api/auth/login`, user, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(data.token);
        dispatch(setToken({token: data.token}));
    }
}