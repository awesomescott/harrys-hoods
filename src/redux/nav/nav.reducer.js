import NavActionTypes from './nav.types';

const INITIAL_STATE = {
    hamburgerHidden: true,
};

const navReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NavActionTypes.TOGGLE_HAMBURGER_MENU:
            return {
                ...state,
                hamburgerHidden: action.payload ? action.payload : !state.hamburgerHidden,
            };

        default:
            return state;
    }
};

export default navReducer;