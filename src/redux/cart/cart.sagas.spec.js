import { put, takeLatest } from 'redux-saga/effects';

import { clearCart } from './cart.actions';
import { clearCartOnSignOut, onSignOutSuccess } from './cart.sagas';
import UserActionTypes from '../user/user.types';

// Sign out.
describe('on signout success saga', () => {
    it('should trigger on SIGN_OUT_SUCCESS', async () => {
        const generator = onSignOutSuccess();
        expect(generator.next().value).toEqual(
            takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
        );
    });
});

// Clear cart on sign out.
describe('clear cart on signout saga', () => {
    it('should fire clearCart', () => {
        const generator = clearCartOnSignOut();
        expect(generator.next().value).toEqual(put(clearCart()));
    });
});
