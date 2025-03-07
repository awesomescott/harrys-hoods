import CartActionTypes from './cart.types';
import cartReducer from './cart.reducer';

const initialState = {
    cartHidden: true,
    cartItems: [],
};

describe('cartReducer', () => {

    // Return initial state.
    it('should return the initial state', () => {
        expect(cartReducer(undefined, {})).toEqual(initialState);
    });

    // Add item.
    it('should increase the quantity of matching item by 1 if addItem action is fired with the same item as the payload', () => {
       const mockItem = {
           id: 1,
           quantity: 3,
       };
       const mockPrevState = {
           cartHidden: true,
           cartItems: [mockItem, { id: 2, quantity: 1 }],
       };

       expect(
           cartReducer(mockPrevState, {
               type: CartActionTypes.ADD_ITEM,
               payload: mockItem,
           }).cartItems[0].quantity
       )
       .toBe(4);
    });

    // Clear cart
    it('should clear the cart if clearCart action is fired', () => {
        const mockPrevState = {
            cartHidden: true,
            cartItems: [{ id: 1, quantity: 3 }, { id: 2, quantity: 1 }],
        };

        expect(
            cartReducer(mockPrevState, {
                type: CartActionTypes.CLEAR_CART,
            }).cartItems.length
        )
        .toBe(0);
    });

    // Clear cart item.
    it('should remove an item from the cart if clearItemFromCart action is fired with payload of existing item', () => {
        const mockItem = {
            id: 1,
            quantity: 3,
        };
        const mockPrevState = {
            cartHidden: true,
            cartItems: [mockItem, { id: 2, quantity: 1, }],
        };

        expect(
            cartReducer(mockPrevState, {
                type: CartActionTypes.CLEAR_ITEM_FROM_CART,
                payload: mockItem,
            }).cartItems.includes(item => item.id === 1)
        )
        .toBe(false);
    });

    // Remove item.
    it('should decrease the quantity of matching item by 1 if removeItem action fired with same item as payload', () => {
        const mockItem = {
            id: 1,
            quantity: 3,
        };
        const mockPrevState = {
            cartHidden: true,
            cartItems: [mockItem, { id: 2, quantity: 1, }],
        };

        expect(
            cartReducer(mockPrevState, {
                type: CartActionTypes.REMOVE_ITEM,
                payload: mockItem,
            }).cartItems[0].quantity
        )
        .toBe(2);
    });

    // Toggle cart.
    it('should toggle cartHidden with toggleCartHidden action', () => {
        expect(
            cartReducer(
                initialState,
                {
                    type: CartActionTypes.TOGGLE_CART_HIDDEN
                })
                .cartHidden
        )
        .toBe(false);
    });
});
