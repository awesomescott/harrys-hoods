import React from 'react';

// Components
import Spinner from '../spinner/spinner.component';

/**
 * HOC to display a spinner while data is loading.
 * @param {Component} WrappedComponent - component to display once data is loaded.
 */
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading
        ? <Spinner />
        : <WrappedComponent { ...otherProps } />
};

export default WithSpinner;
