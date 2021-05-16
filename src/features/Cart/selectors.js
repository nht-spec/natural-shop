import { createSelector } from '@reduxjs/toolkit';

export const cartItemsSelector = (state) => state.cart.cartItems;

export const cartItemsCountSelector = createSelector(cartItemsSelector, (cartItems) =>
 cartItems.reduce((count, item) => count + item.quantity, 0)
);

export const cartTotalSelector = createSelector(cartItemsSelector, (cartItems) =>
 cartItems.reduce((total, item) =>  total + item.product.priceProducts * item.quantity, 0)
);