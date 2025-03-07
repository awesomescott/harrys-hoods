import { all, call, takeLatest, put } from 'redux-saga/effects';

// Firebase utils
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';

// Redux actions
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop.actions';
import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);

        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
};

export function* onFetchCollectionStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
};

export function* shopSagas() {
    yield all([
        call(onFetchCollectionStart),
    ]);
};
