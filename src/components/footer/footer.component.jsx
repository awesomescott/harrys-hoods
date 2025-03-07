import React from 'react';

// Styles
import { FooterContainer, LinkText } from './footer.styles';

const Footer = () => (
    <FooterContainer>
        <p>
            Feel free to view the source code on
            <LinkText href='https://github.com/awesomescott/harrys-hoods'>&nbsp;GitHub.</LinkText>
        </p>
    </FooterContainer>
);

export default Footer;
