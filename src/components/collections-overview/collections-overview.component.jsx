import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Components
import CollectionPreview from '../collection-preview/collection-preview.component';

// Redux selectors
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

// Styles
import { CollectionsOverviewContainer } from './collections-overview.styles';

/**
 * Display collections overview.
 * This component maps the collections and renders them with CollectionPreview component.
 * @param {Array} collections - list of collections.
 */
export const CollectionsOverview = ({ collections }) => (
    <CollectionsOverviewContainer>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
