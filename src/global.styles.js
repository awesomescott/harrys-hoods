import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    a {
        color: black;
        text-decoration: none;
    }

    body {
        background-color: #ECE6C2;
        font-family: 'Open Sans Condensed';
        margin-bottom: 40px;
        min-width: 320px;
        padding: 20px 16px;
    }
`;
