import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Components
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

// Redux actions
import { emailSignInStart, githubSignInStart, googleSignInStart } from '../../redux/user/user.actions';

// Styles
import {
    ForgotPasswordContainer,
    LinkText,
    SeparatorContainer,
    SignInContainer,
    SignInTitle,
    SignUpContainer,
} from './sign-in.styles';

/**
 * Display the sign-in form.
 */
const SignIn = ({ emailSignInStart, githubSignInStart, googleSignInStart, handleClick }) => {
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

            { /* Sign in with GitHub */ }
            <CustomButton
                type='button'
                isGithubSignIn
                onClick={ githubSignInStart }
            >
                Sign In with GitHub
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

                { /* Forgot password */ }
                <ForgotPasswordContainer onClick={event => handleClick(event, email) }>
                    Forgot your password?
                </ForgotPasswordContainer>

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
    githubSignInStart: () => dispatch(githubSignInStart()),
    googleSignInStart: () => dispatch(googleSignInStart()),
});

export default withRouter(connect(null, mapDispatchToProps)(SignIn));
