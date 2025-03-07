import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

// Components
import Spinner from '../../components/spinner/spinner.component';

// Redux actions
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

// Styles
import { ShopPageContainer } from './shop.styles';

// Lazy loaded components
const CollectionPageContainer = lazy(() => import('../collection/collection.container'));
const CollectionsOverviewContainer = lazy(() =>
    import('../../components/collections-overview/collections-overview.container')
);

/**
 * Display the shop page.
 * This component renders the CollectionOverview and CollectionPage components.
 */
export const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

    return (
        <ShopPageContainer>
            <Suspense fallback={ <Spinner /> }>
                { /* Collections Overview */ }
                <Route
                    exact
                    path={ `${ match.path }` }
                    component={ CollectionsOverviewContainer }
                />

                { /* Collection Item Page */ }
                <Route
                    path={ `${ match.path }/:collectionId` }
                    component={ CollectionPageContainer }
                />
            </Suspense>
        </ShopPageContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
