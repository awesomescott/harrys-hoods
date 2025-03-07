import React from 'react';
import { connect } from 'react-redux';

// Actions
import { addItem } from '../../redux/cart/cart.actions';

// Styles
import {
    AddButton,
    BackgroundImage,
    CollectionFooterContainer,
    CollectionItemContainer,
    NameContainer,
    PriceContainer,
  } from './collection-item.styles';

/**
 * Display a collection item.
 * @param {Function} addItem - add item action.
 * @param {Object} item - id, imageUrl, name, price.
 */
export const CollectionItem = ({ addItem, item }) => {
    const { imageUrl, name, price } = item;

    return (
        <CollectionItemContainer>
            { /* Item image */ }
            <BackgroundImage
                className='image'
                imageUrl={ imageUrl }   
            />

            { /* Item name / price */ }
            <CollectionFooterContainer>
                <NameContainer>{ name }</NameContainer>
                <PriceContainer>{ price }</PriceContainer>
            </CollectionFooterContainer>

            { /* Add to cart */ }
            <AddButton
                inverted
                onClick={ () => addItem(item) }
            >
                Add to cart
            </AddButton>
        </CollectionItemContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
