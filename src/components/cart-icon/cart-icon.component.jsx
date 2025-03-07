import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux selectors
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

// Styles
import {
    CartIconContainer,
    ItemCountContainer,
    ShoppingIcon,
} from  './cart-icon.styles';

/**
 * Display the cart icon (shopping bag).
 */
export const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconContainer onClick={ toggleCartHidden }>
        <ShoppingIcon />
        <ItemCountContainer>{ itemCount }</ItemCountContainer>
    </CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
