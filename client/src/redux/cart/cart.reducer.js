import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    cartItems: [],
    cartHidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            };

        case CartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: [],
            };

        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            };

        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };

        case CartActionTypes.SET_CART_FROM_FIREBASE:
            return {
                ...state,
                cartItems: action.payload,
            };

        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                cartHidden: !state.cartHidden,
            };    
    
        default:
            return state;
    }
};

export default cartReducer;
