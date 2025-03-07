import React from 'react';

// Styles
import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

/**
 * Display the loading spinner.
 */
const Spinner = () => (
    <SpinnerOverlay>
        <SpinnerContainer />
    </SpinnerOverlay>
);

export default Spinner;
