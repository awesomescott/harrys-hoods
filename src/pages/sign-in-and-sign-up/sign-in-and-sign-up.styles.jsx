import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px auto;
    width: auto;

    @media screen and (max-width: 800px) {
        width: unset;
    }
`;

// Display name
SignInAndSignUpContainer.displayName = 'SignInAndSignUpContainer';
