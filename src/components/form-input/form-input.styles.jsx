import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  color: ${mainColor};
  font-size: 12px;
  top: -14px;
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  border: none;
  border-bottom: 1px solid ${subColor};
  border-radius: 0;
  color: ${subColor};
  display: block;
  font-size: 18px;
  margin: 25px 0;
  padding: 10px 10px 10px 5px;
  width: 100%;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles};
  }
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles};
  }
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 20px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

// Display names
FormInputContainer.displayName = 'FormInputContainer';
FormInputLabel.displayName = 'FormInputLabel';
GroupContainer.displayName = 'GroupContainer';
