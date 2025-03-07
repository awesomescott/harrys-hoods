import React from 'react';
import { shallow } from 'enzyme';

// Component
import { CheckoutItem } from './checkout-item.component';

describe('CheckoutItem component', () => {
    let wrapper;
    let mockAddItem;
    let mockClearItem;
    let mockRemoveItem;

    beforeEach(() => {
        mockAddItem = jest.fn();
        mockClearItem = jest.fn();
        mockRemoveItem = jest.fn();

        const mockProps = {
            cartItem: {
                imageUrl: 'www.testImage.com',
                name: 'hats',
                price: 10,
                quantity: 2,
            },
            addItem: mockAddItem,
            clearItem: mockClearItem,
            removeItem: mockRemoveItem,
        };

        wrapper = shallow(<CheckoutItem { ...mockProps } />);
    });

    // Render the component
    it('should render the CheckoutItem component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    // Add item
    it('should call addItem when right arrow is clicked', () => {
        wrapper
            .find('QuantityContainer')
            .childAt(2)
            .simulate('click');

        expect(mockAddItem).toHaveBeenCalled();
    });

    // Clear item.
    it('should call clearItem when remove button is clicked', () => {
        wrapper.find('RemoveButtonContainer').simulate('click');
        expect(mockClearItem).toHaveBeenCalled();
    });

    // Remove item
    it('should call removeItem when left arrow is clicked', () => {
        wrapper
            .find('QuantityContainer')
            .childAt(0)
            .simulate('click');

        expect(mockRemoveItem).toHaveBeenCalled();
    });
});
