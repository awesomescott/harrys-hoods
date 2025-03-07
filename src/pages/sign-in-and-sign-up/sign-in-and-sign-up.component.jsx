import React, { useState } from 'react';

// Components
import ForgotPassword from '../../components/forgot-password/forgot-password.component';
import SignIn from '../../components/sign-in/sign-in.component';

// Styles
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

/**
 * Display the SignIn or ForgotPassword forms.
 */
const SignInAndSignUp = () => {
    const [userCredentials, setCredentials] = useState({ email: '', forgotPassword: false });
    const { email, forgotPassword } = userCredentials;

    /**
     * Handle forgot password link click event.
     * @param {Object} event - synthetic event
     * @param {String} email - user email
     */
    const handleClick = (event, email) => {
        setCredentials({ email: email, forgotPassword: true });
    };

    return (
        <SignInAndSignUpContainer>
            {
                forgotPassword
                    ? <ForgotPassword emailFromSignIn={ email } />
                    : <SignIn handleClick={ handleClick } />
            }
        </SignInAndSignUpContainer>
    );
};

export default SignInAndSignUp;
