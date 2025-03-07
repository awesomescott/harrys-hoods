import React from 'react';
import { shallow } from 'enzyme';

// Component
import CartItem from './cart-item.component';

// Render the component
it('should render the CartItem component', () => {
    const mockItem = {
        imageUrl: 'www.testImage.com',
        name: 'hats',
        price: 10,
        quantity: 2,
    };

    expect(shallow(<CartItem item={ mockItem } />)).toMatchSnapshot();
});
