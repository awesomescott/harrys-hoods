import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

// Redux actions
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';

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
    handleSubmit = async event => {
        event.preventDefault();

        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);
    };

    render() {
        const { googleSignInStart } = this.props;
        const { email, password } = this.state;

        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={ this.handleSubmit }>
                    { /* Email */ }
                    <FormInput
                        name='email'
                        type='email'
                        label='Email'
                        value={ email }
                        required
                        handleChange={ this.handleChange }
                    />

                    { /* Password */ }
                    <FormInput
                        name='password'
                        type='password'
                        label='Password'
                        value={ password }
                        required
                        handleChange={ this.handleChange }
                    />

                    { /* Submit: Sign In, Sign In with Google */ }
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton
                            type='button'
                            isGoogleSignIn
                            onClick={ googleSignInStart }
                        >
                            Sign In with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    };
};

const mapDispatchToProps = dispatch => ({
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
    googleSignInStart: () => dispatch(googleSignInStart()),
});

export default connect(null, mapDispatchToProps)(SignIn);
