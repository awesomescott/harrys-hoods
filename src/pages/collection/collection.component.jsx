import React from 'react';
import { connect } from 'react-redux';

// Components
import CollectionItem from '../../components/collection-item/collection-item.component';

// Redux selectors
import { selectCollection } from '../../redux/shop/shop.selectors';

// Styles
import {
    CollectionPageContainer,
    CollectionItemsContainer,
    CollectionTitle,
  } from './collection.styles';

/**
 * Display the collection page.
 * This component maps the items in a given collection
 * and renders them with the CollectionItem component
 * @param {Object} collection - collection of shop items.
 */
export const CollectionPage = ({ collection }) => {
    const { title, items } = collection;

    return (
        <CollectionPageContainer>
            { /* Title */ }
            <CollectionTitle>{ title }</CollectionTitle>

            { /* Items */ }
            <CollectionItemsContainer>
                {
                    items.map(item => <CollectionItem key={ item.id } item={ item } />)
                }
            </CollectionItemsContainer>
        </CollectionPageContainer>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
