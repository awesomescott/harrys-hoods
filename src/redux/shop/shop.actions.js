import ShopActionTypes from './shop.types';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';

export const fetchCollectionsFailure = errorMessage => ({
    payload: errorMessage,
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
});

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
    payload: collectionsMap,
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
});

/**
 * NOTE: This is to demonstrate testing async functions.
 */
export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef
            .get()
            .then(snapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                dispatch(fetchCollectionsSuccess(collectionsMap));
            })
            .catch(error => dispatch(fetchCollectionsFailure(error.message)));
    };
};
