import React, { Component } from 'react';

// Styles
import {
    ErrorImageContainer,
    ErrorImageOverlay,
    ErrorImageSubtext,
    ErrorImageText,
} from './error-boundary.styles'

/**
 * Handle failed lazy loaded component.
 */
class ErrorBoundary extends Component {
    constructor() {
        super();

        this.state = {
            hasErrored: false,
        };
    };

    static getDerivedStateFromError(error) {
        // Process the error.
        return { hasErrored: true };
    };

    componentDidCatch(error, info) {
        console.log('error', error, 'info', info);
    };

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/O0DCcQy.png' />
                    <ErrorImageText>Oops! Something went wrong.</ErrorImageText>
                    <ErrorImageSubtext>
                        BTW, have you ever noticed how &lt;3 looks like someone dropped their ice cream cone? Weird.
                    </ErrorImageSubtext>
                </ErrorImageOverlay>
            );
        }

        return this.props.children;
    };
};

export default ErrorBoundary;
