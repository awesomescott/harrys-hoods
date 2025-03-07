import shopReducer from './shop.reducer';
import ShopActionTypes from './shop.types';

const initialState = {
    collections: null,
    errorMessage: undefined,
    isFetching: false,
};

describe('shopReducer', () => {

    // Return initial state.
    it('should return the initial state', () => {
        expect(shopReducer(undefined, {})).toEqual(initialState);
    });

    // Failure.
    it('should set isFetching to false and errorMessasge to payload if fetchCollectionsFailure', () => {
        expect(
            shopReducer(initialState, {
                payload: 'error',
                type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
            })
        )
        .toEqual({
            ...initialState,
            errorMessage: 'error',
            isFetching: false,
        });
    });

    // Start.
    it('should set isFetching to true if fetchCollectionsStart action', () => {
        expect(
            shopReducer(initialState, {
                type: ShopActionTypes.FETCH_COLLECTIONS_START,
            }).isFetching
        )
        .toBe(true);
    });

    // Success.
    it('should set isFetching to false and collections to payload if fetchingCollectionsSuccess', () => {
        const mockItems = [{ id: 1 }, { id: 2 }];

        expect(
            shopReducer(initialState, {
                payload: mockItems,
                type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
            })
        )
        .toEqual({
            ...initialState,
            collections: mockItems,
            isFetching: false,
        });
    });
});
