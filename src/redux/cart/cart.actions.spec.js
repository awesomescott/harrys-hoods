import CartActionTypes from './cart.types';
import {
    addItem,
    clearCart,
    clearItemFromCart,
    removeItem,
    toggleCartHidden,
} from './cart.actions';

// Add item action.
describe('addItem action', () => {
    it('should create the addItem action', () => {
        const mockItem = {
            id: 1,
        };
        const action = addItem(mockItem);

        expect(action.type).toEqual(CartActionTypes.ADD_ITEM);
        expect(action.payload).toEqual(mockItem);
    });
});

// Clear cart action.
describe('clearCart action', () => {
    it('should create the clearCart action', () => {
        expect(clearCart().type).toEqual(CartActionTypes.CLEAR_CART);
    });
});

// Clear item from cart action.
describe('clearItemFromCart action', () => {
    it('should create the clearItemFromCart action', () => {
        const mockItem = {
            id: 1,
        };
        const action = clearItemFromCart(mockItem);

        expect(action.type).toEqual(CartActionTypes.CLEAR_ITEM_FROM_CART);
        expect(action.payload).toEqual(mockItem);
    });
});

// Remove item action.
describe('removeItem action', () => {
    it('should create the removeItem action', () => {
        const mockItem = {
            id: 1,
        };
        const action = removeItem(mockItem);

        expect(action.type).toEqual(CartActionTypes.REMOVE_ITEM);
        expect(action.payload).toEqual(mockItem);
    });
});

// Toggle cart action.
describe('toggleCartHidden action', () => {
    it('should create the toggleCartHidden action', () => {
        expect(toggleCartHidden().type).toEqual(CartActionTypes.TOGGLE_CART_HIDDEN);
    });
});
