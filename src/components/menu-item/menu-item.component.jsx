import React from 'react';
import { withRouter } from 'react-router-dom';

// Styles
import {
    BackgroundImageContainer,
    ContentContainer,
    ContentSubtitle,
    ContentTitle,
    MenuItemContainer,
} from './menu-item.styles';

/**
 * Display a menu item.
 * Menu items contain an image, a title, and a sub-title.
 * @param {String} imageUrl - the url for the image.
 * @param {String} linkUrl - the url to link to.
 * @param {String} size - menu item size.
 * @param {String} title - menu item title.
 * @param {Object} history - react router dom history.
 * @param {Object} match - react router dom match.
 */
export const MenuItem = ({ imageUrl, linkUrl, size, title, history, match }) => (
    <MenuItemContainer
        size={ size }
        onClick={() => history.push(`${ match.url }${ linkUrl }`)}    
    >
        { /* Menu item image */ }
        <BackgroundImageContainer
            className='background-image'
            imageUrl={ imageUrl }
        />

        { /* Menu item content */ }
        <ContentContainer className='content'>
            <ContentTitle>{ title.toUpperCase() }</ContentTitle>
            <ContentSubtitle>SHOP NOW</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>
);

export default withRouter(MenuItem);
