import React from 'react';
import { shallow } from 'enzyme';

// Actions
import { toggleCartHidden } from '../../redux/cart/cart.actions';

// Components
import { CartDropdown } from './cart-dropdown.component';
import CartItem from '../cart-item/cart-item.component';
import expectExport from 'expect';

describe('CartDropdown component', () => {
    let wrapper;
    let mockHistory;
    let mockDispatch;
    const mockCartItems = [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        }
    ];

    beforeEach(() => {
        mockHistory = {
            push: jest.fn()
        };
        mockDispatch = jest.fn();

        const mockProps = {
            cartItems: mockCartItems,
            history: mockHistory,
            dispatch: mockDispatch
        };

        wrapper = shallow(<CartDropdown { ...mockProps } />);
    });

    // Rener the cart dropdown.
    it('should render CartDropdown component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    // Handle button click.
    it('should call history.push when button is clicked', () => {
        wrapper.find('CartDropdownButton').simulate('click');
        expect(mockHistory.push).toHaveBeenCalled();
        expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden());
    });

    // Display the correct number of items.
    it('should render an equal number of CartItem components as the cartItems prop', () => {
        expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length);
    });

    // Display the empty message.
    it('should render EmptyMessageContainer if cartItems is empty', () => {
        const mockProps = {
            cartItems: [],
            dispatch: mockDispatch,
            history: mockHistory,
        };
        const newWrapper = shallow(<CartDropdown { ...mockProps } />);
        expect(newWrapper.exists('EmptyMessageContainer')).toBe(true);
    });
});
