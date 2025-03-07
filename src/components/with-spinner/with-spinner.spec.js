import React from 'react';
import { shallow } from 'enzyme';

// Components
import Spinner from '../spinner/spinner.component';
import WithSpinner from './with-spinner.component';

describe('WithSpinner HOC', () => {
    const TestComponent = () => <div className='test' />;
    const WrappedComponent = WithSpinner(TestComponent);

    // Loading is true
    describe('if loading is true', () => {

        // Render spinner.
        it('should render Spinner component', () => {
            const wrapper = shallow(<WrappedComponent isLoading={ true } />);
            expect(wrapper.exists(Spinner)).toBe(true);
        });

        // Don't render component.
        it('should not render component', () => {
            const wrapper = shallow(<WrappedComponent isLoading={ true } />);
            expect(wrapper.exists(TestComponent)).toBe(false);
        });
    });

    // Loading is false
    describe('if loading is false', () => {

        // Render component.
        it('should render component', () => {
            const wrapper = shallow(<WrappedComponent isLoading={ false } />);
            expect(wrapper.exists(TestComponent)).toBe(true);
        });

        // Don't render spinner.
        it('should not render Spinner', () => {
            const wrapper = shallow(<WrappedComponent isLoading={ false } />);
            expect(wrapper.exists(Spinner)).toBe(false);
        });
    });
  });
