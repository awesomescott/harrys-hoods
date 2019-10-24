import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Components
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

// Redux actions
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';

// Styles
import {
    LinkText,
    SeparatorContainer,
    SignInContainer,
    SignInTitle,
    SignUpContainer,
} from './sign-in.styles';

/**
 * Display the sign-in form.
 */
const SignIn = ({ emailSignInStart, googleSignInStart, history }) => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;

    /**
     * Handle form input data change.
     * @param {Object} event - synthetic event.
     */
    const handleChange = event => {
        const { value, name } = event.target;

        setCredentials({ ...userCredentials, [name]: value });
    };

    /**
     * Handle form submit.
     * @param {Object} event - synthetic event.
     */
    const handleSubmit = async event => {
        event.preventDefault();

        emailSignInStart(email, password);
    };

    return (
        <SignInContainer>
            <SignInTitle>Welcome back. Sign in to your account.</SignInTitle>

            { /* Sign in with Google */ }
            <CustomButton
                type='button'
                isGoogleSignIn
                onClick={ googleSignInStart }
                >
                Sign In with Google
            </CustomButton>

            { /* Separator */ }
            <SeparatorContainer>
                <span>OR</span>
            </SeparatorContainer>

            <form onSubmit={ handleSubmit }>
                { /* Email */ }
                <FormInput
                    name='email'
                    type='email'
                    label='Email'
                    value={ email }
                    required
                    handleChange={ handleChange }
                />

                { /* Password */ }
                <FormInput
                    name='password'
                    type='password'
                    label='Password'
                    value={ password }
                    required
                    handleChange={ handleChange }
                />

                { /* Submit: Sign In */ }
                <CustomButton type='submit'>Continue</CustomButton>

                { /* Sign up link */ }
                <SignUpContainer>
                    Don't have an account?
                    <LinkText to='/signup'>
                        &nbsp;Create one now.
                    </LinkText>
                </SignUpContainer>
            </form>
        </SignInContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
    googleSignInStart: () => dispatch(googleSignInStart()),
});

export default withRouter(connect(null, mapDispatchToProps)(SignIn));
