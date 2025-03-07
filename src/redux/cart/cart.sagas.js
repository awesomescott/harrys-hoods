import { all, call, put, select, takeLatest  } from 'redux-saga/effects';

// Cart
import { clearCart, setCartFromFirebase } from './cart.actions';
import { selectCartItems } from './cart.selectors';
import CartActionTypes from './cart.types';

// Firebase
import { getUserCartRef } from '../../firebase/firebase.utils';

// User
import { selectCurrentUser } from '../user/user.selectors';
import UserActionTypes from '../user/user.types';

/**
 * When the user signs out, clear all items from the cart.
 */
export function* clearCartOnSignOut() {
    yield put(clearCart());
};

/**
 * Fetch user cart data from firebase and dispatch set cart action.
 * @param {Object} user - current user date
 */
export function* fetchCartFromFirebase({ payload: user }) {
    const cartRef = yield getUserCartRef(user.id);
    const cartSnapshot = yield cartRef.get();
    yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
};

/**
 * Handle cart change.
 */
export function* onCartChange() {
    yield takeLatest(
        [
            CartActionTypes.ADD_ITEM,
            CartActionTypes.CLEAR_ITEM_FROM_CART,
            CartActionTypes.REMOVE_ITEM,
        ],
        updateCartInFirebase,
    );
};

/**
 * Handle sign out success.
 */
export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
};

/**
 * Handle user sign in.
 */
export function* onUserSignIn() {
    yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, fetchCartFromFirebase);
};

/**
 * Update user cart in firebase.
 */
export function* updateCartInFirebase() {
    const currentUser = yield select(selectCurrentUser);

    if (currentUser) {
        try {
            const cartRef = yield getUserCartRef(currentUser.id);
            const cartItems = yield select(selectCartItems);
            yield cartRef.update({ cartItems });
        } catch (error) {
            console.log('An error occurred while updating the cart', error);
        }
    }
};

export function* cartSagas() {
    yield all([
        call(onCartChange),
        call(onSignOutSuccess),
        call(onUserSignIn),
    ]);
};
