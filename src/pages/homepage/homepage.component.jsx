import React from 'react';

// Components
import Directory from '../../components/directory/directory.component';

// Styles
import { HomePageContainer } from './homepage.styles';

/**
 * Display the store home page.
 */
const HomePage = () => (
    <HomePageContainer>
        <Directory />
    </HomePageContainer>
);

export default HomePage;
