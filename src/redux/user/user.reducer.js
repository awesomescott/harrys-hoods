import UserActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    error: null,
    passwordResetSent: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SEND_PASSWORD_RESET_SUCCESS:
            return {
                ...state,
                passwordResetSent: true,
            };

        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null,
                passwordResetSent: false,
            };

        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null,
            };

        case UserActionTypes.SEND_PASSWORD_RESET_FAILURE:
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload,
                passwordResetSent: false,
            };

        default:
            return state;
    }
};

export default userReducer;
