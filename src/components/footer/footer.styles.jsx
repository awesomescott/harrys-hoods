import styled from 'styled-components';

export const FooterContainer = styled.div`
    align-items: center;
    background-color: white;
    bottom: 0;
    display: flex;
    height: 40px;
    justify-content: center;
    left: 0;
    position: fixed;
    text-align: center;
    width: 100%;
`;

export const LinkText = styled.a`
    color: #0366d6;
`;

// Display names.
FooterContainer.displayName = 'FooterContainer';
LinkText.displayName = 'LinkText';
