import { createSelector } from "reselect";

//Input Selector
const selectCart = state => state.cart;

// This type uses the Input selector and create Selector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems // function that returns the value we want out of a selector
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
            accumalatedQuantity + cartItem.quantity,
        0
    )
);