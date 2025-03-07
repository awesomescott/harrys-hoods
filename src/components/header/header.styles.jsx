import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    align-items: center;
    display: flex;
    height: 70px;
    justify-content: space-between;
    margin-bottom: 25px;
    width: 100%;

    @media screen  and (max-width: 800px) {
        height: 60px;
        margin-bottom: 20px;
        padding: 10px 5px;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    padding: 15px;
    width: 70px;

    @media screen  and (max-width: 800px) {
        padding: 0;
        width: 50px;
    }

    svg {
        width: 50px;
        height: 50px;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    align-items: center;

    @media screen and (max-width: 800px) {
        width: 8%;
    }
`;

export const OptionsContainer = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: flex-end;
    width: 50%;

    @media screen  and (max-width: 800px) {
        display: none;
    }
`;

export const OptionDiv = styled.div`
    cursor: pointer;
    padding: 10px 15px;
`;

// Display names.
HeaderContainer.displayName = 'HeaderContainer';
LogoContainer.displayName = 'LogoContainer';
OptionsContainer.displayName = 'OptionsContainer';
OptionDiv.displayName = 'OptionDiv';
