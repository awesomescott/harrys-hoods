import React from 'react';
import { connect } from 'react-redux';

// Redux actions
import { toggleHamburgerMenu } from '../../redux/nav/nav.actions';

// Styles
import { Bar, HamburgerMenuContainer } from './hamburger-menu.styles';

export const HamburgerMenu = ({ dispatch }) => (
    <HamburgerMenuContainer onClick={() => dispatch(toggleHamburgerMenu())}>
        <Bar />
        <Bar />
        <Bar />
    </HamburgerMenuContainer>
);

export default connect()(HamburgerMenu);
