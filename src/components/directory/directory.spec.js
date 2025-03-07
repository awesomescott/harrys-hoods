import React from 'react';
import { shallow } from 'enzyme';

// Component
import { Directory } from './directory.component';

// Render the component
it('should render Directory component', () => {
    expect(shallow(<Directory sections={[]} />)).toMatchSnapshot();
});
