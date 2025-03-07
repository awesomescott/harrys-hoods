import React from 'react';

// Styles
import { CustomButtonContainer } from './custom-button.styles';

/**
 * Display a custom button.
 * @param {String} children - button title.
 * @param {Object} props - inverted, isGoogleSignIn, onClick, type.
 */
export const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
);

export default CustomButton;
