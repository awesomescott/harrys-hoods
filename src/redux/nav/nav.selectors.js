import { createSelector } from 'reselect';

const selectNav = state => state.nav;

export const selectHamburgerHidden = createSelector(
    [selectNav],
    nav => nav.hamburgerHidden
);
