import userReducer from './user.reducer';
import UserActionTypes from './user.types';

const initialState = {
    currentUser: null,
    error: null,
};

describe('userReducer', () => {
    
    // Return initial state.
    it('should return the initial state', () => {
        expect(userReducer(undefined, {})).toEqual(initialState);
    });

    // Set current user on sign in.
    it('should set current user on signInSuccess action', () => {
        const mockCurrentUser = { currentUser: 1 };
        expect(
            userReducer(initialState, {
                payload: mockCurrentUser,
                type: UserActionTypes.SIGN_IN_SUCCESS,
            }).currentUser
        )
        .toBe(mockCurrentUser);
    });

    // Set current user to null on sign out.
    it('should set currentUser to null on signOutSuccess action', () => {
        expect(
            userReducer(initialState, {
                type: UserActionTypes.SIGN_OUT_SUCCESS,
            }).currentUser
        )
        .toBe(null);
    });

    // Set error message on failure.
    it('should set errorMessage to payload on signInFailure, signUpFailure, signOutFailure action', () => {
        const mockError = {
            code: 404,
            message: 'error',
        };

        expect(
            userReducer(initialState, {
                payload: mockError,
                type: UserActionTypes.SIGN_IN_FAILURE,
            }).error
        )
        .toBe(mockError);

        expect(
            userReducer(initialState, {
                payload: mockError,
                type: UserActionTypes.SIGN_OUT_FAILURE,
            }).error
        )
        .toBe(mockError);

        expect(
            userReducer(initialState, {
                payload: mockError,
                type: UserActionTypes.SIGN_UP_FAILURE,
            }).error
        )
        .toBe(mockError);
    });
});
