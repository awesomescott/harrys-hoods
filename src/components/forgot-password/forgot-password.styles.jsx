import styled from 'styled-components';

export const ForgotPasswordForm = styled.form`
  width: 100%;
`;

export const ForgotPasswordFormContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 800px) {
      width: unset;
  }
`;

export const ForgotPasswordHeader = styled.h2`
  margin: 10px 0;
  text-align: center;
`;

export const ForgotPasswordSubHeader = styled.p`
  margin: 0;
  max-width: 380px;
  text-align: center;
`;

export const ForgotPasswordWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px auto;
  width: auto;

  @media screen and (max-width: 800px) {
    width: unset;
  }
`;

// Display names.
ForgotPasswordFormContainer.displayName = 'ForgotPasswordFormContainer';
ForgotPasswordForm.displayName = 'ForgotPasswordForm';
ForgotPasswordHeader.displayName = 'ForgotPasswordHeader';
ForgotPasswordSubHeader.displayName = 'ForgotPasswordSubHeader';
ForgotPasswordWrapper.displayName = 'ForgotPasswordWrapper';
