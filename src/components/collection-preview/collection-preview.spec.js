import React from 'react';
import { shallow } from 'enzyme';

// Component
import { CollectionPreview } from './collection-preview.component';

describe('CollectionPreview component', () => {
    let wrapper;
    let mockMatch;
    let mockHistory;
    const mockRouteName = 'hats';

    beforeEach(() => {
        mockMatch = {
            path: '/shop',
        };

        mockHistory = {
            push: jest.fn(),
        };

        const mockProps = {
            match: mockMatch,
            history: mockHistory,
            routeName: mockRouteName,
            title: 'hats',
            items: [],
        };

        wrapper = shallow(<CollectionPreview { ...mockProps } />);
    });

    // Render the component.
    it('should render the CollectionPreview component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    // Navigate to correct route.
    it('should call history.push with the right string when TitleContainer is clicked', () => {
        wrapper.find('TitleContainer').simulate('click');
        expect(mockHistory.push).toHaveBeenCalledWith(`${ mockMatch.path }/${ mockRouteName}`);
    });
});
