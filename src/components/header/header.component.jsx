import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Assets
import { ReactComponent as Logo } from '../../assets/logo.svg';

// Components
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
import HamburgerMenu from '../hamburger-menu/hamburger-menu.component';
import NavMenu from '../nav-menu/nav-menu.component';

// Redux
import { signOutStart } from '../../redux/user/user.actions';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectHamburgerHidden } from '../../redux/nav/nav.selectors';
import { toggleHamburgerMenu } from '../../redux/nav/nav.actions';

// Styles
import {
    HeaderContainer,
    LogoContainer,
    NavContainer,
    OptionsContainer,
    OptionDiv,
} from './header.styles';

/**
 * Display the app header.
 */
export const Header = ({ cartHidden, currentUser, hamburgerHidden, signOutStart, toggleHamburgerMenu }) => (
    <HeaderContainer>
        { /* Hamburger menu */ }
        <HamburgerMenu />

        { /* Logo */ }
        <LogoContainer to='/' onClick={ hamburgerHidden ? null : toggleHamburgerMenu }>
            <Logo />
        </LogoContainer>

        { /* Nav Links: Shop, Contact, Sign Out, and Cart Icon */ }
        <NavContainer>
            <OptionsContainer>
                <OptionDiv as={ Link } to='/shop'>SHOP</OptionDiv>
                <OptionDiv as={ Link } to='/contact'>CONTACT</OptionDiv>

                { /* Sign in / Sign Out */ }
                {
                    currentUser
                        ? <OptionDiv onClick={ signOutStart }>SIGN OUT</OptionDiv>
                        : <OptionDiv as={ Link } to='/signin'>SIGN IN</OptionDiv>
                }
            </OptionsContainer>

            { /* Cart Icon */ }
            <CartIcon />
        </NavContainer>

        { /* Nav menu */ }
        { hamburgerHidden ? null : <NavMenu /> }

        { /* Cart dropdown */ }
        { cartHidden ? null : <CartDropDown /> }
    </HeaderContainer>
);

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart({ payload: true })),
    toggleHamburgerMenu: () => dispatch(toggleHamburgerMenu()),
});

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartHidden: selectCartHidden,
    hamburgerHidden: selectHamburgerHidden,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
