import { call, put, takeLatest } from 'redux-saga/effects';

// Actions
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop.actions';

// Firebase
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';

// Sagas
import { fetchCollectionsAsync, onFetchCollectionStart } from './shop.sagas';

// Types
import ShopActionTypes from './shop.types';

// Async.
describe('fetch collections async saga', () => {
    const generator = fetchCollectionsAsync();

    // Firestore collection.
    it('should call firestore collection', () => {
        const getCollection = jest.spyOn(firestore, 'collection');
        generator.next();
        expect(getCollection).toHaveBeenCalled();
    });

    //  convertCollectionsSnapshotToMap.
    it('should call converCollectionsSnapShot saga', () => {
        const mockSnapshot = {};

        expect(generator.next(mockSnapshot).value)
            .toEqual(call(convertCollectionsSnapshotToMap, mockSnapshot));
    });

    // Success.
    it('should fire fetchCollectionsSuccess if collectionsMap is successful', () => {
        const mockCollectionsMap = {
            hats: { id: 1 },
        };

        expect(generator.next(mockCollectionsMap).value)
            .toEqual(put(fetchCollectionsSuccess(mockCollectionsMap)));
    });

    // Failure.
    it('should fire fetchCollectionsFailure if get collection fails', () => {
        const newGenerator = fetchCollectionsAsync();
        newGenerator.next();

        expect(newGenerator.throw({ message: 'error' }).value)
            .toEqual(put(fetchCollectionsFailure('error')));
    });
});

// Start.
describe('fetch collections start saga', () => {
    it('should trigger on FETCH_COLLECTIONS_START', () => {
        const generator = onFetchCollectionStart();

        expect(generator.next().value)
            .toEqual(takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync));
    });
});
