import React from 'react';

// Styles
import {
    FormInputContainer,
    FormInputLabel,
    GroupContainer,
} from './form-input.styles';

/**
 * Display a form input.
 * @param {Function} handleChange - onChange event handler.
 * @param {String} label - input label.
 * @param {Object} otherProps - name, type, required, value. 
 */
const FormInput = ({ handleChange, label, ...otherProps }) => (
    <GroupContainer>
        { /* Input */ }
        <FormInputContainer onChange={ handleChange } { ...otherProps } />

        { /* Label */ }
        {
            label
                ? (
                    <FormInputLabel className={ otherProps.value.length ? 'shrink' : '' }>
                        { label }
                    </FormInputLabel>
                )
                : null
        }
    </GroupContainer>
);

export default FormInput;
