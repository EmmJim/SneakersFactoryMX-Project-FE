import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './cart'
import { authSlice } from './auth'

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        auth: authSlice.reducer
    },
})