import ShopActionTypes from './shop.types';
import {
    fetchCollectionsFailure,
    fetchCollectionsStart,
    fetchCollectionsStartAsync,
    fetchCollectionsSuccess,
} from './shop.actions';

// Failure.
describe('fetchCollectionsFailure', () => {
    it('should create the fetchCollectionsFailure action', () => {
        const action = fetchCollectionsFailure('errored');

        expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_FAILURE);
        expect(action.payload).toEqual('errored');
    });
});

// Start.
describe('fetchCollectionsStart', () => {
    it('should create the fetchCollectionsStart action', () => {
        expect(fetchCollectionsStart().type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_START);
    });
});

// Start async - to demonstrate async function testing.
describe('fetchCollectionsStartAsync', () => {
    it('should create the fetchCollectionsStartAsync action', () => {
        const mockActionCreator = fetchCollectionsStartAsync();
        const mockDispatch = jest.fn();
        mockActionCreator(mockDispatch);

        expect(mockDispatch).toHaveBeenCalledWith(fetchCollectionsStart());
    });
});

// Success
describe('fetchCollectionsSuccess', () => {
    it('should create the fetchCollectionsSuccess action', () => {
        const mockCollectionsMap = {
            hats: { id: 1, },
        };
        const action = fetchCollectionsSuccess(mockCollectionsMap);

        expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_SUCCESS);
        expect(action.payload).toEqual(mockCollectionsMap);
    });
});
