import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload.token;
        },
        resetToken: (state) => {
            state.token = null;
        }
    }
});


// Action creators are generated for each case reducer function
export const { setToken, resetToken } = authSlice.actions;