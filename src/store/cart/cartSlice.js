import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        setCartItems: (state, action) => {
            state.cart.push(action.payload);
        },
        handleResetCart: (state) => {
            state.cart = [];
        }
    }
});


// Action creators are generated for each case reducer function
export const { setCartItems, handleResetCart } = cartSlice.actions;