import React from 'react';
import { shallow } from 'enzyme';

// Component
import { CollectionItem } from './collection-item.component';

describe('CollectionItem component', () => {
    let wrapper;
    let mockAddItem;
    const mockImageUrl = 'www.testImage.com';
    const mockName = 'black hat';
    const mockPrice = 10;

    beforeEach(() => {
        mockAddItem = jest.fn();

        const mockProps = {
            item: {
                imageUrl: mockImageUrl,
                name: mockName,
                price: mockPrice,
            },
            addItem: mockAddItem,
        };

        wrapper = shallow(<CollectionItem { ...mockProps } />);
    });

    // Render the component.
    it('should render the CollectionItem component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    // Add item.
    it('should call addItem when AddButton is clicked', () => {
        wrapper.find('AddButton').simulate('click');
        expect(mockAddItem).toHaveBeenCalled();
    });

    // Render image url.
    it('should render the imageUrl as a prop on BackgroundImage', () => {
        expect(wrapper.find('BackgroundImage').prop('imageUrl')).toBe(mockImageUrl);
    });

    // Render name.
    it('should render the name prop in NameContainer', () => {
        expect(wrapper.find('NameContainer').text()).toBe(mockName);
    });

    // Render price.
    it('should render the price prop in PriceContainer', () => {
        const price = parseInt(wrapper.find('PriceContainer').text());
        expect(price).toBe(mockPrice);
    });
});
