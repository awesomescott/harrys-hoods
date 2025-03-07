import React from 'react';
import { shallow } from 'enzyme';

// Component
import FormInput from './form-input.component';

describe('FormInput componet', () => {
    let wrapper;
    let mockHandleChange;

    beforeEach(() => {
        mockHandleChange = jest.fn();

        const mockProps = {
            label: 'email',
            value: 'test@gmail.com',
            handleChange: mockHandleChange,
        };

        wrapper = shallow(<FormInput { ...mockProps } />);
    });

    // Render the component.
    it('should render the FormInput compoennt', () => {
        expect(wrapper).toMatchSnapshot();
    });

    // Handle change.
    it('should call the handleChange method when input changes', () => {
        wrapper.find('FormInputContainer').simulate('change');
        expect(mockHandleChange).toHaveBeenCalled();
    });

    // Display form input label.
    it('should render the FormInputLabel if there is a label', () => {
        expect(wrapper.exists('FormInputLabel')).toBe(true);
    });

    // Don't display form input label.
    it('should not render the FormInputLabel if there is no label', () => {
        const mockNewProps = {
            label: '',
            value: 'test@gmail.com',
            handleChange: mockHandleChange,
        };

        const newWrapper = shallow(<FormInput { ...mockNewProps } />);
        expect(newWrapper.exists('FormInputLabel')).toBe(false);
    });
});
