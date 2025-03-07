import { all, call, put, takeLatest } from 'redux-saga/effects';

// Firebase utils
import {
    auth,
    createUserProfileDocument,
    getCurrentUser,
    githubProvider,
    googleProvider,
} from '../../firebase/firebase.utils';

// Actions
import {
    sendPasswordResetFailure,
    sendPasswordResetSuccess,
    signInFailure,
    signInSuccess,
    signOutFailure,
    signOutSuccess,
    signUpFailure,
    signUpSuccess,
} from './user.actions';
import UserActionTypes from './user.types';

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();

        if (!userAuth) return;

        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error));
    }
};

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
};

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();

        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
        put(signInFailure(error));
    }
};

/*---------- Email Sign in ----------*/

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        put(signInFailure(error));
    }
};

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
};

/*---------- Github Sign in ----------*/

export function* signInWithGithub() {
    try {
        const { user } = yield auth.signInWithPopup(githubProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
};

export function* onGithubSignInStart() {
    yield takeLatest(UserActionTypes.GITHUB_SIGN_IN_START, signInWithGithub)
};

/*---------- Google Sign in ----------*/

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
};

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
};

/*---------- Password recovery ----------*/

export function* recoverPassword({ payload: email }) {
    try {
        const actionCodeSettings = {
            url: 'https://harrys-hoods.netlify.app/signin',
            handleCodeInApp: true,
        };

        yield auth.sendPasswordResetEmail(email, actionCodeSettings);
        yield put(sendPasswordResetSuccess());
    } catch (error) {
        yield put(sendPasswordResetFailure(error));
    }
};

export function* onPasswordRecoveryStart() {
    yield takeLatest(UserActionTypes.SEND_PASSWORD_RESET_START, recoverPassword)
};

/*---------- Sign out ----------*/

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error));
    }
};

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
};

/*---------- Sign up ----------*/

export function* signUp({ payload: { displayName, email, password } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        
        yield put(signUpSuccess({ user, additionalData: { displayName } }));
    } catch (error) {
        yield put(signUpFailure(error));
    }
};

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
};

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
};

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
    yield getSnapshotFromUserAuth(user, additionalData);
};

export function* userSagas() {
    yield all([
        call(onCheckUserSession),
        call(onEmailSignInStart),
        call(onGithubSignInStart),
        call(onGoogleSignInStart),
        call(onPasswordRecoveryStart),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
    ]);
};
