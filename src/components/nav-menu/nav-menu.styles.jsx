import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavMenuContainer = styled.div`
    align-items: center;
    background: rgb(0, 0, 0);
    display: flex;
    height: 30vh;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 0px;
    position: fixed;
    opacity: 0.85;
    right: 0%;
    top: 80px;
    width: 100%;
    z-index: 1;
    -webkit-box-align: center;

    @media screen and (min-width: 800px) {
        display: none;
    }
`;

export const NavLink = styled(Link)`
    color: rgb(255, 255, 255);
    font-size: 1.2em;
    z-index: 3;
`;

// Display names.
NavMenuContainer.displayName = 'NavMenuContainer';
NavLink.displayName = 'NavLink';
