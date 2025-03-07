import NavActionTypes from './nav.types';

export const toggleHamburgerMenu = (payload = null) => ({
    payload: payload,
    type: NavActionTypes.TOGGLE_HAMBURGER_MENU,
});
