import React from 'react';
import { shallow } from 'enzyme';

// Component
import { CollectionsOverview } from './collections-overview.component';

// Render the component.
it('should render CollectionsOverview component', () => {
    expect(shallow(<CollectionsOverview collections={ [] } />)).toMatchSnapshot();
});
