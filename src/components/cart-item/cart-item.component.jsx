import React from 'react';

// Styles
import {
    CartItemContainer,
    CartItemImage,
    ItemDetailsContainer,
    RemoveButtonContainer,
} from  './cart-item.styles';

const CartItem = ({ handleClick, item: { imageUrl, name, price, quantity } }) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <span>{ name }</span>
            <span>{ quantity } x ${ price }</span>
        </ItemDetailsContainer>

        { /* Remove item button */ }
        <RemoveButtonContainer onClick={ handleClick }>
            &#10005;
        </RemoveButtonContainer>
    </CartItemContainer>
);

export default React.memo(CartItem);
