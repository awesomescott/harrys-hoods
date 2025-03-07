import React from 'react';
import { shallow } from 'enzyme';

// Components
import { Header } from './header.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

describe('Heaader component', () => {
    let wrapper;
    let mockSignOutStart;

    beforeEach(() => {
        mockSignOutStart = jest.fn();

        const mockProps = {
            hidden: true,
            currentUser: {
                uid: '123',
            },
            signOutStart: mockSignOutStart,
        };

        wrapper = shallow(<Header { ...mockProps } />);
    });

    // Render the component.
    it('should render the Header component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    // Sign out.
    describe('if current user is present', () => {

        // Render sign out link.
        it('should render the sign out link', () => {
            expect(
                wrapper
                    .find('OptionDiv')
                    .at(2)
                    .text()
            )
            .toBe('SIGN OUT');
        });

        // Handle sign out.
        it('should call the signOutStart method when the link is clicked', () => {
            wrapper
                .find('OptionDiv')
                .at(2)
                .simulate('click')

            expect(mockSignOutStart).toHaveBeenCalled();
        });
    });

    // Sign in.
    describe('if current user is null', () => {
        
        // Render sign in link.
        it('should render the sign in link', () => {
            const mockNewProps = {
                hidden: true,
                currentUser: null,
                signOutStart: mockSignOutStart,
            };

            const newWrapper = shallow(<Header { ...mockNewProps } />);

            expect(
                newWrapper
                    .find('OptionDiv')
                    .at(2)
                    .text()
            )
            .toBe('SIGN IN');
        });

        // Hide cart dropdown.
        it('should not render CartDropdown', () => {
            expect(wrapper.exists(CartDropdown)).toBe(false);
        });
    });

    describe('if hidden is false', () => {
        it('should render CartDropdown', () => {
            const mockProps = {
                hidden: false,
                currentUser: null,
                signOutStart: mockSignOutStart
            };

            const newWrapper = shallow(<Header {...mockProps} />);

            expect(newWrapper.exists(CartDropdown)).toBe(true);
        });
    });
});
