import styled from 'styled-components';

export const Bar = styled.div`
    background: black;
    height: 3px;
    margin: 5px;
    width: 30px;
`;

export const HamburgerMenuContainer = styled.div`
    margin-top: 1.5%;

    @media screen  and (min-width: 800px) {
        display: none;
    }
`;
