import React, { useState } from 'react';
import { connect } from 'react-redux';

// Components
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

// Redux actions
import { sendPasswordResetStart } from '../../redux/user/user.actions'

// Styles
import {
  ForgotPasswordForm,
  ForgotPasswordFormContainer,
  ForgotPasswordHeader,
  ForgotPasswordSubHeader,
  ForgotPasswordWrapper,
} from './forgot-password.styles';

const ForgotPassword = ({ emailFromSignIn, sendPasswordResetStart }) => {
  const [userEmail, setEmail] = useState({ email: emailFromSignIn });
  const { email } = userEmail;

  /**
   * Handle email input data change.
   * @param {Object} event - synthetic event.
   */
  const handleChange = event => setEmail({ email: event.target.value });

  /**
   * Handle form submit.
   * @param {Object} event - synthetic event.
   */
  const handleSubmit = event => {
    event.preventDefault();

    sendPasswordResetStart(email);
  };

  return (
    <ForgotPasswordWrapper>
      <ForgotPasswordFormContainer>
        <ForgotPasswordHeader>Need help with your password?</ForgotPasswordHeader>
        <ForgotPasswordSubHeader>
          Enter the email you use for Harry's Hoods. We'll send you an email to reset your password.
        </ForgotPasswordSubHeader>

        <ForgotPasswordForm onSubmit={ handleSubmit }>
          { /* Email */ }
          <FormInput
            name='email'
            type='email'
            label='Email'
            value={ email }
            required
            handleChange={ handleChange }
          />

          <CustomButton type='submit'>Send email</CustomButton>
        </ForgotPasswordForm>
      </ForgotPasswordFormContainer>
    </ForgotPasswordWrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  sendPasswordResetStart: (email) => dispatch(sendPasswordResetStart(email)),
});

export default connect(null, mapDispatchToProps)(ForgotPassword);