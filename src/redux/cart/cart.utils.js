/**
 * Add an item to the cart.
 * @param {Array} cartItems - list of cart items.
 * @param {Object} cartItemToAdd - the item to add to the cart.
 * @return {Array}
 */
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    // If the item already exists in the cart, increase the quantity by 1.
    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

/**
 * Remove an item from the cart.
 * @param {Array} cartItems - list of cart items.
 * @param {Object} cartItemToRemove - the item to remove from the cart.
 * @return {Array}
 */
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    // If only one item exists in the cart, remove it completely.
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};
