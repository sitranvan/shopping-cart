import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        showMiniCart: false,
        cartItems: []
    },

    reducers: {
        showMiniCart(state) {
            state.showMiniCart = true
        },
        hideMiniCart(state) {
            state.showMiniCart = false
        },
        addToCart(state, action) {
            const newItem = action.payload
            const index = state.cartItems.findIndex(x => x.id === newItem.id)

            if (index >= 0) {
                state.cartItems[index].quanlity += newItem.quanlity
            } else {
                state.cartItems.push(newItem)
            }
        },
        removeFromCart(state, action) {
            const index = action.payload
            state.cartItems = state.cartItems.filter(x => Number(x.id) !== index)

        },
        setQuanlity(state, action) {
            const { id, quanlity } = action.payload
            const index = state.cartItems.findIndex(x => Number(x.id) === Number(id))
            if (index >= 0) {
                state.cartItems[index].quanlity = quanlity
            }
        },
        
    }
})

const { actions, reducer } = cartSlice
export const { showMiniCart, hideMiniCart, addToCart, removeFromCart, setQuanlity } = actions
export default reducer