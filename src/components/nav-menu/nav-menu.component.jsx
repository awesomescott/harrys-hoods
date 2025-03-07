import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux
import { signOutStart } from '../../redux/user/user.actions';
import { toggleHamburgerMenu } from '../../redux/nav/nav.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';

// Styles
import { NavLink, NavMenuContainer  } from './nav-menu.styles';

export const NavMenu = ({ currentUser, signOutStart, toggleHamburgerMenu }) => (
    <NavMenuContainer>
        { /* Home */ }
        <NavLink
            to='/'
            onClick={ toggleHamburgerMenu }
        >
            HOME
        </NavLink>

        { /* Shop */ }
        <NavLink
            to='/shop'
            onClick={ toggleHamburgerMenu }
        >
            SHOP
        </NavLink>

        { /* Contact */ }
        <NavLink
            to='/contact'
            onClick={ toggleHamburgerMenu }
        >
            CONTACT
        </NavLink>

        { /* Sign in / Sign out */ }
        {
            currentUser
                ? (
                    <NavLink
                        as='div'
                        onClick={() => {
                            signOutStart();
                            toggleHamburgerMenu();
                        }}
                    >
                        SIGN OUT
                    </NavLink>
                )
                : (
                    <NavLink
                        to='/signin'
                        onClick={ toggleHamburgerMenu }
                    >
                        SIGN IN
                    </NavLink>
                )
        }
    </NavMenuContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleHamburgerMenu: () => dispatch(toggleHamburgerMenu()),
    signOutStart: () => dispatch(signOutStart()),
});

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);
