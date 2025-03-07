import React from 'react';
import { shallow } from 'enzyme';

// Component
import { MenuItem } from './menu-item.component';

describe('MenuItem component', () => {
    let wrapper;
    let mockMatch;
    let mockHistory;
    const linkUrl = '/hats';
    const size = 'large';
    const imageUrl = 'testImage';

    beforeEach(() => {
        mockMatch = {
            url: '/shop',
        };

        mockHistory = {
            push: jest.fn(),
        };

        const mockProps = {
            match: mockMatch,
            history: mockHistory,
            linkUrl,
            size,
            title: 'hats',
            imageUrl,
        };

        wrapper = shallow(<MenuItem { ...mockProps } />);
    });

    // Render the component.
    it('should render the MenuItem component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    // Navigate to correct route.
    it('should  call history.push with the correct string when MenuItemContainer is clicked', () => {
        wrapper.find('MenuItemContainer').simulate('click');
        expect(mockHistory.push).toHaveBeenCalledWith(`${ mockMatch.url }${ linkUrl }`);
    });

    // Pass size as prop.
    it('should pass size to MenuItemContainer as the prop size', () => {
        expect(wrapper.find('MenuItemContainer').prop('size')).toBe(size);
    });

    // Pass image url as prop.
    it('should pass imageUrl to BackgroundImageContainer as the prop imageUrl', () => {
        expect(wrapper.find('BackgroundImageContainer').prop('imageUrl')).toBe(imageUrl);
    });
});
