import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

// Components
import CartItem from '../cart-item/cart-item.component';

// Redux actions
import { clearItemFromCart, toggleCartHidden } from '../../redux/cart/cart.actions';

// Redux selectors
import { selectCartItems } from '../../redux/cart/cart.selectors';

// Styles
import {
    CartDropdownButton,
    CartDropdownContainer,
    CartItemsContainer,
    CartItemsWrapper,
    EmptyMessageContainer,
} from './cart-dropdown.styles';

/**
 * Display the cart drop-down menu.
 * The drop-down menu displays a list of cart items and the 'Go to Checkout' button
 */
export const CartDropdown = ({ cartItems, clearItem, history, toggleCart }) => (
    <CartDropdownContainer>
        { /* Cart items */ }
        <CartItemsWrapper>
            {
                cartItems.length
                    ? (
                        <CartItemsContainer>
                            {
                                cartItems.map(cartItem => 
                                    <CartItem
                                        key={ cartItem.id }
                                        item={ cartItem }
                                        handleClick={() => clearItem(cartItem) }
                                    />
                                )
                            }
                        </CartItemsContainer>
                    )
                    : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                }
        </CartItemsWrapper>

        { /* Checkout button */ }
        <CartDropdownButton
            onClick={() => {
                history.push('/checkout');
                toggleCart();
            }}
        >
            GO TO CHECKOUT
        </CartDropdownButton>
    </CartDropdownContainer>
);

const mapDispatchToProps = dispatch => ({
    clearItem: cartItem => dispatch(clearItemFromCart(cartItem)),
    toggleCart: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
