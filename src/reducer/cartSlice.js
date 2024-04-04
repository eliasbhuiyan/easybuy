import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: localStorage.getItem("product_cart") ? JSON.parse(localStorage.getItem("product_cart")) :  null,
    },
    reducers: {
        cartList: (state, actions) => {
            state.cartList = actions.payload;
        },
    },
})

export const { cartList } = cartSlice.actions

export default cartSlice.reducer