export const addItemToCart = (cartItems, cartItemToAdd) => {
    // Find if the item exist in cart
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );

    // If item exist in cart, then increase the quantity value
    if (existingCartItem){
        //We want a new array so react can re-render the cart component
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    // If item not exist in cart, the add the item with the quantity of 1
    return [ ...cartItems, { ...cartItemToAdd, quantity: 1 }];
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1){
        //Keep the ones whose id doesn't cartItemToRemove.id
        return cartItems.filter(cartItem => cartItem.id  !== cartItemToRemove.id)
    }

    return cartItems.map(cartItem =>
            cartItem.id === cartItemToRemove.id
                ? { ...cartItem, quantity: cartItem.quantity -1 }
                : cartItem
    );


}