import React, { Component } from 'react';

// Firebase
import { signInWithGoogle } from '../../firebase/firebase.utils';

// Components
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

// Styles
import './sign-in.styles.scss';

/**
 * Display and manage the sign-in form.
 */
class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    };

    /**
     * Handle form input data change.
     * @param {Object} event - synthetic event.
     */
    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    /**
     * Handle form submit.
     * @param {Object} event - synthetic event.
     */
    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    };

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    { /* Email */ }
                    <FormInput
                        name='email'
                        type='email'
                        label='email'
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                    />

                    { /* Password */ }
                    <FormInput
                        name='password'
                        type='password'
                        label='password'
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}
                    />

                    { /* Submit: Sign In, Sign In with Google */ }
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton
                            isGoogleSignIn
                            onClick={signInWithGoogle}
                        >
                            Sign In with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    };
};

export default SignIn;
