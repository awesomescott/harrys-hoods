import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

// Component
import { ShopPage } from './shop.component';

export const createMockStore = ({ state, reducers }) => {
    const store = createStore(combineReducers(reducers), state);

    return {
        ...store,
        persistor: {
            persist: () => null,
        },
    };
};

describe('ShopPage', () => {
    let wrapper;
    let mockFetchCollectionsStart;
    let store;

    beforeEach(() => {
        const mockReducer = (
            state = {
                isFetching: true,
            },
            action,
        ) => state;

        const mockState = {
            shop: {
                isFetching: true,
            },
        };

        mockFetchCollectionsStart = jest.fn();

        store = createMockStore({
            state: mockState,
            reducers: { shop: mockReducer },
        });

        const mockMatch = {
            path: '',
        };

        const mockProps = {
            match: mockMatch,
            fetchCollectionsStart: mockFetchCollectionsStart
        };

        wrapper = mount(
            <BrowserRouter>
                <Provider store={ store }>
                    <ShopPage { ...mockProps } />
                </Provider>
            </BrowserRouter>
        );
    });

    // Render the component.
    it('should render the ShopPage component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    // Fetch collections.
    it('should fetch collections', () => {
        expect(mockFetchCollectionsStart).toHaveBeenCalled();
    });
});
