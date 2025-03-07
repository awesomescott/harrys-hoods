import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const linkStyle = css`
    color: #0366d6;
    cursor: pointer;
`;

const getLinkStyle = () => linkStyle;

const separator = css`
    border-bottom: 1px solid black;
    content: "";
    display: inline-block;
    height: 0;
    width: calc(50% - 0em);
`;

export const LinkText = styled(Link)`
    ${getLinkStyle};
`;

export const ForgotPasswordContainer = styled.a`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 25px;
    margin-top: -10px;

    ${getLinkStyle};
`;

export const SeparatorContainer = styled.div`
        align-items: center;
        display: flex;
        flex-flow: row nowrap;
        margin-top: 1em;

        &::before {
            ${separator};
            margin-right: 0.5em;
        }

        &::after {
            ${separator};
            margin-left: 0.5em;
        }
`;

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    @media screen and (max-width: 800px) {
        width: unset;
    }
`;

export const SignInTitle = styled.h2`
    margin: 10px 0 20px 0;
    text-align: center;
`;

export const SignUpContainer = styled.div`
    margin-top: 1rem;
    text-align: center;
`;

// Display names
ForgotPasswordContainer.displayName = 'ForgotPasswordContainer';
LinkText.displayName = 'LinkText';
SignInContainer.displayName ='SignInContainer';
SignInTitle.displayName ='SignInTitle';
SignUpContainer.displayName = 'SignUpContainer';
