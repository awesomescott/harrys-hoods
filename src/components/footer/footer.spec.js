import React from 'react';
import { shallow } from 'enzyme';

// Component
import Footer from './footer.component';

// Render the component.
it('should render the Footer component', () => {
    expect(shallow(<Footer />)).toMatchSnapshot();
});
