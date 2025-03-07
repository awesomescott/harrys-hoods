import React from 'react';
import { shallow } from 'enzyme';

// Component
import SignInAndSignUpPage from './sign-in-and-sign-up.component';

// Render the component
it('should render SignInAndSignUpPage component', () => {
    expect(shallow(<SignInAndSignUpPage />)).toMatchSnapshot();
});
