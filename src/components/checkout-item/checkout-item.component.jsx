import React from 'react';
import { connect } from 'react-redux';

// Redux actions
import { addItem, clearItemFromCart, removeItem } from '../../redux/cart/cart.actions';

// Styles
import {
    CheckoutItemContainer,
    ImageContainer,
    QuantityContainer,
    RemoveButtonContainer,
    TextContainer,
} from './checkout-item.styles';

export const CheckoutItem = ({ cartItem, addItem, clearItem, removeItem }) => {
    const { imageUrl, name, price, quantity } = cartItem;

    return (
        <CheckoutItemContainer>
            { /* Item image */ }
            <ImageContainer>
                <img src={imageUrl} alt='item' />
            </ImageContainer>

            { /* Item name */ }
            <TextContainer>{ name }</TextContainer>

            { /* Item quantity */ }
            <QuantityContainer>
                { /* Decrease item quantity (left arrow) */ }
                <div onClick={() => removeItem(cartItem)}>&#10094;</div>

                { /* Quantity value */ }
                <span>{ quantity }</span>

                { /* Increase item quantity (right arrow) */ }
                <div onClick={() => addItem(cartItem)}>&#10095;</div>
            </QuantityContainer>

            { /* Price */ }
            <TextContainer>${ price }</TextContainer>

            { /* Remove item button */ }
            <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
                &#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    clearItem: item => dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
