import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const separator = css`
    border-bottom: 1px solid black;
    content: "";
    display: inline-block;
    height: 0;
    width: calc(50% - 0em);
`;

export const LinkText = styled(Link)`
    color: #0366d6;
    cursor: pointer;
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
    margin-top: 1rem;
    text-align: center;
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 800px) {
    width: unset;
  }
`;

export const SignUpSubtitle = styled.span`
  margin: 10px 0;
  text-align: center;
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
  text-align: center;
`;

// Display names.
LinkText.displayName = 'LinkText';
SignInContainer.displayName = 'SignInContainer';
SignUpContainer.displayName = 'SignUpContainer';
SignUpSubtitle.displayName = 'SignUpSubtitle';
SignUpTitle.displayName = 'SignUpTitle';
