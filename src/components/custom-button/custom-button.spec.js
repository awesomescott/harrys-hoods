import React from 'react';
import { shallow } from 'enzyme';

// Component
import { CustomButton } from './custom-button.component';


// Render the component.
it('should render CustomButton component', () => {
    expect(shallow(<CustomButton />)).toMatchSnapshot();
});
