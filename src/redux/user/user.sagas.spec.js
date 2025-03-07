import { call, put, takeLatest, take } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import {
    signInFailure,
    signInSuccess,
    signOutFailure,
    signOutSuccess,
    signUpFailure,
    signUpSuccess,
    signOutStart
} from './user.actions';

import {
    auth,
    createUserProfileDocument,
    getCurrentUser,
    googleProvider,
} from '../../firebase/firebase.utils';

import {
    getSnapshotFromUserAuth,
    isUserAuthenticated,
    onCheckUserSession,
    onEmailSignInStart,
    onGoogleSignInStart,
    onSignOutStart,
    onSignUpStart,
    onSignUpSuccess,
    signInAfterSignUp,
    signInWithEmail,
    signInWithGoogle,
    signOut,
    signUp,
} from './user.sagas';

// Check user session.
describe('on check user session saga', () => {
    it('should trigger on CHECK_USER_SESSION', () => {
        const generator = onCheckUserSession();

        expect(generator.next().value)
            .toEqual(takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated));
    });
});

// Email sign in.
describe('on email sign in start saga', () => {
    it('should trigger on EMAIL_SIGN_IN_START', () => {
        const generator = onEmailSignInStart();

        expect(generator.next().value)
            .toEqual(takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail));
    });
});

// Google sign in.
describe('on google sign in start saga', () => {
    it('should trigger on GOOGLE_SIGN_IN_START', () => {
        const generator = onGoogleSignInStart();

        expect(generator.next().value)
            .toEqual(takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle));
    });
});

// Get snapshot
describe('get snapshot from userAuth', () => {
    const mockAdditionalData = {};
    const mockUserAuth = {};
    const generator = getSnapshotFromUserAuth(mockUserAuth, mockAdditionalData);

    expect(generator.next().value)
        .toEqual(call(createUserProfileDocument, mockUserAuth, mockAdditionalData));
});

// Is user authenticated
describe('is user authenticated saga', () => {
    const generator = isUserAuthenticated();

    // getCurrentUser
    it('should call getCurrentUser', () => {
        expect(generator.next().value).toEqual(getCurrentUser());
    });

    // getSnapshotFromUserAuth.
    it('should call getSnapshotFromUserAuth if userAuth exists', () => {
        const mockUserAuth = { uid: '123' };
        expect(generator.next(mockUserAuth).value).toEqual(getSnapshotFromUserAuth(mockUserAuth));
    });

    // signInFailure.
    it('should call signInFailure on error', () => {
        const newGenerator = isUserAuthenticated();
        newGenerator.next();
        expect(newGenerator.throw('error').value).toEqual(put(signInFailure('error')));
    });
});

// Sign in after sign up.
describe('on sign in after sign up saga', () => {
    it('should fire getSnapshotFromUserAuth', () => {
        const mockUser = {};
        const mockAdditionalData = {};
        const mockAction = {
        payload: {
            user: mockUser,
            additionalData: mockAdditionalData
        }
        };

    const generator = signInAfterSignUp(mockAction);
    expect(generator.next().value)
        .toEqual(getSnapshotFromUserAuth(mockUser, mockAdditionalData));
    });
});

// Sign out.
describe('on signout start saga', () => {
    it('should trigger on SIGN_OUT_START', () => {
        const generator = onSignOutStart();

        expect(generator.next().value)
            .toEqual(takeLatest(UserActionTypes.SIGN_OUT_START, signOut));
    });
});

// Sign up
describe('on sign up saga', () => {
    const mockAction = {
        payload: {
            displayName: 'test',
            email: 'test@gmail.com',
            password: '1234',
        },
    };
    const generator = signUp(mockAction);

    // auth.createUserWithEmailAndPassword
    it('should call auth.createUserWithEmailAndPassword', () => {
        const createUserWithEmailAndPassword = jest.spyOn(
            auth,
            'createUserWithEmailAndPassword',
        );
        generator.next();
        expect(createUserWithEmailAndPassword).toHaveBeenCalled();
    });
});

// Sign up start.
describe('on signup start saga', () => {
    it('should trigger on SIGN_UP_START', () => {
        const generator = onSignUpStart();

        expect(generator.next().value)
            .toEqual(takeLatest(UserActionTypes.SIGN_UP_START, signUp));
    });
});

// Sign up success.
describe('on sign up success saga', () => {
    it('should trigger on SIGN_UP_SUCCESS', () => {
        const generator = onSignUpSuccess();

        expect(generator.next().value)
            .toEqual(takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp));
    });
});

// Sign out.
describe('on sign out saga', () => {
    const generator = signOut();

    // auth.signOUt.
    it('should call auth.signOut', () => {
        const expectSignOut = jest.spyOn(auth, 'signOut');
        generator.next();
        expect(expectSignOut).toHaveBeenCalled();
    });

    // signOutSuccess.
    it('should call signOutSuccess', () => {
        expect(generator.next().value).toEqual(put(signOutSuccess()));
    });

    // signOutFailure
    it('should call signOutFailure on error', () => {
        const newGenerator = signOut();
        newGenerator.next();
        expect(newGenerator.throw('error').value).toEqual(put(signOutFailure('error')));
    });
});
