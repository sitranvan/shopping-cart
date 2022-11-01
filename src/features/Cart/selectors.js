import { createSelector } from "@reduxjs/toolkit";

export const cartItemsSelector = (state) => state.cart.cartItems

export const cartItemCountSelector = createSelector(cartItemsSelector, (cartItems) => {
    return cartItems.length
})

export const cartItemTotalSelector = createSelector(cartItemsSelector, (cartItems) => {
    return cartItems.reduce((total, item) => total + (item.product.salePrice * item.quanlity), 0)
})


