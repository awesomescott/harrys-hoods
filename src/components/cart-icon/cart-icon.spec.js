import React from 'react';
import { shallow } from 'enzyme';

// Components
import { CartIcon } from './cart-icon.component';

describe('CartIcon component', () => {
    let wrapper;
    let mockToggleCartHidden;

    beforeEach(() => {
        mockToggleCartHidden = jest.fn();

        const mockProps = {
            itemCount: 0,
            toggleCartHidden: mockToggleCartHidden,
        };

        wrapper = shallow(<CartIcon { ...mockProps } />);
    });

    // Render the cart icon.
    it('should render CartIcon component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    // Toggle cart
    it('should call toggleCartHidden when icon is clicked', () => {
        wrapper.find('CartIconContainer').simulate('click');
        expect(mockToggleCartHidden).toHaveBeenCalled();
    });

    // Display the correct count.
    it('should render the itemCount as text', () => {
        const itemCount = parseInt(wrapper.find('ItemCountContainer').text());
        expect(itemCount).toBe(0);
    });
});
